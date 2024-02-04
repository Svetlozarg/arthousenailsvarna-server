import express from "express";
import { validateToken } from "../middleware/validateTokenHandler";
import {
  createNote,
  deleteNote,
  getAllNotesForClient,
  updateNote,
} from "../controllers/note.controller";

const router = express.Router();

router.get("/:client_id/all", validateToken, getAllNotesForClient);
router.post("/create", validateToken, createNote);
router.put("/:id", validateToken, updateNote);
router.delete("/:id", validateToken, deleteNote);

export default router;
