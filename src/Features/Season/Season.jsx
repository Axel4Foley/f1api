import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllSeason } from "./get-season";


export function Season() {
    const [seasonLoading, season, errorSeason] = getAllSeason()
    useEffect(() => {

    },[])

    return (
        <>
            {seasonLoading && 
                <p>Sto caricando i dati</p>
            }

            {errorSeason &&
                <p>Si è verificato un errore durante la chiamata, riprovare!</p>
            }

            {season && season.map((s) => {
                return (
                    <div style={{width:"100%", display:"flex", alignItems:"baseline"}} key={s.season}>
                        <button style={{margin:"10px"}}>
                            <Link to={s.season}>
                                {s.season}
                            </Link>
                        </button>
                        <p>{s.url}</p>

                    </div>
                )
            }
        )}


            <button>
                <Link to={"/"}>Torna alla home</Link>
            </button>

        </>
    )
}


    
