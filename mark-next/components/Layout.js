import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { useAPIs } from "../hooks/useAPIs";
import { tokenState, loadingState } from "../recoil/states";
import SideNavBar from "./SideNavBar";
import Spinner from "./Spinner";
import styled from "@emotion/styled";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isLoaded = useRecoilValue(loadingState);
  const APIs = useAPIs();
  const token = useRecoilValue(tokenState);

  useEffect(() => {
    APIs.checkToken(token);
  }, []);

  return (
    <>
      {!isLoaded && <Spinner />}
      {pathname !== "/login" && <SideNavBar />}
      <Main pathname={pathname}>{children}</Main>
    </>
  );
}

const Main = styled.main`
  margin-left: ${(props) => (props.pathname === "/login" ? 0 : "17rem")};
`;
