const TableRow = ({
  key = 0,
  answers = ["Bills", "Needs", "Wants"],
  availableAmounts = [300, 200, 600],
  assignedAmounts = [150, 240, 560],
}) => {
  return (
    <>
      {answers.map((answer, index) => (
        <tr 
          key={`${key}-${index}`} 
          className="border border-gray-500 hover:bg-gray-50"
        >
          <td className="border border-gray-500 px-4 py-2">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox accent-blue-500"
              aria-label={`Select ${answer}`}
            />
          </td>
          <td className="border border-gray-500 px-4 py-2 text-left">
            {answer}
          </td>
          <td className="border border-gray-500 px-4 py-2 text-right">
            ${availableAmounts[index].toLocaleString()}
          </td>
          <td className="border border-gray-500 px-4 py-2 text-right">
            ${assignedAmounts[index].toLocaleString()}
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;