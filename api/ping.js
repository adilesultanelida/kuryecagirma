export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  // Dosyaya yazma kısmı kaldırıldı
  res.status(200).json({ success: true });
}
