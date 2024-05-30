"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Markdown = Markdown;
exports.defaultUrlTransform = defaultUrlTransform;
var _devlop = require("devlop");
var _hastUtilToJsxRuntime = require("hast-util-to-jsx-runtime");
var _htmlUrlAttributes = require("html-url-attributes");
var _jsxRuntime = require("react/jsx-runtime");
var _remarkParse = _interopRequireDefault(require("remark-parse"));
var _remarkRehype = _interopRequireDefault(require("remark-rehype"));
var _unified = require("unified");
var _unistUtilVisit = require("unist-util-visit");
var _vfile = require("vfile");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // Register `Raw` in tree:
/// <reference types="mdast-util-to-hast" />
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Nodes} Nodes
 * @typedef {import('hast').Parents} Parents
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast-util-to-jsx-runtime').Components} JsxRuntimeComponents
 * @typedef {import('remark-rehype').Options} RemarkRehypeOptions
 * @typedef {import('unist-util-visit').BuildVisitor<Root>} Visitor
 * @typedef {import('unified').PluggableList} PluggableList
 */ /**
 * @callback AllowElement
 *   Filter elements.
 * @param {Readonly<Element>} element
 *   Element to check.
 * @param {number} index
 *   Index of `element` in `parent`.
 * @param {Readonly<Parents> | undefined} parent
 *   Parent of `element`.
 * @returns {boolean | null | undefined}
 *   Whether to allow `element` (default: `false`).
 *
 * @typedef {Partial<JsxRuntimeComponents>} Components
 *   Map tag names to components.
 *
 * @typedef Deprecation
 *   Deprecation.
 * @property {string} from
 *   Old field.
 * @property {string} id
 *   ID in readme.
 * @property {keyof Options} [to]
 *   New field.
 *
 * @typedef Options
 *   Configuration.
 * @property {AllowElement | null | undefined} [allowElement]
 *   Filter elements (optional);
 *   `allowedElements` / `disallowedElements` is used first.
 * @property {ReadonlyArray<string> | null | undefined} [allowedElements]
 *   Tag names to allow (default: all tag names);
 *   cannot combine w/ `disallowedElements`.
 * @property {string | null | undefined} [children]
 *   Markdown.
 * @property {string | null | undefined} [className]
 *   Wrap in a `div` with this class name.
 * @property {Components | null | undefined} [components]
 *   Map tag names to components.
 * @property {ReadonlyArray<string> | null | undefined} [disallowedElements]
 *   Tag names to disallow (default: `[]`);
 *   cannot combine w/ `allowedElements`.
 * @property {PluggableList | null | undefined} [rehypePlugins]
 *   List of rehype plugins to use.
 * @property {PluggableList | null | undefined} [remarkPlugins]
 *   List of remark plugins to use.
 * @property {Readonly<RemarkRehypeOptions> | null | undefined} [remarkRehypeOptions]
 *   Options to pass through to `remark-rehype`.
 * @property {boolean | null | undefined} [skipHtml=false]
 *   Ignore HTML in markdown completely (default: `false`).
 * @property {boolean | null | undefined} [unwrapDisallowed=false]
 *   Extract (unwrap) what’s in disallowed elements (default: `false`);
 *   normally when say `strong` is not allowed, it and it’s children are dropped,
 *   with `unwrapDisallowed` the element itself is replaced by its children.
 * @property {UrlTransform | null | undefined} [urlTransform]
 *   Change URLs (default: `defaultUrlTransform`)
 *
 * @callback UrlTransform
 *   Transform all URLs.
 * @param {string} url
 *   URL.
 * @param {string} key
 *   Property name (example: `'href'`).
 * @param {Readonly<Element>} node
 *   Node.
 * @returns {string | null | undefined}
 *   Transformed URL (optional).
 */ // @ts-expect-error: untyped.
var changelog = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md';

/** @type {PluggableList} */
var emptyPlugins = [];
/** @type {Readonly<RemarkRehypeOptions>} */
var emptyRemarkRehypeOptions = {
  allowDangerousHtml: true
};
var safeProtocol = /^(https?|ircs?|mailto|xmpp)$/i;

// Mutable because we `delete` any time it’s used and a message is sent.
/** @type {ReadonlyArray<Readonly<Deprecation>>} */
var deprecations = [{
  from: 'astPlugins',
  id: 'remove-buggy-html-in-markdown-parser'
}, {
  from: 'allowDangerousHtml',
  id: 'remove-buggy-html-in-markdown-parser'
}, {
  from: 'allowNode',
  id: 'replace-allownode-allowedtypes-and-disallowedtypes',
  to: 'allowElement'
}, {
  from: 'allowedTypes',
  id: 'replace-allownode-allowedtypes-and-disallowedtypes',
  to: 'allowedElements'
}, {
  from: 'disallowedTypes',
  id: 'replace-allownode-allowedtypes-and-disallowedtypes',
  to: 'disallowedElements'
}, {
  from: 'escapeHtml',
  id: 'remove-buggy-html-in-markdown-parser'
}, {
  from: 'includeElementIndex',
  id: '#remove-includeelementindex'
}, {
  from: 'includeNodeIndex',
  id: 'change-includenodeindex-to-includeelementindex'
}, {
  from: 'linkTarget',
  id: 'remove-linktarget'
}, {
  from: 'plugins',
  id: 'change-plugins-to-remarkplugins',
  to: 'remarkPlugins'
}, {
  from: 'rawSourcePos',
  id: '#remove-rawsourcepos'
}, {
  from: 'renderers',
  id: 'change-renderers-to-components',
  to: 'components'
}, {
  from: 'source',
  id: 'change-source-to-children',
  to: 'children'
}, {
  from: 'sourcePos',
  id: '#remove-sourcepos'
}, {
  from: 'transformImageUri',
  id: '#add-urltransform',
  to: 'urlTransform'
}, {
  from: 'transformLinkUri',
  id: '#add-urltransform',
  to: 'urlTransform'
}];

