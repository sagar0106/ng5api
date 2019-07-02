var mongoose = require('mongoose'),
    projectSchema = new mongoose.Schema({
        userId: { type: Number, required: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        quantity: { type: Number, required: true },
       // toDo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'toDo' }]
    });

module.exports = mongoose.model('Project', projectSchema);