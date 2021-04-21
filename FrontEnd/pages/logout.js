import { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from '../components/footer'

const URL = `http://localhost/api/logout`

const logout = ({ token }) => {

    const [status, setStatus] = useState('')

    useEffect(() => {
        logout()
    }, [])

    const logout = async () => {
        console.log('remove token: ', token)
        let result = await axios.get(URL, { withCredentials: true })
        setStatus("Logout successful")
    }

    return (

        <div className='flex fixed flex-col justify-start items-center h-screen w-screen'>
            <title>LogOut</title>
            <div  className = 'flex justify-center items-center w-1/2 h-3/4'>
                <div className='flex flex-col justify-center items-center font-bold text-green-800 mt-12 animate-bounce'>
                    <h1 className='text-6xl uppercase tracking-wider'>Logout</h1>
                    <h2 className='text-4xl tracking-wider mt-8'> {status}  </h2>
                </div>
            </div>


            <div className='w-screen'>
                <Footer />
            </div>

        </div>

    )
}


export default logout
