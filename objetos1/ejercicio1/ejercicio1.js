let user = {};

user["name"] = "John";
user["surname"] = "Smith";

alert(user["name"]);
alert(user["surname"]);

user["name"] = "Pete";
alert(user["name"]);

delete user["name"];
alert(user["name"]);