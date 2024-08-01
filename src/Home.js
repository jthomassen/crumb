import { NavLink } from "react-router-dom";
import img1 from '/Users/jeffreythomassen/development/projects/crumb/src/crumb_smiley.gif';
import img2 from '/Users/jeffreythomassen/development/projects/crumb/src/crumb_flowers.gif';
import img3 from '/Users/jeffreythomassen/development/projects/crumb/src/crumb_bears.GIF';


function Home() {
    return (
        <div class="hello-container">
            <NavLink 
                exact to="/wordle"
                activeClassName="active-nav-link"
                className="nav-link1"
            >
                <h4>Hello Crumb</h4>
                <div class="gif-container">
                    <img src={img1}class="img1"></img>
                    <img src={img2}class="img2"></img>
                    <img src={img3}class="img3"></img>
                </div>
            </NavLink>
            
        </div>
    )
}

export default Home;