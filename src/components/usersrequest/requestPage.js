import { Link } from "react-router-dom";

export default function RequestComponent(){

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <form className="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <Link to="/newRequest"> 
                       <button className="btn btn-secondary" type="submit"> 
                            New Request
                       </button>
                    </Link>
                </div>               
            </div>
        </div>
    )
}