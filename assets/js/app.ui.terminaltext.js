/* replace with component lib */

(function( APP ){

	APP = APP || window.APP;

	APP.View = APP.View || function( options ){

		this.initialize( options );
	};

	APP.View.extend = APP.View.extend || function(obj){
		var Class = APP.View;
		Class.prototype = _.extend( {}, obj );
		return Class;
	}

	var View = APP.View.extend({

		options: {
			length: 80
		},

		initialize: function( options ){

			// extend options
			if(options.length) this.options.length = options.length;

			// get the text
			var string = options.string || "";
			var length = this.options.length; // make length a variable...
			var data = [],
				pos = 0,
				len = string.length;

			// split it into lines
			while (pos < len) {
				data.push({ line: string.slice(pos, pos += length) });
			}

			// re-render text using template
			this.data = new APP.Collection( data );

			// start animating
			this.cursor = 0;
			/*
			var options = {
				el: this
			};
			// get options from attributes
			if( this.attributes['option-targetEl'] ){
				options.targetEl = this.attributes['option-targetEl'].value;
			}
			if( this.attributes['option-style'] ){
				options.style = this.attributes['option-style'].value;
			}
			//console.log( options );

			// initiate view on element
			var view = new Backbone.UI.Fullscreen( options );
*/
			return APP.View.prototype.initialize.call( this, options );
		},


		render: function(){
			if( !this.template ) return;
			var template = this.template.get("default");
			if( !template ) return;
			//
			var html = template( this.data.toJSON() );
			this.el.shadowRoot.innerHTML = html;
			//
			this.animate();

		},

		animate: function(){
			var self = this;
			var self = this;

			var lines = this.el.shadowRoot.querySelectorAll('[rel="line"]');;
			// if reached the end stop...
			if( this.cursor == lines.length ) return;
			// start animating the next line on the cursor
			var line = lines[ this.cursor ];
			line.classList.remove("hide");
			line.classList.add("type");
			/*
			// THIS isn't working for some reason...
			line.addEventListener(transitionEvent, function() {
				self.animate();
			});
			*/
			setTimeout(function(){
				self.animate();
			}, 2000);
			// increment the cursor
			this.cursor++;

		},

		onTransitionEnd: function(){
			//
		}

	});

	APP.UI = APP.UI || {};
	APP.UI.TerminalText = View;



	// helpers
	/* From Modernizr */
function whichTransitionEvent(){
	var t;
	var el = document.createElement('fakeelement');
	var transitions = {
		'transition':'transitionend',
		'OTransition':'oTransitionEnd',
		'MozTransition':'transitionend',
		'WebkitTransition':'webkitTransitionEnd'
	}

	for(t in transitions){
		if( el.style[t] !== undefined ){
			return transitions[t];
		}
	}
}

/* Listen for a transition! */
var transitionEvent = whichTransitionEvent();

})( this.APP );
