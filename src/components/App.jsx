import Profile from './Profile/Profile';
import userData from '../user.json';
export const App = () => {
  console.log({ userData });
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Profile user={userData} />
    </div>
  );
};
