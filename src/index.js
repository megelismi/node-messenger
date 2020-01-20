import "dotenv/config";
import express from "express";
import theSecret from "./lib/twilio";

console.log("Hello Node.js project.");
console.log("the secret", theSecret);
