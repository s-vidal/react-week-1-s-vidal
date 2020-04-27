import React, {Component} from "react";
import Profile from "../user-mock-data.json";

class UserList extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <ul className="list-group">
          {Profile.map((item) => (
            <li className="list-group-item" key={item.id}>
              <span className="pr-5">{item.id}</span>
              <span className="pr-5">{item.first_name}</span>
              <span className="pr-5">{item.email}</span>
              <span className="pr-5">{item.country}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
