# Basic syntax
## PHP code blocks
A .php file contains HTML and php code blocks.__
A php code block starts with `<?php` and end with `?>`__
Every statement ends with a semicolon `;`
::: tip
* If a PHP file only contains one (large) PHP script, the closing `?>` may be omitted.
```php
<?php
...
```
* If a PHP script contains only one statement, the trailing `;` may be omitted: both `<?php echo 'Hello world' ?>` and `<?php echo 'Hello world'; ?>` are correct.
* If a PHP script contains only one `echo` statement, you can use the shorthand `<?=` to open the PHP script block and execute the echo, as in `<?= 'Hello world' ?>`.
:::

## Comments
Use `// ...` for single line comments or `/* ... */` for multiple line comments
```php
// This is a single line comment
    
/* This comment section
spans several
lines */
```

## Variables
All variables always start with a dollar sign $, followed by the name of the variable.
::: warning Naming conventions
* A variable must start with a letter or underscore character
* A variable name cannot start with a number
* A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
* Variable names are case-sensitive
* Use camelCase for PHP variables (and PascalCase for functions)
:::
Variables don't need to be declared (or given a data type) before giving them a value, although it is recommended you do.

```php
<div>
    <?php
    $student1 = 'John Doe';
    $percentage1 = 73.08;

    $student2 = 'Jane Smith';
    $percentage2 = 64.84;
    
    echo '<h1>Variables</h1>';
    echo '<p>' . $student1 . ' graduates with ' . $percentage1 . ' %</p>' . "\n";
    echo "<p>$student2 graduates with $percentage2 %</p>\n";
    ?>
</div>

<div>
    <?php
    echo <<<RESULTS
        <p> $student1 graduates with $percentage1 %</p> 
        <p> $student2 graduates with $percentage2 %</p>          
    RESULTS;    
    ?>
</div>
```
![variables](./img/variables.jpg)

## Concatenation and interpolation
The **concatenation operator** `.` "concatenates" multiple strings and variables, as in `'<p>' . $student1 . ' graduates with ' . $percentage1 . ' %</p>'`

If you use double quotes `("<p>$student2 graduates with $percentage2 %</p>")`, the variables can be included in a single string as they are automatically **interpolated**
* It is recommended to surround the variable in curly brackets to make it more human-readable `"<p>{$student2} graduates with {$percentage2} %</p>"`

## Heredoc
A third syntax for strings is called the **heredoc** notation
* No quotes and no `\n` for new lines are needed
* Variables can be interpolated

Starts with the `<<<` operator after which and identifier is provided  
The string itself starts on a new line  
The identifier is repeated (on a new line) to close the string
```php
echo <<<RESULTS
    <p> $student1 graduates with $percentage1 %</p> 
    <p> $student2 graduates with $percentage2 %</p>          
RESULTS;  
```
