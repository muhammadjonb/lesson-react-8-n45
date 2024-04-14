import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/studets/studentsAction";

const Students = () => {
  const { loading, users, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {users.length > 0 && (
        <ul>
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>ISM</th>
                <th>FAMIOLIYA</th>
                <th>GURUH</th>
              </tr>
            </thead>
            {users.map((user) => (
              <tbody key={user.id}>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.group}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </ul>
      )}
    </div>
  );
};

export default Students;
