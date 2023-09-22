import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";

const USers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("./usersData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log(err?.message);
      });
  }, []);
  return (
    <div className="px-[3%]">
      <h3 className="font-semibold text-2xl text-center pt-8 pb-5">
        Total users: {users.length}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default USers;
