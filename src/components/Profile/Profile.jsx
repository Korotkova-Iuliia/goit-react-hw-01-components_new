import {
  Container,
  Avatar,
  AvatarDescription,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

function Profile({ user }) {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  // const { followers, views, likes } = user.stats;
  return (
    <Container>
      <Name>{username}</Name>
      <AvatarDescription>
        <Avatar src={avatar} alt={username} />
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </AvatarDescription>
      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </Container>
  );
}
//  return (
//    <div>
//      <p className="name">{username}</p>
//      <div className="description">
//        <img src={avatar} alt={username} className="avatar" />
//        <p className="name">{username}</p> <p className="tag">{tag}</p>
//        <p className="location">{location}</p>
//      </div>
//      <ul className="stats">
//        <li>
//          <span className="label">Followers</span>
//          <span className="quantity">{followers}</span>
//        </li>
//        <li>
//          <span className="label">Views</span>
//          <span className="quantity">{views}</span>
//        </li>
//        <li>
//          <span className="label">Likes</span>
//          <span className="quantity">{likes}</span>
//        </li>
//      </ul>
//    </div>
//  );
//   return (
//     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
//       {/* Верхняя часть с аватаром */}
//       <div className="flex flex-col items-center p-6">
//         <img
//           src={avatar}
//           alt={username}
//           className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
//         />
//         <p className="mt-4 text-xl font-bold text-gray-800">{username}</p>
//         <p className="text-sm text-gray-500">{tag}</p>
//         <p className="text-sm text-gray-600">{location}</p>
//       </div>

//       {/* Статистика */}
//       <ul className="flex border-t border-gray-200 divide-x divide-gray-200 bg-gray-50">
//         <li className="flex-1 text-center p-4">
//           <span className="block text-sm text-gray-500">Followers</span>
//           <span className="block text-lg font-semibold text-gray-800">
//             {followers}
//           </span>
//         </li>
//         <li className="flex-1 text-center p-4">
//           <span className="block text-sm text-gray-500">Views</span>
//           <span className="block text-lg font-semibold text-gray-800">
//             {views}
//           </span>
//         </li>
//         <li className="flex-1 text-center p-4">
//           <span className="block text-sm text-gray-500">Likes</span>
//           <span className="block text-lg font-semibold text-gray-800">
//             {likes}
//           </span>
//         </li>
//       </ul>
//     </div>
//   );
// }

export default Profile;
