const Note = require('../../models/note.js');

async function create(req, res) {
    const note = await Note.create({
        text: req.body.text,
        user: req.user._id
    });
    res.json(note);
}

async function getNote(req, res) {
    const note = await Note.find({ user: req.user._id });
    res.json(note);
}

module.exports = {
    create,
    getNote
}
