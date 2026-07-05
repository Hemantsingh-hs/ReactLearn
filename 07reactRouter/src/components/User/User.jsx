import React from "react";
import { useParams } from "react-router-dom";
function User() {
    const { id } = useParams();
    return(
        <div className="mx-auto w-full max-w-7xl text-center bg-amber-50">
            <h1>User Profile:{id}</h1>
            <p>This is the user profile page.</p>
        </div>
    )
}

export default User;
