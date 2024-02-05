"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
    event_id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: String,
        required: true,
    },
    client_id: {
        type: String,
        required: true,
    },
    treatment: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: false,
    },
}, { timestamps: true });
const Event = mongoose_1.models.Event || (0, mongoose_1.model)("Event", eventSchema);
exports.default = Event;
//# sourceMappingURL=event.model.js.map