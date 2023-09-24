import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("./usersData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  return (
    <div className="px-[3%] max-w-screen-2xl mx-auto dark:bg-slate-800">
      <h3 className="font-semibold text-3xl text-center dark:text-white pt-8 pb-5">
        {users.length} users found
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
