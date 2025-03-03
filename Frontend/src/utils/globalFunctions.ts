import { ROUTES_NAMES } from "./globalConsts";

export const navigateToHome = (
  navigate: (
    to: string,
    options?: { replace?: boolean; state?: unknown }
  ) => void
) => {
  navigate(ROUTES_NAMES.ITEM_LIST);
};
