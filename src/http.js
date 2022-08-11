import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8182",
    headers: {
        "Content-type": "application/json",
        "api-token": "$2y$10$MGt/kpzALEDamEn3vk24buxskR4d8ptJnAK878spp4tLS23zzNBxG",
    }
});