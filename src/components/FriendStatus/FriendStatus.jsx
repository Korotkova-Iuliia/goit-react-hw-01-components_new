import { Online, Offline, Status } from './FriendStatus.styled';
function FriendStatus({ isOnline }) {
  if (isOnline) {
    return (
      <Status>
        <Online /> Online
      </Status>
    );
  }
  return (
    <Status>
      <Offline /> Offline
    </Status>
  );
}

export default FriendStatus;
