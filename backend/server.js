import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body

  if (!name || !email || !company || !message) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' })
  }

  try {
    await transporter.sendMail({
      from: `"LHB Consultores" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DEST,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h3>Nuevo mensaje desde el formulario de la página web</h3>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Empresa:</b> ${company}</p>
        <p><b>Mensaje:</b> ${message}</p>
      `,
    })

    res.json({ success: true, message: 'Mensaje enviado correctamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error al enviar el mensaje' })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))
