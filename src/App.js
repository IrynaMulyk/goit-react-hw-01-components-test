import css from "./App.module.css";

import user from "./user.json";
import Profile from "./Profile/Profile";

import data from "./data.json";
import Statistics from "./Statistics/Statistics";

import friends from "./friends.json";
import FriendsList from "./FriendsList/FriendList";

import transactions from "./transactions.json";
import TransactionHistory from "./TransactionsHistory/TransactionHistory";

export default function App() {
  return (
    <div className={css.App}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistic={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
