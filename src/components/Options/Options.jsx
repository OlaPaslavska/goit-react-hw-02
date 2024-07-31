import css from "./Options.module.css";

const Options = ({ updateFeedback, showReset }) => {
  return (
    <div>
      <button
        type="button"
        className={css.feedbackBtn}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={css.feedbackBtn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.feedbackBtn}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {showReset && (
        <button
          type="button"
          className={css.feedbackBtn}
          onClick={() => updateFeedback("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
