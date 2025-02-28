module.exports = {
  format_date: (date) => {
      return new Date(date).toLocaleDateString();
  },
  format_plural: (word, amount) => {
      return amount !== 1 ? `${word}s` : word;
  }
};