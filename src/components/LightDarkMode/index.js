import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  changeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const classname = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="app">
        <div className={classname}>
          <h1>Click to change mode</h1>
          <button className="button" type="button" onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
