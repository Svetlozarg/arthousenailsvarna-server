import Client from "../models/client.model";
import expressAsyncHandler from "express-async-handler";

//@desc Get all clients
//?@route GET /api/clients/all
//@access private
export const getAllClients = expressAsyncHandler(async (req, res) => {
  const clients = await Client.find({});
  res.status(200).json({ success: true, data: clients });
});

//@desc Get single client
//?@route GET /api/clients/:id
//@access private
export const getSingleClient = expressAsyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id);
  if (!client) {
    res.status(404);
    throw new Error("Client not found");
  }
  res.status(200).json({ success: true, data: client });
});

//@desc Create a client
//!@route POST /api/clients/create
//@access private
export const createClient = expressAsyncHandler(async (req, res) => {
  const { first_name, last_name, phone_number } = req.body;

  if (!first_name || !last_name || !phone_number) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const client = new Client({
    first_name,
    last_name,
    phone_number,
  });

  const createdClient = await client.save();

  res.status(201).json({ success: true, data: createdClient });
});

//@desc Update a client
//!@route PUT /api/clients/:id
//@access private
export const updateClient = expressAsyncHandler(async (req, res) => {
  const { first_name, last_name, phone_number } = req.body;

  const client = await Client.findById(req.params.id);

  if (!client) {
    res.status(404);
    throw new Error("Client not found");
  }

  client.first_name = first_name || client.first_name;
  client.last_name = last_name || client.last_name;
  client.phone_number = phone_number || client.phone_number;

  const updatedClient = await client.save();

  res.status(200).json({ success: true, data: updatedClient });
});

//@desc Delete a client
//!@route DELETE /api/clients/:id
//@access private
export const deleteClient = expressAsyncHandler(async (req, res) => {
  const client = await Client.findByIdAndDelete(req.params.id);

  if (!client) {
    res.status(404);
    throw new Error("Client not found");
  }

  res.status(200).json({ success: true, message: "Client deleted" });
});
