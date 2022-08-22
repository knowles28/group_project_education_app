// React Router
// Components - NavBar

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryContainer from "./CategoryContainer";
import NavBar from "../components/NavBar";
import HomePage from "../HomePage";
import TopicContainer from "./TopicContainer";
import ContentContainer from "./ContentContainer";
function NavgationContainer() {

/* <Route exact path="/" element={<HomePage></HomePage>} /> */
// renders our navgation bar (will most likely be a header)
// / is our home page
// /catogries is a list of all categories
// /categories/:id is the link to all topics in a category 
return (
    
    <Router>
            <NavBar />

        <Routes>
            <Route exact path="/" element={< HomePage/>} />
            <Route exact path="/categories" element={< CategoryContainer/>} />
            <Route path="/categories/:categoryId" element={<TopicContainer />}/>
            <Route path="/categories/:categoryId/:contentId" element={<p> Hello!</p>}/>
            <Route exact path="*"></Route>
        </ Routes>

    </Router>
);
}


export default NavgationContainer