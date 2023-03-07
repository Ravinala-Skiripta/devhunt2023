const notFound = (req,res) => res.status(404).json({ msg: 'No route matching' })

module.exports = { notFound }