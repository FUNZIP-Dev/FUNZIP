import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileDefaultIcon, StaffNavIcon } from "../../../assets";
import { AuthContext } from "../../../context/authContext";
import * as S from "./style";
import { getAuth, signOut } from "firebase/auth";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { authService } from "../../../fbase";


export default function StaffNav() {
    const userInfo = useContext(AuthContext);
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);
    

  const handleMoveToPage = (route: string) => {
    navigate(route);
  };

    // Logout function
    const handleLogout = () => {
      signOut(authService)
        .then(() => {
          navigate("/login");
        })
        .catch(error => {
          console.log(error);
        });
    };
  

  useEffect(() => {
    // Fetch user information from Firestore based on the uid
    if (userInfo) {
      const db = getFirestore();
      const auth = getAuth();
      const userRef = doc(collection(db, 'users'), userInfo.uid);
      getDoc(userRef)
        .then((doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            if (userData.staff == 2) {
              setIsAdmin(true);
            }
          }
        })
    }else{
        navigate('/login');
    }
  }, [userInfo]);

  return (
    <S.NavBar>
        
    <StaffNavIcon onClick={() => handleMoveToPage("/")} />
    <S.Text onClick={() => handleMoveToPage("/faq")}>편집 요청</S.Text>
    <S.Text onClick={() => handleMoveToPage("/review")}>내 작업</S.Text>
    {/* 로그아웃 */}
    
    {isAdmin ? (
       <S.Text>직원 관리</S.Text>
    ) : (
      ""
    )}
    <S.Text onClick={handleLogout}>로그아웃</S.Text>

  </S.NavBar>
  )
}
