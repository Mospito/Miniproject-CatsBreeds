import { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from '../components/footer'

const URL = `http://localhost/api/login`
const SignIn = ({ token }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')
    const [ischeck, setIscheck] = useState('')

    const login = async (req, res) => {
        try {
            let result = await axios.post(URL,
                { username, password, ischeck },
                { withCredentials: true })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.status + ': ' + result.data.user.username)
        }
        catch (e) {
            console.log('error: ', JSON.stringify(e.response))
            setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
        }
    }

    const loginForm = () => (
        <div >
            <div>
                Username:
            </div>
            <div>
                <input type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    className='border-2 border-red-600'
                />
            </div>
            <div>
                Password:
            </div>
            <div>
                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className='border-2 border-red-600'
                />
            </div>
        </div>
    )

    const copyText = () => {
        navigator.clipboard.writeText(token)
    }

    return (

        <div className="flex fixed justify-center items-center border-2 border-red-600 h-screen w-screen">
            <title>Login</title>

            <div className='flex flex-col justify-center items-center border-2 border-black font-semibold h-3/5 w-96 -mt-8'>
                <div className='flex flex-col items-center justify-start '>
                    <h1>Login</h1>
                    <div><b>Token:</b> {token.substring(0, 15)}...
                        <button onClick={copyText}> Copy token </button>
                    </div>
                </div>

                <br />
                <div>
                    Status:  {status}
                    check: {ischeck}
                </div>
                <br />
                {loginForm()}

                <div>
                    <input type="checkbox"
                        name="IsRememberMe"
                        onChange={(e) => setIscheck(e.target.value)}
                        className='border-2 border-red-600'
                    />Remember me!
                    <br /><br />
                </div>

                <div>

                    <button onClick={login} className='border-2 border-red-600'>Login</button>
                </div>
            </div>

        </div>

    )




}
export default SignIn

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}