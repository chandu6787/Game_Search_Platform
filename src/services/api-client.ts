import axios from "axios";
export default axios.create(
    {
        baseURL: "https://api.rawg.io/api",
        params :{
            key:'09d4526a97a84a4a987edb706e6b2dcc'
        }

    }
)