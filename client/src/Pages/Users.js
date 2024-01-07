import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/Users.css";
import Update_user from "./Update_user";
import Update from "./Update";
import { Link, useParams } from "react-router-dom";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/users").then((res) => setUsers(res.data));
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8081/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((errr) => console.log(errr));
  };

  return (
    <div className="main2">
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            class="searchTerm"
            id="input_text"
            placeholder="Search Users"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>

      {filteredUsers?.length ? (
        <table className="table table-striped">
          <thead>
            <tr className="tr1">
              <th> Id</th>
              <th> Name</th>
              <th> UserName</th>
              <th>Email</th>

              <th>Phone</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => {
              return (
                <tr className="tr1">
                  <td>{user.sr_no}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  {/* <td>{user.address.city}</td> */}
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={(e) => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="no-users">
          <h1 className="no-users1">SORRY☹️</h1>
          <h1 className="no-users2">No User Found !!!</h1>
        </div>
      )}
    </div>
  );
};

export default Users;
