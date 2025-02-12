// const getServerHost = (port: number) => `http://localhost:${port}`;

const config = {
    endpoints: {
        item: {
            api: `${import.meta.env.VITE_ITEM_BASE_URL}/items`
        },
        user: {
            api: `${import.meta.env.VITE_USER_BASE_URL}/users`
        }
    }
}

export default config;