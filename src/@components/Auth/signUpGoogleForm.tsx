import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { AuthContext } from '../../context/authContext';

export default function SignUpGoogleForm() {

  const userInfo = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state?.userData || {};
  const [nickname, setNickname] = useState(userData.nickname || '');
  const [phone, setPhone] = useState(userData.phone || '');

  const handleNicknameChange = (e:any) => {
    setNickname(e.target.value);
  };

  const handlePhoneChange = (e:any) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
  
    // Update the userData object with the new nickname and phone values
    const updatedUserData = { ...userData, nickname, phone };
  
    try {
      if(userInfo !== null){
      const db = getFirestore();
      const userRef = doc(db, 'users', userInfo.uid);

      
      await updateDoc(userRef, updatedUserData);
      navigate('/mypage');
      }else{
        navigate('/login');
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nickname:</label>
        <input type="text" value={nickname} onChange={handleNicknameChange} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" value={phone} onChange={handlePhoneChange} />
      </div>
      <button type="submit">Update</button>
    </form>
  );
}
