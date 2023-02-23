import React, { useEffect, useState } from "react"
import axios from "axios"

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const changeHandler = (e) => {
        let { name, value } = e.target
            setUser({
                ...user,
                [name]: value
            })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/login`, user, { withCredentials: true })
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response))
    }

    return (
            <form onSubmit={submitHandler}>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={changeHandler} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={changeHandler} />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Login</button>
                </div>
                <div>
                    <div>Don't have an account? <Link to="/register">Register Here</Link></div>
                </div>
            </form>
    )
}
export default Login