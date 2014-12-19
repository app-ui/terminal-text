(function() {
	// Creates an object based in the HTML Element prototype
	var el = Object.create(HTMLElement.prototype);

	// Fires when an instance of the element is created
	el.createdCallback = function() {

		// gather attributes
		var length = this.getAttribute("line-length");
		// set options
		var options = {
			silentRender: true, // this is required to avoid an infinite loop (triggering createdCallback on .show() )
			url: "../assets/html/app.ui.terminaltext.html"// use template html instead...
		};
		if(length) options.length = length;
		// ...
		options.el = this;
		// instantiate view
		this.view = new APP.UI.TerminalText( options );

	};

	// Fires when an instance was inserted into the document
	el.attachedCallback = function() {};

	// Fires when an instance was removed from the document
	el.detachedCallback = function() {
		this.view.destroy();
	};

	// Fires when an attribute was added, removed, or updated
	el.attributeChangedCallback = function(attr, oldVal, newVal) {};

	document.registerElement('terminal-text', {
		prototype: el,
		extends: "div"
	});
}());
