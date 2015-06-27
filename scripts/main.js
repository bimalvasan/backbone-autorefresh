var Timer = Backbone.View.extend({
	initialize: function() {
		this.model.on('change', function(){
			this.render();
		}, this);
	},
	render: function() {
		this.$el.html(this.model.get('text'));
	}
});

var myModel = new Backbone.Model({
	text: new Date().toString()
});

var myView = new Timer({
	model: myModel,
	el: 'body'
});

myView.render();

setInterval(function(){
	myModel.set({text: new Date().toString()})
});
