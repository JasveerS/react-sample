import React from 'react';
import { Link, BrowserRouter} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './home'
import News from './news'


const Header=()=>{
    return(
       
        <BrowserRouter>
            <div>
              <Route path={"/"} exect componets={Home} />
                <Route path={"/news"} componets={News} />   


            </div>
        </BrowserRouter>
        
    )
}
export default Header;