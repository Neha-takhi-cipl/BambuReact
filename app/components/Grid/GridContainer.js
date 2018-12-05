import React from 'react'
import PropTypes from 'prop-types'
import { css } from "glamor";
import styles from './styles';
import { Container } from 'react-grid-system';
import { Colors, Metrics } from "../../theme";

const GridContainer = ({ children, ...rest }) => (
    <Container
        style={{
            marginTop: `${Metrics.Grid.Container.marginTop}`,
            marginLeft: `${Metrics.Grid.Container.marginLeft}`,
            marginBottom: `${Metrics.Grid.Container.marginBottom}`,
            marginRight: `${Metrics.Grid.Container.marginRight}`,
            paddingTop: `${Metrics.Grid.Container.paddingTop}`,
            paddingLeft: `${Metrics.Grid.Container.paddingLeft}`,
            paddingBottom: `${Metrics.Grid.Container.paddingBottom}`,
            paddingRight: `${Metrics.Grid.Container.paddingRight}`
        }}
        {...rest}>

        {children}
    </Container>
)

GridContainer.propTypes = {

}

export default GridContainer