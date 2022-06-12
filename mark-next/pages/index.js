import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const [userList, setUserList] = useState();
  const [token, checkToken] = useState();
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/check/token")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);

        if (error.response.data.error === "invalid token") {
          console.log("hi");
          router.push("/login");
        }
      });
  }, []);

  // useEffect(() => {
  //   axios.get("/api/todos").then((res) => {
  //     console.log(res.data);
  //   })(async () => {
  //     const result = await (
  //       await fetch(`http://localhost:8080/api/v1/check/token`)
  //     ).json();
  //     // const results = await (await fetch(`/api/userList`)).json();

  //     console.log(result);
  //   })();
  // }, []);

  return (
    <div>
      <Seo title="Home" />
      {!userList && <h4>Loading...</h4>}
      {userList?.map((user) => (
        <div key={user.id}>
          <h4>{user.username}</h4>
        </div>
      ))}
    </div>
  );
}
