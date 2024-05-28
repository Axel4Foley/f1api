import { Link } from "react-router-dom";

export function Years() {
    return (
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <button>
                
                <Link to={"2005"}>
                    2005
                </Link>
            </button>

            <button>
                <Link to={"2006"}>
                    2006
                </Link>
            </button>

            <button>
                <Link to={"2007"}>
                    2007
                </Link>
            </button>

            <button>
                <Link to={"2008"}>
                    2008
                </Link>
            </button>
        </div>
    )
}