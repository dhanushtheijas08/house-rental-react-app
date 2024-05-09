import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./service/firebase-config";
import { loginSuccess } from "./store/authReducer";

const AppLayout = () => {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const dispatch = useDispatch();
  const newUser = useSelector((state) => state.auth.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        dispatch(loginSuccess(user));
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="font-inter relative flex flex-col p-3 max-w-[90rem] mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
