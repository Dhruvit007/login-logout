import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: true}

  test = () => {
    console.log('aaa')
  }

  login = () => {
    console.log('login button clicked')
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  logout = () => {
    console.log('logout button clicked')
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="bg-container">
        <div className="contain-container">
          {isLogin && <Message heading="Please Login" />}
          {!isLogin && <Message heading="Welcome User" />}

          {!isLogin && <Logout logout={this.logout} />}
          {isLogin && <Login login={this.login} />}
        </div>
      </div>
    )
  }
}

export default Home
