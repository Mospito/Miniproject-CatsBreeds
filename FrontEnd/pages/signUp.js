import axios from 'axios'
import { useState } from 'react'
import Footer from '../components/footer'
import Link from 'next/link'

const URL = `http://localhost/api`
const signUp = ({ token }) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${URL}/register`,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }
    }

    const copyText = () => {
        navigator.clipboard.writeText(token)
    }


    const registerForm = () => (
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
                E-mail:
            </div>
            <div>
                <input className='w-full h-8 rounded-md border-2 border-green-800 ring-2 ring-green-500 mt-2 pl-2 focus:outline-none'
                    type="text"
                    name="username"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
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

    return (
        <div className="flex fixed flex-col justify-center items-center h-screen w-screen">
            <title>Login</title>
            <div className='flex flex-col justify-start items-center border-4 border-green-900 ring-4 ring-green-400 
            bg-gradient-to-t from-green-300 to-green-100 font-semibold h-2/3 w-96 mt-19 rounded-xl shadow-xl'>
                <div className='flex flex-col items-center justify-start mt-6'>
                    <h1 className='text-3xl uppercase tracking-wider'>Sign up</h1>
                    <div className='mt-4'>
                        <button className='border-2 border-green-600 bg-green-400 hover:bg-green-200 rounded-md h-8 w-28 '
                            onClick={copyText}> Copy token </button>
                    </div>
                </div>
                <div className='flex flex-col justify-start w-4/5 mt-4 text-red-800'>
                    Status:  {status}
                </div>

                <br />
                {registerForm()}

                <div>
                    <button className='h-10 w-28 mt-6 border-4 border-green-900 rounded-lg bg-green-500 hover:bg-green-300 
                    font-bold uppercase focus:outline-none'
                        onClick={register}>Sign up</button>
                </div>
            </div>
            <div className='w-screen'>
                <Footer />
            </div>

        </div>
    )
}

export default signUp

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}