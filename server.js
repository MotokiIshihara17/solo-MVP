const path = require("path");
const express = require("express");
const { buildApp } = require("./front/src/app");

const PORT = process.env.PORT || 3000;
const app = buildApp();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
