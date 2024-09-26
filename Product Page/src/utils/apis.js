import axios from "axios";


 function getLuxuryCars() {
    return axios
        .get("https://akabab.github.io/luxurycars-api/api/all.json").then((res) => {
            return res.data;
        });
        
            
        }

        



export default getLuxuryCars;