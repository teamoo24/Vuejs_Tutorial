(function(){
	'use strict'

	// ここでVueを定義 
	var vm = new Vue({
		el: '#app',
		data: {
			newItem : '',
			todos: [
				'task 1',
				'task 2',
				'task 3'
			]
		},
		methods: {
			// ここでaddItemを自邸
			addItem: function(){
				// submitを押した時に再読み込みを防ぐ
				// e.preventDefault();
				// todos配列にnewItemの中身を追加
				this.todos.push(this.newItem);
				// pushした後にnewItemを空文字にする
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