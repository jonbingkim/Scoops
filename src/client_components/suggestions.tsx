import { useEffect, useState } from "react";
import axios from "axios";
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

  useEffect(() => {
    // You can add any side effects related to `profane` here if needed
  }, [profane]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newStr = '';
    for (let i = 0; i < suggestion.length; i++) {
      const char = suggestion[i];
      newStr += map[char] || char;
    }
    console.log(newStr);

    try {
      const res = await axios.get<boolean>(
        `https://www.purgomalum.com/service/containsprofanity?text=${newStr}`
      );
      console.log(res.data);
      if (res.data === false) {
        console.log("hello!");
      } else {
        console.log("what the heck");
        setProfane(true);
      }
    } catch (error) {
      console.error("Error checking profanity:", error);
    }
  };

  return (
    <div className="">
      {profane ? (
        <div className="flex absolute justify-center items-center bg-white bg-opacity-90">
          {[...Array(13)].map((_, index) => (
            <img key={index} src={dinkdonk} alt="dinkdonk emote" className="" />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
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
};