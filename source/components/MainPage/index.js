import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { getYourData } from 'DuckModules/Example';

class MainPage extends React.Component {
  componentWillMount() {
    this.props.getYourData();
  }
  render() {
    return (<h1>
      Main Page
    </h1>);
  }
}

MainPage.propTypes = {
  getYourData: func,
};

MainPage.defaultProps = {
  getYourData: () => {},
};

export default connect(null, { getYourData })(MainPage);
