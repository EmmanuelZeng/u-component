import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;
	(function (module) {

		if (process.env.NODE_ENV === 'production') {
		  module.exports = requireReactIs_production_min();
		} else {
		  module.exports = requireReactIs_development();
		}
} (reactIs));
	return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.btn{border-radius:.5rem;font-weight:600}.btn-primary{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(13 36 127/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.btn-primary:hover{--tw-bg-opacity:1;background-color:rgb(13 20 38/var(--tw-bg-opacity))}.btn-outline-primary{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(13 36 127/var(--tw-border-opacity));border-width:1px;color:rgb(13 36 127/var(--tw-text-opacity))}.btn-outline-primary:hover{background-color:#0d247f07}.btn-text-primary{--tw-text-opacity:1;border-style:none;color:rgb(13 36 127/var(--tw-text-opacity))}.btn-text-primary:hover{background-color:#0d247f07}.btn-danger{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(221 45 45/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.btn-danger:hover{--tw-bg-opacity:1;background-color:rgb(195 32 32/var(--tw-bg-opacity))}.btn-outline-danger{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(221 45 45/var(--tw-border-opacity));border-width:1px;color:rgb(221 45 45/var(--tw-text-opacity))}.btn-outline-danger:hover{background-color:#dd2d2d07}.btn-text-danger{--tw-text-opacity:1;border-style:none;color:rgb(221 45 45/var(--tw-text-opacity))}.btn-text-danger:hover{background-color:#dd2d2d07}.btn-info{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(64 153 217/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.btn-info:hover{--tw-bg-opacity:1;background-color:rgb(21 144 192/var(--tw-bg-opacity))}.btn-outline-info{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(64 153 217/var(--tw-border-opacity));border-width:1px;color:rgb(64 153 217/var(--tw-text-opacity))}.btn-outline-info:hover{background-color:#4099d907}.btn-text-info{--tw-text-opacity:1;border-style:none;color:rgb(64 153 217/var(--tw-text-opacity))}.btn-text-info:hover{background-color:#4099d907}.btn-success{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(20 173 91/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.btn-success:hover{--tw-bg-opacity:1;background-color:rgb(19 152 19/var(--tw-bg-opacity))}.btn-outline-success{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(20 173 91/var(--tw-border-opacity));border-width:1px;color:rgb(20 173 91/var(--tw-text-opacity))}.btn-outline-success:hover{background-color:#14ad5b07}.btn-text-success{--tw-text-opacity:1;border-style:none;color:rgb(20 173 91/var(--tw-text-opacity))}.btn-text-success:hover{background-color:#14ad5b07}.btn-default{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(230 231 232/var(--tw-bg-opacity));color:rgb(13 20 38/var(--tw-text-opacity))}.btn-default:hover{--tw-bg-opacity:1;background-color:rgb(242 243 244/var(--tw-bg-opacity))}.btn-outline-default{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(170 173 182/var(--tw-border-opacity));border-width:1px;color:rgb(13 20 38/var(--tw-text-opacity))}.btn-outline-default:hover{--tw-bg-opacity:1;background-color:rgb(230 231 232/var(--tw-bg-opacity))}.btn-text-default{--tw-text-opacity:1;border-style:none;color:rgb(13 20 38/var(--tw-text-opacity))}.btn-text-default:hover{--tw-bg-opacity:1;background-color:rgb(230 231 232/var(--tw-bg-opacity))}.small{font-size:.875rem;line-height:1.25rem;padding:.5rem 1rem}.medium{font-size:1rem;line-height:1.5rem;padding:.75rem 1.5rem}.large{font-size:1.125rem;line-height:1.75rem;padding:.75rem 2rem}.text-small{font-size:.875rem;line-height:1.25rem}.text-medium{font-size:1rem;line-height:1.5rem}.text-large{font-size:1.125rem;line-height:1.75rem}.title-h1{font-size:3.75rem;line-height:1.5}.title-h2{font-size:3rem;line-height:1.5}.title-h3{font-size:2.25rem;line-height:2.5rem;line-height:1.5}.title-h4{font-size:1.875rem;line-height:2.25rem;line-height:1.5}.title-h5{font-size:1.5rem;line-height:2rem;line-height:1.5}.title-h6{font-size:1.25rem;line-height:1.75rem;line-height:1.5}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.bottom-0{bottom:0}.left-0{left:0}.left-3{left:.75rem}.right-0{right:0}.top-0{top:0}.top-\\[3rem\\]{top:3rem}.z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.mb-3{margin-bottom:.75rem}.mb-\\[-5px\\]{margin-bottom:-5px}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-\\[3em\\]{margin-left:3em}.ml-auto{margin-left:auto}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-\\[-1px\\]{margin-top:-1px}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.h-1\\/2{height:50%}.h-10{height:2.5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-\\[57px\\]{height:57px}.h-full{height:100%}.max-h-\\[300px\\]{max-height:300px}.min-h-\\[76px\\]{min-height:76px}.min-h-screen{min-height:100vh}.w-1\\/2{width:50%}.w-20{width:5rem}.w-3{width:.75rem}.w-36{width:9rem}.w-4{width:1rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-7{width:1.75rem}.w-\\[200px\\]{width:200px}.w-\\[270px\\]{width:270px}.w-\\[300px\\]{width:300px}.w-\\[97\\%\\]{width:97%}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.max-w-\\[100\\%\\]{max-width:100%}.max-w-lg{max-width:32rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-3{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-3{--tw-translate-x:0.75rem}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.list-disc{list-style-type:disc}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.25rem*var(--tw-space-x-reverse))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.divide-gray2>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(170 173 182/var(--tw-divide-opacity))}.divide-gray4>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(101 101 101/var(--tw-divide-opacity))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-ellipsis,.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border{border-width:1px}.border-2{border-width:2px}.border-4{border-width:4px}.border-b{border-bottom-width:1px}.border-none{border-style:none}.border-danger{--tw-border-opacity:1;border-color:rgb(221 45 45/var(--tw-border-opacity))}.border-gray1{--tw-border-opacity:1;border-color:rgb(242 243 244/var(--tw-border-opacity))}.border-gray2{--tw-border-opacity:1;border-color:rgb(170 173 182/var(--tw-border-opacity))}.border-gray3{--tw-border-opacity:1;border-color:rgb(117 121 134/var(--tw-border-opacity))}.bg-\\[\\#151d31\\]{--tw-bg-opacity:1;background-color:rgb(21 29 49/var(--tw-bg-opacity))}.bg-backdrop{background-color:#0000009c}.bg-danger{--tw-bg-opacity:1;background-color:rgb(221 45 45/var(--tw-bg-opacity))}.bg-dangerLight{background-color:#dd2d2d07}.bg-dark{--tw-bg-opacity:1;background-color:rgb(13 20 38/var(--tw-bg-opacity))}.bg-default{--tw-bg-opacity:1;background-color:rgb(230 231 232/var(--tw-bg-opacity))}.bg-defaultLight{background-color:#e6e7e807}.bg-gray1{--tw-bg-opacity:1;background-color:rgb(242 243 244/var(--tw-bg-opacity))}.bg-indigo{--tw-bg-opacity:1;background-color:rgb(125 138 201/var(--tw-bg-opacity))}.bg-info{--tw-bg-opacity:1;background-color:rgb(64 153 217/var(--tw-bg-opacity))}.bg-infoLight{background-color:#4099d907}.bg-primary{--tw-bg-opacity:1;background-color:rgb(13 36 127/var(--tw-bg-opacity))}.bg-primaryLight{background-color:#0d247f07}.bg-success{--tw-bg-opacity:1;background-color:rgb(20 173 91/var(--tw-bg-opacity))}.bg-successLight{background-color:#14ad5b07}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-opacity-30{--tw-bg-opacity:0.3}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-5{padding-bottom:1.25rem;padding-top:1.25rem}.py-\\[1em\\]{padding-bottom:1em;padding-top:1em}.pl-2{padding-left:.5rem}.pl-4{padding-left:1rem}.pl-9{padding-left:2.25rem}.pr-4{padding-right:1rem}.pr-5{padding-right:1.25rem}.pt-3{padding-top:.75rem}.pt-\\[76px\\]{padding-top:76px}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-justify{text-align:justify}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-5xl{font-size:3rem;line-height:1}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.\\!text-primary{--tw-text-opacity:1!important;color:rgb(13 36 127/var(--tw-text-opacity))!important}.text-danger{--tw-text-opacity:1;color:rgb(221 45 45/var(--tw-text-opacity))}.text-dangerLight{color:#dd2d2d07}.text-gray1{--tw-text-opacity:1;color:rgb(242 243 244/var(--tw-text-opacity))}.text-gray2{--tw-text-opacity:1;color:rgb(170 173 182/var(--tw-text-opacity))}.text-gray3{--tw-text-opacity:1;color:rgb(117 121 134/var(--tw-text-opacity))}.text-gray4{--tw-text-opacity:1;color:rgb(101 101 101/var(--tw-text-opacity))}.text-indigo{--tw-text-opacity:1;color:rgb(125 138 201/var(--tw-text-opacity))}.text-info{--tw-text-opacity:1;color:rgb(64 153 217/var(--tw-text-opacity))}.text-infoLight{color:#4099d907}.text-primary{--tw-text-opacity:1;color:rgb(13 36 127/var(--tw-text-opacity))}.text-primaryLight{color:#0d247f07}.text-success{--tw-text-opacity:1;color:rgb(20 173 91/var(--tw-text-opacity))}.text-successLight{color:#14ad5b07}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-lg{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.drop-shadow-sm{--tw-drop-shadow:drop-shadow(0 1px 1px rgba(0,0,0,.05));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide::-webkit-scrollbar{display:none}.hover\\:bg-gray1:hover{--tw-bg-opacity:1;background-color:rgb(242 243 244/var(--tw-bg-opacity))}.hover\\:bg-primaryLight:hover{background-color:#0d247f07}.hover\\:text-\\[\\#9faec1\\]:hover,.hover\\:text-\\[rgb\\(159\\2c 174\\2c 193\\)\\]:hover{--tw-text-opacity:1;color:rgb(159 174 193/var(--tw-text-opacity))}.hover\\:text-gray2:hover{--tw-text-opacity:1;color:rgb(170 173 182/var(--tw-text-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.peer:checked~.peer-checked\\:border-2{border-width:2px}.peer:checked~.peer-checked\\:border-darkBlue{--tw-border-opacity:1;border-color:rgb(13 36 127/var(--tw-border-opacity))}.peer:checked~.peer-checked\\:text-darkBlue{--tw-text-opacity:1;color:rgb(13 36 127/var(--tw-text-opacity))}.peer:disabled~.peer-disabled\\:text-gray2{--tw-text-opacity:1;color:rgb(170 173 182/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:rounded-lg{border-radius:.5rem}.sm\\:p-4{padding:1rem}.sm\\:px-4{padding-left:1rem;padding-right:1rem}}@media (min-width:768px){.md\\:order-1{order:1}.md\\:mt-0{margin-top:0}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-\\[370px\\]{width:370px}.md\\:w-auto{width:auto}.md\\:w-fit{width:-moz-fit-content;width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}.md\\:p-0{padding:0}.md\\:pt-10{padding-top:2.5rem}.md\\:scrollbar-default{-ms-overflow-style:auto;scrollbar-width:auto}.md\\:scrollbar-default::-webkit-scrollbar{display:block}}";
styleInject(css_248z);

/**
 * Component allowing to manage a button
 *
 * ### Usage
 *
 * ```jsx
 * <Button>
 *  My button
 * </Button>
 * ```
 */

const Button = ({
  fullWidth,
  isLoading,
  variant,
  children,
  type,
  size,
  submit,
  className,
  onclick,
  disabled,
  ...props
}) => {
  const WFull = fullWidth ? "w-full" : "";
  const styleButton = variant === "text" ? `btn-text-${type}` : variant === "outlined" ? `btn-outline-${type}` : `btn-${type}`;
  const dis = disabled ? true : isLoading ? true : false;
  return /*#__PURE__*/React.createElement("button", _extends$1({
    onClick: onclick
  }, props, {
    type: `${submit ? "submit" : ""}`,
    disabled: dis,
    className: `
                btn ${styleButton}
                ${WFull}
                ${dis ? "cursor-not-allowed opacity-70" : "cursor-pointer"}
                ${size}
                ${className}`
  }), isLoading ? "Traitement..." : children);
};
Button.propTypes = {
  /**
   * The content of the component.
   */
  children: propTypes.exports.any.isRequired,
  /**
   * The color of component
   */
  type: propTypes.exports.oneOf(["default", "primary", "info", "danger", "success"]),
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: propTypes.exports.bool,
  /**
   * The variant to use.
   */
  variant: propTypes.exports.oneOf(["filled", "outlined", "text"]),
  /**
   * Loading state.
   */
  isLoading: propTypes.exports.bool,
  /**
   * The size of the component.
   */
  size: propTypes.exports.oneOf(["small", "medium", "large"])
};
Button.defaultProps = {
  type: "default",
  children: "My button",
  fullWidth: false,
  variant: "filled",
  isLoading: false,
  size: "medium"
};

// import "./../../../main.css";

/**
 * Component allowing to manage the text
 *
 * ### Usage
 *
 * ```jsx
 * <Text size="medium" type="primary">
 *  Text content
 * </Text>
 * ```
 */
const Text = ({
  children,
  size,
  type,
  fontWeight,
  className,
  align,
  element,
  textWrap
}) => {
  const whiteSpace = textWrap ? "" : "whitespace-nowrap overflow-ellipsis";
  return /*#__PURE__*/React.createElement(React.Fragment, null, element === "p" && /*#__PURE__*/React.createElement("p", {
    className: `${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`
  }, children), element === "span" && /*#__PURE__*/React.createElement("span", {
    className: `${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`
  }, children), element === "h1" && /*#__PURE__*/React.createElement("h1", {
    className: `${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`
  }, children), element === "h2" && /*#__PURE__*/React.createElement("h2", {
    className: `${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`
  }, children), element === "h3" && /*#__PURE__*/React.createElement("h3", {
    className: `${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`
  }, children), element === "h4" && /*#__PURE__*/React.createElement("h4", {
    className: `${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`
  }, children), element === "h5" && /*#__PURE__*/React.createElement("h5", {
    className: `${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`
  }, children), element === "h6" && /*#__PURE__*/React.createElement("h6", {
    className: `${className} text-${type} text-${align} text-${size} font-${fontWeight} ${whiteSpace}`
  }, children));
};
Text.propTypes = {
  /**
   * The content of the component.
   */
  children: propTypes.exports.any,
  /**
   * The color of component
   */
  type: propTypes.exports.oneOf(["gray1", "primary", "danger", "info", "gray2", "gray3", "gray4", "darkBlue", "textGray", "dark", "default", "primaryLight", "dangerLight", "warningLight", "successLight", "infoLight"]),
  /**
   * alignement of text.
   */
  align: propTypes.exports.oneOf(["center", "right", "justify", "left"]),
  /**
   * The size of the component.
   */
  size: propTypes.exports.oneOf(["small", "medium", "large", "xl", "2xl", "3xl", "4xl", "5xl"]),
  /**
   * The size of the component.
   */
  fontWeight: propTypes.exports.oneOf(["normal", "bold", "semibold"]),
  /**
   * The element that holds the text.
   */
  element: propTypes.exports.oneOf(["span", "p", "h1", "h2", "h3", "h4", "h5", "h6"])
};
Text.defaultProps = {
  type: "dark",
  size: "medium",
  fontWeight: "normal",
  className: "",
  element: "span",
  textWrap: true
};

const Logo = ({
  size,
  logo_url,
  className
}) => {
  const wL = size === "large" ? "w-48" : size === "medium" ? "w-36" : "w-20";
  return /*#__PURE__*/React.createElement("div", {
    className: `${wL} ${className}`
  }, /*#__PURE__*/React.createElement("img", {
    src: logo_url
  }));
};
Logo.propTypes = {
  /**
   * The size of the logo
   */
  size: propTypes.exports.oneOf(["small", "medium", "large"]),
  /**
   * The logo image url
   */
  logo_url: propTypes.exports.any.isRequired,
  /**
   * The class name of the component
   */
  className: propTypes.exports.string
};
Logo.defaultProps = {
  size: "medium",
  logo_url: '"/public/logo.svg"'
};

const UserIcon = () => {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-1/2 h-1/2"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
  }));
};

