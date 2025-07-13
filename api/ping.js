export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const fs = require('fs');
  fs.writeFileSync('api/ping.json.js', JSON.stringify({ time: Date.now() }));
  res.status(200).json({ success: true });
}
