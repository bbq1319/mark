import APIs from "../api/index";
import Seo from "../components/Seo";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { tokenState } from "../components/recoil/states";
import { useRecoilState } from "recoil";
import { networkError, inputEmptyError } from "../utils/modalContents";

export default function Login() {
  const [token, setToken] = useRecoilState(tokenState);
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const MySwal = withReactContent(Swal);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (loginData) => {
    const response = await APIs.login(loginData);
    console.log("response==>", response);

    if (response === "error") {
      // 임시로 요따구로 했어요
      setIsError(true);
      return;
    }

    // 여기서 토큰값 response.data.data.token 로직 작성하면 되겠쥬?
  };

  const openSwal = () => {
    MySwal.fire(networkError);
    setIsError(false);
  };

  useEffect(() => {
    if (isError) {
      openSwal();
    }
  }, [isError]);

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
