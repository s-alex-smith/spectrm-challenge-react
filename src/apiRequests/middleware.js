const axios = require("axios");

const url = "https://api.jsonbin.io/b/610e81d3d5667e403a3af6aa"
const secretKey = "$2b$10$RMjOQ28uF0FOAwQDb/4VwOJJ397NdUxEu3e7DH8ToSoO.QxhR7wIW"

const getData = async () =>  {
    return await axios
        .get(url, {
        headers: {
            "secret-key": secretKey,
            },
        })
        .then((response) => {
            console.log(response)
            return response.data
        })
        .catch(err => console.log(err));
}

export default getData;