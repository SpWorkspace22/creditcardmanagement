import {Link} from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CMS</a>
                <form className="d-flex" role="search">
                    <button className="btn btn-outline-success" type="submit">Login</button>
                </form>
            </div>
        </nav>
    );
}