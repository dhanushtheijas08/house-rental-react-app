import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/store/authReducer";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      dispatch(
        loginSuccess({ userEmail: storedUser.email, userUid: storedUser.uid })
      );
    }
    setIsFetching(false);
  }, [dispatch]);

  return { user, isFetching };
};

export default useAuth;
