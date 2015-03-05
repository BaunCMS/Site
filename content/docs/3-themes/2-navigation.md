title: Navigation
----
# Theme Navigation

Baun takes the hassle out of creating your own navigation by generating it for you. To output the navigation
you must use the `{{ baun_nav() }}` function in your template. The navigation HTML will look like:

    <ul class="baun-nav">
        <li class="baun-nav-item baun-nav-item-home baun-nav-active"><a href="/">Home</a></li>
        <li class="baun-nav-item baun-nav-item-example"><a href="/example">Example</a></li>
        <li class="baun-nav-item baun-nav-has-children baun-nav-section-setup">
            <span class="baun-nav-section-title">Setup</span>
            <ul>
                <li class="baun-nav-item baun-nav-item-installing"><a href="/docs/setup/installing">Installing</a></li>
                <li class="baun-nav-item baun-nav-item-configuration"><a href="/docs/setup/configuration">Configuration</a></li>
                <li class="baun-nav-item baun-nav-item-updating"><a href="/docs/setup/updating">Updating</a></li>
            </ul>
        </li>
        <li class="baun-nav-item baun-nav-has-children baun-nav-section-content">
            <span class="baun-nav-section-title">Content</span>
            <ul>
                <li class="baun-nav-item baun-nav-item-adding-content"><a href="/docs/content/adding-content">Adding Content</a></li>
                <li class="baun-nav-item baun-nav-item-markdown-formatting"><a href="/docs/content/markdown-formatting">Markdown Formatting</a></li>
            </ul>
        </li>
        ...
    </ul>

You can exclude a page from the navigation by adding `exclude_from_nav: true` to the page attributes.