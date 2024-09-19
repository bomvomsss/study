import { Link } from 'react-router-dom';

function Navbar() {

  return(
    <div className="navbar">
      <Link to="/" className="title"><h1>A journey</h1></Link>
      <Link to="/voyager">voyager</Link>
      <Link to="/youth">youth</Link>
      <Link to="/stardust">stardust</Link>
      <Link to="/gravity">gravity</Link>
    </div>
  )
}

export default Navbar;