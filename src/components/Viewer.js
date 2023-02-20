import React, { useState } from "react";
import Login from "./Login";
import NavMenu from "./NavMenu";

// shortcut for formatting :- alt + shift + F

export default function Viewer() {
  const [login, setLogin] = useState("false");

  const AdminLogin = async (event) => {
    event.preventDefault();

    const name = event.target.username.value;
    const pass = event.target.password.value;

    let data = await fetch("http://localhost/ZEESHAN/API/index_process.php", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        pass: pass,
      }),
    });

    let res = await data.json();
    

    if (res.msg === "true")
    {
        // yahin per session use hoga
        
        setLogin(res.msg);
    }
    else{
        alert(res.msg);
    }
    
  };

  return (
    <>{login === "true" ? <NavMenu /> : <Login AdminLogin={AdminLogin} />}</>
  );
}
