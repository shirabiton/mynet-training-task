import { FC, useContext, useState } from "react";
import { handleSubmit } from "./functions";
import UserContext from "../../contexts/UserContext";

const LoginPage: FC = () => {
    // transfer text to translate!
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setCurrentUser } = useContext(UserContext);

    return <>
        <h1>התחברות</h1>
        <form onSubmit={(e) => handleSubmit(e, email, password, setCurrentUser)}>
            <input type="text" placeholder="דוא&quot;ל" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="סיסמה" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">התחבר</button>
        </form>
    </>
}
export default LoginPage;