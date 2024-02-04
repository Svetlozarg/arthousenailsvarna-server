"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateTokenHandler_1 = require("../middleware/validateTokenHandler");
const note_controller_1 = require("../controllers/note.controller");
const router = express_1.default.Router();
router.get("/:client_id/all", validateTokenHandler_1.validateToken, note_controller_1.getAllNotesForClient);
router.post("/create", validateTokenHandler_1.validateToken, note_controller_1.createNote);
router.put("/:id", validateTokenHandler_1.validateToken, note_controller_1.updateNote);
router.delete("/:id", validateTokenHandler_1.validateToken, note_controller_1.deleteNote);
exports.default = router;
//# sourceMappingURL=note.routes.js.map