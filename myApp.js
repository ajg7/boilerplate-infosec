const express = require("express");
const app = express();
const helmet = require("helmet");
helmet.hidePoweredBy();
helmet.frameguard({ action: "deny" });
helmet.xssFilter()