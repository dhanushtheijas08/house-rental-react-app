import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { loginSuccess } from "@/store/authReducer";
import { auth } from "@/service/firebase-config";
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        dispatch(loginSuccess(user));
      } else {
        setUser(null);
      }
      setIsFetching(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  return { user, isFetching };
};

export default useAuth;
