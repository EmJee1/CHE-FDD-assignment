export const getAllowedOrigins = () => {
  const allowedOrigins = [
    "https://che-fdd-assignment.web.app",
    "https://che-fdd-assignment.firebaseapp.com/",
  ];

  if (process.env.FUNCTIONS_EMULATOR === "true") {
    allowedOrigins.push("http://localhost:3000");
  }

  return allowedOrigins;
};
