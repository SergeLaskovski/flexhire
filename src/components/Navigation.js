import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, InputGroup, FormControl} from 'react-bootstrap';

import Menu from 'react-burger-menu/lib/menus/slide';

import '@/scss/Navigation.scss';

import {BsFillSquareFill} from 'react-icons/bs';

//get data
import mainSections from '@/data/mainSections';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({menuOpen: state.isOpen});
  }

  closeMenu() {
    this.setState({menuOpen: false});
  }
  toggleMenu() {
    this.setState((state) => ({menuOpen: !state.menuOpen}));
  }

  render() {
    return (
      <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} right width={'50%'}>
        <Container className="navigation-container d-block text-right">
          <div className="menu-item font-weight-bold">&nbsp;</div>
          <div className="menu-item font-weight-bold">&nbsp;</div>
          <div className="menu-item font-weight-bold"></div>

          <div className="menu-item font-weight-bold">
            <BsFillSquareFill />
          </div>
          <div className="menu-item font-weight-bold">
            <Link to="/about" onClick={() => this.closeMenu()}>
              About Flexhire
            </Link>
          </div>
          <div className="menu-item font-weight-bold">
            <Link to="/contact" onClick={() => this.closeMenu()}>
              Contact us
            </Link>
          </div>
        </Container>
      </Menu>
    );
  }
}

export default Navigation;
