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

    const registerForm = () => (
        <div >
            <div>
                Username:
            </div>
            <div>
                <input type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    className='border-2 border-black'
                />
            </div>
            <div>
                Email:
            </div>
            <div>
                <input type="email"
                    name="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className='border-2 border-black' />
            </div>
            <div>
                Password:
            </div>
            <div>
                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    className='border-2 border-black'/>
            </div>

        </div>
    )

    return (
        <div >
            <title>SignUp</title>

            <h1>Register</h1>
            <div><b>Token:</b> {token.substring(0, 15)}...
        <button
                    onClick={() => { navigator.clipboard.writeText(token) }}>
                    Copy token
        </button>
            </div>
            <br />
    Status:  {status}
            <br /><br />
            <div >
                {registerForm()}
            </div>
            <Link href="/signIn">
                <button className="borer-2 borer-red-500">Test</button>
            </Link>

            <div>
                <button onClick={register} className='border-2 border-black'>Register</button>
            </div>
            <div className='w-screen -mt-8'>
                <Footer />
            </div>
        </div>
    )
}

export default signUp

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}