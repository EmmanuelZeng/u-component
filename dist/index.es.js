import React, { forwardRef, useState, useRef, useEffect, useCallback, useId } from 'react';
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

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };

const CLASS_PART_SEPARATOR = '-';
const createClassGroupUtils = config => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = className => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = className => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
};
/**
 * Exported for testing only
 */
const createClassMap = config => {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach(classDefinition => {
    if (typeof classDefinition === 'string') {
      const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup]) => {
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(pathPart => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = func => func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map(classDefinition => {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};

// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = maxCacheSize => {
  if (maxCacheSize < 1) {
    return {
      get: () => undefined,
      set: () => {}
    };
  }
  let cacheSize = 0;
  let cache = new Map();
  let previousCache = new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = '!';
const createParseClassName = config => {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  const parseClassName = className => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (experimentalParseClassName) {
    return className => experimentalParseClassName({
      className,
      parseClassName
    });
  }
  return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
const sortModifiers = modifiers => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach(modifier => {
    const isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
const createConfigUtils = config => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = '';
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(':');
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      // Tailwind class omitted due to conflict
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    // Tailwind class not in conflict
    result = originalClassName + (result.length > 0 ? ' ' + result : result);
  }
  return result;
};

/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = mix => {
  if (typeof mix === 'string') {
    return mix;
  }
  let resolvedValue;
  let string = '';
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = key => {
  const themeGetter = theme => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = value => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = value => getIsArbitraryValue(value, 'length', isLengthOnly);
const isNumber = value => Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = value => getIsArbitraryValue(value, 'number', isNumber);
const isInteger = value => Boolean(value) && Number.isInteger(Number(value));
const isPercent = value => value.endsWith('%') && isNumber(value.slice(0, -1));
const isArbitraryValue = value => arbitraryValueRegex.test(value);
const isTshirtSize = value => tshirtUnitRegex.test(value);
const sizeLabels = /*#__PURE__*/new Set(['length', 'size', 'percentage']);
const isArbitrarySize = value => getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = value => getIsArbitraryValue(value, 'position', isNever);
const imageLabels = /*#__PURE__*/new Set(['image', 'url']);
const isArbitraryImage = value => getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = value => getIsArbitraryValue(value, '', isShadow);
const isAny = () => true;
const getIsArbitraryValue = (value, label, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === 'string' ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const isLengthOnly = value =>
// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
// For example, `hsl(0 0% 0%)` would be classified as a length without this check.
// I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = () => false;
const isShadow = value => shadowRegex.test(value);
const isImage = value => imageRegex.test(value);
const getDefaultConfig = () => {
  const colors = fromTheme('colors');
  const spacing = fromTheme('spacing');
  const blur = fromTheme('blur');
  const brightness = fromTheme('brightness');
  const borderColor = fromTheme('borderColor');
  const borderRadius = fromTheme('borderRadius');
  const borderSpacing = fromTheme('borderSpacing');
  const borderWidth = fromTheme('borderWidth');
  const contrast = fromTheme('contrast');
  const grayscale = fromTheme('grayscale');
  const hueRotate = fromTheme('hueRotate');
  const invert = fromTheme('invert');
  const gap = fromTheme('gap');
  const gradientColorStops = fromTheme('gradientColorStops');
  const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  const inset = fromTheme('inset');
  const margin = fromTheme('margin');
  const opacity = fromTheme('opacity');
  const padding = fromTheme('padding');
  const saturate = fromTheme('saturate');
  const scale = fromTheme('scale');
  const sepia = fromTheme('sepia');
  const skew = fromTheme('skew');
  const space = fromTheme('space');
  const translate = fromTheme('translate');
  const getOverscroll = () => ['auto', 'contain', 'none'];
  const getOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  const getSpacingWithAutoAndArbitrary = () => ['auto', isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ['', isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ['auto', isNumber, isArbitraryValue];
  const getPositions = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  const getLineStyles = () => ['solid', 'dashed', 'dotted', 'double', 'none'];
  const getBlendModes = () => ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  const getAlign = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  const getZeroAndEmpty = () => ['', '0', isArbitraryValue];
  const getBreaks = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ['right', 'left', 'none', 'start', 'end']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none', 'start', 'end']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal', ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal', ...getAlign(), 'baseline']
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [...getAlign(), 'baseline']
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': [isArbitraryValue, spacing, 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [...getLineStyles(), 'wavy']
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      'text-wrap': [{
        text: ['wrap', 'nowrap', 'balance', 'pretty']
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [...getLineStyles(), 'hidden']
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-s': [{
        'border-s': [borderColor]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-e': [{
        'border-e': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: ['', ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': [...getBlendModes(), 'plus-lighter', 'plus-darker']
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ['none', 'auto']
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'manipulation']
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-x': [{
        'touch-pan': ['x', 'left', 'right']
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-y': [{
        'touch-pan': ['y', 'up', 'down']
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-pz': ['touch-pinch-zoom'],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only'],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      'forced-color-adjust': [{
        'forced-color-adjust': ['auto', 'none']
      }]
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-s', 'border-color-e', 'border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
};
const twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);

/**
 * Fusionne des classes Tailwind en résolvant les conflits.
 * @param {...import('clsx').ClassValue} inputs
 * @returns {string}
 */
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/** Classes de focus accessibles partagées entre les atoms interactifs. */
const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

/** Classes d'état disabled partagées. */
const disabledStyles = "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";

/** Classes d'état error partagées pour les champs de formulaire. */
const errorRing = "border-danger focus-visible:ring-danger aria-invalid:border-danger aria-invalid:ring-danger";

const buttonVariants = cva(["inline-flex items-center justify-center gap-2 font-semibold rounded-lg", "transition-all duration-200", "active:scale-[0.98]", focusRing, disabledStyles].join(" "), {
  variants: {
    variant: {
      primary: "bg-primary text-white hover:bg-darkBlue active:bg-dark",
      secondary: "bg-gray1 text-dark hover:bg-gray2/30 active:bg-gray2/50",
      outline: "border-2 border-primary bg-transparent text-primary hover:bg-primaryLight active:bg-primary/10",
      ghost: "bg-transparent text-dark hover:bg-gray1 active:bg-gray2/20",
      destructive: "bg-danger text-white hover:bg-[#c32020] active:bg-[#a81a1a]",
      gradient: "bg-gradient-to-r from-primary to-indigo text-white hover:opacity-90 active:opacity-100",
      // Rétrocompatibilité avec l'ancienne API
      filled: "",
      outlined: "",
      text: ""
    },
    size: {
      xs: "text-xs px-2.5 py-1.5 min-h-[28px]",
      sm: "text-sm px-3 py-2 min-h-[32px]",
      md: "text-base px-4 py-2.5 min-h-[40px]",
      lg: "text-lg px-6 py-3 min-h-[48px]",
      xl: "text-xl px-8 py-4 min-h-[56px]",
      // Rétrocompatibilité
      small: "text-sm px-4 py-2 min-h-[32px]",
      medium: "text-base px-6 py-3 min-h-[40px]",
      large: "text-lg px-8 py-3 min-h-[48px]"
    },
    fullWidth: {
      true: "w-full",
      false: ""
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-lg",
      lg: "rounded-xl",
      full: "rounded-full"
    },
    elevation: {
      none: "",
      sm: "shadow-sm hover:shadow-md",
      md: "shadow-md hover:shadow-lg",
      lg: "shadow-lg hover:shadow-xl"
    }
  },
  compoundVariants: [{
    variant: "filled",
    className: "bg-default text-dark hover:bg-gray1"
  }, {
    variant: "outlined",
    className: "border-2 border-gray2 bg-transparent text-dark hover:bg-gray1"
  }, {
    variant: "text",
    className: "bg-transparent text-dark hover:bg-gray1"
  }],
  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
    rounded: "md",
    elevation: "none"
  }
});

/** Mappe l'ancienne API type + variant vers la nouvelle variante. */
function resolveVariant$2(variant, type) {
  if (["primary", "secondary", "outline", "ghost", "destructive", "gradient"].includes(variant)) {
    return variant;
  }
  if (variant === "outlined") return "outline";
  if (variant === "text") return "ghost";
  if (variant === "filled" && type) {
    const typeMap = {
      primary: "primary",
      danger: "destructive",
      success: "primary",
      info: "primary",
      default: "secondary"
    };
    return typeMap[type] || "primary";
  }
  return variant || "primary";
}
const Button = /*#__PURE__*/forwardRef(({
  children,
  variant,
  type,
  size,
  fullWidth,
  rounded,
  elevation,
  isLoading,
  loading,
  disabled,
  className,
  onclick,
  onClick,
  submit,
  leftIcon,
  rightIcon,
  "aria-label": ariaLabel,
  ...props
}, ref) => {
  const isDisabled = disabled || isLoading || loading;
  const resolvedVariant = resolveVariant$2(variant, type);
  const handleClick = onClick || onclick;
  return /*#__PURE__*/React.createElement("button", _extends$1({
    ref: ref,
    type: submit ? "submit" : props.type || "button",
    disabled: isDisabled,
    "aria-busy": isLoading || loading || undefined,
    "aria-disabled": isDisabled || undefined,
    "aria-label": ariaLabel,
    onClick: handleClick,
    className: cn(buttonVariants({
      variant: resolvedVariant,
      size,
      fullWidth,
      rounded,
      elevation
    }), (isLoading || loading) && "relative cursor-wait opacity-80", className)
  }, props), leftIcon && !isLoading && !loading && /*#__PURE__*/React.createElement("span", {
    className: "inline-flex shrink-0",
    "aria-hidden": "true"
  }, leftIcon), isLoading || loading ? /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent",
    "aria-hidden": "true"
  }), typeof children === "string" ? children : "Chargement...") : children, rightIcon && !isLoading && !loading && /*#__PURE__*/React.createElement("span", {
    className: "inline-flex shrink-0",
    "aria-hidden": "true"
  }, rightIcon));
});
Button.displayName = "Button";
Button.propTypes = {
  children: propTypes.exports.node.isRequired,
  variant: propTypes.exports.oneOf(["primary", "secondary", "outline", "ghost", "destructive", "gradient", "filled", "outlined", "text"]),
  type: propTypes.exports.oneOf(["default", "primary", "info", "danger", "success"]),
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg", "xl", "small", "medium", "large"]),
  fullWidth: propTypes.exports.bool,
  rounded: propTypes.exports.oneOf(["none", "sm", "md", "lg", "full"]),
  elevation: propTypes.exports.oneOf(["none", "sm", "md", "lg"]),
  isLoading: propTypes.exports.bool,
  loading: propTypes.exports.bool,
  disabled: propTypes.exports.bool,
  className: propTypes.exports.string,
  onclick: propTypes.exports.func,
  onClick: propTypes.exports.func,
  submit: propTypes.exports.bool,
  leftIcon: propTypes.exports.node,
  rightIcon: propTypes.exports.node
};
Button.defaultProps = {
  variant: "primary",
  type: "default",
  size: "md",
  fullWidth: false,
  rounded: "md",
  elevation: "none",
  isLoading: false,
  loading: false,
  disabled: false,
  className: "",
  submit: false
};

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      // Rétrocompatibilité
      small: "text-sm",
      medium: "text-base",
      large: "text-lg"
    },
    intent: {
      default: "text-dark",
      primary: "text-primary",
      muted: "text-gray3",
      danger: "text-danger",
      info: "text-info",
      success: "text-success",
      warning: "text-warning",
      gray1: "text-gray1",
      gray2: "text-gray2",
      gray3: "text-gray3",
      gray4: "text-gray4",
      darkBlue: "text-darkBlue",
      textGray: "text-textGray",
      dark: "text-dark",
      primaryLight: "text-primaryLight",
      dangerLight: "text-dangerLight",
      warningLight: "text-warningLight",
      successLight: "text-successLight",
      infoLight: "text-infoLight"
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify"
    },
    truncate: {
      true: "truncate",
      false: ""
    }
  },
  defaultVariants: {
    size: "md",
    intent: "default",
    weight: "normal",
    align: "left",
    truncate: false
  }
});
const TAG_MAP$1 = {
  span: "span",
  p: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
};

/**
 * Composant texte polyvalent avec support sémantique.
 * Conserve la prop `element` pour la rétrocompatibilité.
 */
const Text = /*#__PURE__*/forwardRef(({
  as,
  element,
  size,
  intent,
  type,
  weight,
  fontWeight,
  align,
  truncate,
  textWrap,
  className,
  children,
  ...props
}, ref) => {
  const Tag = as || TAG_MAP$1[element] || "span";
  const resolvedIntent = intent || type || "default";
  const resolvedWeight = weight || fontWeight || "normal";
  const resolvedTruncate = truncate ?? !textWrap;
  return /*#__PURE__*/React.createElement(Tag, _extends$1({
    ref: ref,
    className: cn(textVariants({
      size,
      intent: resolvedIntent,
      weight: resolvedWeight,
      align,
      truncate: resolvedTruncate
    }), className)
  }, props), children);
});
Text.displayName = "Text";
Text.propTypes = {
  children: propTypes.exports.node,
  as: propTypes.exports.oneOf(["span", "p", "h1", "h2", "h3", "h4", "h5", "h6"]),
  element: propTypes.exports.oneOf(["span", "p", "h1", "h2", "h3", "h4", "h5", "h6"]),
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "small", "medium", "large"]),
  intent: propTypes.exports.string,
  type: propTypes.exports.string,
  weight: propTypes.exports.oneOf(["normal", "medium", "semibold", "bold"]),
  fontWeight: propTypes.exports.oneOf(["normal", "medium", "semibold", "bold"]),
  align: propTypes.exports.oneOf(["left", "center", "right", "justify"]),
  truncate: propTypes.exports.bool,
  textWrap: propTypes.exports.bool,
  className: propTypes.exports.string
};
Text.defaultProps = {
  element: "span",
  size: "md",
  intent: "default",
  weight: "normal",
  align: "left",
  textWrap: true,
  className: ""
};

const logoVariants = cva("inline-flex items-center", {
  variants: {
    size: {
      xs: "h-6",
      sm: "h-8",
      md: "h-10",
      lg: "h-12",
      xl: "h-16",
      // Rétrocompatibilité
      small: "w-20",
      medium: "w-36",
      large: "w-48"
    },
    variant: {
      default: "",
      monochrome: "grayscale",
      inverted: "brightness-0 invert"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "default"
  }
});
const Logo = /*#__PURE__*/forwardRef(({
  src,
  logo_url,
  alt = "Logo",
  size,
  variant,
  className,
  ...props
}, ref) => {
  const imageSrc = src || logo_url;
  return /*#__PURE__*/React.createElement("div", _extends$1({
    ref: ref,
    className: cn(logoVariants({
      size,
      variant
    }), className)
  }, props), /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: alt,
    className: "h-full w-auto object-contain"
  }));
});
Logo.displayName = "Logo";
Logo.propTypes = {
  src: propTypes.exports.string,
  logo_url: propTypes.exports.string,
  alt: propTypes.exports.string,
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg", "xl", "small", "medium", "large"]),
  variant: propTypes.exports.oneOf(["default", "monochrome", "inverted"]),
  className: propTypes.exports.string
};
Logo.defaultProps = {
  alt: "Logo",
  size: "md",
  variant: "default",
  className: ""
};

