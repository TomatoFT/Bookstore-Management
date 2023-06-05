// To connect with your mongoDB database
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());


try {
	mongoose.connect('mongodb://localhost:27017/', {
		dbName: 'Bookstore',
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
}
catch (err) {
	console.log(err);
}


// Schema for users of app
const import_books_schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	date: {
		type: Date,
		default: Date.now,
	}
});
const User = mongoose.model('ImportBooks', import_books_schema);
User.createIndexes();

// For backend and express
app.get("/", (req, resp) => {

	resp.send("App is Working");
});

app.post("/register", async (req, resp) => {
	console.log('+++++++++++++++++++++++++Get Into the Register=========================')
	try {
		const user = new User(req.body);
		let result = await user.save();
		console.log("==Create the new user==")
		result = result.toObject();
		console.log('Come here')
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.get("/show", async (req, resp) => {
	try {
	const AllUser = await User.find({})
	console.log(AllUser)
	resp.send(AllUser)
	}
	catch {
		console.log("ERROR CMNR")
	}
	});

app.listen(5000);
