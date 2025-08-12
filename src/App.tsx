// import ListGroup from "./components/ListGroup";

// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";

// function App() {
//   const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItems = (item: string) => {
//     console.log("You selected", item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItems}
//       ></ListGroup>
//       <ListGroup
//         items={items}
//         heading="Countrieieees"
//         onSelectItem={handleSelectItems}
//       ></ListGroup>
//     </div>
//   );
// }

// export default App;

// const App = () => {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisible ? (
//         <Alert onClose={() => setAlertVisibility(false)}>Mi alerto</Alert>
//       ) : null}
//       <Button
//         btnText="uwuwuwe"
//         color="danger"
//         onClick={() => {
//           setAlertVisibility(true);
//         }}
//       ></Button>
//     </div>
//   );
// };

import NavBar from "./components/Header";
import { useState } from "react";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <NavBar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      ></NavBar>
    </>
  );
};

export default App;
