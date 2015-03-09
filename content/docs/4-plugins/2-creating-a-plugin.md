title: Creating a Plugin
----
# Creating a Baun Plugin

Once you understand the [basics](/docs/plugins/basics) of the Baun plugin architecture you can get started creating
your own plugins. A basic plugin folder structure should look like this:

    /myplugin
        /src
            - MyClass.php
        - composer.json

## composer.json

The `composer.json` file is not only required to distribute your plugin (via [Packagist](https://packagist.org)) but
it also sets up class autoloading which is required for Baun plugins to work. A basic `composer.json` should look like
this:

    {
        "name": "gilbitron/myplugin",
        "description": "A Baun plugin that does something cool",
        "license": "MIT",
        "authors": [
            {
                "name": "Gilbert Pellegrom",
                "email": "gilbert@pellegrom.me"
            }
        ],
        "require": {},
        "autoload": {
            "psr-4": {
                "Gilbitron\\Myplugin\\": "src/"
            }
        }
    }

The important things to notice here are:

* **name** - This is the name of your package and the string that users need to add to their `composer.json` to install your plugin.
* **autoload** - This tells composer to autoload everything in the `/src` folder using the namespace `Gilbitron\Myplugin`. More on that below.

## Autoloading

Each plugin must have an autoloaded class that is used to load the plugin in Baun. Baun uses
[PSR-4 autoloading](http://www.php-fig.org/psr/psr-4) which means the classes are autoloaded using a
[namespace](http://php.net/manual/en/language.namespaces.rationale.php). The namespace and class name are what the user
must add in `config/plugins.php`. For example:

    return [

        'Gilbitron\Myplugin\MyClass',

    ];

In this example `Gilbitron\Myplugin` is the namespace defined in `composer.json` and `MyClass` is the name of the class.
The class can then use namespaces to autoload other classes you want to include as normal.

## Plugin Class

Now that your plugin class is loaded by Baun you can start writing some code. Your Baun plugin should extend the
`Baun\Plugin` class as it handles the setup of the plugin. A basic plugin class might look like:

    <?php namespace Gilbitron\Myplugin;

    use Baun\Plugin;

    class MyClass extends Plugin {

        public function init()
        {
            $this->events->addListener('baun.loaded', [$this, 'sayHello']);
        }

        public function sayHello()
        {
            echo 'Hello World!';
        }

    }

Note that we don't use a constructor but instead we use an `init()` function. This is simply to keep things
clean.

You will also notice the use of `$this->events` in the code above. Baun abstracts out much of its implementation
into [Providers](/docs/advanced/providers) to make it easy to create your own custom providers and change them as required.
The config and providers available from `Baun\Plugin` are as follows:

Provider | Description
-------- | -----------
`$this->config` | Access to config data (e.g. `$this->config->get('app.debug')`)
`$this->events` | [Events provider](https://github.com/BaunCMS/Framework/blob/master/src/Providers/Events.php)
`$this->router` | [Router provider](https://github.com/BaunCMS/Framework/blob/master/src/Providers/Router.php)
`$this->theme` |  [Theme provider](https://github.com/BaunCMS/Framework/blob/master/src/Providers/Theme.php)
`$this->contentParser` | [Content parser provider](https://github.com/BaunCMS/Framework/blob/master/src/Providers/ContentParser.php)

To get an idea of how to use these providers have a look at the [Blog RSS plugin source code](https://github.com/BaunCMS/Baun-Blog-Rss/blob/master/src/BlogRss.php).