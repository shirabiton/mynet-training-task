import { NavigateOptions } from "react-router-dom";
import { navigateToHome } from "../../utils/globalFunctions";

export const handleClick = (
  navigate: (to: string | Location, options?: NavigateOptions) => void,
  fallback?: boolean,
  resetFunc?: () => void
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  fallback && resetFunc ? resetFunc() : navigateToHome(navigate);
};
