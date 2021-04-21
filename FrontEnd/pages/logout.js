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


        <div>
            <title>LogOut</title>
            Hello Logout
            <h1>Logout</h1>
                <div>
                    <h2> {status}  </h2>
                </div>
                <div className='w-screen -mt-8'>
                <Footer />
            </div>
            
        </div>
    )
}


export default logout
