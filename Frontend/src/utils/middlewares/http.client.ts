import axios from "axios";
import { handleErrors, json } from "./helpers";

const HttpClient = {
    get: async (url: string) => {
        return axios.get(url)
            .then(handleErrors)
            .then(json);
    }
}
export default HttpClient;