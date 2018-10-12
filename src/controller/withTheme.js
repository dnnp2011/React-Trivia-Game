import React from 'react';
import theme from '../model/Theme';

const withTheme = ( Child ) => {
    return class extends React.Component {
        render() {
            return <Child theme={ theme } { ...this.props } />;
        }
    };
};

export default withTheme;