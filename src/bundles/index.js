import { composeBundles } from "redux-bundler";
import todoBundle from './todo'


export default composeBundles(
    todoBundle
)