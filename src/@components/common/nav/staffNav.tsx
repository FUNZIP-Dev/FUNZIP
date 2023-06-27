import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileDefaultIcon, StaffNavIcon } from "../../../assets";
import { AuthContext } from "../../../context/authContext";
import * as S from "./style";
import { getAuth } from "firebase/auth";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";


export default function StaffNav() {
    const userInfo = useContext(AuthContext);
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);
    

  const handleMoveToPage = (route: string) => {
    navigate(route);
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
    {isAdmin ? (
      <S.Text>관리자용</S.Text>
    ) : (
      <>
        <S.Text>사장용</S.Text>
      </>
    )}

  </S.NavBar>
  )
}
