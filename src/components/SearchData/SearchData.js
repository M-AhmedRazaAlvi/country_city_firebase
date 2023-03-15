import React from "react";
import { Users } from "./Users";
import { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
export default function SearchData() {
  const [quary, setQuary] = useState("");
  const searchHandle = (e) => {
    setQuary(e.target.value);
  };
  const search = (data) => {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(quary) ||
        item.last_name.toLowerCase().includes(quary)
    );
  };
  return (
    <div>
      <div className="search">
        <div className="back">
          <Link to="/welcome">Back</Link>
        </div>
        <h3 className="mb-3">Search Employee Name</h3>
        <div className="">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Search..."
            onChange={searchHandle}
          />
        </div>
      </div>
      <SearchTable data={Users} />
    </div>
  );
}

const SearchTable = ({ data }) => {
  return (
    <div>
      <table className="searchTable">
        <thead>
          <tr>
            <th>Sr. No </th>
            <th>Fisrt Name </th>
            <th>Last Name </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id} </td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
