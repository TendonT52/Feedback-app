import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas?",
    },
    {
      id: 2,
      rating: 4,
      text: "Consectetur adipisicing elit. Corrupti doloremque ipsam at quasi.",
    },
    {
      id: 3,
      rating: 6,
      text: "Adipisicing elit. Corrupti doloremque ipsam at quasi.",
    },
    {
      id: 4,
      rating: 7,
      text: "Adipisicing elit. Corrupti doloremque ipsam at quasi.",
    },
    {
      id: 5,
      rating: 8,
      text: "Adipisicing elit. Corrupti doloremque ipsam at quasi.",
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id == id
          ? {
              ...item,
              ...updItem,
            }
          : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
