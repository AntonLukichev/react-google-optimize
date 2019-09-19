import React from 'react';
import PropTypes from 'prop-types';
import Variant0 from './ab/variant0';
import Variant1 from './ab/variant1';

class TestComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      experimentRun: false,
      experimentVariant: 0,
    };
  }

  async componentDidMount() {
    const { experimentId } = this.props;
    const dataLayer = window.dataLayer || [];
    await dataLayer.push({ event: 'optimize.activate' });
    this.intervalId = setInterval(() => {
      console.log('check');
      if (window.google_optimize !== undefined) {
        const variant = window.google_optimize.get(experimentId);
        if (variant === undefined) {
          console.log('experiment not found');
          this.setState({
            experimentRun: true,
          });
        } else {
          this.setState({
            experimentVariant: parseInt(variant, 10),
            experimentRun: true,
          });
          console.log('get experiment', parseInt(variant, 10));
        }
        clearInterval(this.intervalId);
      }
    }, 100);
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
  experimentId: PropTypes.string.isRequired,
};

export default TestComponent;
