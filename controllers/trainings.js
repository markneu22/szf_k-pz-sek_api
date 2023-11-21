const Training = require('../models/training')
// @desc   Get all trainings
// @route  GET /api/trainings
// @access Public
exports.getTrainings = async(req, res, next) => {
     try {
          const trainings = await Training.find()
          res.status(200).json({ success: true, msg: "Show all trainings", data: trainings });
     } catch (error) {
          res.status(400).json({success:false, msg: error});
     }
  
};
// @desc   Get single training
// @route  GET /api/trainings/:id
// @access Public
exports.getTraining = async(req, res, next) => {
     try {
          const training_data = Training.findById(req.id)
          res.status(200).json({ success: true, msg: "Get training by ID", data: training_data});
          
     } catch (error) {
          res.status(400).json({success:false, msg: error.message});
     }
};
// @desc   Create new training
// @route  POST /api/trainings
// @access Private
exports.createTraining = async (req, res, next) => {
  try {
    const training = await Training.create(req.body);
    res.status(201).json({ success: true, data: training });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc   Update training
// @route  PUT /api/trainings/:id
// @access Private
exports.updateTraining = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update training ${req.params.id}` });
};
// @desc   Delete training
// @route  DELETE /api/trainings/:id
// @access Private
exports.deleteTraining = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete training ${req.params.id}` });
};
