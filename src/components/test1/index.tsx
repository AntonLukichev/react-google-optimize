import * as React from 'react'
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
  constructor (props: IProps) {
    super(props);
    this.state = {
      experimentRun: false,
      experimentVariant: 0,
    }
  }

  async componentDidMount(): Promise<void> {
    const dataLayer = globalThis.dataLayer || [];

    await dataLayer.push({ event: "optimize.activate" });
    console.log('componentDidMount', dataLayer);
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | null {
    //const {experimentId} = this.props;
    return null;
  }
}

export default TestComponent
