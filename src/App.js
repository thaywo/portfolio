import React, {useRef} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import HomepageLight from "./pages/HomepageLight";
import HomepageDark from "./pages/HomepageDark";
import Homepage2 from "./pages/Homepage2";
import Homepage2Light from "./pages/Homepage2Light";
import Homepage2Dark from "./pages/Homepage2Dark";
import Homepage3 from "./pages/Homepage3";
import Homepage3Light from "./pages/Homepage3Light";
import Homepage3Dark from "./pages/Homepage3Dark";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import "./App.scss";

function App() {

  const tawkMessengerRef = useRef();

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };
  
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/dark" exact>
          <HomepageDark />
        </Route>
        <Route path="/light" exact>
          <HomepageLight />
        </Route>
        <Route path="/index-2" exact>
          <Homepage2 />
        </Route>
        <Route path="/index-2-light" exact>
          <Homepage2Light />
        </Route>
        <Route path="/index-2-dark" exact>
          <Homepage2Dark />
        </Route>
        <Route path="/index-3" exact>
          <Homepage3 />
        </Route>
        <Route path="/index-3-light" exact>
          <Homepage3Light />
        </Route>
        <Route path="/index-3-dark" exact>
          <Homepage3Dark />
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
      </Switch>
    </BrowserRouter>

    <button onClick={handleMinimize}> Minimize the Chat </button>


    <TawkMessengerReact
                propertyId="er4er626a5542b0d10b6f3e6fbd53"
                widgetId="1sgsgsg6759ylg1nlq3b2"
                useRef={tawkMessengerRef}/>

    </>
  );
}

export default App;
