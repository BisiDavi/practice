import { combineReducers } from 'redux';
import AddressbookReducer from './addressbookReducer';

const rootReducer = combineReducers({
  addressBook: AddressbookReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
