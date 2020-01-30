const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NoteSchema = new Schema({
    note_id: {
        type: String,
        required: true
    },
    content: {
        type: Number,
        required: true
    },
    student_id: {
        type: String,
        required: true
    },
    module_id: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Note', NoteSchema);