import {useState} from "react"

function Header(){
  const [state, setState] = useState(false)
  const [cart, setCart] = useState([])

  return(
    <>
        <header className="header">
          <nav>
            <div>LOGO</div>
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
            <button onClick={() => setState(!state)}>hello</button>
          </nav>
      </header>
      <div style={state ? {} : {width: "0", padding: "0"}} className="sideBar">
          <h1>
            cart: 
            <button onClick={() => setState(prev => !prev)}>hello</button>
          </h1>
          <div className="sideBar_content">

          </div>
      </div>
    </>
    );
}

export default Header