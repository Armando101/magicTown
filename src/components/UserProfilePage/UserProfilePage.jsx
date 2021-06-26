import React, { useContext } from "react";

import { UserContext } from "../../context/UserContext";
import { useLocation } from "react-router-dom";

import UserReviews from "./UserReviews/UserReviews";
import UserFavorites from "./UserFavorites/UserFavorites";
import UserInfo from "./UserInfo/UserInfo";
import ProfileCover from "../common/ProfileCover/ProfileCover";

import "./UserProfilePage.scss";

const UserProfilePage = () => {
  const { user, setUser } = useContext(UserContext);

  const { pathname } = useLocation();

  const PROFILE_VIEWS = {
    "/profile/reviews": <UserReviews {...user} />,
    "/profile/favorites": <UserFavorites />,
    "/profile": <UserInfo />,
  };

  return (
    <>
      <div className="favorite__cover"></div>
      <section>
        <ProfileCover {...user} setUser={setUser} />
        {PROFILE_VIEWS[pathname] || <UserInfo />}
      </section>
    </>
  );
};

export default UserProfilePage;
