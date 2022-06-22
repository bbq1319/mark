import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { apiSelector } from "../recoil/selectors";
import { tokenState } from "../recoil/states";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { expiredJwtException } from "../utils/modalContents";
import Seo from "../components/Seo";

export default function Home() {
  const APIs = useRecoilValue(apiSelector);
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
      const response = await APIs.getMenuList(token);
      const res = await APIs.getMenuInfo(token);
      console.log(res);

      if (response.status == 200) {
        setMenuList(response.data);
        return;
      }

      if (response.status == 500) {
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
