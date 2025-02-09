const localItemServicePort = 3000;
const getServerHost = (port: number) => `http://localhost:${port}`;

const config = {
    endpoints: {
        item: {
            api: `${getServerHost(localItemServicePort)}/api/items`
        }
    }
}

export default config;