import {useEffect, useState} from "react";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
    }, [])


    function handleSubmit(event) {

        console.log(email + ':' + password)

        event.preventDefault();
    }
    return (
        <div>
            <h1 className="text-4xl font-bold">Register</h1>
            <div className="mt-4">
                <form className="flex flex-col gap-2 w-1/3" onSubmit={handleSubmit}>
                    <input type="email" className="border border-gray-600 p-1" placeholder="email" onChange={ (e) => setEmail(e.target.value) } />
                    <input type="password" className="border border-gray-600 p-1" placeholder="password" onChange={ (e) => setPassword(e.target.value) } />
                    <button className="bg-gray-600 text-white p-1">Register</button>
                </form>
            </div>
        </div>
    );
}export default Register;