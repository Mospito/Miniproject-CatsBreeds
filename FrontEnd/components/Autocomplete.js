import { useState, useEffect } from "react";
import axios from 'axios'

const URL = `https://api.thecatapi.com/v1/breeds`
const imgURL = `https://api.thecatapi.com/v1/images`

const Autocomplete = (props) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");
  const [cats, setCats] = useState([]);
  const [image, setImage] = useState({});
  const [find, setFind] = useState("");
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

  const search =  (name) => {

    cats.map((item, index) => {
      if (name === item.name) {
        setRefimg(item.reference_image_id)
        getImage(refimg)
        setNameCat(item.name)
        setTemperament(item.temperament)
        setOrigin(item.origin)
        setDescription(item.description)
        setLife_span(item.life_span)

      }

    })

  }

  const onChange = e => {
    const { suggestions } = props;
    const input = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    );

    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(e.currentTarget.value)
    setFind(input)

  };

  const onClick = e => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText)

  };

  const onKeyDown = e => {
    if (e.keyCode === 13) { // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active])
    }
    else if (e.keyCode === 38) { // up arrow
      return (active === 0) ? null : setActive(active - 1);
    }
    else if (e.keyCode === 40) { // down arrow
      return (active - 1 === filtered.length) ? null : setActive(active + 1);
    }
  };

  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <ul className="autocomplete">
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li className={className} key={suggestion} onClick={onClick} className='border-b-2 list-disc border-dashed border-black '>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="no-autocomplete">
            <em>Not found</em>
          </div>
        );
      }
    }
    return <></>;
  }

  return (
    <>

      <div className='flex flex-col justify-center items-center '>

        <div className=' w-4/12 flex justify-around items-center mt-10'>
          <a className='font-bold text-2xl '>Search :  </a>
          <input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={input}
            className='border-2 border-green-600 rounded pl-2 w-80'
            placeholder=" Cat Breeds"
          />

          <button value={input} onClick={() => search(input)} className=' p-1 w-20 rounded transition duration-500 ease-in-out bg-green-500 hover:bg-green-200 transform hover:-translate-y-1 hover:scale-110'>Find!</button>
        </div>


        <duv className=" ">
          {renderAutocomplete()}
        </duv>

      </div>

      <div className='flex justify-center  items-center  '>
        <img src={image.url} className='rounded-2xl shadow-2xl m-5 max-w-4xl h-80 ' />
        <div className='flex w-2/4 mt-5 p-4 ml-5 items-center justify-start border-8 border-green-600 border-double'>
          <br />
          <div>
            <a className='text-lg font-semibold'>name: </a>{nameCat}
            <br />
            <a className='text-lg font-semibold'>temperament: </a>{temperament}
            <br />
            <a className='text-lg font-semibold'>origin: </a>{origin}
            <br />
            <a className='text-lg font-semibold '>description: </a>{description}
            <br />
            <a className='text-lg font-semibold'>life span: </a>{life_span} years
            <br />
          </div>

        </div>

      </div>





    </>
  );
}

export default Autocomplete;