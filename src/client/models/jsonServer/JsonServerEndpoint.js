import {observable} from 'mobx';

export default class JsonServerEndpoint {
	@observable url;
	@observable model;
	type;

	constructor(url, model) {
		this.url = url;
		this.model = model;
		this.type = 'jsonServer';
	}

	setModel(model) {
		this.model = model;
	} 
}