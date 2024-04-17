const express = require("express");
const soap = require("soap");
const fs = require("fs");

const app = express();

app.get("/", (_, res) => res.send("hi\n"));

const xml = fs.readFileSync("./service.wsdl", "utf-8");

const soapObject = {
  AddService: {
    AddServicePort: {
      add: function (args, cb, header, req) {
        return { result: args.a + args.b };
      },
    },
  },
};

app.listen(3000, () => {
  soap.listen(app, "/add", soapObject, xml, (err, res) => {
    if (err) console.error(err);

    console.log("done");
  });
  console.log("check our wsdl file in http://localhost:3000/add?wsdl");
});
