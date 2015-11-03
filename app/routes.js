var Drawing = require('./models/drawing');
var path = require('path');

module.exports = function(app){
	
	/////////////////////////////
	// EACH CATEGORY HAS OWN URL
	/////////////////////////////

	app.get('/api/drawings/people', function(req, res) {

        Drawing.find({category:'people'}, 'name url', function(err, drawings) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(drawings); // return all todos in JSON format
        });
    });

    app.get('/api/drawings/food', function(req, res) {

        Drawing.find({category:'food'}, 'name url', function(err, drawings) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(drawings); // return all todos in JSON format
        });
    });

    app.get('/api/drawings/feet', function(req, res) {

        Drawing.find({category:'feet'}, 'name url', function(err, drawings) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(drawings); // return all todos in JSON format
        });
    });

    app.get('/api/drawings/form', function(req, res) {

        Drawing.find({category:'form'}, 'name url', function(err, drawings) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(drawings); // return all todos in JSON format
        });
    });

    app.get('/api/drawings/text', function(req, res) {

        Drawing.find({category:'text'}, 'name url', function(err, drawings) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(drawings); // return all todos in JSON format
        });
    });

    app.get('/api/drawings/threads', function(req, res) {

        Drawing.find({category:'threads'}, 'name url', function(err, drawings) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(drawings); // return all todos in JSON format
        });
    });

    app.get('/api/drawings/people', function(req, res) {

        Drawing.find({category:'people'}, 'name url', function(err, drawings) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(drawings); // return all todos in JSON format
        });
    });

    app.get('/api/drawings/plumes', function(req, res) {

        Drawing.find({category:'plumes'}, 'name url', function(err, drawings) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(drawings); // return all todos in JSON format
        });
    });

    app.get('/api/drawings/other', function(req, res) {

        Drawing.find({category:'other'}, 'name url', function(err, drawings) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(drawings); // return all todos in JSON format
        });
    });

    /////////////////////////////
	// Get all drawings
	/////////////////////////////

    app.get('/api/drawings', function(req, res) {

        Drawing.find({}, 'name url', function(err, drawings) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(drawings); // return all todos in JSON format
        });
    });

    /////////////////////////////
	// Get individual drawings
	/////////////////////////////

	app.get('/api/drawings/:_id', function(req, res){

		Drawing.find({_id:req.params._id}, function(err, drawing){
			if (err)
				res.send(err)

			res.json(drawing);
		});
	});

	/////////////////////////////
	// Get drawings by tag
	/////////////////////////////

	app.get('/api/drawings/tag/:tag', function(req, res){
		Drawing.find({tags:{$in:[req.params.tag]}}, function(err, drawings) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(drawings); // return all todos in JSON format
        });
	});

	/////////////////////////////////////////
	// Get drawings by searching description
	/////////////////////////////////////////

	app.get('/api/drawings/search/:search', function(req, res){

		Drawing.find({description:{$regex: req.params.search}}, function(err, drawings) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(drawings); // return all todos in JSON format
        });
	});
}