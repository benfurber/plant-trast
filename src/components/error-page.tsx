import { useRouteError } from "react-router-dom";

import { Body } from ".";

interface IError {
  statusText?: string;
  message?: string;
}

export const ErrorPage = () => {
  const error = useRouteError() as IError;

  return (
    <Body>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </Body>
  );
}
