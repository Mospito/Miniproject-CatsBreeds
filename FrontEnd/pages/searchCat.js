import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Autocomplete from '../components/Autocomplete'
import Nav from '../components/nav'
import Footer from '../components/footer'
const URL = `https://api.thecatapi.com/v1/breeds`
const imgURL = `https://api.thecatapi.com/v1/images`

var dataAllName = []
export default function SearchCat() {

  const [cats, setCats] = useState([]);
  const [image, setImage] = useState({});
  const [find, setFind] = useState('');
  const [refimg, setRefimg] = useState('')
  const [nameCat, setNameCat] = useState('')
  const [temperament, setTemperament] = useState('')
  const [origin, setOrigin] = useState('')
  const [description, setDescription] = useState('')
  const [life_span, setLife_span] = useState('')



  useEffect(() => {
    getCats()
  }, []);

  const getImage = async (id) => {
    let imp = await axios.get(`${imgURL}/${id}`)
    setImage(imp.data)
  }

  const getCats = async () => {
    let cat = await axios.get(URL)
    setCats(cat.data)

  }

  const search = async (name) => {

    cats.map((item, index) => {
      if (name === item.name) {
        setRefimg(item.reference_image_id)
        setNameCat(item.name)
        setTemperament(item.temperament)
        setOrigin(item.origin)
        setDescription(item.description)
        setLife_span(item.life_span)
        getImage(refimg)
      }

    })

  }

  const printCats = () => {
    return (cats.map((item, index) => (
      <div>
        {/* Test: {item.name} |
        weight: {item.weight.metric}
        <img src={item.image.url} alt="" /> */}
        {/* {(item.name === "Abyssinian")?<img src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"/>:"null"} */}
        Breed: {item.weight.metric}
        <br />
        {/* Test: {item.image.url} */}
        

        <button onClick={() => getImage(item.reference_image_id)}>Get</button>


      </div>
    )))
  }

  const scandName = () => {

    dataAllName = (cats.map((item) => item.name))


    // return (
    //   cats.map((item,index) => (<li>
    //     {item.name}
    //   </li>))
    // )
  }

  return (


    <div className="flex flex-col justify-between fixed">
      <title>SearchCat</title>

      <div className=''> 



        {scandName()}
        <Autocomplete
          suggestions={dataAllName}
        />

      </div >

      <div className='w-screen -mt-3'>
          <Footer/>
        </div>
      


    </div>


  )
}
