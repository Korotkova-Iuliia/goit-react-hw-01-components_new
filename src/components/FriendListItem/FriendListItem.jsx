import * as S from './FriendListItem.styled';
function FriendListItem({ friend, children }) {
  const { avatar, name } = friend;
  console.log(friend);
  return (
    <S.Item className="item">
      {children} {/* вот здесь отрендерится FriendStatus */}
      <S.Avatar className="avatar" src={avatar} alt={name} width="48" />
      <S.Name className="name">{name}</S.Name>
    </S.Item>
  );
}

export default FriendListItem;
