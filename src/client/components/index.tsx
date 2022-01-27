import React from "react";
import { hot } from "react-hot-loader";

const App: React.FC = () => <p>Hello from Tim</p>;

declare const module: any;
export default hot(module)(App);
