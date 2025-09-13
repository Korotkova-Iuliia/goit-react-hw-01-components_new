function FriendListItem({ friend, children }) {
  const { avatar, name } = friend;
  console.log(friend);
  return (
    <li className="item">
      {children} {/* вот здесь отрендерится FriendStatus */}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

export default FriendListItem;
