title: Admin Plugin Documentation
exclude_from_nav: true
template: narrow
----
# Admin Plugin Documentation

The following documentation outlines how to install and use the Baun [Admin Plugin](/plugins/admin).

## Install

Add `bauncms/baun-admin` to your `composer.json` or run:

    composer require bauncms/baun-admin

Add this line to your `config/plugins.php`:

    'BaunPlugin\Admin\Admin'

Publish the required config files and assets by running:

    php baun publish:config bauncms/baun-admin
    php baun publish:assets bauncms/baun-admin

The generated config file will be available at `config/plugins/bauncms/baun-admin/admin.php`.

## Setup

Once the plugin is installed navigate to `http://www.yoursite.com/admin` (where www.yoursite.com is
the URL of your site) to use the admin backend.

The first time you run the plugin you will be presented with a form to create an initial admin user. Run
through the process and copy the generated user into the generated config file. You will also have receieved
a license key in your receipt email, this must also be copied to the generated config file to use the plugin.

## Usage

Using the Admin plugin is very similar to any other CMS backend. First you will be presented with a login screen:

![Login screen](/themes/baun/img/plugins/screen-1.png)

Once you are logged in you will see a list of pages (and posts if you have a blog). This is a representation of your
`/content` folder. If you don't have any content yet then you can create some.

![List of pages](/themes/baun/img/plugins/screen-2.png)

By default the "simple" editor will be enabled. This allows you to create and edit content in a familiar fashion using
simple text inputs and a WYSIWYG editor (with a preview).

![Simple editor](/themes/baun/img/plugins/screen-3.png)

If you prefer something a bit more "raw" you can enable the "advanced" editor by changing the setting in the plugin
config file. In "advanced" mode editing is done as if you were editing the file on your own computed using a
text editor. You enter meta information about the page in the header and the actual page content in the content box.

![Advanced editor](/themes/baun/img/plugins/screen-4.png)

You can't create subfolders directly using the admin editor however you can create pages within subfolders, and the
subfolder will automatically be created for you.

## Support

Having trouble and need some help? You can get in touch with our Baun support team at
[support@bauncms.com](mailto:support@bauncms.com).