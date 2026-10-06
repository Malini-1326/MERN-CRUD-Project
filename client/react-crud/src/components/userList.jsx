import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate=useNavigate();

  const getUser = () => {
    axios
      .get("http://localhost:8000/users/getUser")
      .then(function (response) {
        setUsers(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8000/users/deleteUser/${id}`)
          .then(function (response) {
            swal("Success", "User deleted successfully", "success");
            getUser();
          })
          .catch(function (error) {
            console.log(error);
            swal("Error", "Failed to delete user", "error");
          });
      }
    });
  };

  const editUser=(id)=>{
    navigate(`/userForm/${id}`)
  }


  return (
    <section className=" user-form-bg min-vh-100 ">
      <h1 className="text-center fs-1 py-3">User List</h1>
      <div className="text-end pe-5 container py-4">
        <Link to="/userForm">
          <Button variant="success">Add User</Button>
        </Link>
      </div>

      <Table className="container  table-rows">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Gender</th>
            <th style={{ width: "180px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr key={item.id}>
                <td>{users.indexOf(item)+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>
                  <Button variant="success" onClick={()=>editUser(item._id)}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-3"
                    onClick={() => deleteUser(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
}
export default UserList;
