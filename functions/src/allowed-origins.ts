import * as cors from "cors";

const whitelist = [
  "https://che-fdd-assignment.web.app",
  "https://che-fdd-assignment.firebaseapp.com",
  "https://fdd.che-ict.nl",
  "http://localhost:3000",
];

const corsOptions: cors.CorsOptions = {
  methods: "POST",
  origin: (origin, callback) => {
    if (whitelist.includes(String(origin))) {
      callback(null, true);
      return;
    }

    callback(new Error("Not allowed by CORS"));
  },
};

export default cors(corsOptions);
