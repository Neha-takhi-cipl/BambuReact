import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { css, merge } from "glamor";
import { styles } from './styles';
import { LoadingIndicator } from "components";

class OHLC extends React.Component {
    constructor(props) {
        super(props)
        // this.chartBox = React.createRef();
        this.state = {
            // chartBox: {},
            yAxis: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            xAxis: [...Array(60).keys()],
            yAxisFact: 1, //(max-min)/10
            maxLimit: 52,
            minLimit: 42,
            data: [],
            prevIsFetching: false
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data.chartLists.result && prevState.prevIsFetching !== nextProps.data.chartLists.result.isFetching) {
            const det = OHLC.yAxisDetails(nextProps.data.chartLists.result);
            return {
                data: nextProps.data.chartLists.result,
                prevIsFetching: nextProps.data.chartLists.isFetching,
                yAxisFact: det['yAxisFact'], //(max-min)/10
                maxLimit: det['yMax'],
                minLimit: det['yMin']
            }
        }
        return null
    }

    static yAxisDetails(data) {
        const allDataArr = [];
        Object.entries(data ? data : {}).map((obj) => {
            allDataArr.push(obj[1]['1. open'], obj[1]['2. high'], obj[1]['3. low'], obj[1]['4. close'])
        });
        allDataArr.sort(function (a, b) {
            return a - b;
        });
        const uniqueArr = allDataArr.filter((v, i, a) => a.indexOf(v) === i);
        const min = Math.min.apply(null, uniqueArr);
        const max = Math.max.apply(null, uniqueArr);
        return {
            yData: uniqueArr,
            yMin: Math.floor(min),
            yMax: Math.ceil(max),
            yCount: uniqueArr.length,
            yAxisFact: (Math.ceil(max) - Math.floor(min)) / 10
        }
    }
    yGrid = () => {
        var i = 73;
        return (
            <div>
                <g className="grid y-grid" id="yGrid">
                    <line x1="90" x2="705" y1={i} y2={i}></line>
                </g>
            </div>
        )
    }
    YaxisText = () => {
        const { yAxis, yAxisFact, maxLimit } = this.state
        const actualHeightFact = (this.props.height - 50) / 10;
        return yAxis.map(elm => {
            elm = parseInt(elm)
            return <text x="40" y={(actualHeightFact * elm) + 5}>{Math.floor(maxLimit - (elm * yAxisFact))}</text>
        })
    }
    XaxisText = () => {
        const { xAxis } = this.state
        const actualWidthFact = (this.props.width - 100) / xAxis.length;
        return xAxis.map(elm => {
            elm = parseInt(elm)
            return <text x={(actualWidthFact * (elm + 1)) + 50} y={this.props.height ? this.props.height - 47 : 0}>{'|'}</text>
        })
    }
    GraphPlot = () => {
        const { data } = this.state;
        const { xAxis, yAxis, yAxisFact, maxLimit } = this.state
        const actualHeightFact = (this.props.height - 50) / (yAxisFact * 10);
        const actualWidthFact = (this.props.width - 100) / xAxis.length;

        return Object.entries(data ? data : {}).map((item, i) => {
            const open = item[1]['1. open'];
            const high = item[1]['2. high'];
            const low = item[1]['3. low'];
            const close = item[1]['4. close'];
            const lineColor = close > open ? 'green' : 'red';
            const lineStart = (maxLimit - parseFloat(low)) * actualHeightFact;
            const lineEnd = (maxLimit - parseFloat(high)) * actualHeightFact;
            const openStart = (maxLimit - parseFloat(open)) * actualHeightFact;
            const closeStart = (maxLimit - parseFloat(close)) * actualHeightFact;
            if (i < 60)
                return (<g><line stroke={lineColor} x1={(actualWidthFact * (i + 1)) + 50} x2={(actualWidthFact * (i + 1)) + 50} y1={lineEnd} y2={lineStart}></line><line stroke={lineColor} x1={(actualWidthFact * (i + 1)) + 50} x2={(actualWidthFact * (i + 1)) + 50 + 5} y1={openStart} y2={openStart}></line><line stroke={lineColor} x1={(actualWidthFact * (i + 1)) + 50 - 5} x2={(actualWidthFact * (i + 1)) + 50} y1={closeStart} y2={closeStart}></line></g>)
        })
    }
    render() {
        const { yAxis, loading } = this.state;
        return (
            <div {...css(styles)}>
                {this.props.data.chartLists.isFetching ? <LoadingIndicator className="loaderStyle" /> : (
                    <svg className="graph" >

                        <g>
                            <g className="grid x-grid" id="xGrid">
                                <line x1="50" x2="50" y1="50" y2={this.props.height ? (this.props.height - 50) : 0}></line>
                            </g>

                            <g className="grid y-grid" id="yGrid">
                                <line x1="50" x2={this.props.width ? (this.props.width - 50) : 0} y1={this.props.height ? (this.props.height - 50) : 0} y2={this.props.height ? (this.props.height - 50) : 0}></line>
                            </g>
                            <g className="labels x-labels">
                                {this.XaxisText()}
                            </g>
                            <g className="labels y-labels">
                                {this.YaxisText()}
                            </g>
                            <g className="grid x-grid">
                                {this.GraphPlot()}
                            </g>
                        </g>

                    </svg>
                )
                }
            </div>
        )
    }
}
OHLC.defaultProps = {
    width: 800,
    height: 500
}
export default OHLC;