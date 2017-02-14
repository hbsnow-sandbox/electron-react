import { connect } from 'react-redux';

import App from '../components/App';
import * as Actions from '../actions';

function mapStateToProps(state) {
  return {
    text: state.text
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setField: text => {
      dispatch(Actions.setField(text))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);