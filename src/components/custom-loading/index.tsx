import { twMerge } from "tailwind-merge";
import { CustomLoader } from "../custom-loader";

export type LoadingProps = React.ComponentProps<"div"> & {
  isLoading: boolean | undefined;
  children?: React.ReactNode;
  disableScroll?: boolean;
  fullScreen?: boolean;
};

export function CustomLoading({
  isLoading,
  children,
  disableScroll,
  fullScreen,
  ...props
}: LoadingProps) {
  return (
    <div
      {...props}
      style={{ position: "relative", height: "calc(100vh - 168px)" }}
    >
      {isLoading && (
        <div
          className={twMerge(
            "absolute inset-0 items-center justify-center bg-primary-foreground z-10",
            fullScreen ? "flex fixed" : "flex bg-opacity-75"
          )}
          style={{
            width: "100%",
            height: isLoading && disableScroll ? "100vh" : "100%",
          }}
        >
          <CustomLoader />
        </div>
      )}
      {children}
    </div>
  );
}
