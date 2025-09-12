import Profile from './Profile/Profile';
import StatisticList from './StatisticList/StatisticList';
import userData from '../user.json';
import statistics from '../data.json';

export const App = () => {
  console.log({ userData });
  console.log({ items: statistics });
  return (
    <div>
      <Profile user={userData} />
      <StatisticList items={statistics} />
      <StatisticList title="Upload stats" items={statistics} />
    </div>
  );
};
