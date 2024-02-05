import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  event_id: string;
  title: string;
  start: Date;
  end: Date;
  client_id: string;
  treatment: string;
  note: string;
  createdAt: Date;
  updatedAt: Date;
}

const eventSchema = new Schema(
  {
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
      required: true,
    },
  },
  { timestamps: true }
);

const Event = models.Event || model<IEvent>("Event", eventSchema);
export default Event;
