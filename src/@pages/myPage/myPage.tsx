import Nav from "../../@components/common/nav/nav";
import { authService } from "../../fbase";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const userInfo = useContext(AuthContext);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // State variable for loading status

  // Logout function
  const handleLogout = () => {
    signOut(authService)
      .then(() => {
        alert("로그아웃 성공");
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!userInfo) {
    navigate("/login"); // Redirect to "mypage" route if userInfo exists
  }

  useEffect(() => {
    if (userInfo) {
      setLoading(false); // Set loading to false once userInfo is available
    }
  }, [userInfo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    
      <Nav />
      {
        userInfo ? (<>
          <div>{userInfo.displayName}님 환영합니다.</div>
          <button onClick={handleLogout}>로그아웃</button>
        </>):(
          <>
          <div>
            로그인이 필요합니다.
          </div>
          
          </>
        )
      }
      
    </>
  );
}
