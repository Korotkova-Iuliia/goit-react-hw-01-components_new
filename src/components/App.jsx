import Profile from './Profile/Profile';
import StatisticList from './StatisticList/StatisticList';
import FriendList from './FriendList/FriendList';
import userData from '../user.json';
import statistics from '../data.json';
import friends from '../friends.json';
import Button from './Button/Button';
export const App = () => {
  console.log({ userData });
  console.log({ items: statistics });
  console.log({ friends });
  return (
    <div>
      <Profile user={userData} />
      <StatisticList items={statistics} />
      <StatisticList title="Upload stats" items={statistics} />
      <FriendList items={friends} />
      <Button onClick={() => alert('В корзину')} variant="primary">
        🛒 В корзину
      </Button>
      <Button onClick={() => alert('Подробнее')} variant="secondary">
        ℹ️ Подробнее
      </Button>
    </div>
  );
};
