import React from 'react'
import PropTypes from 'prop-types'
import { css, merge } from "glamor";
import styles from './styles';
import { Col } from 'react-grid-system';
import { Colors, Metrics } from "../../theme";

const GridCol = ({ children, ...rest }) => (
    <Col style={{
        marginTop: `${Metrics.Grid.Col.marginTop}`,
        marginLeft: `${Metrics.Grid.Col.marginLeft}`,
        marginBottom: `${Metrics.Grid.Col.marginBottom}`,
        marginRight: `${Metrics.Grid.Col.marginRight}`,
        paddingTop: `${Metrics.Grid.Col.paddingTop}`,
        paddingLeft: `${Metrics.Grid.Col.paddingLeft}`,
        paddingBottom: `${Metrics.Grid.Col.paddingBottom}`,
        paddingRight: `${Metrics.Grid.Col.paddingRight}`
    }}
        {...rest}>
        {children}
    </Col>
)

GridCol.propTypes = {

}

export default GridCol