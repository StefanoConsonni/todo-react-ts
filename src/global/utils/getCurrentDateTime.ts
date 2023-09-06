export function getCurrentDateTime(): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  // Convert hours to 12-hour format
  if (hours > 12) {
    hours -= 12;
  }
  const formattedDate = `${month} ${day} ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
  return formattedDate;
}
