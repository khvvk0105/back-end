export default async function handler(req, res) {
  const response = await fetch("https://dev.to/api/articles/1747862");
  const data = await response.json();

  res.status(200).json(data);
}
