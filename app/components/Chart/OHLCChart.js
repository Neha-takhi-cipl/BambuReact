import React, { Component } from 'react';
import { lineStyles } from './styles';
import { css, merge } from "glamor";
// const pixel = 10;
const xStepInterval = 1;
const yStepInterval = 1;
const xAxisGap = 10;
const yAxisGap = 20;
const axisMargin = 25;
const xAxisShowNo = 30;
const yAxisShowNo = 10;
class OHLCChart extends Component {
    getMinX() {
        const { data } = this.props
        const only_x = data.map(obj => obj.x)
        const min_x = Math.min.apply(null, only_x)
        return min_x
    }
    getMinY() {
        const { data } = this.props
        const only_y_with_subArr = data.map(obj => obj.y)
        const only_y_with_minElem_subArr = [];
        only_y_with_subArr.map((arr) => {
            only_y_with_minElem_subArr.push(Math.min.apply(null, arr));
        });
        const min_y = Math.min.apply(null, only_y_with_minElem_subArr)
        return min_y
    }
    getMaxX() {
        const { data } = this.props
        const only_x = data.map(obj => obj.x)
        const max_x = Math.max.apply(null, only_x)
        return max_x
    }
    getMaxY() {
        const { data } = this.props
        const only_y_with_subArr = data.map(obj => obj.y)
        const only_y_with_maxElem_subArr = [];
        only_y_with_subArr.map((arr) => {
            only_y_with_maxElem_subArr.push(Math.max.apply(null, arr));
        });
        const max_y = Math.max.apply(null, only_y_with_maxElem_subArr)
        return max_y
    }
    getSvgX(x) {
        const { svgWidth } = this.props;
        return (x / this.getMaxX()) * svgWidth;
    }
    getSvgY(y) {
        const { svgHeight } = this.props;
        console.log("svg height", y, svgHeight, (y / this.getMaxY()) * svgHeight, parseInt(svgHeight - (y / this.getMaxY()) * svgHeight));
        return svgHeight - (y / this.getMaxY()) * svgHeight
    }