/**
 * This Component is for Avatar Images
 *
 * ### Usage
 * ```jsx
 * <Avatar />
 * ```
 */

const Avatar = ({
  width,
  height,
  type,
  src,
  className,
  alt,
  children,
  onClick
}) => {
  const styleAvatar = type === "circle" ? "rounded-full" : type === "square" ? "rounded-md" : type === "rounded" ? "rounded-xl" : "";
  return /*#__PURE__*/React.createElement("div", {
    className: `cursor-pointer inline-block ${styleAvatar} bg-gray1 ${className} flex justify-center items-center text-gray3 overflow-hidden`,
    style: {
      width: `${width}em`,
      height: `${height}em`
    },
    onClick: onClick
  }, children ? children : src ? /*#__PURE__*/React.createElement("img", {
    className: `inline-block w-full h-full`,
    alt: alt,
    src: src
  }) : /*#__PURE__*/React.createElement(UserIcon, null));
};
Avatar.propTypes = {
  /**
   * Width of the component.
   */
  width: propTypes.exports.number,
  /**
   * Height of the component.
   */
  height: propTypes.exports.number,
  /**
   * Type of the component.
   */
  type: propTypes.exports.oneOf(["circle", "square", "rounded"]),
  /**
   * Source file of component
   */
  src: propTypes.exports.any,
  /**
   * Alternative information for an image
   */

  alt: propTypes.exports.string,
  /**
   * All css class of the component
   */
  className: propTypes.exports.string
};
Avatar.defaultProps = {
  width: 3,
  height: 3,
  alt: "",
  type: "circle",
  src: null
};

