import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { validate as validateEmail } from "email-validator";

admin.initializeApp();

const firestore = admin.firestore();

export const contact = functions.https.onRequest(async (request, response) => {
  const { email, name, subject, body } = request.body;

  if (!email || !name || !subject || !body) {
    response.status(400).json({ error: "Not all required fields were filled" });
    return;
  }

  if (!validateEmail(email)) {
    response.status(400).json({ error: "Invalid email address" });
  }

  try {
    await firestore.collection("messages").add({ email, name, subject, body });
  } catch (err) {
    functions.logger.error(err);
    response.status(500).json({ error: "Unexpected server error" });
    return;
  }

  response.sendStatus(204);
});
