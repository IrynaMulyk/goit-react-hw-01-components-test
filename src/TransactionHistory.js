const TransactionHistory = ({transactions}) => {
return (<table class="transaction-history">
<thead>
  <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
</thead>

<tbody>
    {transactions.map(transactionEl => {
        return (
          <tr key={transactionEl.id}>
    <td>{transactionEl.type}</td>
    <td>{transactionEl.amount}</td>
    <td>{transactionEl.currency}</td>
  </tr>  
        )
    })}
</tbody>
</table>)
};

export default TransactionHistory;
