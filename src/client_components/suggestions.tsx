import { ReactEventHandler, useState } from "react"
import axios from 'axios'

const mappers = {
  
}
export const Suggestion = () => {
  const [suggestion, setSuggestion] = useState("")

  const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const  res = await axios.get(`https://www.purgomalum.com/service/containsprofanity?text=${suggestion}`)
    console.log(res.data)
    if (res.data === false) {
      console.log('hello!')
    } else {
      console.log('what the heck')
    }
    
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Suggest here!" value={suggestion} onChange={(e)=> setSuggestion(e.target.value)}></input>
        <button type='submit'>submit</button>
      </form>
      
    </div>
  )
}