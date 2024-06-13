import login from "../../assets/login.png";
import colorgoogle from "../../assets/colorgoogle.svg";
import colorlinkedin from "../../assets/colorlinkedin.svg";
import InputField from "../InputField";
import { MdOutlineMail } from "react-icons/md";
import { Divider, message } from "antd";
import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import passicon from "../../assets/passicon.svg";
import { Link } from "react-router-dom";
const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleChange = (e) => {
        setEmail(e.target.value);
    };
    const handleLogin = () => {
        if (!email || !password) {
            messageApi.open({
                type: "warning",
                content: "Fields cannot be empty",
            });
        } else if (!email.includes("@")) {
            messageApi.open({
                type: "warning",
                content: "Not a valid email",
            });
        } else {
            messageApi.open({
                type: "success",
                content: "Login Success",
            });
        }
    };
    return (
        <div className="flex items-center h-screen relative justify-between">
            {contextHolder}
            <div className="flex flex-col items-center justify-center h-full lg:flex-[0.5] flex-1">
                <div className="max-w-[400px]">
                    <h2 className="font-bold text-[40px]">
                        Login to your Account
                    </h2>
                    <p className="font-normal text-[#71717A] text-xl">
                        Welcome back! Select method to log in:
                    </p>
                    <div className="flex items-center my-4 gap-x-5 justify-between">
                        <div className="border-2 flex-[0.5] border-inputBorderColor flex items-center justify-center gap-2 rounded-lg px-6 py-2">
                            <img
                                className="max-w-[20px]"
                                src={colorgoogle}
                                alt=""
                            />
                            <p>Google</p>
                        </div>
                        <div className="border-2 flex-[0.5] border-inputBorderColor flex items-center justify-center gap-2 rounded-lg px-6 py-2">
                            <img
                                className="max-w-[20px]"
                                src={colorlinkedin}
                                alt=""
                            />
                            <p>Linkedin</p>
                        </div>
                    </div>
                    <Divider
                        style={{
                            color: "#71717A",
                            fontSize: "14px",
                            marginBottom: "16px",
                        }}
                    >
                        or continue with email
                    </Divider>
                    <div className="flex flex-col gap-y-5">
                        <InputField
                            placeholder={"Email"}
                            name="email"
                            onChange={handleChange}
                            type={"email"}
                            icon={
                                <MdOutlineMail className="text-[#C4C9ED] text-2xl" />
                            }
                        />
                        <div className="bg-[#EAEFFF] border-2 flex items-center gap-x-2 border-inputBorderColor rounded-lg w-[400px] px-2 py-3">
                            <img
                                className="max-w-[24px]"
                                src={passicon}
                                alt=""
                            />
                            <input
                                name="password"
                                className="bg-transparent outline-none border-none w-full"
                                type={showPassword ? "text" : "password"}
                                placeholder="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button onClick={toggleShowPassword}>
                                {showPassword ? (
                                    <RiEyeOffLine className="text-[#C4C9ED] text-2xl" />
                                ) : (
                                    <RiEyeLine className="text-[#C4C9ED] text-2xl" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full mt-2">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="font-light text-[#71717A]">
                                Remember
                            </p>
                        </div>
                        <Link
                            to={"/forgot"}
                            className="text-[#8098F9] font-semibold"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <button
                        onClick={handleLogin}
                        className="w-full text-white bg-primaryColor rounded-lg py-3 mt-6 font-semibold text-xl"
                    >
                        LOGIN
                    </button>
                    <p className="text-[#71717A] font-light text-center mt-2">
                        Don’t have account?{" "}
                        <Link
                            to={"/getstart"}
                            className="text-[#8098F9] font-semibold"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
            <div className="bg-primaryColor lg:flex hidden items-center justify-center flex-col h-screen flex-[0.5]">
                <img className="max-w-[400px]" src={login} alt="" />
                <h2 className="text-center text-[#E0EAFF] font-bold text-xl mt-6">
                    Connect with any device.
                </h2>
                <p className="text-center font-medium text-[#E0EAFF]">
                    Everything you need is an internet connection
                </p>
            </div>
        </div>
    );
};
export default Login;
