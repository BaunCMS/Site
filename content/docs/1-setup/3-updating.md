title: Updating
----
# Updating Baun

## Without SSH Access

1. Make a backup of (download) your `/content` folder
2. If you have a custom theme (in `public/themes`), make a backup of it as well
3. [Download the latest version](/download) of Baun
4. Upload the files to your server (normally using FTP or some other deployment method) overwriting/replacing everything
5. Make sure you delete the `/vendor` folder
6. Reupload your `/content` folder and any custom themes you downloaded in steps 1 & 2
7. Point your browser to the install location and let the auto-installer run

## With SSH Access

1. Make a backup of (download) your `/content` folder
2. If you have a custom theme (in `public/themes`), make a backup of it as well
3. [Download the latest version](/download) of Baun
4. Upload the files to your server (normally using FTP or some other deployment method) overwriting/replacing everything
5. Reupload your `/content` folder and any custom themes you downloaded in steps 1 & 2
6. Login to your server using SSH
7. Navigate to the installation location of Baun and run `composer update`