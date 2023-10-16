import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

      const loadedUsers = useLoaderData();
      const [users, setUsers] = useState(loadedUsers);

      const handleDelete = id => {
            fetch(`http://localhost:7000/users/${id}`, {
                  method: 'DELETE'
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              alert('User Deleted Successfully');
                              const remaining = users.filter(user => user._id !== id);
                              setUsers(remaining)
                        }
                  })
      }

      return (
            <div>
                  <h1 className="text-center text-2xl font-extrabold my-5">Total Users: {users.length}</h1>
                  <div >
                        <div className="overflow-x-auto">
                              <table className="table">
                                    {/* head */}
                                    <thead>
                                          <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Creation time</th>
                                                <th>Last signin</th>
                                                <th></th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {
                                                users.map(user => <tr key={user._id}>
                                                      <th>1</th>
                                                      <td>{user.name}</td>
                                                      <td>{user.email}</td>
                                                      <td>{user.creationTime}</td>
                                                      <td>{user.lastSignInTime}</td>
                                                      {/* <td>
                                                            <Link to={`/users/${user._id}`}>
                                                                  <button className="btn btn-sm mr-2">Update</button>
                                                            </Link>
                                                      </td> */}
                                                      <td>
                                                            <button onClick={() => handleDelete(user._id)} className="btn btn-sm ">Delete</button>
                                                      </td>
                                                </tr>)
                                          }
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default Users;