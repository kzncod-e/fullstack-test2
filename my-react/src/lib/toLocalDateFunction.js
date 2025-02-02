export function ToLocalDate(date) {
  const result = new Date(date);
  const formattedDate = result.toISOString().split("T")[0]; // Extract YYYY-MM-DD
  return formattedDate;
}
