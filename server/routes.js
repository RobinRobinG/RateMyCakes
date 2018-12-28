const controller = require('./controllers')
module.exports = function(app){
	//GET: Retrieve all cakes
    app.get('/cakes', controller.showall);
    //GET: Retrieve a cake by ID
    app.get('/cakes/:id', controller.show);
	//POST: add a cake
    app.post('/cakes/new', controller.addcake);
    //POST: Update a cake by ID
    app.post('/cakes/:id', controller.updatecake);
    //POST: add comment
    app.post('/cakes/:id/review', controller.addreview);
    //POST: update comment
    app.post('/cakes/review/:id', controller.updatereview);
    //POST: delete cake
    app.delete('/cakes/:id', controller.deletecake);
    //POST: delete comment
    app.delete('/cakes/review/:id', controller.deletereview);
    return app;
}