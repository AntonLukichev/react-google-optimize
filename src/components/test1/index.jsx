import React from 'react';
import PropTypes from 'prop-types';
import Variant0 from './ab/variant0';
import Variant1 from './ab/variant1';
import { getVariantAction } from '../../actions/experimentActions';

class TestComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      experimentRun: false,
    };
  }

  componentDidMount() {
    const { experimentLabel, experiment: { experiments }, dispatch } = this.props;
    const experimentKey = experiments[experimentLabel].key;

    if (experimentKey !== undefined) {
      dispatch(getVariantAction(experimentLabel, experimentKey));
      this.setState({ experimentRun: true });
    }
  }

  render() {
    const { experimentRun } = this.state;
    const { experimentLabel, experiment: { experiments } } = this.props;
    const { variant } = experiments[experimentLabel];

    if (!experimentRun || variant === undefined) return null;

    if (variant === 1) {
      return (<Variant1 />);
    }

    return (<Variant0 />);
  }
}

TestComponent.propTypes = {
  experimentLabel: PropTypes.string.isRequired,
  experiment: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TestComponent;