const IconExemple$1 = () => {
  return /*#__PURE__*/React.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
};
const useClickAway = (ref, cb) => {
  useEffect(() => {
    const action = evt => {
      if (ref.current && !ref.current.contains(evt.target)) {
        if (typeof cb === "function") {
          cb();
        }
      }
    };
    document.addEventListener("mousedown", action);
    return () => {
      document.removeEventListener("mousedown", action);
    };
  }, [ref]);
};
const Popper = ({
  container,
  children,
  togglerClass,
  position,
  className
}) => {
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
    id: "dropdown-states",
    className: `${togglerClass} w-fit z-10 rounded-lg shadow-lg border-gray1 absolute top-[3rem] ${className} ${position}`
  }, children), container);
};
const ClickAway = ({
  children,
  triggerComponent: TriggerComponent,
  triggerVariant,
  triggerType,
  triggerSize,
  isLoading,
  otherTriggerProps,
  triggerIcon,
  triggerLabel,
  containerClassName,
  fullWidth,
  position,
  portalContainer,
  popoverClassName,
  triggerTextColor,
  triggerClassName,
  getListContent
}) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({});
  const togglerClass = open ? "flex" : "hidden";
  const containerRef = useRef();
  useClickAway(containerRef, () => setOpen(false));
  const toggleOptions = e => {
    const rect = e.target.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2,
      top: rect.y + window.scrollY
    });
    setOpen(!open);
  };
  const width = fullWidth ? "w-full" : "";
  const pos = position === "left" ? `left-${coords.left}` : position === "right" ? `right-0` : "";
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: `${containerClassName} ${width} relative h-10`
  }, TriggerComponent && /*#__PURE__*/React.createElement(TriggerComponent, _extends$1({}, otherTriggerProps, {
    onClick: toggleOptions
  })), !TriggerComponent && /*#__PURE__*/React.createElement(Button, _extends$1({}, otherTriggerProps, {
    id: "states-button",
    "data-dropdown-toggle": "dropdown-states",
    type: triggerType,
    variant: triggerVariant,
    onclick: toggleOptions,
    size: triggerSize,
    className: `flex items-center gap-3 ${triggerTextColor} ${triggerClassName}`,
    isLoading: isLoading,
    fullWidth: fullWidth
  }), triggerIcon, triggerLabel), open && /*#__PURE__*/React.createElement(Popper, {
    className: popoverClassName,
    position: pos,
    container: portalContainer || containerRef.current,
    togglerClass: togglerClass
  }, getListContent ? getListContent(() => setOpen(false)) : children));
};
ClickAway.propTypes = {
  /**
   * The content of the component.
   */
  triggerIcon: propTypes.exports.any,
  /**
   * The color of component
   */
  triggerType: propTypes.exports.oneOf(["default", "primary", "info", "danger", "success"]),
  /**
   * The variant to use.
   */
  triggerVariant: propTypes.exports.oneOf(["filled", "outlined", "text"]),
  /**
   * The size of the component.
   */
  triggerSize: propTypes.exports.oneOf(["small", "medium", "large"]),
  /**
   * The className of the container div
   */
  containerClassName: propTypes.exports.string,
  /**
   * The popup content element
   */
  children: propTypes.exports.element,
  /**
   * The width state of the component
   */
  fullWidth: propTypes.exports.bool,
  /**
   * The position of the dropdown
   */
  position: propTypes.exports.oneOf(["left", "right", "center"])
};
ClickAway.defaultProps = {
  triggerType: "primary",
  triggerIcon: IconExemple$1(),
  triggerVariant: "filled",
  triggerSize: 'medium',
  position: "left"
};

const UserAvatarDataDisplay = ({
  user,
  onClick
}) => {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: "cursor-pointer flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col text-right"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "small",
    type: "gray3",
    className: "mb-[-5px]"
  }, user?.fullname?.split(" ")[0]), /*#__PURE__*/React.createElement(Text, {
    size: "small",
    type: "gray3"
  }, user?.fullname?.split(" ")[1])), /*#__PURE__*/React.createElement(Avatar, {
    onClick: onClick,
    type: "square",
    width: 2.4,
    height: 2.4
  }));
};
function UserPopup({
  user,
  onDeconnect
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative h-10"
  }, /*#__PURE__*/React.createElement(ClickAway, {
    triggerSize: "small",
    triggerComponent: UserAvatarDataDisplay,
    otherTriggerProps: {
      user
    },
    position: "right",
    popoverClassName: "bg-gray1 border-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:w-[370px] flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-5 p-4 bg-white rounded-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement(Avatar, {
    width: 5,
    height: 5
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "small",
    fontWeight: "bold"
  }, user?.fullname), /*#__PURE__*/React.createElement(Text, {
    size: "small",
    type: "gray3"
  }, user?.username), /*#__PURE__*/React.createElement(Text, {
    size: "small",
    type: "gray3"
  }, user?.email))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "flex items-center gap-3",
    size: "small",
    onClick: onDeconnect
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-4 h-4"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
  })), "Deconnecter votre compte"))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center p-4 text-center"
  }, /*#__PURE__*/React.createElement(Text, {
    type: "gray3",
    size: "medium",
    fontWeight: "bold"
  }, "Dispositif \xC9lectonique Fiscal")))));
}

/**
 * The main navbar component
 */
const Navbar = ({
  logo_url,
  homePath,
  onSignup,
  onSignin,
  isAuthenticated,
  user,
  openResponsiveSidebarHandler,
  app,
  displayName,
  onDeconnect
}) => {
  const [open, setOpen] = useState(false);
  const responsiveMenuState = open ? "" : "hidden";
  const toggleOpenResponsiveTopbar = () => {
    setOpen(!open);
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: "bg-white px-2 drop-shadow-sm sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full top-0 left-0 z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[97%] flex flex-wrap justify-between items-center mx-auto py-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: openResponsiveSidebarHandler,
    "data-collapse-toggle": "navbar-cta",
    variant: "filled",
    className: "inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    "aria-controls": "navbar-cta",
    "aria-expanded": "false"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Menu"), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
  }))), /*#__PURE__*/React.createElement("a", {
    href: homePath
  }, /*#__PURE__*/React.createElement(Logo, {
    logo_url: logo_url
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: toggleOpenResponsiveTopbar,
    "data-collapse-toggle": "navbar-cta",
    type: "button",
    className: "inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    "aria-controls": "navbar-cta",
    "aria-expanded": "false"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Menu"), /*#__PURE__*/React.createElement("svg", {
    className: "w-6 h-6",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    "clip-rule": "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    className: `${responsiveMenuState} justify-between items-center w-full md:flex transition ease-in-out md:w-auto md:order-1`,
    id: "navbar-sticky"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "flex flex-col p-4 mt-4 space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0 md:p-0 md:mt-0"
  }, !isAuthenticated ? /*#__PURE__*/React.createElement(React.Fragment, null, typeof onSignin === "function" && /*#__PURE__*/React.createElement("li", {
    className: "w-full md:w-fit"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "small",
    type: "primary",
    fullWidth: true,
    onclick: onSignin
  }, "Se connecter"))) : /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Avatar, {
    width: 2.4,
    height: 2.4,
    className: "bg-white hover:bg-gray1"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-7 h-7"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
  }))), /*#__PURE__*/React.createElement(UserPopup, {
    user: user,
    onDeconnect: onDeconnect
  }))))));
};
Navbar.propTypes = {
  /**
   * The logo image url
   */
  logo_url: propTypes.exports.string.isRequired,
  /**
   * The function to be called on the signup button click
   */
  onSignin: propTypes.exports.any,
  /**
   * The function to be called on the signin button click
   */
  onSignup: propTypes.exports.any,
  /**
   * The user authentication state
   */
  isAuthenticated: propTypes.exports.bool,
  /**
   * The connected user obect
   */
  user: propTypes.exports.any,
  /**
   * The open sidebar button handler
   */
  openResponsiveSidebarHandler: propTypes.exports.func,
  /**
   * The app object containing the title and the icon
   */
  app: propTypes.exports.object,
  /**
   * Determines whether to display the enterprise name or not
   */
  displayName: propTypes.exports.bool,
  /**
   * The action to be triggered when we click on deconnection button
   */
  onDeconnect: propTypes.exports.func
};
Navbar.defaultProps = {
  user: {},
  isAuthenticated: false,
  openResponsiveSidebarHandler: () => {},
  onSignin: null,
  onSignup: null,
  displayName: true,
  app: {
    title: "Configurations",
    denomination: "Entreprise name"
  }
};

/**
 * The radio buttun component, uses an input type radio and a label html element
 */
