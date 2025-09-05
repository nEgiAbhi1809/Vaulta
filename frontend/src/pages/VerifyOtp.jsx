// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { server } from "../main";
// import { toast } from "react-toastify";
// import { AppData } from "../context/AppContext";

// const VerifyOtp = () => {
//   const [otp, setOtp] = useState("");
//   const [btnLoading, setBtnLoading] = useState(false);
//   const navigate = useNavigate();
//   const { setIsAuth, setUser } = AppData();

//   const submitHandler = async (e) => {
//     setBtnLoading(true);
//     e.preventDefault();

//     const email = localStorage.getItem("email");
//     try {
//       const { data } = await axios.post(
//         `${server}/api/v1/verify`,
//         { email, otp },
//         {
//           withCredentials: true,
//         }
//       );

//       toast.success(data.message);
//       setIsAuth(true);
//       setUser(data.user);
//       localStorage.clear("email");
//       navigate("/");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     } finally {
//       setBtnLoading(false);
//     }
//   };
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
//         <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
//           <h1 className="title-font font-medium text-3xl text-gray-900">
//             Slow-carb next level shoindcgoitch ethical authentic, poko scenester
//           </h1>
//           <p className="leading-relaxed mt-4">
//             Poke slow-carb mixtape knausgaard, typewriter street art gentrify
//             hammock starladder roathse. Craies vegan tousled etsy austin.
//           </p>
//         </div>
//         <form
//           onSubmit={submitHandler}
//           className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
//         >
//           <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
//             Verify Using otp
//           </h2>
//           <div className="relative mb-4">
//             <label htmlFor="otp" className="leading-7 text-sm text-gray-600">
//               Otp
//             </label>
//             <input
//               type="number"
//               id="otp"
//               name="otp"
//               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//             disabled={btnLoading}
//           >
//             {btnLoading ? "Submitting..." : "Button"}
//           </button>
//           <Link to={"/login"} className="text-xs text-gray-500 mt-3">
//             go to login page
//           </Link>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default VerifyOtp;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../main";
import { toast } from "react-toastify";
import { AppData } from "../context/AppContext";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsAuth, setUser } = AppData();

  const submitHandler = async (e) => {
    setBtnLoading(true);
    e.preventDefault();

    const email = localStorage.getItem("email");
    try {
      const { data } = await axios.post(
        `${server}/api/v1/verify`,
        { email, otp },
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuth(true);
      setUser(data.user);
      localStorage.clear("email");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 overflow-hidden">
        
        {/* Left Side Content */}
        <div className="md:w-1/2 hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-10">
          <h1 className="text-4xl font-bold mb-4 text-center leading-snug">
            Verify Your Account 🔐
          </h1>
          <p className="text-center text-lg opacity-90">
            Enter the OTP we just sent to your email to continue securely.
          </p>
        </div>

        {/* OTP Form */}
        <form
          onSubmit={submitHandler}
          className="w-full md:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
            Verify OTP
          </h2>

          <div className="mb-6">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-600">
              OTP
            </label>
            <input
              type="number"
              id="otp"
              name="otp"
              className="mt-2 w-full px-4 py-3 border rounded-xl text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              placeholder="Enter 6-digit OTP"
            />
          </div>

          <button
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:from-purple-700 hover:to-indigo-700 transition disabled:opacity-50"
            disabled={btnLoading}
          >
            {btnLoading ? "Verifying..." : "Verify OTP"}
          </button>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Wrong page?{" "}
            <Link
              to={"/login"}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Go back to Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default VerifyOtp;
