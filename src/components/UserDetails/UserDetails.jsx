import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlus, FaRegPaperPlane } from "react-icons/fa6";
const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  //   const { profile_photo, name, details, email } = user;

  useEffect(() => {
    fetch("/usersData.json")
      .then((res) => res.json())
      .then((data) => {
        const userData = data.find((user) => user._id === id);
        setUser(userData);
      });
  }, [id]);
  console.log(user);
  return (
    <div className="max-w-screen-2xl mx-auto px-[3%] mt-10 dark:bg-slate-800">
      <div className="flex flex-col md:flex-row gap-12">
        <div>
          <img
            src={user?.profile_photo}
            alt=""
            className="w-96 h-96 object-cover"
          />
          <div className="flex flex-wrap sm:flex-nowrap gap-6 mt-12">
            <button className="flex items-center gap-2 text-lg border-2 py-2 px-8 rounded-2xl border-purple-900 hover:bg-purple-900 hover:text-white dark:text-white transition-all">
              <FaPlus></FaPlus>
              Follow
            </button>
            <button className="flex items-center gap-2 text-lg border-2 py-2 px-8 rounded-2xl border-purple-900 bg-purple-900 text-white transition-all">
              <FaRegPaperPlane></FaRegPaperPlane>
              Message
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-400">
            Hello,
          </h2>
          <h2 className="text-4xl md:text-6xl font-semibold mt-4 mb-8 dark:text-white">
            <span className="text-4xl font-normal text-gray-400">I&apos;m</span>{" "}
            {user?.name}
          </h2>
          <p className="text-2xl md:text-3xl font-bold dark:text-white">
            About Me
          </p>
          <hr className="horizontal border mt-2" />
          <p className="mt-4 pb-6 md:pb-0 text-lg text-gray-400">
            {user?.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
