export function formatDate(date) {
  const dateTemp = new Date(date);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
  };
  return (
    dateTemp.toLocaleDateString("en-US", options).replace(" at", ",") + " UTC"
  );
}
