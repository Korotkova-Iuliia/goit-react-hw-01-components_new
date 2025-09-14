import * as S from './TransactionHistoryHead.styled';
function TransactionHistoryHead() {
  return (
    <S.Thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </S.Thead>
  );
}
export default TransactionHistoryHead;
