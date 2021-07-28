import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./routes";

import NavBar from "./components/Navbar/NavBar";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  const [isSideBar, setIsSideBar] = useState(false);

  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="flex">
          <SideBar isSideBar={isSideBar} />
          <div className="w-full flex flex-col">
            <NavBar isSideBar={isSideBar} setIsSideBar={setIsSideBar} />
            {routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
              ></Route>
            ))}
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
