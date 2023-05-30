import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import css from "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default FriendsList;
