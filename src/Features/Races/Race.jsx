import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Race() {
    let {seasonId, raceId} = useParams();

    const[race, setRace] = useState();
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        fetch(`http://ergast.com/api/f1/${seasonId}/${raceId}/results.json`)
        .then(res=> res.json())
        .then(res => {
            setRace(res.MRData.RaceTable.Races[0]);
            setLoading(false)
        })
        .catch(err => setError(err))
    },[seasonId, raceId])

    return (
        <>
        {loading &&
        <p>Sto caricando i dati</p>
        }

        {error &&
        <p>Si è verificato un errore durante la chiamata, riprovare!</p>
        }

        {/* {race &&
            race.map((r) => {
                return (
                    <div style={{width:"100%", display:"flex", alignItems:"baseline"}} key={r.round}>

                        <button style={{margin:"10px"}}>
                            
                            <Link to={"races/"+r.round}>
                                Gara {r.round}
                            </Link>
                        </button>
                        <p>{r.raceName + " " + r.season}</p>

                    </div>
                )
            }
        )} */}
        </>
    )}
