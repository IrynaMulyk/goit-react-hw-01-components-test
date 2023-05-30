// import logo from './logo.svg';
// import './App.css';
import user from './user.json';
import Profile from './Profile';

import data from './data.json';
import Statistics from './Statistics';

import friends from './friends.json';
import FriendsList from './FriendList';

import transactions from './transactions.json';
import TransactionHistory from './TransactionHistory';

export default function App() {
  return (
    <div className="App">
       <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" statistic={data} />
<FriendsList friends={friends}/>
<TransactionHistory transactions={transactions}/>
    </div>
  );
};
