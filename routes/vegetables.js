const express = require('express');

const { admin, adminOrUser } = require('../middlewares/auth');

const {
  createOrUpdateVegetableValidator,
} = require('../middlewares/validators/vegetables');

const {
  getAllVegetables,
  getOneVegetable,
  createVegetable,
  updateVegetable,
  deleteVegetable,
} = require('../controllers/vegetables');

const router = express.Router();

router.route('/').get(adminOrUser, getAllVegetables);

module.exports = router;
