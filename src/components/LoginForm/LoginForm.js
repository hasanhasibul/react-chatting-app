import axios from 'axios';
import React, { useState } from 'react';

const LoginForm = () => {
    const  projectID="963211d1-95c7-4b3f-b361-ae10b351c7b5";

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError]=useState('');

   const authObject = {'Project-ID': projectID, 'User-Name':username, 'User-Secret': password}
    
    console.log(username,password,authObject);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await axios.get('https://api.chatengine.io/users/',{headers:authObject})
            localStorage.setItem('username',username)
            localStorage.setItem('password',password)

            window.location.reload()
            setError('') 
        } catch (error) {
            console.log(error);
            console.log(error.message);
            setError("please enter valid username and password")
        }
        
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default LoginForm;
