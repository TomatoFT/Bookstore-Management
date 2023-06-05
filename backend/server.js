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
		dbName: 'My_Bookstore',
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
}
catch (err) {
	console.log(err);
}


// Schema for users of app
const import_books_schema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	company: {
		type: String,
		required: true,
	}, 
    national: {
        type: String,
        required: true, 
    },
    time: {
        type: Date,
        default: Date.now,
    }
});
const import_books = mongoose.model('ImportBooks', import_books_schema);
import_books.createIndexes();

// For backend and express
app.get("/", (req, resp) => {

	resp.send("App is Working");
});

app.post("/add_books_to_cart", async (req, resp) => {
	console.log('add book to cart')
	try {
		const add_books = new import_books(req.body);
		let result = await add_books.save();
		console.log("==Create the new add_books==")
		result = result.toObject();
		if (result) {
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("import_books already register");
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.post("/send_requests_to_buy_book", async (req, resp) => {
	console.log('add book to cart')
	try {
		import_books.deleteMany({}).then(() => {
			console.log('All documents deleted successfully.');
			resp.send(true)
		  })
		  .catch((error) => {
			console.error('Error deleting documents:', error);
		  });
		}
	catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.get("/show", async (req, resp) => {
	try {
	const find_all_books = await import_books.find({})
	console.log(find_all_books)
	resp.send(find_all_books)
	}
	catch {
		console.log("ERROR CMNR")
	}
	});



app.listen(5000);
