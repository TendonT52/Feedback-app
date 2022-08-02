import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

import Card from "./shared/Card";
import close from "./close.png";

function FeedbackItem({ item }) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text">{item.text}</div>
      <input
        type="image"
        className="delete-button"
        onClick={() => deleteFeedback(item.id)}
        src={close}
        width="20"
        height="20"
        alt="Close"
      />
      <button onClick={() => editFeedback(item)}>edit</button>
    </Card>
  );
}

export default FeedbackItem;
