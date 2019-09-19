import React from 'react';
import PropTypes from 'prop-types';

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
        console.log('get experiment', parseInt(variant, 10));
        this.setState({
          experimentVariant: parseInt(variant, 10),
          experimentRun: true,
        });
        clearInterval(this.intervalId);
      }
    }, 200);
    // console.log('componentDidMount', dataLayer);
  }

  render() {
    const { experimentRun, experimentVariant } = this.state;
    if (!experimentRun) return null;

    if (experimentVariant === 0) {
      return null;
    }

    return null;
  }
}

TestComponent.propTypes = {
  experimentId: PropTypes.string.isRequired,
};

export default TestComponent;
