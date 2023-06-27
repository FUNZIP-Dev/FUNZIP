import { useContext, useState } from "react";
import Nav from "../../@components/common/nav/nav";
import { AuthContext } from "../../context/authContext";

export default function Main() {
  const userInfo = useContext(AuthContext);
  const [orderList, setOrderList] = useState<any>();
  const [id, setId] = useState(userInfo?.uid);

  return (
    <>
      <Nav />
    </>
  );
}
