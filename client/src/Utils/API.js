import axios from "axios";

export default {
  // Gets all books
  getBars: function() {
    return axios.get("/api/bars");
  },
  // Gets the book with the given id
  getBar: function(id) {
    return axios.get("/api/bars/" + id);
  },
  // Deletes the book with the given id
  deleteBar: function(id) {
    return axios.delete("/api/bars/" + id);
  },
  // Saves a book to the database
  saveBar: function(barData) {
    return axios.post("/api/bars", barData);
  }
};