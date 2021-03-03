const nodemailer = require("nodemailer")
const { google } = require("googleapis")
const OAuth2 = google.auth.OAuth2

const oauth2Client = new OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
)

oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN,
})

const accessToken = oauth2Client.getAccessToken()

module.exports = async (req, res) => {
  const { name, email, message, tel } = req.body

  if (!name) res.status(400).json({ error: "El nombre es requerido" })
  if (!email)
    res.status(400).json({ error: "El correo electrónico es requerido" })
  if (!message) res.status(400).json({ error: "El mensaje es requerido" })

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: accessToken,
      expires: 1484314697598,
    },
  })

  const mailOptions = {
    from: `${email}`,
    to: `${process.env.EMAIL}`,
    subject: `Nuevo mensaje de: ${email}`,
    text: `
    ${name}:
    ${tel ? `tel: ${tel}` : ""}
    ${email ? `email: ${email}` : ""}
    ${message}
    `,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, _) => {
      if (error) {
        res
          .status(400)
          .json({
            error: `Ocurrio un problema al enviar el mensaje. Por favor intenta enviarme un correo a info@thepapermatter.com`,
          })
          .end()
        return reject()
      }

      res
        .status(201)
        .json({
          error: "",
        })
        .end()
      return resolve()
    })
  })
}
