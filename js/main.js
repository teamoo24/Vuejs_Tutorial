(function(){
	'use strict'

	// ここでVueを定義 
	var vm = new Vue({
		el: '#app',
		data: {
			newItem : '',
			todos: [{
				title:'task 1',
				isDone: false
			}, {
				title:'task 2',
				isDone: false
			}, {
				title:'task 3',
				isDone: true
			}]
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
			},

			purge: function(index){
				if (!confirm('delete finished')) {
					return;
				}
				// this.todos = this.todos.filter(function(todo){
				// 	return !todo.isDone;
				// });
				this.todos = this.remaining;
			}
		},
		computed: {
			remaining: function(){
				// var items = this.todos.filter(function(todo){
				// 	return !todo.isDone;
				// });
				// return items.length;
				return this.todos.filter(function(todo){
					return !todo.isDone;
				});
			}
		}
	});
})();