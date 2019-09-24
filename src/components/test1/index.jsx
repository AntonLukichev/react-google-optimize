import React from 'react';
import PropTypes from 'prop-types';
import Variant0 from './ab/variant0';
import Variant1 from './ab/variant1';
import { getVariant } from '../experiments';

class TestComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      experimentRun: false,
      experimentVariant: 0,
    };
  }

  componentDidMount() {
    const { experimentLabel, experiments } = this.props;

    // TODO refactoring
    if (experiments[experimentLabel].key !== undefined) {
      const variant = getVariant(experiments[experimentLabel].key);
      if (variant === null) {
        this.setState({ experimentRun: true });
      } else {
        this.setState({
          experimentVariant: variant,
          experimentRun: true,
        });
      }
    }
  }

  render() {
    const { experimentRun, experimentVariant } = this.state;
    if (!experimentRun) return null;

    if (experimentVariant === 1) {
      return (<Variant1 />);
    }

    return (<Variant0 />);
  }
}

TestComponent.propTypes = {
  experimentLabel: PropTypes.string.isRequired,
  experiments: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default TestComponent;
