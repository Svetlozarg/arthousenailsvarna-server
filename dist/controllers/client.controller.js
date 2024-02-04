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
exports.deleteClient = exports.updateClient = exports.createClient = exports.getSingleClient = exports.getAllClients = void 0;
const client_model_1 = __importDefault(require("../models/client.model"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
//@desc Get all clients
//?@route GET /api/clients/all
//@access private
exports.getAllClients = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clients = yield client_model_1.default.find({});
    res.status(200).json({ success: true, data: clients });
}));
//@desc Get single client
//?@route GET /api/clients/:id
//@access private
exports.getSingleClient = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield client_model_1.default.findById(req.params.id);
    if (!client) {
        res.status(404);
        throw new Error("Client not found");
    }
    res.status(200).json({ success: true, data: client });
}));
//@desc Create a client
//!@route POST /api/clients/create
//@access private
exports.createClient = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, phone_number } = req.body;
    if (!first_name || !last_name || !phone_number) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const client = new client_model_1.default({
        first_name,
        last_name,
        phone_number,
    });
    const createdClient = yield client.save();
    res.status(201).json({ success: true, data: createdClient });
}));
//@desc Update a client
//!@route PUT /api/clients/:id
//@access private
exports.updateClient = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, phone_number } = req.body;
    const client = yield client_model_1.default.findById(req.params.id);
    if (!client) {
        res.status(404);
        throw new Error("Client not found");
    }
    client.first_name = first_name || client.first_name;
    client.last_name = last_name || client.last_name;
    client.phone_number = phone_number || client.phone_number;
    const updatedClient = yield client.save();
    res.status(200).json({ success: true, data: updatedClient });
}));
//@desc Delete a client
//!@route DELETE /api/clients/:id
//@access private
exports.deleteClient = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield client_model_1.default.findByIdAndDelete(req.params.id);
    if (!client) {
        res.status(404);
        throw new Error("Client not found");
    }
    res.status(200).json({ success: true, message: "Client deleted" });
}));
//# sourceMappingURL=client.controller.js.map