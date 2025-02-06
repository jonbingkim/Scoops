import { useEffect, useState } from "react";
import axios from "axios";
import dinkdonk from '../imgs/dinkdonk-emote.gif'

interface Map {
[key: string]:string
}

const map:Map=  {
  '4':'a',
  '3' : 'e',
  '0': "o",
  '1': 'i',
  '@': 'a'
}


export const Suggestion = () => {
  const [suggestion, setSuggestion] = useState("");
  const [profane, setProfane] = useState(false)

  useEffect(() => {

  },[profane])

  const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newStr = ''
    for (let i = 0; i < suggestion.length; i++) {
      const char = suggestion[i]
      newStr += map[char] || char
    }
    console.log(newStr)
    
    
    const res = await axios.get(
      `https://www.purgomalum.com/service/containsprofanity?text=${newStr}`
    );
    console.log(res.data);
    if (res.data === false) {
      console.log("hello!");
    } else {
      console.log("what the heck");
      setProfane(true)
      window.alert('WHA TARE YOU DOING????')
      //think of using modal 
    }
  };

  return (
    <div> 
      {profane ? (
        <div className="flex absolute overflow">
          <div>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          </div>
          <div>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          </div>
          <div>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          </div>
          <div>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          <img src={dinkdonk}/>
          </div>
      
     

          </div>
      ) : (
        <div>
        Brown Bread
          </div>
      )}
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handlesubmit}
        className="flex flex-col gap-4 items-center"
      >
        <input 
          type="text"
          placeholder="Flavor Suggestion Here!"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};