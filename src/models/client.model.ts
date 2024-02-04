import { Document, Schema, model, models } from "mongoose";

export interface IClient extends Document {
  _id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  createdAt: Date;
  updatedAt: Date;
}

const clientSchema = new Schema(
  {
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
  },
  { timestamps: true }
);

const Client = models.Client || model<IClient>("Client", clientSchema);
export default Client;
