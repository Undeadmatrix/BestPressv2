import React, { useState, useEffect } from "react";
import NavSignedIn from "../components/NavSignedIn";

const Following = () => {
    const loggedIn = localStorage.getItem("isLoggedIn")
    console.log(loggedIn);
    if(!loggedIn)
    {
      alert("you need to log in");
      window.location.replace("/");
    }
    else {

    return (
        <div>
            <NavSignedIn />
            <p>Following</p>
        </div>
    )
}
};

export default Following;
