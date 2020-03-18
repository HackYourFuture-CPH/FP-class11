import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class AccordionItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.mounted = true;
  }

  componentDidMount() {
    if (this.props.atomic) {
      document.addEventListener('click', this.handleDocumentClick, false);
      document.addEventListener('touchend', this.handleDocumentClick, false);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  }

  handleDocumentClick = (event) => {
    if (
      this.mounted &&
      !ReactDOM.this.node.contains(event.target) &&
      this.state.isOpen
    ) {
      this.setState({ isOpen: false });
    }
  };

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const accordionItemClassNames = classNames([
      'accordion-item',
      {
        active: this.state.isOpen
      }
    ]);

    return (
      <div className={accordionItemClassNames}>
        <button type="submit" className="title" onClick={this.onClick}>
          {this.props.title}
        </button>
        <div className="panel">{this.props.children}</div>
      </div>
    );
  }
}

export default AccordionItem;

AccordionItem.propTypes = {
  atomic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
