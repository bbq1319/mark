import Link from "next/link";
import { useRouter } from "next/router";

import logo from "../public/innologo.png";
import Image from "next/image";

import styled from "@emotion/styled";
import { colors } from "../styles/variables";

export default function SideNavBar() {
  const router = useRouter();

  return (
    <SideNavContainer>
      <SideNavHeader>
        <Link href="/">
          <a>
            <Image src={logo} alt="마크앤" />
          </a>
        </Link>
      </SideNavHeader>
      <SideNavHr />
      <SideNav>
        <Navbar>
          <li>
            <Link href={"/ "}>
              <NavMenu className={router.pathname === "/" ? "active" : null}>
                대시보드
              </NavMenu>
            </Link>
          </li>
          <li>
            <Link href={"/table"}>
              <NavMenu
                className={router.pathname === "/table" ? "active" : null}
              >
                음료주문
              </NavMenu>
            </Link>
          </li>
        </Navbar>
      </SideNav>
    </SideNavContainer>
  );
}

const SideNavContainer = styled.aside`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 15rem !important;
  overflow-y: auto;
  padding: 0;
  transition: all 0.2s ease-in-out;
  z-index: 9999;
  background-image: linear-gradient(195deg, #42424a, #191919);
  border-radius: 0.75rem;
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
  margin-left: 1rem !important;
`;

const SideNavHeader = styled.div`
  color: ${colors.pink[0]};
  padding: 1.5rem 2rem;
`;

const SideNavHr = styled.hr`
  height: 2px;
  border: 0;
  border-top: none;
  border-top: 1px solid;
  opacity: 0.25;
  background-image: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0),
    #fff,
    hsla(0, 0%, 100%, 0)
  );
`;

const SideNav = styled.nav`
  display: block;
  overflow: auto;
  height: calc(100vh - 360px);
  color: #fff;
`;

const Navbar = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  & > li {
    margin-top: 0.125rem;
  }
`;

const NavMenu = styled.a`
  display: block;
  padding: 0.75rem 1.5rem;
  margin: 0 1rem;
  margin-bottom: 1.5px;
  cursor: pointer;
  border-radius: 0.375rem;

  &.active {
    background-image: linear-gradient(195deg, #ec407a, #d81b60);
  }

  &:hover {
    background-color: ${(props) => !props.active && "hsla(0, 0%, 78%, 0.2)"};
  }
`;
