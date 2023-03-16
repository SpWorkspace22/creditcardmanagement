import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

export default function RequestListComponent(){
    let requests = useSelector((state)=>{
        return state.creditSlice.requests
    })

    let [req,setReq] = useState([...requests])
    let [req_id,setReqId] = useState()


    function handleSearch(){

        if(req_id!=""){
            let a = req.filter((r)=> { return r.req_id===parseInt(req_id)})
            setReq([...a])
        }else{
            setReq([...requests])
        }

        
    }

    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <form className="d-flex">
                        <input class="form-control me-2" type="search" 
                            placeholder="Search" aria-label="Search" onChange={(e)=>{setReqId(e.target.value)}}/>
                        <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
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
        <hr />
        <div className="container mt-5">
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <td>Req Id</td>
                        <td>User Name</td>
                        <td>Card Type</td>
                        <td>Date of Submission</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>    
                <tbody>
                {
                    req.map((request)=>{
                        console.log(req);
                        return (
                        <tr key={request.req_id}>
                            <td>{request.req_id}</td>
                            <td>{request.name}</td>
                            <td>{request.card_type}</td>
                            <td>{request.dos}</td>
                            <td>{request.rstatus}</td>
                            <td>
                                <Link to="/details" state={request.req_id}>
                                    <button className='btn btn-primary'>
                                        View Details
                                    </button>
                                </Link>
                            </td>
                        </tr>)
                    })
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}