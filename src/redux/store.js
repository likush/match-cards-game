import { createStore } from "redux";
import gameApp from './reducers';

const store = createStore(gameApp);

export default store
