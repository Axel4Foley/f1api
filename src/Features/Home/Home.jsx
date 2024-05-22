import React from "react"
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

            <a href="/year">
                <button>
                    Years
                </button>
            </a>
        </div>
    </>
        
    )
}