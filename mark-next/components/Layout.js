import { useRecoilValue } from "recoil";
import { loadingState } from "../recoil/states";
import Spinner from "./Spinner";

export default function Layout({ children }) {
  const isLoading = useRecoilValue(loadingState);

  return (
    <>
      {isLoading && <Spinner />}
      {children}
      <style jsx>{`
        #app {
          /* font-family: Avenir, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          padding-left: 220px;
          margin: 50px; */
        }
      `}</style>
    </>
  );
}
