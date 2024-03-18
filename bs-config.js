module.exports = {
    port: 3000, // Port number for the server
    files: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.js"], // Files to watch for changes
    server: {
      baseDir: "./dist", // Root directory for the server
      index: "index.html", // Default HTML file
    },
  };