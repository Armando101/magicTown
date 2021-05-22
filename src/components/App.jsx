import React, { useState, useEffect } from "react";
import { UserContext } from "../context/UserContext.js";
import AppRouter from "../routers/AppRouter";

import renew from "../services/auth/renew";
import getUserFavorites from "../services/favorites/getUserFavorites";

function App() {
  const [user, setUser] = useState(UserContext._currentValue);
  const [userFavorites, setUserFavorites] = useState(UserContext._currentValue);

  useEffect(() => {
    if (!user) {
      renew()
        .then((user) => {
          setUser(user);
          getUserFavorites(user.uid).then((favorites) => {
            setUserFavorites(favorites);
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, userFavorites, setUserFavorites }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
