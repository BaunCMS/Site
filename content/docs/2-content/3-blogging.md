title: Blogging
----
# Blogging

You can create a blog in Baun by creating a `/blog` folder inside the `/content` folder. Any files inside the
blog folder will be treated as a "post" and not a "page". Post files should have a date (in the format `yyyymmdd`)
as a prefix instead of the normal numerical index. This prefix will be used as the posts published date. Posts will be
in descending order based on the their published date.

    20150306-post-3.md
    20150301-post-2.md
    20150220-post-1.md

The blog folder can be ordered as normal using a numerical prefix. Also the name of the "blog" folder can be changed in
`config/blog.php` if you want to call it something else (e.g. articles). Here is an example of the URL structure of some
different configurations:

File                               | URL
---------------------------------- | ---------------------------------
/content/blog/20150306-post-3.md   | yoursite.com/blog/post-3
/content/blog/20150301-post-2.md   | yoursite.com/blog/post-2
/content/blog/20150220-post-1.md   | yoursite.com/blog/post-1
/content/2-blog/20150306-post-1.md | yoursite.com/blog/post-1
/content/articles/20150306-post-1.md | yoursite.com/articles/post-1

The blog root (`yoursite.com/blog`) will also now be a page with using the `blog` template (see below).

## Settings

There are several settings in `config/blog.php` relating to blogging. Review the `config/blog.php` file and its documentation
for more information.

## Templates

There are two templates that relate specifically to blogging:

Template | Description
-------- | -----------
`blog`   | Shows a list of posts as the blog index
`post`   | Shows an individual post

For more information see the [blog docs](/docs/themes/blogs) in the Themes section.