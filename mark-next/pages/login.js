import Seo from "../components/Seo";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import Modal from "../components/modal/Modal";
import axios from "axios";
import { useRouter } from "next/router";

export default function login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:8080/api/v1/login", {
        userEmail: data.userEmail,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <Seo title="Login" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className="login-logo" src="/innologo.png" />
        <div>
          <input
            {...register("userEmail", { required: true })}
            type="text"
            autoComplete="false"
          />
          {errors.id?.type === "required" && "First name is required"}
          <i className="icon">
            <FontAwesomeIcon icon={faUser} />
          </i>
        </div>
        <div>
          <input
            {...register("password", { required: true })}
            type="password"
          />
          <i className="icon">
            <FontAwesomeIcon icon={faUnlockAlt} />
          </i>
        </div>
        <button className="login-btn" type="submit">
          Log in
        </button>
      </form>

      <style jsx>{`
        .login {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 100vh;
          background-image: url("/bg.jpeg");
        }

        .login::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          opacity: 0.4;
          background-color: black;
        }

        .login form {
          position: relative;
          text-align: center;
          margin-bottom: 30px;
        }

        .login form div {
          position: relative;
          padding: 10px;
        }

        .login form .icon {
          position: absolute;
          left: 30px;
          top: 25px;
          color: white;
          opacity: 0.6;
        }

        .login form input {
          width: 200px;
          height: 50px;
          border-radius: 25px;
          padding: 0 20px 0 45px;
          border: 0px;
          color: white;
          background-color: #5a515e;
        }

        .login form input:focus {
          outline: 2px solid #2a2a3a;
        }

        .login form input:-webkit-autofill,
        .login form input:-webkit-autofill:hover,
        .login form input:-webkit-autofill:focus,
        .login form input:-webkit-autofill:active {
          transition: background-color 5000s ease-in-out 0s;
          -webkit-transition: background-color 9999s ease-out;
          -webkit-box-shadow: 0 0 0px 1000px #5a515e inset !important;
          -webkit-text-fill-color: white !important;
        }

        .login-btn {
          width: 265px;
          height: 50px;
          margin: 10px 0 0 0;
          border-radius: 25px;
          border: 0px;
          font-size: 14px;
          font-weight: bold;
          color: white;
          background-color: #fb3566;
        }

        .login-logo {
          width: 180px;
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  );
}
