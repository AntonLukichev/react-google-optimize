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
    const { experiments } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {experiments && <TestComponent experimentLabel="test_experiment1" {...this.props} />}
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return store.experiments;
};

App.defaultProps = {
  experiments: {},
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  experiments: PropTypes.objectOf(PropTypes.object),
};

export default connect(mapStateToProps)(App);
