import axios from "axios"

export const getDataFromSnkrDunk = async () => {
    const response = await axios.get('https://snkrdunk.com/v1/sneakers/DZ5485-400/size/list')
    return response
}