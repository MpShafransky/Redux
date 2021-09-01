// Creating a Redux Store, which holds the state of the application.
import { createStore } from 'redux';
// Importing the reducer file itself.
import reducer from './reducers';
// Exporting the reducers file to the createStore function.
export default createStore(reducer);
