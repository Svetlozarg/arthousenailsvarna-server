import express from "express";
import { validateToken } from "../middleware/validateTokenHandler";
import {
  createClient,
  deleteClient,
  getAllClients,
  getSingleClient,
  updateClient,
} from "../controllers/client.controller";

const router = express.Router();

router.get("/all", validateToken, getAllClients);
router.get("/:id", validateToken, getSingleClient);
router.post("/create", validateToken, createClient);
router.put("/:id", validateToken, updateClient);
router.delete("/:id", validateToken, deleteClient);

export default router;
