import { useEffect, useState } from "react";
import UserCard from "../../UserCard/UserCard";
import { Link } from "react-router-dom";

const Hero = () => {
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
      <h3 className="font-semibold text-4xl text-center dark:text-white pt-8 pb-5">
        Explore Users
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.slice(0, 6).map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
      <div className="text-center py-14">
        <Link
          to="/all-users"
          className="text-xl font-bold bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white px-14 py-4 rounded"
        >
          Show all
        </Link>
      </div>
    </div>
  );
};

export default Hero;
