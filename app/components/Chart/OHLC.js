import React from 'react'
import PropTypes from 'prop-types'
import { css, merge } from "glamor";
import { styles } from './styles';

class OHLC extends React.Component {
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
    render() {
        return (
            <div {...css(styles)}>
                <svg className="graph">
                    <g className="grid x-grid" id="xGrid">
                        <line x1="90" x2="90" y1="5" y2="371"></line>
                    </g>

                    <g className="grid y-grid" id="yGrid">
                        <line x1="90" x2="705" y1="370" y2="370"></line>
                    </g>
                    <g className="labels x-labels">
                        <text x="100" y="400">2008</text>
                        <text x="246" y="400">2009</text>
                        <text x="392" y="400">2010</text>
                        <text x="538" y="400">2011</text>
                        <text x="684" y="400">2012</text>
                        <text x="400" y="440" className="label-title">Year</text>
                    </g>
                    <g className="labels y-labels">
                        <text x="80" y="73">15</text>
                        <text x="80" y="173">10</text>
                        <text x="80" y="273">5</text>
                        <text x="80" y="373">0</text>
                    </g>
                </svg>
            </div>
        )
    }
}
export default OHLC;