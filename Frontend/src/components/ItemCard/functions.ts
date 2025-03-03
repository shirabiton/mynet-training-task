import { ROUTES_NAMES } from "../../utils/globalConsts";

export const handleItemClick = (itemId: string, elementRef: HTMLDivElement | null,
    navigate: (to: string, options?: { replace?: boolean; state?: unknown }) => void, setLeftPosition: React.Dispatch<React.SetStateAction<number>>,
    setTopPosition: React.Dispatch<React.SetStateAction<number>>, setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>) => {

    if (elementRef) {
        const rect = elementRef.getBoundingClientRect();
        setLeftPosition(rect.left);
        setTopPosition(rect.top + window.scrollY - 100);
    }
    setIsAnimated(true);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    setTimeout(() => {
        navigate(`/${ROUTES_NAMES.ITEM_LIST}/${itemId}`);
        setIsAnimated(false);
    }, 100);
}