import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:
    {
        key: '5acd379e4f2440778779a23ce446ac40'
    }
})