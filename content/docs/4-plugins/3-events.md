title: Events
----
# Events

Baun uses an events provider to allow plugins to listen to different events and "hook" into the core functionality.
This can be done by using the events provider `addListener()` method. For example:

    $this->events->addListener('baun.loaded', function($event, $args){
        echo 'Baun has loaded!';
    });

The `addListener()` method takes three arguments:

* `$name` - The name of the event you want to hook into
* `$listener` - The function to be triggered when the event is emitted
* `$priority` - An integer between -100 and 100 (defaults to 0)

## Available Events

Below is a list of all available events in order of execution (including args if applicable):

* `baun.loaded`
* `baun.beforeSetupRoutes`
* `baun.getFiles` (`$files`)
* `baun.filesToNav` (`$navigation`)
* `baun.filesToRoutes` (`$routes`)
* `baun.beforePageRender` (`$template`, `$data`)
* `baun.filesToPosts` (`$posts`)
* `baun.beforePostRender` (`$template`, `$data`)
* `baun.beforeBlogRender` (`$paginatedPosts`, `$pagination`)
* `baun.afterSetupRoutes`
* `baun.beforeDispatch`
* `baun.afterDispatch`
* `baun.before404`
* `baun.after404`