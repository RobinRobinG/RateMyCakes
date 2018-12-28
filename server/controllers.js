const Models = require('./models.js');
const Cake = Models.cake;
const Review = Models.review;

module.exports ={

  showall: function(req, res) {
    console.log('showall hitting controller!!!');
    Cake.find({}) 
      .then (data => {console.log(data)||res.json({message: "Success! You found all the cakes, MEOW!!!!!", data:data})})
      .catch (err => {console.log(err)||res.json({message:"SAD! No Cakes for you!", error: err})}) 
  },
  show: function(req, res) {
    console.log('show hitting controller!!!');
    const id = req.params.id;
    Cake.findOne({ _id: id})
      .then (data => {console.log(data)||res.json({message: "Success! You found a cake, MEOW!!!!!", data:data})})
      .catch (err => {console.log(err)||res.json({message:"SAD! No Cake for you!", error: err})})        
  },
  addcake: function(req, res) {
    console.log('addcake hitting controller!!!');
    Cake.create(req.body)
    .then((data)=>{console.log(data)||res.json({message: "Cake added!", data: data})})
    .catch((err)=>{console.log(err)||res.json({message: "Error", error: err})})
  },
  updatecake: function(req, res){
    console.log('updatecake hitting controller!!!');
    const id = req.params.id;
    Cake.findOneAndUpdate({_id:id}, req.body)
      .then (data => {console.log(data)||res.json({message: "Cake updated", data: data})})
      .catch (err => {console.log(err)||res.json({message: "Error", error: err})})
  },
  addreview: function(req, res) {
    console.log('addreview hitting controller!!!');
    const id = req.params.id;
    Review.create(req.body)
      .then(data => {
        Cake.findByIdAndUpdate({_id :id },{$push : {reviews : data}})
            .then(data => {console.log(data)||res.json({message: "Review is added", data: data})})
            .catch(err => {console.log(err)||res.json({message: "Error", error: err})})
      })
      .catch(err => {console.log(err)||res.json({message: "Error", error: err})})
  },
  updatereview: function(req, res) {
    console.log('editreview hitting controller!!!');
    const id = req.params.id;
    Review.findByIdAndUpdate({_id :id }, {$set : {comment : req.body.comment, rating: req.body.rating}})
            .then(data => {console.log(data)||res.json({message: "Review is updated", data: data})})
            .catch(err => {console.log(err)||res.json({message: "Error", error: err})})
  },
  deletecake: function(req, res) {
    const id = req.params.id;
    Cake.findOneAndDelete({_id:id})
      .then (data => {console.log(data)||res.json({message: "RECORD DELETED", data: data})})
      .catch (err => {console.log(err)||res.json({message: "Error", error: err})})
  },
  deletereview: function(req, res) {
    const id = req.body.id;
    Review.findOneAndDelete({_id:id})
      .then (data => {console.log(data)||res.json({message: "RECORD DELETED", data: data})})
      .catch (err => {console.log(err)||res.json({message: "Error", error: err})})
  },
} //end of module.exports