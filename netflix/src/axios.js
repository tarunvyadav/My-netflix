import axios from "axios";
/**base url to mqake request to the movies databases */

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;


// https://api.themoviedb.org/3/

// "https:api.themoviedb.org/3"