const avatarVariants = cva("inline-flex items-center justify-center overflow-hidden bg-gray1 text-gray3 shrink-0", {
  variants: {
    size: {
      xs: "h-6 w-6 text-xs",
      sm: "h-8 w-8 text-sm",
      md: "h-10 w-10 text-base",
      lg: "h-12 w-12 text-lg",
      xl: "h-16 w-16 text-xl"
    },
    shape: {
      circle: "rounded-full",
      square: "rounded-none",
      rounded: "rounded-xl",
      // Rétrocompatibilité
      circle_legacy: "rounded-full"
    },
    bordered: {
      true: "ring-2 ring-white ring-offset-1",
      false: ""
    }
  },
  defaultVariants: {
    size: "md",
    shape: "circle",
    bordered: false
  }
});
const DefaultUserIcon = ({
  className
}) => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  stroke: "currentColor",
  className: cn("h-1/2 w-1/2", className),
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
}));
const Avatar = /*#__PURE__*/forwardRef(({
  src,
  alt = "",
  size,
  shape,
  type,
  bordered,
  fallback,
  children,
  onClick,
  className,
  ...props
}, ref) => {
  const resolvedShape = shape || type || "circle";
  const isInteractive = Boolean(onClick);
  return /*#__PURE__*/React.createElement("div", _extends$1({
    ref: ref,
    role: isInteractive ? "button" : "img",
    tabIndex: isInteractive ? 0 : undefined,
    "aria-label": alt || undefined,
    onClick: onClick,
    onKeyDown: isInteractive ? e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.(e);
      }
    } : undefined,
    className: cn(avatarVariants({
      size,
      shape: resolvedShape,
      bordered
    }), isInteractive && cn("cursor-pointer", focusRing), className)
  }, props), children || (src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    className: "h-full w-full object-cover"
  }) : fallback || /*#__PURE__*/React.createElement(DefaultUserIcon, null)));
});
Avatar.displayName = "Avatar";
Avatar.propTypes = {
  src: propTypes.exports.string,
  alt: propTypes.exports.string,
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg", "xl"]),
  shape: propTypes.exports.oneOf(["circle", "square", "rounded"]),
  type: propTypes.exports.oneOf(["circle", "square", "rounded"]),
  bordered: propTypes.exports.bool,
  fallback: propTypes.exports.node,
  children: propTypes.exports.node,
  onClick: propTypes.exports.func,
  className: propTypes.exports.string,
  width: propTypes.exports.number,
  height: propTypes.exports.number
};
Avatar.defaultProps = {
  alt: "",
  size: "md",
  shape: "circle",
  bordered: false,
  className: ""
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
  return /*#__PURE__*/ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
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
  triggerIcon: IconExemple(),
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

var css_248z = "/*! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.btn{border-radius:.5rem;font-weight:600}.btn-primary{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(13 36 127/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.btn-primary:hover{--tw-bg-opacity:1;background-color:rgb(13 20 38/var(--tw-bg-opacity))}.btn-outline-primary{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(13 36 127/var(--tw-border-opacity));border-width:1px;color:rgb(13 36 127/var(--tw-text-opacity))}.btn-outline-primary:hover{background-color:#0d247f07}.btn-text-primary{--tw-text-opacity:1;border-style:none;color:rgb(13 36 127/var(--tw-text-opacity))}.btn-text-primary:hover{background-color:#0d247f07}.btn-danger{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(221 45 45/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.btn-danger:hover{--tw-bg-opacity:1;background-color:rgb(195 32 32/var(--tw-bg-opacity))}.btn-outline-danger{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(221 45 45/var(--tw-border-opacity));border-width:1px;color:rgb(221 45 45/var(--tw-text-opacity))}.btn-outline-danger:hover{background-color:#dd2d2d07}.btn-text-danger{--tw-text-opacity:1;border-style:none;color:rgb(221 45 45/var(--tw-text-opacity))}.btn-text-danger:hover{background-color:#dd2d2d07}.btn-info{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(64 153 217/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.btn-info:hover{--tw-bg-opacity:1;background-color:rgb(21 144 192/var(--tw-bg-opacity))}.btn-outline-info{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(64 153 217/var(--tw-border-opacity));border-width:1px;color:rgb(64 153 217/var(--tw-text-opacity))}.btn-outline-info:hover{background-color:#4099d907}.btn-text-info{--tw-text-opacity:1;border-style:none;color:rgb(64 153 217/var(--tw-text-opacity))}.btn-text-info:hover{background-color:#4099d907}.btn-success{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(20 173 91/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.btn-success:hover{--tw-bg-opacity:1;background-color:rgb(19 152 19/var(--tw-bg-opacity))}.btn-outline-success{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(20 173 91/var(--tw-border-opacity));border-width:1px;color:rgb(20 173 91/var(--tw-text-opacity))}.btn-outline-success:hover{background-color:#14ad5b07}.btn-text-success{--tw-text-opacity:1;border-style:none;color:rgb(20 173 91/var(--tw-text-opacity))}.btn-text-success:hover{background-color:#14ad5b07}.btn-default{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(230 231 232/var(--tw-bg-opacity));color:rgb(13 20 38/var(--tw-text-opacity))}.btn-default:hover{--tw-bg-opacity:1;background-color:rgb(242 243 244/var(--tw-bg-opacity))}.btn-outline-default{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(170 173 182/var(--tw-border-opacity));border-width:1px;color:rgb(13 20 38/var(--tw-text-opacity))}.btn-outline-default:hover{--tw-bg-opacity:1;background-color:rgb(230 231 232/var(--tw-bg-opacity))}.btn-text-default{--tw-text-opacity:1;border-style:none;color:rgb(13 20 38/var(--tw-text-opacity))}.btn-text-default:hover{--tw-bg-opacity:1;background-color:rgb(230 231 232/var(--tw-bg-opacity))}.small{font-size:.875rem;line-height:1.25rem;padding:.5rem 1rem}.medium{font-size:1rem;line-height:1.5rem;padding:.75rem 1.5rem}.large{font-size:1.125rem;line-height:1.75rem;padding:.75rem 2rem}.text-small{font-size:.875rem;line-height:1.25rem}.text-medium{font-size:1rem;line-height:1.5rem}.text-large{font-size:1.125rem;line-height:1.75rem}.title-h1{font-size:3.75rem;line-height:1.5}.title-h2{font-size:3rem;line-height:1.5}.title-h3{font-size:2.25rem;line-height:2.5rem;line-height:1.5}.title-h4{font-size:1.875rem;line-height:2.25rem;line-height:1.5}.title-h5{font-size:1.5rem;line-height:2rem;line-height:1.5}.title-h6{font-size:1.25rem;line-height:1.75rem;line-height:1.5}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.inset-y-0{bottom:0;top:0}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.bottom-full{bottom:100%}.left-0{left:0}.left-1\\/2{left:50%}.left-3{left:.75rem}.left-4{left:1rem}.left-full{left:100%}.right-0{right:0}.right-2{right:.5rem}.right-3{right:.75rem}.right-6{right:1.5rem}.right-full{right:100%}.top-0{top:0}.top-1\\/2{top:50%}.top-3{top:.75rem}.top-\\[3rem\\]{top:3rem}.top-full{top:100%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.mx-1{margin-left:.25rem;margin-right:.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-3{margin-bottom:.75rem;margin-top:.75rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-\\[-5px\\]{margin-bottom:-5px}.ml-0{margin-left:0}.ml-0\\.5{margin-left:.125rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-\\[3em\\]{margin-left:3em}.ml-auto{margin-left:auto}.mr-2{margin-right:.5rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-\\[-1px\\]{margin-top:-1px}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.aspect-\\[3\\/4\\]{aspect-ratio:3/4}.aspect-square{aspect-ratio:1/1}.aspect-video{aspect-ratio:16/9}.h-0{height:0}.h-0\\.5{height:.125rem}.h-1{height:.25rem}.h-1\\.5{height:.375rem}.h-1\\/2{height:50%}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-16{height:4rem}.h-2{height:.5rem}.h-20{height:5rem}.h-28{height:7rem}.h-3{height:.75rem}.h-3\\.5{height:.875rem}.h-32{height:8rem}.h-4{height:1rem}.h-40{height:10rem}.h-48{height:12rem}.h-5{height:1.25rem}.h-56{height:14rem}.h-6{height:1.5rem}.h-60{height:15rem}.h-64{height:16rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-96{height:24rem}.h-\\[57px\\]{height:57px}.h-full{height:100%}.h-px{height:1px}.max-h-64{max-height:16rem}.max-h-72{max-height:18rem}.max-h-\\[300px\\]{max-height:300px}.min-h-\\[120px\\]{min-height:120px}.min-h-\\[180px\\]{min-height:180px}.min-h-\\[220px\\]{min-height:220px}.min-h-\\[28px\\]{min-height:28px}.min-h-\\[32px\\]{min-height:32px}.min-h-\\[40px\\]{min-height:40px}.min-h-\\[48px\\]{min-height:48px}.min-h-\\[56px\\]{min-height:56px}.min-h-\\[60px\\]{min-height:60px}.min-h-\\[72px\\]{min-height:72px}.min-h-\\[76px\\]{min-height:76px}.min-h-\\[80px\\]{min-height:80px}.min-h-\\[96px\\]{min-height:96px}.min-h-screen{min-height:100vh}.w-0{width:0}.w-0\\.5{width:.125rem}.w-1{width:.25rem}.w-1\\/2{width:50%}.w-1\\/3{width:33.333333%}.w-10{width:2.5rem}.w-11{width:2.75rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-16{width:4rem}.w-2{width:.5rem}.w-20{width:5rem}.w-3{width:.75rem}.w-36{width:9rem}.w-4{width:1rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-72{width:18rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[200px\\]{width:200px}.w-\\[270px\\]{width:270px}.w-\\[300px\\]{width:300px}.w-\\[97\\%\\]{width:97%}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-px{width:1px}.min-w-0{min-width:0}.min-w-\\[160px\\]{min-width:160px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[220px\\]{min-width:220px}.min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.min-w-full{min-width:100%}.max-w-2xl{max-width:42rem}.max-w-6xl{max-width:72rem}.max-w-\\[100\\%\\]{max-width:100%}.max-w-\\[80\\%\\]{max-width:80%}.max-w-lg{max-width:32rem}.max-w-md{max-width:28rem}.max-w-none{max-width:none}.max-w-sm{max-width:24rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x:-50%}.-translate-x-1\\/2,.-translate-y-1\\/2{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-0\\.5{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0\\.5{--tw-translate-x:0.125rem}.translate-x-\\[18px\\]{--tw-translate-x:18px}.translate-x-\\[18px\\],.translate-x-\\[22px\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[22px\\]{--tw-translate-x:22px}.translate-x-\\[30px\\]{--tw-translate-x:30px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.animate-\\[progress-indeterminate_1\\.5s_ease-in-out_infinite\\]{animation:progress-indeterminate 1.5s ease-in-out infinite}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(1turn)}}.animate-spin{animation:spin 1s linear infinite}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.cursor-text{cursor:text}.cursor-wait{cursor:wait}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize-y{resize:vertical}.list-disc{list-style-type:disc}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-16{gap:4rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.25rem*var(--tw-space-x-reverse))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.divide-gray2>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(170 173 182/var(--tw-divide-opacity))}.divide-gray4>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(101 101 101/var(--tw-divide-opacity))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-stretch{align-self:stretch}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.truncate{overflow:hidden;white-space:nowrap}.text-ellipsis,.truncate{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-none{border-radius:0}.rounded-sm{border-radius:.125rem}.rounded-xl{border-radius:.75rem}.rounded-b-3xl{border-bottom-right-radius:1.5rem}.rounded-b-3xl,.rounded-l-3xl{border-bottom-left-radius:1.5rem}.rounded-l-3xl{border-top-left-radius:1.5rem}.rounded-r-lg{border-bottom-right-radius:.5rem;border-top-right-radius:.5rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-t-3xl{border-top-left-radius:1.5rem;border-top-right-radius:1.5rem}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-4{border-width:4px}.border-\\[3px\\]{border-width:3px}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-l-4{border-left-width:4px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.border-danger{--tw-border-opacity:1;border-color:rgb(221 45 45/var(--tw-border-opacity))}.border-gray1{--tw-border-opacity:1;border-color:rgb(242 243 244/var(--tw-border-opacity))}.border-gray2{--tw-border-opacity:1;border-color:rgb(170 173 182/var(--tw-border-opacity))}.border-gray3{--tw-border-opacity:1;border-color:rgb(117 121 134/var(--tw-border-opacity))}.border-primary{--tw-border-opacity:1;border-color:rgb(13 36 127/var(--tw-border-opacity))}.bg-\\[\\#151d31\\]{--tw-bg-opacity:1;background-color:rgb(21 29 49/var(--tw-bg-opacity))}.bg-backdrop{background-color:#0000009c}.bg-danger{--tw-bg-opacity:1;background-color:rgb(221 45 45/var(--tw-bg-opacity))}.bg-danger\\/20{background-color:rgba(221,45,45,.2)}.bg-dangerLight{background-color:#dd2d2d07}.bg-dark{--tw-bg-opacity:1;background-color:rgb(13 20 38/var(--tw-bg-opacity))}.bg-default{--tw-bg-opacity:1;background-color:rgb(230 231 232/var(--tw-bg-opacity))}.bg-defaultLight{background-color:#e6e7e807}.bg-gray1{--tw-bg-opacity:1;background-color:rgb(242 243 244/var(--tw-bg-opacity))}.bg-gray1\\/50{background-color:hsla(210,8%,95%,.5)}.bg-gray2{--tw-bg-opacity:1;background-color:rgb(170 173 182/var(--tw-bg-opacity))}.bg-gray3{--tw-bg-opacity:1;background-color:rgb(117 121 134/var(--tw-bg-opacity))}.bg-indigo{--tw-bg-opacity:1;background-color:rgb(125 138 201/var(--tw-bg-opacity))}.bg-info{--tw-bg-opacity:1;background-color:rgb(64 153 217/var(--tw-bg-opacity))}.bg-infoLight{background-color:#4099d907}.bg-primary{--tw-bg-opacity:1;background-color:rgb(13 36 127/var(--tw-bg-opacity))}.bg-primary\\/10{background-color:rgba(13,36,127,.1)}.bg-primary\\/20{background-color:rgba(13,36,127,.2)}.bg-primaryLight{background-color:#0d247f07}.bg-primaryLight\\/30{background-color:rgba(13,36,127,.3)}.bg-success{--tw-bg-opacity:1;background-color:rgb(20 173 91/var(--tw-bg-opacity))}.bg-successLight{background-color:#14ad5b07}.bg-warning{--tw-bg-opacity:1;background-color:rgb(255 172 50/var(--tw-bg-opacity))}.bg-warningLight{background-color:#ffac3207}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-white\\/50{background-color:hsla(0,0%,100%,.5)}.bg-white\\/60{background-color:hsla(0,0%,100%,.6)}.bg-white\\/90{background-color:hsla(0,0%,100%,.9)}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-primary{--tw-gradient-from:#0d247f var(--tw-gradient-from-position);--tw-gradient-to:rgba(13,36,127,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.to-indigo{--tw-gradient-to:#7d8ac9 var(--tw-gradient-to-position)}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-fill{-o-object-fit:fill;object-fit:fill}.object-none{-o-object-fit:none;object-fit:none}.p-0{padding:0}.p-0\\.5{padding:.125rem}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-16{padding:4rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-0{padding-left:0;padding-right:0}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-0{padding-bottom:0;padding-top:0}.py-0\\.5{padding-bottom:.125rem;padding-top:.125rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.py-10{padding-bottom:2.5rem;padding-top:2.5rem}.py-12{padding-bottom:3rem;padding-top:3rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-5{padding-bottom:1.25rem;padding-top:1.25rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.py-\\[1em\\]{padding-bottom:1em;padding-top:1em}.pb-2{padding-bottom:.5rem}.pl-12{padding-left:3rem}.pl-2{padding-left:.5rem}.pl-4{padding-left:1rem}.pl-9{padding-left:2.25rem}.pr-1{padding-right:.25rem}.pr-4{padding-right:1rem}.pr-5{padding-right:1.25rem}.pt-3{padding-top:.75rem}.pt-4{padding-top:1rem}.pt-\\[76px\\]{padding-top:76px}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-justify{text-align:justify}.align-top{vertical-align:top}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-5xl{font-size:3rem;line-height:1}.text-\\[10px\\]{font-size:10px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.italic{font-style:italic}.leading-relaxed{line-height:1.625}.leading-snug{line-height:1.375}.tracking-\\[0\\.15em\\]{letter-spacing:.15em}.tracking-tight{letter-spacing:-.025em}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.\\!text-primary{--tw-text-opacity:1!important;color:rgb(13 36 127/var(--tw-text-opacity))!important}.text-danger{--tw-text-opacity:1;color:rgb(221 45 45/var(--tw-text-opacity))}.text-dangerLight{color:#dd2d2d07}.text-dark{--tw-text-opacity:1;color:rgb(13 20 38/var(--tw-text-opacity))}.text-darkBlue{--tw-text-opacity:1;color:rgb(13 36 127/var(--tw-text-opacity))}.text-gray1{--tw-text-opacity:1;color:rgb(242 243 244/var(--tw-text-opacity))}.text-gray2{--tw-text-opacity:1;color:rgb(170 173 182/var(--tw-text-opacity))}.text-gray3{--tw-text-opacity:1;color:rgb(117 121 134/var(--tw-text-opacity))}.text-gray4{--tw-text-opacity:1;color:rgb(101 101 101/var(--tw-text-opacity))}.text-indigo{--tw-text-opacity:1;color:rgb(125 138 201/var(--tw-text-opacity))}.text-info{--tw-text-opacity:1;color:rgb(64 153 217/var(--tw-text-opacity))}.text-infoLight{color:#4099d907}.text-primary{--tw-text-opacity:1;color:rgb(13 36 127/var(--tw-text-opacity))}.text-primary\\/40{color:rgba(13,36,127,.4)}.text-primaryLight{color:#0d247f07}.text-success{--tw-text-opacity:1;color:rgb(20 173 91/var(--tw-text-opacity))}.text-successLight{color:#14ad5b07}.text-textGray{--tw-text-opacity:1;color:rgb(196 198 211/var(--tw-text-opacity))}.text-warning{--tw-text-opacity:1;color:rgb(255 172 50/var(--tw-text-opacity))}.text-warningLight{color:#ffac3207}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.no-underline{-webkit-text-decoration-line:none;text-decoration-line:none}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-30{opacity:.3}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-80{opacity:.8}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-2xl{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-lg,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.shadow-sm,.shadow-xl{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-2{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.ring-white{--tw-ring-opacity:1;--tw-ring-color:rgb(255 255 255/var(--tw-ring-opacity))}.ring-offset-1{--tw-ring-offset-width:1px}.blur{--tw-blur:blur(8px)}.blur,.brightness-0{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.brightness-0{--tw-brightness:brightness(0)}.drop-shadow-sm{--tw-drop-shadow:drop-shadow(0 1px 1px rgba(0,0,0,.05))}.drop-shadow-sm,.grayscale{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.grayscale{--tw-grayscale:grayscale(100%)}.invert{--tw-invert:invert(100%)}.filter,.invert{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur:blur(4px);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-shadow{transition-duration:.15s;transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-150,.transition-transform{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide::-webkit-scrollbar{display:none}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}@keyframes progress-indeterminate{0%{transform:translateX(-100%)}to{transform:translateX(400%)}}.file\\:mr-4::file-selector-button{margin-right:1rem}.file\\:rounded-full::file-selector-button{border-radius:9999px}.file\\:border-none::file-selector-button{border-style:none}.file\\:bg-primary::file-selector-button{--tw-bg-opacity:1;background-color:rgb(13 36 127/var(--tw-bg-opacity))}.file\\:px-4::file-selector-button{padding-left:1rem;padding-right:1rem}.file\\:py-2::file-selector-button{padding-bottom:.5rem;padding-top:.5rem}.file\\:text-white::file-selector-button{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.file\\:transition::file-selector-button{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.placeholder\\:text-gray2::-moz-placeholder{--tw-text-opacity:1;color:rgb(170 173 182/var(--tw-text-opacity))}.placeholder\\:text-gray2::placeholder{--tw-text-opacity:1;color:rgb(170 173 182/var(--tw-text-opacity))}.after\\:ml-0:after{content:var(--tw-content);margin-left:0}.after\\:ml-0\\.5:after{content:var(--tw-content);margin-left:.125rem}.after\\:text-danger:after{--tw-text-opacity:1;color:rgb(221 45 45/var(--tw-text-opacity));content:var(--tw-content)}.after\\:content-\\[\\'\\*\\'\\]:after{--tw-content:\"*\";content:var(--tw-content)}.checked\\:border-danger:checked{--tw-border-opacity:1;border-color:rgb(221 45 45/var(--tw-border-opacity))}.checked\\:border-primary:checked{--tw-border-opacity:1;border-color:rgb(13 36 127/var(--tw-border-opacity))}.checked\\:bg-danger:checked{--tw-bg-opacity:1;background-color:rgb(221 45 45/var(--tw-bg-opacity))}.checked\\:bg-primary:checked{--tw-bg-opacity:1;background-color:rgb(13 36 127/var(--tw-bg-opacity))}.hover\\:scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:border-gray2:hover{--tw-border-opacity:1;border-color:rgb(170 173 182/var(--tw-border-opacity))}.hover\\:border-gray3:hover{--tw-border-opacity:1;border-color:rgb(117 121 134/var(--tw-border-opacity))}.hover\\:border-primary:hover{--tw-border-opacity:1;border-color:rgb(13 36 127/var(--tw-border-opacity))}.hover\\:border-primary\\/50:hover{border-color:rgba(13,36,127,.5)}.hover\\:bg-\\[\\#c32020\\]:hover{--tw-bg-opacity:1;background-color:rgb(195 32 32/var(--tw-bg-opacity))}.hover\\:bg-danger\\/10:hover{background-color:rgba(221,45,45,.1)}.hover\\:bg-darkBlue:hover{--tw-bg-opacity:1;background-color:rgb(13 36 127/var(--tw-bg-opacity))}.hover\\:bg-gray1:hover{--tw-bg-opacity:1;background-color:rgb(242 243 244/var(--tw-bg-opacity))}.hover\\:bg-gray1\\/80:hover{background-color:hsla(210,8%,95%,.8)}.hover\\:bg-gray2:hover{--tw-bg-opacity:1;background-color:rgb(170 173 182/var(--tw-bg-opacity))}.hover\\:bg-gray2\\/30:hover{background-color:hsla(225,8%,69%,.3)}.hover\\:bg-primary\\/10:hover{background-color:rgba(13,36,127,.1)}.hover\\:bg-primaryLight:hover{background-color:#0d247f07}.hover\\:bg-success\\/10:hover{background-color:rgba(20,173,91,.1)}.hover\\:bg-warning\\/10:hover{background-color:rgba(255,172,50,.1)}.hover\\:bg-white:hover{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.hover\\:text-\\[\\#9faec1\\]:hover{--tw-text-opacity:1;color:rgb(159 174 193/var(--tw-text-opacity))}.hover\\:text-\\[\\#c32020\\]:hover{--tw-text-opacity:1;color:rgb(195 32 32/var(--tw-text-opacity))}.hover\\:text-\\[rgb\\(159\\2c 174\\2c 193\\)\\]:hover{--tw-text-opacity:1;color:rgb(159 174 193/var(--tw-text-opacity))}.hover\\:text-dark:hover{--tw-text-opacity:1;color:rgb(13 20 38/var(--tw-text-opacity))}.hover\\:text-darkBlue:hover{--tw-text-opacity:1;color:rgb(13 36 127/var(--tw-text-opacity))}.hover\\:text-gray2:hover{--tw-text-opacity:1;color:rgb(170 173 182/var(--tw-text-opacity))}.hover\\:text-primary:hover{--tw-text-opacity:1;color:rgb(13 36 127/var(--tw-text-opacity))}.hover\\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.hover\\:opacity-90:hover{opacity:.9}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.hover\\:shadow-lg:hover,.hover\\:shadow-md:hover{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.focus\\:border-primary:focus{--tw-border-opacity:1;border-color:rgb(13 36 127/var(--tw-border-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-primary:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(13 36 127/var(--tw-ring-opacity))}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-visible\\:ring-danger:focus-visible{--tw-ring-opacity:1;--tw-ring-color:rgb(221 45 45/var(--tw-ring-opacity))}.focus-visible\\:ring-primary:focus-visible{--tw-ring-opacity:1;--tw-ring-color:rgb(13 36 127/var(--tw-ring-opacity))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px}.active\\:scale-95:active{--tw-scale-x:.95;--tw-scale-y:.95}.active\\:scale-95:active,.active\\:scale-\\[0\\.98\\]:active{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.active\\:scale-\\[0\\.98\\]:active{--tw-scale-x:0.98;--tw-scale-y:0.98}.active\\:scale-\\[0\\.99\\]:active{--tw-scale-x:0.99;--tw-scale-y:0.99;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.active\\:bg-\\[\\#a81a1a\\]:active{--tw-bg-opacity:1;background-color:rgb(168 26 26/var(--tw-bg-opacity))}.active\\:bg-dark:active{--tw-bg-opacity:1;background-color:rgb(13 20 38/var(--tw-bg-opacity))}.active\\:bg-gray2\\/20:active{background-color:hsla(225,8%,69%,.2)}.active\\:bg-gray2\\/50:active{background-color:hsla(225,8%,69%,.5)}.active\\:bg-primary\\/10:active{background-color:rgba(13,36,127,.1)}.active\\:opacity-100:active{opacity:1}.active\\:opacity-80:active{opacity:.8}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.peer:checked~.peer-checked\\:border-2{border-width:2px}.peer:checked~.peer-checked\\:border-darkBlue{--tw-border-opacity:1;border-color:rgb(13 36 127/var(--tw-border-opacity))}.peer:checked~.peer-checked\\:text-darkBlue{--tw-text-opacity:1;color:rgb(13 36 127/var(--tw-text-opacity))}.peer:checked~.peer-checked\\:opacity-100{opacity:1}.peer:disabled~.peer-disabled\\:text-gray2{--tw-text-opacity:1;color:rgb(170 173 182/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:w-64{width:16rem}.sm\\:w-auto{width:auto}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:justify-end{justify-content:flex-end}.sm\\:justify-between{justify-content:space-between}.sm\\:rounded-lg{border-radius:.5rem}.sm\\:p-4{padding:1rem}.sm\\:px-4{padding-left:1rem;padding-right:1rem}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\\:text-5xl{font-size:3rem;line-height:1}.sm\\:text-lg{font-size:1.125rem;line-height:1.75rem}.sm\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:768px){.md\\:order-1{order:1}.md\\:mt-0{margin-top:0}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-\\[370px\\]{width:370px}.md\\:w-auto{width:auto}.md\\:w-fit{width:-moz-fit-content;width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}.md\\:p-0{padding:0}.md\\:pt-10{padding-top:2.5rem}.md\\:scrollbar-default{-ms-overflow-style:auto;scrollbar-width:auto}.md\\:scrollbar-default::-webkit-scrollbar{display:block}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-\\[1\\.2fr_0\\.8fr\\]{grid-template-columns:1.2fr .8fr}.lg\\:grid-cols-\\[280px_1fr\\]{grid-template-columns:280px 1fr}}@media (min-width:1280px){.xl\\:col-span-2{grid-column:span 2/span 2}.xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}.\\[\\&\\:\\:-moz-range-thumb\\]\\:h-3::-moz-range-thumb{height:.75rem}.\\[\\&\\:\\:-moz-range-thumb\\]\\:h-4::-moz-range-thumb{height:1rem}.\\[\\&\\:\\:-moz-range-thumb\\]\\:h-5::-moz-range-thumb{height:1.25rem}.\\[\\&\\:\\:-moz-range-thumb\\]\\:w-3::-moz-range-thumb{width:.75rem}.\\[\\&\\:\\:-moz-range-thumb\\]\\:w-4::-moz-range-thumb{width:1rem}.\\[\\&\\:\\:-moz-range-thumb\\]\\:w-5::-moz-range-thumb{width:1.25rem}.\\[\\&\\:\\:-moz-range-thumb\\]\\:cursor-pointer::-moz-range-thumb{cursor:pointer}.\\[\\&\\:\\:-moz-range-thumb\\]\\:rounded-full::-moz-range-thumb{border-radius:9999px}.\\[\\&\\:\\:-moz-range-thumb\\]\\:border-0::-moz-range-thumb{border-width:0}.\\[\\&\\:\\:-moz-range-thumb\\]\\:bg-danger::-moz-range-thumb{--tw-bg-opacity:1;background-color:rgb(221 45 45/var(--tw-bg-opacity))}.\\[\\&\\:\\:-moz-range-thumb\\]\\:bg-primary::-moz-range-thumb{--tw-bg-opacity:1;background-color:rgb(13 36 127/var(--tw-bg-opacity))}.\\[\\&\\:\\:-moz-range-thumb\\]\\:bg-success::-moz-range-thumb{--tw-bg-opacity:1;background-color:rgb(20 173 91/var(--tw-bg-opacity))}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:h-3::-webkit-slider-thumb{height:.75rem}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:h-4::-webkit-slider-thumb{height:1rem}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:h-5::-webkit-slider-thumb{height:1.25rem}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:w-3::-webkit-slider-thumb{width:.75rem}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:w-4::-webkit-slider-thumb{width:1rem}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:w-5::-webkit-slider-thumb{width:1.25rem}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:cursor-pointer::-webkit-slider-thumb{cursor:pointer}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:appearance-none::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:rounded-full::-webkit-slider-thumb{border-radius:9999px}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:bg-danger::-webkit-slider-thumb{--tw-bg-opacity:1;background-color:rgb(221 45 45/var(--tw-bg-opacity))}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:bg-primary::-webkit-slider-thumb{--tw-bg-opacity:1;background-color:rgb(13 36 127/var(--tw-bg-opacity))}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:bg-success::-webkit-slider-thumb{--tw-bg-opacity:1;background-color:rgb(20 173 91/var(--tw-bg-opacity))}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:shadow-md::-webkit-slider-thumb{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:transition-transform::-webkit-slider-thumb{transition-duration:.15s;-webkit-transition-property:transform;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:hover\\:scale-110:hover::-webkit-slider-thumb{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}";
styleInject(css_248z);

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

const iconButtonVariants = cva(["inline-flex items-center justify-center shrink-0", "transition-all duration-200", "active:scale-95", focusRing, disabledStyles].join(" "), {
  variants: {
    variant: {
      primary: "bg-primary text-white hover:bg-darkBlue active:bg-dark",
      secondary: "bg-gray1 text-dark hover:bg-gray2/30 active:bg-gray2/50",
      outline: "border border-gray2 bg-white text-dark hover:bg-gray1 active:bg-gray2/20",
      ghost: "bg-transparent text-dark hover:bg-gray1 active:bg-gray2/20",
      destructive: "bg-danger text-white hover:bg-[#c32020] active:bg-[#a81a1a]",
      // Rétrocompatibilité
      contained: "",
      outlined: ""
    },
    size: {
      xs: "h-7 w-7 p-1",
      sm: "h-8 w-8 p-1.5",
      md: "h-10 w-10 p-2",
      lg: "h-12 w-12 p-2.5",
      xl: "h-14 w-14 p-3",
      smaller: "h-6 w-6 p-1",
      small: "h-8 w-8 p-1.5",
      medium: "h-10 w-10 p-2",
      large: "h-12 w-12 p-2.5"
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full"
    }
  },
  compoundVariants: [{
    variant: "contained",
    className: "bg-default text-dark hover:bg-gray1"
  }, {
    variant: "outlined",
    className: "border border-gray2 bg-white text-dark hover:bg-gray1"
  }],
  defaultVariants: {
    variant: "ghost",
    size: "md",
    rounded: "md"
  }
});
function resolveVariant$1(variant, type) {
  if (["primary", "secondary", "outline", "ghost", "destructive"].includes(variant)) {
    return variant;
  }
  if (variant === "outlined") return "outline";
  if (variant === "contained") {
    const typeMap = {
      primary: "primary",
      danger: "destructive",
      default: "secondary",
      info: "primary",
      success: "primary"
    };
    return typeMap[type] || "secondary";
  }
  return variant || "ghost";
}
const IconButton = /*#__PURE__*/forwardRef(({
  children,
  variant,
  type,
  size,
  rounded,
  disabled,
  loading,
  className,
  onClick,
  "aria-label": ariaLabel,
  ...props
}, ref) => {
  const resolvedVariant = resolveVariant$1(variant, type);
  return /*#__PURE__*/React.createElement("button", _extends$1({
    ref: ref,
    type: "button",
    disabled: disabled || loading,
    "aria-busy": loading || undefined,
    "aria-label": ariaLabel,
    onClick: onClick,
    className: cn(iconButtonVariants({
      variant: resolvedVariant,
      size,
      rounded
    }), loading && "cursor-wait opacity-70", className)
  }, props), loading ? /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent",
    "aria-hidden": "true"
  }) : children);
});
IconButton.displayName = "IconButton";
IconButton.propTypes = {
  children: propTypes.exports.node.isRequired,
  variant: propTypes.exports.oneOf(["primary", "secondary", "outline", "ghost", "destructive", "contained", "outlined"]),
  type: propTypes.exports.oneOf(["default", "primary", "info", "danger", "success"]),
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg", "xl", "smaller", "small", "medium", "large"]),
  rounded: propTypes.exports.oneOf(["none", "sm", "md", "lg", "full"]),
  disabled: propTypes.exports.bool,
  loading: propTypes.exports.bool,
  className: propTypes.exports.string,
  onClick: propTypes.exports.func,
  "aria-label": propTypes.exports.string
};
IconButton.defaultProps = {
  variant: "ghost",
  type: "default",
  size: "md",
  rounded: "md",
  disabled: false,
  loading: false,
  className: ""
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

const checkboxVariants = cva(["peer shrink-0 appearance-none", "border-2 border-gray2 bg-white", "checked:bg-primary checked:border-primary", "transition-colors duration-200", focusRing, disabledStyles].join(" "), {
  variants: {
    size: {
      sm: "h-4 w-4 rounded",
      md: "h-5 w-5 rounded",
      lg: "h-6 w-6 rounded-md",
      small: "h-4 w-4 rounded",
      medium: "h-5 w-5 rounded",
      large: "h-6 w-6 rounded-md"
    },
    error: {
      true: "border-danger checked:bg-danger checked:border-danger",
      false: ""
    }
  },
  defaultVariants: {
    size: "md",
    error: false
  }
});
const Checkbox = /*#__PURE__*/forwardRef(({
  name,
  label,
  value,
  onChange,
  checked,
  defaultChecked,
  fullWidth,
  required,
  disabled,
  labelProps = {},
  inputProps = {},
  id,
  size,
  error,
  className,
  ...props
}, ref) => {
  const {
    labelClassName,
    ...otherLabelProps
  } = labelProps;
  const {
    inputClassName,
    ...otherInputProps
  } = inputProps;
  const inputId = id || `checkbox-${name || "input"}`;
  const width = fullWidth ? "w-full" : "w-fit";
  const textColor = error ? "text-danger" : "text-dark";
  return /*#__PURE__*/React.createElement("div", {
    className: cn("flex items-center gap-2", width, className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative inline-flex items-center"
  }, /*#__PURE__*/React.createElement("input", _extends$1({
    ref: ref,
    type: "checkbox",
    name: name,
    id: inputId,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    required: required,
    disabled: disabled,
    "aria-invalid": error || undefined,
    className: cn(checkboxVariants({
      size,
      error
    }), inputClassName)
  }, otherInputProps, props)), /*#__PURE__*/React.createElement("svg", {
    className: "pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6l3 3 5-5",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("label", _extends$1({
    htmlFor: inputId,
    className: cn("text-sm cursor-pointer select-none", textColor, disabled && "opacity-50 cursor-not-allowed", labelClassName)
  }, otherLabelProps), label, required && /*#__PURE__*/React.createElement("span", {
    className: "text-danger ml-0.5"
  }, "*")));
});
Checkbox.displayName = "Checkbox";
Checkbox.propTypes = {
  name: propTypes.exports.string,
  label: propTypes.exports.string,
  value: propTypes.exports.any,
  onChange: propTypes.exports.func,
  checked: propTypes.exports.bool,
  defaultChecked: propTypes.exports.bool,
  fullWidth: propTypes.exports.bool,
  required: propTypes.exports.bool,
  disabled: propTypes.exports.bool,
  labelProps: propTypes.exports.object,
  inputProps: propTypes.exports.object,
  id: propTypes.exports.string,
  size: propTypes.exports.oneOf(["sm", "md", "lg", "small", "medium", "large"]),
  error: propTypes.exports.bool,
  className: propTypes.exports.string
};
Checkbox.defaultProps = {
  name: "",
  labelProps: {},
  inputProps: {},
  error: false,
  size: "md",
  className: ""
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

const textareaVariants = cva(["w-full text-dark placeholder:text-gray2 resize-y min-h-[80px]", "transition-colors duration-200", focusRing, disabledStyles].join(" "), {
  variants: {
    variant: {
      default: "border border-gray2 bg-white hover:border-gray3",
      filled: "border border-transparent bg-gray1 hover:bg-gray1/80",
      flushed: "border-0 border-b-2 border-gray2 bg-transparent rounded-none hover:border-gray3 px-0",
      outline: "border-2 border-gray2 bg-white hover:border-primary/50",
      // Rétrocompatibilité
      outlined: "border border-gray2 bg-white hover:border-gray3"
    },
    size: {
      xs: "px-2.5 py-1.5 text-xs rounded-md min-h-[60px]",
      sm: "px-3 py-2 text-sm rounded-md min-h-[72px]",
      md: "px-4 py-2.5 text-sm rounded-lg min-h-[96px]",
      lg: "px-5 py-3 text-base rounded-lg min-h-[120px]",
      small: "px-3 py-2 text-sm rounded-md",
      medium: "px-4 py-2.5 text-sm rounded-lg",
      large: "px-5 py-3 text-base rounded-lg"
    },
    fullWidth: {
      true: "w-full",
      false: "w-auto"
    },
    error: {
      true: errorRing,
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    fullWidth: true,
    error: false
  }
});

/**
 * Composant textarea atomique.
 * Conserve l'API composée (label, helperText) pour la rétrocompatibilité.
 */
const Textarea = /*#__PURE__*/forwardRef(({
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
  className,
  ...props
}, ref) => {
  const textColor = error ? "text-danger" : "text-gray3";
  const width = fullWidth ? "w-full" : "w-fit";
  const textareaEl = /*#__PURE__*/React.createElement("textarea", _extends$1({
    ref: ref,
    value: value,
    onChange: onChange,
    required: required,
    placeholder: placeholder,
    style: style,
    disabled: disabled,
    id: id || undefined,
    "aria-invalid": error || undefined,
    "aria-describedby": error && helperText ? `${id}-error` : undefined,
    className: cn(textareaVariants({
      variant,
      size,
      fullWidth,
      error
    }), props.className)
  }, inputProps, props));
  if (!label && !error) {
    return textareaEl;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cn("relative flex flex-col gap-1", width, className)
  }, label && /*#__PURE__*/React.createElement("label", _extends$1({
    className: cn("text-sm mx-1", textColor),
    htmlFor: id || undefined
  }, labelProps), label, required && /*#__PURE__*/React.createElement("span", {
    className: "text-danger ml-0.5"
  }, "*")), textareaEl, error && helperText && /*#__PURE__*/React.createElement("span", {
    id: `${id}-error`,
    className: "text-danger text-xs ml-1",
    role: "alert"
  }, helperText));
});
Textarea.displayName = "Textarea";
Textarea.propTypes = {
  variant: propTypes.exports.oneOf(["default", "filled", "flushed", "outline", "outlined"]),
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg", "small", "medium", "large"]),
  fullWidth: propTypes.exports.bool,
  required: propTypes.exports.bool,
  disabled: propTypes.exports.bool,
  error: propTypes.exports.bool,
  label: propTypes.exports.string,
  helperText: propTypes.exports.string,
  placeholder: propTypes.exports.string,
  id: propTypes.exports.string,
  value: propTypes.exports.string,
  onChange: propTypes.exports.func,
  style: propTypes.exports.object,
  className: propTypes.exports.string,
  inputProps: propTypes.exports.object,
  labelProps: propTypes.exports.object
};
Textarea.defaultProps = {
  variant: "outline",
  size: "md",
  fullWidth: true,
  required: false,
  disabled: false,
  error: false,
  helperText: "",
  inputProps: {},
  labelProps: {},
  className: ""
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

const switchTrackVariants = cva(["relative inline-flex shrink-0 cursor-pointer items-center", "rounded-full transition-colors duration-200", focusRing, disabledStyles].join(" "), {
  variants: {
    size: {
      sm: "h-5 w-9",
      md: "h-6 w-11",
      lg: "h-7 w-14"
    },
    intent: {
      default: "",
      primary: "",
      success: "",
      danger: ""
    },
    checked: {
      true: "",
      false: "bg-gray2"
    }
  },
  compoundVariants: [{
    checked: true,
    intent: "default",
    className: "bg-primary"
  }, {
    checked: true,
    intent: "primary",
    className: "bg-primary"
  }, {
    checked: true,
    intent: "success",
    className: "bg-success"
  }, {
    checked: true,
    intent: "danger",
    className: "bg-danger"
  }],
  defaultVariants: {
    size: "md",
    intent: "primary",
    checked: false
  }
});
const switchThumbVariants = cva("pointer-events-none inline-block rounded-full bg-white shadow-sm transition-transform duration-200", {
  variants: {
    size: {
      sm: "h-4 w-4 translate-x-0.5",
      md: "h-5 w-5 translate-x-0.5",
      lg: "h-6 w-6 translate-x-0.5"
    },
    checked: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [{
    size: "sm",
    checked: true,
    className: "translate-x-[18px]"
  }, {
    size: "md",
    checked: true,
    className: "translate-x-[22px]"
  }, {
    size: "lg",
    checked: true,
    className: "translate-x-[30px]"
  }],
  defaultVariants: {
    size: "md",
    checked: false
  }
});
const Switch = /*#__PURE__*/forwardRef(({
  checked,
  defaultChecked = false,
  onChange,
  disabled,
  size,
  intent,
  className,
  id,
  name,
  value,
  "aria-label": ariaLabel,
  ...props
}, ref) => {
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : defaultChecked;
  return /*#__PURE__*/React.createElement("button", _extends$1({
    ref: ref,
    type: "button",
    role: "switch",
    id: id,
    name: name,
    value: value,
    "aria-checked": isChecked,
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: () => {
      if (!disabled && onChange) {
        onChange(!isChecked);
      }
    },
    className: cn(switchTrackVariants({
      size,
      intent,
      checked: isChecked
    }), className)
  }, props), /*#__PURE__*/React.createElement("span", {
    className: switchThumbVariants({
      size,
      checked: isChecked
    }),
    "aria-hidden": "true"
  }));
});
Switch.displayName = "Switch";
Switch.propTypes = {
  checked: propTypes.exports.bool,
  defaultChecked: propTypes.exports.bool,
  onChange: propTypes.exports.func,
  disabled: propTypes.exports.bool,
  size: propTypes.exports.oneOf(["sm", "md", "lg"]),
  intent: propTypes.exports.oneOf(["default", "primary", "success", "danger"]),
  className: propTypes.exports.string,
  id: propTypes.exports.string,
  name: propTypes.exports.string,
  value: propTypes.exports.string
};
Switch.defaultProps = {
  defaultChecked: false,
  disabled: false,
  size: "md",
  intent: "primary",
  className: ""
};

/**
 * Alias rétrocompatible du composant Switch.
 * @deprecated Utiliser Switch à la place.
 */
const Toggle = /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/React.createElement(Switch, _extends$1({
  ref: ref
}, props)));
Toggle.displayName = "Toggle";
Toggle.propTypes = {
  checked: propTypes.exports.bool,
  defaultChecked: propTypes.exports.bool,
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

const headingVariants = cva("font-bold tracking-tight text-dark", {
  variants: {
    level: {
      1: "text-4xl sm:text-5xl",
      2: "text-3xl sm:text-4xl",
      3: "text-2xl sm:text-3xl",
      4: "text-xl sm:text-2xl",
      5: "text-lg sm:text-xl",
      6: "text-base sm:text-lg"
    },
    intent: {
      default: "text-dark",
      primary: "text-primary",
      muted: "text-gray3",
      danger: "text-danger",
      success: "text-success"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    level: 2,
    intent: "default",
    align: "left"
  }
});
const TAG_MAP = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6"
};

/**
 * Composant titre sémantique avec variants typographiques.
 */
const Heading = /*#__PURE__*/forwardRef(({
  as,
  level,
  intent,
  align,
  className,
  children,
  ...props
}, ref) => {
  const Tag = as || TAG_MAP[level] || "h2";
  return /*#__PURE__*/React.createElement(Tag, _extends$1({
    ref: ref,
    className: cn(headingVariants({
      level,
      intent,
      align
    }), focusRing, className)
  }, props), children);
});
Heading.displayName = "Heading";
Heading.propTypes = {
  children: propTypes.exports.node.isRequired,
  as: propTypes.exports.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  level: propTypes.exports.oneOf([1, 2, 3, 4, 5, 6]),
  intent: propTypes.exports.oneOf(["default", "primary", "muted", "danger", "success"]),
  align: propTypes.exports.oneOf(["left", "center", "right"]),
  className: propTypes.exports.string
};
Heading.defaultProps = {
  level: 2,
  intent: "default",
  align: "left",
  className: ""
};

const paragraphVariants = cva("leading-relaxed", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl"
    },
    intent: {
      default: "text-dark",
      muted: "text-gray3",
      primary: "text-primary",
      danger: "text-danger"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify"
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    }
  },
  defaultVariants: {
    size: "md",
    intent: "default",
    align: "left",
    weight: "normal"
  }
});
const Paragraph = /*#__PURE__*/forwardRef(({
  size,
  intent,
  align,
  weight,
  className,
  children,
  ...props
}, ref) => /*#__PURE__*/React.createElement("p", _extends$1({
  ref: ref,
  className: cn(paragraphVariants({
    size,
    intent,
    align,
    weight
  }), className)
}, props), children));
Paragraph.displayName = "Paragraph";
Paragraph.propTypes = {
  children: propTypes.exports.node.isRequired,
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg", "xl"]),
  intent: propTypes.exports.oneOf(["default", "muted", "primary", "danger"]),
  align: propTypes.exports.oneOf(["left", "center", "right", "justify"]),
  weight: propTypes.exports.oneOf(["normal", "medium", "semibold", "bold"]),
  className: propTypes.exports.string
};
Paragraph.defaultProps = {
  size: "md",
  intent: "default",
  align: "left",
  weight: "normal",
  className: ""
};

const labelVariants = cva("inline-block font-medium transition-colors", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    },
    intent: {
      default: "text-dark",
      muted: "text-gray3",
      danger: "text-danger",
      success: "text-success"
    },
    required: {
      true: "after:content-['*'] after:ml-0.5 after:text-danger",
      false: ""
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    size: "sm",
    intent: "default",
    required: false,
    disabled: false
  }
});
const Label = /*#__PURE__*/forwardRef(({
  htmlFor,
  size,
  intent,
  required,
  disabled,
  className,
  children,
  ...props
}, ref) => /*#__PURE__*/React.createElement("label", _extends$1({
  ref: ref,
  htmlFor: htmlFor,
  className: cn(labelVariants({
    size,
    intent,
    required,
    disabled
  }), className)
}, props), children));
Label.displayName = "Label";
Label.propTypes = {
  children: propTypes.exports.node.isRequired,
  htmlFor: propTypes.exports.string,
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg"]),
  intent: propTypes.exports.oneOf(["default", "muted", "danger", "success"]),
  required: propTypes.exports.bool,
  disabled: propTypes.exports.bool,
  className: propTypes.exports.string
};
Label.defaultProps = {
  size: "sm",
  intent: "default",
  required: false,
  disabled: false,
  className: ""
};

const linkVariants = cva("inline-flex items-center gap-1 transition-colors underline-offset-4 hover:underline active:opacity-80", {
  variants: {
    variant: {
      default: "text-dark hover:text-primary",
      primary: "text-primary hover:text-darkBlue",
      muted: "text-gray3 hover:text-dark",
      danger: "text-danger hover:text-[#c32020]",
      ghost: "text-dark no-underline hover:text-primary hover:underline"
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    weight: "medium"
  }
});
const Link = /*#__PURE__*/forwardRef(({
  href,
  variant,
  size,
  weight,
  external,
  disabled,
  className,
  children,
  ...props
}, ref) => {
  const externalProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};
  if (disabled) {
    return /*#__PURE__*/React.createElement("span", _extends$1({
      ref: ref,
      role: "link",
      "aria-disabled": "true",
      className: cn(linkVariants({
        variant,
        size,
        weight
      }), disabledStyles, "pointer-events-none", className)
    }, props), children);
  }
  return /*#__PURE__*/React.createElement("a", _extends$1({
    ref: ref,
    href: href,
    className: cn(linkVariants({
      variant,
      size,
      weight
    }), focusRing, className)
  }, externalProps, props), children);
});
Link.displayName = "Link";
Link.propTypes = {
  children: propTypes.exports.node.isRequired,
  href: propTypes.exports.string,
  variant: propTypes.exports.oneOf(["default", "primary", "muted", "danger", "ghost"]),
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg"]),
  weight: propTypes.exports.oneOf(["normal", "medium", "semibold", "bold"]),
  external: propTypes.exports.bool,
  disabled: propTypes.exports.bool,
  className: propTypes.exports.string
};
Link.defaultProps = {
  href: "#",
  variant: "primary",
  size: "md",
  weight: "medium",
  external: false,
  disabled: false,
  className: ""
};

const codeVariants = cva("font-mono", {
  variants: {
    variant: {
      inline: "inline rounded px-1.5 py-0.5 text-sm bg-gray1 text-dark",
      block: "block rounded-lg p-4 text-sm bg-dark text-white overflow-x-auto"
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base"
    },
    intent: {
      default: "",
      primary: "text-primary",
      danger: "text-danger",
      success: "text-success"
    }
  },
  compoundVariants: [{
    variant: "block",
    intent: "default",
    className: "text-gray1"
  }],
  defaultVariants: {
    variant: "inline",
    size: "sm",
    intent: "default"
  }
});
const Code = /*#__PURE__*/forwardRef(({
  as,
  variant,
  size,
  intent,
  className,
  children,
  ...props
}, ref) => {
  const Tag = variant === "block" ? "pre" : "code";
  variant === "block" ? "code" : React.Fragment;
  const content = variant === "block" ? /*#__PURE__*/React.createElement("code", {
    className: "font-mono"
  }, children) : children;
  return /*#__PURE__*/React.createElement(Tag, _extends$1({
    ref: ref,
    className: cn(codeVariants({
      variant,
      size,
      intent
    }), className)
  }, props), content);
});
Code.displayName = "Code";
Code.propTypes = {
  children: propTypes.exports.node.isRequired,
  variant: propTypes.exports.oneOf(["inline", "block"]),
  size: propTypes.exports.oneOf(["xs", "sm", "md"]),
  intent: propTypes.exports.oneOf(["default", "primary", "danger", "success"]),
  className: propTypes.exports.string
};
Code.defaultProps = {
  variant: "inline",
  size: "sm",
  intent: "default",
  className: ""
};

const blockquoteVariants = cva("border-l-4 pl-4 italic", {
  variants: {
    intent: {
      default: "border-gray2 text-gray4",
      primary: "border-primary text-primary",
      muted: "border-gray1 text-gray3 bg-gray1/50 py-2 pr-4 rounded-r-lg"
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }
  },
  defaultVariants: {
    intent: "default",
    size: "md"
  }
});
const Blockquote = /*#__PURE__*/forwardRef(({
  intent,
  size,
  cite,
  className,
  children,
  ...props
}, ref) => /*#__PURE__*/React.createElement("blockquote", _extends$1({
  ref: ref,
  cite: cite,
  className: cn(blockquoteVariants({
    intent,
    size
  }), className)
}, props), children));
Blockquote.displayName = "Blockquote";
Blockquote.propTypes = {
  children: propTypes.exports.node.isRequired,
  intent: propTypes.exports.oneOf(["default", "primary", "muted"]),
  size: propTypes.exports.oneOf(["sm", "md", "lg"]),
  cite: propTypes.exports.string,
  className: propTypes.exports.string
};
Blockquote.defaultProps = {
  intent: "default",
  size: "md",
  className: ""
};

const captionVariants = cva("block leading-snug", {
  variants: {
    size: {
      xs: "text-[10px]",
      sm: "text-xs",
      md: "text-sm"
    },
    intent: {
      default: "text-gray3",
      muted: "text-gray2",
      danger: "text-danger",
      success: "text-success",
      primary: "text-primary"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    size: "sm",
    intent: "default",
    align: "left"
  }
});
const Caption = /*#__PURE__*/forwardRef(({
  as,
  size,
  intent,
  align,
  className,
  children,
  ...props
}, ref) => {
  const Tag = as || "span";
  return /*#__PURE__*/React.createElement(Tag, _extends$1({
    ref: ref,
    className: cn(captionVariants({
      size,
      intent,
      align
    }), className)
  }, props), children);
});
Caption.displayName = "Caption";
Caption.propTypes = {
  children: propTypes.exports.node.isRequired,
  as: propTypes.exports.oneOf(["span", "figcaption", "p"]),
  size: propTypes.exports.oneOf(["xs", "sm", "md"]),
  intent: propTypes.exports.oneOf(["default", "muted", "danger", "success", "primary"]),
  align: propTypes.exports.oneOf(["left", "center", "right"]),
  className: propTypes.exports.string
};
Caption.defaultProps = {
  as: "span",
  size: "sm",
  intent: "default",
  align: "left",
  className: ""
};

const fabVariants = cva(["inline-flex items-center justify-center", "rounded-full shadow-lg", "transition-all duration-200", "hover:shadow-xl hover:scale-105", "active:scale-95", focusRing, disabledStyles].join(" "), {
  variants: {
    variant: {
      primary: "bg-primary text-white hover:bg-darkBlue",
      secondary: "bg-white text-dark hover:bg-gray1 border border-gray2",
      destructive: "bg-danger text-white hover:bg-[#c32020]",
      gradient: "bg-gradient-to-r from-primary to-indigo text-white"
    },
    size: {
      sm: "h-10 w-10",
      md: "h-14 w-14",
      lg: "h-16 w-16"
    },
    position: {
      static: "",
      fixed: "fixed bottom-6 right-6 z-50"
    },
    elevation: {
      sm: "shadow-md",
      md: "shadow-lg",
      lg: "shadow-xl"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    position: "static",
    elevation: "md"
  }
});
const FloatingActionButton = /*#__PURE__*/forwardRef(({
  children,
  variant,
  size,
  position,
  elevation,
  disabled,
  loading,
  extended,
  label,
  className,
  "aria-label": ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("button", _extends$1({
  ref: ref,
  type: "button",
  disabled: disabled || loading,
  "aria-label": ariaLabel || label,
  "aria-busy": loading || undefined,
  className: cn(fabVariants({
    variant,
    size,
    position,
    elevation
  }), extended && "w-auto rounded-full px-5 gap-2", loading && "cursor-wait opacity-80", className)
}, props), loading ? /*#__PURE__*/React.createElement("span", {
  className: "h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent",
  "aria-hidden": "true"
}) : children, extended && label && /*#__PURE__*/React.createElement("span", {
  className: "text-sm font-semibold"
}, label)));
FloatingActionButton.displayName = "FloatingActionButton";
FloatingActionButton.propTypes = {
  children: propTypes.exports.node.isRequired,
  variant: propTypes.exports.oneOf(["primary", "secondary", "destructive", "gradient"]),
  size: propTypes.exports.oneOf(["sm", "md", "lg"]),
  position: propTypes.exports.oneOf(["static", "fixed"]),
  elevation: propTypes.exports.oneOf(["sm", "md", "lg"]),
  disabled: propTypes.exports.bool,
  loading: propTypes.exports.bool,
  extended: propTypes.exports.bool,
  label: propTypes.exports.string,
  className: propTypes.exports.string
};
FloatingActionButton.defaultProps = {
  variant: "primary",
  size: "md",
  position: "static",
  elevation: "md",
  disabled: false,
  loading: false,
  extended: false,
  className: ""
};

const inputVariants = cva(["w-full text-dark placeholder:text-gray2", "transition-colors duration-200", focusRing, disabledStyles].join(" "), {
  variants: {
    variant: {
      default: "border border-gray2 bg-white hover:border-gray3",
      filled: "border border-transparent bg-gray1 hover:bg-gray1/80",
      flushed: "border-0 border-b-2 border-gray2 bg-transparent rounded-none hover:border-gray3 px-0",
      outline: "border-2 border-gray2 bg-white hover:border-primary/50"
    },
    size: {
      xs: "h-8 px-2.5 text-xs rounded-md",
      sm: "h-9 px-3 text-sm rounded-md",
      md: "h-10 px-4 text-sm rounded-lg",
      lg: "h-12 px-5 text-base rounded-lg",
      xl: "h-14 px-6 text-lg rounded-xl"
    },
    fullWidth: {
      true: "w-full",
      false: "w-auto"
    },
    error: {
      true: errorRing,
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    fullWidth: true,
    error: false
  }
});
const Input = /*#__PURE__*/forwardRef(({
  variant,
  size,
  fullWidth,
  error,
  className,
  type = "text",
  ...props
}, ref) => /*#__PURE__*/React.createElement("input", _extends$1({
  ref: ref,
  type: type,
  "aria-invalid": error || undefined,
  className: cn(inputVariants({
    variant,
    size,
    fullWidth,
    error
  }), className)
}, props)));
Input.displayName = "Input";
Input.propTypes = {
  variant: propTypes.exports.oneOf(["default", "filled", "flushed", "outline"]),
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg", "xl"]),
  fullWidth: propTypes.exports.bool,
  error: propTypes.exports.bool,
  className: propTypes.exports.string,
  type: propTypes.exports.string
};
Input.defaultProps = {
  variant: "default",
  size: "md",
  fullWidth: true,
  error: false,
  className: ""
};

const radioVariants = cva(["peer shrink-0 appearance-none", "border-2 border-gray2 bg-white rounded-full", "checked:border-primary", "transition-colors duration-200", focusRing, disabledStyles].join(" "), {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      small: "h-4 w-4",
      medium: "h-5 w-5",
      large: "h-6 w-6"
    },
    error: {
      true: "border-danger checked:border-danger",
      false: ""
    }
  },
  defaultVariants: {
    size: "md",
    error: false
  }
});
const Radio = /*#__PURE__*/forwardRef(({
  name,
  label,
  value,
  onChange,
  checked,
  defaultChecked,
  fullWidth,
  required,
  disabled,
  labelProps = {},
  inputProps = {},
  id,
  size,
  error,
  className,
  ...props
}, ref) => {
  const {
    labelClassName,
    ...otherLabelProps
  } = labelProps;
  const {
    inputClassName,
    ...otherInputProps
  } = inputProps;
  const inputId = id || `radio-${name}-${value}`;
  const width = fullWidth ? "w-full" : "w-fit";
  const textColor = error ? "text-danger" : "text-dark";
  return /*#__PURE__*/React.createElement("div", {
    className: cn("flex items-center gap-2", width, className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative inline-flex items-center"
  }, /*#__PURE__*/React.createElement("input", _extends$1({
    ref: ref,
    type: "radio",
    name: name,
    id: inputId,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    required: required,
    disabled: disabled,
    "aria-invalid": error || undefined,
    className: cn(radioVariants({
      size,
      error
    }), inputClassName)
  }, otherInputProps, props)), /*#__PURE__*/React.createElement("span", {
    className: "pointer-events-none absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-0 peer-checked:opacity-100",
    "aria-hidden": "true"
  })), label && /*#__PURE__*/React.createElement("label", _extends$1({
    htmlFor: inputId,
    className: cn("text-sm cursor-pointer select-none", textColor, disabled && "opacity-50 cursor-not-allowed", labelClassName)
  }, otherLabelProps), label, required && /*#__PURE__*/React.createElement("span", {
    className: "text-danger ml-0.5"
  }, "*")));
});
Radio.displayName = "Radio";
Radio.propTypes = {
  name: propTypes.exports.string,
  label: propTypes.exports.string,
  value: propTypes.exports.any,
  onChange: propTypes.exports.func,
  checked: propTypes.exports.bool,
  defaultChecked: propTypes.exports.bool,
  fullWidth: propTypes.exports.bool,
  required: propTypes.exports.bool,
  disabled: propTypes.exports.bool,
  labelProps: propTypes.exports.object,
  inputProps: propTypes.exports.object,
  id: propTypes.exports.string,
  size: propTypes.exports.oneOf(["sm", "md", "lg", "small", "medium", "large"]),
  error: propTypes.exports.bool,
  className: propTypes.exports.string
};
Radio.defaultProps = {
  name: "",
  labelProps: {},
  inputProps: {},
  error: false,
  size: "md",
  className: ""
};

const sliderVariants = cva(["w-full appearance-none cursor-pointer", "bg-gray2 rounded-full", "transition-colors duration-200", focusRing, disabledStyles, "[&::-webkit-slider-thumb]:appearance-none", "[&::-webkit-slider-thumb]:rounded-full", "[&::-webkit-slider-thumb]:bg-primary", "[&::-webkit-slider-thumb]:cursor-pointer", "[&::-webkit-slider-thumb]:shadow-md", "[&::-webkit-slider-thumb]:transition-transform", "[&::-webkit-slider-thumb]:hover:scale-110", "[&::-moz-range-thumb]:rounded-full", "[&::-moz-range-thumb]:bg-primary", "[&::-moz-range-thumb]:border-0", "[&::-moz-range-thumb]:cursor-pointer"].join(" "), {
  variants: {
    size: {
      sm: "h-1 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3",
      md: "h-1.5 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4",
      lg: "h-2 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5"
    },
    intent: {
      default: "[&::-webkit-slider-thumb]:bg-primary [&::-moz-range-thumb]:bg-primary",
      success: "[&::-webkit-slider-thumb]:bg-success [&::-moz-range-thumb]:bg-success",
      danger: "[&::-webkit-slider-thumb]:bg-danger [&::-moz-range-thumb]:bg-danger"
    },
    error: {
      true: "bg-danger/20",
      false: ""
    }
  },
  defaultVariants: {
    size: "md",
    intent: "default",
    error: false
  }
});
const Slider = /*#__PURE__*/forwardRef(({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  size,
  intent,
  error,
  disabled,
  className,
  "aria-label": ariaLabel,
  ...props
}, ref) => {
  const handleChange = useCallback(e => onChange?.(Number(e.target.value)), [onChange]);
  return /*#__PURE__*/React.createElement("input", _extends$1({
    ref: ref,
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    "aria-label": ariaLabel,
    "aria-invalid": error || undefined,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value ?? defaultValue,
    onChange: handleChange,
    className: cn(sliderVariants({
      size,
      intent,
      error
    }), className)
  }, props));
});
Slider.displayName = "Slider";
Slider.propTypes = {
  min: propTypes.exports.number,
  max: propTypes.exports.number,
  step: propTypes.exports.number,
  value: propTypes.exports.number,
  defaultValue: propTypes.exports.number,
  onChange: propTypes.exports.func,
  size: propTypes.exports.oneOf(["sm", "md", "lg"]),
  intent: propTypes.exports.oneOf(["default", "success", "danger"]),
  error: propTypes.exports.bool,
  disabled: propTypes.exports.bool,
  className: propTypes.exports.string
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  size: "md",
  intent: "default",
  error: false,
  disabled: false,
  className: ""
};

const otpSlotVariants = cva(["text-center font-semibold text-dark", "border-2 border-gray2 bg-white", "transition-all duration-200", focusRing, disabledStyles].join(" "), {
  variants: {
    size: {
      sm: "h-9 w-9 text-sm rounded-md",
      md: "h-11 w-11 text-base rounded-lg",
      lg: "h-14 w-14 text-lg rounded-xl"
    },
    error: {
      true: errorRing,
      false: "focus:border-primary"
    },
    filled: {
      true: "border-primary bg-primaryLight/30",
      false: ""
    }
  },
  defaultVariants: {
    size: "md",
    error: false,
    filled: false
  }
});
const OTPInput = /*#__PURE__*/forwardRef(({
  length = 6,
  value = "",
  onChange,
  onComplete,
  size,
  error,
  disabled,
  className,
  autoFocus,
  ...props
}, ref) => {
  const inputsRef = useRef([]);
  const [internalValue, setInternalValue] = useState(value.split("").slice(0, length));
  useEffect(() => {
    setInternalValue(value.split("").slice(0, length));
  }, [value, length]);
  const updateValue = useCallback(newChars => {
    const joined = newChars.join("");
    onChange?.(joined);
    if (joined.length === length) {
      onComplete?.(joined);
    }
  }, [onChange, onComplete, length]);
  const handleChange = (index, e) => {
    const char = e.target.value.replace(/[^0-9a-zA-Z]/g, "").slice(-1);
    const next = [...internalValue];
    next[index] = char;
    while (next.length < length) next.push("");
    setInternalValue(next);
    updateValue(next);
    if (char && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !internalValue[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };
  const handlePaste = e => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/[^0-9a-zA-Z]/g, "").slice(0, length).split("");
    const next = Array.from({
      length
    }, (_, i) => pasted[i] || "");
    setInternalValue(next);
    updateValue(next);
    const focusIndex = Math.min(pasted.length, length - 1);
    inputsRef.current[focusIndex]?.focus();
  };
  return /*#__PURE__*/React.createElement("div", _extends$1({
    ref: ref,
    role: "group",
    "aria-label": "Code de v\xE9rification",
    className: cn("flex items-center gap-2", className)
  }, props), Array.from({
    length
  }).map((_, index) => /*#__PURE__*/React.createElement("input", {
    key: index,
    ref: el => {
      inputsRef.current[index] = el;
    },
    type: "text",
    inputMode: "numeric",
    autoComplete: "one-time-code",
    maxLength: 1,
    value: internalValue[index] || "",
    disabled: disabled,
    autoFocus: autoFocus && index === 0,
    "aria-invalid": error || undefined,
    "aria-label": `Caractère ${index + 1} sur ${length}`,
    onChange: e => handleChange(index, e),
    onKeyDown: e => handleKeyDown(index, e),
    onPaste: handlePaste,
    className: cn(otpSlotVariants({
      size,
      error,
      filled: Boolean(internalValue[index])
    }))
  })));
});
OTPInput.displayName = "OTPInput";
OTPInput.propTypes = {
  length: propTypes.exports.number,
  value: propTypes.exports.string,
  onChange: propTypes.exports.func,
  onComplete: propTypes.exports.func,
  size: propTypes.exports.oneOf(["sm", "md", "lg"]),
  error: propTypes.exports.bool,
  disabled: propTypes.exports.bool,
  autoFocus: propTypes.exports.bool,
  className: propTypes.exports.string
};
OTPInput.defaultProps = {
  length: 6,
  value: "",
  size: "md",
  error: false,
  disabled: false,
  autoFocus: false,
  className: ""
};

const selectTriggerVariants = cva(["inline-flex items-center justify-between gap-2", "text-dark cursor-pointer", "transition-colors duration-200", focusRing, disabledStyles].join(" "), {
  variants: {
    variant: {
      default: "border border-gray2 bg-white hover:border-gray3",
      filled: "border border-transparent bg-gray1 hover:bg-gray1/80",
      outline: "border-2 border-gray2 bg-white hover:border-primary/50"
    },
    size: {
      xs: "h-8 px-2.5 text-xs rounded-md",
      sm: "h-9 px-3 text-sm rounded-md",
      md: "h-10 px-4 text-sm rounded-lg",
      lg: "h-12 px-5 text-base rounded-lg"
    },
    fullWidth: {
      true: "w-full",
      false: "w-auto min-w-[160px]"
    },
    error: {
      true: errorRing,
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    fullWidth: true,
    error: false
  }
});
const ChevronIcon = () => /*#__PURE__*/React.createElement("svg", {
  className: "h-4 w-4 shrink-0 text-gray3",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  clipRule: "evenodd"
}));
const SelectTrigger = /*#__PURE__*/forwardRef(({
  children,
  placeholder = "Sélectionner...",
  variant,
  size,
  fullWidth,
  error,
  disabled,
  open,
  className,
  ...props
}, ref) => /*#__PURE__*/React.createElement("button", _extends$1({
  ref: ref,
  type: "button",
  role: "combobox",
  "aria-expanded": open,
  "aria-haspopup": "listbox",
  disabled: disabled,
  "aria-invalid": error || undefined,
  className: cn(selectTriggerVariants({
    variant,
    size,
    fullWidth,
    error
  }), className)
}, props), /*#__PURE__*/React.createElement("span", {
  className: cn("truncate", !children && "text-gray2")
}, children || placeholder), /*#__PURE__*/React.createElement(ChevronIcon, null)));
SelectTrigger.displayName = "SelectTrigger";
SelectTrigger.propTypes = {
  children: propTypes.exports.node,
  placeholder: propTypes.exports.string,
  variant: propTypes.exports.oneOf(["default", "filled", "outline"]),
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg"]),
  fullWidth: propTypes.exports.bool,
  error: propTypes.exports.bool,
  disabled: propTypes.exports.bool,
  open: propTypes.exports.bool,
  className: propTypes.exports.string
};
SelectTrigger.defaultProps = {
  placeholder: "Sélectionner...",
  variant: "default",
  size: "md",
  fullWidth: true,
  error: false,
  disabled: false,
  open: false,
  className: ""
};

const optionVariants = cva(["flex items-center gap-2 px-3 py-2 text-sm cursor-pointer", "transition-colors duration-150", "hover:bg-gray1 active:bg-gray2/20", focusRing].join(" "), {
  variants: {
    selected: {
      true: "bg-primaryLight text-primary font-medium",
      false: "text-dark"
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
      false: ""
    }
  },
  defaultVariants: {
    selected: false,
    disabled: false
  }
});
const Option = /*#__PURE__*/forwardRef(({
  children,
  value,
  selected,
  disabled,
  className,
  onSelect,
  ...props
}, ref) => /*#__PURE__*/React.createElement("li", _extends$1({
  ref: ref,
  role: "option",
  "aria-selected": selected,
  "aria-disabled": disabled || undefined,
  "data-value": value,
  tabIndex: disabled ? -1 : 0,
  onClick: () => !disabled && onSelect?.(value),
  onKeyDown: e => {
    if (!disabled && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onSelect?.(value);
    }
  },
  className: cn(optionVariants({
    selected,
    disabled
  }), className)
}, props), selected && /*#__PURE__*/React.createElement("svg", {
  className: "h-4 w-4 shrink-0",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  clipRule: "evenodd"
})), children));
Option.displayName = "Option";
Option.propTypes = {
  children: propTypes.exports.node.isRequired,
  value: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number]).isRequired,
  selected: propTypes.exports.bool,
  disabled: propTypes.exports.bool,
  className: propTypes.exports.string,
  onSelect: propTypes.exports.func
};
Option.defaultProps = {
  selected: false,
  disabled: false,
  className: ""
};

const comboboxTriggerVariants = cva(["inline-flex items-center gap-2", "text-dark cursor-text", "transition-colors duration-200", focusRing, disabledStyles].join(" "), {
  variants: {
    variant: {
      default: "border border-gray2 bg-white hover:border-gray3",
      filled: "border border-transparent bg-gray1 hover:bg-gray1/80",
      outline: "border-2 border-gray2 bg-white hover:border-primary/50"
    },
    size: {
      sm: "h-9 px-3 text-sm rounded-md",
      md: "h-10 px-4 text-sm rounded-lg",
      lg: "h-12 px-5 text-base rounded-lg"
    },
    fullWidth: {
      true: "w-full",
      false: "w-auto min-w-[200px]"
    },
    error: {
      true: errorRing,
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    fullWidth: true,
    error: false
  }
});
const SearchIcon = () => /*#__PURE__*/React.createElement("svg", {
  className: "h-4 w-4 shrink-0 text-gray3",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
  clipRule: "evenodd"
}));
const ComboboxTrigger = /*#__PURE__*/forwardRef(({
  value,
  placeholder = "Rechercher...",
  onChange,
  variant,
  size,
  fullWidth,
  error,
  disabled,
  open,
  showSearchIcon = true,
  className,
  ...props
}, ref) => /*#__PURE__*/React.createElement("div", {
  className: cn(comboboxTriggerVariants({
    variant,
    size,
    fullWidth,
    error
  }), className)
}, showSearchIcon && /*#__PURE__*/React.createElement(SearchIcon, null), /*#__PURE__*/React.createElement("input", _extends$1({
  ref: ref,
  type: "text",
  role: "combobox",
  "aria-expanded": open,
  "aria-autocomplete": "list",
  "aria-invalid": error || undefined,
  value: value,
  placeholder: placeholder,
  disabled: disabled,
  onChange: onChange,
  className: "flex-1 bg-transparent outline-none placeholder:text-gray2 min-w-0"
}, props))));
ComboboxTrigger.displayName = "ComboboxTrigger";
ComboboxTrigger.propTypes = {
  value: propTypes.exports.string,
  placeholder: propTypes.exports.string,
  onChange: propTypes.exports.func,
  variant: propTypes.exports.oneOf(["default", "filled", "outline"]),
  size: propTypes.exports.oneOf(["sm", "md", "lg"]),
  fullWidth: propTypes.exports.bool,
  error: propTypes.exports.bool,
  disabled: propTypes.exports.bool,
  open: propTypes.exports.bool,
  showSearchIcon: propTypes.exports.bool,
  className: propTypes.exports.string
};
ComboboxTrigger.defaultProps = {
  placeholder: "Rechercher...",
  variant: "default",
  size: "md",
  fullWidth: true,
  error: false,
  disabled: false,
  open: false,
  showSearchIcon: true,
  className: ""
};

const badgeVariants = cva("inline-flex items-center justify-center font-semibold whitespace-nowrap transition-colors", {
  variants: {
    variant: {
      success: "bg-successLight text-success",
      warning: "bg-warningLight text-warning",
      danger: "bg-dangerLight text-danger",
      info: "bg-infoLight text-info",
      neutral: "bg-gray1 text-gray4",
      primary: "bg-primaryLight text-primary",
      // Rétrocompatibilité via intent/type
      default: "bg-defaultLight text-dark"
    },
    size: {
      xs: "text-[10px] px-1.5 py-0.5 rounded",
      sm: "text-xs px-2 py-0.5 rounded-md",
      md: "text-sm px-3 py-1 rounded-lg",
      lg: "text-base px-4 py-1.5 rounded-lg"
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    variant: "neutral",
    size: "md",
    rounded: "lg"
  }
});

/** Mappe l'ancienne prop `type` vers `variant`. */
function resolveVariant(variant, type) {
  if (variant) return variant;
  const typeMap = {
    default: "neutral",
    primary: "primary",
    info: "info",
    danger: "danger",
    success: "success"
  };
  return typeMap[type] || "neutral";
}
const Badge = /*#__PURE__*/forwardRef(({
  children,
  variant,
  type,
  size,
  rounded,
  className,
  ...props
}, ref) => /*#__PURE__*/React.createElement("span", _extends$1({
  ref: ref,
  className: cn(badgeVariants({
    variant: resolveVariant(variant, type),
    size,
    rounded
  }), className)
}, props), children));
Badge.displayName = "Badge";
Badge.propTypes = {
  children: propTypes.exports.node.isRequired,
  variant: propTypes.exports.oneOf(["success", "warning", "danger", "info", "neutral", "primary", "default"]),
  type: propTypes.exports.oneOf(["default", "primary", "info", "danger", "success"]),
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg"]),
  rounded: propTypes.exports.oneOf(["none", "sm", "md", "lg", "full"]),
  className: propTypes.exports.string
};
Badge.defaultProps = {
  variant: "neutral",
  size: "md",
  rounded: "lg",
  className: ""
};

const tagVariants = cva(["inline-flex items-center gap-1.5 font-medium", "transition-colors duration-200", focusRing].join(" "), {
  variants: {
    variant: {
      default: "bg-gray1 text-dark hover:bg-gray2/30",
      primary: "bg-primaryLight text-primary hover:bg-primary/10",
      success: "bg-successLight text-success hover:bg-success/10",
      warning: "bg-warningLight text-warning hover:bg-warning/10",
      danger: "bg-dangerLight text-danger hover:bg-danger/10",
      outline: "border border-gray2 bg-white text-dark hover:bg-gray1"
    },
    size: {
      sm: "text-xs px-2 py-0.5 rounded-md",
      md: "text-sm px-2.5 py-1 rounded-md",
      lg: "text-base px-3 py-1.5 rounded-lg"
    },
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full"
    },
    removable: {
      true: "pr-1",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    rounded: "md",
    removable: false
  }
});
const Tag = /*#__PURE__*/forwardRef(({
  children,
  variant,
  size,
  rounded,
  removable,
  onRemove,
  disabled,
  className,
  ...props
}, ref) => /*#__PURE__*/React.createElement("span", _extends$1({
  ref: ref,
  className: cn(tagVariants({
    variant,
    size,
    rounded,
    removable
  }), disabled && "opacity-50 pointer-events-none", className)
}, props), children, removable && /*#__PURE__*/React.createElement("button", {
  type: "button",
  disabled: disabled,
  "aria-label": "Supprimer le tag",
  onClick: onRemove,
  className: "inline-flex items-center justify-center rounded-full p-0.5 hover:bg-black/10 transition-colors"
}, /*#__PURE__*/React.createElement("svg", {
  className: "h-3 w-3",
  viewBox: "0 0 12 12",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 3l6 6M9 3L3 9",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round"
})))));
Tag.displayName = "Tag";
Tag.propTypes = {
  children: propTypes.exports.node.isRequired,
  variant: propTypes.exports.oneOf(["default", "primary", "success", "warning", "danger", "outline"]),
  size: propTypes.exports.oneOf(["sm", "md", "lg"]),
  rounded: propTypes.exports.oneOf(["sm", "md", "lg", "full"]),
  removable: propTypes.exports.bool,
  onRemove: propTypes.exports.func,
  disabled: propTypes.exports.bool,
  className: propTypes.exports.string
};
Tag.defaultProps = {
  variant: "default",
  size: "md",
  rounded: "md",
  removable: false,
  disabled: false,
  className: ""
};

const tooltipVariants = cva("absolute z-50 px-2.5 py-1.5 text-xs font-medium rounded-md shadow-md pointer-events-none whitespace-nowrap", {
  variants: {
    intent: {
      default: "bg-dark text-white",
      primary: "bg-primary text-white",
      danger: "bg-danger text-white"
    },
    position: {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2"
    }
  },
  defaultVariants: {
    intent: "default",
    position: "top"
  }
});
const Tooltip = /*#__PURE__*/forwardRef(({
  content,
  children,
  intent,
  position,
  delay = 200,
  disabled,
  className,
  ...props
}, ref) => {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();
  let timeoutId = null;
  const show = () => {
    if (disabled) return;
    timeoutId = setTimeout(() => setVisible(true), delay);
  };
  const hide = () => {
    clearTimeout(timeoutId);
    setVisible(false);
  };
  return /*#__PURE__*/React.createElement("span", _extends$1({
    ref: ref,
    className: "relative inline-flex",
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide
  }, props), /*#__PURE__*/React.createElement("span", {
    "aria-describedby": visible ? tooltipId : undefined
  }, children), visible && content && /*#__PURE__*/React.createElement("span", {
    id: tooltipId,
    role: "tooltip",
    className: cn(tooltipVariants({
      intent,
      position
    }), className)
  }, content));
});
Tooltip.displayName = "Tooltip";
Tooltip.propTypes = {
  content: propTypes.exports.node.isRequired,
  children: propTypes.exports.node.isRequired,
  intent: propTypes.exports.oneOf(["default", "primary", "danger"]),
  position: propTypes.exports.oneOf(["top", "bottom", "left", "right"]),
  delay: propTypes.exports.number,
  disabled: propTypes.exports.bool,
  className: propTypes.exports.string
};
Tooltip.defaultProps = {
  intent: "default",
  position: "top",
  delay: 200,
  disabled: false,
  className: ""
};

const spinnerVariants = cva("animate-spin rounded-full border-current border-t-transparent", {
  variants: {
    size: {
      xs: "h-3 w-3 border",
      sm: "h-4 w-4 border-2",
      md: "h-6 w-6 border-2",
      lg: "h-8 w-8 border-[3px]",
      xl: "h-12 w-12 border-4"
    },
    intent: {
      default: "text-primary",
      primary: "text-primary",
      white: "text-white",
      muted: "text-gray2",
      danger: "text-danger",
      success: "text-success"
    }
  },
  defaultVariants: {
    size: "md",
    intent: "default"
  }
});
const Spinner = /*#__PURE__*/forwardRef(({
  size,
  intent,
  label = "Chargement...",
  className,
  ...props
}, ref) => /*#__PURE__*/React.createElement("span", _extends$1({
  ref: ref,
  role: "status",
  "aria-label": label,
  className: cn("inline-flex items-center justify-center", className)
}, props), /*#__PURE__*/React.createElement("span", {
  className: cn(spinnerVariants({
    size,
    intent
  })),
  "aria-hidden": "true"
}), /*#__PURE__*/React.createElement("span", {
  className: "sr-only"
}, label)));
Spinner.displayName = "Spinner";
Spinner.propTypes = {
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg", "xl"]),
  intent: propTypes.exports.oneOf(["default", "primary", "white", "muted", "danger", "success"]),
  label: propTypes.exports.string,
  className: propTypes.exports.string
};
Spinner.defaultProps = {
  size: "md",
  intent: "default",
  label: "Chargement...",
  className: ""
};

const progressBarVariants = cva("w-full overflow-hidden bg-gray1", {
  variants: {
    size: {
      xs: "h-1 rounded-full",
      sm: "h-1.5 rounded-full",
      md: "h-2 rounded-full",
      lg: "h-3 rounded-full"
    },
    intent: {
      default: "",
      primary: "",
      success: "",
      warning: "",
      danger: ""
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    size: "md",
    intent: "primary",
    rounded: "full"
  }
});
const fillVariants = cva("h-full transition-all duration-300 ease-out", {
  variants: {
    intent: {
      default: "bg-gray3",
      primary: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-danger"
    },
    indeterminate: {
      true: "w-1/3 animate-[progress-indeterminate_1.5s_ease-in-out_infinite]",
      false: ""
    }
  },
  defaultVariants: {
    intent: "primary",
    indeterminate: false
  }
});
const ProgressBar = /*#__PURE__*/forwardRef(({
  value = 0,
  max = 100,
  size,
  intent,
  rounded,
  indeterminate,
  showLabel,
  className,
  ...props
}, ref) => {
  const percentage = Math.min(Math.max(value / max * 100, 0), 100);
  return /*#__PURE__*/React.createElement("div", {
    className: cn("w-full", className)
  }, showLabel && !indeterminate && /*#__PURE__*/React.createElement("div", {
    className: "mb-1 flex justify-between text-xs text-gray3"
  }, /*#__PURE__*/React.createElement("span", null, "Progression"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, Math.round(percentage), "%")), /*#__PURE__*/React.createElement("div", _extends$1({
    ref: ref,
    role: "progressbar",
    "aria-valuenow": indeterminate ? undefined : value,
    "aria-valuemin": 0,
    "aria-valuemax": max,
    "aria-label": "Barre de progression",
    className: cn(progressBarVariants({
      size,
      intent,
      rounded
    }))
  }, props), /*#__PURE__*/React.createElement("div", {
    className: cn(fillVariants({
      intent,
      indeterminate
    }), !indeterminate && "rounded-inherit"),
    style: indeterminate ? undefined : {
      width: `${percentage}%`
    }
  })));
});
ProgressBar.displayName = "ProgressBar";
ProgressBar.propTypes = {
  value: propTypes.exports.number,
  max: propTypes.exports.number,
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg"]),
  intent: propTypes.exports.oneOf(["default", "primary", "success", "warning", "danger"]),
  rounded: propTypes.exports.oneOf(["none", "sm", "md", "full"]),
  indeterminate: propTypes.exports.bool,
  showLabel: propTypes.exports.bool,
  className: propTypes.exports.string
};
ProgressBar.defaultProps = {
  value: 0,
  max: 100,
  size: "md",
  intent: "primary",
  rounded: "full",
  indeterminate: false,
  showLabel: false,
  className: ""
};

const skeletonVariants = cva("animate-pulse bg-gray1", {
  variants: {
    variant: {
      text: "h-4 rounded",
      circular: "rounded-full",
      rectangular: "rounded-none",
      rounded: "rounded-lg"
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: ""
    }
  },
  compoundVariants: [{
    variant: "text",
    size: "xs",
    className: "h-3"
  }, {
    variant: "text",
    size: "sm",
    className: "h-3.5"
  }, {
    variant: "text",
    size: "md",
    className: "h-4"
  }, {
    variant: "text",
    size: "lg",
    className: "h-5"
  }, {
    variant: "circular",
    size: "xs",
    className: "h-6 w-6"
  }, {
    variant: "circular",
    size: "sm",
    className: "h-8 w-8"
  }, {
    variant: "circular",
    size: "md",
    className: "h-10 w-10"
  }, {
    variant: "circular",
    size: "lg",
    className: "h-12 w-12"
  }],
  defaultVariants: {
    variant: "rounded",
    size: "md"
  }
});
const Skeleton = /*#__PURE__*/forwardRef(({
  variant,
  size,
  width,
  height,
  className,
  ...props
}, ref) => /*#__PURE__*/React.createElement("div", _extends$1({
  ref: ref,
  "aria-hidden": "true",
  "aria-busy": "true",
  className: cn(skeletonVariants({
    variant,
    size
  }), className),
  style: {
    width: width ?? (variant === "text" ? "100%" : undefined),
    height: height ?? undefined
  }
}, props)));
Skeleton.displayName = "Skeleton";
Skeleton.propTypes = {
  variant: propTypes.exports.oneOf(["text", "circular", "rectangular", "rounded"]),
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg"]),
  width: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number]),
  height: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number]),
  className: propTypes.exports.string
};
Skeleton.defaultProps = {
  variant: "rounded",
  size: "md",
  className: ""
};

