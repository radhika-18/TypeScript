/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"babel-polyfill\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _assg = __webpack_require__(1);

	var _assg2 = __webpack_require__(2);

	var _assg3 = __webpack_require__(3);

	var _assg4 = __webpack_require__(4);

	var _assg5 = __webpack_require__(5);

	var _assg6 = __webpack_require__(6);

	var _assg7 = __webpack_require__(7);

	var _assg8 = __webpack_require__(8);

	var _assg9 = _interopRequireDefault(_assg8);

	var _assg10 = __webpack_require__(9);

	var _assg11 = __webpack_require__(10);

	var _assg12 = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	document.write("<h2>Hello from ES6 to connect to ES5</h2>");

	/*ASSSIGNMENT 1*/

	/*ASSSIGNMENT 2*/
	console.log("\nASSIGNMENT 2\n", (0, _assg2.scopeChecking)());

	/*ASSSIGNMENT 3*/
	console.log("\nASSIGNMENT 3\n", (0, _assg3.enhancedObjProp)());

	/* ASSIGNEMENT 4 */
	console.log("\nASSIGNMENT 4\n", (0, _assg4.arrowFunctions)());

	/*ASSSIGNMENT 5*/
	console.log("\nASSIGNMENT 5\n", (0, _assg5.parameterHandling_defaultParametersAdd)(4));
	console.log("\nASSIGNMENT 5\n", (0, _assg5.parameterHandling_defaultParametersAdd)(4, 6));
	console.log("\nASSIGNMENT 5\n", (0, _assg5.parameterHandling_defaultParametersAdd)());
	console.log("\nASSIGNMENT 5\n", (0, _assg5.parameterHandling_defaultParametersAdd)(undefined, 5));
	(0, _assg5.parameterHandling_restParametersuserFriends)("David", "MAtt", "MAthew", "Joseph", "Lisa");
	var names = ["David", "MAtt", "MAthew", "Joseph", "Lisa"];
	_assg5.parameterHandling_spreadParametersprintCapitalNames.apply(undefined, names);

	/*ASSSIGNMENT 6*/
	console.log("\nASSIGNMENT 6\n", (0, _assg6.templateLiterals)());

	/*ASSSIGNMENT 7*/
	console.log("\nASSIGNMENT 7\n", (0, _assg7.destructuringAssignment_arrayMatching)());
	console.log("\nASSIGNMENT 7\n", (0, _assg7.destructuringAssignment_deepMatching)());

	/*ASSSIGNMENT 8*/
	console.log("\nASSIGNMENT 8\n", (0, _assg9.default)());

	/*ASSIGNMENT 9*/
	console.log("\nASSIGNMENT 9\n");
	(0, _assg10.symbolTest)();

	/*ASSIGNMENT 10 */
	console.log("\nASSIGNMENT 10\n");
	(0, _assg11.itertorTest)();

	/*ASSIGNMENT 11 */
	console.log("\nASSIGNMENT 11\n");
	(0, _assg12.generatorTest)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.printName = printName;
	function printName() {
	    var name = "RADHIKA";
	    return name;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.scopeChecking = scopeChecking;
	function scopeChecking() {
	    var name = "Radhika";
	    if (name != null) {
	        var company = "Xoriant";
	    }
	    //console.log("Name=",name," and company= ",company);
	    return name;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.enhancedObjProp = enhancedObjProp;
	function enhancedObjProp() {
	    var OrderObj = {
	        id: 1,
	        title: 'Object1',
	        price: 45,
	        printOrder: function printOrder() {
	            return this.id, this.title, this.price;
	        },
	        getPrice: function getPrice() {
	            return this.price;
	        }
	    };
	    var newOrderObject = Object.assign({}, OrderObj);
	    OrderObj.printOrder();
	    newOrderObject.printOrder();
	    OrderObj.getPrice();
	    newOrderObject.getPrice();
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.arrowFunctions = arrowFunctions;
	function arrowFunctions() {
	    var array1 = ['Matt', 'Mathew', 'David'];
	    var array2 = [];
	    array1.forEach(function (n) {
	        array2.push({ name: n, length: n.length });
	    });
	    return array2;
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	exports.parameterHandling_defaultParametersAdd = parameterHandling_defaultParametersAdd;
	exports.parameterHandling_restParametersuserFriends = parameterHandling_restParametersuserFriends;
	exports.parameterHandling_spreadParametersprintCapitalNames = parameterHandling_spreadParametersprintCapitalNames;
	function parameterHandling_defaultParametersAdd() {
	        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

	        return a + b;
	}

	function parameterHandling_restParametersuserFriends(username) {
	        console.log(username);

	        for (var _len = arguments.length, friends = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                friends[_key - 1] = arguments[_key];
	        }

	        friends.forEach(function (n) {
	                return console.log(n);
	        });
	}

	function parameterHandling_spreadParametersprintCapitalNames(name1, name2, name3, name4, name5) {
	        console.log(name1.toUpperCase(), name2.toUpperCase(), name3.toUpperCase(), name4.toUpperCase(), name5.toUpperCase());
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.templateLiterals = templateLiterals;
	function templateLiterals() {
	    var message = "There are certain issues with my laptop.\n    I personally think certain drivers aren't installed. \n    please do have a look on the same";
	    var model = "ABC345NM";
	    var deskno = "D-82";
	    var name = "ABXC";
	    return message + ".\nMy laptop model is " + model + " and my desk no. is " + deskno + ". Thanks " + name;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.destructuringAssignment_arrayMatching = destructuringAssignment_arrayMatching;
	exports.destructuringAssignment_deepMatching = destructuringAssignment_deepMatching;
	function destructuringAssignment_arrayMatching() {
	    var arr1 = [1, 4, 5, 9];
	    var b = arr1[2];
	    // console.log(b);

	    return b;
	}
	function destructuringAssignment_deepMatching() {
	    var orgObj = {
	        name: "ABC",
	        address: {
	            city: "Mumbai",
	            state: "MAharashtra",
	            pin: "400089"
	        }
	    };
	    var pin = orgObj.address.pin;
	    // console.log(pin);

	    return pin;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = classesTest;

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Account = function () {
	    function Account(id, name, balance) {
	        _classCallCheck(this, Account);

	        this.id = id;
	        this.name = name;
	        this.balance = balance;
	    }

	    _createClass(Account, [{
	        key: "getBalance",
	        value: function getBalance() {
	            return this.balance;
	        }
	    }]);

	    return Account;
	}();

	var SavingAccount = function (_Account) {
	    _inherits(SavingAccount, _Account);

	    function SavingAccount(id, name, balance, interest) {
	        _classCallCheck(this, SavingAccount);

	        var _this = _possibleConstructorReturn(this, (SavingAccount.__proto__ || Object.getPrototypeOf(SavingAccount)).call(this, id, name, balance));

	        _this.interest = interest;
	        return _this;
	    }

	    _createClass(SavingAccount, [{
	        key: "getAccountBalance",
	        value: function getAccountBalance() {
	            return _get(SavingAccount.prototype.__proto__ || Object.getPrototypeOf(SavingAccount.prototype), "getBalance", this).call(this) + this.interest;
	        }
	    }]);

	    return SavingAccount;
	}(Account);

	var CurrentAccount = function (_Account2) {
	    _inherits(CurrentAccount, _Account2);

	    function CurrentAccount(id, name, balance, cash_credit) {
	        _classCallCheck(this, CurrentAccount);

	        var _this2 = _possibleConstructorReturn(this, (CurrentAccount.__proto__ || Object.getPrototypeOf(CurrentAccount)).call(this, id, name, balance));

	        _this2.cash_credit = cash_credit;
	        return _this2;
	    }

	    _createClass(CurrentAccount, [{
	        key: "getAccountBalance",
	        value: function getAccountBalance() {
	            return _get(CurrentAccount.prototype.__proto__ || Object.getPrototypeOf(CurrentAccount.prototype), "getBalance", this).call(this) + this.cash_credit;
	        }
	    }]);

	    return CurrentAccount;
	}(Account);

	function classesTest() {
	    var savingObj1 = new SavingAccount(1, "David", 25000, 3400);
	    var savingObj2 = new SavingAccount(2, "Matt", 35000, 3400);
	    var currentObj1 = new CurrentAccount(3, "Lisa", 45000, 1500);
	    var currentObj2 = new CurrentAccount(4, "Mathew", 50000, 1300);
	    var accounts = [];
	    accounts.push(savingObj1, savingObj2, currentObj1, currentObj2);
	    return getTotalBalance(accounts);
	}

	function getTotalBalance(arr) {
	    var sum = 0;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var acc = _step.value;

	            sum += acc.getAccountBalance();
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    return sum;
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.symbolTest = symbolTest;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var previousNumber = Symbol();
	var currentNumber = Symbol();

	var Fibonacci = function () {
	    function Fibonacci() {
	        _classCallCheck(this, Fibonacci);

	        this[previousNumber] = 0;
	        this[currentNumber] = 1;
	    }

	    _createClass(Fibonacci, [{
	        key: "next",
	        value: function next() {
	            var temp = this[previousNumber] + this[currentNumber];
	            this[previousNumber] = this[currentNumber];
	            this[currentNumber] = temp;
	            return { value: this[currentNumber], done: false };
	        }
	    }]);

	    return Fibonacci;
	}();

	function symbolTest() {
	    var fibonaaciObj = new Fibonacci();
	    var random = Math.floor(Math.random() * 10 + 1);
	    while (random-- > 0) {
	        console.log(fibonaaciObj.next().value);
	    }
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.itertorTest = itertorTest;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var armstrong = _defineProperty({}, Symbol.iterator, function () {
	    var no = 11;
	    return {
	        next: function next() {
	            while (true) {
	                if (checkIfArmstrong(no)) {
	                    var temp = no;
	                    no++;
	                    return temp;
	                }
	                no++;
	            }
	        }
	    };
	});

	function checkIfArmstrong(number) {
	    var tempNumber = number;
	    var sum = 0;
	    var pow = getPower(number);
	    while (tempNumber != 0) {
	        sum += Math.pow(tempNumber % 10, pow);
	        tempNumber = Math.floor(tempNumber / 10);
	    }
	    if (sum == number) return true;else return false;
	}

	function getPower(num) {
	    var count = 0;
	    while (num != 0) {
	        count++;
	        num = Math.floor(num / 10);
	    }
	    return count;
	}

	function itertorTest() {
	    var armstrongItr = armstrong[Symbol.iterator]();
	    console.log(armstrongItr.next());
	    console.log(armstrongItr.next());
	    console.log(armstrongItr.next());
	    console.log(armstrongItr.next());
	    console.log(armstrongItr.next());
	    console.log(armstrongItr.next());
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.generatorTest = generatorTest;

	var _marked = [getArmstrong].map(regeneratorRuntime.mark);

	function getArmstrong() {
	    var no, temp, reset;
	    return regeneratorRuntime.wrap(function getArmstrong$(_context) {
	        while (1) {
	            switch (_context.prev = _context.next) {
	                case 0:
	                    no = 11;

	                case 1:
	                    if (false) {
	                        _context.next = 12;
	                        break;
	                    }

	                    if (!checkIfArmstrong(no)) {
	                        _context.next = 9;
	                        break;
	                    }

	                    temp = no;

	                    no++;
	                    _context.next = 7;
	                    return temp;

	                case 7:
	                    reset = _context.sent;

	                    if (reset) no = 11;

	                case 9:
	                    no++;
	                    _context.next = 1;
	                    break;

	                case 12:
	                case "end":
	                    return _context.stop();
	            }
	        }
	    }, _marked[0], this);
	}

	function checkIfArmstrong(number) {
	    var tempNumber = number;
	    var sum = 0;
	    var pow = getPower(number);
	    while (tempNumber != 0) {
	        sum += Math.pow(tempNumber % 10, pow);
	        tempNumber = Math.floor(tempNumber / 10);
	    }
	    if (sum == number) return true;else return false;
	}

	function getPower(num) {
	    var count = 0;
	    while (num != 0) {
	        count++;
	        num = Math.floor(num / 10);
	    }
	    return count;
	}

	function generatorTest() {
	    var armstrongItr = getArmstrong();
	    console.log(armstrongItr.next().value);
	    console.log(armstrongItr.next().value);
	    console.log(armstrongItr.next().value);
	    console.log(armstrongItr.next().value);
	    console.log(armstrongItr.next().value);
	    console.log(armstrongItr.next().value);
	}

/***/ }
/******/ ]);