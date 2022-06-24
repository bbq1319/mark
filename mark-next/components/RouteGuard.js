import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { useAPIs } from "../hooks/useAPIs";
import { tokenState } from "../recoil/states";

const RouteGuard = ({ children }) => {
  const router = useRouter();
  const APIs = useAPIs();
  const [authorized, setAuthorized] = useState(false);

  const token = useRecoilValue(tokenState);

  useEffect(() => {
    authCheck(router.asPath);

    // 라우트 변동 시작 - 페이지 컨텐트 숨기기
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // 라우트 변동 완료 - authCheck 실행
    router.events.on("routeChangeComplete", authCheck);

    // 클린업
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [token]);

  const authCheck = (url) => {
    const publicPaths = ["/login"];
    const path = url.split("?")[0];

    if (!token && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push("/login");
    } else {
      setAuthorized(true);
    }
  };

  return authorized ? children : null;
};

export default RouteGuard;
