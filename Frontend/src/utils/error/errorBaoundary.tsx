import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import { navigateToHome } from "../globalFunctions";

const ErrorHandler: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const ErrorFallback = ({
    error,
    resetErrorBoundary,
  }: {
    error: Error;
    resetErrorBoundary: () => void;
  }) => {
    return (
      <ErrorPage
        fallback
        resetFunc={resetErrorBoundary}
        error={error.message}
      />
    );
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => navigateToHome(navigate)}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorHandler;
