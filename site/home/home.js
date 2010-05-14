//
// Feature
//
Feature = QuickUI.Control.extend({
	className: "Feature",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": [
				" ",
				this.Feature_name = $("<h2 id=\"Feature_name\" />")[0],
				" ",
				this.Feature_description = $("<div id=\"Feature_description\" />")[0],
				" ",
				$("<div class=\"table\" />").items(
					" ",
					$("<div class=\"row\" />").items(
						" ",
						$("<div class=\"cell\" />").items(
							" ",
							"<div class=\"label\">Quick control</div>",
							" ",
							this.Feature_control = $("<div id=\"Feature_control\" />")[0],
							" "
						)[0],
						" ",
						$("<div class=\"cell\" />").items(
							" ",
							"<div class=\"label\">Example</div>",
							" ",
							this.Feature_example = $("<div id=\"Feature_example\" />")[0],
							" ",
							"<div class=\"label separator\">Result</div>",
							" ",
							this.Feature_result = $("<div id=\"Feature_result\" />")[0],
							" "
						)[0],
						" "
					)[0],
					" "
				)[0],
				" "
			]
		});
	}
});
$.extend(Feature.prototype, {
    control: QuickUI.Element("Feature_control").content(),
    description: QuickUI.Element("Feature_description").content(),
    example: QuickUI.Element("Feature_example").content(),
    name: QuickUI.Element("Feature_name").content(),
    result: QuickUI.Element("Feature_result").content()
});

//
// FeatureHello
//
FeatureHello = Feature.extend({
	className: "FeatureHello",
	render: function() {
		Feature.prototype.render.call(this);
		this.setClassProperties(Feature, {
			"name": "Hello, world",
			"description": " Define your own tag to stand for a block of HTML content. This content will get inserted wherever you use that tag. ",
			"control": " <pre>\r\n&lt;Control name=\"Greet\"&gt;\r\nHello &lt;i&gt;world!&lt;/i&gt;\r\n&lt;/Control&gt;\r\n</pre> ",
			"example": " <pre>\r\n&lt;Greet/&gt;\r\nYes!\r\n&lt;Greet/&gt;\r\n</pre> ",
			"result": [
				" ",
				QuickUI.Control.create(FeatureHelloDemo),
				" "
			]
		});
	}
});

//
// FeatureHelloDemo
//
FeatureHelloDemo = QuickUI.Control.extend({
	className: "FeatureHelloDemo",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": [
				" ",
				QuickUI.Control.create(Greet2),
				" Yes! ",
				QuickUI.Control.create(Greet2),
				" "
			]
		});
	}
});

//
// FeatureMarkupAndCSS
//
FeatureMarkupAndCSS = Feature.extend({
	className: "FeatureMarkupAndCSS",
	render: function() {
		Feature.prototype.render.call(this);
		this.setClassProperties(Feature, {
			"name": "Keep related markup and CSS right next to each other",
			"description": " Old school HTML pages kept the markup and CSS right next to each other, which was great for simple pages but can’t scale up to today’s complex apps. QuickUI restores this simplicity in a scalable way by letting you define a control in a single file that keeps the control’s markup and CSS rules together. No more hunting around for all the styles defined for a particular component! ",
			"control": " <pre>\r\n&lt;Control name=\"Tag\"&gt;\r\n\r\n&lt;content&gt;\r\n&lt;span id=\"Tag_content\" /&gt;\r\n&lt;/content&gt;\r\n\r\n&lt;style&gt;\r\n{\r\n    display: inline;\r\n    font-family: monospace;\r\n}\r\n&lt;/style&gt;\r\n\r\n…\r\n\r\n&lt;/Control&gt;\r\n</pre> ",
			"example": " <pre>\r\nQuick markup has &lt;Tag&gt;style&lt;/Tag&gt; and &lt;Tag&gt;script&lt;/Tag&gt; elements, just like HTML.\r\n</pre> ",
			"result": [
				" ",
				QuickUI.Control.create(FeatureMarkupAndCSSDemo),
				" "
			]
		});
	}
});

//
// FeatureMarkupAndCSSDemo
//
FeatureMarkupAndCSSDemo = QuickUI.Control.extend({
	className: "FeatureMarkupAndCSSDemo",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": [
				" Quick markup has ",
				QuickUI.Control.create(Tag, {
					"content": "style"
				}),
				" and ",
				QuickUI.Control.create(Tag, {
					"content": "script"
				}),
				" elements, just like HTML. "
			]
		});
	}
});

