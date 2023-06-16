import React from 'react'
import './App.css'
import Cards from './Cards/Cards'
import Buttons from "./Buttons/Buttons"
 import Blog from "./components/RootBlog/Blog"
// import Blogs from "./Blogs/Blog"


const App = () => {
    return(
    <div className="Overall_Container">
        <Buttons />
            <Cards />
            <Blog/>
            
        </div>
    )
};

export default App;