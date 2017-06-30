**********************************************************ES6*********************************************************

*Transpilers(BABEL, Traceur..)
* Adding babael to package .json or npm install
*npm install in vsc terminal to install all dependencies from reading package.json
*webpack.config.js to connect app.jks with bundle.js
*ES2015======> ES6
* Tools required to convert  es6 to es5 are present in nodemodules/.bin therefore we need to set path
*start webpack-dev server on specified localhost port


* Installation
	Node.js
	Visual Studio Code
	
* cmd:
	npm  --version
	
****array.map();
* arrow function
		comapct code
		'this' accessible inside nested function

*Es6 provides option to give default values to parameters
* '...' acts as params


* Backtick(``) used for writing multi line strings and giving dynamic values to string 
* destructuring assignments 
	shorthand notation
	obj deep matching
	parameter context
	fail soft destructuring
	
** MODULES:
->Every js file is in itself is a module and it is restricted to that js file until and unless you import it.
->'Alias' is given while exporting and importing similar to column aliases in SQL
->if 'default' keyword is used while exporting then no need to add {} while importing
->only one default export per module.
-> function called by default function need not be exported
->'default' is used for exporting main functions.. ie the entry point

**CLASSES:
->class can have only one constructor(default or parameterised)
-> need not declare attributes in class, it is injected using 'this'
->getters and setters are alowwed using 'get' and 'set' keywords 
-> 'get' and 'set' function will be having the attribute as the name of function which be set or get using this._'attributename'

**INHERITANCE
->Multiple inheritance not allowed.
->'super' keyword can b used in ES6
->overloading of  static functions is allowed  using 'super' keyword

**SYMBOLS
->all javascript objectes are public
-> to create private objects we use Symbol()
->these private variables if needed by another function has to be passed as parameters
-> no meaning to export a function tht takes symbol reference.

**ITERATORS
->for..of loop in ES6 produces  elements of arr whereas for..in produces indices of arr
->'Symbol.iterator' is a global symbol nd can be used anywhere but not regenerated
->every array object has a key 'Symbol.iterator' whose value is a function tht allows to navigate thru the array.

**CUSTOM ITERATION:
->create obj with key 'symbol.iterator'
-> which will be a function that returns a object which has a single key 'next' which itself is a function	
->
	
all javascript functions are  non cooperative(once c alled it wont allow execution of other business logic)
in other lang functn can be made cooperative using threads
javascript can be mde to  support cooperative function using generators

GENERATORS
	declared using 
		function* funcname(){}
		or
		function *funcname(){}
		
	called using 
		let variable = funcname();
		variable.next().value;
** calling generators will return an iterable in `variable` and variable.next() will call the function
** on callin next() firsttime , generator is executed till yield and yield  can return some value which is accessible using value
** on calling next() again it starts executing from yield until it encounters a next  yield or till it encounters exit bracket. here .value will return yield value if exists or it will give the value if there is a return value of function
** we can pass argument in yield function which has to be taken in a variable
**GENERATOR IS FACTORY OF ITERATORS (one  you call the  generator it returns a iterator object)
** FOR USING GENERATOR we need to import `bable-polyfill` in app.js
** genrator.next returns javascript object which is { value:`` done:``}
	value of 	yield or return
**

COLLECTION
	MAP & SET
	
	Map:
	-->key value pairs
		let map=new Map();
		map.set()
		map.get()
		map.has()
		map.delete()
		map.clear()
		map.size
	-->duplicate key will be overwritten
	-->iterable object using for..of on map.keys() or map.values() or `entry` in map.entries(){entry[0],entry[1]} or [key,value] of map.entries(){key ,value}
	-->Map spreading
		let arr=[...map.keys()];
		//arr will consist of keys of map
	-->Weak map
		memoryleak:when any object occupies a memory chunk but is not referenced by any pointer
		ordinary memory does not take care of memoryleak whereas weak map does
		weakmap deallocated key value pairs if it is not acccessed for a while
		same functions as map
		following operations should not be performed:
			iteration over keys or values of weak map
			should not clear weakmap(//done implicitly)
			
	Set:
	-->operations:
		set.add()
		set.delete()
		set.clear();
		set.has()
		set.size
	-->set into array isdone using spreadoperator
	-->WeakSet
		same as  weak map
		
PROMISES
	ES6 supports promises whe ES5 doesnot
	handling asynchronous programming in JS
	
	class Promise // provided  by ES6
		resolve(); //similar to success
		reject(); //similar to error
	//given in ES6
	resolve() -> return a promise object which can be used  later to get the value returned by resolve
		var p2= Promise.resolve();
			//p2 is a promise which can be called `p2.then` to get the value returned  by resolve
		var p =new Promise(function(resolve,reject){
		setTimeout(()=>resolve(4),2000)
		});
		call resolve after 2 sec
		p.then((res)=>{res+=2}) //res =6
		p.then((res)) //res =4 // immutable
	
	reject()	
		p.then((res)=>,(err)=>) // res for resolve err for reject
	
	PRomise.catch()
		throw new Error();
		p.then()
		.catch((err)) //Error object
	
	Promise.all
		2 promises p1 ,p2 
		if twop promises need to b clubbed we can use promise.all([//array of promises]).then(function(promises){promises.forEach()} //all responses are clubbed and then displayed finally
	
	Promise.race
		opposite to all
		
**********************************************************TYPESCRIPT*********************************************************

*Every Es6  code is valid ts code
*typescriptlang.org/play --> for coding in ts  converted to javascript
*file extension is .ts
*convert ts code to ES5 for browser using tsc(ts complier)
	npm install -g typescript
*index.html will contain  app.js in script tag
* multiple builtin typescript(number ,boolean,string,array,tuple,enum, any,void,null , undefined)
* null or undefined are used  for more code readability.

Generics
	`any` is not generics as collector wont know which object type is returned
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	