const Training = require('../models/training')
const ErrorResponse = require('../utils/errorResponse')
// @desc   Get all trainings
// @route  GET /api/trainings
// @access Public
exports.getTrainings = async(req, res, next) => {
     try {
          const trainings = await Training.find()
          res.status(200).json({ success: true, msg: "Show all trainings", data: trainings });
     } catch (error) {
          next(error)
     }
  
};
// @desc   Get single training
// @route  GET /api/trainings/:id  
// @access Public
exports.getTraining = async(req, res, next) => {
     try {
          const training_data = await Training.findById(req.params.id)
          res.status(200).json({ success: true, msg: "Get training by ID", data: training_data});
          
     } catch (error) {
          next(new ErrorResponse(`Course id (${req.params.id}) not correct`, 404));
     }
};
// @desc   Create new training
// @route  POST /api/trainings
// @access Private
exports.createTraining = async (req, res, next) => {
  try {
     const training = await Training.create(req.body);
     res.status(201).json({success: true, data: training});
 } catch (error) {
     next(error);
 }
};

// @desc   Update training
// @route  PUT /api/trainings/:id
// @access Private
exports.updateTraining = async (req, res, next) => {
  
  try {
     const training = await Training.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
     //console.log(training);
     if (!training) {
         return res.status(400).json({success: false, msg: 'Not found'});
     }
     res.status(200).json({ success: true, msg: `Update training ${req.params.id}`,data: req.body});
 } catch (error) {
     next(error);
 }
};
// @desc   Delete training
// @route  DELETE /api/trainings/:id
// @access Private
exports.deleteTraining = async(req, res, next) => {
     try {
          const training = await Training.findByIdAndDelete(req.params.id);
          if (!training) {res.status(400).json({success: false, msg: 'Not found'})};
          res.status(200).json({success: true, msg: 'Document deleted'})
      } catch (error) {
          next(error);
      }
};
