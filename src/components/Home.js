import RequestListComponent from "./usersrequest/requestList";
import RequestComponent from "./usersrequest/requestPage";

export default function Home() {
    return (
        <div className="ms-3 me-3">
            <RequestListComponent/>
        </div>
    );
}