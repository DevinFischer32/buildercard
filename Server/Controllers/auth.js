module.exports = {
  register: async (req, res) => {
    const { first_name, last_name, email, hash } = req.body

    console.log({ first_name, last_name, email, hash })
    res.status(200).send('Success')
  },
  login: async (req, res) => {
    const { email, password } = req.body
  },
}
