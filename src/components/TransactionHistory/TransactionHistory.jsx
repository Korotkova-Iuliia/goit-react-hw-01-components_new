import * as S from './TransactionHistory.styled';
import TransactionHistoryHead from '../TransactionHistoryHead/TransactionHistoryHead';
import TransactionHistoryBody from '../TransactionHistoryBody/TransactionHistoryBody';

function TransactionHistory({ items }) {
  console.log(items);
  return (
    <S.Table>
      <TransactionHistoryHead transactions={items} />
      <TransactionHistoryBody transactions={items} />
    </S.Table>
  );
}

export default TransactionHistory;
