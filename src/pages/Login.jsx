import React ,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/ApiUrls";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, []);

  const login = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`${API}/users/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      console.log(response);
      if (response.status === "success") {
        toast.success("Logged in successfully");
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("token", response.token);
        navigate("/");
      } else {
        toast.err(response.message);
      }
    } catch (err) {
      toast.error("Login failed");
      console.error(err);
    }
  };
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5 pb-12">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-amber-500 py-10 px-10">
            {/*for image*/}
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-6">
              <h1 className="font-bold text-3xl text-gray-900">Log In</h1>
              <p className="mt-4">Enter your information to Log In</p>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    Email
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      type="email"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-amber-500"
                      placeholder="abc@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label
                    htmlFor="password"
                    className="text-xs font-semibold px-1"
                  >
                    Password
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      type="password"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-amber-500"
                      placeholder="********"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    onClick={login}
                    className="block w-full max-w-xs mx-auto bg-amber-500 hover:bg-amber-700 text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    Log In
                  </button>
                </div>
              </div>
              <div className="text-center text-amber-600">
                <Link to="/signup">
                  <a>Don't have an account? Sign up.</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
