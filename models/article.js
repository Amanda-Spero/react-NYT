const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
<<<<<<< HEAD
  _id: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { _id: false });
=======
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  url: String,
});
>>>>>>> 333358986ea8556c0d8cfe36a74d426f95efe22f

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
