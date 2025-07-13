
let last = Date.now();

export default function handler(_, res) {
  res.status(200).json({ time: last });
}