const separatorVariants = cva("shrink-0 bg-gray2", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full self-stretch"
    },
    size: {
      sm: "",
      md: "",
      lg: ""
    },
    intent: {
      default: "bg-gray2",
      muted: "bg-gray1",
      primary: "bg-primary/20"
    }
  },
  compoundVariants: [{
    orientation: "horizontal",
    size: "sm",
    className: "h-px"
  }, {
    orientation: "horizontal",
    size: "md",
    className: "h-0.5"
  }, {
    orientation: "horizontal",
    size: "lg",
    className: "h-1"
  }, {
    orientation: "vertical",
    size: "sm",
    className: "w-px"
  }, {
    orientation: "vertical",
    size: "md",
    className: "w-0.5"
  }, {
    orientation: "vertical",
    size: "lg",
    className: "w-1"
  }],
  defaultVariants: {
    orientation: "horizontal",
    size: "sm",
    intent: "default"
  }
});
const Separator = /*#__PURE__*/forwardRef(({
  orientation,
  size,
  intent,
  decorative = true,
  className,
  ...props
}, ref) => /*#__PURE__*/React.createElement("div", _extends$1({
  ref: ref,
  role: decorative ? "none" : "separator",
  "aria-orientation": decorative ? undefined : orientation,
  className: cn(separatorVariants({
    orientation,
    size,
    intent
  }), className)
}, props)));
Separator.displayName = "Separator";
Separator.propTypes = {
  orientation: propTypes.exports.oneOf(["horizontal", "vertical"]),
  size: propTypes.exports.oneOf(["sm", "md", "lg"]),
  intent: propTypes.exports.oneOf(["default", "muted", "primary"]),
  decorative: propTypes.exports.bool,
  className: propTypes.exports.string
};
Separator.defaultProps = {
  orientation: "horizontal",
  size: "sm",
  intent: "default",
  decorative: true,
  className: ""
};

