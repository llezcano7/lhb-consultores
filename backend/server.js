import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'

// Carga las variables del archivo .env
dotenv.config()

const app = express()

// Middlewares
app.use(cors({ origin: 'http://localhost:5173' })) // origen de tu Vite
app.use(express.json()) // para poder leer el body en formato JSON

// Configuración del transporter de email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Ruta del formulario de contacto
app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body

  // Validación básica
  if (!name || !email || !company ||!message) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' })
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_DEST,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h3>Nuevo mensaje desde el formulario</h3>
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

// Levantar el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))