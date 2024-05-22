import { response } from "express";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Season() {
    const [season,setSeason] = useState();
    useEffect(() => {
        fetch("http://ergast.com/api/f1/seasons.json")
            .then((response) => response.json())
            .then(res=> {
                setSeason(res ['MRDATA']["SeasonTable"]['Seasons'])
            }
        )

    }, [])
    return (
        <>
            <h1>
                Ecco la lista di tutte le stagioni
            </h1>


            <button>
                <Link to={"/"}>Torna alla home</Link>
            </button>

        </>
    )
}