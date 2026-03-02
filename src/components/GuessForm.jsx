import { motion } from "motion/react";

export default function GuessForm({
  guess,
  setGuess,
  handleSubmit,
  increase
}) {
  return (
    <form onSubmit={handleSubmit} className="modern-form">
      <div className="input-wrapper">
        <input
          className="form-input"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          type="text"
        />
        <motion.button
          className="submit-button"
          type="submit"
          onClick={increase}
          whileHover={{ scale: 1.2 }}
        >
          ➤
        </motion.button>
      </div>
    </form>
  );
}