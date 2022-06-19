import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { tokenState } from "../recoil/states";
import { useRecoilState } from "recoil";
import { expiredJwtException } from "../utils/modalContents";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Seo from "../components/Seo";
import APIs from "../api";

export default function Home() {
  const [token, setToken] = useRecoilState(tokenState);
  const [menuList, setMenuList] = useState([]);
  const router = useRouter();

  const MySwal = withReactContent(Swal);
  const openSwal = (errorType) => {
    MySwal.fire(errorType);
  };

  useEffect(() => {
    if (token === "") router.push("/login");
  }, []);

  useEffect(() => {
    const getMenuList = async () => {
      const response = await APIs.menuList(token);
      if (response.status == 200) setMenuList(response.data);
      else if (response.status == 500) {
        const message = response.data.message;
        if (message === "ExpiredJwtException") {
          openSwal(expiredJwtException);
          setToken("");
          router.push("/login");
        }
      }
    };
    getMenuList();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      <div>
        {menuList?.map(function (menu) {
          return <p key={menu.id}>{menu.menuName}</p>;
        })}
      </div>
    </div>
  );
}
