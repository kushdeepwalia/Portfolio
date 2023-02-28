const apiURL = process.env.NODE_ENV === "development" ? 'http://localhost:5000/api/v1' : "https://protected-depths-61916.herokuapp.com/api/v1";

export default apiURL;