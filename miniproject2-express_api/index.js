const app = require("./src/app").default; // ✅ Ensure correct import

const PORT = process.env.PORT || 3000;

// ✅ Start the server using `app.js`
app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  } else {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  }
});
