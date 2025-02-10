const localItemServicePort = 3001;
const getServerHost = (port: number) => `http://localhost:${port}`;

const config = {
    endpoints: {
        item: {
            api: `${getServerHost(localItemServicePort)}/api/items`
        }
    }
}

export default config;