/**
 * Created by everyun on 16/5/14.
 */
require('normalize.css/normalize.css');
require('styles/App.css');

import React, {propType} from 'react';
import TopTips from './tools/topTips';
import Loading2 from './tools/loading2';

const AppComponent = React.createClass({
  render: function () {
    const {is_loading, is_tips, action}=this.props;
    return (
      <div className="app-wrapper">
        <TopTips Show={is_tips.display} text={is_tips.text}/>
        <Loading2 Show={is_loading}/>
        {this.props.children}
      </div>
    );
  }
});


AppComponent.defaultProps = {};

export default AppComponent;
