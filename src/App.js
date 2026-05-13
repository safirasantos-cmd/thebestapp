import React from 'react';
import {Route, BrowserRouter, Routes, Link} from "react-router-dom";
import Card from "./cardcuteeevee";
import Homepage from "./home";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element = {<Homepage/>}/>
            <Route path="/safira" element = {<Card/>}/>

        </Routes>
        </BrowserRouter>
    )
}


export default App;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             