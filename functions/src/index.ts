import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import { validate as validateEmail } from "email-validator";
import corsHandler from "./allowed-origins";

admin.initializeApp();
const app = express();
const firestore = admin.firestore();

app.use(corsHandler);

app.post("/", async (req, res) => {
  let requestBody;
  try {
    requestBody = JSON.parse(req.body);
  } catch (err) {
    functions.logger.error(err);
    res.status(400).json({ error: "Invalid data" });
    return;
  }

  const { email, name, subject, body } = requestBody;

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
