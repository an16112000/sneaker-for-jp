import React, { useEffect, useState } from "react";
import { getDataFromSnkrDunk } from "../../GetData/getDataFromSnkrDunk";

const DetailSneaker = () => {
    const [data, setData] = useState([])
    useEffect(
        () => {
            const fetchApi = async() => {
                const response = await getDataFromSnkrDunk();
                console.log(response)
                setData(response)
            }
            console.log(data)
            fetchApi();
        }, []
    )
    return (
        <>
            Detail Sneaker Page
        </>
    )
}

export default DetailSneaker