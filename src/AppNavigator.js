import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import Root from './navigations/Root';
class AppNavigator extends Component {
    render() {
        return (
            <Root
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return { nav: state.nav };
};

export default connect(mapStateToProps)(AppNavigator);

