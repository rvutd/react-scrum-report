const ScrumTableData = ({ data, sno }) => {
  return (
    <tr>
      <td>{sno}</td>
      <td>{data.date}</td>
      <td>{data.time}</td>
      <td>{data.name}</td>
      <td>{8}</td>
      <td>{data.haveDone}</td>
      <td>{data.willDo}</td>
    </tr>
  )
}

export default ScrumTableData