const RestaurantSchema = require('../models/restaurantSchema')

async function addNewRestaurant (req, res) {
  try {
    const newRestaurantBody = req.body
    const newRestaurant = new RestaurantSchema(newRestaurantBody)

    await newRestaurant.save()

    // or

    // const newRestaurant = await RestaurantSchema.create(newRestaurantBody);

    res.status(201).json({
      message: 'Restaurant added sucessfully',
      Restaurant: newRestaurant
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getRestaurant = async (_, res) => {
  try {
    const lstRestaurant = await RestaurantSchema.find({})

    res.status(200).json({
      message: 'List of Restaurant Results',
      Restaurant: lstRestaurant
    })
  } catch (err) {
    res.status(422).json({
      message: 'Error while getting Restaurant list',
      error: err.message
    })
  }
}

module.exports = { addNewRestaurant, getRestaurant }
