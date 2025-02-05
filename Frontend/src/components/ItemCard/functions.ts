export const handleItemClick = (index: number, elementRef: HTMLDivElement | null,
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
        navigate(`/items/${index}`);
        setIsAnimated(false);
    }, 100);
}