const dividerVariants = cva("flex items-center w-full", {
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col h-full"
    },
    intent: {
      default: "text-gray3",
      muted: "text-gray2",
      primary: "text-primary/40"
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    intent: "default"
  }
});
const lineVariants = cva("flex-1 bg-current opacity-30", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full"
    },
    thickness: {
      thin: "",
      medium: "",
      thick: ""
    }
  },
  compoundVariants: [{
    orientation: "horizontal",
    thickness: "thin",
    className: "h-px"
  }, {
    orientation: "horizontal",
    thickness: "medium",
    className: "h-0.5"
  }, {
    orientation: "horizontal",
    thickness: "thick",
    className: "h-1"
  }, {
    orientation: "vertical",
    thickness: "thin",
    className: "w-px"
  }, {
    orientation: "vertical",
    thickness: "medium",
    className: "w-0.5"
  }, {
    orientation: "vertical",
    thickness: "thick",
    className: "w-1"
  }],
  defaultVariants: {
    orientation: "horizontal",
    thickness: "thin"
  }
});
const Divider = /*#__PURE__*/forwardRef(({
  label,
  orientation,
  intent,
  thickness,
  className,
  ...props
}, ref) => {
  if (!label) {
    return /*#__PURE__*/React.createElement("div", _extends$1({
      ref: ref,
      role: "separator",
      "aria-orientation": orientation,
      className: cn(lineVariants({
        orientation,
        thickness
      }), "opacity-100 bg-gray2", className)
    }, props));
  }
  return /*#__PURE__*/React.createElement("div", _extends$1({
    ref: ref,
    role: "separator",
    "aria-orientation": orientation,
    className: cn(dividerVariants({
      orientation,
      intent
    }), "gap-3", className)
  }, props), /*#__PURE__*/React.createElement("span", {
    className: cn(lineVariants({
      orientation,
      thickness
    })),
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-medium shrink-0"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: cn(lineVariants({
      orientation,
      thickness
    })),
    "aria-hidden": "true"
  }));
});
Divider.displayName = "Divider";
Divider.propTypes = {
  label: propTypes.exports.string,
  orientation: propTypes.exports.oneOf(["horizontal", "vertical"]),
  intent: propTypes.exports.oneOf(["default", "muted", "primary"]),
  thickness: propTypes.exports.oneOf(["thin", "medium", "thick"]),
  className: propTypes.exports.string
};
Divider.defaultProps = {
  orientation: "horizontal",
  intent: "default",
  thickness: "thin",
  className: ""
};