const RadioBtn = ({
  name,
  label,
  value,
  onChange,
  checked,
  fullWidth,
  required,
  disabled,
  labelProps,
  inputProps,
  id,
  size,
  error,
  className
}) => {
  const {
    labelClassName,
    ...otherLabelProps
  } = labelProps;
  const width = fullWidth ? "w-full" : "w-fit";
  const textColor = error ? 'danger' : 'gray5';
  return /*#__PURE__*/React.createElement("div", {
    className: `flex items-center ${width} ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends$1({
    type: "radio",
    name: name,
    onChange: onChange,
    value: value,
    checked: checked,
    id: id ? id : "input-radio",
    required: required,
    disabled: disabled,
    className: `peer w-4 h-4 text-${textColor} bg-gray1 text-${size}`
  }, inputProps)), /*#__PURE__*/React.createElement("label", _extends$1({
    htmlFor: id ? id : "input-radio",
    className: `pl-2 text-medium text-${textColor} cursor-pointer text-${size} peer-checked:text-darkBlue peer-disabled:text-gray2 ${labelClassName}`
  }, otherLabelProps), label, required ? /*#__PURE__*/React.createElement("span", {
    className: "text-danger"
  }, "*") : ""));
};
RadioBtn.propTypes = {
  /**
  * The size of the component.
  */
  size: propTypes.exports.oneOf(["small", "medium", "large"]),
  /**
  * The name of the input
  */
  name: propTypes.exports.string,
  /**
   * The label of the input
   */
  label: propTypes.exports.string,
  /**
   * The value of the input element
   */
  value: propTypes.exports.any,
  /**
   * The function to be called when the input value changes
   */
  onChange: propTypes.exports.func,
  /**
   * The state of the radio button
   */
  checked: propTypes.exports.bool,
  /**
   * The disabled state of the input
   */
  disabled: propTypes.exports.bool,
  /**
   * The required state of the input
   */
  required: propTypes.exports.bool,
  /**
   * The state of the component width
   */
  fullWidth: propTypes.exports.bool,
  /**
   * The object containing other input props
   */

  inputProps: propTypes.exports.object,
  /**
   * The object containing other label props
   */
  labelProps: propTypes.exports.object,
  /**
   * The error state
   */
  error: propTypes.exports.bool,
  /**
   * The class name of the container div
   */
  className: propTypes.exports.string
};
RadioBtn.defaultProps = {
  name: '',
  label: "Some radio Button",
  labelProps: {},
  inputProps: {},
  error: false,
  size: 'medium'
};

/**
 * The radio button card component. It uses the RadioBtn component
 */
const RadioBtnCard = ({
  name,
  label,
  value,
  onChange,
  checked,
  fullWidth,
  disabled,
  radioProps,
  className,
  id
}) => {
  const width = fullWidth ? "w-full" : "w-fit";
  const labelColor = disabled ? "text-gray2" : "text-gray4";
  return /*#__PURE__*/React.createElement("div", {
    className: `relative flex items-center rounded-lg ${width} ${className}`
  }, /*#__PURE__*/React.createElement(RadioBtn, _extends$1({}, radioProps, {
    name: name,
    label: label,
    value: value,
    onChange: onChange,
    checked: checked,
    fullWidth: fullWidth,
    disabled: disabled,
    id: id,
    className: "h-full",
    labelProps: {
      className: `p-4 pl-9 w-full h-full flex items-center border-2 border-gray1 rounded-lg ${labelColor} cursor-pointer transition-all peer-checked:text-darkBlue peer-checked:border-2 peer-checked:border-darkBlue hover:bg-gray05`
    },
    inputProps: {
      className: "peer absolute left-3 t-0 w-4 h-4"
    }
  })));
};
RadioBtnCard.propTypes = {
  /**
   * The name of the input
   */
  name: propTypes.exports.string,
  /**
   * The label of the input
   */
  label: propTypes.exports.string,
  /**
   * The value of the input element
   */
  value: propTypes.exports.any,
  /**
   * The function to be called when the input value changes
   */
  onChange: propTypes.exports.func,
  /**
   * The state of the radio button
   */
  checked: propTypes.exports.bool,
  /**
   * The disabled state of the component
   */
  disabled: propTypes.exports.bool,
  /**
   * The obeject containing the radio btnprops
   */
  radioProps: propTypes.exports.object,
  /**
   * The component width state
   */
  fullWidth: propTypes.exports.bool,
  /**
   * The input id
   */
  id: propTypes.exports.any,
  /**
   * The class name of the card
   */
  className: propTypes.exports.string
};
RadioBtnCard.defaultProps = {
  name: "",
  label: "Some radio btn"
};

const TextField = ({
  type,
  variant,
  value,
  onChange,
  label,
  id,
  fullWidth,
  size,
  required,
  placeholder,
  disabled,
  inputProps,
  labelProps,
  error,
  helperText,
  className,
  inputClassName,
  InputClassName,
  prefix,
  suffix
}) => {
  const borderColor = error ? "danger" : "gray2";
  const textColor = error ? 'danger' : 'gray5';
  const Variant = variant === "outlined" ? `border border-${borderColor} bg-white` : "bg-gray1";
  const width = fullWidth ? "w-full" : "w-fit";
  return /*#__PURE__*/React.createElement("div", {
    className: `relative flex flex-col ${width} ${className}`
  }, label && /*#__PURE__*/React.createElement("label", _extends$1({
    className: `text-small text-${textColor} mx-2`
  }, labelProps, {
    htmlFor: `${id ? id : ''}`
  }), label, required ? /*#__PURE__*/React.createElement("span", {
    className: "text-danger"
  }, "*") : ""), /*#__PURE__*/React.createElement("div", {
    className: `${inputClassName} ${Variant}  flex items-center w-full rounded-lg overflow-hidden`
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "pl-4"
  }, prefix), /*#__PURE__*/React.createElement("input", _extends$1({}, inputProps, {
    type: type,
    value: value,
    onChange: onChange,
    required: required,
    placeholder: placeholder,
    disabled: disabled,
    id: id ? id : '',
    className: `flex-1 ${variant === "filled" ? "bg-gray1" : ""} text-${textColor} px-5 text-sm focus:outline-none w-full ${InputClassName} ${size}`
  })), suffix && /*#__PURE__*/React.createElement("span", {
    className: "pr-4"
  }, suffix)), error && /*#__PURE__*/React.createElement("span", {
    className: "text-danger text-xs ml-2"
  }, helperText));
};
TextField.propTypes = {
  /**
   * The size of the component.
   */
  size: propTypes.exports.oneOf(["small", "medium", "large"]),
  /**
   * The variant of the component.
   */
  variant: propTypes.exports.oneOf(["filled", "outlined"]),
  /**
   * The type of the input
   */
  type: propTypes.exports.oneOf(["text", "tel", "email", "number", "date", "password"]),
  /**
   * The state of the component width
   */
  fullWidth: propTypes.exports.bool,
  /**
   * Whether the input is required or not
   */
  required: propTypes.exports.bool,
  /**
   * The input disabled state
   */
  disabled: propTypes.exports.bool,
  /**
   * The label of the input
   */
  label: propTypes.exports.string,
  /**
   * An object containg the other props of the label
   */
  labelProps: propTypes.exports.object,
  /**
   * The input placeholder
   */
  placeholder: propTypes.exports.string,
  /**
   * An object containg the other props of the input
   */
  inputProps: propTypes.exports.object,
  /**
   * The error state
   */
  error: propTypes.exports.bool,
  /**
   * The helper text
   */
  helperText: propTypes.exports.string,
  /**
   * The class name of the container div 
   */
  className: propTypes.exports.string,
  /**
   * The class name of input 
   */
  inputClassName: propTypes.exports.string,
  /**
   * The component displayed before the input
   */
  suffix: propTypes.exports.any,
  /**
   * The component displayed after the input
   */
  prefix: propTypes.exports.any
};
TextField.defaultProps = {
  size: "medium",
  variant: "filled",
  type: "text",
  required: false,
  disabled: false,
  labelProps: {},
  inputProps: {},
  error: false,
  helperText: ""
};

const SelectInput = ({
  children,
  variant,
  size,
  required,
  placeholder,
  fullWidth,
  disabled,
  label,
  id,
  labelprops,
  error,
  helperText,
  className,
  ...others
}) => {
  const textColor = error ? 'danger' : 'gray5';
  const Variant = variant === "outlined" ? `border border-gray2` : "bg-gray1";
  const width = fullWidth ? "w-full" : "w-fit";
  return /*#__PURE__*/React.createElement("div", {
    className: `relative flex flex-col ${width} ${className}`
  }, /*#__PURE__*/React.createElement("label", _extends$1({
    className: `text-small text-${textColor} mx-2`
  }, labelprops, {
    htmlFor: `${id ? id : ''}`
  }), label, required ? /*#__PURE__*/React.createElement("span", {
    className: "text-danger"
  }, "*") : ""), /*#__PURE__*/React.createElement("select", _extends$1({
    className: `${Variant} text-${textColor} text-sm focus:outline-none w-full rounded-lg ${size} px-5`,
    required: required,
    placeholder: placeholder,
    disabled: disabled
  }, others), children), error && /*#__PURE__*/React.createElement("span", {
    className: "text-danger text-xs ml-2"
  }, helperText));
};
SelectInput.propTypes = {
  /**
     * The size of the component.
     */
  size: propTypes.exports.oneOf(["small", "medium", "large"]),
  /**
   * The variant of the component.
   */
  variant: propTypes.exports.oneOf(["filled", "outlined"]),
  /**
   * The state of the component width
   */
  fullWidth: propTypes.exports.bool,
  /**
   * Whether the input is required or not
   */
  required: propTypes.exports.bool,
  /**
   * The input disabled state
   */
  disabled: propTypes.exports.bool,
  /**
   * The label of the input
   */
  label: propTypes.exports.string,
  /**
   * An object containg the other props of the label
   */
  labelprops: propTypes.exports.object,
  /**
   * The input placeholder
   */
  placeholder: propTypes.exports.string,
  /**
   * An object containg the other props of the input
   */
  error: propTypes.exports.bool,
  /**
   * The helper text
   */
  helperText: propTypes.exports.string,
  /**
   * The class name of the container div 
   */
  className: propTypes.exports.string
};
SelectInput.defaultProps = {
  size: "medium",
  variant: "outlined",
  labelprops: {}
};

const IconExemple = () => {
  return /*#__PURE__*/React.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
};
const IconButton = ({
  children,
  size,
  type,
  variant,
  className,
  onClick,
  ...other
}) => {
  const styleButton = variant === "outlined" ? `btn-outline-${type}` : `btn-${type}`;
  const padding = size === 'smaller' ? '1' : size === 'small' ? '2' : size === 'medium' ? '2' : '4';
  return /*#__PURE__*/React.createElement("button", _extends$1({
    onClick: onClick,
    type: "button",
    className: `${styleButton} ${className} focus:outline-none font-medium rounded-md text-sm text-center inline-flex items-center p-${padding}`
  }, other), children);
};
IconButton.propTypes = {
  /**
   * The content of the component.
   */
  children: propTypes.exports.object.isRequired,
  /**
   * The color of component
   */
  type: propTypes.exports.oneOf(["default", "primary", "info", "danger", "success"]),
  /**
   * The variant to use.
   */
  variant: propTypes.exports.oneOf(["contained", "outlined"]),
  /**
   * The size of the component.
   */
  size: propTypes.exports.oneOf(["small", "medium", "large"])
};
IconButton.defaultProps = {
  type: "default",
  children: IconExemple(),
  variant: "contained",
  size: 'medium'
};

const Alert = ({
  message,
  type,
  fullWidth,
  className,
  children
}) => {
  const width = fullWidth ? 'w-full' : 'w-fit';
  return /*#__PURE__*/React.createElement("div", {
    className: `p-2 mt-3 bg-${type}Light rounded-md ${width} ${className} border border-gray1`
  }, children ? children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    type: type,
    size: "small"
  }, message)));
};
Alert.propTypes = {
  /**
   * The content of the component.
   */
  children: propTypes.exports.any,
  /**
   * The color of component
   */
  type: propTypes.exports.oneOf(["default", "primary", "info", "danger", "success"]),
  /**
    * The size of the component.
    */
  fullWidth: propTypes.exports.bool,
  /**
   * The title of th alert
   */
  message: propTypes.exports.string
};
Alert.defaultProps = {
  type: "default",
  children: null
};

/**
 * The radio buttun component, uses an input type radio and a label html element
 */
const Checkbox = ({
  name,
  label,
  value,
  onChange,
  checked,
  fullWidth,
  required,
  disabled,
  labelProps,
  inputProps,
  id,
  size,
  error,
  className
}) => {
  const {
    labelClassName,
    ...otherLabelProps
  } = labelProps;
  const width = fullWidth ? "w-full" : "w-fit";
  const textColor = error ? 'danger' : 'gray5';
  const {
    inputClassName,
    ...otherInputProps
  } = inputProps;
  return /*#__PURE__*/React.createElement("div", {
    className: `flex items-center ${width} ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends$1({
    type: "checkbox",
    name: name,
    onChange: onChange,
    value: value,
    checked: checked,
    id: id ? id : "input-radio",
    required: required,
    disabled: disabled,
    className: `${inputClassName} peer w-3 h-3 text-${textColor} bg-gray1 text-${size}`
  }, otherInputProps)), /*#__PURE__*/React.createElement("label", _extends$1({
    htmlFor: id ? id : "input-radio",
    className: `pl-2 text-medium text-${textColor} cursor-pointer text-${size} peer-disabled:text-gray2 ${labelClassName}`
  }, otherLabelProps), label, required ? /*#__PURE__*/React.createElement("span", {
    className: "text-danger"
  }, "*") : ""));
};
Checkbox.propTypes = {
  /**
  * The size of the component.
  */
  size: propTypes.exports.oneOf(["small", "medium", "large"]),
  /**
  * The name of the input
  */
  name: propTypes.exports.string,
  /**
   * The label of the input
   */
  label: propTypes.exports.string,
  /**
   * The value of the input element
   */
  value: propTypes.exports.any,
  /**
   * The function to be called when the input value changes
   */
  onChange: propTypes.exports.func,
  /**
   * The state of the radio button
   */
  checked: propTypes.exports.bool,
  /**
   * The disabled state of the input
   */
  disabled: propTypes.exports.bool,
  /**
   * The required state of the input
   */
  required: propTypes.exports.bool,
  /**
   * The state of the component width
   */
  fullWidth: propTypes.exports.bool,
  /**
   * The object containing other input props
   */

  inputProps: propTypes.exports.object,
  /**
   * The object containing other label props
   */
  labelProps: propTypes.exports.object,
  /**
   * The error state
   */
  error: propTypes.exports.bool,
  /**
   * The class name of the container div
   */
  className: propTypes.exports.string
};
Checkbox.defaultProps = {
  name: '',
  label: "Some radio Button",
  labelProps: {},
  inputProps: {},
  error: false,
  size: 'medium'
};

function DeleteIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
  }));
}

function PlusIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}

const Element = ({
  el
}) => {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    onClick: e => setShow(!show),
    className: `hover:text-[#9faec1] transition-all duration-200 text-gray1 cursor-pointer select-none`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center p-3 text-base font-medium rounded-lg"
  }, el.icon, /*#__PURE__*/React.createElement("span", {
    className: "ml-3"
  }, el.name)), show ? /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-4 h-4"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  })) : /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-4 h-4"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
  })))), show && el?.elements?.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ml-[3em] text-gray1"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3 list-disc"
  }, el.elements.map(item => /*#__PURE__*/React.createElement("li", {
    className: "text-sm hover:text-gray2 cursor-pointer transition-all duration-200"
  }, item.name)))));
};

const Sidebar = ({
  list,
  listApp,
  className,
  onClick,
  onClickApp,
  logo_url,
  currentPath,
  AppTitle
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `bg-dark ${className}  w-[270px] fixed top-0 right-0 left-0 h-full flex flex-col`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex bg-[#151d31] justify-center items-center min-h-[76px]"
  }, /*#__PURE__*/React.createElement("img", {
    className: "w-[200px] h-[57px]",
    src: `${logo_url}`,
    alt: "logo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col overflow-y-auto scrollbar-hide md:scrollbar-default divide-y divide-gray4"
  }, list && /*#__PURE__*/React.createElement("div", {
    className: "w-full py-5 px-4"
  }, AppTitle && /*#__PURE__*/React.createElement("h1", {
    className: "text-gray3 text-sm font-medium uppercase"
  }, AppTitle), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3 pt-3"
  }, list?.map((el, index) => /*#__PURE__*/React.createElement(React.Fragment, null, el?.elements?.length > 0 ? /*#__PURE__*/React.createElement(Element, {
    el: el,
    key: index + "_" + el.name
  }) : /*#__PURE__*/React.createElement("li", {
    onClick: e => onClick(el),
    key: index + "_" + el.name,
    className: `hover:text-[rgb(159,174,193)] ${currentPath === el.active && "bg-white !text-primary font-medium shadow-lg rounded-lg"} transition-all duration-200 text-gray2 cursor-pointer`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center py-2 px-3 text-base font-medium rounded-lg"
  }, el.icon, /*#__PURE__*/React.createElement("span", {
    className: "ml-3 text-sm"
  }, el.name)))))))), listApp && /*#__PURE__*/React.createElement("div", {
    className: "w-full px-4 py-5"
  }, list && /*#__PURE__*/React.createElement("h1", {
    className: "text-gray3 text-sm font-medium mb-3"
  }, "AUTRES APPLICATIONS"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3"
  }, listApp?.map((item, index) => /*#__PURE__*/React.createElement("li", {
    onClick: () => onClickApp(item),
    key: index + "_" + item.name,
    className: "hover:text-[rgb(159,174,193)] transition-all duration-200 text-gray2 cursor-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center py-2 px-3 text-base font-medium rounded-lg"
  }, item.icon, /*#__PURE__*/React.createElement("span", {
    className: "ml-3 text-sm"
  }, item.name)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "0.3px solid",
      borderColor: "#4a4747"
    },
    className: "w-full px-4 py-[1em] relative bottom-0"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3 text-sm"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "text-gray3"
  }, "\xA9 Copyright ", /*#__PURE__*/React.createElement("b", null, "DGI"), " 2022 All Rights Reserved.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "text-gray3 flex space-x-1"
  }, /*#__PURE__*/React.createElement("span", null, "Crafted with"), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "w-5 h-5 text-danger"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
  })), /*#__PURE__*/React.createElement("span", null, "by SBS"))))));
};
Sidebar.propTypes = {
  /**
   * The list of sidebar
   */
  list: propTypes.exports.array,
  /**
   * The title of the current application
   */
  AppTitle: propTypes.exports.string
};

/**
 * The default children component
 */

const DefaultChildren = () => {
  return /*#__PURE__*/React.createElement(Text, null, "The content element of the modal");
};

/**
 * The modal component
 *
 * @usage
 *
 *  ```jsx
 * const [openModal, setOpenModal] = useState(false)
 *
 * const toggleModal = () => setOpenModal(!openModal)
 *
 * return (
 * <div>
 * <Button onclick={toggleModal}>Click</Button>
 *
 * <Modal
 *  title="The title of the content"
 *  open={openModal}
 *  onClose={toggleModal}
 * >
 *  <div>
 * <p>The content of the modal</p>
 *  <div>
 * </Button>
 *  </div>
 * )
 * ```
 */
