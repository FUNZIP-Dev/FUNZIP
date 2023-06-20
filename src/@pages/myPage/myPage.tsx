import Nav from "../../@components/common/nav/nav";
import { authService } from "../../fbase";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { DocumentData, collection, doc, getDoc, getFirestore } from 'firebase/firestore';

export default function MyPage() {
  const userInfo = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // State variable for loading status
  const [userProfile, setUserProfile] = useState<DocumentData | null>(null); // State variable for user profile


  // Logout function
  const handleLogout = () => {
    signOut(authService)
      .then(() => {
        alert('로그아웃 성공');
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!userInfo) {
    navigate('/login'); // Redirect to "login" route if userInfo doesn't exist
  }

/* 유저 정보 가져오기  */
  useEffect(() => {
    if (userInfo) {
      // Fetch user profile data from Firestore
      const fetchUserProfile = async () => {
        try {
          const db = getFirestore();
          const userRef = doc(collection(db, 'users'), userInfo.uid);
          const userSnapshot = await getDoc(userRef);
          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            setUserProfile(userData);
          }
          setLoading(false); // Set loading to false once user profile is available
        } catch (error) {
          console.log(error);
        }
      };
      fetchUserProfile();
    }else {
      setLoading(false); // Set loading to false if userInfo is null
    }
  }, [userInfo]);

  if (loading) {
    return <div>404NOTFOUND...</div>;
  }

  return (
    <>
      <Nav />
      {userInfo && userProfile ? (
        <>
          <div>{userProfile.displayName}님 환영합니다.</div>
          <div>이메일: {userProfile.email}</div>
          <div>전화번호: {userProfile.phone}</div>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : (
        <>
          <div>로그인이 필요합니다.</div>
        </>
      )}
    </>
  );
}
