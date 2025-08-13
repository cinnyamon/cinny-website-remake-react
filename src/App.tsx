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

import NavBar from "./components/NavBar";
import { useState } from "react";
import Titles from "./components/Titles";
import Terminal from "./components/Terminal";

// import image from "./assets/window-close.svg";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <NavBar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      ></NavBar>
      <main className=" w-[100%] h-[100%] py-[55px] ">
        <Titles styles=" text-center ">
          Placeholder title. Placeholder title{" "}
          <span className="rainbow"> placeholder </span> title placeholder{" "}
          <span className="rainbow"> title </span>.
        </Titles>
        <Terminal></Terminal>
      </main>
    </>
  );
};

export default App;
