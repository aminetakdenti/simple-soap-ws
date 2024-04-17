const soap = require("soap");
const url = "http://localhost:3000/add?wsdl";

let args = {
  a: 10,
  b: 13,
};

soap.createClient(url, function (err, client) {
  if (err) throw new Error(err);

  client.add(args, function (err, res) {
    if (err) throw new Error(err);

    console.log(res);
  });
});