/**
 * Component to render markdown.
 *
 * @param {Readonly<Options>} options
 *   Props.
 * @returns {JSX.Element}
 *   React element.
 */
function Markdown(options) {
  var allowedElements = options.allowedElements;
  var allowElement = options.allowElement;
  var children = options.children || '';
  var className = options.className;
  var components = options.components;
  var disallowedElements = options.disallowedElements;
  var rehypePlugins = options.rehypePlugins || emptyPlugins;
  var remarkPlugins = options.remarkPlugins || emptyPlugins;
  var remarkRehypeOptions = options.remarkRehypeOptions ? _objectSpread(_objectSpread({}, options.remarkRehypeOptions), emptyRemarkRehypeOptions) : emptyRemarkRehypeOptions;
  var skipHtml = options.skipHtml;
  var unwrapDisallowed = options.unwrapDisallowed;
  var urlTransform = options.urlTransform || defaultUrlTransform;
  var processor = (0, _unified.unified)().use(_remarkParse["default"]).use(remarkPlugins).use(_remarkRehype["default"], remarkRehypeOptions).use(rehypePlugins);
  var file = new _vfile.VFile();
  if (typeof children === 'string') {
    file.value = children;
  } else {
    (0, _devlop.unreachable)('Unexpected value `' + children + '` for `children` prop, expected `string`');
  }
  if (allowedElements && disallowedElements) {
    (0, _devlop.unreachable)('Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other');
  }
  var _iterator = _createForOfIteratorHelper(deprecations),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var deprecation = _step.value;
      if (options.hasOwnProperty(deprecation.form)) {
        (0, _devlop.unreachable)('Unexpected `' + deprecation.from + '` prop, ' + (deprecation.to ? 'use `' + deprecation.to + '` instead' : 'remove it') + ' (see <' + changelog + '#' + deprecation.id + '> for more info)');
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var mdastTree = processor.parse(file);
  /** @type {Nodes} */
  var hastTree = processor.runSync(mdastTree, file);

  // Wrap in `div` if there’s a class name.
  if (className) {
    hastTree = {
      type: 'element',
      tagName: 'div',
      properties: {
        className: className
      },
      // Assume no doctypes.
      children: ( /** @type {Array<ElementContent>} */
      hastTree.type === 'root' ? hastTree.children : [hastTree])
    };
  }
  (0, _unistUtilVisit.visit)(hastTree, transform);
  return (0, _hastUtilToJsxRuntime.toJsxRuntime)(hastTree, {
    Fragment: _jsxRuntime.Fragment,
    components: components,
    ignoreInvalidStyle: true,
    jsx: _jsxRuntime.jsx,
    jsxs: _jsxRuntime.jsxs,
    passKeys: true,
    passNode: true
  });

  /** @type {Visitor} */
  function transform(node, index, parent) {
    if (node.type === 'raw' && parent && typeof index === 'number') {
      if (skipHtml) {
        parent.children.splice(index, 1);
      } else {
        parent.children[index] = {
          type: 'text',
          value: node.value
        };
      }
      return index;
    }
    if (node.type === 'element') {
      /** @type {string} */
      var key;
      for (key in _htmlUrlAttributes.urlAttributes) {
        if (_htmlUrlAttributes.urlAttributes.hasOwnProperty(key) && node.properties.hasOwnProperty(key)) {
          var value = node.properties[key];
          var test = _htmlUrlAttributes.urlAttributes[key];
          if (test === null || test.includes(node.tagName)) {
            node.properties[key] = urlTransform(String(value || ''), key, node);
          }
        }
      }
    }
    if (node.type === 'element') {
      var remove = allowedElements ? !allowedElements.includes(node.tagName) : disallowedElements ? disallowedElements.includes(node.tagName) : false;
      if (!remove && allowElement && typeof index === 'number') {
        remove = !allowElement(node, index, parent);
      }
      if (remove && parent && typeof index === 'number') {
        if (unwrapDisallowed && node.children) {
          var _parent$children;
          (_parent$children = parent.children).splice.apply(_parent$children, [index, 1].concat(_toConsumableArray(node.children)));
        } else {
          parent.children.splice(index, 1);
        }
        return index;
      }
    }
  }
}

/**
 * Make a URL safe.
 *
 * @satisfies {UrlTransform}
 * @param {string} value
 *   URL.
 * @returns {string}
 *   Safe URL.
 */
function defaultUrlTransform(value) {
  // Same as:
  // <https://github.com/micromark/micromark/blob/929275e/packages/micromark-util-sanitize-uri/dev/index.js#L34>
  // But without the `encode` part.
  var colon = value.indexOf(':');
  var questionMark = value.indexOf('?');
  var numberSign = value.indexOf('#');
  var slash = value.indexOf('/');
  if (
  // If there is no protocol, it’s relative.
  colon < 0 ||
  // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
  slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign ||
  // It is a protocol, it should be allowed.
  safeProtocol.test(value.slice(0, colon))) {
    return value;
  }
  return '';
}