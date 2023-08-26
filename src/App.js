import { useState, useEffect } from "react";
import Users from "./components/Users/Users";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("https://panorbit.in/api/users.json")
      .then(function (response) {
        // handle success
        console.log(response);
        setUsers(response.data.users);
        localStorage.setItem("usersList", JSON.stringify(response.data.users));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="parent">
      <section>
        <div className="curve"></div>
      </section>
      <Users props={users} />
    </div>
  );
}

export default App;
