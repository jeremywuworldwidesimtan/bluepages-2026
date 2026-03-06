export function renderDate(dateString: string) {
  const date = new Date(dateString);
  const month = date.toLocaleDateString("en-US", {
    month: "2-digit",
  });
  const day = date.toLocaleDateString("en-US", {
    day: "2-digit",
  });
  const year = date.toLocaleDateString("en-US", {
    year: "numeric",
  });
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute:"2-digit",
    hour12: false
  });
  return `${month}.${day}.${year} ${time}` // dbc armenian time - my intellisense broke
}