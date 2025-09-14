import styled from 'styled-components';

// export const Tbody = styled.tbody`
//   text-align: center;
//   font-size: 14px;
//   font-weight: 500;
//   color: #000000ff;

//   & td {
//     padding: 8px 16px;
//     border: 1px solid #252121ff;
//   }
// `;
// export const Tr = styled.tr`
//   background-color: #8fbbe7ff;
//   &:nth-child(even) {
//     background-color: #e59191ff;
//   }
//   &:hover {
//     background-color: #f4f4f4;
//     font-weight: 800;
//     transform: scale(1.05);
//     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
//     transition: all 0.3s ease-in-out;
//     cursor: pointer;
//   }
// `;

export const Tbody = styled.tbody`
  font-size: 14px;
  text-align: center;
`;
export const Tr = styled.tr`
  background-color: ${({ $index }) =>
    $index % 2 === 0 ? '#e4b2b2ff' : '#a8d0f0ff'};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ $index }) =>
      $index % 2 === 0 ? '#c43663ff' : '#6797c9ff'};
    cursor: pointer;
  }

  td {
    padding: 8px 16px;
    border: 1px solid #252121ff;
    text-align: center;
  }
`;
// export const Tbody = styled.tbody`
//   font-size: 14px;
//   text-align: center;
//   & tr:nth-child(even) {
//     background-color: #e4b2b2ff;
//     &:hover {
//       background-color: #c43663ff;
//     }
//   }

//   & tr:nth-child(odd) {
//     background-color: #a8d0f0ff;
//     &:hover {
//       background-color: #6797c9ff;
//     }
//   }
// `;
