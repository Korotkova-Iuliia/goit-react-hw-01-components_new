import * as S from './FriendListItem.styled';
function FriendListItem({ friend, children }) {
  const { avatar, name } = friend;
  console.log(friend);
  return (
    <S.Item>
      {children} {/* вот здесь отрендерится FriendStatus */}
      <S.Avatar src={avatar} alt={name} width="48" />
      <S.Name>{name}</S.Name>
    </S.Item>
  );
}

export default FriendListItem;

// function FriendListItem({ friend, children }) {
//   const { avatar, name } = friend;

//   return (
//     <li className="flex items-center justify-center gap-3 p-2 px-4 bg-white rounded-lg shadow-md not-last:mb-3">
//       {children} {/* тут будет FriendStatus */}
//       <img
//         className="rounded-full"
//         src={avatar}
//         alt={name}
//         width="48"
//         height="48"
//       />
//       <p className="text-base font-medium text-gray-800 capitalize">{name}</p>
//     </li>
//   );
// }

// export default FriendListItem;
