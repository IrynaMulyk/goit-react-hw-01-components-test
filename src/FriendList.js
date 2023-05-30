import FriendListItem from "./FriendListItem";
const FriendsList = ({friends}) => {
    return (
    <ul class="friend-list">
{friends.map(friend => {return <FriendListItem key={friend.id} friend={friend}/>})}
</ul>);
  }

  export default FriendsList;