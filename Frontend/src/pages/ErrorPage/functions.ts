import { NavigateOptions } from "react-router-dom";
import { ROUTES_NAMES } from "../../utils/globalConsts";

export const handleClick = (
  navigate: (to: string | Location, options?: NavigateOptions) => void,
  fallback?: boolean,
  resetFunc?: () => void
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  fallback && resetFunc ? resetFunc() : navigate(ROUTES_NAMES.ITEM_LIST);
};
