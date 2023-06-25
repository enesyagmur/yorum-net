import React, { useEffect, useState } from "react";
import "../style/login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/slice";

const Login = () => {
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(data));
  }, [data]);

  const navigate = useNavigate();
  const dispacth = useDispatch();

  const enter = () => {
    console.log(data);
    navigate("/home");
  };
  const register = () => {
    if (inputName !== "" && inputPassword !== "") {
      dispacth(addUser({ name: inputName, password: inputPassword }));
    }
  };
  console.log(data);

  return (
    <div className="login">
      <div className="loginScreen">
        <div className="loginImage"></div>

        <div className="loginInput">
          <input
            type="text"
            placeholder="Kullanıcı adı girin:"
            onChange={(e) => setInputName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Şifre girin:"
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <button onClick={enter}>Giriş</button>

          <button onClick={register}>Kayıt</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
