const router = require('express').Router()
const User = require('./user-model')
const bcrypt = require('bcryptjs')
const axios = require('axios')

// // verify if user exists, if so return user if not add user then return user
router.get('/user', async (req, res) => {
  try {
    const users = await Users.find(req.query)
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
})


// delete user
router.delete('/banish', (req, res) => {
  const { user_id } = req.body

  if (!user_id) {
    res.status(400).json({ message: 'Please provide user id.' })
  }

  User.deleteUser(user_id)
    .then(response => {
      console.log(res, 'res')
      res
        .status(200)
        .json({ message: 'user has been banished from this database' })
    })
    .catch(error => {
      console.log(error, 'er')
      res.status(500).json({ err: 'Could not delete user', error })
    })
})


module.exports = router