const Modal = ({
  open,
  children,
  title,
  onClose,
  contentContainerClassName,
  className,
  position
}) => {
  const state = open ? "" : "hidden";
  const postitionChild = position === "top" ? "items-start justify-center md:pt-10" : position === "right" ? "items-top justify-end" : position === "left" ? "items-top justify-start" : "items-center justify-center";
  return /*#__PURE__*/React.createElement("div", {
    id: "small-modal",
    tabIndex: "-1",
    className: `${state} bg-backdrop overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full`
  }, /*#__PURE__*/React.createElement("div", {
    className: `relative sm:p-4 w-full h-full flex ${postitionChild} ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `relative bg-white max-w-lg sm:rounded-lg shadow w-full ${contentContainerClassName}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center px-5 py-3 rounded-t border-b border-gray1"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "medium",
    type: "primary",
    fontWeight: "bold"
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    type: "button",
    className: "text-gray4 bg-transparent hover:bg-gray1 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center",
    "data-modal-toggle": "modal"
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Close modal"))), children)));
};
Modal.propTypes = {
  /**
   * The open modal state
   */
  open: propTypes.exports.bool,
  /**
   * The title of the modal content
   */
  title: propTypes.exports.string,
  /**
   * The content of the modal
   */
  children: propTypes.exports.element,
  /**
   * The close function
   */
  onClose: propTypes.exports.func.isRequired,
  /**
   * The close function
   */
  position: propTypes.exports.oneOf(["top", "center", "left", "right"])
};
Modal.defaultProps = {
  open: false,
  title: "Modal title",
  children: /*#__PURE__*/React.createElement(DefaultChildren, null),
  position: "center"
};

/**
 * Component allowing to manage the Card
 *
 * ### Usage
 * ```jsx
 * <Card>
 *  Card content
 * </Card>
 * ```
 */

const Card = ({
  children,
  className
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `bg-white ${className}`
  }, children);
};
Card.propTypes = {
  /**
   * The content of the component.
   */
  children: propTypes.exports.node,
  /**
   * The class name of the component.
   */
  className: propTypes.exports.string
};
Card.defaultProps = {
  children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
};

/**
 * The search input component
 */
const SearchInput = ({
  value,
  onChange,
  variant,
  placeholder,
  fullWidth,
  label,
  id,
  size,
  required,
  disabled,
  inputProps,
  labelProps,
  className,
  inputClassName
}) => {
  const bg = variant === "outlined" ? `bg-white` : "bg-gray1";
  const Variant = variant === "outlined" ? `border border-gray2` : "border-none";
  const width = fullWidth ? "w-full" : "w-fit";
  return /*#__PURE__*/React.createElement("div", {
    className: `relative flex flex-col ${width} ${className}`
  }, label && /*#__PURE__*/React.createElement("label", _extends$1({
    className: `text-small mx-2`
  }, labelProps, {
    htmlFor: `${id ? id : ''}`
  }), label, required ? /*#__PURE__*/React.createElement("span", {
    className: "text-danger"
  }, "*") : ""), /*#__PURE__*/React.createElement("div", {
    className: `${Variant} ${bg} flex items-center rounded-md pl-2 border`
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-4 h-4"
  }, /*#__PURE__*/React.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })), /*#__PURE__*/React.createElement("input", _extends$1({}, inputProps, {
    type: "text",
    value: value,
    onChange: onChange,
    required: required,
    placeholder: placeholder,
    disabled: disabled,
    id: id ? id : '',
    className: `${bg} text-sm focus:outline-none w-full rounded-lg ${size} pl-2 pr-5 ${inputClassName}`
  }))));
};
SearchInput.propTypes = {
  /**
   * The size of the component.
   */
  size: propTypes.exports.oneOf(["small", "medium", "large"]),
  /**
   * The variant of the component.
   */
  variant: propTypes.exports.oneOf(["filled", "outlined"]),
  /**
   * The state of the component width
   */
  fullWidth: propTypes.exports.bool,
  /**
   * Whether the input is required or not
   */
  required: propTypes.exports.bool,
  /**
   * The input disabled state
   */
  disabled: propTypes.exports.bool,
  /**
   * The label of the input
   */
  label: propTypes.exports.string,
  /**
   * An object containg the other props of the label
   */
  labelProps: propTypes.exports.object,
  /**
   * The input placeholder
   */
  placeholder: propTypes.exports.string,
  /**
   * An object containg the other props of the input
   */
  inputProps: propTypes.exports.object,
  /**
   * The class name of the container div 
   */
  className: propTypes.exports.string,
  /**
   * The class name of input 
   */
  inputClassName: propTypes.exports.string
};
SearchInput.defaultProps = {
  size: "medium",
  variant: "outlined",
  type: "text",
  required: false,
  disabled: false,
  labelProps: {},
  inputProps: {}
};

/**
 * The TextArea component
 * 
 * The component tha holds all the textarea's variant and functionalities
 */

const TextArea = ({
  variant,
  value,
  onChange,
  style,
  label,
  id,
  fullWidth,
  size,
  required,
  placeholder,
  disabled,
  inputProps,
  labelProps,
  error,
  helperText,
  className
}) => {
  const borderColor = error ? "danger" : "gray2";
  const textColor = error ? 'danger' : 'gray5';
  const Variant = variant === "outlined" ? `border border-${borderColor} bg-white` : "bg-gray1";
  const width = fullWidth ? "w-full" : "w-fit";
  return /*#__PURE__*/React.createElement("div", {
    className: `relative flex flex-col gap-1 ${width} ${className}`
  }, label && /*#__PURE__*/React.createElement("label", _extends$1({
    className: `text-small text-${textColor} mx-2`
  }, labelProps, {
    htmlFor: `${id ? id : ''}`
  }), label, required ? /*#__PURE__*/React.createElement("span", {
    className: "text-danger"
  }, "*") : ""), /*#__PURE__*/React.createElement("textarea", _extends$1({}, inputProps, {
    value: value,
    onChange: onChange,
    required: required,
    placeholder: placeholder,
    style: style,
    disabled: disabled,
    id: id ? id : '',
    className: `${Variant} text-${textColor} text-sm focus:outline-none w-full rounded-lg ${size}`
  })), error && /*#__PURE__*/React.createElement("span", {
    className: "text-danger text-xs ml-2"
  }, helperText));
};
TextArea.propTypes = {
  /**
   * The size of the component.
   */
  size: propTypes.exports.oneOf(["small", "medium", "large"]),
  /**
   * The variant of the component.
   */
  variant: propTypes.exports.oneOf(["filled", "outlined"]),
  /**
   * The state of the component width
   */
  fullWidth: propTypes.exports.bool,
  /**
   * Whether the input is required or not
   */
  required: propTypes.exports.bool,
  /**
   * The input disabled state
   */
  disabled: propTypes.exports.bool,
  /**
   * The label of the input
   */
  label: propTypes.exports.string,
  /**
   * An object containg the other props of the label
   */
  labelProps: propTypes.exports.object,
  /**
   * The input placeholder
   */
  placeholder: propTypes.exports.string,
  /**
   * An object containg the other props of the input
   */
  inputProps: propTypes.exports.object,
  /**
   * The error state
   */
  error: propTypes.exports.bool,
  /**
   * The helper text
   */
  helperText: propTypes.exports.string,
  /**
   * The class name of the container div 
   */
  className: propTypes.exports.string,
  /**
   * The class name of input 
   */
  inputClassName: propTypes.exports.string
};
TextArea.defaultProps = {
  size: "large",
  variant: "outlined",
  placeholder: "Tape something",
  required: false,
  disabled: false,
  labelProps: "{}",
  inputProps: {},
  error: false,
  helperText: ""
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var removeAccents$1 = {exports: {}};

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

var removeAccents = function(string) {	
	return string.replace(allAccents, function(match) {
		return characterMap[match];
	});
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

removeAccents$1.exports = removeAccents;
removeAccents$1.exports.has = hasAccents;
removeAccents$1.exports.remove = removeAccents;

var rankings = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
matchSorter.rankings = rankings;

var defaultBaseSortFn = function defaultBaseSortFn(a, b) {
  return String(a.rankedValue).localeCompare(String(b.rankedValue));
};
/**
 * Takes an array of items and a value and returns a new array with the items that match the given value
 * @param {Array} items - the items to sort
 * @param {String} value - the value to use for ranking
 * @param {Object} options - Some options to configure the sorter
 * @return {Array} - the new sorted array
 */


function matchSorter(items, value, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      keys = _options.keys,
      _options$threshold = _options.threshold,
      threshold = _options$threshold === void 0 ? rankings.MATCHES : _options$threshold,
      _options$baseSort = _options.baseSort,
      baseSort = _options$baseSort === void 0 ? defaultBaseSortFn : _options$baseSort,
      _options$sorter = _options.sorter,
      sorter = _options$sorter === void 0 ? function (matchedItems) {
    return matchedItems.sort(function (a, b) {
      return sortRankedValues(a, b, baseSort);
    });
  } : _options$sorter;
  var matchedItems = items.reduce(reduceItemsToRanked, []);
  return sorter(matchedItems).map(function (_ref) {
    var item = _ref.item;
    return item;
  });

  function reduceItemsToRanked(matches, item, index) {
    var rankingInfo = getHighestRanking(item, keys, value, options);
    var rank = rankingInfo.rank,
        _rankingInfo$keyThres = rankingInfo.keyThreshold,
        keyThreshold = _rankingInfo$keyThres === void 0 ? threshold : _rankingInfo$keyThres;

    if (rank >= keyThreshold) {
      matches.push(_extends({}, rankingInfo, {
        item: item,
        index: index
      }));
    }

    return matches;
  }
}
/**
 * Gets the highest ranking for value for the given item based on its values for the given keys
 * @param {*} item - the item to rank
 * @param {Array} keys - the keys to get values from the item for the ranking
 * @param {String} value - the value to rank against
 * @param {Object} options - options to control the ranking
 * @return {{rank: Number, keyIndex: Number, keyThreshold: Number}} - the highest ranking
 */


function getHighestRanking(item, keys, value, options) {
  if (!keys) {
    // if keys is not specified, then we assume the item given is ready to be matched
    var stringItem = item;
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: stringItem,
      rank: getMatchRanking(stringItem, value, options),
      keyIndex: -1,
      keyThreshold: options.threshold
    };
  }

  var valuesToRank = getAllValuesToRank(item, keys);
  return valuesToRank.reduce(function (_ref2, _ref3, i) {
    var rank = _ref2.rank,
        rankedValue = _ref2.rankedValue,
        keyIndex = _ref2.keyIndex,
        keyThreshold = _ref2.keyThreshold;
    var itemValue = _ref3.itemValue,
        attributes = _ref3.attributes;
    var newRank = getMatchRanking(itemValue, value, options);
    var newRankedValue = rankedValue;
    var minRanking = attributes.minRanking,
        maxRanking = attributes.maxRanking,
        threshold = attributes.threshold;

    if (newRank < minRanking && newRank >= rankings.MATCHES) {
      newRank = minRanking;
    } else if (newRank > maxRanking) {
      newRank = maxRanking;
    }

    if (newRank > rank) {
      rank = newRank;
      keyIndex = i;
      keyThreshold = threshold;
      newRankedValue = itemValue;
    }

    return {
      rankedValue: newRankedValue,
      rank: rank,
      keyIndex: keyIndex,
      keyThreshold: keyThreshold
    };
  }, {
    rankedValue: item,
    rank: rankings.NO_MATCH,
    keyIndex: -1,
    keyThreshold: options.threshold
  });
}
/**
 * Gives a rankings score based on how well the two strings match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @param {Object} options - options for the match (like keepDiacritics for comparison)
 * @returns {Number} the ranking for how well stringToRank matches testString
 */


function getMatchRanking(testString, stringToRank, options) {
  testString = prepareValueForComparison(testString, options);
  stringToRank = prepareValueForComparison(stringToRank, options); // too long

  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  } // case sensitive equals


  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  } // Lower casing before further comparison


  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase(); // case insensitive equals

  if (testString === stringToRank) {
    return rankings.EQUAL;
  } // starts with


  if (testString.startsWith(stringToRank)) {
    return rankings.STARTS_WITH;
  } // word starts with


  if (testString.includes(" " + stringToRank)) {
    return rankings.WORD_STARTS_WITH;
  } // contains


  if (testString.includes(stringToRank)) {
    return rankings.CONTAINS;
  } else if (stringToRank.length === 1) {
    // If the only character in the given stringToRank
    //   isn't even contained in the testString, then
    //   it's definitely not a match.
    return rankings.NO_MATCH;
  } // acronym


  if (getAcronym(testString).includes(stringToRank)) {
    return rankings.ACRONYM;
  } // will return a number between rankings.MATCHES and
  // rankings.MATCHES + 1 depending  on how close of a match it is.


  return getClosenessRanking(testString, stringToRank);
}
/**
 * Generates an acronym for a string.
 *
 * @param {String} string the string for which to produce the acronym
 * @returns {String} the acronym
 */


