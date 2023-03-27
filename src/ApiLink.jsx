const apiURL = process.env.NODE_ENV === "development" ? 'http://localhost:5000/api/v1' : "https://portfolio-kw.herokuapp.com/api/v1";

export default apiURL;