//
// FeatureScoping
//
FeatureScoping = Feature.extend({
	className: "FeatureScoping",
	render: function() {
		Feature.prototype.render.call(this);
		this.setClassProperties(Feature, {
			"name": "Prevent style rule collisions with style scoping",
			"description": " Controls on a page are as independent of each other as possible, so you can mix controls freely without concern for collisions in the namespaces for DOM element IDs or CSS rule names. For example, the QuickUI compiler ensures that a control’s CSS only applies to instances of that control: each control defines a corresponding CSS class, and the DOM root of all that control’s instances are stamped with that CSS class. So if two controls define CSS for a class called, say, “container”, the generated CSS will only apply the correct rule to each control. ",
			"control": " <pre>\r\n&lt;Control name=\"Red\"&gt;\r\n&lt;div class=\"message\"&gt;I’m red&lt;/div&gt;\r\n&lt;style&gt;\r\n.message {\r\n    color: red;\r\n}\r\n&lt;/style&gt;\r\n&lt;/Control&gt;\r\n\r\n&lt;Control name=\"Green\"&gt;\r\n&lt;div class=\"message\"&gt;I’m green&lt;/div&gt;\r\n&lt;style&gt;\r\n.message {\r\n    color: green;\r\n}\r\n&lt;/style&gt;\r\n&lt;/Control&gt;\r\n</pre> ",
			"example": " <pre>\r\n&lt;Red/&gt;\r\n&lt;Green/&gt;\r\n</pre> ",
			"result": [
				" ",
				QuickUI.Control.create(FeatureScopingDemo),
				" "
			]
		});
	}
});

//
// FeatureScopingDemo
//
FeatureScopingDemo = QuickUI.Control.extend({
	className: "FeatureScopingDemo",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": [
				" ",
				QuickUI.Control.create(Red),
				" ",
				QuickUI.Control.create(Green),
				" "
			]
		});
	}
});

//
// GetStartedModule
//
GetStartedModule = QuickUI.Control.extend({
	className: "GetStartedModule",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": [
				" ",
				"<h2>Get started</h2>",
				" ",
				$("<ul />").items(
					" ",
					$("<li />").items(
						QuickUI.Control.create(Link, {
							"content": "Download QuickUI",
							"href": "/downloads/default.html"
						})
					)[0],
					" ",
					$("<li />").items(
						QuickUI.Control.create(Link, {
							"content": "Read the Tutorial",
							"href": "/tutorial/section01/default.html"
						})
					)[0],
					" "
				)[0],
				" "
			]
		});
	}
});

//
// Green
//
Green = QuickUI.Control.extend({
	className: "Green",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": " <div class=\"message\">I’m green</div> "
		});
	}
});

//
// Greet
//
Greet = QuickUI.Control.extend({
	className: "Greet",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": " Hello, world! "
		});
	}
});

//
// Greet2
//
Greet2 = QuickUI.Control.extend({
	className: "Greet2",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": " Hello <i>world!</i> "
		});
	}
});

