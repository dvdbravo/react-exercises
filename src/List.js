const List = (props) => {
  return (
    <ul>
      {props.list.map((item) => {
        console.log(props);
        return (
          <li key={item.objectID}>
            <h3>
              <a href={item.url}>{item.title}</a>
            </h3>
            <span>{item.url}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
