"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useCookies } from "@/hooks/useCookies";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import {
  getTokenExpirationDate,
  JwtDecode,
  verifyTokenExpirationTime,
} from "@/utils/jwt";
import { User } from "@/types/generic";
import { useUserStore } from "@/stores/user";
import { useRedirectTo } from "@/hooks/useRedirectTo";

type AuthContextProps = {
  isAuthenticated: boolean;
  onAuthenticated: (token: string) => void;
  logout: () => void;
  isLoading: boolean;
  user: User;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setCookie, getCookie, invalidateCookie } = useCookies();
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useUserStore();
  const redirectTo = useRedirectTo();

  const clearUser = useCallback(() => {
    if (user !== null) {
      setUser(null);
    }
  }, [setUser, user]);

  const verifyToken = useCallback(() => {
    const token = getCookie<string>("token");
    if (token) {
      try {
        const decoded = jwtDecode<JwtDecode<User>>(token);
        const isTokenValid = verifyTokenExpirationTime(decoded);
        if (isTokenValid) {
          if (user === null) {
            setUser(buildUser(decoded));
          }
          return;
        }
        throw new Error("Token is not valid");
      } catch {
        clearUser();
      } finally {
        setIsLoading(false);
      }
    } else {
      clearUser();
      setIsLoading(false);
    }
  }, [clearUser, getCookie, setUser, user]);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  const onAuthenticated = useCallback(
    (token: string) => {
      try {
        const decoded = jwtDecode<JwtDecode<User>>(token);
        const isTokenValid = verifyTokenExpirationTime(decoded);
        if (isTokenValid) {
          if (user === null) {
            setUser(buildUser(decoded));
            setCookie("token", token, getTokenExpirationDate(decoded.exp));
            if (redirectTo) redirect(redirectTo);
            return;
          }
        }
        throw new Error("Token is not valid");
      } catch {
        clearUser();
      } finally {
        setIsLoading(false);
      }
    },
    [clearUser, redirectTo, setCookie, setUser, user]
  );

  function buildUser(decoded: JwtDecode<User>) {
    return {
      userId: decoded.userId,
      username: decoded.username,
      name: decoded.name,
      email: decoded.email,
      emailVerified: decoded.emailVerified,
      receiveEmails: decoded.receiveEmails,
      avatar: decoded.avatar,
      isPublic: decoded.isPublic,
      isEnabled: decoded.isEnabled,
      createdAt: decoded.createdAt,
      updatedAt: decoded.updatedAt,
    };
  }

  const logout = useCallback(() => {
    invalidateCookie("token");
    clearUser();
    redirect("/sign-in");
  }, [clearUser, invalidateCookie]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        onAuthenticated,
        logout,
        isLoading,
        user: user!,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
