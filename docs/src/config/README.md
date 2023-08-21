# Work environment
::: danger
This assumes you are working on Linux. If you are running Windows you can use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) to set up a Linux VM
:::
## Lando
Ensure that [Lando](https://lando.dev) is installed on your machine.  
You can check your install by running the following command in your terminal
```shell
$ lando version
v3.18.0
```

If you don't have Lando installed you can follow their official [documentation](https://docs.lando.dev/getting-started/installation.html)  
Lando should automatically set up all the containers using a .lando file so you won't need to install anything else  

## PhpStorm
I use PhpStorm for development for the on-the-fly code analysis and an error prevention tools  
Any code editor should work. If you're on windows you need to make sure it supports WSL though.

## Landofile
A `.lando.yml` file is at the heart of every Lando app. It is needed to tell Lando what things your app needs for development.  
It contains the services and tools needed to run and develop your app  
This file should live in the root directory of your app's code repository

An example of a full-stack symfony lando file:
```yaml
name: MySymfonyApp
recipe: symfony
excludes:
  - htdocs/vendor
  - htdocs/var/cache
  - htdocs/node_modules
config:
  php: '8.2'
  composer_version: '2.2.12'
  via: apache:2.4
  webroot: htdocs/public
  xdebug: false
  config:
    database: mysql
services:
  node:
    type: 'node:18'
  phpmyadmin:
    type: phpmyadmin
tooling:
  npm:
    service: node
    dir: /app/htdocs
  composer:
    service: appserver
    cmd: composer
    dir: /app/htdocs
  console:
    service: appserver
    cmd: htdocs/bin/console
  c:
    service: appserver
    cmd: htdocs/bin/console
  symfony:
    service: appserver
    dir: /app/htdocs
```
To start the development environment you run `lando start` and it will automatically download and set up your docker containers  
If you make changes to your `.lando.yml`, you will need to `lando rebuild` your app for those changes to be applied.