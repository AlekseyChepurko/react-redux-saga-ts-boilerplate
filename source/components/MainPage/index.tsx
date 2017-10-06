import * as React from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { getYourData } from 'DuckModules/Example.js';

interface Props {
  getYourData(): Action;
}
class MainPage extends React.Component<Props, undefined> {
  componentWillMount() {
    this.props.getYourData();
  }

  render() {
    return (<h1>
      Main Page
    </h1>);
  }
}

export default connect(null, { getYourData })(MainPage);
