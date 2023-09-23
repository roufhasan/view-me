import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa6";

const UserCard = ({ user }) => {
  const { name, email, profile_photo, _id } = user;
  return (
    <div className="group rounded-lg bg-white dark:bg-transparent hover:bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] p-[2px] transition-all shadow-lg">
      <div className="bg-white dark:bg-gray-900 rounded-lg text-center pb-8">
        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${profile_photo})`,
              width: "100%",
              height: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="blur-sm"
          ></div>
          <img
            src={profile_photo}
            alt=""
            className="w-32 h-32 rounded-full object-cover object-top absolute left-1/2 -translate-x-1/2 -bottom-10 border-4 border-white group-hover:scale-110 transition-all duration-700"
          />
        </div>
        <p className="font-bold mt-12 text-2xl dark:text-white">{name}</p>
        <div className="flex items-center gap-2 justify-center mt-2 mb-12">
          <FaEnvelope
            size={18}
            className="text-white dark:text-gray-400"
          ></FaEnvelope>
          <p className="text-lg text-gray-500">{email}</p>
        </div>
        <div className="px-[6%] w-full">
          <Link
            to={`/user/${_id}`}
            className="text-center text-white font-medium w-full py-2 inline-block bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] rounded-xl"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
