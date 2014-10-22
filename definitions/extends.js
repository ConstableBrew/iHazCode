/**
Creates a class that is the child class inheriting from the parent class
When the new class is called, the parent constructor is called and then the 
child class' constructor. All arguments passed are passed, so the child
must have the same arguments as its parent class, possibly adding more.
**/
Object.extends = function(child, parent) {
	if (typeof child !== 'function' 
		|| typeof parent !== 'function'
		|| child === parent) {
		console.log('Aborting extends!')
		return;
	}
	
	(function(sub, sup) {
		child = function (){
			sup.apply(this, arguments); // call parent constructor first
			sub.apply(this, arguments); // call own constructor
		};
		child.prototype = Object.create(parent.prototype); // Establish the prototype chain
		child.prototype.constructor = child; // Re-establish the constructor
	})(child, parent);
	return child;
};

/*
function TestParent(arg1){ this.arg1 = arg1; console.log('TestParent function', arg1);}
function TestChild(arg1, arg2){ this.arg2 = arg2; console.log('TestChild function', arg2);}
function TestChild2(arg1, arg2){ this.arg2 = arg2; console.log('TestChild2 function', arg2);}
function TestGrandChild(arg1, arg2, arg3){ this.arg3 = arg3; console.log('TestGrandChild function', arg3);}
function TestOutsider(){}
TestChild = Object.extends(TestChild, TestParent);
TestChild2 = Object.extends(TestChild2, TestParent);
TestGrandChild = Object.extends(TestGrandChild, TestChild);
console.log(TestChild.toString());

var t1 = new TestParent('t1a', 't1b', 't1c');
var t2 = new TestChild('t2a', 't2b', 't2c');
var t3 = new TestGrandChild('t3a', 't3b', 't3c');
var t4 = new TestChild2('t4a', 't4b', 't4c');

console.log('t1');
console.log('is object      ', t1 instanceof Object);
console.log('is parent      ', t1 instanceof TestParent);
console.log('is not child   ', !(t1 instanceof TestChild));
console.log('is not grand   ', !(t1 instanceof TestGrandChild));
console.log('is not child2  ', !(t1 instanceof TestChild2));
console.log('is not outsider', !(t1 instanceof TestOutsider));
console.log('arg1           ', t1.arg1 === 't1a');
console.log('arg2           ', t1.arg2 === undefined);
console.log('arg3           ', t1.arg3 === undefined);

console.log('t2');
console.log('is object      ', t2 instanceof Object);
console.log('is parent      ', t2 instanceof TestParent);
console.log('is child       ', t2 instanceof TestChild);
console.log('is not grand   ', !(t2 instanceof TestGrandChild));
console.log('is not child2  ', !(t2 instanceof TestChild2));
console.log('is not outsider', !(t2 instanceof TestOutsider));
console.log('arg1           ', t2.arg1 === 't2a');
console.log('arg2           ', t2.arg2 === 't2b');
console.log('arg3           ', t2.arg3 === undefined);

console.log('t3');
console.log('is object      ', t3 instanceof Object);
console.log('is parent      ', t3 instanceof TestParent);
console.log('is child       ', t3 instanceof TestChild);
console.log('is grand       ', t3 instanceof TestGrandChild);
console.log('is not child2  ', !(t3 instanceof TestChild2));
console.log('is not outsider', !(t3 instanceof TestOutsider));
console.log('arg1           ', t3.arg1 === 't3a');
console.log('arg2           ', t3.arg2 === 't3b');
console.log('arg3           ', t3.arg3 === 't3c');

console.log('t4');
console.log('is object      ', t4 instanceof Object);
console.log('is parent      ', t4 instanceof TestParent);
console.log('is not child   ', !(t4 instanceof TestChild));
console.log('is not grand   ', !(t4 instanceof TestGrandChild));
console.log('is child2      ', t4 instanceof TestChild2);
console.log('is not outsider', !(t4 instanceof TestOutsider));
console.log('arg1           ', t4.arg1 === 't4a');
console.log('arg2           ', t4.arg2 === 't4b');
console.log('arg3           ', t4.arg3 === undefined);
*/