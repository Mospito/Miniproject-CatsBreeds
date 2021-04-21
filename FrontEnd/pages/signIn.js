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
        <div className='flex flex-col w-4/5 -mt-2'>
            <div>
                Username:
            </div>
            <div>
                <input className='w-full h-8 rounded-md border-2 border-green-800 ring-2 ring-green-500 mt-2 pl-2 focus:outline-none' 
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='mt-4'>
                Password:
            </div>
            <div>
                <input className='w-full h-8 rounded-md border-2 border-green-800 ring-2 ring-green-500 mt-2 pl-2 focus:outline-none' 
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </div>
    )

    const copyText = () => {
        navigator.clipboard.writeText(token)
    }

    return (

        <div className="flex fixed flex-col justify-center items-center h-screen w-screen">
            <title>Login</title>
            <div className='flex flex-col justify-start items-center border-4 border-green-900 ring-4 ring-green-400 
                bg-gradient-to-t from-green-300 to-green-100 font-semibold h-2/3 w-96 mt-19 rounded-xl shadow-xl'>
                <div className='flex flex-col items-center justify-start mt-6'>
                    <h1 className='text-3xl uppercase tracking-wider'>Sign in</h1>
                    <div className='mt-4'>
                        <button className='border-2 border-green-600 bg-green-400 hover:bg-green-200 rounded-md h-8 w-28 '
                            onClick={copyText}> Copy token </button>
                    </div>
                </div>
                <div className='flex flex-col justify-start w-4/5 mt-4 text-red-800'>
                    Status:  {status}
                </div>
                <div className='flex flex-col justify-start w-4/5 mt-2 text-red-800'>
                    Check: {ischeck}
                </div>



                <br />
                {loginForm()}

                <div className='w-4/5'>
                    <input className='h-4 w-4 mt-5' type="checkbox"
                        name="IsRememberMe"
                        onChange={(e) => setIscheck(e.target.value)}
                    /> <a className='ml-2'>Remember me!</a>
                    <br /><br />
                </div>

                <div>
                    <button className='h-10 w-28 border-4 border-green-900 rounded-lg bg-green-500 hover:bg-green-300 
                        font-bold uppercase focus:outline-none' 
                        onClick={login}>Sign in</button>
                </div>
            </div>
            <div className='w-screen'>
                <Footer />
            </div>

        </div>

    )




}
export default SignIn

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}