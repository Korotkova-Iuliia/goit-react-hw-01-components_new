import FriendListItem from '../FriendListItem/FriendListItem';
import FriendStatus from '../FriendStatus/FriendStatus';
import * as S from './FriendList.styled';

function FriendList({ items }) {
  console.log(items);

  return (
    <S.List className="friend-list">
      {items.map(item => (
        <FriendListItem key={item.id} friend={item}>
          <FriendStatus isOnline={item.isOnline} />
        </FriendListItem>
      ))}
    </S.List>
  );
}

export default FriendList;
// {items.map(item => (
//         <Item key={item.id} className="item">
//           <StatisticItem label={item.label} percentage={item.percentage} />
//         </Item>
//       ))}
// --------------------------------------------
// Вариант 1. Динамический класс через className
// function Profile({ isOnline }) {
//   return (
//     <span
//       className={`status ${isOnline ? "online" : "offline"}`}
//     ></span>
//   );
// }
// Тогда в CSS можно описать:

// .status {
//   display: inline-block;
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
// }

// .online {
//   background-color: green;
// }

// .offline {
//   background-color: red;
// }

// --------------------------------------------
// Вариант 2. Styled-components
// import styled from "styled-components";

// const Status = styled.span`
//   display: inline-block;
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background-color: ${({ isOnline }) => (isOnline ? "green" : "red")};
// `;

// function Profile({ isOnline }) {
//   return <Status isOnline={isOnline} />;
// }

// --------------------------------------------
// Вариант 3. Tailwind (если ты его вернёшь 🙂)
// function Profile({ isOnline }) {
//   return (
//     <span
//       className={`inline-block w-3 h-3 rounded-full ${
//         isOnline ? "bg-green-500" : "bg-red-500"
//       }`}
//     ></span>
//   );
// }
