//authProvider.tsx
import { User } from "@firebase/auth";
import { useEffect, useState } from "react";
import { authService } from "../../src/fbase";
import { AuthContext } from "../context/authContext";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscribe = authService.onAuthStateChanged((fbUser) => {
      // console.log(`구독 실행`, fbUser);
      setUser(fbUser);
    });
    return subscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
