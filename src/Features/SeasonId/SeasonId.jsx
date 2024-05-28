
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function SeasonId() {
    let { seasonId } = useParams();

    const [season, setSeason] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(`http://ergast.com/api/f1/${seasonId}.json`)
        .then(res=> res.json())
        .then(res => {
            setSeason(res.MRData.RaceTable.Races);
            setLoading(false)
        })
        .catch(err => setError(err))
    },[seasonId])

    return (
        <div style={{width:"100%"}}>
            <h1>Lista Gare</h1>
            {loading && 
                <p>Sto caricando i dati</p>
            }

            {error &&
                <p>Si è verificato un errore durante la chiamata, riprovare!</p>
            }

            {season &&
             season.map((r) => {
                return (
                    <div style={{width:"100%", display:"flex", alignItems:"baseline"}} key={r.round}>

                        <button style={{margin:"10px"}}>
                            
                            <Link to={"races/"+r.round}>
                                Circuito {r.round}
                            </Link>
                        </button>
                        <p>{r.raceName + " " + r.season}</p>

                    </div>
                )
            }
        )}


            <button>
                <Link to={"/"}>Torna alla home</Link>
            </button>

        </div>
    )
}