export const navigateToHome = (navigate: (to: string, options?: { replace?: boolean; state?: unknown }) => void) => {
    navigate('/items');
}