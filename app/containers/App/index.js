import React from 'react'
import PropTypes from 'prop-types'
import { css, merge } from "glamor";
import styles from './styles';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
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
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import * as acctions from './actions';
import config from './config';
import {
    makeSelectApp,
  } from './selectors';

class App extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const { getChartAllData, appStore } = this.props;
        getChartAllData();
    }
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
        console.log('render data come ?', this.props.appStore);
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
App.propTypes = {  }

const mapStateToProps = createStructuredSelector({
    appStore: makeSelectApp(),
  });
  
  function mapDispatchToProps(dispatch) {
    return {
        getChartAllData: () => dispatch(acctions.getChartAllData()),
    };
  }
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  
  const withReducer = injectReducer({ key:config.reducer.name, reducer });
  const withSaga = injectSaga({ key:config.reducer.name, saga });
  
  export default compose(
    withReducer,
    withSaga,
    withConnect,
  )(App);
