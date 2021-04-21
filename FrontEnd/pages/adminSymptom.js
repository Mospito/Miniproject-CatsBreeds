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
                <div key={index} className="flex flex-wrap border-4 border-double border-green-900 bg-green-300  font-bold w-3/12 h-2/5 m-5  rounded-xl shadow-md">
                    <div className="h-full w-full break-all overflow-auto pl-2">
                        <a>ID: {index + 1}</a>
                        <br />
                        <a>ชื่อโรค: {item.name}</a>
                        <br />
                        <a>อาการที่ 1: {item.symptom1}</a>
                        <br />
                        <a>อาการที่ 2: {item.symptom2}</a>
                        <br />
                        <a>อาการที่ 3: {item.symptom3}</a>
                        <br />
                        <a>อาการที่ 4: {item.symptom4}</a>
                        <br />
                        <div className="flex justify-end w-full ">
                            <button onClick={() => deleteSymptom(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-5 ">Delete</button>
                            <button onClick={() => updateSymptom(item.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">Update</button>
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
        <div className="flex h-screen w-screen flex-col items-center">
            <title>AdminSymptom</title>
            <a className="border-2 border-green-900 bg-green-300 font-bold text-3xl p-2 rounded-lg mt-5">รายการโรคของแมวในระบบ</a>
            <div className="flex flex-wrap justify-evenly  w-full h-3/5 overflow-auto mt-5 ">
                {printSymtom(data.disease)}
            </div>


            <div className="flex items-center  border-4 border-green-800 border-dashed bg-green-200 rounded-xl w-1/2 h-2/4 font-bold">
          
                <div className="flex flex-col  w-full h-full  mt-5">
                    <div className="flex justify-center ">
                        <a className="border-2 border-green-900 bg-green-300 font-bold text-3xl p-2 rounded-lg">เพิ่มโรคเข้าสู่ระบบ</a>
                        <br />
                    </div>
                    
                        <span className="m-2">
                            <a>ชื่อโรค : </a>
                            <input type="text" className="border-2 border-black rounded-md shadow-md ml-5" onChange={(e) => setName(e.target.value)} />
                        </span>
                        <span className="m-2">
                            <a>อาการที่ 1 : </a>
                            <input type="text" className="border-2 border-black rounded-md shadow-md" onChange={(e) => setSymtom1(e.target.value)} />
                        </span>
                        <span className="m-2">
                            <a>อาการที่ 2 : </a>
                            <input type="text" className="border-2 border-black rounded-md shadow-md" onChange={(e) => setSymtom2(e.target.value)} />
                        </span>
                        <span className="m-2">
                            <a>อาการที่ 3 : </a>
                            <input type="text" className="border-2 border-black rounded-md shadow-md" onChange={(e) => setSymtom3(e.target.value)} />
                        </span>
                        <span className="m-2">
                            <a>อาการที่ 4 : </a>
                            <input type="text" className="border-2 border-black rounded-md shadow-md" onChange={(e) => setSymtom4(e.target.value)} />
                        </span>
                        <div className="flex justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-28"
                                onClick={() =>
                                    addSymptom(name, symptom1, symptom2, symptom3, symptom4)
                                }>
                                ตกลง!
                        </button>
                        </div>
                 

                </div>
                
            </div>
           
            <div className='w-screen -mt-8'>
                <Footer />
            </div>
        </div>
    )
}

export default withAuth(adminSymptom)


export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}