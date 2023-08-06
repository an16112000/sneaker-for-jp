import axios from "axios"
import { getRateJp } from "../GetRate/getRate"
import { VND } from "../../changeCurency"

export const getDataFromSnkrDunk = async (code, size) => {
    const response = await axios.get(`https://snkrdunk.com/v1/sneakers/${code}/size/list`)
    const rateJp = await getRateJp()
    const data = response.data.data.minPriceOfSizeList.map(
        item => {
            return {
                size: item.size,
                price: VND.format(Math.floor(item.price*rateJp))
            }
        }
    )
    return data
}