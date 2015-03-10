title: Plugin Basics
----
# Plugin Basics

As Baun relies heavily on [Composer](http://getcomposer.org) to manage its dependencies, all plugins in Baun
are also composer packages. Plugins can be installed by including them in the `composer.json` or by running
`composer require`. For example:

    composer require bauncms/baun-blog-rss

However installing the composer package is not enough to enable the plugin in Baun. You also have to tell Baun
which plugin classes to load in `config/plugins.php`. For example:

    return [

        'BaunPlugin\BlogRss\BlogRss',

    ];

## Publishing Config Files & Assets

Sometimes plugin's will come with their own config files or assets that may need to be published (copied into your
Baun install). This can be done using the [Baun CLI](/docs/advanced/cli). To publish a plugin's config files or assets you can use the
following commands:

    php baun publish:config myplugin/plugin-name
    php baun publish:assets myplugin/plugin-name

Where `myplugin/plugin-name` in the name of the plugin from the plugin's `composer.json`.

* Config files will be published to the `config/plugins/myplugin/plugin-name` folder
* Assets will be published to the `public/assets/plugins/myplugin/plugin-name` folder


