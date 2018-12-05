import React from 'react';
import PropTypes from 'prop-types';
import { css, merge } from "glamor";
import styles from './styles';
import { GridContainer, GridRow, GridCol } from 'components';
import sidebar from './fixtures/sidebar.json';

class Sidebar extends React.Component {

    handleClick = (e, id) => {
        e.preventDefault();
        const { onClick } = this.props;
        onClick(id);
    }
    render() {
        const { data } = this.props;
        return (
            <div {...css(styles)}>
                <GridContainer className="main-container">
                    {
                        data.map((item, key) => {
                            return (
                                <GridRow key={key} className="row" onClick={(e) => this.handleClick(e, item.id)}>
                                    {item.name}
                                </GridRow>
                            )
                        })
                    }
                </GridContainer>
            </div>
        );
    }
}
Sidebar.propTypes = {
    data: PropTypes.any
}
Sidebar.defaultProps = {
    data: sidebar
}
export default Sidebar