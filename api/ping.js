
let last = Date.now();

export default function handler(req, res) {
  if (req.method === 'POST') {
    last = Date.now();
    return res.status(200).json({ status: 'updated' });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
