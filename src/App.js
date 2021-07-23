import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./routes";

import NavBar from "./components/Navbar/NavBar";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="flex">
          <SideBar />
          <div className="w-full flex flex-col">
            <NavBar />
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
