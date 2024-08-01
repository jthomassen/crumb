import { NavLink } from "react-router-dom";

function Wordle() {
  return (
    <div class="wordle-link-container">
        <a class="wordle-link" href="https://wordlearchive.com/719" target="_blank">
        &#8594;Click Here!&#8592;
        </a>

        <body class="subtext-wordle">&#10029; to complete your daily wordle &#10029;</body>
      
        <p>*IF YOU GET ANSWER CORRECT*</p> 
        <p>then return back here for <NavLink 
            exact to="/meeting-spot"
            activeClassName="active-nav-link"
            className="nav-link2">more info</NavLink>
        </p>
      
    </div>
  );
}

export default Wordle;
