var validator = require('validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const etapeSchema = new Schema({

	question: {
		type: String,
		required: true,
		minlength: [ 2, 'La question est trop courte' ],
		maxlength: [ 1000, 'Le pseudo est trop long' ]
	},

	propositions: [{
		type: String,
		required: true,
		minlength: [ 2, 'La proposition est trop courte' ],
		maxlength: [ 1000, 'La proposition est trop longue' ]
	]},
	
	date_creation: {
		type: Date,
		required: true,
		default: Date.now
	}
	
});

module.exports = mongoose.model('Joueur', joueurSchema);