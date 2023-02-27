import axios from "axios";

export const getDataCards = async (limit = 30, offset= 20) => {
    try {
        const list = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}%22`);
        let promises = await list.data.results?.map(async (data) => 
        {
            return await axios.get(data.url);
        });
        return await Promise.all(promises);
    } catch (error) {
        console.log(error);
    }
}
