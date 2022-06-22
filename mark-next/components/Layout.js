import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { useApis } from "../hooks/useApis";
import { tokenState, loadingState } from "../recoil/states";
import SideNavBar from "./SideNavBar";
import Spinner from "./Spinner";
import styled from "@emotion/styled";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isLoaded = useRecoilValue(loadingState);
  const APIs = useApis();
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
