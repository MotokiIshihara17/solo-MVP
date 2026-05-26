// const express = require("express");
// const knex = require("./knex");

// const { initCustomer } = require("./customer/index");

import express from "express";
import knex from "./knex.js";
import cors from "cors";
import { initCustomer } from "./customer/index.js";

function buildApp() {
  const app = express();

  app.use(cors({ origin: "http://localhost:5173" }));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //   const customerController = initCustomer(knex);

  const knexInstance = knex.default ? knex.default : knex;

  const customerController = initCustomer(knexInstance);

  function validateIdMiddleware(req, res, next) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        error: `Invalid id parameter. Instead received "${req.params.id}" which is a type of "${typeof req.params.id}"`,
      });
    }
    next();
  }

  //   app.get('/customers', customerController.list);
  //   app.get('/customers/:id', validateIdMiddleware, customerController.find);
  //   app.post('/customers', customerController.create);
  //   app.patch('/customers/:id', validateIdMiddleware, customerController.update);
  //   app.delete('/customers/:id', validateIdMiddleware, customerController.remove);

  //   app.get("/", customerController.distance);

  app.use((req, res, next) => {
    console.log(`[Request] ${req.method} ${req.url}`);
    next();
  });
  app.get(
    "/",
    (req, res, next) => {
      console.log("distanceルートに到達しました！");
      next();
    },
    customerController.distance,
  );

  app.post("/upload", customerController.upload);

  app.use((req, res) => res.status(404).json({ error: "Not Found" }));

  return app;
}

export { buildApp };
