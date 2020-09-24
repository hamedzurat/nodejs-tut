const fs = require('fs');

var data = fs.readFileSync('data.json');
data = JSON.parse(data.toString());

data.name = "zurat";
data.age = "20";

var json_data = JSON.stringify(data);

fs.writeFileSync('data.mod.json',json_data);
