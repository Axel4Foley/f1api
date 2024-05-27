import { useEffect, useState } from "react";

export function getAllSeason() {
    const [season,setSeason] = useState();
    const [seasonLoading,setSeasonLoading] = useState(false);
    const [errorSeason, setErrorSeason] = useState();

    useEffect(() => {
        setSeasonLoading(true);
        fetch("http://ergast.com/api/f1/seasons.json")
            .then((response) => response.json())
            .then(res=> {
                setSeason(res ['MRData']["SeasonTable"]['Seasons'])
                setSeasonLoading(false)
            }
        )
            .catch(err=>{
                setErrorSeason(err)
                setSeasonLoading(false)
            })

    }, [])
    return [seasonLoading, season, errorSeason]
}