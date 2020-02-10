# APP UI: Terminal Text

Web Component that animates text like an old school terminal...


## Examples

[Basic application](http://rawgit.com/app-ui/terminal-text/master/examples/basic.html).


## Dependencies

This component relies on the following third-party libraries:

* [APP](http://makesites.org/projects/app)
* [jQuery](http://jquery.com)
* [Underscore](http://underscorejs.org)


## Install

Download the component and extract in 'components/app-ui-terminal-text'
```
cd [project folder]
wget https://github.com/app-ui/terminal-text/archive/master.zip
unzip master.zip -d ./components/
```

Using bower: (Old method)
```
bower install app.ui.terminaltext
```


## Usage

The component is built on top of [APP](http://makesites.org/projects/app) which should be loaded before the component in the <head> section of your website. This library uses the non-standard method of "html imports" for loading custom elements. 


1. Include APP library

```html
<script src="components/app/build/app.min.js"></script>
```

2. Import Custom Element:

```html
<link rel="import" href="components/app-ui-terminal-text">
```

3. Start using it!

```html
<div is="app-ui-terminal-text"></div>
```

For now only the ```div``` of the block level tags is supported.


## Options

These are the set of options you can use as attributes in your custom element:

...


## Events

...


## Credits

Initiated by Makis Tracend ( [@tracend](http://github.com/tracend) )

This extension is based on the [Commons component](http://github.com/commons/components) with the same name.

Distributed through [Makesites.org](http://makesites.org)


### License

Released under the [MIT License](http://makesites.org/licenses/MIT)


