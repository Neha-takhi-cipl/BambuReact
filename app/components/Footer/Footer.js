import React from 'react'
import PropTypes from 'prop-types'
import { css, merge } from "glamor";
import styles from './styles';
import { Container, Row, Col } from 'react-grid-system';

const Header = ({ }) => (
    <div {...css(styles)}>
        <Container className="main-container">
            <Row className="footer">
                Footer
            </Row>
        </Container>
    </div>
)

Header.propTypes = {

}

export default Header