function getAcronym(string) {
  var acronym = '';
  var wordsInString = string.split(' ');
  wordsInString.forEach(function (wordInString) {
    var splitByHyphenWords = wordInString.split('-');
    splitByHyphenWords.forEach(function (splitByHyphenWord) {
      acronym += splitByHyphenWord.substr(0, 1);
    });
  });
  return acronym;
}
/**
 * Returns a score based on how spread apart the
 * characters from the stringToRank are within the testString.
 * A number close to rankings.MATCHES represents a loose match. A number close
 * to rankings.MATCHES + 1 represents a tighter match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @returns {Number} the number between rankings.MATCHES and
 * rankings.MATCHES + 1 for how well stringToRank matches testString
 */


function getClosenessRanking(testString, stringToRank) {
  var matchingInOrderCharCount = 0;
  var charNumber = 0;

  function findMatchingCharacter(matchChar, string, index) {
    for (var j = index, J = string.length; j < J; j++) {
      var stringChar = string[j];

      if (stringChar === matchChar) {
        matchingInOrderCharCount += 1;
        return j + 1;
      }
    }

    return -1;
  }

  function getRanking(spread) {
    var spreadPercentage = 1 / spread;
    var inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
    var ranking = rankings.MATCHES + inOrderPercentage * spreadPercentage;
    return ranking;
  }

  var firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);

  if (firstIndex < 0) {
    return rankings.NO_MATCH;
  }

  charNumber = firstIndex;

  for (var i = 1, I = stringToRank.length; i < I; i++) {
    var matchChar = stringToRank[i];
    charNumber = findMatchingCharacter(matchChar, testString, charNumber);
    var found = charNumber > -1;

    if (!found) {
      return rankings.NO_MATCH;
    }
  }

  var spread = charNumber - firstIndex;
  return getRanking(spread);
}
/**
 * Sorts items that have a rank, index, and keyIndex
 * @param {Object} a - the first item to sort
 * @param {Object} b - the second item to sort
 * @return {Number} -1 if a should come first, 1 if b should come first, 0 if equal
 */


function sortRankedValues(a, b, baseSort) {
  var aFirst = -1;
  var bFirst = 1;
  var aRank = a.rank,
      aKeyIndex = a.keyIndex;
  var bRank = b.rank,
      bKeyIndex = b.keyIndex;
  var same = aRank === bRank;

  if (same) {
    if (aKeyIndex === bKeyIndex) {
      // use the base sort function as a tie-breaker
      return baseSort(a, b);
    } else {
      return aKeyIndex < bKeyIndex ? aFirst : bFirst;
    }
  } else {
    return aRank > bRank ? aFirst : bFirst;
  }
}
/**
 * Prepares value for comparison by stringifying it, removing diacritics (if specified)
 * @param {String} value - the value to clean
 * @param {Object} options - {keepDiacritics: whether to remove diacritics}
 * @return {String} the prepared value
 */


function prepareValueForComparison(value, _ref4) {
  var keepDiacritics = _ref4.keepDiacritics;
  // value might not actually be a string at this point (we don't get to choose)
  // so part of preparing the value for comparison is ensure that it is a string
  value = "" + value; // toString

  if (!keepDiacritics) {
    value = removeAccents$1.exports(value);
  }

  return value;
}
/**
 * Gets value for key in item at arbitrarily nested keypath
 * @param {Object} item - the item
 * @param {Object|Function} key - the potentially nested keypath or property callback
 * @return {Array} - an array containing the value(s) at the nested keypath
 */


function getItemValues(item, key) {
  if (typeof key === 'object') {
    key = key.key;
  }

  var value;

  if (typeof key === 'function') {
    value = key(item);
  } else if (item == null) {
    value = null;
  } else if (Object.hasOwnProperty.call(item, key)) {
    value = item[key];
  } else if (key.includes('.')) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return getNestedValues(key, item);
  } else {
    value = null;
  } // because `value` can also be undefined


  if (value == null) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [String(value)];
}
/**
 * Given path: "foo.bar.baz"
 * And item: {foo: {bar: {baz: 'buzz'}}}
 *   -> 'buzz'
 * @param path a dot-separated set of keys
 * @param item the item to get the value from
 */


function getNestedValues(path, item) {
  var keys = path.split('.');
  var values = [item];

  for (var i = 0, I = keys.length; i < I; i++) {
    var nestedKey = keys[i];
    var nestedValues = [];

    for (var j = 0, J = values.length; j < J; j++) {
      var nestedItem = values[j];
      if (nestedItem == null) continue;

      if (Object.hasOwnProperty.call(nestedItem, nestedKey)) {
        var nestedValue = nestedItem[nestedKey];

        if (nestedValue != null) {
          nestedValues.push(nestedValue);
        }
      } else if (nestedKey === '*') {
        // ensure that values is an array
        nestedValues = nestedValues.concat(nestedItem);
      }
    }

    values = nestedValues;
  }

  if (Array.isArray(values[0])) {
    // keep allowing the implicit wildcard for an array of strings at the end of
    // the path; don't use `.flat()` because that's not available in node.js v10
    var result = [];
    return result.concat.apply(result, values);
  } // Based on our logic it should be an array of strings by now...
  // assuming the user's path terminated in strings


  return values;
}
/**
 * Gets all the values for the given keys in the given item and returns an array of those values
 * @param item - the item from which the values will be retrieved
 * @param keys - the keys to use to retrieve the values
 * @return objects with {itemValue, attributes}
 */


