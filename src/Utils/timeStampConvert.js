// Add this function for Time Stam convert in miniutes
const timeStampConvert = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Add a leading zero if seconds is a single digit
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${formattedSeconds}`;
};
export default timeStampConvert;
