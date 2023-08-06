import React from "react";
import Header from "../../Layout/Header/Header";
import DetailSneaker from "../../Layout/DetailSneaker/DetailSneaker";
import { useParams } from "react-router-dom";

function LayOutDetailSneaker() {
    let {sneakerId} = useParams()
    console.log(sneakerId)



    return (
        <>
            <Header />
            <DetailSneaker code={sneakerId} />
        </>
    )
}

export default LayOutDetailSneaker