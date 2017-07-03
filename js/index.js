(function(w) {
	console.info(w.location.href);
}(window));
(function(w) {
	function Animal() {
		function sleep() {
			console.info('sleeping...');
		}
	}
	const animal = new Animal();
	var a = {};
})(window);
var what = $(() => {
	const text = new $('#test').html();
	console.info(text);
	const id = $.attr(new $('#test')[0], 'id');
	console.info(id);
	const what = $();

	function Person() {}
	Person.prototype = {
		constructor: Person
	};
	Person.prototype.init = function() {
		return this;
	};
	Person.prototype.init.f2 = 'f2...';
	Person.prototype.f1 = 'f1...';
	const p = new Person.prototype.init();
	console.info(p);
	//console.info($('#test').constructor);
});
console.info('===what?');
console.info(what[0]);
$(function() {
	$('#test').shadow();
	$('#table').table({
		head: [{
			field: 'name',
			title: '姓名'
		}, {
			field: 'age',
			title: '年龄'
		}, {
			field: 'job',
			title: '工作'
		}, {
			field: 'title',
			title: '头衔'
		}],
		body: [{ name: 'zhoujiaping', age: 28, job: 'programer', title: '高级java工程师' }, { name: 'zhoujiaping', age: 28, job: 'programer', title: '高级java工程师' }]
	}).addClass('my-table').shadow();
});