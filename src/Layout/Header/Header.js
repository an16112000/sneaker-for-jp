import React, { useState } from "react";
import styles from "./Header.module.scss"
import { Link } from "react-router-dom";

const dataType = [
    {
        id: 1,
        title: 'Jordan',
        type: 'jordan'
    },
    {
        id: 2,
        title: 'Air Force 1',
        type: 'airforce1'
    },
    {
        id: 3,
        title: 'Air Max',
        type: 'airmax'
    },
    {
        id: 4,
        title: "Dunk",
        type: 'dunk'
    }
]

function Header() {
    const [code, setCode] = useState('')
    const [submitCode, setSubmitCode] = useState('')
    const [size, setSize] = useState('')
    const [submitSize, setSubmitSize] = useState('')

    function hanldeSubmit() {
        setSubmitCode(code)
        setSubmitSize(size)
        console.log(1)
    }

    const handleChangeCode = (e) => {
        console.log(e.target.value)
        setCode(e.target.value)
    }

    const handleChangeSize = (e) => {
        setSize(e.target.value)
    }
    console.log(submitCode, submitSize)
    return (
        <div className={styles.container}>
            <div className={styles.options}>
                {
                    dataType.map(
                        item => {
                            return <Link key={item.id} className={styles.item}>
                                {item.title}
                            </Link>
                        }
                    )
                }
            </div>
            <div className={styles.search}>
                <div className={styles.input}>
                    <input
                        value={code}
                        onChange={handleChangeCode}
                        className={styles.searchCode}
                        placeholder="Code..." />
                    <input
                        value={size}
                        onChange={handleChangeSize}
                        className={styles.searchSize}
                        placeholder="Size..." />
                </div>
                <Link
                    to={`/product/${code}`}
                    onClick={hanldeSubmit}
                >
                    Submit
                </Link>
            </div>

        </div>
    )
}

export default Header