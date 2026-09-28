"use client";

import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/store/store";
import { hydrateAuth } from "@/store/slices/authSlice";
import { getStoredSession } from "@/services/api/auth";

function AuthHydrator() {
  const dispatch = useDispatch();

  useEffect(() => {
    const session = getStoredSession();
    if (session?.user) {
      dispatch(hydrateAuth(session));
    }
  }, [dispatch]);

  return null;
}

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <AuthHydrator />
      {children}
    </Provider>
  );
}