function getAllValuesToRank(item, keys) {
  var allValues = [];

  for (var j = 0, J = keys.length; j < J; j++) {
    var key = keys[j];
    var attributes = getKeyAttributes(key);
    var itemValues = getItemValues(item, key);

    for (var i = 0, I = itemValues.length; i < I; i++) {
      allValues.push({
        itemValue: itemValues[i],
        attributes: attributes
      });
    }
  }

  return allValues;
}

var defaultKeyAttributes = {
  maxRanking: Infinity,
  minRanking: -Infinity
};
/**
 * Gets all the attributes for the given key
 * @param key - the key from which the attributes will be retrieved
 * @return object containing the key's attributes
 */

function getKeyAttributes(key) {
  if (typeof key === 'string') {
    return defaultKeyAttributes;
  }

  return _extends({}, defaultKeyAttributes, key);
}

// Filters and sorts the result
const optionFilterFunc = (value, options = [], optionKeys) => {
  if (value === "") {
    return options;
  }
  return matchSorter(options, value, {
    keys: optionKeys
  });
};
const Combobox = ({
  placeholder,
  label,
  id,
  required,
  value,
  labelProps,
  icon,
  type,
  variant,
  size,
  fullWidth,
  triggerProps,
  textFieldProps,
  options,
  optionKeys,
  onChange,
  error,
  helperText,
  minWidth
}) => {
  const [val, setVal] = useState("");
  const [lab, setLab] = useState();
  const [displayedOptions, setDisplayedOptions] = useState([...options]);
  const handleChange = e => {
    const v = e.target.value;
    setVal(v);
    const items = optionFilterFunc(v, options, optionKeys);
    setDisplayedOptions(items);
  };
  const handleSelectItem = (id, cb) => {
    const op = displayedOptions.find(opt => opt.id === id);
    if (op) {
      // setLab(op.name);
      // Pass the selected option to the controller component
      onChange(op);
      // Call the callback to hide the popover
      cb();
    }
  };
  const menuSize = fullWidth ? `min-w-${minWidth} max-w-[100%]` : "w-fit max-w-[100%]";
  const textColor = error ? "danger" : "gray5";
  useEffect(() => {
    setLab(placeholder);
  }, [placeholder]);
  useEffect(() => {
    if (value) {
      setLab(value);
    } else {
      setLab(placeholder);
    }
  }, [value]);
  useEffect(() => {
    setDisplayedOptions(options);
  }, [options]);
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", _extends$1({
    className: `text-small text-${textColor} mx-2`
  }, labelProps, {
    htmlFor: `${id ? id : ""}`
  }), label, required ? /*#__PURE__*/React.createElement("span", {
    className: "text-danger"
  }, "*") : ""), /*#__PURE__*/React.createElement(ClickAway, {
    triggerLabel: /*#__PURE__*/React.createElement(Text, {
      size: "small",
      className: "block max-w-[100%] text-ellipsis whitespace-nowrap overflow-hidden"
    }, lab),
    triggerVariant: variant,
    triggerSize: size,
    fullWidth: fullWidth,
    triggerIcon: icon,
    otherTriggerProps: triggerProps,
    triggerType: error ? "danger" : "default",
    triggerClassName: `text-left ${menuSize} flex-row-reverse justify-between`,
    triggerTextColor: type === "default" && lab === label ? "text-gray3" : "",
    getListContent: toggler => /*#__PURE__*/React.createElement("div", {
      className: `rounded-lg border border-gray2 divide-y divide-gray2 ${menuSize} bg-white`
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-2 py-2 bg-primaryLight"
    }, /*#__PURE__*/React.createElement(TextField, _extends$1({}, textFieldProps, {
      value: val,
      onChange: handleChange,
      fullWidth: true,
      variant: "outlined"
    }))), /*#__PURE__*/React.createElement("ul", {
      className: "py-1 max-h-[300px] overflow-y-auto"
    }, displayedOptions.length ? displayedOptions?.map(option => /*#__PURE__*/React.createElement("li", {
      key: option.id,
      className: "cursor-pointer px-3 py-2 hover:bg-primaryLight",
      onClick: () => handleSelectItem(option.id, toggler)
    }, /*#__PURE__*/React.createElement(Text, {
      size: "small"
    }, option.name))) : /*#__PURE__*/React.createElement("div", {
      className: "py-4 text-center"
    }, /*#__PURE__*/React.createElement(Text, {
      size: "small",
      type: "gray3"
    }, "Aucun \xE9l\xE9ment ne correspond."))))
  }), error && /*#__PURE__*/React.createElement(Text, {
    className: "ml-2 mt-[-1px]",
    element: "p",
    size: "small",
    type: "danger"
  }, helperText));
};
Combobox.propTypes = {
  /**
   * The label of the component
   */
  label: propTypes.exports.string,
  /**
   * The placeholder of the component
   */
  placeholder: propTypes.exports.string,
  /**
   * The inner TextField component props
   */
  triggerProps: propTypes.exports.object,
  /**
   * The list of popover options
   */
  options: propTypes.exports.array,
  /**
   * The keys used for the search and filtering
   */
  optionKeys: propTypes.exports.array,
  icon: propTypes.exports.any,
  variant: propTypes.exports.string,
  size: propTypes.exports.string,
  fullWidth: propTypes.exports.bool,
  textFieldProps: propTypes.exports.object,
  error: propTypes.exports.bool,
  helperText: propTypes.exports.string,
  onChange: propTypes.exports.func,
  minWidth: propTypes.exports.string
};
Combobox.defaultProps = {
  triggerProps: {},
  type: "default",
  options: [],
  size: "small",
  icon: null,
  variant: "outlined",
  minWidth: "330px",
  icon: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-4 h-4"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  }))
};

/**
 * Simple toggle switch atom
 */
const Toggle = ({
  checked,
  onChange,
  disabled,
  className,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("button", _extends$1({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    disabled: disabled,
    className: `relative inline-flex items-center h-6 rounded-full transition-colors focus:outline-none ${checked ? "bg-primary" : "bg-gray-300"} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`
  }, props), /*#__PURE__*/React.createElement("span", {
    className: `inline-block w-5 h-5 bg-white rounded-full transform transition-transform ${checked ? "translate-x-3" : "translate-x-0"}`
  }));
};
Toggle.propTypes = {
  checked: propTypes.exports.bool,
  onChange: propTypes.exports.func,
  disabled: propTypes.exports.bool,
  className: propTypes.exports.string
};
Toggle.defaultProps = {
  checked: false,
  onChange: () => {},
  disabled: false,
  className: ""
};

/**
 * SearchField molecule: input + search button
 */
const SearchField = ({
  value,
  onChange,
  onSearch,
  placeholder,
  className,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `flex items-center space-x-2 ${className}`
  }, /*#__PURE__*/React.createElement(SearchInput, _extends$1({
    value: value,
    onChange: onChange,
    placeholder: placeholder
  }, props)), /*#__PURE__*/React.createElement(Button, {
    onClick: onSearch,
    type: "primary",
    size: "small"
  }, "Rechercher"));
};
SearchField.propTypes = {
  value: propTypes.exports.any,
  onChange: propTypes.exports.func,
  onSearch: propTypes.exports.func,
  placeholder: propTypes.exports.string,
  className: propTypes.exports.string
};
SearchField.defaultProps = {
  value: "",
  onChange: () => {},
  onSearch: () => {},
  placeholder: "Rechercher...",
  className: ""
};

/**
 * Simple product card organism
 */
const ProductCard = ({
  title,
  description,
  price,
  image,
  onAdd,
  className
}) => {
  return /*#__PURE__*/React.createElement(Card, {
    className: `p-4 max-w-xs ${className}`
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    className: "w-full h-40 object-cover rounded"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-medium mt-3"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-600 mt-2"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mt-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-primary font-semibold"
  }, price), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    size: "small",
    onClick: onAdd
  }, "Ajouter")));
};
ProductCard.propTypes = {
  title: propTypes.exports.string.isRequired,
  description: propTypes.exports.string,
  price: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number]),
  image: propTypes.exports.string,
  onAdd: propTypes.exports.func,
  className: propTypes.exports.string
};
ProductCard.defaultProps = {
  description: "",
  price: "",
  image: "",
  onAdd: () => {},
  className: ""
};

/**
 * Dashboard layout template with Navbar and Sidebar
 */
const DashboardLayout = ({
  children,
  logo_url,
  sidebarList,
  onSidebarClick,
  className
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `min-h-screen bg-gray-50 ${className}`
  }, /*#__PURE__*/React.createElement(Navbar, {
    logo_url: logo_url
  }), /*#__PURE__*/React.createElement("div", {
    className: "pt-[76px] flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    list: sidebarList,
    onClick: onSidebarClick
  })), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 p-6"
  }, children)));
};
DashboardLayout.propTypes = {
  children: propTypes.exports.any,
  logo_url: propTypes.exports.string,
  sidebarList: propTypes.exports.array,
  onSidebarClick: propTypes.exports.func,
  className: propTypes.exports.string
};
DashboardLayout.defaultProps = {
  children: null,
  logo_url: "",
  sidebarList: [],
  onSidebarClick: () => {},
  className: ""
};

export { Alert, Avatar, Button, Card, Checkbox, ClickAway, Combobox, DashboardLayout, DeleteIcon, IconButton, Logo, Modal, Navbar, PlusIcon, ProductCard, RadioBtn, RadioBtnCard, SearchField, SearchInput, SelectInput, Sidebar, Text, TextArea, TextField, Toggle };
