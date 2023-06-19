import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/authContext";
import Loading from "./@components/common/loading";

export default function App() {
    // 프로그램 초기화 기다리기
    const userInfo = useContext(AuthContext);
    const [loading, setLoading] = useState(true); // State variable for loading status
  
    useEffect(() => {
      if (userInfo) {
        setLoading(false); // Set loading to false once userInfo is available
      }
    }, [userInfo]);
  

  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {
            loading ? (<>
              <Loading />
            </>) : (<>
              <Router />
            </>)
          }

        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
