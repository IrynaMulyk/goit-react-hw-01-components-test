const FriendListItem = ({friend}) => {
  return (<li class="item">
  <span class="status"></span>
  <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
  <p class="name">{friend.name}</p>
</li>);
};

export default FriendListItem;
