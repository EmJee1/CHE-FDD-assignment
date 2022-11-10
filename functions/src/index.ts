import * as functions from "firebase-functions";
import * as bodyParser from "body-parser";
import * as admin from "firebase-admin";
import * as express from "express";
import { validate as validateEmail } from "email-validator";
import corsHandler from "./allowed-origins";

admin.initializeApp();
const app = express();
const firestore = admin.firestore();

app.use(corsHandler);
app.use(bodyParser.json());

app.post("/", async (req, res) => {
  const { email, name, subject, body } = req.body;

  if (!email || !name || !subject || !body) {
    res.status(400).json({ error: "Not all required fields were filled" });
    return;
  }

  if (!validateEmail(email)) {
    res.status(400).json({ error: "Invalid email address" });
    return;
  }

  try {
    await firestore.collection("messages").add({ email, name, subject, body });
  } catch (err) {
    functions.logger.error(err);
    res.status(500).json({ error: "Unexpected server error" });
    return;
  }

  res.sendStatus(204);
});

export const contact = functions.https.onRequest(app);