const cardSurfaceVariants = cva("bg-white transition-shadow duration-200", {
  variants: {
    variant: {
      default: "border border-gray1",
      elevated: "shadow-md hover:shadow-lg",
      outlined: "border-2 border-gray2",
      ghost: "bg-transparent",
      filled: "bg-gray1"
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-lg",
      lg: "rounded-xl",
      xl: "rounded-2xl"
    },
    padding: {
      none: "p-0",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
      xl: "p-8"
    },
    fullWidth: {
      true: "w-full",
      false: ""
    },
    interactive: {
      true: "cursor-pointer hover:border-gray2 active:scale-[0.99]",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    rounded: "md",
    padding: "md",
    fullWidth: false,
    interactive: false
  }
});
const CardSurface = /*#__PURE__*/forwardRef(({
  as: Component = "div",
  variant,
  rounded,
  padding,
  fullWidth,
  interactive,
  className,
  children,
  ...props
}, ref) => /*#__PURE__*/React.createElement(Component, _extends$1({
  ref: ref,
  className: cn(cardSurfaceVariants({
    variant,
    rounded,
    padding,
    fullWidth,
    interactive
  }), className)
}, props), children));
CardSurface.displayName = "CardSurface";
CardSurface.propTypes = {
  as: propTypes.exports.elementType,
  variant: propTypes.exports.oneOf(["default", "elevated", "outlined", "ghost", "filled"]),
  rounded: propTypes.exports.oneOf(["none", "sm", "md", "lg", "xl"]),
  padding: propTypes.exports.oneOf(["none", "sm", "md", "lg", "xl"]),
  fullWidth: propTypes.exports.bool,
  interactive: propTypes.exports.bool,
  className: propTypes.exports.string,
  children: propTypes.exports.node
};
CardSurface.defaultProps = {
  as: "div",
  variant: "default",
  rounded: "md",
  padding: "md",
  fullWidth: false,
  interactive: false,
  className: ""
};

const overlayVariants = cva("fixed inset-0 z-40 flex items-center justify-center", {
  variants: {
    variant: {
      default: "bg-backdrop",
      light: "bg-white/60 backdrop-blur-sm",
      dark: "bg-black/70",
      transparent: "bg-transparent"
    },
    blur: {
      true: "backdrop-blur-sm",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    blur: false
  }
});
const Overlay = /*#__PURE__*/forwardRef(({
  open = true,
  variant,
  blur,
  onClose,
  closeOnClick = true,
  className,
  children,
  ...props
}, ref) => {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends$1({
    ref: ref,
    role: "presentation",
    className: cn(overlayVariants({
      variant,
      blur
    }), className),
    onClick: closeOnClick ? onClose : undefined,
    onKeyDown: e => e.key === "Escape" && onClose?.()
  }, props), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    className: "relative z-50",
    onClick: e => e.stopPropagation()
  }, children));
});
Overlay.displayName = "Overlay";
Overlay.propTypes = {
  open: propTypes.exports.bool,
  variant: propTypes.exports.oneOf(["default", "light", "dark", "transparent"]),
  blur: propTypes.exports.bool,
  onClose: propTypes.exports.func,
  closeOnClick: propTypes.exports.bool,
  className: propTypes.exports.string,
  children: propTypes.exports.node
};
Overlay.defaultProps = {
  open: true,
  variant: "default",
  blur: false,
  closeOnClick: true,
  className: ""
};

