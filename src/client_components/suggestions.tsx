import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header";
import dinkdonk from '../imgs/dinkdonk-emote.gif';

interface Map {
  [key: string]: string;
}

const map: Map = {
  '4': 'a',
  '3': 'e',
  '0': 'o',
  '1': 'i',
  '@': 'a'
};

export const Suggestion = () => {
  const [suggestion, setSuggestion] = useState("");
  const [profane, setProfane] = useState(false);
  const [flavors, setFlavors] = useState([])
  useEffect(() => {
    const flavorData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/');
        console.log(res)
        const flavors = res.data.flavors
        setFlavors(flavors)
      } catch (err) {
        console.log('error found')
      }
    }
    flavorData()
  }, [flavors.length]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newStr = '';
    for (let i = 0; i < suggestion.length; i++) {
      const char = suggestion[i];
      newStr += map[char] || char;
    }
    console.log(newStr);

    try {
      // trying to see fi i need to use this either if im using filtering with perspective and openAI 
      const res = await axios.get<boolean>(
        `https://www.purgomalum.com/service/containsprofanity?text=${newStr}`
      );

      if (res.data === false) {
       await axios.post('http://localhost:3000/suggestion' ,{
          'text' : newStr
        })
       console.log('heey from post')
      } else {
    
        setProfane(true);
      }
    } catch (error) {
      console.error("Error checking profanity:", error);
    }
  };

  return (
    <div className="">
      {profane ? (
        <div className="items-center text-center">
          <div className="flex justify-center items-center bg-white bg-opacity-90">
          {[...Array(13)].map((_, index) => (
            <img key={index} src={dinkdonk} alt="dinkdonk emote" className="" />
          ))}
          </div>
          <div>
            excuse me what do you think you're doing?
          </div>

       
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
            {flavors.length > 0 ? (
              flavors.map((flavor, idx) => (
                <div key={idx}>{flavor}</div>
              ))
            ) : (
              <div>No flavors available</div>
            )}

          <form
            onSubmit={handleSubmit}
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
      )}
    </div>
  );
  // return (
  //   <div>
  //   <Header/>
  //   <h3 className="text-center justify-center items-center text-xl">COMING SOON!</h3>
  //   </div>
  // )
};