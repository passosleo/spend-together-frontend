import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { CustomAxiosError, Params, RouteName } from "../types";
import { HOST, routes } from "../router";
import { useCookies } from "@/hooks/useCookies";
import { mountUrl } from "@/utils/url";
import { config } from "@/config";
import { redirect } from "next/navigation";

export type RequestAxiosProps<
  PayloadType = unknown,
  ParamsType = Params,
  QueryType = Params
> = {
  config?: AxiosRequestConfig;
  routeName: RouteName;
  payload?: PayloadType;
  withAuth?: boolean;
  params?: ParamsType;
  query?: QueryType;
};

export function useMiddleware() {
  const { getCookie, invalidateCookie } = useCookies();

  function setAxiosAuthorization(request: AxiosInstance) {
    const token = getCookie("token");
    if (token) {
      request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }

  async function requestAxios<
    PayloadType = unknown,
    ParamsType = Params,
    QueryType = Params,
    ResponseType = unknown
  >({
    config = {},
    routeName,
    payload,
    params,
    query,
  }: RequestAxiosProps<PayloadType, ParamsType, QueryType>) {
    const { method, uri, listenHeaders } = routes[routeName] as {
      listenHeaders?: string[];
      method: string;
      uri: string;
    };

    const request = Axios.create({
      ...config,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
        ...((config?.headers ?? {}) as Record<string, string>),
      },
    });
    const urlWithParams = mountUrl(uri, HOST, params, query);

    if (!!listenHeaders && listenHeaders.includes("Authorization"))
      setAxiosAuthorization(request);

    switch (method) {
      case "GET":
        return request.get<ResponseType>(urlWithParams);
      case "POST":
        return request.post<ResponseType>(urlWithParams, payload);
      case "PUT":
        return request.put<ResponseType>(urlWithParams, payload);
      case "PATCH":
        return request.patch<ResponseType>(urlWithParams, payload);
      case "DELETE":
        return request.delete<ResponseType>(urlWithParams);
      default:
        return request.get<ResponseType>(urlWithParams);
    }
  }

  function handleAxiosError(error: AxiosError) {
    const messageError = config.messages.response.error.default;
    const typedError = error as CustomAxiosError;
    const responseData = typedError.response?.data;

    const responseError = (responseData && responseData.error) as string;

    const descriptionError =
      responseError && typeof responseError === "string"
        ? responseError
        : messageError;

    //Handle UI error here
    // toast.error(descriptionError);
    alert(descriptionError);

    if (error.response?.status === 401) {
      handleUnauthorized();
    }

    return { descriptionError };
  }

  function handleUnauthorized() {
    invalidateCookie("token");
    redirect("/sign-in");
  }

  return { requestAxios, handleAxiosError, setAxiosAuthorization };
}
