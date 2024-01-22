const formatDate = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();
  const date = dateTime.getDate();
  return `${month}/${date}/${year}`;
};

export default formatDate;
