import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export function Driver() {
    const {yearId, driverId} = useParams()

    const [driver, setDriver] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect (() => {
        setLoading(true)
        fetch(`https://ergast.com/api/f1/${yearId}/drivers/${driverId}.json`)
            .then(res => res.json())
            .then(res => {
                setDriver(res.MRData.DriverTable.Drivers[0])
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })

    }, [yearId, driverId])
    
    return (
        <>
        </>
    )
}