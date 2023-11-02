import { NotFound } from "@/pages";
import { AxiosError } from "axios";
import { useRouteError } from "react-router-dom";

const ApiErrorBoundary = () => {
  const error = useRouteError();

  if (error instanceof AxiosError) {
    return <div>서버로부터 잘못된 응답을 받았습니다. ⚠️ {error?.response?.data}</div>;
  }

  return <NotFound />;
};

export default ApiErrorBoundary;