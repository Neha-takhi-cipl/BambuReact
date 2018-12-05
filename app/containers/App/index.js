import React from 'react'
import PropTypes from 'prop-types'
import { css, merge } from "glamor";
import styles from './styles';

import {
    Header,
    Footer,
    Sidebar,
    GridContainer,
    GridRow,
    GridCol,
    OHLC,
    LineChart
} from 'components';

class App extends React.Component {
    randomArray = (total = 10) => {
        let data = []
        for (let element = 0; element < total; element++) {
            const y = Math.floor(Math.random() * 50) + 50
            const obj = {
                x: element,
                y,
            }
            data.push(obj)
        }
        return data
    }
    handleStockClick = (id) => {
        console.log("id is", id);
    }
    render() {
        return (
            <div {...css(styles)}>
                <Header />
                <GridContainer>
                    <GridRow>
                        <GridCol sm={4}>
                            <Sidebar onClick={(id) => this.handleStockClick(id)} />
                        </GridCol>
                        <GridCol sm={8}>
                            <OHLC />
                            <LineChart data={this.randomArray()} />
                        </GridCol>
                    </GridRow>
                </GridContainer>
                <Footer />
            </div>
        )
    }
}
App.propTypes = {

}

export default App