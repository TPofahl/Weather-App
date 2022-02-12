// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function weather(req, res) {
  const { zip } = req.query;
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.API_KEY}&units=imperial`
  );
  const weather = await result.json();
  return res.status(200).json({ weather });
}
