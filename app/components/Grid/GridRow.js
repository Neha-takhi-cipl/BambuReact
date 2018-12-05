import React from 'react'
import PropTypes from 'prop-types'
import { css, merge } from "glamor";
import styles from './styles';
import { Row } from 'react-grid-system';
import { Colors, Metrics } from "../../theme";

const GridRow = ({ children, ...rest }) => (
    <Row
        style={{
            marginTop: `${Metrics.Grid.Row.marginTop}`,
            marginLeft: `${Metrics.Grid.Row.marginLeft}`,
            marginBottom: `${Metrics.Grid.Row.marginBottom}`,
            marginRight: `${Metrics.Grid.Row.marginRight}`,
            paddingTop: `${Metrics.Grid.Row.paddingTop}`,
            paddingLeft: `${Metrics.Grid.Row.paddingLeft}`,
            paddingBottom: `${Metrics.Grid.Row.paddingBottom}`,
            paddingRight: `${Metrics.Grid.Row.paddingRight}`
        }}
        {...rest}>
        {children}
    </Row>
)

GridRow.propTypes = {

}

export default GridRow