    getSvgYDetails() {
        const { data } = this.props;
        // const minX = this.getMinX()
        // const maxX = this.getMaxX()
        const allDataArr = [];
        const only_y_with_subArr = data.map((obj) => {
            allDataArr.push(Math.floor(...obj.y))
        });
        allDataArr.sort(function (a, b) {
            return a - b;
        });
        const uniqueArr = allDataArr.filter((v, i, a) => a.indexOf(v) === i);
        const min = Math.min.apply(null, uniqueArr);
        const max = Math.max.apply(null, uniqueArr);
        return {
            yData: uniqueArr,
            yMin: min,
            yMax: max,
            yCount: uniqueArr.length
        }
    }
    getSvgXDetails() {
        const { data } = this.props;
        const allDataArr = [];
        const only_y_with_subArr = data.map((obj) => {
            allDataArr.push(obj.x)
        });
        allDataArr.sort(function (a, b) {
            return a - b;
        });
        const uniqueArr = allDataArr.filter((v, i, a) => a.indexOf(v) === i);
        const min = Math.min.apply(null, uniqueArr);
        const max = Math.max.apply(null, uniqueArr);
        return {
            xData: uniqueArr,
            xMin: min,
            xMax: max,
            xCount: uniqueArr.length
        }
    }
    makePath() {
        const { data, color } = this.props
        let pathD = `M  ${this.getSvgX(data[0].x)} ${this.getSvgY(Math.max.apply(null, data[0].y))}`

        pathD += data.map((point, i) => {
            return `L ${this.getSvgX(point.x)} ${this.getSvgY(point.y)}`
        })

        return (
            <path className="OHLCChart_path" d={pathD} style={{ stroke: color }} />
        )
    }
    makeAxis() {
        const minX = this.getMinX()
        const maxX = this.getMaxX()
        const minY = this.getMinY()
        const maxY = this.getMaxY()
        const yDetails = this.getSvgYDetails()
        console.log("=====", minX, maxX, minY, maxY, yDetails);
        return (
            <g className="OHLCChart_axis">
                {/* horizontal line */}
                <line
                    x1={Math.floor(this.getSvgX(minX))}
                    y1={(Math.floor(yDetails.yCount) + 1) * pixel}
                    x2={Math.ceil(this.getSvgX(maxX))}
                    y2={(Math.floor(yDetails.yCount) + 1) * pixel}
                />
                {/* Vertical line */}
                <line
                    x1={Math.floor(this.getSvgX(minX))}
                    y1={(Math.floor(yDetails.yCount) + 1) * pixel}
                    x2={Math.floor(this.getSvgX(minX))}
                    y2={Math.ceil(0) * pixel}
                />
            </g>
        )
    }
    makeAxisWithEqualInterval() {
        const { svgHeight, svgWidth, yStepInterval } = this.props;
        // const xDet = this.getSvgXDetails();
        // const yDet = this.getSvgYDetails();
        // const yDetMin = yDet.yMin;
        // const yDetMax = yDet.yMax;
        return (
            <g className="OHLCChart_axis">
                {/* horizontal line */}
                <line
                    x1={0 + axisMargin}
                    y1={svgHeight - axisMargin}
                    x2={svgWidth + axisMargin}
                    y2={svgHeight - axisMargin}
                />
                {/* Vertical line */}
                <line
                    x1={0 + axisMargin}
                    y1={0}
                    x2={0 + axisMargin}
                    y2={svgHeight - axisMargin}
                />
            </g>
        )
    }
    makeHorizontalLine() {
        const { data } = this.props;
        const yDetails = this.getSvgYDetails();
        // const minX = yDetails.yMin;
        // const maxX = yDetails.yMax + 1;
        const minX = this.getMinX()
        const maxX = this.getMaxX()
        let lastElem = yDetails.yData[yDetails.yCount - 1] + 1;
        let firstElem = yDetails.yData[0];
        let i;
        let lines = [];
        le
        for (i = 1; i <= yDetails.yCount + 1; i++) {

            lines.push(
                <g key={i} className="OHLCChart_axis" >
                    {/* horizontal line */}
                    < line x1={this.getSvgX(minX)} x2={this.getSvgX(maxX)} y1={i * pixel} y2={i * pixel} ></line>
                    < text x={this.getSvgX(minX) - 25} y={i * pixel} >{firstElem}</text>
                </g>
            )
            firstElem = firstElem + yStepInterval;
        }
        return lines

    }
    makeVerticleLines() {
        const { svgHeight, svgWidth } = this.props
        const xDetails = this.getSvgXDetails();
        let i;
        const lines = [];
        let pixel = svgWidth / xAxisShowNo;
        console.log("pixel", pixel);
        for (i = 0; i <= xAxisShowNo; i++) {

            lines.push(
                <g key={i} className="OHLCChart_axis" >
                    {/* horizontal line */}
                    < line x1={((i + 1) * pixel) + axisMargin} x2={((i + 1) * pixel) + axisMargin} y1={0} y2={svgHeight - axisMargin} ></line>
                    < text x={((i + 1) * pixel) + axisMargin} y={svgHeight} >{xDetails.xData[i]}</text>
                </g>
            )

        }
        return lines

    }
    makeOHLCLine(o, h, l, c) {
        return (
            <g className="OHLCChart_axis" >
                <line x1={100} y1="0" x2="100" y2="100" />main vertical line
                <line x1="100" y1="10" x2="105" y2="10" />// above line
                <line x1="95" y1="90" x2="100" y2="90" />// below line
            </g>
        )
    }
    makeVerticalPoints() {
        const yDetails = this.getSvgYDetails();
        const { svgHeight, svgWidth } = this.props
        let i;
        const points = [];
        let pixel = svgHeight / yAxisShowNo;
        pixel++;
        let firstElem = yDetails.yMin;
        for (i = 0; i <= yAxisShowNo + 1; i++) {

            points.push(
                <g key={i} className="OHLCChart_axis neha" >
                    < text x={0} y={svgHeight - (i * pixel + axisMargin)} >{firstElem}</text>
                </g>
            )
            firstElem = firstElem + xStepInterval;
        }

        return points

    }
    makeHorizontalPoints() {
        const { svgHeight, svgWidth } = this.props
        let i;
        const points = [];
        let pixel = svgWidth / yAxisShowNo;
        for (i = 0; i <= xDetails.xCount + 1; i++) {

            points.push(
                <g key={i} className="OHLCChart_axis" >
                    < text x={(i + 1) * pixel} y={maxY + 25} >{xDetails.xData[i]}</text>
                </g>
            )
            //firstElem = firstElem + xStepInterval;
        }
        console.log("points", points);
        return points

    }
    render() {
        const { svgHeight, svgWidth } = this.props
        const yDetails = this.getSvgYDetails();
        return (
            <div {...css(lineStyles)}>
                <svg width={svgWidth} height={svgHeight}>
                    {/* {this.makePath()} */}
                    {/* {this.makeAxis()} */}
                    {this.makeAxisWithEqualInterval()}
                    {this.makeVerticleLines()}
                    {/* {this.makeHorizontalLine()} */}
                    {this.makeVerticalPoints()}
                    {this.makeOHLCLine()}

                </svg>
            </div>
        )
    }
}
OHLCChart.defaultProps = {
    data: [],
    color: '#ff4500',
    svgHeight: 400,
    svgWidth: 600,
}
export default OHLCChart