import React, { useEffect, useState } from "react";
import { getDataFromSnkrDunk } from "../../GetData/getDataFromSnkrDunk/getDataFromSnkrDunk";

const DetailSneaker = ({ code, size }) => {
    const [data, setData] = useState([])
    console.log(code)
    useEffect(
        () => {
            const fetchApi = async () => {
                const response = await getDataFromSnkrDunk(code, size);
                console.log(response)
                setData(response)
            }
            fetchApi();
        }, [code, size]
    )
    console.log(data)
    return (
        <>
            
        </>
    )
}

export default DetailSneaker