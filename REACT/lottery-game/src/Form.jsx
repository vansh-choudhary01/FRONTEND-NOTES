import { useState } from "react"

export default function Form() {
    let [formData, setForm] = useState({
        fullName : "",
        username : "",
        password : "",
    })

    function handleForm(event) {
        setForm((currData) => {
            return {...currData, [event.target.name] : event.target.value} ;
        })
    }

    function handleSubmit(event) {
        console.log(formData)
        event.preventDefault();
        setForm({
            fullName : "",
            username : "",
            password : "",
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Name</label>
                <input type="text" placeholder="Enter your full name" name="fullName" id="fullName" value={formData.fullName} onChange={handleForm}/><br /><br />
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Enter username" name="username" id="username" value={formData.username} onChange={handleForm}/><br /><br />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter password" name="password" id="password" value={formData.password} onChange={handleForm}/><br /><br />
                <button>Submit</button>
            </form>
        </>
    )
}