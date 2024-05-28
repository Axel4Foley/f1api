
import { Link } from "react-router-dom"

export function Home() {
    return (
    <>
        <div>
            <h1>
                Benvenuto!
            </h1>

            <button>
                <Link to={"season"}> Vai alle stagioni</Link>
            </button>

            <button>
                <Link to={"years"}> Vai alle annate</Link>
            </button>

        </div>
    </>
        
    )
}