export default function TableCart({ item }) {
  return (
    <>
      <tr>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td>
          <input type="number" />
        </td>
        <td>${item.price}</td>
      </tr>
    </>
  );
}
