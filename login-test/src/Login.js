import "./Login.css"
import { useState } from "react"

export default function Login() {

    const[value, setValue] = useState({email: "", password: ""})
    function handleEmail(event) {
        setValue({...value, email: event.target.value})
    }

    function handlePassword(event) {
        setValue({...value, password: event.target.value})
    }

    return(
        <div className="container">
            <p>Login</p>
            <input type="text" placeholder="Email" onChange={handleEmail} value={value.email}/>
            <input type="password" placeholder="Password" onChange={handlePassword} value={value.password} />
            <button>Login</button>
        </div>
    )
}