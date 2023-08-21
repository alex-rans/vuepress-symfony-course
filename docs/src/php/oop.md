# Object-oriented programming
## Introduction
PHP is a multi-paradigm language which is a fancy word for saying that it supports multiple ways of programming  
* Imperative
* Functional
* Object-oriented
* Procedural
* Reflective

A solid understanding of object-oriented programming is required to get the most out of the Symfony framework.  
Here we will cover the basics to get started

## What is object-oriented programming?
Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic.  
OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them.  
This approach to programming is well-suited for programs that are large, complex and actively updated or maintained.

* To start with OOP, you want to begin with collecting all objects you want to manipulate ([data modeling](/data/))
* Once an object is known, it is labeled with a class that defines the data (Attributes) and logic (Methods) that can manipulate it.

### Structure
* **Classes**: user-defined data types that act as the blueprint for individual objects, attributes and methods
* **Objects**: instances of a class created with specifically defined data
* **Methods**: functions that are defined inside a class that describe the behaviors of an object
* **Attributes**: represent the state or data of an object

En example of a basic PHP class with methods and attributes is as follows.
```php
class Projector {
    //Setting all the attributes as private is called encapsulation and will be explained later
    string $brand;
    string $color;
    
    //the __construct function (or method) is called every time a new object is instantiated
    //the parameters inside the construction are to give an instance of the object its attributes
    function __construct(string $brand, string $color) {
        $this->brand = $brand;
        $this->color = $color;
    }
    
    //methods
    function on(): void
    {
        //do some logic here to turn the projector on
    }
    
    function Off(): void
    {
        //do some logic here to turn the projector off
    }
    
    function Freeze(): void
    {
        //do some logic here to freeze the screen
    }
}
```
After which you can instantiate a projector object somewhere else in your project and use its methods
```php
use Projector

//instantiate a new project object from the projector class with name and color attributes defined in the constructor
Projector $projector = new Projector("Epson", "Grey");

//Use methods of the projector to manipulate its behavior
$projector->on();

```

## What are the main principles of OOP?
### Encapsulation
This principle states that all important information is contained inside an object and only select information is exposed  
This characteristic of data hiding provides greater program security and avoids unintended data corruption

You can do this by giving attributes and methods access modifiers  
* public
* private
* protected

An example of the previous `projector` class using Encapsulation
```php
class Projector {
    //Set all attributes as private to prevent unauthorized access and data corruption
    private string $brand;
    private string $color;
    
    public function __construct(string $brand, string $color) {
        $this->brand = $brand;
        $this->color = $color;
    }
    
    //Add getters and setters to give read and write access to the attributes
    public function GetBrand(): string
    {
        return $this->brand;
    }
    
    public function SetBrand(string $brand): void
    {
        $this->brand = $brand;
    }
    
    public function GetColor(): string
    {
        return $this->color;
    }
    
    public function SetColor(string $color): void
    {
        $this->color = $color;
    }
    
    //methods
    public function on(): void
    {
        //do some logic here to turn the projector on
    }
    
    public function Off(): void
    {
        //do some logic here to turn the projector off
    }
    
    public function Freeze(): void
    {
        //do some logic here to freeze the screen
    }
}
```

### Abstraction
Honestly i've got no clue what they mean by this besides just "lol don't add garbage attributes to a class". Idk

### Inheritance
Classes can re-use code from other classes  
Relationships and subclasses between objects can be assigned, enabling developers to reuse common logic

An example of inheritance is as follows
```php
//superclass
class Animal {
    string $name;
    string $color;
    
    public function __construct(string $name, string $color)
    {
        $this->name = $name;
        $this->color = $color;
    }
    
    function Eat(): void
    {
    
    }
    
    function Sleep(): void
    {
    
    }
}

//subclass
class Dog extends Animal{
    function Bark(): void
    {
    
    }
}

//after this you can instantiate a Dog object that can use the same methods and attributes of the Animal class
Dog $dog = new Dog("Niccy", "White");

//it can use methods of its own class
$dog->Bark();

//and methods of its superclass (Animal)
$dog->Eat();
```

### Polymorphism
Polymorphism refers to the ability of objects to take on different forms and exhibit different behaviors while sharing a common interface  
It allows different classes to implement the same method name with different functionality  
Very similar to Inheritance

An example of inheritance is as follows
```php
class Animal {
    string $name;
    string $color;
    
    public function __construct(string $name, string $color)
    {
        $this->name = $name;
        $this->color = $color;
    }

    function MakeSound(): string
    {
        return "The animal makes a sound";
    }
}

//subclass
class Dog extends Animal{
    function MakeSound(): string
    {
        return "The dog barks";
    }
}

Dog $dog = new Dog("Niccy", "White");

$dog->MakeSound(); // returns: "The dog barks"
```

### Why use OOP?
* Modularity
* Reusability
* Productivity
* Scalable
* Security
* Flexibility

## Dependency injection
Dependency injection an overly-complex term for an extremely simple concept  
A common programming technique that is used very often in Symfony.

The easiest way to explain dependency injection is with an example

This is **not** dependency injection
```php
use Engine

class Car {
    private Engine $engine
   
    public function __construct() {
        $this->engine = new Engine()
    }
    
    public function StartEngine() {
        $this->engine->FireCylinders();
    }
}
```
Here the Car class instantiates a new Engine object

This **is** dependency injection
```php
use Engine

class Car {
    private Engine $engine
   
    public function __construct(Engine $engine) {
        $this->engine = $engine
    }
    
    public function StartEngine() {
        $this->engine->FireCylinders();
    }
}
```
Here the Car class has an instance of Engine passed (or injected) from a higher level to its constructor

This will make more sense later as we work with entities and repositories.