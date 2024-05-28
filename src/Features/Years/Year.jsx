import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export function Year() {
    const { yearId } = useParams()

    const [drivers, setDrivers] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        fetch(`https://ergast.com/api/f1/${yearId}/drivers.json`)
            .then(res=> res.json())
            // .then(res=>{return res.json()})
            .then(res=>{
                setDrivers(res.MRData.DriverTable.Drivers)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })

    },[yearId])

    return (
       <div style={{width: "100%"}}>
        {loading && 
            <p>
                Stiamo caricando i tuoi dati
            </p>
        }

        {error &&
            <p>
                Errore,impossibile caricare i dati!
            </p>
        }

        {drivers &&
            drivers.map((driver) => {
                return(
                <div style={{display:"flex", width:"100%", alignItems:"baseline"}} key={driver.driverId}>
                    <button style={{marginBottom:"30px", backgroundColor:"red", borderRadius:"15px"}}>
                        <Link to={`driver/${driver.driverId}`} style={{color:"white"}}>
                            {driver.code}
                        </Link>
                    </button>

                    <p style={{marginLeft:"10px"}}>
                        {driver.givenName + " " + driver.familyName} from {driver.nationality}
                    </p>

                </div>
                )
                
            }) 
        }
       </div>
    )
}