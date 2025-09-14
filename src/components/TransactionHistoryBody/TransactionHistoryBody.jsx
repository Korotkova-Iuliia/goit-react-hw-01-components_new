import * as S from './TransactionHistoryBody.styled';
function TransactionHistoryBody({ transactions }) {
  return (
    <S.Tbody>
      {transactions.map((transaction, index) => {
        const { id, type, amount, currency } = transaction;
        console.log({ index });
        return (
          <S.Tr key={id} $index={index}>
            <td>
              <div>{type}</div>
            </td>

            <td>
              <div>{amount}</div>
            </td>
            <td>
              <div>{currency} </div>
            </td>
          </S.Tr>
        );
      })}
    </S.Tbody>
  );
}
export default TransactionHistoryBody;
