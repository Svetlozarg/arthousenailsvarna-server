"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const clientSchema = new mongoose_1.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    phone_number: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });
const Client = mongoose_1.models.Client || (0, mongoose_1.model)("Client", clientSchema);
exports.default = Client;
//# sourceMappingURL=client.model.js.map