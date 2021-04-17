import  { useState, useEffect } from "react";
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

  const search = async (name) => {

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
                <li className={className} key={suggestion} onClick={onClick}>
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
       Find:
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <button value={input} onClick={() => search(input)}>Find!</button>

      {renderAutocomplete()}

    </>
  );
}

export default Autocomplete;