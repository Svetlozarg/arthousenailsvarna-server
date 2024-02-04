import { Document, Schema, model, models } from "mongoose";

export interface INote extends Document {
  _id: string;
  client_id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema({}, { timestamps: true });

const Note = models.Note || model<INote>("Note", noteSchema);
export default Note;
