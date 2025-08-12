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
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <>
      <NavBar
        links={[
          { text: "home", href: "https://cinny.neocities.org" },
          { text: "github", href: "https://www.github.com/cinnyamon" },
        ]}
      ></NavBar>
      <SideBar
        links={[
          { href: "#", linkText: " About me" },
          { href: "@", linkText: " Links" },
          { href: "!", linkText: " Fav artist" },
          { href: "^", linkText: " Meow" },
        ]}
      ></SideBar>
    </>
  );
};

export default App;
