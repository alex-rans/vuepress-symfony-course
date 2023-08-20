# Introduction
## About PHP
PHP is a general-purpose server-side scripting language geared towards web development. It runs on multiple platforms (Linux, Windows, OSX) and is support by most web server technologies (Apache, Nginx, IIS). It is free to use and host
* PHP scripts are executed on a web server, in contrast to client-side scripting languages as JavaScript, jQuery, ...
* PHP was originally created by Rasmus Lerdorf in 1994 and stood for "Personal Home Page"
* PHP syntax has a lot of similarities with the C style syntax
* Current stable version: 8.2

## How does it work?
1. A client calls a PHP page (containing HTML and PHP scripts) in the browser
2. The client's browser contacts the web server
3. The web server executes the PHP scripts (and communicates with the database if necessary), and translates them to HTML code
```php
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello world</title>
</head>
<body>
<h1><?php echo 'Hello world'; ?></h1>
</body>
</html>
```
4. The result (plain HTML) is sent to the client's browser
```php
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello world</title>
</head>
<body>
<h1>Hello world</h1>
</body>
</html>
```

## Local webserver
During development, it's easier to work with a local webserver (in order to avoid uploading files after every change). In this course we will be using [Lando](https://www.lando.dev), which is a virtual web server environment that runs on Linux. If you're using windows you can use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) to run a Linux virtual machine. 

## Links
* Official website of the PHP language  
<https://php.net/>
* TutorialsPoint PHP tutorial  
<https://www.tutorialspoint.com/php/>
* TutorialRepublic PHP tutorial  
<https://www.tutorialrepublic.com/php-tutorial/>
* W3schools PHP tutorial  
<https://www.w3schools.com/php/>
* W3schools PHP exercises  
<https://www.w3schools.com/php/exercise.asp>
* PHP Notes for Professionals (Free PDF book based on StackOverflow documentation)  
<https://goalkicker.com/PHPBook/>