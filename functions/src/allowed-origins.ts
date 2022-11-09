import { CorsOptions } from "cors";

const whitelist = [
  "https://che-fdd-assignment.web.app",
  "https://che-fdd-assignment.firebaseapp.com/",
  "https://fdd.che-ict.nl/",
  "http://localhost:3000",
];

export const corsOptions: CorsOptions = {
  methods: "POST",
  origin: (origin, callback) => {
    if (whitelist.includes(String(origin))) {
      callback(null, true);
      return;
    }

    callback(new Error("Not allowed by CORS"));
  },
};
