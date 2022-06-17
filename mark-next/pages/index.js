import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { tokenState, loginState } from "../recoil/states";
import { useRecoilState } from "recoil";
import Seo from "../components/Seo";

export default function Home() {
  const [token, setToken] = useRecoilState(tokenState);
  const [login, setLogin] = useRecoilState(loginState);
  const router = useRouter();

  useEffect(() => {
    if (token === "") router.push("/login");
  }, []);

  return (
    <div>
      <Seo title="Home" />
      여기는 메인페이지
    </div>
  );
}