const backdropVariants = cva("fixed inset-0 z-30 transition-opacity duration-300", {
  variants: {
    variant: {
      default: "bg-backdrop",
      light: "bg-white/50",
      dark: "bg-black/80",
      blur: "bg-black/40 backdrop-blur-sm"
    },
    visible: {
      true: "opacity-100",
      false: "opacity-0 pointer-events-none"
    }
  },
  defaultVariants: {
    variant: "default",
    visible: true
  }
});
const Backdrop = /*#__PURE__*/forwardRef(({
  open = true,
  variant,
  visible,
  onClick,
  className,
  ...props
}, ref) => /*#__PURE__*/React.createElement("div", _extends$1({
  ref: ref,
  role: "presentation",
  "aria-hidden": !open,
  onClick: onClick,
  className: cn(backdropVariants({
    variant,
    visible: open && visible
  }), className)
}, props)));
Backdrop.displayName = "Backdrop";
Backdrop.propTypes = {
  open: propTypes.exports.bool,
  variant: propTypes.exports.oneOf(["default", "light", "dark", "blur"]),
  visible: propTypes.exports.bool,
  onClick: propTypes.exports.func,
  className: propTypes.exports.string
};
Backdrop.defaultProps = {
  open: true,
  variant: "default",
  visible: true,
  className: ""
};

