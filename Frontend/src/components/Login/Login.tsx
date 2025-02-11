import { FC, useState } from "react";
import { login } from "./functions";

const Login: FC = () => {
    // transfer text to translate!
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <>
        <h1>התחברות</h1>
        <form onSubmit={(e) => { e.preventDefault(); login(email, password); }}>
            <input type="text" placeholder="דוא&quot;ל" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="סיסמה" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">התחבר</button>
        </form>
    </>
}
export default Login;