import { useContext, useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Loading from "./@components/common/loading.js";
import Router from "./Router.jsx";
import { AuthContext } from "./context/authContext.js";
import { GlobalStyle } from "./style/globalStyle.js";
import { theme } from "./style/theme.js";

export default function App() {
  // 프로그램 초기화 기다리기
  const userInfo = useContext(AuthContext);
  const [loading, setLoading] = useState(true); // State variable for loading status

  useEffect(() => {
    setLoading(false); // Set loading to false once userInfo is available
  }, [userInfo]);

  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {loading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              <Router />
            </>
          )}
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
