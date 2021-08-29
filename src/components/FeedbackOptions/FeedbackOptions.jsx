/** @format */

import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, plusFeedback }) => {
  return (
    <>
      <div className={s.conteiner}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={plusFeedback(option)}
            name={option}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

export default FeedbackOptions;
