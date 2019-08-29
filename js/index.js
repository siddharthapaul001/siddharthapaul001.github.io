var o = {
	x: 0.1 + 0.2 == 0.3,
	f: function(){
		var self = this;
		console.log(this.x + "," + self.x);
		(function(){
			console.log(this.x + "," + self.x);
		})();
	}
};
o.f();