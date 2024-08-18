import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("button-value");
    console.log(savedValues);
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return 0;
  });

  // useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("button-value", JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        feedbackValue={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          feedbackValue={totalFeedback}
          positiveValue={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
