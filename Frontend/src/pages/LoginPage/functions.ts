import axios from "axios";
import { User } from "../../../../Libs/src/types/DB/user.types";

export const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string, setCurrentUser: (user: User | null) => void) => {
    e.preventDefault();
    return await login(email, password, setCurrentUser);
}

export const login = async (email: string, password: string, setCurrentUser: (user: User | null) => void) => {

    console.log("in login");

    const baseUrl = import.meta.env.VITE_USER_BASE_URL || "http://localhost:3002";

    const userResponse = await axios.get(`${baseUrl}/users/email/${email}`);

    const userByEmail: User | null = userResponse.data;

    if (!userByEmail) {
        console.log("email does not exist");
    }
    else {
        if (userByEmail.password === password) {
            console.log("connected! user:", userByEmail);
            console.log("before---");
            const signinResponse = await axios.get(`${baseUrl}/users/signin/${userByEmail._id}`);
            console.log("after---");
            console.log("sign in response:", signinResponse.data);
            setCurrentUser(userByEmail);
            return signinResponse.data;
        }
        else {
            console.log("password is wrong");
        }
    }
}