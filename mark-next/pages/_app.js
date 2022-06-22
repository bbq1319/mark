import Layout from "../components/Layout";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";
import RouteGuard from "../components/RouteGuard";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function MarkApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <RouteGuard>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RouteGuard>
    </RecoilRoot>
  );
}