const iconVariants = cva("inline-flex shrink-0", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8"
    },
    intent: {
      default: "text-dark",
      primary: "text-primary",
      muted: "text-gray3",
      danger: "text-danger",
      success: "text-success",
      white: "text-white"
    }
  },
  defaultVariants: {
    size: "md",
    intent: "default"
  }
});
const Icon = /*#__PURE__*/forwardRef(({
  as: Component = "svg",
  size,
  intent,
  className,
  children,
  label,
  ...props
}, ref) => /*#__PURE__*/React.createElement(Component, _extends$1({
  ref: ref,
  "aria-hidden": !label,
  "aria-label": label,
  role: label ? "img" : undefined,
  className: cn(iconVariants({
    size,
    intent
  }), className)
}, props), children));
Icon.displayName = "Icon";
Icon.propTypes = {
  as: propTypes.exports.elementType,
  size: propTypes.exports.oneOf(["xs", "sm", "md", "lg", "xl"]),
  intent: propTypes.exports.oneOf(["default", "primary", "muted", "danger", "success", "white"]),
  className: propTypes.exports.string,
  children: propTypes.exports.node,
  label: propTypes.exports.string
};
Icon.defaultProps = {
  as: "svg",
  size: "md",
  intent: "default",
  className: ""
};

const imageVariants = cva("object-cover", {
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full"
    },
    fit: {
      cover: "object-cover",
      contain: "object-contain",
      fill: "object-fill",
      none: "object-none"
    },
    aspect: {
      auto: "",
      square: "aspect-square",
      video: "aspect-video",
      portrait: "aspect-[3/4]"
    }
  },
  defaultVariants: {
    rounded: "md",
    fit: "cover",
    aspect: "auto"
  }
});
const Image = /*#__PURE__*/forwardRef(({
  src,
  alt,
  rounded,
  fit,
  aspect,
  fallback,
  lazy = true,
  fullWidth,
  className,
  onError,
  ...props
}, ref) => {
  const [hasError, setHasError] = useState(false);
  if (hasError && fallback) {
    return /*#__PURE__*/React.createElement("div", {
      className: cn(imageVariants({
        rounded,
        fit,
        aspect
      }), "flex items-center justify-center bg-gray1 text-gray3", fullWidth && "w-full", className)
    }, fallback);
  }
  return /*#__PURE__*/React.createElement("img", _extends$1({
    ref: ref,
    src: src,
    alt: alt,
    loading: lazy ? "lazy" : "eager",
    decoding: "async",
    onError: e => {
      setHasError(true);
      onError?.(e);
    },
    className: cn(imageVariants({
      rounded,
      fit,
      aspect
    }), fullWidth && "w-full", className)
  }, props));
});
Image.displayName = "Image";
Image.propTypes = {
  src: propTypes.exports.string.isRequired,
  alt: propTypes.exports.string.isRequired,
  rounded: propTypes.exports.oneOf(["none", "sm", "md", "lg", "xl", "full"]),
  fit: propTypes.exports.oneOf(["cover", "contain", "fill", "none"]),
  aspect: propTypes.exports.oneOf(["auto", "square", "video", "portrait"]),
  fallback: propTypes.exports.node,
  lazy: propTypes.exports.bool,
  fullWidth: propTypes.exports.bool,
  className: propTypes.exports.string,
  onError: propTypes.exports.func
};
Image.defaultProps = {
  rounded: "md",
  fit: "cover",
  aspect: "auto",
  lazy: true,
  fullWidth: false,
  className: ""
};

