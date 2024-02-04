import Note from "../models/note.model";
import expressAsyncHandler from "express-async-handler";

//@desc Get all notes for a client
//?@route GET /api/notes/:client_id/all
//@access private
export const getAllNotesForClient = expressAsyncHandler(async (req, res) => {
  const notes = await Note.find({ client_id: req.params.client_id });
  res.status(200).json({ success: true, data: notes });
});

//@desc Create a note
//!@route POST /api/notes/create
//@access private
export const createNote = expressAsyncHandler(async (req, res) => {
  const { client_id, title } = req.body;

  if (!client_id || !title) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const note = new Note({
    client_id,
    title,
  });

  const createdNote = await note.save();

  res.status(201).json({ success: true, data: createdNote });
});

//@desc Update a note
//!@route PUT /api/notes/:id
//@access private
export const updateNote = expressAsyncHandler(async (req, res) => {
  const { title } = req.body;

  const note = await Note.findById(req.params.id);

  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }

  note.title = title || note.title;

  const updatedNote = await note.save();

  res.status(200).json({ success: true, data: updatedNote });
});

//@desc Delete a note
//!@route DELETE /api/notes/:id
//@access private
export const deleteNote = expressAsyncHandler(async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id);

  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }

  res.status(200).json({ success: true, message: "Note deleted" });
});
