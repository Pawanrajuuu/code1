// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace("/login")
  }
  return (
    <>
      <button onClick={onLogout}>logout</button>
    </>
  )
}
export default withRouter(LogoutButton)
