import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import Footer from '../components/footer'

let nameOfDisease = " "
let nameDis = []
let arr1 = []
let arr2 = []
let arr3 = []
let arr4 = []

const URL = `http://localhost/api/disease`
const symptom = () => {

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

    const [check1, setCheck1] = useState('')
    const [check2, setCheck2] = useState('')
    const [check3, setCheck3] = useState('')
    const [check4, setCheck4] = useState('')

    useEffect(() => {
        getDisease()
        
    }, []);


    const getDisease = async () => {
        let disesaseCat = await axios.get(URL)
        setHealths(disesaseCat.data)
        nameDis = (healths.disease.map((item) => item.name))
        arr1 = (healths.disease.map((item) => item.symptom1))
        arr2 = (healths.disease.map((item) => item.symptom2))
        arr3 = (healths.disease.map((item) => item.symptom3))
        arr4 = (healths.disease.map((item) => item.symptom4))
        
    }

    const PrintCheckBoxData = () => {

        let tmp
        return (healths.disease.map((item,index) =>
        (
            <div className=" w-1/2 h-full" key={index}>
                <input type="checkbox" onChange={(e) => setCheck1(e.target.value)} value={item.symptom1} /> {item.symptom1}
                <br />
                <input type="checkbox" onChange={(e) => setCheck2(e.target.value)} value={item.symptom2} /> {item.symptom2}
                <br />
                <input type="checkbox" onChange={(e) => setCheck3(e.target.value)} value={item.symptom3} /> {item.symptom3}
                <br />
                <input type="checkbox" onChange={(e) => setCheck4(e.target.value)} value={item.symptom4} /> {item.symptom4}
                {/* {new Date().toLocaleString()} */}
                <br />
            </div>
        )


        ))
    }

    const FindDisease = (dis1, dis2, dis3, dis4) => {
 
        let tmp
        let i = 0
 
        nameDis = (healths.disease.map((item) => item.name))
        arr1 = (healths.disease.map((item) => item.symptom1))
        arr2 = (healths.disease.map((item) => item.symptom2))
        arr3 = (healths.disease.map((item) => item.symptom3))
        arr4 = (healths.disease.map((item) => item.symptom4))

        for (i = 0; i < nameDis.length; i++) {
            if (arr1[i] === dis1 && arr2[i] === dis2 && arr3[i] === dis3 || arr4 === dis4) {
                nameOfDisease = nameDis[i]
                console.log(nameOfDisease);
                console.log(i);
            }
            else {
                nameOfDisease = "ขออภัยไม่สามารถตรวจเจอโรคในระบบ / กรุณาติ๊กเลือกตามอาการข้างต้น"
            }
            
        }
        

        // healths.disease.map((item) => {
        //     if (item.symptom1 === dis1 && item.symptom2 === dis2 && item.symptom3 === dis3 && item.symptom4 === dis4) {
        //         tmp = item.name
        //     }
        //     else {
        //         tmp = "ไม่เจอโรคในระบบ"
        //     }
        // })
        // nameOfDisease = tmp
    }


    const printDisease = () => {

        return (
            healths.disease.map((item, index) => (
                <li key={index}>
                    {item.name} | {item.symptom1}

                </li>
            ))
        )
    }




    return (
        
        <div className="flex flex-col h-screen w-screen justify-start items-center  fixed mt-5">
            {/* <div className='flex flex-col h-screen justify-between items-center'> */}
            <h1 className='font-bold text-3xl'>ยินดีต้อนรับเข้าสู่ระบบตรวจสอบโรคของแมว</h1>
            {/* {printDisease()} */}
            <a className='font-bold mt-10'>แมวของท่านมีอาการดังนี้หรือไม่ โปรดติ๊กเลือกตามอาการข้างต้น</a>
            <div className="flex flex-col items-center  w-2/4 h-2/4 overflow-auto mt-5">
                {PrintCheckBoxData()}
                {FindDisease(check1, check2, check3, check4)}
               
            </div>
            
            <span className="mt-5"><a className='font-bold ' >แมวของคุณเป็นโรค :</a>  {nameOfDisease}</span>

            <div className='w-screen -mt-3'>
                <Footer />
            </div>
        </div>

    )
}

export default symptom