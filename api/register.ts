import axios from 'axios';

export default async function handler(req: any, res: any) {
  // Настройка CORS (опционально, если клиент и API на одном домене Vercel, это не обязательно, но полезно)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, surname, role, phone, attending } = req.body;

  if (!name || !surname || !role || !attending) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram credentials not configured');
    return res.status(200).json({ success: true, message: 'Simulated success (Telegram not configured)' });
  }

  const message = `Жаңы катталуу!

Аты: ${name}
Фамилиясы: ${surname}
Курс/Мугалим: ${role}
Телефон: ${phone || '-'}
Катышабы: ${attending === 'yes' ? 'Ооба/Evet' : 'Жок/Hayır'}`;

  try {
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
    });
    res.status(200).json({ success: true, message: 'Registration sent via Telegram' });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    res.status(500).json({ success: false, message: 'Failed to send to Telegram' });
  }
}
