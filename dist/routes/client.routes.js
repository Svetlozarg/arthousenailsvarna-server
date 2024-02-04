"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateTokenHandler_1 = require("../middleware/validateTokenHandler");
const client_controller_1 = require("../controllers/client.controller");
const router = express_1.default.Router();
router.get("/all", validateTokenHandler_1.validateToken, client_controller_1.getAllClients);
router.get("/:id", validateTokenHandler_1.validateToken, client_controller_1.getSingleClient);
router.post("/create", validateTokenHandler_1.validateToken, client_controller_1.createClient);
router.put("/:id", validateTokenHandler_1.validateToken, client_controller_1.updateClient);
router.delete("/:id", validateTokenHandler_1.validateToken, client_controller_1.deleteClient);
exports.default = router;
//# sourceMappingURL=client.routes.js.map