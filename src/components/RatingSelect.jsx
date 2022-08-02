import { useState, Context, useEffect, useContext } from "react"

import FeedbackContext from "../context/FeedbackContext"

function RatingSelect({select}) {

  const [selected, setSelected] = useState(5)
  const { feedbackEdit } = useContext(FeedbackContext)

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  return (
    <ul className="rating">{[...Array(10)].map((_, i) => (
        <li key={i}>
          <input type="radio" name="rating" id={`num${i+1}`} value={i+1} onChange={handleChange} checked={selected=== i+1}/>
          <label htmlFor={`num${i+1}`}>{i+1}</label>
        </li>
      ))
    }
    </ul>
    // <ul>
    //     <li>
    //       <input type="radio" name="rating" id={`num${1}`} value={1} onChange={handleChange} />
    //       <label htmlFor={`num${1}`}>{1}</label>
    //     </li>
    // </ul>
  )
}

export default RatingSelect