import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import css from "./App.module.css";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedGood = localStorage.getItem("good");
    const savedNeutral = localStorage.getItem("neutral");
    const savedBad = localStorage.getItem("bad");
    return {
      good: savedGood ? parseInt(savedGood, 10) : 0,
      neutral: savedNeutral ? parseInt(savedNeutral, 10) : 0,
      bad: savedBad ? parseInt(savedBad, 10) : 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("good", feedback.good);
  }, [feedback.good]);
  useEffect(() => {
    localStorage.setItem("neutral", feedback.neutral);
  }, [feedback.neutral]);
  useEffect(() => {
    localStorage.setItem("bad", feedback.bad);
  }, [feedback.bad]);

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = `${Math.round((feedback.good / total) * 100)}%`;
  const updateFeedback = (feedbackType) => {
    console.log("click", feedbackType);
    if (feedbackType === "good") {
      setFeedback({ ...feedback, good: feedback["good"] + 1 });
    }
    if (feedbackType === "neutral") {
      setFeedback({ ...feedback, neutral: feedback["neutral"] + 1 });
    }
    if (feedbackType === "bad") {
      setFeedback({ ...feedback, bad: feedback["bad"] + 1 });
    }
    if (feedbackType === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    }
  };
  return (
    <div className={css.feedbackBox}>
      <Description />
      <Options updateFeedback={updateFeedback} showReset={total > 0} />
      {total === 0 && <Notification />}
      {total > 0 && (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positive={positive}
        />
      )}
    </div>
  );
};

export default App;
