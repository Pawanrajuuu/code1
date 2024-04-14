// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <>
    <Link to="/">
      <li>Home</li>
    </Link>
    <Link to="/about">
      <li>About</li>
    </Link>
  </>
)
export default Header
