import React from "react";
import Header from "../../Layout/Header/Header";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Header />
            <button>
                <Link to={'/product/cw'}>
                    Click Here
                </Link>
            </button>
        </>
    )
}

export default Home