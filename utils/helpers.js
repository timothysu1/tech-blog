module.exports = {
  format_date: (date) => {
    return `${(date).getMonth() + 1}/${(date).getDate() + 1}/${(date).getFullYear()
      }`;
  }
};
