import template from './noteEdit.html!text';
import controller from './noteEdit.controller';

let noteEditComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default noteEditComponent;