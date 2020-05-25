console.log('script.js included >>>')
console.log('a lightweight, cross platform, OOPS language.')
console.log('one of the three core technologies of the web')
console.log('originally used with the browser environment, but due to node.js, developers\ncan now code javascript serversidely')
console.log('js is used by ton of frameworks, such as electron, angular, jquery, but native js knowledge is needed beforehand to use them')
console.log('html defines the content, css the delivery and javascript the method')
console.log('----------------------------------------------------')
console.log('this was written in javascript es5')
/* break */
console.log('variables!!')
var firstName = 'john';
console.log('his first name is ' + firstName)
console.log('^ done using console.log("his first name is " + firstName), this was written with a " instead of a single quote as that would break the actual js console.log,\nfirstName is the var name, its data type is a string')
var age; // we can define the variable with no data in it, this way, its data type will be undefined until actually changed later on
var secondSentence = "he's" + age /* type coercion, age, aka a number variable, is coerced into a string for secondSentence, this can be used with about anything */ + "years old."
console.log('adding variables as strings in parameters is called type coercion')
console.log(secondSentence)
console.log('console.log(secondSentence) will print out "he\'\sundefinedyears old"\nthis is due to javascript not counting the whitespace in + age + as it is not read as string, therefore you will have to add space in the actual strings, undefined was printed out because no data was assigned to variable age.')
var age = 23; // number data type, javascript stores numbers as floating point, 10 will be 10.0 for javascript
var secondSentence = "he's " + age + " years old." // fixed version
console.log('i have assigned data to variable age now, i will try printing variable secondSentence with fixed whitespace')
console.log(secondSentence)
var undefinedvar; // you can't use undefined as var name because it is a js reserved keyword
var breaker = "--------------------------";
console.log('data types:')
console.log('number - floating point numbers')
console.log('strings - like this one being used in a console.log, strings are text')
console.log('booleans - conditions which are either true or false')
console.log('undefined - no data type is assigned to a variable, like this one')
console.log(undefinedvar)
console.log('null - non existent value or data type')
console.log('javascript works with dynamic typing: data types are automatically assigned to variables')
console.log(breaker)

var fullAge = true;
console.log('fullAge\'\s boolean value: ' + fullAge)
console.log('forgot to mention that i typed \'\ or \"\ without breaking a string by using escape characters, aka \\ \\ inbetween the character which you want to escape')
console.log('variables cannot start with numbers or symbols except _ or $, not in the middle either or anywhere in the var name, it\'\ll throw an unexpected token exception just as if you used a reserved keyword')

/* you can declare multiple variables undefinedly, and then define them later on without using var
var one, two; // declares variable one and two
one = 1; // one and two are declared respectively with 1 and 2 values as number variables
two = 2; //

one = 11; // << variable mutation, no var needed beforehand as variable is already existant, declared and defined
*/

alert('watch this, i\'\m going to use alert()!!');
alert(secondSentence);
alert('just like console.log()!!');
console.log('alerts are not mentioned in the javascript console');

// ps: if you forget to add ; you will be thrown undefined type exceptions

var questionLastName = prompt('what is your last name? '); // result of prompt is stored into var questionName
alert('your last name is ' + questionLastName); 

// lesson 9 finish
console.log('lesson 9 finish')