const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const { response, request } = require("express");
const stripe = require("stripe")(
  "sk_test_51KYjSqDG1nZipsBwJi3NOflW1Ry1eFuqN4G5nWhdzV6vPyCBxRGj2BdEvDzdWCb3i1CskJDgLDsI9cz6a7MnSD4e007znohFIt"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recived for this amount BOOM!!! >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //submits of the currency
    currency: "usd",
  });
  // OK = created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-f5772/us-central1/api
