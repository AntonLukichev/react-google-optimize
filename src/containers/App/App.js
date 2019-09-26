import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TestComponent from '../../components/test1';
import { EXPERIMENT_ACTIONS } from '../../actions';

class App extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: EXPERIMENT_ACTIONS.EXPERIMENTS_LOAD_REQUEST });
  }

  render() {
    const { experiment: { experiments } } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {experiments.test_click && <TestComponent experimentLabel="test_click" {...this.props} />}
          </div>
          <div>
            {experiments.test_experiment1 && <TestComponent experimentLabel="test_experiment1" {...this.props} />}
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { experiment } = state;
  return { experiment };
};

App.defaultProps = {
  experiment: {},
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  experiment: PropTypes.shape(),
};

export default connect(mapStateToProps)(App);
