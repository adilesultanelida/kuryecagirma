let callActive = false;

export default function handler(req, res) {
  if (req.method === 'POST') {
    callActive = true;
    return res.status(200).json({ success: true, message: 'Kurye çağrıldı' });
  }
  if (req.method === 'DELETE') {
    callActive = false;
    return res.status(200).json({ success: true, message: 'Çağrı iptal edildi' });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
