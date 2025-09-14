import * as S from './FriendStatus.styled';

function FriendStatus({ isOnline }) {
  return (
    <S.Status>
      <S.BaseStatus $isOnline={isOnline} />
      <S.Text $isOnline={isOnline}>{isOnline ? 'Online' : 'Offline'}</S.Text>
    </S.Status>
  );
}

export default FriendStatus;
