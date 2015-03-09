title: Blogs
----
# Blogs

There are two templates that relate specifically to blogging:

Template | Description
-------- | -----------
`blog`   | Shows a list of posts as the blog index
`post`   | Shows an individual post

## Blog Template

The blog template is a special template that is shown as a page for the blog root. It contains a list of
`{{ posts }}` and some `{{ pagination }}` data.

### Post Data

Variable    | Description
----------- | -----------
`route`     | The URI to the blog post
`title`     | The title of the blog post
`info`      | Any data defined in the header of the post
`excerpt`   | A truncated excerpt of the post content
`published` | A published date string

Variables like `excerpt` and `published` have related settings in `config/blog.php`.

### Pagination Data

Variable       | Description
-------------- | -----------
`total_pages`  | The total number of pages
`current_page` | The current page (1 indexed)
`base_url`     | The base URI of the blog root

Pagination also has related settings in `config/blog.php`. A pagination block can be created by doing something like:

    {% if pagination.total_pages > 1 %}
        <div class="pagination">
            {% if pagination.current_page > 1 %}
                <a href="{{ pagination.base_url }}?page={{ pagination.current_page - 1 }}" class="prev">&lt; Prev</a>
            {% endif %}
            {% for i in 1..pagination.total_pages %}
                {% if i == pagination.current_page %}
                    <span class="current-page">{{ i }}</span>
                {% else %}
                    <a href="{{ pagination.base_url }}?page={{ i }}">{{ i }}</a>
                {% endif %}
            {% endfor %}
            {% if pagination.current_page < pagination.total_pages %}
                <a href="{{ pagination.base_url }}?page={{ pagination.current_page + 1 }}" class="next">Next &gt;</a>
            {% endif %}
        </div>
    {% endif %}

## Post Template

The `post` template is very similar to the `page` template but it has a few extra variables:

Variable    | Description
----------- | -----------
`published` | A published date string