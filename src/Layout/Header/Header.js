import React from "react";
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
            
        </div>
    )
}

export default Header