import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { css, merge } from "glamor";
import { styles } from './styles';

class OHLC extends React.Component {
    constructor(props){
        super(props)
        this.chartBox = React.createRef();
        this.state = {
            chartBox: {},
            yAxis:[1,2,3,4,5,6,7,8,9,10],
            xAxis:[...Array(60).keys()],
            yAxisFact: 1, //(max-min)/10
            maxLimit: 52,
            minLimit: 42
            // data: props.chartLists.result
        }
    }
    componentDidMount(){
        const chartBox = this.chartBox.current.getBoundingClientRect();
        this.setState({chartBox})
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
        const { chartBox, yAxis, yAxisFact, maxLimit } = this.state
        const actualHeightFact = (chartBox.height-50)/10;
        return yAxis.map(elm => {
            elm =parseInt(elm)
            return <text x="40" y={(actualHeightFact*elm)+5}>{maxLimit-(elm*yAxisFact)}</text>
        })
    }
    XaxisText = () => {
        const { chartBox, xAxis } = this.state
        const actualWidthFact = (chartBox.width-100)/xAxis.length;
        return xAxis.map(elm => {
            elm =parseInt(elm)
            return  <text x={(actualWidthFact*(elm+1))+50} y={chartBox.height ? chartBox.height-47 : 0 }>{'|'}</text>
        })
    }
    GraphPlot = () => {
        const { data:{ chartLists: {result} }} = this.props
        const { chartBox, xAxis, yAxis, yAxisFact, maxLimit  } = this.state
        const actualHeightFact = (chartBox.height-50)/(yAxisFact*10);
        const actualWidthFact = (chartBox.width-100)/xAxis.length;

        return Object.entries(result ? result : {}).map((data, i)=>{
            const open = data[1]['1. open'];
            const high = data[1]['2. high'];
            const low = data[1]['3. low'];
            const close = data[1]['4. close'];
            const lineColor = close > open ? 'green' : 'red';
            const lineStart = (maxLimit - parseFloat(low))*actualHeightFact;
            const lineEnd = (maxLimit - parseFloat(high))*actualHeightFact;
            const openStart = (maxLimit - parseFloat(open))*actualHeightFact;
            const closeStart = (maxLimit - parseFloat(close))*actualHeightFact;
            if (i<60)
            return(<g><line stroke={lineColor} x1={(actualWidthFact*(i+1))+50} x2={(actualWidthFact*(i+1))+50} y1={lineEnd} y2={lineStart}></line><line stroke={lineColor} x1={(actualWidthFact*(i+1))+50} x2={(actualWidthFact*(i+1))+50+5} y1={openStart} y2={openStart}></line><line stroke={lineColor} x1={(actualWidthFact*(i+1))+50-5} x2={(actualWidthFact*(i+1))+50} y1={closeStart} y2={closeStart}></line></g>)
        })
    }
    render() {
        const { chartBox, yAxis } = this.state
        console.log('chartBoxWidth..', chartBox);
        return (
            <div {...css(styles)}>
                <svg className="graph" ref={this.chartBox} >
                    <g className="grid x-grid" id="xGrid">
                        <line x1="50" x2="50" y1="50" y2={chartBox.height ? (chartBox.height-50): 0}></line>
                    </g>

                    <g className="grid y-grid" id="yGrid">
                        <line x1="50" x2={chartBox.width ? (chartBox.width-50) : 0} y1={chartBox.height ? (chartBox.height-50): 0} y2={chartBox.height ? (chartBox.height-50) : 0}></line>
                    </g>
                    {/* <g className="grid x-grid" id="xGrid">
                        <line x1={chartBox.width ? (chartBox.width-50)/2 : 50 } x2={chartBox.width ? (chartBox.width-50)/2 : 50 } y1={chartBox.height ? (chartBox.height-40): 0} y2={chartBox.height ? (chartBox.height-60) : 0}></line>
                    </g> */}

                    <g className="labels x-labels">
                        {
                            this.XaxisText()
                        }
                        
                    </g>
                    <g className="labels y-labels">
                        {
                           this.YaxisText()
                        }
                    </g>
                    <g className="grid x-grid">
                        {
                           this.GraphPlot()
                        }
                    </g>
                </svg>
            </div>
        )
    }
}
export default OHLC;