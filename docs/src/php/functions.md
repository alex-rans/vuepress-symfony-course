# Functions
## Built-in Functions
A function is a block of statements that can be used repeatedly in a program  
PHP comes with over 1000 built-in functions that can be called directly  
You can find a comprehensive list of all PHP functions [here](https://www.w3schools.com/php/php_ref_overview.asp)

## User Defined Functions
A user-defined function declaration starts with the word function and has the following syntax
::: warning Naming conventions
A function is typically written in PascalCase
:::
```php
function WriteMessage()
{
    return "Ma'am, this is a wendy's";
}
```

A function can have parameters to pass variables to the body
```php
echo WriteMessage('Jasmine');

function WriteMessage($name)
{
    return "{$name}, this is a wendy's";
}
```
![functions parameter](./img/functions_parameter.jpg)

You can set a parameter to have a default value if no argument is passed to the function
```php
echo WriteMessage();

function WriteMessage($name = 'Jasmine')
{
    return "{$name}, this is a wendy's"
}
```
![functions parameter](./img/functions_parameter.jpg)

## Type declarations
ype declarations can be added to function arguments, return values and class properties  
They ensure that the value is of the specified type at call time.
```php
function WriteMessage(string $name): string
{
    return "{$name}, this is a wendy's"
}
```
This ensures that the parameter passed is a string and that the function returns a string datatype.

### Void types
When a function does not return a value you can declare the type as `void`
```php
function AddFiveToNumber(int $number): void
{
    $number += 5;
}
```

### Nullable return type declaration
When a null can be returned you can use a Nullable type declaration by placing a question mark before the type
```php
function IsAdult(int $age): ?string
{
    if($age >= 18) {
        return "You're an adult";
    }
    return false;
}
```

### Union return types
Comrade, if multiple types can be returned we can include additional return types by separating with a pipe ´|´  
For example, a price can be a whole number (int) or a decimal number (float)
```php
function GetPrice(): int|float
{
    return 13.99
}
```