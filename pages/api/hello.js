
export default function handler(req, res) {
  res.status(200);
  res.json({
    city: "Saransk",
    temperature: "-2",
    description: "Cloudy",
  });
}
