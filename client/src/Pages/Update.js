import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  console.log(id);
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  //   const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [website, setWebsite] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8081/getuser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setUsername(result.data.username);
        setEmail(result.data.email);
        setPhone(result.data.phone);
        setWebsite(result.data.website);
      })
      .catch((err) => console.log(err));
  }, []);

  const userUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8081/update/" + id, {
        name,
        username,
        email,
        phone,
        website,
      })
      .then((res) => {
        console.log(res);
        navigate("/users");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={userUpdate}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">UserName</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUserName"
            placeholder="Enter email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPhone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPhone"
            aria-describedby="emailHelp"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="exampleInputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputAddress"
            aria-describedby="emailHelp"
            placeholder="Enter Address"
          />
         
        </div> */}
        <div className="form-group">
          <label htmlFor="exampleInputWebsite">Website</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputWebsite"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
