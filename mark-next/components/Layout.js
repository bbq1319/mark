import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { tokenState, loadingState } from "../recoil/states";
import { apiSelector } from "../recoil/selectors";
import SideNavBar from "./SideNavBar";
import Spinner from "./Spinner";
import styled from "@emotion/styled";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isLoaded = useRecoilValue(loadingState);
  const APIs = useRecoilValue(apiSelector);
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
