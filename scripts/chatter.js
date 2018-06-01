module.exports = robot => {
  robot.hear(/johnny/i, res => {
    res.send('yes, I am johnny5')
  })
}
