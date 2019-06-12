import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../store/action/index'

// const options = {
// 	withRef: true
// };

export default function ({mapStateToProps, mapDispatchToProps, mergeProps, LayoutComponent }){
    return connect(
        mapStateToProps || function(state) {
            return { }
        },
        mapDispatchToProps || function(dispatch){
            return {
                actions: bindActionCreators(actions, dispatch)
            }
        },
        mergeProps,
        // options
    )(LayoutComponent)
}