import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter, Link } from "react-router-dom";
import { Routes, Route, Navigate, useLocation } from "react-router";

function App() {
   return (
      <HashRouter>
         <div>
            <Routes>
               <Route path="/" element={<Navigate to="/Labs/a3" />} />
               {/* <Route path="/" element={<Navigate to="/Kanbas" />} /> */}
               {/* <Route path="/Labs/a4" element={<Navigate to="/Labs/a4" />} /> */}
               <Route path="/Labs/*" element={<Labs />} />
               <Route path="/hello" element={<HelloWorld />} />
               <Route path="/kanbas/*" element={<Kanbas />} />
            </Routes>
         </div>
      </HashRouter>
   );
}

export default App;
