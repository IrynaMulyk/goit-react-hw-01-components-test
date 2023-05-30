import React from "react";
import PropTypes from "prop-types";
import css from "./FriendsList.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <span className={friend.isOnline ? css.isOnline : css.isOffline}></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    isOnline: PropTypes.bool,
  }),
};
export default FriendListItem;
