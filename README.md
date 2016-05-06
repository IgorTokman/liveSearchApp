# liveSearchApp

A dynamic search application that updates search results as you type.

Application performs the reading and writing information between the server and the client with AJAX methods in jQuery

## Instructions

1. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC)
`$ git clone https://github.com/IgorTokman/liveSearchApp.git`
2. CD to the folder `cd liveSearchApp`
3. Run `bower install` to install the project dependencies

You must create a new virtual host for this project and restart your web-server.

> **NOTE**
>
> As you can see the `public/` directory contains the main application file `index.html`,
> so you need to configure your new virtual host to this folder

Example of virtual host settings
-----

```sh
<VirtualHost *:80>
        ServerAdmin admin@site1.loc
        DocumentRoot /home/igortokman/PhpstormProjects/liveSearchApp/public/
        ServerName liveSearchApp.local
</VirtualHost>
```