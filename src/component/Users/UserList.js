import React from "react";
import { Table } from "react-bootstrap";
import UserRow from "./UserRow";



const UserList = ({ users }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((el) => (
          <UserRow key={el.id} el={el} />
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;