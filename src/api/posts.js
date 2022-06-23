import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3500"
});

// npx json-server -p 3500 -w data/db.json