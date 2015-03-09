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

