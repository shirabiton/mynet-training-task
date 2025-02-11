import axios from "axios";
import { User } from "../../../../Libs/src/types/DB/user.types";

export const login = async (email: string, password: string) => {

    const userResponse = await axios.get(`http://localhost:3000/users/email/${email}`);
    const userByEmail: User | null = userResponse.data;

    if (!userByEmail) {
        console.log("email does not exist");
    }
    else {
        if (userByEmail.password === password) {
            console.log("connected! user:", userByEmail);
            const signinResponse = await axios.get(`http://localhost:3000/users/signin/${userByEmail._id}`);
            return signinResponse.data;
        }
        else {
            console.log("password is wrong");
        }
    }
}