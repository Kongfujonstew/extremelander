import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class CTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: 'EMAIL',
      placeholderColor: 'white',
      hovered: false,
      inputIsValid: false,
      input: ''
    };
  }

  componentDidMount () {
    const body = $("html, body");
    window.addEventListener('resize', () => {
      this.setPlaceholderText();
    });
    this.setPlaceholderText();
  }

  setPlaceholderText (text) {
    text = text || this.props.text || 'EMAIL'
    const placeholderText = window.innerWidth < 575 ? 
      text : 'ENTER YOUR BUSINESS EMAIL';
    this.setState({placeholderText:placeholderText});
  }

  setPlaceholderColor (color) {
    this.setState({placeholderColor: color});
  }

  handleFocus () {
    this.setState({hovered:true});
  }

  handleBlur () {
    this.setState({
      placeholderColor: 'white'
    });
    this.setPlaceholderText();
  }

  handleChange () {
    const isValid = this.validateInput();
    let ctaButton;
    if (isValid) {
      this.setState({
        inputIsValid: true,
        placeholderText: 'VALID EMAIL',
        placeholderColor: 'lightgreen'
      });
    } else {
      this.setState({
        placeholderText: 'INVALID ADDRESS',
        placeholderColor: 'red',
        inputIsValid: false
      });
    }
  }

  saveInput (input) {
    this.setState({input: input})
  }

  handleCTAClick (e) {
    const isValid = this.validateInput();
    if (isValid) {
      const ctaInput = document.getElementsByClassName(this.props.inputClassName)[0];
      const input = ctaInput.value;
      this.saveInput(input);
      setTimeout(() => {
        ctaInput.value = '';
        this.setState({isInputValid: false});
      }, 3000);
      return;
    } else {
      this.setState({
        placeholderText:'ENTER A VALID ADDRESS',
        placeholderColor:'red'
      });
    }
  }

  handleEnterKey (e) {
    const isValid = this.validateInput();
    let ctaButton;
    if (isValid && e.charCode === 13) {
      e.preventDefault();
      //wrong!!! ctaButton should be the input
      const ctaButton = document.getElementById(this.props.ctaButtonId);
      console.log(ctaButton);
      const ctaInput = document.getElementsByClassName(this.props.inputClassName)[0];
      const input = ctaInput.value;
      this.saveInput(input);
      ctaButton.click();
      setTimeout(() => {
        ctaInput.value = '';
        this.setState({isInputValid: false});
      }, 3000);
      //needs to click the real cta button
    }
  }

  validateInput () {
    const reggie = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    const input = document.getElementsByClassName(this.props.inputClassName)[0].value;
    return reggie.test(input);
  }

  render () {
    // const buttonStyle = {backgroundColor: this.props.textBackgroundColor};
    // const textStyle = {backgroundColor: this.props.textBackgroundColor};
    const placeholderColor = this.state.placeholderColor;
    const hoveredStyle = {
      color: placeholderColor,
      margin: '0 auto',
      transform: 'translateY(-16px) scale(.5)'
    };
    const validStyle = {border: '1px solid lightgreen'};

    return (
      <div className="cta">
        <Link id={this.props.ctaButtonId} className="ctaButton right hover" style={this.state.inputIsValid ? validStyle : null}
          to={this.state.inputIsValid ? '/enter' : '/'}
          onClick={this.handleCTAClick.bind(this)}
        >LEARN MORE →</Link>
        <div className="left">
          <div className="placeholder"
            style={this.state.hovered ? hoveredStyle : null}
          >{this.state.placeholderText}</div>
          <input className={this.props.inputClassName}
            onChange={this.handleChange.bind(this)}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onKeyPress={this.handleEnterKey.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default CTA;

//Props: ctaClassName buttonBackgroundColor, textBackgroundColor, inputClassName, placeholderText



