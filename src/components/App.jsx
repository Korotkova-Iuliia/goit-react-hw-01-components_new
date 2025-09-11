import Profile from './Profile/Profile';
import userData from '../user.json';
export const App = () => {
  console.log({ userData });
  return (
    <div>
      <Profile user={userData} />
    </div>
  );
};
