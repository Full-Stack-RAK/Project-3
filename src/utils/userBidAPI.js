import axios from "axios";
const url = "http://169.234.107.168:3210/api/userBid";
export default {
// use these functions on the correct pages to get what you want done
  getUserBids: function() {
    return axios.get(url);
  },

  getUserBid: function(id) {
    return axios.get(url + "/" + id);
  },

  deleteUserBid: function(id) {
    return axios.delete(url + "/" + id);
  },
<<<<<<< HEAD
  saveUserBid: function(userData) {
    return axios.post(url, userData);
=======
  saveUserBid: function(userBidData) {
    return axios.post(url, userBidData)
>>>>>>> origin/ken
  }
};
