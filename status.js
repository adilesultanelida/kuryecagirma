let callActive = false;  // Aynı değişkeni paylaşmalıyız ama serverless fonksiyonlarda bu mümkün değil.

export default function handler(req, res) {
  // Burada serverless fonksiyonlar stateless olduğundan
  // callActive değişkeni bu şekilde kalıcı olmaz.

  // Bu örnek lokal geliştirme için, deployda çalışmayabilir!

  res.status(200).json({ callActive });
}
