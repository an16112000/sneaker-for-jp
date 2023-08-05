import React, { useState } from "react";
import { getDataFromSnkrDunk } from "../../GetData/getDataFromSnkrDunk";

const DetailSneaker = () => {
    const [data, setData] = useState([])
    const fetchApi = async() => {
        const response = await getDataFromSnkrDunk();
        console.log(response)
        setData(response)
    }
    console.log(data)
    fetchApi();
    return (
        <>
            Detail Sneaker Page
        </>
    )
}

export default DetailSneaker