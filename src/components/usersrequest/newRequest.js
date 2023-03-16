import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from "react";

export default function NewRequest(props){
    let [user,setUser] = useState({})
    const location = useLocation()
    
    
    let {card_type,requests} =  useSelector((state)=>{
        return  state.creditSlice
    })
    
    useEffect(()=>{
        let req_id  = location.state
        if(req_id!==""){
            let a = requests.filter(r=> r.req_id===parseInt(req_id))
            setUser({...a})
        }
    },[])
    return (
        <div className="container mt-5">
            <Link to="/">
                <button className="btn btn-dark">Home</button>
            </Link>
            <form className="row g-3 mt-5">
                <h4 className="lead">Basic Details:</h4>
                <div className="col-md-4">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value="Mark" required />
                </div>
                <div className="col-md-4">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value="sonu@gmail.com" required />
                </div>
                <div className="col-md-4">
                    <label for="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" aria-describedby="inputGroupPrepend" required />
                </div>
                <div className="col-md-4">
                    <label for="DOB" className="form-label">DOB</label>
                    <input type="date" className="form-control" id="DOB" required />
                </div>
            <hr className="mt-5"/>
            <h4 className="lead">ID Details:</h4>
                <div className="col-md-4">
                    <label for="UID" className="form-label">UID NUmber</label>
                    <input type="text" className="form-control" id="UID" value="Mark" required />
                </div>
                <div className="col-md-4">
                    <label for="PAN" className="form-label">PAN Card</label>
                    <input type="text" className="form-control" id="PAN" value="Mark" required />
                </div>
            <hr className="mt-5"/>
            <h4 className="lead">Address Details:</h4>
                <div className="col-md-4">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" value="Mark" required />
                </div>
                <div className="col-md-4">
                    <label for="city" className="form-label">City</label>
                    <select class="form-select" aria-label="Default select example">
                        <option >Pune</option>
                        <option >Mumbai</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label for="state" className="form-label">State</label>
                    <select className="form-select" aria-label="Default select example">
                        <option >Maharashtra</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label for="pin" className="form-label">Pin Code</label>
                    <input type="text" className="form-control" id="pin" required />
                </div>
            <hr className="mt-5"/>
                <h4 className="lead">Credit Card :</h4>
                <div className="col-md-4">
                    <label for="UID" className="form-label">CARD TYPE</label>
                    <select className="form-select" aria-label="Default select example">
                        <option>Select Card Type</option>
                        {
                            card_type.map(card=> <option>{card}</option>)
                        }
                    </select>
                </div>
            <div className="col-12">
                <input type="submit" className="btn btn-primary" value="Save" />
            </div>
            </form>
        </div>
    );
}