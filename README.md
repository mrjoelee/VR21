# HTML,CSS, JavaScript (TLG)

## JavaScript
### Eloquent JavaScript [EBook](https://eloquentjavascript.net/)

#### **Chapter 1. Values, Types and Operations**
1. **Numbers**
    - Numbers - numeric values, arithmetic. 

    - Special Numbers (Infinity (positive) & -Infinity (negative))

    - NaN - stands for "not a number" 
            
            0/0 (zero divided by zero). 

2. **Strings**
    - represents text and enclosing by '', " " or `` (character below ESC button)
    - \n - means a tab character.
    - Strings cannot be divided, multiplied or subtracted, but the + (plus) can be used a concatenate.              
    
            "abc" + "def" = "abcdef". 

    - template literal ${ }, result will be calculated and converted into a string 
    
            'half of 100 is ${100/2}' = "half of 100 is 50".

3. **Unary Operators**
    - Not all operators are symbols. 

            "typeof" is used to data type of a value

4. **Boolean Values**
    - Comparison

            console.log(3 > 2) true
            console.log(3 < 2) false


    **Notes:** The > and < signs are the traditional symbols for “is greater than” and “is less than”, respectively. 

    Other similar operators are >= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to).

5. **Logical Operators**
    - The && operator represents logical and. It is a binary operator, and its result is true only if both the values given to it are true.

            console.log(true && false) false
            console.log(true && true) true
    
    - The || operator denotes logical or. It produces true if either of the values given to it is true.

            console.log(false || true) true
            console.log(false || false) false

6. **Empty Values**
    - Null
    - undefined
    
    **Notes:** For more information visit [Values, Types, And Operators](https://eloquentjavascript.net/01_values.html)

#### **Chapter 2. Program Structure**
- You now know that a program is built out of statements, which themselves sometimes contain more statements. Statements tend to contain expressions, which themselves can be built out of smaller expressions.

- Putting statements after one another gives you a program that is executed from top to bottom. You can introduce disturbances in the flow of control by using conditional (if, else, and switch) and looping (while, do, and for) statements.

- Bindings can be used to file pieces of data under a name, and they are useful for tracking state in your program. The environment is the set of bindings that are defined. JavaScript systems always put a number of useful standard bindings into your environment.

- Functions are special values that encapsulate a piece of program. You can invoke them by writing functionName(argument1, argument2). Such a function call is an expression and may produce a value.

**Notes:** For more information visit [Program Structure](https://eloquentjavascript.net/02_program_structure.html)

#### **Chapter 13. JavaScript and the Browser**
- The simplest way of explaining the Internet is to call it "the network of networks." It's the connection of computer networks around the world into one entity, so to speak. It's not one big computer, but rather numerous networked computers connected together.

- In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the web-server. For instance, in-browser JavaScript is able to: Add new HTML to the page, change the existing content, modify styles. React to user actions, run on mouse clicks, pointer movements, key presses

**Notes:** For more information visit [JavaScript and the Browser](https://eloquentjavascript.net/13_browser.html)

#### **Chapter 14. The Document Object Model AKA DOM**
- JavaScript programs may inspect and interfere with the document that the browser is displaying through a data structure called the DOM. This data structure represents the browser’s model of the document, and a JavaScript program can modify it to change the visible document.

- The DOM is organized like a tree, in which elements are arranged hierarchically according to the structure of the document. The objects representing elements have properties such as parentNode and childNodes, which can be used to navigate through this tree.

- The way a document is displayed can be influenced by styling, both by attaching styles to nodes directly and by defining rules that match certain nodes. There are many different style properties, such as color or display. JavaScript code can manipulate an element’s style directly through its style property

**Notes:** For more information visit [About the DOM](https://eloquentjavascript.net/14_dom.html)