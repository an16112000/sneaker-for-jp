import React, { useState } from "react";
import Header from "../../Layout/Header/Header";
import DetailSneaker from "../../Layout/DetailSneaker/DetailSneaker";

function LayOutDetailSneaker() {
    const [code, setCode] = useState('')
    const [submitCode, setSubmitCode] = useState('')
    const [size, setSize] = useState('')
    const [submitSize, setSubmitSize] = useState('')

    function hanldeSubmit() {
        setSubmitCode(code)
        setSubmitSize(size)
    }

    const handleChangeCode = (e) => {
        setCode(e.target.value)
    }

    const handleChangeSize = (e) => {
        setSize(e.target.value)
    }
    console.log(submitCode, submitSize)
    return (
        <>
            <Header 
                valueCode={code}
                valueSize={size}
                onSubmit={hanldeSubmit}
                onChangeCode={handleChangeCode}
                onChangeSize={handleChangeSize}
            />
            <DetailSneaker code={submitCode} size={submitSize} />
        </>
    )
}

export default LayOutDetailSneaker