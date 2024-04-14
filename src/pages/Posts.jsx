import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/studets/studentsAction";

const Students = () => {
  const { loading, students, error } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {students.length > 0 && (
        <ul>
          {students.map((user) => (
            <li key={user.id}>
              {user.id}. {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Students;
