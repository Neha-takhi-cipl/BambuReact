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
    OHLCChart,
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
    ohlcArray = () => {
        let data = [   // Y: [Open, High ,Low, Close]
            { x: 2, y: [104.76, 106.28, 104.67, 105.69] },
            { x: 3, y: [105.55, 105.76, 104.12, 104.37] },
            { x: 4, y: [104.71, 105.45, 104.20, 104.51] },
            { x: 5, y: [104.66, 106.09, 103.92, 105.98] },
            { x: 6, y: [106.47, 107.65, 105.90, 106.37] },
            { x: 9, y: [106.22, 107.64, 105.96, 106.22] },
            { x: 10, y: [106.20, 106.22, 103.82, 104.29] },
            { x: 11, y: [103.64, 104.20, 102.01, 102.25] },
            { x: 12, y: [102.48, 102.55, 100.91, 101.22] },
            { x: 13, y: [102.00, 103.00, 101.52, 102.56] },
            { x: 16, y: [102.40, 102.71, 101.24, 102.35] },
            { x: 17, y: [101.90, 102.81, 101.56, 102.26] },
            { x: 10, y: [102.04, 103.61, 101.79, 103.60] },
            { x: 19, y: [104.12, 104.47, 102.36, 102.82] },
            { x: 20, y: [102.59, 102.67, 101.40, 101.55] },
            { x: 23, y: [101.92, 102.25, 101.00, 102.14] },
            { x: 24, y: [101.50, 103.00, 100.65, 100.88] },
            { x: 25, y: [100.25, 100.97, 100.06, 100.72] }
        ]

        return data;
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
                            <OHLCChart data={this.ohlcArray()} yStepInterval={1} />
                            {/* <LineChart data={this.randomArray()} /> */}
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