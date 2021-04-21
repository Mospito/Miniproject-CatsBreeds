import axios from 'axios'
import { useState, useEffect } from 'react'
import useSWR, { mutate } from 'swr'
import Footer from '../components/footer'
import withAuth from '../components/Auth'

const URL = `http://localhost/api/disease`
const fetcher = (url) => axios.get(url).then(res => res.data)


const adminSymptom = ({ token }) => {

    const [healths, setHealths] = useState({
        "disease": [
            {
                "id": 1,
                "name": "โรคหวัดแมว",
                "symptom1": "อาการเซื่องซึม",
                "symptom2": "หายใจลำบาก ",
                "symptom3": "มีไข้ ไอ จาม มีน้ำมูก",
                "symptom4": "เบื่ออาหาร"
            },
        ]
    });

    const [health, setHealth] = useState([]);
    const [name, setName] = useState('')
    const [symptom1, setSymtom1] = useState('')
    const [symptom2, setSymtom2] = useState('')
    const [symptom3, setSymtom3] = useState('')
    const [symptom4, setSymtom4] = useState('')



    const { data, error } = useSWR(URL, fetcher)
    if (!data) {
        return <div>Loading...</div>
    }
    console.log('Home', data);

    const printSymtom = (healths) => {
        return (
            healths.map((item, index) => (
                <div key={index} className="flex flex-wrap border-4 border-double border-green-900 bg-green-300 w-5/12 h-2/5 m-5  rounded-xl shadow-md">
                    <div className="h-full w-full break-all overflow-auto pl-2">
                        <a className = 'font-bold'>ID:</a> {index + 1}
                        <br />
                        <a className = 'font-bold'>ชื่อโรค:</a> {item.name}
                        <br />
                        <a className = 'font-bold'>อาการที่ 1:</a> {item.symptom1}
                        <br />
                        <a className = 'font-bold'>อาการที่ 2:</a> {item.symptom2}
                        <br />
                        <a className = 'font-bold'>อาการที่ 3:</a> {item.symptom3}
                        <br />
                        <a className = 'font-bold'>อาการที่ 4:</a> {item.symptom4}
                        <br />
                        <div className="flex justify-end w-full ">
                            <button onClick={() => deleteSymptom(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-5 mb-2 focus:outline-none">Delete</button>
                            <button onClick={() => updateSymptom(item.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2 focus:outline-none">Update</button>
                        </div>

                    </div>

                </div>
            ))
        )
    }



    const addSymptom = async (name, symptom1, symptom2, symptom3, symptom4) => {

        await axios.post(URL, { name, symptom1, symptom2, symptom3, symptom4 })
        mutate(URL)
    }

    const deleteSymptom = async (id) => {

        await axios.delete(`${URL}/${id}`)
        mutate(URL)

    }

    const updateSymptom = async (id) => {

        await axios.put(`${URL}/${id}`, { name, symptom1, symptom2, symptom3, symptom4 })
        mutate(URL)
    }





    return (
        <div className="flex fixed h-screen w-screen flex-col items-center">
            <title>AdminSymptom</title>
            <a className="border-2 border-green-900 bg-green-300 font-bold text-3xl p-2 rounded-lg mt-5">รายการโรคของแมวในระบบ</a>
            <div className='flex flex-row justify-around w-full h-3/5 mt-8'>
                <div className="flex flex-wrap justify-evenly w-3/5 h-5/6 overflow-auto mt-8 border-4 border-green-800 border-dashed bg-green-200 rounded-xl ">
                    {printSymtom(data.disease)}
                </div>
                <div className="flex justify-center items-center border-4 border-green-800 border-dashed bg-green-200 rounded-xl w-1/4 h-5/6 mt-8 font-bold">
                    <div className="flex flex-col justify-start items-center w-11/12">
                        <div className="flex">
                            <a className="border-2 border-green-900 bg-green-300 font-bold text-3xl p-2 rounded-lg">เพิ่มโรคเข้าสู่ระบบ</a>
                            <br />
                        </div>

                        <span className="grid grid-cols-4 mt-8 w-full">
                            <a>ชื่อโรค : </a>
                            <input type="text" className="grid col-span-3 pl-2 border-2 border-black rounded-md shadow-md focus:outline-none" onChange={(e) => setName(e.target.value)} />
                        </span>
                        <span className="grid grid-cols-4 mt-2 w-full">
                            <a>อาการที่ 1 : </a>
                            <input type="text" className="grid col-span-3 pl-2 border-2 border-black rounded-md shadow-md focus:outline-none" onChange={(e) => setSymtom1(e.target.value)} />
                        </span>
                        <span className="grid grid-cols-4 mt-2 w-full">
                            <a>อาการที่ 2 : </a>
                            <input type="text" className="grid col-span-3 pl-2 border-2 border-black rounded-md shadow-md focus:outline-none" onChange={(e) => setSymtom2(e.target.value)} />
                        </span>
                        <span className="grid grid-cols-4 mt-2 w-full">
                            <a>อาการที่ 3 : </a>
                            <input type="text" className="grid col-span-3 pl-2 border-2 border-black rounded-md shadow-md focus:outline-none" onChange={(e) => setSymtom3(e.target.value)} />
                        </span>
                        <span className="grid grid-cols-4 mt-2 w-full">
                            <a>อาการที่ 4 : </a>
                            <input type="text" className="grid col-span-3 pl-2 border-2 border-black rounded-md shadow-md focus:outline-none" onChange={(e) => setSymtom4(e.target.value)} />
                        </span>
                        <div className="flex justify-center">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-28 mt-8 focus:outline-none"
                                onClick={() =>
                                    addSymptom(name, symptom1, symptom2, symptom3, symptom4)
                                }>
                                ตกลง!
                        </button>
                        </div>


                    </div>
                </div>
            </div>

            <div className='w-screen'>
                <Footer />
            </div>
        </div>
    )
}

export default withAuth(adminSymptom)


export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}