import Profile from './Profile/Profile';
import StatisticList from './StatisticList/StatisticList';
import FriendList from './FriendList/FriendList';
import Section from './Section/Section';
import Button from './Button/Button';

import userData from '../user.json';
import statistics from '../data.json';
import friends from '../friends.json';

export const App = () => {
  console.log({ userData });
  console.log({ items: statistics });
  console.log({ friends });
  return (
    <>
      <Section title="User Profile">
        <Profile user={userData} />
      </Section>

      <Section title="Statistics">
        <StatisticList items={statistics} />
      </Section>

      <Section title="Upload stats">
        <StatisticList title="Upload stats" items={statistics} />
      </Section>

      <Section title="Friends">
        <FriendList items={friends} />
      </Section>
      <Section>
        {' '}
        <Button onClick={() => alert('В корзину')} variant="primary">
          🛒 В корзину
        </Button>
        <Button onClick={() => alert('Подробнее')} variant="secondary">
          ℹ️ Подробнее
        </Button>
      </Section>
    </>
  );
};
