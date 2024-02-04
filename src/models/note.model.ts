import { Document, Schema, model, models } from "mongoose";

export interface INote extends Document {
  _id: string;
  client_id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema(
  {
    client_id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Note = models.Note || model<INote>("Note", noteSchema);
export default Note;
