import axios from "axios";
import filterParams from "./filterParams";



export default {
  // Gets all books
  getArticles: function(params) {
    return axios.get("/api/nyt", { params: filterParams(params) });
  },
  // Gets the book with the given id
  getSavedArticles: function() {
    return axios.get("/api/articles/");
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
