import * as React from 'react'
import Variant0 from "./ab/variant0";
import Variant1 from "./ab/variant1";
//import Variant0 from './ab/variant0';
//import Variant1 from './ab/variant1';

export interface IProps {
  experimentId: string
}

interface IState {
  experimentRun: boolean;
  experimentVariant: number;
}

interface IDataLayer {
  [key:string]: any;
}

interface IGlobalThis {
  [key:string]: any;
}

class TestComponent extends React.Component<IProps, IState> {
  private intervalId: any;
  constructor (props: IProps) {
    super(props);
    this.state = {
      experimentRun: false,
      experimentVariant: 0,
    }
  }

  async componentDidMount(): Promise<void> {
    const {experimentId} = this.props;
    const dataLayer = (globalThis as any).dataLayer || [];
    await dataLayer.push({ event: "optimize.activate" });
    this.intervalId = setInterval(() => {
      console.log('check');
      if ((globalThis as any).google_optimize !== undefined) {
        const variant = (globalThis as any).google_optimize.get(experimentId);
        console.log('get experiment', parseInt(variant,10));
        this.setState({
          experimentVariant: parseInt(variant,10),
          experimentRun: true,
        });
        clearInterval(this.intervalId);

      };
    }, 200);
    //console.log('componentDidMount', dataLayer);
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | null {
    const {experimentRun, experimentVariant} = this.state;
    if (experimentRun) {
      console.log(this.state);
      // TODO: add multiple variants
      if (experimentVariant === 1) {  //  for AB tests
        return (
          <Variant1/>
        )
      }
      return (
        <Variant0 />
      )
    }
    return null;
  }
}

export default TestComponent
