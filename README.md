# BuildLang
![Logo]()
### by: Ty Valencia, Christine Li, and Will LoGiudice

## Description
A block-based language that builds off the simplicity of Python but has advanced functionality and is even easier to read! This language is good for beginners and advanced programmers alike. 

## Features
 - Connecting blocks - functions can be easily connected each other in an intuitive way
 - Type Inference - to make it easier to write, you don't have to declare that x = 5 is an int (duh.)
 - Blocks can run at the same time - inspired by Go's goroutines, blocks can be ran in parallel
 - Optionals - borrowed from Swift's approach to handling nulls and errors
 - Unique IDE - create a clean UI that makes it fun for kids to code (stretch goal)


## Examples 
### Binary of the multiplication of two variables

<table>
<tr> <th>Python</th><th>BuildLang</th><tr>
</tr>

<td>

```
def function1(num1, num2): 
	# Multiplies two variables
	return num1 * num2

def function2(num): 
	# Returns binary of a variable
	binary_num = "" 
    while num > 0: 
        binary_num = str(num % 2) + binary_num 
        num = num // 2 
    return binary_num 

def main: 
	function2(function1(3, 5))


```

</td>
<td>

```
block function1(num1, num2): 
	// Multiplies two variables
	return num1 * num2

block function2(num): 
	// Returns binary of a variable
	binary_num = "" 
    while num > 0: 
        binary_num = str(num % 2) + binary_num 
        num = num // 2 
    return binary_num 

main: 
	// more intuitive way to connect functions
	connect output_of(function1(3, 5)) to input_of(function2()) 
```

</td>
</table>