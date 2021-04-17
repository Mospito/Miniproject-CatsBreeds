import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Autocomplete from '../components/Autocomplete'

const URL = `https://api.thecatapi.com/v1/breeds`
const imgURL = `https://api.thecatapi.com/v1/images`

var dataAllName = []
export default function Home() {

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
        Breed: {item.name}

        <button onClick={() => getImage(item.reference_image_id)}>Get</button>


      </div>
    )))
  }

  const scandName =  () => {

    dataAllName = (cats.map((item) => item.name))

   
    // return (
    //   cats.map((item,index) => (<li>
    //     {item.name}
    //   </li>))
    // )
  }

  return (
    <div className={styles.container}>
      Hello
      {/* img: <img src={image.url} width="300" height="300" /> */}
      {/* {printCats()} */}

      {/* <div>
        <img src={image.url} width="300" height="300" />
        <br></br>
        name: {nameCat}
        <br></br>
        temperament: {temperament}
        <br></br>
        origin: {origin}
        <br></br>
        description: {description}
        <br></br>
        life span: {life_span}
        <br></br>
        Find: <input type="text" onChange={(e) => setFind(e.target.value)}  />
        <button onClick={() => search(find)}>Find!</button>
      </div> */}

      <div>
    
       {scandName()}
        <Autocomplete
          suggestions={dataAllName} 
        />
      </div>
    </div>
  )
}
