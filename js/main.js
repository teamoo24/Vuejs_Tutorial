(function(){
	'use strict'

	// ここでVueを定義 
	var vm = new Vue({
		el: '#app',
		data: {
			newItem : '',
			// todos: [{
			// 	title:'task 1',
			// 	isDone: false
			// }, {
			// 	title:'task 2',
			// 	isDone: false
			// }, {
			// 	title:'task 3',
			// 	isDone: true
			// }]
			todos:[]
		},
		methods: {
			// ここでaddItemを自邸
			addItem: function(){
				var item = {
					title: this.newItem,
					isDone: false
				};
				this.todos.push(item);
				this.newItem = '';
			},

			deleteItem: function(index){
				if (confirm('削除しましょうか？')) {
					this.todos.splice(index, 1);
				}
			}
		}
	});
})();