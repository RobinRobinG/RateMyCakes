const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/dashboard',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

// const UserSchema = new mongoose.Schema({
//   firstName: {type: String, required: [true, 'First name is required'], minlength: 3},
//   lastName: {type: String, required: [true, 'Last name is required'], minlength: 3},
//   profile_pic: { type: String, default: null},
// }, {timestamps: true});

const ReviewSchema = new mongoose.Schema({
  rating: {type: Number, required: [true, 'Rating is required'], min: 0, max: 5 },
  comment: {type: String, required: [true, 'Comment is required'], minlength: 10 },
}, {timestamps: true});

const CakeSchema = new mongoose.Schema({
  type: {type: String, required: [true, 'Type is required'] },
  baker: {type: String, required: [true, 'Baker is required'] },
  cake_pic: {type: String, default: null},
  reviews: [ReviewSchema]
}, {timestamps: true});

CakeSchema.plugin(uniqueValidator);

const cake = mongoose.model('Cake', CakeSchema);
const review = mongoose.model('Review', ReviewSchema);

module.exports = {cake, review};


