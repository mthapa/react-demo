function ListGroup() {
  let items = ["New York", "San Francisco", "Des Moines", "Idaho"];
  //items = [];
  const handleClick = (event) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p> No Item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
