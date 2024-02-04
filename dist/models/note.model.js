"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
    client_id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const Note = mongoose_1.models.Note || (0, mongoose_1.model)("Note", noteSchema);
exports.default = Note;
//# sourceMappingURL=note.model.js.map