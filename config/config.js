module.exports = {
  url: process.env.ROOT_URL,
  port: process.env.PORT || 80,
  originUrl: process.env.ROOT_URL,
  mongoUrl: process.env.MONGO_URL,
  ISDEV: process.env.NODE_ENV !== 'production',
  emailer: {
    from: "Chat App <no-reply@chatapp.com>",
    transport: {
      service: 'gmail',
      auth: {
        user: 'roniecosmi@gmail.com',
        pass: 'cosmi2017'
      }
    }
  }
}
