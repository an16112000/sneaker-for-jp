import React, { useEffect, useState } from "react";
import { getDataFromSnkrDunk } from "../../GetData/getDataFromSnkrDunk";

const DetailSneaker = ({ code, size }) => {
    const [data, setData] = useState([])
    useEffect(
        () => {
            const fetchApi = async () => {
                const response = await getDataFromSnkrDunk();
                console.log(response)
                setData(response)
            }
            fetchApi();
        }, [code, size]
    )
    console.log(data)
    return (
        <>
            Detail Sneaker Page
        </>
    )
}

export default DetailSneaker