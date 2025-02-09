import { AxiosResponse } from "axios";
import { ServerError } from "../error/applicationError";

export const handleErrors = (response: AxiosResponse) => {
    if (response.status < 200 || response.status >= 300) {
        throw new ServerError(
            `Failed to retrieve data from the server, ${response.statusText}`,
            response.status
        );
    }
    return response;
};

export const json = (response: AxiosResponse) => response.data;