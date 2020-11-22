import * as $ from 'jquery';
import '../styles/styles.scss';
import '../styles/styles.less';
import config from './config';
// import webpackLogo from '../assets/images/webpack-logo.png';
import React from 'react';
import {render} from 'react-dom';
import babel from '../js/babel';
import json from '../assets/file-json.json';
import xml from '../assets/data.xml';
import csv from '../assets/data.csv';

const App = () => (
	<div className="row">
	<div className="m-auto w-50">
		<h1 className="title">
			Webpack
		</h1>
	</div>
	<div className="logo">

	</div>

	<div className="less-box">
		<div className="inside">
			LESS
		</div>
	</div>
	<div className="scss-box">
		<div className="inside">
			SCSS
		</div>
	</div>
</div>
);
render(<App/>, document.getElementById('app'));
// console.log(json);
// console.log(xml);
// console.log(csv);

// $(document).ready(function(){
// 	console.log(123);
// });