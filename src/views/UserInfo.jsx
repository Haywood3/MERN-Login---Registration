import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserInfo = () => {
    const [user, setUser] = useState()
    const [email, setEmail] = useState()

    useEffect(() => {
    axios.get(`http://localhost:8000/api/getUser`, {withCredentials: true})
        .then(res => setUser(res.data))
        .catch()
},[])

return (
    <div>UserInfo
        <h1> Email: {email}</h1>
        <h1> Username : {user && user.firstName}</h1>
    </div>
    )
}

export default UserInfo