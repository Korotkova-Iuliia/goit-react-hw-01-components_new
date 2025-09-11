import Profile from './Profile/Profile';
import userData from '../user.json';
export const App = () => {
  console.log({ userData });
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Profile user={userData} />
    </div>
  );
};
