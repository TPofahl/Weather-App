// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function weather(req, res) {
  const { zip } = req.query;
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=75934f641709c7ec4d78ed3c6a128469&units=imperial`
  );
  const weather = await result.json();
    console.log("AAAAA", weather);
  return res.status(200).json({ weather });
}
