const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Multer для загрузки файла
const upload = multer({ dest: 'uploads/' });

// POST /api/quick-order
app.post('/api/quick-order', upload.single('file'), async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    const file = req.file;

    // Настройка транспорта (SMTP)
    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru', // или другой SMTP
      port: 465,
      secure: true,
      auth: {
        user: 'dobriakovil@yandex.ru', // например, eis-admin@bk.ru
        pass: 'xwcssliodqjepilz'
      }
    });

    // Формируем письмо
    const mailOptions = {
      from: 'dobriakovil@yandex.ru',
      to: 'eis-admin@bk.ru',
      subject: 'Быстрый заказ с сайта',
      text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nСообщение: ${message}`,
      attachments: file ? [{
        filename: file.originalname,
        path: file.path
      }] : []
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Ошибка отправки письма' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
}); 