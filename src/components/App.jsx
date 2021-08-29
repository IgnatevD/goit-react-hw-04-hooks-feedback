/** @format */

import { useState } from "react";
import PropTypes from "prop-types";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const plusFeedback = (e) => {
    const { name } = e.target;
    switch (name) {
      case "good":
        setGood((prev) => prev + 1);
        break;

      case "neutral":
        setNeutral((prev) => prev + 1);
        break;

      case "bad":
        setBad((prev) => prev + 1);
        break;

      default:
        return;
    }
  };

  const total = () => good + neutral + bad;
  const positivePercentage = () =>
    (Number.parseInt(good) / Number.parseInt(total())) * 100;

  return (
    <>
      <h1>Отзывы о компании</h1>
      <Section title={"Пожалуйста оставте свой отзыв"}>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          plusFeedback={() => plusFeedback}
        />
      </Section>
      <Section title={"Статистика отзывов"}>
        {total() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={`${Number.parseInt(positivePercentage())} %`}
          />
        ) : (
          <Notification message={"Нет отзывов о компании"} />
        )}
      </Section>
    </>
  );
}

App.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
};
