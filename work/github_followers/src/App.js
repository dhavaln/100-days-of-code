import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './components/Main';
import actionCreators from './actions/index';

import './App.css';

const mapStateToProps = function(state){
  return {
    repo: state.repo,
    followers: state.followers
  }
}

const mapDispatchToProps = function(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
