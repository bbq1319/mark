import Seo from "../components/Seo";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { useAPIs } from "../hooks/useAPIs";

import { tokenState, loginState, loadingState } from "../recoil/states";
import { networkError } from "../utils/modalContents";

import styled from "@emotion/styled";
import { colors } from "../styles/variables";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const APIs = useAPIs();

  const [token, setToken] = useRecoilState(tokenState);
  const isLoaded = useSetRecoilState(loadingState);

  const MySwal = withReactContent(Swal);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    router.prefetch("/");
    if (token) {
      router.push("/");
    }
  }, [token]);

  const onSubmit = useCallback(async (loginData) => {
    isLoaded(false);
    const response = await APIs.login(loginData);
    console.log("response==>", response);
    if (response) {
      isLoaded(true);
    }

    if (response.status === 500) {
      openSwal(networkError);
      return;
    }

    // 로그인 성공!
    if (response != null && response.status == 200) {
      const resultToken = response.data.data.token;
      if (resultToken != null) setToken(resultToken);

      router.push("/");
    }
  }, []);

  const openSwal = (errorType) => {
    MySwal.fire(errorType);
  };

  return (
    <LoginContainer>
      <Seo title="Login" />

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <img
          className="login-logo"
          src="/innologo.png"
          style={{ width: "180px", marginBottom: "30px" }}
        />
        <LoginFormChildDiv>
          <LoginInput
            {...register("userEmail", { required: true })}
            type="text"
            autoComplete="false"
          />
          {errors.id?.type === "required" && "First name is required"}
          <Icon>
            <FontAwesomeIcon icon={faUser} />
          </Icon>
        </LoginFormChildDiv>
        <LoginFormChildDiv>
          <LoginInput
            {...register("password", { required: true })}
            type="password"
          />
          <Icon>
            <FontAwesomeIcon icon={faUnlockAlt} />
          </Icon>
        </LoginFormChildDiv>
        <LoginButton type="submit">Log in</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("/bg.jpeg");

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.4;
    background-color: black;
  }
`;

const LoginForm = styled.form`
  position: relative;
  text-align: center;
  margin-bottom: 30px;
`;

const LoginFormChildDiv = styled.div`
  position: relative;
  padding: 10px;
`;

const Icon = styled.i`
  position: absolute;
  left: 30px;
  top: 25px;
  color: white;
  opacity: 0.6;
`;

const LoginInput = styled.input`
  width: 265px;
  height: 50px;
  border-radius: 25px;
  padding: 0 20px 0 45px;
  border: 0px;
  color: white;
  background-color: #5a515e;

  &:focus {
    outline: 2px solid ${colors.pink[0]};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    box-shadow: 0 0 0px 1000px #5a515e inset !important;
    -webkit-box-shadow: 0 0 0px 1000px #5a515e inset !important;
    -webkit-text-fill-color: white !important;
  }
`;

const LoginButton = styled.button`
  width: 265px;
  height: 50px;
  margin: 10px 0 0 0;
  border-radius: 25px;
  border: 0px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #fb3566;
`;
