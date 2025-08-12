import { useState } from "react";

// {items: [], heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getInfo = (
    event: React.MouseEvent<HTMLLIElement>,
    item: string,
    index: number
  ) => {
    console.log(event);
    console.log(item, index);
  };

  // items = []

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No item found</p>
  //     </>
  //   );

  // const message = items.length === 0 ? <p>No Item found</p> : null; use this in the brackets the same way as the function

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };

  return (
    <>
      <h1>{heading}</h1>

      {/* {getMessage()} */}

      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => {
              setSelectedIndex(index);
              onSelectItem(item);
              getInfo(event, item, index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
