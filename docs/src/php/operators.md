# Operators
## Arithmetic operators
| operator | description    | example    |
|----------|----------------|------------|
| `+`      | addition       | `$x + $y`  |
| `-`      | subtraction    | `$x - $y`  |
| `*`      | multiplication | `$x * $y`  |
| `/`      | division       | `$x / $y`  |
| `%`      | modulus        | `$x % $y`  |
| `**`     | power          | `$x ** $y` |


## Assignment operators
| operator | description                | example    | result         |
|----------|----------------------------|------------|----------------|
| `=`      | assign                     | `$x = $y`  |                |
| `+=`     | add and assign             | `$x += $y` | `$x = $x + $y` |
| `-=`     | subtract and assign        | `$x -= $y` | `$x = $x - $y` |
| `*=`     | multiply and assign        | `$x *= $y` | `$x = $x * $y` |
| `/=`     | divide and assign quotient | `$x /= $y` | `$x = $x / $y` |
| `%=`     | divide and assign modulus  | `$x %= $y` | `$x = $x % $y` |
| `.=`     | concatenate and assign     | `$x .= $y` | `$x = $x . $y` |
| `++`     | increment and assign       | `$x ++ $y` | `$x = $x + 1`  |
| `__`     | decrement and assign       | `$x -- $y` | `$x = $x - 1`  |

## Comparison operators
| operator        | description      | example                     | result                                                               |
|-----------------|------------------|-----------------------------|----------------------------------------------------------------------|
| `==`            | equal            | `$x == $y`                  | `true` if `$x` is equal to `$y`                                      |
| `===`           | identical        | `$x === $y`                 | `true` if `$x` is equal to `$y` and they are of the same type        |
| `!=` <br/> `<>` | not equal        | `$x != $y` <br/> `$x <> $y` | `true` if `$x` is not equal to `$y`                                  |
| `!==`           | not identical    | `$x !== $y`                 | `true` if `$x` is not equal to `$y` or they are not of the same type |
| `<`             | less than        | `$x < $y`                   | `true` if `$x` is less than `$y`                                     |
| `<=`            | less or equal to | `$x <= $y`                  | `true` if `$x` is less than or equal to `$y`                         |
| `>`             | more than        | `$x > $y`                   | `true` if `$x` is more than `$y`                                     |
| `>=`            | more or equal to | `$x >= $y`                  | `true` if `$x` is more than or equal to `$y`                         |

##  Logical operators
| operator         | example                      | result                                              |
|------------------|------------------------------|-----------------------------------------------------|
| `and` <br/> `&&` | `$x and $y` <br/> `$x && $y` | `true` of both `$x` and `$y` are true               |
| `or` <br/> `     |                              | `                                                   | `$x or $y` <br/> `$x || $y`                            | `true` if either `$x` or `$y` is true                                      |
| `xor`            | `$x xor $y`                  | `true` if either `$x` or `$y` is true, but not both |
| `!`              | `!$x`                        | `true` if `$x` is `false`                           |
