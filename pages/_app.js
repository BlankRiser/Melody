import LayoutWrapper from "layouts/LayoutWrapper";
import "styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
}

export default MyApp;