export { Alert, Avatar, Backdrop, Badge, Blockquote, Button, Caption, Card, CardSurface, Checkbox, ClickAway, Code, Combobox, ComboboxTrigger, DashboardLayout, DeleteIcon, Divider, FloatingActionButton, Heading, Icon, IconButton, Image, Input, Label, Link, Logo, Modal, Navbar, OTPInput, Option, Overlay, Paragraph, PlusIcon, ProductCard, ProgressBar, Radio, RadioBtn, RadioBtnCard, SearchField, SearchInput, SelectInput, SelectTrigger, Separator, Sidebar, Skeleton, Slider, Spinner, Switch, Tag, Text, Textarea as TextArea, TextField, Textarea, Toggle, Tooltip, avatarVariants, backdropVariants, badgeVariants, blockquoteVariants, buttonVariants, captionVariants, cardSurfaceVariants, checkboxVariants, codeVariants, comboboxTriggerVariants, dividerVariants, fabVariants, headingVariants, iconButtonVariants, iconVariants, imageVariants, inputVariants, labelVariants, linkVariants, logoVariants, optionVariants, otpSlotVariants, overlayVariants, paragraphVariants, progressBarVariants, radioVariants, selectTriggerVariants, separatorVariants, skeletonVariants, sliderVariants, spinnerVariants, switchTrackVariants, tagVariants, textVariants, textareaVariants, tooltipVariants };
