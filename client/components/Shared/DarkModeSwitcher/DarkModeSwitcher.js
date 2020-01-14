import React from 'react';
import ToggleSwitch from 'components/Shared/ToggleSwitch/ToggleSwitch';
import './dark-mode-switcher.css';

const darkModeTheme = 'dark-mode';

class DarkModeSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let mode = null;
    if (this.isDarkMode) {
      document.documentElement.classList.remove(darkModeTheme);
    } else {
      document.documentElement.classList.add(darkModeTheme);
      mode = darkModeTheme;
    }
    this.setState({ mode });
  }

  get isDarkMode() {
    return this.state.mode === darkModeTheme;
  }

  render() {
    return (
      <ToggleSwitch
        onChange={this.handleClick}
        className='dark-mode-switcher'
        id='themeMode'
        checked={this.isDarkMode}
      />
    );
  }
}

export default DarkModeSwitcher;
