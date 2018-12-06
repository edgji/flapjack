import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

class Button extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.hoverIn = this.hoverIn.bind(this);
    this.hoverOut = this.hoverOut.bind(this);
  }

  hoverIn(){
    this.setState({hover: true});
  }
  hoverOut(){
    this.setState({hover: false});
  }

  render() {
    const {title} = this.props;

    var labelMargin = 'mgx6';
    if(this.props.size === 'large'){
      labelMargin = 'mgx10';
    }else if (this.props.size === 'small'){
      labelMargin = 'mgx2';
    }

    var backgroundClass = ' element-action-background type_color-reversed';
    if(this.props.level === 'secondary'){
      backgroundClass = ' white-background type_color-action border border-color-full'
    }
    if(this.state.hover){
      backgroundClass += ' half-opacity';
    }

    var sizeClass = ' buttons__' + this.props.size;

    var className = 'mgl2 hover-pointer flex flex-center border-box' + sizeClass + backgroundClass;

    return (
      <button onMouseLeave={this.hoverOut} onMouseEnter={this.hoverIn} 
          onClick={this.props.onClick} className={className}>
        <div className={"label nowrap " + labelMargin}>{title}</div>
      </button>
    );
  }
}

// Proptypes
Button.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'large', 'medium']),
  onClick: PropTypes.func,
};

// Default proptypes
Button.defaultProps = {
  onClick: null,
  title: "Label",
  size: "medium",
  level:"primary"
};

export default Button
