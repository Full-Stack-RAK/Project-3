import axios from "axios";
<<<<<<< HEAD
const url = "http://192.168.1.123:3210/api/userBid";
=======
const url = "http://192.168.1.182:3210/api/userBid";
>>>>>>> origin/ken
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

  saveUserBid: function(userBidData) {
    return axios.post(url, userBidData)
  }
};