//
// HomePage
//
HomePage = SitePage.extend({
	className: "HomePage",
	render: function() {
		SitePage.prototype.render.call(this);
		this.setClassProperties(SitePage, {
			"area": "Home",
			"title": "QuickUI modular web control framework",
			"sidebar": [
				" ",
				QuickUI.Control.create(GetStartedModule),
				" "
			],
			"content": [
				" ",
				" ",
				"<p>\r\nQuickUI (Quick User Interface) is a framework that simplifies the design, construction,\r\nand maintenance of web-based user interfaces. The easiest way to describe QuickUI is\r\nthat <i>it lets you write HTML as if you could create your own tags</i>.\r\n</p>",
				" ",
				"<p>\t\r\nIn QuickUI, the tags you create are called controls. You define controls with declarative\r\nmarkup that can include HTML (including other QuickUI controls), CSS styling,\r\nand JavaScript scripting. You can easily create new controls by bundling together a group\r\nof existing controls, or by subclassing an existing control to make it more special-purpose.\r\nThe page you are reading here, and remainder of this site, is built entirely using QuickUI.\r\n</p>",
				" ",
				$("<p />").items(
					" QuickUI includes tools that compile your markup into regular JavaScript and CSS files. These tools run on Windows and OS/X (via the Mono project). The generated JavaScript makes use of the ",
					QuickUI.Control.create(Link, {
						"content": "jQuery",
						"href": "http://jquery.com"
					}),
					" library to build the web user interface on demand. QuickUI also includes a run-time library. Overall QuickUI is targetted at and tested against the mainstream browsers: Apple Safari 4.x, Google Chrome 3.x, Internet Explorer 8.x, and Mozilla Firefox 3.x. "
				)[0],
				" ",
				"<h2>A quick example</h2>",
				" ",
				"<p>\r\n\tThe following Quick markup defines a simple control called “Greet”.\r\n</p>",
				" ",
				QuickUI.Control.create(SourceCode, {
					"sourceFile": "Greet.qui"
				}),
				" ",
				$("<p />").items(
					" This control definition gives you a new tag ",
					QuickUI.Control.create(Tag, {
						"content": "Greet"
					}),
					" that can be used in other Quick markup like this: "
				)[0],
				" ",
				QuickUI.Control.create(SourceCode, {
					"sourceFile": "Sample.qui"
				}),
				" ",
				"<p>\r\nKicking everything off is accomplished in JavaScript via a jQuery extension:\r\n</p>",
				" ",
				"<pre>\r\n$(\"div\").control(Sample);\r\n</pre>",
				" ",
				"<p>\r\nThe div below shows the actual sample control above instantiated here on this page:\r\n</p>",
				" ",
				QuickUI.Control.create(CodeOutput, {
					"content": [
						" ",
						QuickUI.Control.create(Sample),
						" "
					]
				}),
				" ",
				$("<p />").items(
					" This is a trivial example. The ",
					QuickUI.Control.create(Link, {
						"content": "tutorial",
						"href": "/tutorial/section01/default.html"
					}),
					" examines controls with complex contents, control styling, and interactive behavior. When combined with the ability to compose and subclass controls, things can quickly become very interesting. You can see some sample QuickUI controls in the ",
					QuickUI.Control.create(Link, {
						"content": "Gallery",
						"href": "/gallery/default.html"
					}),
					". "
				)[0],
				" ",
				"<h2>Why use QuickUI?</h2>",
				" ",
				"<p>\r\nConsider using QuickUI because it:\r\n</p>",
				" ",
				"<ul>\r\n\t<li>\r\n\t\tAllows you to create UI in a markup language that is easy to read,\r\n\t\tis easy to work with, and can concisely express your design intention.\r\n\t\tThis speeds up UI development, and makes UI code more maintainable.\r\n\t</li>\r\n\t<li>\r\n\t\tWorks with the web’s native technologies, it doesn’t replace them.\r\n\t\tQuickUI is true to HTML, CSS, and JavaScript. Familiar conventions are used\r\n\t\twhenever possible. QuickUI is only meant to address the web’s painful lack\r\n\t\tof an extensible control framework.\r\n\t</li>\r\n\t<li>\r\n\t\tAllows designers and developers to share design artifacts. QuickUI can bridge\r\n\t\tthe gap between pure visual design tools and native web coding frameworks.\r\n\t\tThe markup language can be easily learned by HTML-savvy designers, and is\r\n\t\tstill powerful and flexible enough to appeal to developers.\r\n\t</li>\r\n\t<li>\r\n\t\tEncourages well-factored UI code. Controls are as modular as possible,\r\n\t\teasily composable, and easily subclassable. All the goodness of object-oriented\r\n\t\tdesign can be applied to your UI code. Package up your hard-earned knowledge\r\n\t\tof HTML and CSS idiosyncrasies into reusable controls that can be readily\r\n\t\tapplied to new problems.\r\n\t</li>\r\n\t<li>\r\n\t\tProduces predictable compiled code. The QuickUI tools do a minimum of\r\n\t\tcompilation magic. The compiler’s output are legible, understandable,\r\n\t\treadily debuggable JavaScript classes. The generated code takes care of \r\n\t\tpopulating the control’s run-time DOM — code that is often tedious to write\r\n\t\tby hand, and normally hard to read. The behavior of these controls can\r\n\t\tbe programmed in JavaScript and jQuery.\r\n\t</li>\r\n\t<li>\r\n\t\tCreates controls that can be used as top-level pages on their own,\r\n\t\tor easily included in web pages built with other technologies.\r\n\t</li>\r\n\t<li>\r\n\t\tIs fun to work in!\r\n\t</li>\r\n</ul>",
				" QuickUI is completely free, and the ",
				QuickUI.Control.create(Link, {
					"content": "source code",
					"href": "http://code.google.com/p/quickui/"
				}),
				" is open under the ",
				QuickUI.Control.create(Link, {
					"content": "MIT License",
					"href": "http://www.opensource.org/licenses/mit-license.php"
				}),
				". ",
				$("<p />").items(
					" ",
					QuickUI.Control.create(Link, {
						"content": "Download QuickUI",
						"href": "/downloads/default.html"
					}),
					" "
				)[0],
				" ",
				"<br />",
				" ",
				QuickUI.Control.create(AddThis),
				" "
			]
		});
	}
});

//
// HomePageNew
//
HomePageNew = SitePage.extend({
	className: "HomePageNew",
	render: function() {
		SitePage.prototype.render.call(this);
		this.setClassProperties(SitePage, {
			"area": "Home",
			"title": "QuickUI modular web control framework",
			"sidebar": [
				" ",
				QuickUI.Control.create(GetStartedModule),
				" "
			],
			"content": [
				" ",
				" ",
				QuickUI.Control.create(FeatureHello),
				" ",
				QuickUI.Control.create(FeatureMarkupAndCSS),
				" ",
				QuickUI.Control.create(FeatureScoping),
				" "
			]
		});
	}
});

//
// Red
//
Red = QuickUI.Control.extend({
	className: "Red",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": " <div class=\"message\">I’m red</div> "
		});
	}
});

//
// Sample
//
Sample = QuickUI.Control.extend({
	className: "Sample",
	render: function() {
		QuickUI.Control.prototype.render.call(this);
		this.setClassProperties(QuickUI.Control, {
			"content": [
				" ",
				"<h1>QuickUI sample</h1>",
				" ",
				QuickUI.Control.create(Greet),
				" "
			]
		});
	}
});

