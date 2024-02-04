"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.createNote = exports.getAllNotesForClient = void 0;
const note_model_1 = __importDefault(require("../models/note.model"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
//@desc Get all notes for a client
//?@route GET /api/notes/:client_id/all
//@access private
exports.getAllNotesForClient = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield note_model_1.default.find({ client_id: req.params.client_id });
    res.status(200).json({ success: true, data: notes });
}));
//@desc Create a note
//!@route POST /api/notes/create
//@access private
exports.createNote = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { client_id, title } = req.body;
    if (!client_id || !title) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const note = new note_model_1.default({
        client_id,
        title,
    });
    const createdNote = yield note.save();
    res.status(201).json({ success: true, data: createdNote });
}));
//@desc Update a note
//!@route PUT /api/notes/:id
//@access private
exports.updateNote = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.body;
    const note = yield note_model_1.default.findById(req.params.id);
    if (!note) {
        res.status(404);
        throw new Error("Note not found");
    }
    note.title = title || note.title;
    const updatedNote = yield note.save();
    res.status(200).json({ success: true, data: updatedNote });
}));
//@desc Delete a note
//!@route DELETE /api/notes/:id
//@access private
exports.deleteNote = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield note_model_1.default.findByIdAndDelete(req.params.id);
    if (!note) {
        res.status(404);
        throw new Error("Note not found");
    }
    res.status(200).json({ success: true, message: "Note deleted" });
}));
//# sourceMappingURL=note.controller.js.map