import 'babel-polyfill';
import {printName} from './components/assg1.1_constant';
import {scopeChecking} from './components/assg1.2_scoping';
import {enhancedObjProp} from './components/assg1.3_enhancedObjProp';
import {arrowFunctions} from './components/assg1.4_arrowFunctions';
import {parameterHandling_defaultParametersAdd,parameterHandling_restParametersuserFriends,parameterHandling_spreadParametersprintCapitalNames} from './components/assg1.5_parameterHandling';
import {templateLiterals} from './components/assg1.6_templateLiterals';
import {destructuringAssignment_arrayMatching,destructuringAssignment_deepMatching} from './components/assg1.7_destructuringAssignment';
import classesTest from './components/assg1.8_classes';
import {symbolTest} from './components/assg1.9_symbols';
import {itertorTest} from './components/assg1.10_iterators';
import {generatorTest} from './components/assg2.1_generators';
import {collectionsTest} from './components/assg2.2_collections';
import {promisesTest} from './components/assg2.3_promises';

document.write("<h2>Hello from ES6 to connect to ES5</h2>");

// /*ASSSIGNMENT 1*/
// console.log("\nASSIGNMENT 1\n",printName());

// /*ASSSIGNMENT 2*/
// console.log("\nASSIGNMENT 2\n",scopeChecking());

// /*ASSSIGNMENT 3*/
// console.log("\nASSIGNMENT 3\n",enhancedObjProp());

// /* ASSIGNEMENT 4 */
// console.log("\nASSIGNMENT 4\n",arrowFunctions());

// /*ASSSIGNMENT 5*/
// console.log("\nASSIGNMENT 5\n",parameterHandling_defaultParametersAdd(4));
// console.log("\nASSIGNMENT 5\n",parameterHandling_defaultParametersAdd(4,6));
// console.log("\nASSIGNMENT 5\n",parameterHandling_defaultParametersAdd());
// console.log("\nASSIGNMENT 5\n",parameterHandling_defaultParametersAdd(undefined,5));
// parameterHandling_restParametersuserFriends("David","MAtt","MAthew","Joseph","Lisa");
// let names=["David","MAtt","MAthew","Joseph","Lisa"];
// parameterHandling_spreadParametersprintCapitalNames(...names);

// /*ASSSIGNMENT 6*/
// console.log("\nASSIGNMENT 6\n",templateLiterals());

// /*ASSSIGNMENT 7*/
// console.log("\nASSIGNMENT 7\n",destructuringAssignment_arrayMatching());
// console.log("\nASSIGNMENT 7\n",destructuringAssignment_deepMatching());

// /*ASSSIGNMENT 8*/
// console.log("\nASSIGNMENT 8\n",classesTest());

// /*ASSIGNMENT 9*/
// console.log("\nASSIGNMENT 9\n");
// symbolTest();

// /*ASSIGNMENT 10 */
// console.log("\nASSIGNMENT 10\n");
// itertorTest();

/*ASSIGNMENT 11 */
console.log("\nASSIGNMENT 11\n");
generatorTest();


/*ASSIGNMENT 12 */
console.log("\nASSIGNMENT 12\n");
collectionsTest();

/*ASSIGNMENT 13 */
console.log("\nASSIGNMENT 13\n");
promisesTest();