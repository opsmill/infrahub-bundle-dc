var InfrahubPluginExport = (function(exports, jsxRuntime, reactRouter, React, reactDom) {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k2 in e) {
        if (k2 !== "default") {
          const d = Object.getOwnPropertyDescriptor(e, k2);
          Object.defineProperty(n, k2, d.get ? d : {
            enumerable: true,
            get: () => e[k2]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
  const manifest$2 = {
    id: "example-quick-stats",
    name: "Quick Stats",
    kinds: ["DcimDevice"],
    position: "panel",
    panelTitle: "Quick Stats",
    icon: "mdi:chart-bar",
    priority: 5
  };
  function QuickStatsPlugin({
    object: object2,
    schema,
    objectData
  }) {
    var _a, _b, _c, _d, _e;
    const attributeCount = ((_a = schema.attributes) == null ? void 0 : _a.length) ?? 0;
    const relationshipCount = ((_b = schema.relationships) == null ? void 0 : _b.length) ?? 0;
    const deviceName = ((_c = objectData == null ? void 0 : objectData.name) == null ? void 0 : _c.value) ?? object2.displayLabel;
    const description = (_d = objectData == null ? void 0 : objectData.description) == null ? void 0 : _d.value;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-3 gap-4 text-center", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-2xl font-bold text-blue-600", children: attributeCount }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-gray-500", children: "Attributes" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-2xl font-bold text-green-600", children: relationshipCount }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-gray-500", children: "Relationships" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-2xl font-bold text-purple-600", children: ((_e = object2.id) == null ? void 0 : _e.slice(0, 8)) ?? "N/A" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-gray-500", children: "ID (short) hello Bilal" })
        ] })
      ] }),
      description && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-gray-600 text-sm border-gray-200 border-t pt-2", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-medium", children: [
          deviceName,
          ":"
        ] }),
        " ",
        description
      ] })
    ] });
  }
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  var EventKeys = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
  function isEventKey(key) {
    if (typeof key !== "string") {
      return false;
    }
    var allowedEventKeys = EventKeys;
    return allowedEventKeys.includes(key);
  }
  var SVGElementPropKeys = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    /*
     * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
     * that can use it, and it conflicts with the recharts prop 'type'
     * https://github.com/recharts/recharts/pull/3327
     * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
     */
    // 'type',
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle"
  ];
  var SVGElementPropKeySet = new Set(SVGElementPropKeys);
  function isSvgElementPropKey(key) {
    if (typeof key !== "string") {
      return false;
    }
    return SVGElementPropKeySet.has(key);
  }
  function isDataAttribute(key) {
    return typeof key === "string" && key.startsWith("data-");
  }
  function svgPropertiesNoEvents(obj) {
    if (typeof obj !== "object" || obj === null) {
      return {};
    }
    var result = {};
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (isSvgElementPropKey(key) || isDataAttribute(key)) {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }
  function svgPropertiesNoEventsFromUnknown(input) {
    if (input == null) {
      return null;
    }
    if (/* @__PURE__ */ React.isValidElement(input) && typeof input.props === "object" && input.props !== null) {
      var p = input.props;
      return svgPropertiesNoEvents(p);
    }
    if (typeof input === "object" && !Array.isArray(input)) {
      return svgPropertiesNoEvents(input);
    }
    return null;
  }
  function svgPropertiesAndEvents(obj) {
    var result = {};
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (isSvgElementPropKey(key) || isDataAttribute(key) || isEventKey(key)) {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }
  var _excluded$k = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
  function _extends$n() {
    return _extends$n = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$n.apply(null, arguments);
  }
  function _objectWithoutProperties$k(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$k(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$k(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  var Surface = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var {
      children,
      width,
      height,
      viewBox,
      className,
      style,
      title,
      desc
    } = props, others = _objectWithoutProperties$k(props, _excluded$k);
    var svgView = viewBox || {
      width,
      height,
      x: 0,
      y: 0
    };
    var layerClass = clsx("recharts-surface", className);
    return /* @__PURE__ */ React__namespace.createElement("svg", _extends$n({}, svgPropertiesAndEvents(others), {
      className: layerClass,
      width,
      height,
      style,
      viewBox: "".concat(svgView.x, " ").concat(svgView.y, " ").concat(svgView.width, " ").concat(svgView.height),
      ref
    }), /* @__PURE__ */ React__namespace.createElement("title", null, title), /* @__PURE__ */ React__namespace.createElement("desc", null, desc), children);
  });
  var _excluded$j = ["children", "className"];
  function _extends$m() {
    return _extends$m = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$m.apply(null, arguments);
  }
  function _objectWithoutProperties$j(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$j(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$j(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  var Layer = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    var {
      children,
      className
    } = props, others = _objectWithoutProperties$j(props, _excluded$j);
    var layerClass = clsx("recharts-layer", className);
    return /* @__PURE__ */ React__namespace.createElement("g", _extends$m({
      className: layerClass
    }, svgPropertiesAndEvents(others), {
      ref
    }), children);
  });
  var LegendPortalContext = /* @__PURE__ */ React.createContext(null);
  function constant$1(x2) {
    return function constant2() {
      return x2;
    };
  }
  const cos = Math.cos;
  const sin = Math.sin;
  const sqrt$1 = Math.sqrt;
  const pi$1 = Math.PI;
  const tau$1 = 2 * pi$1;
  const pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
  function append(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += arguments[i] + strings[i];
    }
  }
  function appendRound(digits) {
    let d = Math.floor(digits);
    if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
    if (d > 15) return append;
    const k2 = 10 ** d;
    return function(strings) {
      this._ += strings[0];
      for (let i = 1, n = strings.length; i < n; ++i) {
        this._ += Math.round(arguments[i] * k2) / k2 + strings[i];
      }
    };
  }
  class Path {
    constructor(digits) {
      this._x0 = this._y0 = // start of current subpath
      this._x1 = this._y1 = null;
      this._ = "";
      this._append = digits == null ? append : appendRound(digits);
    }
    moveTo(x2, y2) {
      this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
    }
    closePath() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._append`Z`;
      }
    }
    lineTo(x2, y2) {
      this._append`L${this._x1 = +x2},${this._y1 = +y2}`;
    }
    quadraticCurveTo(x1, y1, x2, y2) {
      this._append`Q${+x1},${+y1},${this._x1 = +x2},${this._y1 = +y2}`;
    }
    bezierCurveTo(x1, y1, x2, y2, x3, y3) {
      this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x3},${this._y1 = +y3}`;
    }
    arcTo(x1, y1, x2, y2, r2) {
      x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r2 = +r2;
      if (r2 < 0) throw new Error(`negative radius: ${r2}`);
      let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
      if (this._x1 === null) {
        this._append`M${this._x1 = x1},${this._y1 = y1}`;
      } else if (!(l01_2 > epsilon)) ;
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r2) {
        this._append`L${this._x1 = x1},${this._y1 = y1}`;
      } else {
        let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r2 * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
        if (Math.abs(t01 - 1) > epsilon) {
          this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
        }
        this._append`A${r2},${r2},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
      }
    }
    arc(x2, y2, r2, a0, a1, ccw) {
      x2 = +x2, y2 = +y2, r2 = +r2, ccw = !!ccw;
      if (r2 < 0) throw new Error(`negative radius: ${r2}`);
      let dx = r2 * Math.cos(a0), dy = r2 * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
      if (this._x1 === null) {
        this._append`M${x0},${y0}`;
      } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
        this._append`L${x0},${y0}`;
      }
      if (!r2) return;
      if (da < 0) da = da % tau + tau;
      if (da > tauEpsilon) {
        this._append`A${r2},${r2},0,1,${cw},${x2 - dx},${y2 - dy}A${r2},${r2},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
      } else if (da > epsilon) {
        this._append`A${r2},${r2},0,${+(da >= pi)},${cw},${this._x1 = x2 + r2 * Math.cos(a1)},${this._y1 = y2 + r2 * Math.sin(a1)}`;
      }
    }
    rect(x2, y2, w, h) {
      this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${w = +w}v${+h}h${-w}Z`;
    }
    toString() {
      return this._;
    }
  }
  function withPath(shape) {
    let digits = 3;
    shape.digits = function(_) {
      if (!arguments.length) return digits;
      if (_ == null) {
        digits = null;
      } else {
        const d = Math.floor(_);
        if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
        digits = d;
      }
      return shape;
    };
    return () => new Path(digits);
  }
  function array(x2) {
    return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
  }
  function Linear(context) {
    this._context = context;
  }
  Linear.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
          break;
        case 1:
          this._point = 2;
        // falls through
        default:
          this._context.lineTo(x2, y2);
          break;
      }
    }
  };
  function curveLinear(context) {
    return new Linear(context);
  }
  function x(p) {
    return p[0];
  }
  function y(p) {
    return p[1];
  }
  function shapeLine(x$1, y$1) {
    var defined2 = constant$1(true), context = null, curve = curveLinear, output = null, path = withPath(line);
    x$1 = typeof x$1 === "function" ? x$1 : x$1 === void 0 ? x : constant$1(x$1);
    y$1 = typeof y$1 === "function" ? y$1 : y$1 === void 0 ? y : constant$1(y$1);
    function line(data) {
      var i, n = (data = array(data)).length, d, defined0 = false, buffer;
      if (context == null) output = curve(buffer = path());
      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined2(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0) output.lineStart();
          else output.lineEnd();
        }
        if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
      }
      if (buffer) return output = null, buffer + "" || null;
    }
    line.x = function(_) {
      return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant$1(+_), line) : x$1;
    };
    line.y = function(_) {
      return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant$1(+_), line) : y$1;
    };
    line.defined = function(_) {
      return arguments.length ? (defined2 = typeof _ === "function" ? _ : constant$1(!!_), line) : defined2;
    };
    line.curve = function(_) {
      return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
    };
    line.context = function(_) {
      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
    };
    return line;
  }
  function shapeArea(x0, y0, y1) {
    var x1 = null, defined2 = constant$1(true), context = null, curve = curveLinear, output = null, path = withPath(area);
    x0 = typeof x0 === "function" ? x0 : x0 === void 0 ? x : constant$1(+x0);
    y0 = typeof y0 === "function" ? y0 : y0 === void 0 ? constant$1(0) : constant$1(+y0);
    y1 = typeof y1 === "function" ? y1 : y1 === void 0 ? y : constant$1(+y1);
    function area(data) {
      var i, j, k2, n = (data = array(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
      if (context == null) output = curve(buffer = path());
      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined2(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0) {
            j = i;
            output.areaStart();
            output.lineStart();
          } else {
            output.lineEnd();
            output.lineStart();
            for (k2 = i - 1; k2 >= j; --k2) {
              output.point(x0z[k2], y0z[k2]);
            }
            output.lineEnd();
            output.areaEnd();
          }
        }
        if (defined0) {
          x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
          output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
        }
      }
      if (buffer) return output = null, buffer + "" || null;
    }
    function arealine() {
      return shapeLine().defined(defined2).curve(curve).context(context);
    }
    area.x = function(_) {
      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$1(+_), x1 = null, area) : x0;
    };
    area.x0 = function(_) {
      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$1(+_), area) : x0;
    };
    area.x1 = function(_) {
      return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), area) : x1;
    };
    area.y = function(_) {
      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$1(+_), y1 = null, area) : y0;
    };
    area.y0 = function(_) {
      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$1(+_), area) : y0;
    };
    area.y1 = function(_) {
      return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), area) : y1;
    };
    area.lineX0 = area.lineY0 = function() {
      return arealine().x(x0).y(y0);
    };
    area.lineY1 = function() {
      return arealine().x(x0).y(y1);
    };
    area.lineX1 = function() {
      return arealine().x(x1).y(y0);
    };
    area.defined = function(_) {
      return arguments.length ? (defined2 = typeof _ === "function" ? _ : constant$1(!!_), area) : defined2;
    };
    area.curve = function(_) {
      return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
    };
    area.context = function(_) {
      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
    };
    return area;
  }
  class Bump {
    constructor(context, x2) {
      this._context = context;
      this._x = x2;
    }
    areaStart() {
      this._line = 0;
    }
    areaEnd() {
      this._line = NaN;
    }
    lineStart() {
      this._point = 0;
    }
    lineEnd() {
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    }
    point(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0: {
          this._point = 1;
          if (this._line) this._context.lineTo(x2, y2);
          else this._context.moveTo(x2, y2);
          break;
        }
        case 1:
          this._point = 2;
        // falls through
        default: {
          if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x2) / 2, this._y0, this._x0, y2, x2, y2);
          else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y2) / 2, x2, this._y0, x2, y2);
          break;
        }
      }
      this._x0 = x2, this._y0 = y2;
    }
  }
  function bumpX(context) {
    return new Bump(context, true);
  }
  function bumpY(context) {
    return new Bump(context, false);
  }
  const symbolCircle = {
    draw(context, size) {
      const r2 = sqrt$1(size / pi$1);
      context.moveTo(r2, 0);
      context.arc(0, 0, r2, 0, tau$1);
    }
  };
  const symbolCross = {
    draw(context, size) {
      const r2 = sqrt$1(size / 5) / 2;
      context.moveTo(-3 * r2, -r2);
      context.lineTo(-r2, -r2);
      context.lineTo(-r2, -3 * r2);
      context.lineTo(r2, -3 * r2);
      context.lineTo(r2, -r2);
      context.lineTo(3 * r2, -r2);
      context.lineTo(3 * r2, r2);
      context.lineTo(r2, r2);
      context.lineTo(r2, 3 * r2);
      context.lineTo(-r2, 3 * r2);
      context.lineTo(-r2, r2);
      context.lineTo(-3 * r2, r2);
      context.closePath();
    }
  };
  const tan30 = sqrt$1(1 / 3);
  const tan30_2 = tan30 * 2;
  const symbolDiamond = {
    draw(context, size) {
      const y2 = sqrt$1(size / tan30_2);
      const x2 = y2 * tan30;
      context.moveTo(0, -y2);
      context.lineTo(x2, 0);
      context.lineTo(0, y2);
      context.lineTo(-x2, 0);
      context.closePath();
    }
  };
  const symbolSquare = {
    draw(context, size) {
      const w = sqrt$1(size);
      const x2 = -w / 2;
      context.rect(x2, x2, w, w);
    }
  };
  const ka = 0.8908130915292852;
  const kr = sin(pi$1 / 10) / sin(7 * pi$1 / 10);
  const kx = sin(tau$1 / 10) * kr;
  const ky = -cos(tau$1 / 10) * kr;
  const symbolStar = {
    draw(context, size) {
      const r2 = sqrt$1(size * ka);
      const x2 = kx * r2;
      const y2 = ky * r2;
      context.moveTo(0, -r2);
      context.lineTo(x2, y2);
      for (let i = 1; i < 5; ++i) {
        const a2 = tau$1 * i / 5;
        const c2 = cos(a2);
        const s2 = sin(a2);
        context.lineTo(s2 * r2, -c2 * r2);
        context.lineTo(c2 * x2 - s2 * y2, s2 * x2 + c2 * y2);
      }
      context.closePath();
    }
  };
  const sqrt3 = sqrt$1(3);
  const symbolTriangle = {
    draw(context, size) {
      const y2 = -sqrt$1(size / (sqrt3 * 3));
      context.moveTo(0, y2 * 2);
      context.lineTo(-sqrt3 * y2, -y2);
      context.lineTo(sqrt3 * y2, -y2);
      context.closePath();
    }
  };
  const c = -0.5;
  const s = sqrt$1(3) / 2;
  const k = 1 / sqrt$1(12);
  const a = (k / 2 + 1) * 3;
  const symbolWye = {
    draw(context, size) {
      const r2 = sqrt$1(size / a);
      const x0 = r2 / 2, y0 = r2 * k;
      const x1 = x0, y1 = r2 * k + r2;
      const x2 = -x1, y2 = y1;
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
      context.lineTo(x2, y2);
      context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
      context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
      context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
      context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
      context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
      context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
      context.closePath();
    }
  };
  function Symbol$1(type, size) {
    let context = null, path = withPath(symbol);
    type = typeof type === "function" ? type : constant$1(type || symbolCircle);
    size = typeof size === "function" ? size : constant$1(size === void 0 ? 64 : +size);
    function symbol() {
      let buffer;
      if (!context) context = buffer = path();
      type.apply(this, arguments).draw(context, +size.apply(this, arguments));
      if (buffer) return context = null, buffer + "" || null;
    }
    symbol.type = function(_) {
      return arguments.length ? (type = typeof _ === "function" ? _ : constant$1(_), symbol) : type;
    };
    symbol.size = function(_) {
      return arguments.length ? (size = typeof _ === "function" ? _ : constant$1(+_), symbol) : size;
    };
    symbol.context = function(_) {
      return arguments.length ? (context = _ == null ? null : _, symbol) : context;
    };
    return symbol;
  }
  function noop$3() {
  }
  function point$2(that, x2, y2) {
    that._context.bezierCurveTo(
      (2 * that._x0 + that._x1) / 3,
      (2 * that._y0 + that._y1) / 3,
      (that._x0 + 2 * that._x1) / 3,
      (that._y0 + 2 * that._y1) / 3,
      (that._x0 + 4 * that._x1 + x2) / 6,
      (that._y0 + 4 * that._y1 + y2) / 6
    );
  }
  function Basis(context) {
    this._context = context;
  }
  Basis.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 3:
          point$2(this, this._x1, this._y1);
        // falls through
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
        // falls through
        default:
          point$2(this, x2, y2);
          break;
      }
      this._x0 = this._x1, this._x1 = x2;
      this._y0 = this._y1, this._y1 = y2;
    }
  };
  function curveBasis(context) {
    return new Basis(context);
  }
  function BasisClosed(context) {
    this._context = context;
  }
  BasisClosed.prototype = {
    areaStart: noop$3,
    areaEnd: noop$3,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x2, this._y2);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x2, this._y2);
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          break;
        }
      }
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x2 = x2, this._y2 = y2;
          break;
        case 1:
          this._point = 2;
          this._x3 = x2, this._y3 = y2;
          break;
        case 2:
          this._point = 3;
          this._x4 = x2, this._y4 = y2;
          this._context.moveTo((this._x0 + 4 * this._x1 + x2) / 6, (this._y0 + 4 * this._y1 + y2) / 6);
          break;
        default:
          point$2(this, x2, y2);
          break;
      }
      this._x0 = this._x1, this._x1 = x2;
      this._y0 = this._y1, this._y1 = y2;
    }
  };
  function curveBasisClosed(context) {
    return new BasisClosed(context);
  }
  function BasisOpen(context) {
    this._context = context;
  }
  BasisOpen.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var x0 = (this._x0 + 4 * this._x1 + x2) / 6, y0 = (this._y0 + 4 * this._y1 + y2) / 6;
          this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
          break;
        case 3:
          this._point = 4;
        // falls through
        default:
          point$2(this, x2, y2);
          break;
      }
      this._x0 = this._x1, this._x1 = x2;
      this._y0 = this._y1, this._y1 = y2;
    }
  };
  function curveBasisOpen(context) {
    return new BasisOpen(context);
  }
  function LinearClosed(context) {
    this._context = context;
  }
  LinearClosed.prototype = {
    areaStart: noop$3,
    areaEnd: noop$3,
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._point) this._context.closePath();
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      if (this._point) this._context.lineTo(x2, y2);
      else this._point = 1, this._context.moveTo(x2, y2);
    }
  };
  function curveLinearClosed(context) {
    return new LinearClosed(context);
  }
  function sign(x2) {
    return x2 < 0 ? -1 : 1;
  }
  function slope3(that, x2, y2) {
    var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
    return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
  }
  function slope2(that, t) {
    var h = that._x1 - that._x0;
    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
  }
  function point$1(that, t02, t12) {
    var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
    that._context.bezierCurveTo(x0 + dx, y0 + dx * t02, x1 - dx, y1 - dx * t12, x1, y1);
  }
  function MonotoneX(context) {
    this._context = context;
  }
  MonotoneX.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          point$1(this, this._t0, slope2(this, this._t0));
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      var t12 = NaN;
      x2 = +x2, y2 = +y2;
      if (x2 === this._x1 && y2 === this._y1) return;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          point$1(this, slope2(this, t12 = slope3(this, x2, y2)), t12);
          break;
        default:
          point$1(this, this._t0, t12 = slope3(this, x2, y2));
          break;
      }
      this._x0 = this._x1, this._x1 = x2;
      this._y0 = this._y1, this._y1 = y2;
      this._t0 = t12;
    }
  };
  function MonotoneY(context) {
    this._context = new ReflectContext(context);
  }
  (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
    MonotoneX.prototype.point.call(this, y2, x2);
  };
  function ReflectContext(context) {
    this._context = context;
  }
  ReflectContext.prototype = {
    moveTo: function(x2, y2) {
      this._context.moveTo(y2, x2);
    },
    closePath: function() {
      this._context.closePath();
    },
    lineTo: function(x2, y2) {
      this._context.lineTo(y2, x2);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
      this._context.bezierCurveTo(y1, x1, y2, x2, y3, x3);
    }
  };
  function monotoneX(context) {
    return new MonotoneX(context);
  }
  function monotoneY(context) {
    return new MonotoneY(context);
  }
  function Natural(context) {
    this._context = context;
  }
  Natural.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = [];
      this._y = [];
    },
    lineEnd: function() {
      var x2 = this._x, y2 = this._y, n = x2.length;
      if (n) {
        this._line ? this._context.lineTo(x2[0], y2[0]) : this._context.moveTo(x2[0], y2[0]);
        if (n === 2) {
          this._context.lineTo(x2[1], y2[1]);
        } else {
          var px = controlPoints(x2), py = controlPoints(y2);
          for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
            this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x2[i1], y2[i1]);
          }
        }
      }
      if (this._line || this._line !== 0 && n === 1) this._context.closePath();
      this._line = 1 - this._line;
      this._x = this._y = null;
    },
    point: function(x2, y2) {
      this._x.push(+x2);
      this._y.push(+y2);
    }
  };
  function controlPoints(x2) {
    var i, n = x2.length - 1, m, a2 = new Array(n), b = new Array(n), r2 = new Array(n);
    a2[0] = 0, b[0] = 2, r2[0] = x2[0] + 2 * x2[1];
    for (i = 1; i < n - 1; ++i) a2[i] = 1, b[i] = 4, r2[i] = 4 * x2[i] + 2 * x2[i + 1];
    a2[n - 1] = 2, b[n - 1] = 7, r2[n - 1] = 8 * x2[n - 1] + x2[n];
    for (i = 1; i < n; ++i) m = a2[i] / b[i - 1], b[i] -= m, r2[i] -= m * r2[i - 1];
    a2[n - 1] = r2[n - 1] / b[n - 1];
    for (i = n - 2; i >= 0; --i) a2[i] = (r2[i] - a2[i + 1]) / b[i];
    b[n - 1] = (x2[n] + a2[n - 1]) / 2;
    for (i = 0; i < n - 1; ++i) b[i] = 2 * x2[i + 1] - a2[i + 1];
    return [a2, b];
  }
  function curveNatural(context) {
    return new Natural(context);
  }
  function Step(context, t) {
    this._context = context;
    this._t = t;
  }
  Step.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = this._y = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
          break;
        case 1:
          this._point = 2;
        // falls through
        default: {
          if (this._t <= 0) {
            this._context.lineTo(this._x, y2);
            this._context.lineTo(x2, y2);
          } else {
            var x1 = this._x * (1 - this._t) + x2 * this._t;
            this._context.lineTo(x1, this._y);
            this._context.lineTo(x1, y2);
          }
          break;
        }
      }
      this._x = x2, this._y = y2;
    }
  };
  function curveStep(context) {
    return new Step(context, 0.5);
  }
  function stepBefore(context) {
    return new Step(context, 0);
  }
  function stepAfter(context) {
    return new Step(context, 1);
  }
  function stackOffsetNone(series, order) {
    if (!((n = series.length) > 1)) return;
    for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
      s0 = s1, s1 = series[order[i]];
      for (j = 0; j < m; ++j) {
        s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
      }
    }
  }
  function stackOrderNone(series) {
    var n = series.length, o = new Array(n);
    while (--n >= 0) o[n] = n;
    return o;
  }
  function stackValue(d, key) {
    return d[key];
  }
  function stackSeries(key) {
    const series = [];
    series.key = key;
    return series;
  }
  function shapeStack() {
    var keys = constant$1([]), order = stackOrderNone, offset = stackOffsetNone, value = stackValue;
    function stack(data) {
      var sz = Array.from(keys.apply(this, arguments), stackSeries), i, n = sz.length, j = -1, oz;
      for (const d of data) {
        for (i = 0, ++j; i < n; ++i) {
          (sz[i][j] = [0, +value(d, sz[i].key, j, data)]).data = d;
        }
      }
      for (i = 0, oz = array(order(sz)); i < n; ++i) {
        sz[oz[i]].index = i;
      }
      offset(sz, oz);
      return sz;
    }
    stack.keys = function(_) {
      return arguments.length ? (keys = typeof _ === "function" ? _ : constant$1(Array.from(_)), stack) : keys;
    };
    stack.value = function(_) {
      return arguments.length ? (value = typeof _ === "function" ? _ : constant$1(+_), stack) : value;
    };
    stack.order = function(_) {
      return arguments.length ? (order = _ == null ? stackOrderNone : typeof _ === "function" ? _ : constant$1(Array.from(_)), stack) : order;
    };
    stack.offset = function(_) {
      return arguments.length ? (offset = _ == null ? stackOffsetNone : _, stack) : offset;
    };
    return stack;
  }
  function stackOffsetExpand(series, order) {
    if (!((n = series.length) > 0)) return;
    for (var i, n, j = 0, m = series[0].length, y2; j < m; ++j) {
      for (y2 = i = 0; i < n; ++i) y2 += series[i][j][1] || 0;
      if (y2) for (i = 0; i < n; ++i) series[i][j][1] /= y2;
    }
    stackOffsetNone(series, order);
  }
  function stackOffsetSilhouette(series, order) {
    if (!((n = series.length) > 0)) return;
    for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
      for (var i = 0, y2 = 0; i < n; ++i) y2 += series[i][j][1] || 0;
      s0[j][1] += s0[j][0] = -y2 / 2;
    }
    stackOffsetNone(series, order);
  }
  function stackOffsetWiggle(series, order) {
    if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
    for (var y2 = 0, j = 1, s0, m, n; j < m; ++j) {
      for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
        var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2;
        for (var k2 = 0; k2 < i; ++k2) {
          var sk = series[order[k2]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
          s3 += skj0 - skj1;
        }
        s1 += sij0, s2 += s3 * sij0;
      }
      s0[j - 1][1] += s0[j - 1][0] = y2;
      if (s1) y2 -= s2 / s1;
    }
    s0[j - 1][1] += s0[j - 1][0] = y2;
    stackOffsetNone(series, order);
  }
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  var get$3 = {};
  var isUnsafeProperty = {};
  var hasRequiredIsUnsafeProperty;
  function requireIsUnsafeProperty() {
    if (hasRequiredIsUnsafeProperty) return isUnsafeProperty;
    hasRequiredIsUnsafeProperty = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function isUnsafeProperty2(key) {
        return key === "__proto__";
      }
      exports$1.isUnsafeProperty = isUnsafeProperty2;
    })(isUnsafeProperty);
    return isUnsafeProperty;
  }
  var isDeepKey = {};
  var hasRequiredIsDeepKey;
  function requireIsDeepKey() {
    if (hasRequiredIsDeepKey) return isDeepKey;
    hasRequiredIsDeepKey = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function isDeepKey2(key) {
        switch (typeof key) {
          case "number":
          case "symbol": {
            return false;
          }
          case "string": {
            return key.includes(".") || key.includes("[") || key.includes("]");
          }
        }
      }
      exports$1.isDeepKey = isDeepKey2;
    })(isDeepKey);
    return isDeepKey;
  }
  var toKey = {};
  var hasRequiredToKey;
  function requireToKey() {
    if (hasRequiredToKey) return toKey;
    hasRequiredToKey = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function toKey2(value) {
        var _a;
        if (typeof value === "string" || typeof value === "symbol") {
          return value;
        }
        if (Object.is((_a = value == null ? void 0 : value.valueOf) == null ? void 0 : _a.call(value), -0)) {
          return "-0";
        }
        return String(value);
      }
      exports$1.toKey = toKey2;
    })(toKey);
    return toKey;
  }
  var toPath = {};
  var toString$1 = {};
  var hasRequiredToString;
  function requireToString() {
    if (hasRequiredToString) return toString$1;
    hasRequiredToString = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function toString2(value) {
        if (value == null) {
          return "";
        }
        if (typeof value === "string") {
          return value;
        }
        if (Array.isArray(value)) {
          return value.map(toString2).join(",");
        }
        const result = String(value);
        if (result === "0" && Object.is(Number(value), -0)) {
          return "-0";
        }
        return result;
      }
      exports$1.toString = toString2;
    })(toString$1);
    return toString$1;
  }
  var hasRequiredToPath;
  function requireToPath() {
    if (hasRequiredToPath) return toPath;
    hasRequiredToPath = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const toString2 = /* @__PURE__ */ requireToString();
      const toKey2 = /* @__PURE__ */ requireToKey();
      function toPath2(deepKey) {
        if (Array.isArray(deepKey)) {
          return deepKey.map(toKey2.toKey);
        }
        if (typeof deepKey === "symbol") {
          return [deepKey];
        }
        deepKey = toString2.toString(deepKey);
        const result = [];
        const length = deepKey.length;
        if (length === 0) {
          return result;
        }
        let index = 0;
        let key = "";
        let quoteChar = "";
        let bracket = false;
        if (deepKey.charCodeAt(0) === 46) {
          result.push("");
          index++;
        }
        while (index < length) {
          const char = deepKey[index];
          if (quoteChar) {
            if (char === "\\" && index + 1 < length) {
              index++;
              key += deepKey[index];
            } else if (char === quoteChar) {
              quoteChar = "";
            } else {
              key += char;
            }
          } else if (bracket) {
            if (char === '"' || char === "'") {
              quoteChar = char;
            } else if (char === "]") {
              bracket = false;
              result.push(key);
              key = "";
            } else {
              key += char;
            }
          } else {
            if (char === "[") {
              bracket = true;
              if (key) {
                result.push(key);
                key = "";
              }
            } else if (char === ".") {
              if (key) {
                result.push(key);
                key = "";
              }
            } else {
              key += char;
            }
          }
          index++;
        }
        if (key) {
          result.push(key);
        }
        return result;
      }
      exports$1.toPath = toPath2;
    })(toPath);
    return toPath;
  }
  var hasRequiredGet$1;
  function requireGet$1() {
    if (hasRequiredGet$1) return get$3;
    hasRequiredGet$1 = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const isUnsafeProperty2 = /* @__PURE__ */ requireIsUnsafeProperty();
      const isDeepKey2 = /* @__PURE__ */ requireIsDeepKey();
      const toKey2 = /* @__PURE__ */ requireToKey();
      const toPath2 = /* @__PURE__ */ requireToPath();
      function get2(object2, path, defaultValue) {
        if (object2 == null) {
          return defaultValue;
        }
        switch (typeof path) {
          case "string": {
            if (isUnsafeProperty2.isUnsafeProperty(path)) {
              return defaultValue;
            }
            const result = object2[path];
            if (result === void 0) {
              if (isDeepKey2.isDeepKey(path)) {
                return get2(object2, toPath2.toPath(path), defaultValue);
              } else {
                return defaultValue;
              }
            }
            return result;
          }
          case "number":
          case "symbol": {
            if (typeof path === "number") {
              path = toKey2.toKey(path);
            }
            const result = object2[path];
            if (result === void 0) {
              return defaultValue;
            }
            return result;
          }
          default: {
            if (Array.isArray(path)) {
              return getWithPath(object2, path, defaultValue);
            }
            if (Object.is(path == null ? void 0 : path.valueOf(), -0)) {
              path = "-0";
            } else {
              path = String(path);
            }
            if (isUnsafeProperty2.isUnsafeProperty(path)) {
              return defaultValue;
            }
            const result = object2[path];
            if (result === void 0) {
              return defaultValue;
            }
            return result;
          }
        }
      }
      function getWithPath(object2, path, defaultValue) {
        if (path.length === 0) {
          return defaultValue;
        }
        let current2 = object2;
        for (let index = 0; index < path.length; index++) {
          if (current2 == null) {
            return defaultValue;
          }
          if (isUnsafeProperty2.isUnsafeProperty(path[index])) {
            return defaultValue;
          }
          current2 = current2[path[index]];
        }
        if (current2 === void 0) {
          return defaultValue;
        }
        return current2;
      }
      exports$1.get = get2;
    })(get$3);
    return get$3;
  }
  var get$2;
  var hasRequiredGet;
  function requireGet() {
    if (hasRequiredGet) return get$2;
    hasRequiredGet = 1;
    get$2 = requireGet$1().get;
    return get$2;
  }
  var getExports = /* @__PURE__ */ requireGet();
  const get$1 = /* @__PURE__ */ getDefaultExportFromCjs(getExports);
  var mathSign = (value) => {
    if (value === 0) {
      return 0;
    }
    if (value > 0) {
      return 1;
    }
    return -1;
  };
  var isNan = (value) => {
    return typeof value == "number" && value != +value;
  };
  var isPercent = (value) => typeof value === "string" && value.indexOf("%") === value.length - 1;
  var isNumber = (value) => (typeof value === "number" || value instanceof Number) && !isNan(value);
  var isNumOrStr = (value) => isNumber(value) || typeof value === "string";
  var idCounter = 0;
  var uniqueId = (prefix2) => {
    var id = ++idCounter;
    return "".concat(prefix2 || "").concat(id);
  };
  var getPercentValue = function getPercentValue2(percent, totalValue) {
    var defaultValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    var validate = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    if (!isNumber(percent) && typeof percent !== "string") {
      return defaultValue;
    }
    var value;
    if (isPercent(percent)) {
      if (totalValue == null) {
        return defaultValue;
      }
      var index = percent.indexOf("%");
      value = totalValue * parseFloat(percent.slice(0, index)) / 100;
    } else {
      value = +percent;
    }
    if (isNan(value)) {
      value = defaultValue;
    }
    if (validate && totalValue != null && value > totalValue) {
      value = totalValue;
    }
    return value;
  };
  var hasDuplicate = (ary) => {
    if (!Array.isArray(ary)) {
      return false;
    }
    var len = ary.length;
    var cache = {};
    for (var i = 0; i < len; i++) {
      if (!cache[ary[i]]) {
        cache[ary[i]] = true;
      } else {
        return true;
      }
    }
    return false;
  };
  function interpolate$1(start, end, t) {
    if (isNumber(start) && isNumber(end)) {
      return start + t * (end - start);
    }
    return end;
  }
  function findEntryInArray(ary, specifiedKey, specifiedValue) {
    if (!ary || !ary.length) {
      return void 0;
    }
    return ary.find((entry) => entry && (typeof specifiedKey === "function" ? specifiedKey(entry) : get$1(entry, specifiedKey)) === specifiedValue);
  }
  var isNullish = (value) => {
    return value === null || typeof value === "undefined";
  };
  var upperFirst = (value) => {
    if (isNullish(value)) {
      return value;
    }
    return "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1));
  };
  function isNotNil(value) {
    return value != null;
  }
  function noop$2() {
  }
  var _excluded$i = ["type", "size", "sizeType"];
  function _extends$l() {
    return _extends$l = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$l.apply(null, arguments);
  }
  function ownKeys$z(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$z(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$z(Object(t), true).forEach(function(r3) {
        _defineProperty$B(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$z(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$B(e, r2, t) {
    return (r2 = _toPropertyKey$B(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$B(t) {
    var i = _toPrimitive$B(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$B(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function _objectWithoutProperties$i(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$i(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$i(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  var symbolFactories = {
    symbolCircle,
    symbolCross,
    symbolDiamond,
    symbolSquare,
    symbolStar,
    symbolTriangle,
    symbolWye
  };
  var RADIAN$1 = Math.PI / 180;
  var getSymbolFactory = (type) => {
    var name = "symbol".concat(upperFirst(type));
    return symbolFactories[name] || symbolCircle;
  };
  var calculateAreaSize = (size, sizeType, type) => {
    if (sizeType === "area") {
      return size;
    }
    switch (type) {
      case "cross":
        return 5 * size * size / 9;
      case "diamond":
        return 0.5 * size * size / Math.sqrt(3);
      case "square":
        return size * size;
      case "star": {
        var angle = 18 * RADIAN$1;
        return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.tan(angle) ** 2);
      }
      case "triangle":
        return Math.sqrt(3) * size * size / 4;
      case "wye":
        return (21 - 10 * Math.sqrt(3)) * size * size / 8;
      default:
        return Math.PI * size * size / 4;
    }
  };
  var registerSymbol = (key, factory) => {
    symbolFactories["symbol".concat(upperFirst(key))] = factory;
  };
  var Symbols = (_ref2) => {
    var {
      type = "circle",
      size = 64,
      sizeType = "area"
    } = _ref2, rest = _objectWithoutProperties$i(_ref2, _excluded$i);
    var props = _objectSpread$z(_objectSpread$z({}, rest), {}, {
      type,
      size,
      sizeType
    });
    var realType = "circle";
    if (typeof type === "string") {
      realType = type;
    }
    var getPath2 = () => {
      var symbolFactory = getSymbolFactory(realType);
      var symbol = Symbol$1().type(symbolFactory).size(calculateAreaSize(size, sizeType, realType));
      var s2 = symbol();
      if (s2 === null) {
        return void 0;
      }
      return s2;
    };
    var {
      className,
      cx,
      cy
    } = props;
    var filteredProps = svgPropertiesAndEvents(props);
    if (isNumber(cx) && isNumber(cy) && isNumber(size)) {
      return /* @__PURE__ */ React__namespace.createElement("path", _extends$l({}, filteredProps, {
        className: clsx("recharts-symbols", className),
        transform: "translate(".concat(cx, ", ").concat(cy, ")"),
        d: getPath2()
      }));
    }
    return null;
  };
  Symbols.registerSymbol = registerSymbol;
  var isPolarCoordinate = (c2) => {
    return "radius" in c2 && "startAngle" in c2 && "endAngle" in c2;
  };
  var adaptEventHandlers = (props, newHandler) => {
    if (!props || typeof props === "function" || typeof props === "boolean") {
      return null;
    }
    var inputProps = props;
    if (/* @__PURE__ */ React.isValidElement(props)) {
      inputProps = props.props;
    }
    if (typeof inputProps !== "object" && typeof inputProps !== "function") {
      return null;
    }
    var out = {};
    Object.keys(inputProps).forEach((key) => {
      if (isEventKey(key)) {
        out[key] = ((e) => inputProps[key](inputProps, e));
      }
    });
    return out;
  };
  var getEventHandlerOfChild = (originalHandler, data, index) => (e) => {
    originalHandler(data, index, e);
    return null;
  };
  var adaptEventsOfChild = (props, data, index) => {
    if (props === null || typeof props !== "object" && typeof props !== "function") {
      return null;
    }
    var out = null;
    Object.keys(props).forEach((key) => {
      var item = props[key];
      if (isEventKey(key) && typeof item === "function") {
        if (!out) out = {};
        out[key] = getEventHandlerOfChild(item, data, index);
      }
    });
    return out;
  };
  function ownKeys$y(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$y(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$y(Object(t), true).forEach(function(r3) {
        _defineProperty$A(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$y(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$A(e, r2, t) {
    return (r2 = _toPropertyKey$A(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$A(t) {
    var i = _toPrimitive$A(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$A(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function resolveDefaultProps(realProps, defaultProps) {
    var resolvedProps = _objectSpread$y({}, realProps);
    var dp = defaultProps;
    var keys = Object.keys(defaultProps);
    var withDefaults = keys.reduce((acc, key) => {
      if (acc[key] === void 0 && dp[key] !== void 0) {
        acc[key] = dp[key];
      }
      return acc;
    }, resolvedProps);
    return withDefaults;
  }
  var uniqBy$3 = {};
  var uniqBy$2 = {};
  var hasRequiredUniqBy$2;
  function requireUniqBy$2() {
    if (hasRequiredUniqBy$2) return uniqBy$2;
    hasRequiredUniqBy$2 = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function uniqBy2(arr, mapper) {
        const map2 = /* @__PURE__ */ new Map();
        for (let i = 0; i < arr.length; i++) {
          const item = arr[i];
          const key = mapper(item);
          if (!map2.has(key)) {
            map2.set(key, item);
          }
        }
        return Array.from(map2.values());
      }
      exports$1.uniqBy = uniqBy2;
    })(uniqBy$2);
    return uniqBy$2;
  }
  var identity$4 = {};
  var hasRequiredIdentity;
  function requireIdentity() {
    if (hasRequiredIdentity) return identity$4;
    hasRequiredIdentity = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function identity2(x2) {
        return x2;
      }
      exports$1.identity = identity2;
    })(identity$4);
    return identity$4;
  }
  var isArrayLikeObject = {};
  var isArrayLike = {};
  var isLength = {};
  var hasRequiredIsLength;
  function requireIsLength() {
    if (hasRequiredIsLength) return isLength;
    hasRequiredIsLength = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function isLength2(value) {
        return Number.isSafeInteger(value) && value >= 0;
      }
      exports$1.isLength = isLength2;
    })(isLength);
    return isLength;
  }
  var hasRequiredIsArrayLike;
  function requireIsArrayLike() {
    if (hasRequiredIsArrayLike) return isArrayLike;
    hasRequiredIsArrayLike = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const isLength2 = /* @__PURE__ */ requireIsLength();
      function isArrayLike2(value) {
        return value != null && typeof value !== "function" && isLength2.isLength(value.length);
      }
      exports$1.isArrayLike = isArrayLike2;
    })(isArrayLike);
    return isArrayLike;
  }
  var isObjectLike = {};
  var hasRequiredIsObjectLike;
  function requireIsObjectLike() {
    if (hasRequiredIsObjectLike) return isObjectLike;
    hasRequiredIsObjectLike = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function isObjectLike2(value) {
        return typeof value === "object" && value !== null;
      }
      exports$1.isObjectLike = isObjectLike2;
    })(isObjectLike);
    return isObjectLike;
  }
  var hasRequiredIsArrayLikeObject;
  function requireIsArrayLikeObject() {
    if (hasRequiredIsArrayLikeObject) return isArrayLikeObject;
    hasRequiredIsArrayLikeObject = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const isArrayLike2 = /* @__PURE__ */ requireIsArrayLike();
      const isObjectLike2 = /* @__PURE__ */ requireIsObjectLike();
      function isArrayLikeObject2(value) {
        return isObjectLike2.isObjectLike(value) && isArrayLike2.isArrayLike(value);
      }
      exports$1.isArrayLikeObject = isArrayLikeObject2;
    })(isArrayLikeObject);
    return isArrayLikeObject;
  }
  var iteratee = {};
  var property = {};
  var hasRequiredProperty;
  function requireProperty() {
    if (hasRequiredProperty) return property;
    hasRequiredProperty = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const get2 = /* @__PURE__ */ requireGet$1();
      function property2(path) {
        return function(object2) {
          return get2.get(object2, path);
        };
      }
      exports$1.property = property2;
    })(property);
    return property;
  }
  var matches = {};
  var isMatch = {};
  var isMatchWith = {};
  var isObject = {};
  var hasRequiredIsObject;
  function requireIsObject() {
    if (hasRequiredIsObject) return isObject;
    hasRequiredIsObject = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function isObject2(value) {
        return value !== null && (typeof value === "object" || typeof value === "function");
      }
      exports$1.isObject = isObject2;
    })(isObject);
    return isObject;
  }
  var isPrimitive = {};
  var hasRequiredIsPrimitive;
  function requireIsPrimitive() {
    if (hasRequiredIsPrimitive) return isPrimitive;
    hasRequiredIsPrimitive = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function isPrimitive2(value) {
        return value == null || typeof value !== "object" && typeof value !== "function";
      }
      exports$1.isPrimitive = isPrimitive2;
    })(isPrimitive);
    return isPrimitive;
  }
  var eq = {};
  var hasRequiredEq;
  function requireEq() {
    if (hasRequiredEq) return eq;
    hasRequiredEq = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function eq2(value, other) {
        return value === other || Number.isNaN(value) && Number.isNaN(other);
      }
      exports$1.eq = eq2;
    })(eq);
    return eq;
  }
  var hasRequiredIsMatchWith;
  function requireIsMatchWith() {
    if (hasRequiredIsMatchWith) return isMatchWith;
    hasRequiredIsMatchWith = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const isObject2 = /* @__PURE__ */ requireIsObject();
      const isPrimitive2 = /* @__PURE__ */ requireIsPrimitive();
      const eq2 = /* @__PURE__ */ requireEq();
      function isMatchWith2(target, source, compare) {
        if (typeof compare !== "function") {
          return isMatchWith2(target, source, () => void 0);
        }
        return isMatchWithInternal(target, source, function doesMatch(objValue, srcValue, key, object2, source2, stack) {
          const isEqual = compare(objValue, srcValue, key, object2, source2, stack);
          if (isEqual !== void 0) {
            return Boolean(isEqual);
          }
          return isMatchWithInternal(objValue, srcValue, doesMatch, stack);
        }, /* @__PURE__ */ new Map());
      }
      function isMatchWithInternal(target, source, compare, stack) {
        if (source === target) {
          return true;
        }
        switch (typeof source) {
          case "object": {
            return isObjectMatch(target, source, compare, stack);
          }
          case "function": {
            const sourceKeys = Object.keys(source);
            if (sourceKeys.length > 0) {
              return isMatchWithInternal(target, { ...source }, compare, stack);
            }
            return eq2.eq(target, source);
          }
          default: {
            if (!isObject2.isObject(target)) {
              return eq2.eq(target, source);
            }
            if (typeof source === "string") {
              return source === "";
            }
            return true;
          }
        }
      }
      function isObjectMatch(target, source, compare, stack) {
        if (source == null) {
          return true;
        }
        if (Array.isArray(source)) {
          return isArrayMatch(target, source, compare, stack);
        }
        if (source instanceof Map) {
          return isMapMatch(target, source, compare, stack);
        }
        if (source instanceof Set) {
          return isSetMatch(target, source, compare, stack);
        }
        const keys = Object.keys(source);
        if (target == null) {
          return keys.length === 0;
        }
        if (keys.length === 0) {
          return true;
        }
        if (stack == null ? void 0 : stack.has(source)) {
          return stack.get(source) === target;
        }
        stack == null ? void 0 : stack.set(source, target);
        try {
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (!isPrimitive2.isPrimitive(target) && !(key in target)) {
              return false;
            }
            if (source[key] === void 0 && target[key] !== void 0) {
              return false;
            }
            if (source[key] === null && target[key] !== null) {
              return false;
            }
            const isEqual = compare(target[key], source[key], key, target, source, stack);
            if (!isEqual) {
              return false;
            }
          }
          return true;
        } finally {
          stack == null ? void 0 : stack.delete(source);
        }
      }
      function isMapMatch(target, source, compare, stack) {
        if (source.size === 0) {
          return true;
        }
        if (!(target instanceof Map)) {
          return false;
        }
        for (const [key, sourceValue] of source.entries()) {
          const targetValue = target.get(key);
          const isEqual = compare(targetValue, sourceValue, key, target, source, stack);
          if (isEqual === false) {
            return false;
          }
        }
        return true;
      }
      function isArrayMatch(target, source, compare, stack) {
        if (source.length === 0) {
          return true;
        }
        if (!Array.isArray(target)) {
          return false;
        }
        const countedIndex = /* @__PURE__ */ new Set();
        for (let i = 0; i < source.length; i++) {
          const sourceItem = source[i];
          let found = false;
          for (let j = 0; j < target.length; j++) {
            if (countedIndex.has(j)) {
              continue;
            }
            const targetItem = target[j];
            let matches2 = false;
            const isEqual = compare(targetItem, sourceItem, i, target, source, stack);
            if (isEqual) {
              matches2 = true;
            }
            if (matches2) {
              countedIndex.add(j);
              found = true;
              break;
            }
          }
          if (!found) {
            return false;
          }
        }
        return true;
      }
      function isSetMatch(target, source, compare, stack) {
        if (source.size === 0) {
          return true;
        }
        if (!(target instanceof Set)) {
          return false;
        }
        return isArrayMatch([...target], [...source], compare, stack);
      }
      exports$1.isMatchWith = isMatchWith2;
      exports$1.isSetMatch = isSetMatch;
    })(isMatchWith);
    return isMatchWith;
  }
  var hasRequiredIsMatch;
  function requireIsMatch() {
    if (hasRequiredIsMatch) return isMatch;
    hasRequiredIsMatch = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const isMatchWith2 = /* @__PURE__ */ requireIsMatchWith();
      function isMatch2(target, source) {
        return isMatchWith2.isMatchWith(target, source, () => void 0);
      }
      exports$1.isMatch = isMatch2;
    })(isMatch);
    return isMatch;
  }
  var cloneDeep$1 = {};
  var cloneDeepWith$1 = {};
  var getSymbols = {};
  var hasRequiredGetSymbols;
  function requireGetSymbols() {
    if (hasRequiredGetSymbols) return getSymbols;
    hasRequiredGetSymbols = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function getSymbols2(object2) {
        return Object.getOwnPropertySymbols(object2).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object2, symbol));
      }
      exports$1.getSymbols = getSymbols2;
    })(getSymbols);
    return getSymbols;
  }
  var getTag = {};
  var hasRequiredGetTag;
  function requireGetTag() {
    if (hasRequiredGetTag) return getTag;
    hasRequiredGetTag = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function getTag2(value) {
        if (value == null) {
          return value === void 0 ? "[object Undefined]" : "[object Null]";
        }
        return Object.prototype.toString.call(value);
      }
      exports$1.getTag = getTag2;
    })(getTag);
    return getTag;
  }
  var tags = {};
  var hasRequiredTags;
  function requireTags() {
    if (hasRequiredTags) return tags;
    hasRequiredTags = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const regexpTag = "[object RegExp]";
      const stringTag = "[object String]";
      const numberTag = "[object Number]";
      const booleanTag = "[object Boolean]";
      const argumentsTag = "[object Arguments]";
      const symbolTag = "[object Symbol]";
      const dateTag = "[object Date]";
      const mapTag = "[object Map]";
      const setTag = "[object Set]";
      const arrayTag = "[object Array]";
      const functionTag = "[object Function]";
      const arrayBufferTag = "[object ArrayBuffer]";
      const objectTag = "[object Object]";
      const errorTag = "[object Error]";
      const dataViewTag = "[object DataView]";
      const uint8ArrayTag = "[object Uint8Array]";
      const uint8ClampedArrayTag = "[object Uint8ClampedArray]";
      const uint16ArrayTag = "[object Uint16Array]";
      const uint32ArrayTag = "[object Uint32Array]";
      const bigUint64ArrayTag = "[object BigUint64Array]";
      const int8ArrayTag = "[object Int8Array]";
      const int16ArrayTag = "[object Int16Array]";
      const int32ArrayTag = "[object Int32Array]";
      const bigInt64ArrayTag = "[object BigInt64Array]";
      const float32ArrayTag = "[object Float32Array]";
      const float64ArrayTag = "[object Float64Array]";
      exports$1.argumentsTag = argumentsTag;
      exports$1.arrayBufferTag = arrayBufferTag;
      exports$1.arrayTag = arrayTag;
      exports$1.bigInt64ArrayTag = bigInt64ArrayTag;
      exports$1.bigUint64ArrayTag = bigUint64ArrayTag;
      exports$1.booleanTag = booleanTag;
      exports$1.dataViewTag = dataViewTag;
      exports$1.dateTag = dateTag;
      exports$1.errorTag = errorTag;
      exports$1.float32ArrayTag = float32ArrayTag;
      exports$1.float64ArrayTag = float64ArrayTag;
      exports$1.functionTag = functionTag;
      exports$1.int16ArrayTag = int16ArrayTag;
      exports$1.int32ArrayTag = int32ArrayTag;
      exports$1.int8ArrayTag = int8ArrayTag;
      exports$1.mapTag = mapTag;
      exports$1.numberTag = numberTag;
      exports$1.objectTag = objectTag;
      exports$1.regexpTag = regexpTag;
      exports$1.setTag = setTag;
      exports$1.stringTag = stringTag;
      exports$1.symbolTag = symbolTag;
      exports$1.uint16ArrayTag = uint16ArrayTag;
      exports$1.uint32ArrayTag = uint32ArrayTag;
      exports$1.uint8ArrayTag = uint8ArrayTag;
      exports$1.uint8ClampedArrayTag = uint8ClampedArrayTag;
    })(tags);
    return tags;
  }
  var isTypedArray = {};
  var hasRequiredIsTypedArray;
  function requireIsTypedArray() {
    if (hasRequiredIsTypedArray) return isTypedArray;
    hasRequiredIsTypedArray = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function isTypedArray2(x2) {
        return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
      }
      exports$1.isTypedArray = isTypedArray2;
    })(isTypedArray);
    return isTypedArray;
  }
  var hasRequiredCloneDeepWith$1;
  function requireCloneDeepWith$1() {
    if (hasRequiredCloneDeepWith$1) return cloneDeepWith$1;
    hasRequiredCloneDeepWith$1 = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const getSymbols2 = /* @__PURE__ */ requireGetSymbols();
      const getTag2 = /* @__PURE__ */ requireGetTag();
      const tags2 = /* @__PURE__ */ requireTags();
      const isPrimitive2 = /* @__PURE__ */ requireIsPrimitive();
      const isTypedArray2 = /* @__PURE__ */ requireIsTypedArray();
      function cloneDeepWith2(obj, cloneValue) {
        return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), cloneValue);
      }
      function cloneDeepWithImpl(valueToClone, keyToClone, objectToClone, stack = /* @__PURE__ */ new Map(), cloneValue = void 0) {
        const cloned = cloneValue == null ? void 0 : cloneValue(valueToClone, keyToClone, objectToClone, stack);
        if (cloned !== void 0) {
          return cloned;
        }
        if (isPrimitive2.isPrimitive(valueToClone)) {
          return valueToClone;
        }
        if (stack.has(valueToClone)) {
          return stack.get(valueToClone);
        }
        if (Array.isArray(valueToClone)) {
          const result = new Array(valueToClone.length);
          stack.set(valueToClone, result);
          for (let i = 0; i < valueToClone.length; i++) {
            result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
          }
          if (Object.hasOwn(valueToClone, "index")) {
            result.index = valueToClone.index;
          }
          if (Object.hasOwn(valueToClone, "input")) {
            result.input = valueToClone.input;
          }
          return result;
        }
        if (valueToClone instanceof Date) {
          return new Date(valueToClone.getTime());
        }
        if (valueToClone instanceof RegExp) {
          const result = new RegExp(valueToClone.source, valueToClone.flags);
          result.lastIndex = valueToClone.lastIndex;
          return result;
        }
        if (valueToClone instanceof Map) {
          const result = /* @__PURE__ */ new Map();
          stack.set(valueToClone, result);
          for (const [key, value] of valueToClone) {
            result.set(key, cloneDeepWithImpl(value, key, objectToClone, stack, cloneValue));
          }
          return result;
        }
        if (valueToClone instanceof Set) {
          const result = /* @__PURE__ */ new Set();
          stack.set(valueToClone, result);
          for (const value of valueToClone) {
            result.add(cloneDeepWithImpl(value, void 0, objectToClone, stack, cloneValue));
          }
          return result;
        }
        if (typeof Buffer !== "undefined" && Buffer.isBuffer(valueToClone)) {
          return valueToClone.subarray();
        }
        if (isTypedArray2.isTypedArray(valueToClone)) {
          const result = new (Object.getPrototypeOf(valueToClone)).constructor(valueToClone.length);
          stack.set(valueToClone, result);
          for (let i = 0; i < valueToClone.length; i++) {
            result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
          }
          return result;
        }
        if (valueToClone instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && valueToClone instanceof SharedArrayBuffer) {
          return valueToClone.slice(0);
        }
        if (valueToClone instanceof DataView) {
          const result = new DataView(valueToClone.buffer.slice(0), valueToClone.byteOffset, valueToClone.byteLength);
          stack.set(valueToClone, result);
          copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
          return result;
        }
        if (typeof File !== "undefined" && valueToClone instanceof File) {
          const result = new File([valueToClone], valueToClone.name, {
            type: valueToClone.type
          });
          stack.set(valueToClone, result);
          copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
          return result;
        }
        if (typeof Blob !== "undefined" && valueToClone instanceof Blob) {
          const result = new Blob([valueToClone], { type: valueToClone.type });
          stack.set(valueToClone, result);
          copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
          return result;
        }
        if (valueToClone instanceof Error) {
          const result = new valueToClone.constructor();
          stack.set(valueToClone, result);
          result.message = valueToClone.message;
          result.name = valueToClone.name;
          result.stack = valueToClone.stack;
          result.cause = valueToClone.cause;
          copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
          return result;
        }
        if (valueToClone instanceof Boolean) {
          const result = new Boolean(valueToClone.valueOf());
          stack.set(valueToClone, result);
          copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
          return result;
        }
        if (valueToClone instanceof Number) {
          const result = new Number(valueToClone.valueOf());
          stack.set(valueToClone, result);
          copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
          return result;
        }
        if (valueToClone instanceof String) {
          const result = new String(valueToClone.valueOf());
          stack.set(valueToClone, result);
          copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
          return result;
        }
        if (typeof valueToClone === "object" && isCloneableObject(valueToClone)) {
          const result = Object.create(Object.getPrototypeOf(valueToClone));
          stack.set(valueToClone, result);
          copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
          return result;
        }
        return valueToClone;
      }
      function copyProperties(target, source, objectToClone = target, stack, cloneValue) {
        const keys = [...Object.keys(source), ...getSymbols2.getSymbols(source)];
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const descriptor = Object.getOwnPropertyDescriptor(target, key);
          if (descriptor == null || descriptor.writable) {
            target[key] = cloneDeepWithImpl(source[key], key, objectToClone, stack, cloneValue);
          }
        }
      }
      function isCloneableObject(object2) {
        switch (getTag2.getTag(object2)) {
          case tags2.argumentsTag:
          case tags2.arrayTag:
          case tags2.arrayBufferTag:
          case tags2.dataViewTag:
          case tags2.booleanTag:
          case tags2.dateTag:
          case tags2.float32ArrayTag:
          case tags2.float64ArrayTag:
          case tags2.int8ArrayTag:
          case tags2.int16ArrayTag:
          case tags2.int32ArrayTag:
          case tags2.mapTag:
          case tags2.numberTag:
          case tags2.objectTag:
          case tags2.regexpTag:
          case tags2.setTag:
          case tags2.stringTag:
          case tags2.symbolTag:
          case tags2.uint8ArrayTag:
          case tags2.uint8ClampedArrayTag:
          case tags2.uint16ArrayTag:
          case tags2.uint32ArrayTag: {
            return true;
          }
          default: {
            return false;
          }
        }
      }
      exports$1.cloneDeepWith = cloneDeepWith2;
      exports$1.cloneDeepWithImpl = cloneDeepWithImpl;
      exports$1.copyProperties = copyProperties;
    })(cloneDeepWith$1);
    return cloneDeepWith$1;
  }
  var hasRequiredCloneDeep$1;
  function requireCloneDeep$1() {
    if (hasRequiredCloneDeep$1) return cloneDeep$1;
    hasRequiredCloneDeep$1 = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const cloneDeepWith2 = /* @__PURE__ */ requireCloneDeepWith$1();
      function cloneDeep2(obj) {
        return cloneDeepWith2.cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), void 0);
      }
      exports$1.cloneDeep = cloneDeep2;
    })(cloneDeep$1);
    return cloneDeep$1;
  }
  var hasRequiredMatches;
  function requireMatches() {
    if (hasRequiredMatches) return matches;
    hasRequiredMatches = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const isMatch2 = /* @__PURE__ */ requireIsMatch();
      const cloneDeep2 = /* @__PURE__ */ requireCloneDeep$1();
      function matches2(source) {
        source = cloneDeep2.cloneDeep(source);
        return (target) => {
          return isMatch2.isMatch(target, source);
        };
      }
      exports$1.matches = matches2;
    })(matches);
    return matches;
  }
  var matchesProperty = {};
  var cloneDeep = {};
  var cloneDeepWith = {};
  var hasRequiredCloneDeepWith;
  function requireCloneDeepWith() {
    if (hasRequiredCloneDeepWith) return cloneDeepWith;
    hasRequiredCloneDeepWith = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const cloneDeepWith$12 = /* @__PURE__ */ requireCloneDeepWith$1();
      const tags2 = /* @__PURE__ */ requireTags();
      function cloneDeepWith2(obj, customizer) {
        return cloneDeepWith$12.cloneDeepWith(obj, (value, key, object2, stack) => {
          const cloned = customizer == null ? void 0 : customizer(value, key, object2, stack);
          if (cloned !== void 0) {
            return cloned;
          }
          if (typeof obj !== "object") {
            return void 0;
          }
          switch (Object.prototype.toString.call(obj)) {
            case tags2.numberTag:
            case tags2.stringTag:
            case tags2.booleanTag: {
              const result = new obj.constructor(obj == null ? void 0 : obj.valueOf());
              cloneDeepWith$12.copyProperties(result, obj);
              return result;
            }
            case tags2.argumentsTag: {
              const result = {};
              cloneDeepWith$12.copyProperties(result, obj);
              result.length = obj.length;
              result[Symbol.iterator] = obj[Symbol.iterator];
              return result;
            }
            default: {
              return void 0;
            }
          }
        });
      }
      exports$1.cloneDeepWith = cloneDeepWith2;
    })(cloneDeepWith);
    return cloneDeepWith;
  }
  var hasRequiredCloneDeep;
  function requireCloneDeep() {
    if (hasRequiredCloneDeep) return cloneDeep;
    hasRequiredCloneDeep = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const cloneDeepWith2 = /* @__PURE__ */ requireCloneDeepWith();
      function cloneDeep2(obj) {
        return cloneDeepWith2.cloneDeepWith(obj);
      }
      exports$1.cloneDeep = cloneDeep2;
    })(cloneDeep);
    return cloneDeep;
  }
  var has$2 = {};
  var isIndex = {};
  var hasRequiredIsIndex;
  function requireIsIndex() {
    if (hasRequiredIsIndex) return isIndex;
    hasRequiredIsIndex = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const IS_UNSIGNED_INTEGER = /^(?:0|[1-9]\d*)$/;
      function isIndex2(value, length = Number.MAX_SAFE_INTEGER) {
        switch (typeof value) {
          case "number": {
            return Number.isInteger(value) && value >= 0 && value < length;
          }
          case "symbol": {
            return false;
          }
          case "string": {
            return IS_UNSIGNED_INTEGER.test(value);
          }
        }
      }
      exports$1.isIndex = isIndex2;
    })(isIndex);
    return isIndex;
  }
  var isArguments = {};
  var hasRequiredIsArguments;
  function requireIsArguments() {
    if (hasRequiredIsArguments) return isArguments;
    hasRequiredIsArguments = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const getTag2 = /* @__PURE__ */ requireGetTag();
      function isArguments2(value) {
        return value !== null && typeof value === "object" && getTag2.getTag(value) === "[object Arguments]";
      }
      exports$1.isArguments = isArguments2;
    })(isArguments);
    return isArguments;
  }
  var hasRequiredHas;
  function requireHas() {
    if (hasRequiredHas) return has$2;
    hasRequiredHas = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const isDeepKey2 = /* @__PURE__ */ requireIsDeepKey();
      const isIndex2 = /* @__PURE__ */ requireIsIndex();
      const isArguments2 = /* @__PURE__ */ requireIsArguments();
      const toPath2 = /* @__PURE__ */ requireToPath();
      function has2(object2, path) {
        let resolvedPath;
        if (Array.isArray(path)) {
          resolvedPath = path;
        } else if (typeof path === "string" && isDeepKey2.isDeepKey(path) && (object2 == null ? void 0 : object2[path]) == null) {
          resolvedPath = toPath2.toPath(path);
        } else {
          resolvedPath = [path];
        }
        if (resolvedPath.length === 0) {
          return false;
        }
        let current2 = object2;
        for (let i = 0; i < resolvedPath.length; i++) {
          const key = resolvedPath[i];
          if (current2 == null || !Object.hasOwn(current2, key)) {
            const isSparseIndex = (Array.isArray(current2) || isArguments2.isArguments(current2)) && isIndex2.isIndex(key) && key < current2.length;
            if (!isSparseIndex) {
              return false;
            }
          }
          current2 = current2[key];
        }
        return true;
      }
      exports$1.has = has2;
    })(has$2);
    return has$2;
  }
  var hasRequiredMatchesProperty;
  function requireMatchesProperty() {
    if (hasRequiredMatchesProperty) return matchesProperty;
    hasRequiredMatchesProperty = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const isMatch2 = /* @__PURE__ */ requireIsMatch();
      const toKey2 = /* @__PURE__ */ requireToKey();
      const cloneDeep2 = /* @__PURE__ */ requireCloneDeep();
      const get2 = /* @__PURE__ */ requireGet$1();
      const has2 = /* @__PURE__ */ requireHas();
      function matchesProperty2(property2, source) {
        switch (typeof property2) {
          case "object": {
            if (Object.is(property2 == null ? void 0 : property2.valueOf(), -0)) {
              property2 = "-0";
            }
            break;
          }
          case "number": {
            property2 = toKey2.toKey(property2);
            break;
          }
        }
        source = cloneDeep2.cloneDeep(source);
        return function(target) {
          const result = get2.get(target, property2);
          if (result === void 0) {
            return has2.has(target, property2);
          }
          if (source === void 0) {
            return result === void 0;
          }
          return isMatch2.isMatch(result, source);
        };
      }
      exports$1.matchesProperty = matchesProperty2;
    })(matchesProperty);
    return matchesProperty;
  }
  var hasRequiredIteratee;
  function requireIteratee() {
    if (hasRequiredIteratee) return iteratee;
    hasRequiredIteratee = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const identity2 = /* @__PURE__ */ requireIdentity();
      const property2 = /* @__PURE__ */ requireProperty();
      const matches2 = /* @__PURE__ */ requireMatches();
      const matchesProperty2 = /* @__PURE__ */ requireMatchesProperty();
      function iteratee2(value) {
        if (value == null) {
          return identity2.identity;
        }
        switch (typeof value) {
          case "function": {
            return value;
          }
          case "object": {
            if (Array.isArray(value) && value.length === 2) {
              return matchesProperty2.matchesProperty(value[0], value[1]);
            }
            return matches2.matches(value);
          }
          case "string":
          case "symbol":
          case "number": {
            return property2.property(value);
          }
        }
      }
      exports$1.iteratee = iteratee2;
    })(iteratee);
    return iteratee;
  }
  var hasRequiredUniqBy$1;
  function requireUniqBy$1() {
    if (hasRequiredUniqBy$1) return uniqBy$3;
    hasRequiredUniqBy$1 = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const uniqBy$12 = /* @__PURE__ */ requireUniqBy$2();
      const identity2 = /* @__PURE__ */ requireIdentity();
      const isArrayLikeObject2 = /* @__PURE__ */ requireIsArrayLikeObject();
      const iteratee2 = /* @__PURE__ */ requireIteratee();
      function uniqBy2(array2, iteratee$1 = identity2.identity) {
        if (!isArrayLikeObject2.isArrayLikeObject(array2)) {
          return [];
        }
        return uniqBy$12.uniqBy(Array.from(array2), iteratee2.iteratee(iteratee$1));
      }
      exports$1.uniqBy = uniqBy2;
    })(uniqBy$3);
    return uniqBy$3;
  }
  var uniqBy$1;
  var hasRequiredUniqBy;
  function requireUniqBy() {
    if (hasRequiredUniqBy) return uniqBy$1;
    hasRequiredUniqBy = 1;
    uniqBy$1 = requireUniqBy$1().uniqBy;
    return uniqBy$1;
  }
  var uniqByExports = /* @__PURE__ */ requireUniqBy();
  const uniqBy = /* @__PURE__ */ getDefaultExportFromCjs(uniqByExports);
  function getUniqPayload(payload, option, defaultUniqBy2) {
    if (option === true) {
      return uniqBy(payload, defaultUniqBy2);
    }
    if (typeof option === "function") {
      return uniqBy(payload, option);
    }
    return payload;
  }
  var withSelector$1 = { exports: {} };
  var withSelector_production = {};
  var shim = { exports: {} };
  var useSyncExternalStoreShim_production = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredUseSyncExternalStoreShim_production;
  function requireUseSyncExternalStoreShim_production() {
    if (hasRequiredUseSyncExternalStoreShim_production) return useSyncExternalStoreShim_production;
    hasRequiredUseSyncExternalStoreShim_production = 1;
    var React$1 = React;
    function is2(x2, y2) {
      return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
    }
    var objectIs = "function" === typeof Object.is ? Object.is : is2, useState = React$1.useState, useEffect = React$1.useEffect, useLayoutEffect = React$1.useLayoutEffect, useDebugValue = React$1.useDebugValue;
    function useSyncExternalStore$2(subscribe, getSnapshot) {
      var value = getSnapshot(), _useState = useState({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
      useLayoutEffect(
        function() {
          inst.value = value;
          inst.getSnapshot = getSnapshot;
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        },
        [subscribe, value, getSnapshot]
      );
      useEffect(
        function() {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          return subscribe(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          });
        },
        [subscribe]
      );
      useDebugValue(value);
      return value;
    }
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      inst = inst.value;
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
      } catch (error) {
        return true;
      }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
      return getSnapshot();
    }
    var shim2 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    useSyncExternalStoreShim_production.useSyncExternalStore = void 0 !== React$1.useSyncExternalStore ? React$1.useSyncExternalStore : shim2;
    return useSyncExternalStoreShim_production;
  }
  var hasRequiredShim;
  function requireShim() {
    if (hasRequiredShim) return shim.exports;
    hasRequiredShim = 1;
    {
      shim.exports = requireUseSyncExternalStoreShim_production();
    }
    return shim.exports;
  }
  /**
   * @license React
   * use-sync-external-store-shim/with-selector.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredWithSelector_production;
  function requireWithSelector_production() {
    if (hasRequiredWithSelector_production) return withSelector_production;
    hasRequiredWithSelector_production = 1;
    var React$1 = React, shim2 = requireShim();
    function is2(x2, y2) {
      return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
    }
    var objectIs = "function" === typeof Object.is ? Object.is : is2, useSyncExternalStore = shim2.useSyncExternalStore, useRef = React$1.useRef, useEffect = React$1.useEffect, useMemo = React$1.useMemo, useDebugValue = React$1.useDebugValue;
    withSelector_production.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
      var instRef = useRef(null);
      if (null === instRef.current) {
        var inst = { hasValue: false, value: null };
        instRef.current = inst;
      } else inst = instRef.current;
      instRef = useMemo(
        function() {
          function memoizedSelector(nextSnapshot) {
            if (!hasMemo) {
              hasMemo = true;
              memoizedSnapshot = nextSnapshot;
              nextSnapshot = selector(nextSnapshot);
              if (void 0 !== isEqual && inst.hasValue) {
                var currentSelection = inst.value;
                if (isEqual(currentSelection, nextSnapshot))
                  return memoizedSelection = currentSelection;
              }
              return memoizedSelection = nextSnapshot;
            }
            currentSelection = memoizedSelection;
            if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
            var nextSelection = selector(nextSnapshot);
            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
              return memoizedSnapshot = nextSnapshot, currentSelection;
            memoizedSnapshot = nextSnapshot;
            return memoizedSelection = nextSelection;
          }
          var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
          return [
            function() {
              return memoizedSelector(getSnapshot());
            },
            null === maybeGetServerSnapshot ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            }
          ];
        },
        [getSnapshot, getServerSnapshot, selector, isEqual]
      );
      var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
      useEffect(
        function() {
          inst.hasValue = true;
          inst.value = value;
        },
        [value]
      );
      useDebugValue(value);
      return value;
    };
    return withSelector_production;
  }
  var hasRequiredWithSelector$1;
  function requireWithSelector$1() {
    if (hasRequiredWithSelector$1) return withSelector$1.exports;
    hasRequiredWithSelector$1 = 1;
    {
      withSelector$1.exports = requireWithSelector_production();
    }
    return withSelector$1.exports;
  }
  var withSelectorExports = requireWithSelector$1();
  var RechartsReduxContext = /* @__PURE__ */ React.createContext(null);
  var noopDispatch = (a2) => a2;
  var useAppDispatch = () => {
    var context = React.useContext(RechartsReduxContext);
    if (context) {
      return context.store.dispatch;
    }
    return noopDispatch;
  };
  var noop$1 = () => {
  };
  var addNestedSubNoop = () => noop$1;
  var refEquality = (a2, b) => a2 === b;
  function useAppSelector(selector) {
    var context = React.useContext(RechartsReduxContext);
    return withSelectorExports.useSyncExternalStoreWithSelector(context ? context.subscription.addNestedSub : addNestedSubNoop, context ? context.store.getState : noop$1, context ? context.store.getState : noop$1, context ? selector : noop$1, refEquality);
  }
  function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
    if (typeof func !== "function") {
      throw new TypeError(errorMessage);
    }
  }
  function assertIsObject(object2, errorMessage = `expected an object, instead received ${typeof object2}`) {
    if (typeof object2 !== "object") {
      throw new TypeError(errorMessage);
    }
  }
  function assertIsArrayOfFunctions(array2, errorMessage = `expected all items to be functions, instead received the following types: `) {
    if (!array2.every((item) => typeof item === "function")) {
      const itemTypes = array2.map(
        (item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item
      ).join(", ");
      throw new TypeError(`${errorMessage}[${itemTypes}]`);
    }
  }
  var ensureIsArray = (item) => {
    return Array.isArray(item) ? item : [item];
  };
  function getDependencies(createSelectorArgs) {
    const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
    assertIsArrayOfFunctions(
      dependencies,
      `createSelector expects all input-selectors to be functions, but received the following types: `
    );
    return dependencies;
  }
  function collectInputSelectorResults(dependencies, inputSelectorArgs) {
    const inputSelectorResults = [];
    const { length } = dependencies;
    for (let i = 0; i < length; i++) {
      inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
    }
    return inputSelectorResults;
  }
  var StrongRef = class {
    constructor(value) {
      this.value = value;
    }
    deref() {
      return this.value;
    }
  };
  var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
  var UNTERMINATED = 0;
  var TERMINATED = 1;
  function createCacheNode() {
    return {
      s: UNTERMINATED,
      v: void 0,
      o: null,
      p: null
    };
  }
  function weakMapMemoize(func, options = {}) {
    let fnNode = createCacheNode();
    const { resultEqualityCheck } = options;
    let lastResult2;
    let resultsCount = 0;
    function memoized() {
      var _a;
      let cacheNode = fnNode;
      const { length } = arguments;
      for (let i = 0, l = length; i < l; i++) {
        const arg = arguments[i];
        if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
          let objectCache = cacheNode.o;
          if (objectCache === null) {
            cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
          }
          const objectNode = objectCache.get(arg);
          if (objectNode === void 0) {
            cacheNode = createCacheNode();
            objectCache.set(arg, cacheNode);
          } else {
            cacheNode = objectNode;
          }
        } else {
          let primitiveCache = cacheNode.p;
          if (primitiveCache === null) {
            cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
          }
          const primitiveNode = primitiveCache.get(arg);
          if (primitiveNode === void 0) {
            cacheNode = createCacheNode();
            primitiveCache.set(arg, cacheNode);
          } else {
            cacheNode = primitiveNode;
          }
        }
      }
      const terminatedNode = cacheNode;
      let result;
      if (cacheNode.s === TERMINATED) {
        result = cacheNode.v;
      } else {
        result = func.apply(null, arguments);
        resultsCount++;
        if (resultEqualityCheck) {
          const lastResultValue = ((_a = lastResult2 == null ? void 0 : lastResult2.deref) == null ? void 0 : _a.call(lastResult2)) ?? lastResult2;
          if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
            result = lastResultValue;
            resultsCount !== 0 && resultsCount--;
          }
          const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
          lastResult2 = needsWeakRef ? new Ref(result) : result;
        }
      }
      terminatedNode.s = TERMINATED;
      terminatedNode.v = result;
      return result;
    }
    memoized.clearCache = () => {
      fnNode = createCacheNode();
      memoized.resetResultsCount();
    };
    memoized.resultsCount = () => resultsCount;
    memoized.resetResultsCount = () => {
      resultsCount = 0;
    };
    return memoized;
  }
  function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
    const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
      memoize: memoizeOrOptions,
      memoizeOptions: memoizeOptionsFromArgs
    } : memoizeOrOptions;
    const createSelector2 = (...createSelectorArgs) => {
      let recomputations = 0;
      let dependencyRecomputations = 0;
      let lastResult2;
      let directlyPassedOptions = {};
      let resultFunc = createSelectorArgs.pop();
      if (typeof resultFunc === "object") {
        directlyPassedOptions = resultFunc;
        resultFunc = createSelectorArgs.pop();
      }
      assertIsFunction(
        resultFunc,
        `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`
      );
      const combinedOptions = {
        ...createSelectorCreatorOptions,
        ...directlyPassedOptions
      };
      const {
        memoize,
        memoizeOptions = [],
        argsMemoize = weakMapMemoize,
        argsMemoizeOptions = []
      } = combinedOptions;
      const finalMemoizeOptions = ensureIsArray(memoizeOptions);
      const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
      const dependencies = getDependencies(createSelectorArgs);
      const memoizedResultFunc = memoize(function recomputationWrapper() {
        recomputations++;
        return resultFunc.apply(
          null,
          arguments
        );
      }, ...finalMemoizeOptions);
      const selector = argsMemoize(function dependenciesChecker() {
        dependencyRecomputations++;
        const inputSelectorResults = collectInputSelectorResults(
          dependencies,
          arguments
        );
        lastResult2 = memoizedResultFunc.apply(null, inputSelectorResults);
        return lastResult2;
      }, ...finalArgsMemoizeOptions);
      return Object.assign(selector, {
        resultFunc,
        memoizedResultFunc,
        dependencies,
        dependencyRecomputations: () => dependencyRecomputations,
        resetDependencyRecomputations: () => {
          dependencyRecomputations = 0;
        },
        lastResult: () => lastResult2,
        recomputations: () => recomputations,
        resetRecomputations: () => {
          recomputations = 0;
        },
        memoize,
        argsMemoize
      });
    };
    Object.assign(createSelector2, {
      withTypes: () => createSelector2
    });
    return createSelector2;
  }
  var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
  var createStructuredSelector = Object.assign(
    (inputSelectorsObject, selectorCreator = createSelector) => {
      assertIsObject(
        inputSelectorsObject,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`
      );
      const inputSelectorKeys = Object.keys(inputSelectorsObject);
      const dependencies = inputSelectorKeys.map(
        (key) => inputSelectorsObject[key]
      );
      const structuredSelector = selectorCreator(
        dependencies,
        (...inputSelectorResults) => {
          return inputSelectorResults.reduce((composition, value, index) => {
            composition[inputSelectorKeys[index]] = value;
            return composition;
          }, {});
        }
      );
      return structuredSelector;
    },
    { withTypes: () => createStructuredSelector }
  );
  var sortBy$2 = {};
  var orderBy = {};
  var compareValues = {};
  var hasRequiredCompareValues;
  function requireCompareValues() {
    if (hasRequiredCompareValues) return compareValues;
    hasRequiredCompareValues = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function getPriority(a2) {
        if (typeof a2 === "symbol") {
          return 1;
        }
        if (a2 === null) {
          return 2;
        }
        if (a2 === void 0) {
          return 3;
        }
        if (a2 !== a2) {
          return 4;
        }
        return 0;
      }
      const compareValues2 = (a2, b, order) => {
        if (a2 !== b) {
          const aPriority = getPriority(a2);
          const bPriority = getPriority(b);
          if (aPriority === bPriority && aPriority === 0) {
            if (a2 < b) {
              return order === "desc" ? 1 : -1;
            }
            if (a2 > b) {
              return order === "desc" ? -1 : 1;
            }
          }
          return order === "desc" ? bPriority - aPriority : aPriority - bPriority;
        }
        return 0;
      };
      exports$1.compareValues = compareValues2;
    })(compareValues);
    return compareValues;
  }
  var isKey = {};
  var isSymbol = {};
  var hasRequiredIsSymbol;
  function requireIsSymbol() {
    if (hasRequiredIsSymbol) return isSymbol;
    hasRequiredIsSymbol = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function isSymbol2(value) {
        return typeof value === "symbol" || value instanceof Symbol;
      }
      exports$1.isSymbol = isSymbol2;
    })(isSymbol);
    return isSymbol;
  }
  var hasRequiredIsKey;
  function requireIsKey() {
    if (hasRequiredIsKey) return isKey;
    hasRequiredIsKey = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const isSymbol2 = /* @__PURE__ */ requireIsSymbol();
      const regexIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      const regexIsPlainProp = /^\w*$/;
      function isKey2(value, object2) {
        if (Array.isArray(value)) {
          return false;
        }
        if (typeof value === "number" || typeof value === "boolean" || value == null || isSymbol2.isSymbol(value)) {
          return true;
        }
        return typeof value === "string" && (regexIsPlainProp.test(value) || !regexIsDeepProp.test(value)) || object2 != null && Object.hasOwn(object2, value);
      }
      exports$1.isKey = isKey2;
    })(isKey);
    return isKey;
  }
  var hasRequiredOrderBy;
  function requireOrderBy() {
    if (hasRequiredOrderBy) return orderBy;
    hasRequiredOrderBy = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const compareValues2 = /* @__PURE__ */ requireCompareValues();
      const isKey2 = /* @__PURE__ */ requireIsKey();
      const toPath2 = /* @__PURE__ */ requireToPath();
      function orderBy2(collection, criteria, orders, guard) {
        if (collection == null) {
          return [];
        }
        orders = guard ? void 0 : orders;
        if (!Array.isArray(collection)) {
          collection = Object.values(collection);
        }
        if (!Array.isArray(criteria)) {
          criteria = criteria == null ? [null] : [criteria];
        }
        if (criteria.length === 0) {
          criteria = [null];
        }
        if (!Array.isArray(orders)) {
          orders = orders == null ? [] : [orders];
        }
        orders = orders.map((order) => String(order));
        const getValueByNestedPath = (object2, path) => {
          let target = object2;
          for (let i = 0; i < path.length && target != null; ++i) {
            target = target[path[i]];
          }
          return target;
        };
        const getValueByCriterion = (criterion, object2) => {
          if (object2 == null || criterion == null) {
            return object2;
          }
          if (typeof criterion === "object" && "key" in criterion) {
            if (Object.hasOwn(object2, criterion.key)) {
              return object2[criterion.key];
            }
            return getValueByNestedPath(object2, criterion.path);
          }
          if (typeof criterion === "function") {
            return criterion(object2);
          }
          if (Array.isArray(criterion)) {
            return getValueByNestedPath(object2, criterion);
          }
          if (typeof object2 === "object") {
            return object2[criterion];
          }
          return object2;
        };
        const preparedCriteria = criteria.map((criterion) => {
          if (Array.isArray(criterion) && criterion.length === 1) {
            criterion = criterion[0];
          }
          if (criterion == null || typeof criterion === "function" || Array.isArray(criterion) || isKey2.isKey(criterion)) {
            return criterion;
          }
          return { key: criterion, path: toPath2.toPath(criterion) };
        });
        const preparedCollection = collection.map((item) => ({
          original: item,
          criteria: preparedCriteria.map((criterion) => getValueByCriterion(criterion, item))
        }));
        return preparedCollection.slice().sort((a2, b) => {
          for (let i = 0; i < preparedCriteria.length; i++) {
            const comparedResult = compareValues2.compareValues(a2.criteria[i], b.criteria[i], orders[i]);
            if (comparedResult !== 0) {
              return comparedResult;
            }
          }
          return 0;
        }).map((item) => item.original);
      }
      exports$1.orderBy = orderBy2;
    })(orderBy);
    return orderBy;
  }
  var flatten = {};
  var hasRequiredFlatten;
  function requireFlatten() {
    if (hasRequiredFlatten) return flatten;
    hasRequiredFlatten = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function flatten2(arr, depth = 1) {
        const result = [];
        const flooredDepth = Math.floor(depth);
        const recursive = (arr2, currentDepth) => {
          for (let i = 0; i < arr2.length; i++) {
            const item = arr2[i];
            if (Array.isArray(item) && currentDepth < flooredDepth) {
              recursive(item, currentDepth + 1);
            } else {
              result.push(item);
            }
          }
        };
        recursive(arr, 0);
        return result;
      }
      exports$1.flatten = flatten2;
    })(flatten);
    return flatten;
  }
  var isIterateeCall = {};
  var hasRequiredIsIterateeCall;
  function requireIsIterateeCall() {
    if (hasRequiredIsIterateeCall) return isIterateeCall;
    hasRequiredIsIterateeCall = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const isIndex2 = /* @__PURE__ */ requireIsIndex();
      const isArrayLike2 = /* @__PURE__ */ requireIsArrayLike();
      const isObject2 = /* @__PURE__ */ requireIsObject();
      const eq2 = /* @__PURE__ */ requireEq();
      function isIterateeCall2(value, index, object2) {
        if (!isObject2.isObject(object2)) {
          return false;
        }
        if (typeof index === "number" && isArrayLike2.isArrayLike(object2) && isIndex2.isIndex(index) && index < object2.length || typeof index === "string" && index in object2) {
          return eq2.eq(object2[index], value);
        }
        return false;
      }
      exports$1.isIterateeCall = isIterateeCall2;
    })(isIterateeCall);
    return isIterateeCall;
  }
  var hasRequiredSortBy$1;
  function requireSortBy$1() {
    if (hasRequiredSortBy$1) return sortBy$2;
    hasRequiredSortBy$1 = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const orderBy2 = /* @__PURE__ */ requireOrderBy();
      const flatten2 = /* @__PURE__ */ requireFlatten();
      const isIterateeCall2 = /* @__PURE__ */ requireIsIterateeCall();
      function sortBy2(collection, ...criteria) {
        const length = criteria.length;
        if (length > 1 && isIterateeCall2.isIterateeCall(collection, criteria[0], criteria[1])) {
          criteria = [];
        } else if (length > 2 && isIterateeCall2.isIterateeCall(criteria[0], criteria[1], criteria[2])) {
          criteria = [criteria[0]];
        }
        return orderBy2.orderBy(collection, flatten2.flatten(criteria), ["asc"]);
      }
      exports$1.sortBy = sortBy2;
    })(sortBy$2);
    return sortBy$2;
  }
  var sortBy$1;
  var hasRequiredSortBy;
  function requireSortBy() {
    if (hasRequiredSortBy) return sortBy$1;
    hasRequiredSortBy = 1;
    sortBy$1 = requireSortBy$1().sortBy;
    return sortBy$1;
  }
  var sortByExports = /* @__PURE__ */ requireSortBy();
  const sortBy = /* @__PURE__ */ getDefaultExportFromCjs(sortByExports);
  var selectLegendSettings = (state) => state.legend.settings;
  var selectLegendSize = (state) => state.legend.size;
  var selectAllLegendPayload2DArray = (state) => state.legend.payload;
  createSelector([selectAllLegendPayload2DArray, selectLegendSettings], (payloads, _ref2) => {
    var {
      itemSorter
    } = _ref2;
    var flat = payloads.flat(1);
    return itemSorter ? sortBy(flat, itemSorter) : flat;
  });
  var EPS$1 = 1;
  function useElementOffset() {
    var extraDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var [lastBoundingBox, setLastBoundingBox] = React.useState({
      height: 0,
      left: 0,
      top: 0,
      width: 0
    });
    var updateBoundingBox = React.useCallback(
      (node) => {
        if (node != null) {
          var rect = node.getBoundingClientRect();
          var box = {
            height: rect.height,
            left: rect.left,
            top: rect.top,
            width: rect.width
          };
          if (Math.abs(box.height - lastBoundingBox.height) > EPS$1 || Math.abs(box.left - lastBoundingBox.left) > EPS$1 || Math.abs(box.top - lastBoundingBox.top) > EPS$1 || Math.abs(box.width - lastBoundingBox.width) > EPS$1) {
            setLastBoundingBox({
              height: box.height,
              left: box.left,
              top: box.top,
              width: box.width
            });
          }
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [lastBoundingBox.width, lastBoundingBox.height, lastBoundingBox.top, lastBoundingBox.left, ...extraDependencies]
    );
    return [lastBoundingBox, updateBoundingBox];
  }
  function formatProdErrorMessage$1(code) {
    return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
  }
  var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
  var symbol_observable_default = $$observable;
  var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
  var ActionTypes = {
    INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
    REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
  };
  var actionTypes_default = ActionTypes;
  function isPlainObject$5(obj) {
    if (typeof obj !== "object" || obj === null)
      return false;
    let proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
  }
  function createStore(reducer, preloadedState, enhancer) {
    if (typeof reducer !== "function") {
      throw new Error(formatProdErrorMessage$1(2));
    }
    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
      throw new Error(formatProdErrorMessage$1(0));
    }
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
      enhancer = preloadedState;
      preloadedState = void 0;
    }
    if (typeof enhancer !== "undefined") {
      if (typeof enhancer !== "function") {
        throw new Error(formatProdErrorMessage$1(1));
      }
      return enhancer(createStore)(reducer, preloadedState);
    }
    let currentReducer = reducer;
    let currentState = preloadedState;
    let currentListeners = /* @__PURE__ */ new Map();
    let nextListeners = currentListeners;
    let listenerIdCounter = 0;
    let isDispatching = false;
    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = /* @__PURE__ */ new Map();
        currentListeners.forEach((listener2, key) => {
          nextListeners.set(key, listener2);
        });
      }
    }
    function getState() {
      if (isDispatching) {
        throw new Error(formatProdErrorMessage$1(3));
      }
      return currentState;
    }
    function subscribe(listener2) {
      if (typeof listener2 !== "function") {
        throw new Error(formatProdErrorMessage$1(4));
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage$1(5));
      }
      let isSubscribed = true;
      ensureCanMutateNextListeners();
      const listenerId = listenerIdCounter++;
      nextListeners.set(listenerId, listener2);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }
        if (isDispatching) {
          throw new Error(formatProdErrorMessage$1(6));
        }
        isSubscribed = false;
        ensureCanMutateNextListeners();
        nextListeners.delete(listenerId);
        currentListeners = null;
      };
    }
    function dispatch(action) {
      if (!isPlainObject$5(action)) {
        throw new Error(formatProdErrorMessage$1(7));
      }
      if (typeof action.type === "undefined") {
        throw new Error(formatProdErrorMessage$1(8));
      }
      if (typeof action.type !== "string") {
        throw new Error(formatProdErrorMessage$1(17));
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage$1(9));
      }
      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }
      const listeners = currentListeners = nextListeners;
      listeners.forEach((listener2) => {
        listener2();
      });
      return action;
    }
    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== "function") {
        throw new Error(formatProdErrorMessage$1(10));
      }
      currentReducer = nextReducer;
      dispatch({
        type: actionTypes_default.REPLACE
      });
    }
    function observable() {
      const outerSubscribe = subscribe;
      return {
        /**
         * The minimal observable subscription method.
         * @param observer Any object that can be used as an observer.
         * The observer object should have a `next` method.
         * @returns An object with an `unsubscribe` method that can
         * be used to unsubscribe the observable from the store, and prevent further
         * emission of values from the observable.
         */
        subscribe(observer) {
          if (typeof observer !== "object" || observer === null) {
            throw new Error(formatProdErrorMessage$1(11));
          }
          function observeState() {
            const observerAsObserver = observer;
            if (observerAsObserver.next) {
              observerAsObserver.next(getState());
            }
          }
          observeState();
          const unsubscribe = outerSubscribe(observeState);
          return {
            unsubscribe
          };
        },
        [symbol_observable_default]() {
          return this;
        }
      };
    }
    dispatch({
      type: actionTypes_default.INIT
    });
    const store = {
      dispatch,
      subscribe,
      getState,
      replaceReducer,
      [symbol_observable_default]: observable
    };
    return store;
  }
  function assertReducerShape(reducers) {
    Object.keys(reducers).forEach((key) => {
      const reducer = reducers[key];
      const initialState2 = reducer(void 0, {
        type: actionTypes_default.INIT
      });
      if (typeof initialState2 === "undefined") {
        throw new Error(formatProdErrorMessage$1(12));
      }
      if (typeof reducer(void 0, {
        type: actionTypes_default.PROBE_UNKNOWN_ACTION()
      }) === "undefined") {
        throw new Error(formatProdErrorMessage$1(13));
      }
    });
  }
  function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    const finalReducers = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      if (typeof reducers[key] === "function") {
        finalReducers[key] = reducers[key];
      }
    }
    const finalReducerKeys = Object.keys(finalReducers);
    let shapeAssertionError;
    try {
      assertReducerShape(finalReducers);
    } catch (e) {
      shapeAssertionError = e;
    }
    return function combination(state = {}, action) {
      if (shapeAssertionError) {
        throw shapeAssertionError;
      }
      let hasChanged = false;
      const nextState = {};
      for (let i = 0; i < finalReducerKeys.length; i++) {
        const key = finalReducerKeys[i];
        const reducer = finalReducers[key];
        const previousStateForKey = state[key];
        const nextStateForKey = reducer(previousStateForKey, action);
        if (typeof nextStateForKey === "undefined") {
          action && action.type;
          throw new Error(formatProdErrorMessage$1(14));
        }
        nextState[key] = nextStateForKey;
        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
      }
      hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
      return hasChanged ? nextState : state;
    };
  }
  function compose$1(...funcs) {
    if (funcs.length === 0) {
      return (arg) => arg;
    }
    if (funcs.length === 1) {
      return funcs[0];
    }
    return funcs.reduce((a2, b) => (...args) => a2(b(...args)));
  }
  function applyMiddleware(...middlewares) {
    return (createStore2) => (reducer, preloadedState) => {
      const store = createStore2(reducer, preloadedState);
      let dispatch = () => {
        throw new Error(formatProdErrorMessage$1(15));
      };
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action, ...args) => dispatch(action, ...args)
      };
      const chain = middlewares.map((middleware) => middleware(middlewareAPI));
      dispatch = compose$1(...chain)(store.dispatch);
      return {
        ...store,
        dispatch
      };
    };
  }
  function isAction(action) {
    return isPlainObject$5(action) && "type" in action && typeof action.type === "string";
  }
  var NOTHING$1 = Symbol.for("immer-nothing");
  var DRAFTABLE$1 = Symbol.for("immer-draftable");
  var DRAFT_STATE$1 = Symbol.for("immer-state");
  function die$1(error, ...args) {
    throw new Error(
      `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
    );
  }
  var O = Object;
  var getPrototypeOf$1 = O.getPrototypeOf;
  var CONSTRUCTOR = "constructor";
  var PROTOTYPE = "prototype";
  var CONFIGURABLE = "configurable";
  var ENUMERABLE = "enumerable";
  var WRITABLE = "writable";
  var VALUE = "value";
  var isDraft$1 = (value) => !!value && !!value[DRAFT_STATE$1];
  function isDraftable$1(value) {
    var _a;
    if (!value)
      return false;
    return isPlainObject$4(value) || isArray(value) || !!value[DRAFTABLE$1] || !!((_a = value[CONSTRUCTOR]) == null ? void 0 : _a[DRAFTABLE$1]) || isMap$1(value) || isSet$1(value);
  }
  var objectCtorString$1 = O[PROTOTYPE][CONSTRUCTOR].toString();
  var cachedCtorStrings$1 = /* @__PURE__ */ new WeakMap();
  function isPlainObject$4(value) {
    if (!value || !isObjectish(value))
      return false;
    const proto = getPrototypeOf$1(value);
    if (proto === null || proto === O[PROTOTYPE])
      return true;
    const Ctor = O.hasOwnProperty.call(proto, CONSTRUCTOR) && proto[CONSTRUCTOR];
    if (Ctor === Object)
      return true;
    if (!isFunction(Ctor))
      return false;
    let ctorString = cachedCtorStrings$1.get(Ctor);
    if (ctorString === void 0) {
      ctorString = Function.toString.call(Ctor);
      cachedCtorStrings$1.set(Ctor, ctorString);
    }
    return ctorString === objectCtorString$1;
  }
  function each$1(obj, iter, strict = true) {
    if (getArchtype$1(obj) === 0) {
      const keys = strict ? Reflect.ownKeys(obj) : O.keys(obj);
      keys.forEach((key) => {
        iter(key, obj[key], obj);
      });
    } else {
      obj.forEach((entry, index) => iter(index, entry, obj));
    }
  }
  function getArchtype$1(thing) {
    const state = thing[DRAFT_STATE$1];
    return state ? state.type_ : isArray(thing) ? 1 : isMap$1(thing) ? 2 : isSet$1(thing) ? 3 : 0;
  }
  var has$1 = (thing, prop, type = getArchtype$1(thing)) => type === 2 ? thing.has(prop) : O[PROTOTYPE].hasOwnProperty.call(thing, prop);
  var get = (thing, prop, type = getArchtype$1(thing)) => (
    // @ts-ignore
    type === 2 ? thing.get(prop) : thing[prop]
  );
  var set$1 = (thing, propOrOldValue, value, type = getArchtype$1(thing)) => {
    if (type === 2)
      thing.set(propOrOldValue, value);
    else if (type === 3) {
      thing.add(value);
    } else
      thing[propOrOldValue] = value;
  };
  function is$2(x2, y2) {
    if (x2 === y2) {
      return x2 !== 0 || 1 / x2 === 1 / y2;
    } else {
      return x2 !== x2 && y2 !== y2;
    }
  }
  var isArray = Array.isArray;
  var isMap$1 = (target) => target instanceof Map;
  var isSet$1 = (target) => target instanceof Set;
  var isObjectish = (target) => typeof target === "object";
  var isFunction = (target) => typeof target === "function";
  var isBoolean$1 = (target) => typeof target === "boolean";
  var latest$1 = (state) => state.copy_ || state.base_;
  var getFinalValue = (state) => state.modified_ ? state.copy_ : state.base_;
  function shallowCopy$1(base, strict) {
    if (isMap$1(base)) {
      return new Map(base);
    }
    if (isSet$1(base)) {
      return new Set(base);
    }
    if (isArray(base))
      return Array[PROTOTYPE].slice.call(base);
    const isPlain = isPlainObject$4(base);
    if (strict === true || strict === "class_only" && !isPlain) {
      const descriptors = O.getOwnPropertyDescriptors(base);
      delete descriptors[DRAFT_STATE$1];
      let keys = Reflect.ownKeys(descriptors);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const desc = descriptors[key];
        if (desc[WRITABLE] === false) {
          desc[WRITABLE] = true;
          desc[CONFIGURABLE] = true;
        }
        if (desc.get || desc.set)
          descriptors[key] = {
            [CONFIGURABLE]: true,
            [WRITABLE]: true,
            // could live with !!desc.set as well here...
            [ENUMERABLE]: desc[ENUMERABLE],
            [VALUE]: base[key]
          };
      }
      return O.create(getPrototypeOf$1(base), descriptors);
    } else {
      const proto = getPrototypeOf$1(base);
      if (proto !== null && isPlain) {
        return { ...base };
      }
      const obj = O.create(proto);
      return O.assign(obj, base);
    }
  }
  function freeze$1(obj, deep = false) {
    if (isFrozen$1(obj) || isDraft$1(obj) || !isDraftable$1(obj))
      return obj;
    if (getArchtype$1(obj) > 1) {
      O.defineProperties(obj, {
        set: dontMutateMethodOverride$1,
        add: dontMutateMethodOverride$1,
        clear: dontMutateMethodOverride$1,
        delete: dontMutateMethodOverride$1
      });
    }
    O.freeze(obj);
    if (deep)
      each$1(
        obj,
        (_key, value) => {
          freeze$1(value, true);
        },
        false
      );
    return obj;
  }
  function dontMutateFrozenCollections$1() {
    die$1(2);
  }
  var dontMutateMethodOverride$1 = {
    [VALUE]: dontMutateFrozenCollections$1
  };
  function isFrozen$1(obj) {
    if (obj === null || !isObjectish(obj))
      return true;
    return O.isFrozen(obj);
  }
  var PluginMapSet = "MapSet";
  var PluginPatches = "Patches";
  var plugins$2 = {};
  function getPlugin$1(pluginKey) {
    const plugin = plugins$2[pluginKey];
    if (!plugin) {
      die$1(0, pluginKey);
    }
    return plugin;
  }
  var isPluginLoaded = (pluginKey) => !!plugins$2[pluginKey];
  var currentScope$1;
  var getCurrentScope$1 = () => currentScope$1;
  var createScope$1 = (parent_, immer_) => ({
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0,
    handledSet_: /* @__PURE__ */ new Set(),
    processedForPatches_: /* @__PURE__ */ new Set(),
    mapSetPlugin_: isPluginLoaded(PluginMapSet) ? getPlugin$1(PluginMapSet) : void 0
  });
  function usePatchesInScope$1(scope, patchListener) {
    if (patchListener) {
      scope.patchPlugin_ = getPlugin$1(PluginPatches);
      scope.patches_ = [];
      scope.inversePatches_ = [];
      scope.patchListener_ = patchListener;
    }
  }
  function revokeScope$1(scope) {
    leaveScope$1(scope);
    scope.drafts_.forEach(revokeDraft$1);
    scope.drafts_ = null;
  }
  function leaveScope$1(scope) {
    if (scope === currentScope$1) {
      currentScope$1 = scope.parent_;
    }
  }
  var enterScope$1 = (immer2) => currentScope$1 = createScope$1(currentScope$1, immer2);
  function revokeDraft$1(draft) {
    const state = draft[DRAFT_STATE$1];
    if (state.type_ === 0 || state.type_ === 1)
      state.revoke_();
    else
      state.revoked_ = true;
  }
  function processResult$1(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    const baseDraft = scope.drafts_[0];
    const isReplaced = result !== void 0 && result !== baseDraft;
    if (isReplaced) {
      if (baseDraft[DRAFT_STATE$1].modified_) {
        revokeScope$1(scope);
        die$1(4);
      }
      if (isDraftable$1(result)) {
        result = finalize$1(scope, result);
      }
      const { patchPlugin_ } = scope;
      if (patchPlugin_) {
        patchPlugin_.generateReplacementPatches_(
          baseDraft[DRAFT_STATE$1].base_,
          result,
          scope
        );
      }
    } else {
      result = finalize$1(scope, baseDraft);
    }
    maybeFreeze$1(scope, result, true);
    revokeScope$1(scope);
    if (scope.patches_) {
      scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING$1 ? result : void 0;
  }
  function finalize$1(rootScope, value) {
    if (isFrozen$1(value))
      return value;
    const state = value[DRAFT_STATE$1];
    if (!state) {
      const finalValue = handleValue(value, rootScope.handledSet_, rootScope);
      return finalValue;
    }
    if (!isSameScope(state, rootScope)) {
      return value;
    }
    if (!state.modified_) {
      return state.base_;
    }
    if (!state.finalized_) {
      const { callbacks_ } = state;
      if (callbacks_) {
        while (callbacks_.length > 0) {
          const callback = callbacks_.pop();
          callback(rootScope);
        }
      }
      generatePatchesAndFinalize(state, rootScope);
    }
    return state.copy_;
  }
  function maybeFreeze$1(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
      freeze$1(value, deep);
    }
  }
  function markStateFinalized(state) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
  }
  var isSameScope = (state, rootScope) => state.scope_ === rootScope;
  var EMPTY_LOCATIONS_RESULT = [];
  function updateDraftInParent(parent, draftValue, finalizedValue, originalKey) {
    const parentCopy = latest$1(parent);
    const parentType = parent.type_;
    if (originalKey !== void 0) {
      const currentValue = get(parentCopy, originalKey, parentType);
      if (currentValue === draftValue) {
        set$1(parentCopy, originalKey, finalizedValue, parentType);
        return;
      }
    }
    if (!parent.draftLocations_) {
      const draftLocations = parent.draftLocations_ = /* @__PURE__ */ new Map();
      each$1(parentCopy, (key, value) => {
        if (isDraft$1(value)) {
          const keys = draftLocations.get(value) || [];
          keys.push(key);
          draftLocations.set(value, keys);
        }
      });
    }
    const locations = parent.draftLocations_.get(draftValue) ?? EMPTY_LOCATIONS_RESULT;
    for (const location of locations) {
      set$1(parentCopy, location, finalizedValue, parentType);
    }
  }
  function registerChildFinalizationCallback(parent, child, key) {
    parent.callbacks_.push(function childCleanup(rootScope) {
      var _a;
      const state = child;
      if (!state || !isSameScope(state, rootScope)) {
        return;
      }
      (_a = rootScope.mapSetPlugin_) == null ? void 0 : _a.fixSetContents(state);
      const finalizedValue = getFinalValue(state);
      updateDraftInParent(parent, state.draft_ ?? state, finalizedValue, key);
      generatePatchesAndFinalize(state, rootScope);
    });
  }
  function generatePatchesAndFinalize(state, rootScope) {
    var _a;
    const shouldFinalize = state.modified_ && !state.finalized_ && (state.type_ === 3 || (((_a = state.assigned_) == null ? void 0 : _a.size) ?? 0) > 0);
    if (shouldFinalize) {
      const { patchPlugin_ } = rootScope;
      if (patchPlugin_) {
        const basePath = patchPlugin_.getPath(state);
        if (basePath) {
          patchPlugin_.generatePatches_(state, basePath, rootScope);
        }
      }
      markStateFinalized(state);
    }
  }
  function handleCrossReference(target, key, value) {
    const { scope_ } = target;
    if (isDraft$1(value)) {
      const state = value[DRAFT_STATE$1];
      if (isSameScope(state, scope_)) {
        state.callbacks_.push(function crossReferenceCleanup() {
          prepareCopy$1(target);
          const finalizedValue = getFinalValue(state);
          updateDraftInParent(target, value, finalizedValue, key);
        });
      }
    } else if (isDraftable$1(value)) {
      target.callbacks_.push(function nestedDraftCleanup() {
        const targetCopy = latest$1(target);
        if (get(targetCopy, key, target.type_) === value) {
          if (scope_.drafts_.length > 1 && (target.assigned_.get(key) ?? false) === true && target.copy_) {
            handleValue(
              get(target.copy_, key, target.type_),
              scope_.handledSet_,
              scope_
            );
          }
        }
      });
    }
  }
  function handleValue(target, handledSet, rootScope) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return target;
    }
    if (isDraft$1(target) || handledSet.has(target) || !isDraftable$1(target) || isFrozen$1(target)) {
      return target;
    }
    handledSet.add(target);
    each$1(target, (key, value) => {
      if (isDraft$1(value)) {
        const state = value[DRAFT_STATE$1];
        if (isSameScope(state, rootScope)) {
          const updatedValue = getFinalValue(state);
          set$1(target, key, updatedValue, target.type_);
          markStateFinalized(state);
        }
      } else if (isDraftable$1(value)) {
        handleValue(value, handledSet, rootScope);
      }
    });
    return target;
  }
  function createProxyProxy$1(base, parent) {
    const baseIsArray = isArray(base);
    const state = {
      type_: baseIsArray ? 1 : 0,
      // Track which produce call this is associated with.
      scope_: parent ? parent.scope_ : getCurrentScope$1(),
      // True for both shallow and deep changes.
      modified_: false,
      // Used during finalization.
      finalized_: false,
      // Track which properties have been assigned (true) or deleted (false).
      // actually instantiated in `prepareCopy()`
      assigned_: void 0,
      // The parent draft state.
      parent_: parent,
      // The base state.
      base_: base,
      // The base proxy.
      draft_: null,
      // set below
      // The base copy with any updated values.
      copy_: null,
      // Called by the `produce` function.
      revoke_: null,
      isManual_: false,
      // `callbacks` actually gets assigned in `createProxy`
      callbacks_: void 0
    };
    let target = state;
    let traps = objectTraps$1;
    if (baseIsArray) {
      target = [state];
      traps = arrayTraps$1;
    }
    const { revoke, proxy } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return [proxy, state];
  }
  var objectTraps$1 = {
    get(state, prop) {
      if (prop === DRAFT_STATE$1)
        return state;
      const source = latest$1(state);
      if (!has$1(source, prop, state.type_)) {
        return readPropFromProto$1(state, source, prop);
      }
      const value = source[prop];
      if (state.finalized_ || !isDraftable$1(value)) {
        return value;
      }
      if (value === peek$1(state.base_, prop)) {
        prepareCopy$1(state);
        const childKey = state.type_ === 1 ? +prop : prop;
        const childDraft = createProxy$1(state.scope_, value, state, childKey);
        return state.copy_[childKey] = childDraft;
      }
      return value;
    },
    has(state, prop) {
      return prop in latest$1(state);
    },
    ownKeys(state) {
      return Reflect.ownKeys(latest$1(state));
    },
    set(state, prop, value) {
      const desc = getDescriptorFromProto$1(latest$1(state), prop);
      if (desc == null ? void 0 : desc.set) {
        desc.set.call(state.draft_, value);
        return true;
      }
      if (!state.modified_) {
        const current2 = peek$1(latest$1(state), prop);
        const currentState = current2 == null ? void 0 : current2[DRAFT_STATE$1];
        if (currentState && currentState.base_ === value) {
          state.copy_[prop] = value;
          state.assigned_.set(prop, false);
          return true;
        }
        if (is$2(value, current2) && (value !== void 0 || has$1(state.base_, prop, state.type_)))
          return true;
        prepareCopy$1(state);
        markChanged$1(state);
      }
      if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
      (value !== void 0 || prop in state.copy_) || // special case: NaN
      Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
        return true;
      state.copy_[prop] = value;
      state.assigned_.set(prop, true);
      handleCrossReference(state, prop, value);
      return true;
    },
    deleteProperty(state, prop) {
      prepareCopy$1(state);
      if (peek$1(state.base_, prop) !== void 0 || prop in state.base_) {
        state.assigned_.set(prop, false);
        markChanged$1(state);
      } else {
        state.assigned_.delete(prop);
      }
      if (state.copy_) {
        delete state.copy_[prop];
      }
      return true;
    },
    // Note: We never coerce `desc.value` into an Immer draft, because we can't make
    // the same guarantee in ES5 mode.
    getOwnPropertyDescriptor(state, prop) {
      const owner = latest$1(state);
      const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
      if (!desc)
        return desc;
      return {
        [WRITABLE]: true,
        [CONFIGURABLE]: state.type_ !== 1 || prop !== "length",
        [ENUMERABLE]: desc[ENUMERABLE],
        [VALUE]: owner[prop]
      };
    },
    defineProperty() {
      die$1(11);
    },
    getPrototypeOf(state) {
      return getPrototypeOf$1(state.base_);
    },
    setPrototypeOf() {
      die$1(12);
    }
  };
  var arrayTraps$1 = {};
  each$1(objectTraps$1, (key, fn) => {
    arrayTraps$1[key] = function() {
      const args = arguments;
      args[0] = args[0][0];
      return fn.apply(this, args);
    };
  });
  arrayTraps$1.deleteProperty = function(state, prop) {
    return arrayTraps$1.set.call(this, state, prop, void 0);
  };
  arrayTraps$1.set = function(state, prop, value) {
    return objectTraps$1.set.call(this, state[0], prop, value, state[0]);
  };
  function peek$1(draft, prop) {
    const state = draft[DRAFT_STATE$1];
    const source = state ? latest$1(state) : draft;
    return source[prop];
  }
  function readPropFromProto$1(state, source, prop) {
    var _a;
    const desc = getDescriptorFromProto$1(source, prop);
    return desc ? VALUE in desc ? desc[VALUE] : (
      // This is a very special case, if the prop is a getter defined by the
      // prototype, we should invoke it with the draft as context!
      (_a = desc.get) == null ? void 0 : _a.call(state.draft_)
    ) : void 0;
  }
  function getDescriptorFromProto$1(source, prop) {
    if (!(prop in source))
      return void 0;
    let proto = getPrototypeOf$1(source);
    while (proto) {
      const desc = Object.getOwnPropertyDescriptor(proto, prop);
      if (desc)
        return desc;
      proto = getPrototypeOf$1(proto);
    }
    return void 0;
  }
  function markChanged$1(state) {
    if (!state.modified_) {
      state.modified_ = true;
      if (state.parent_) {
        markChanged$1(state.parent_);
      }
    }
  }
  function prepareCopy$1(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = shallowCopy$1(
        state.base_,
        state.scope_.immer_.useStrictShallowCopy_
      );
    }
  }
  var Immer2$1 = class Immer2 {
    constructor(config2) {
      this.autoFreeze_ = true;
      this.useStrictShallowCopy_ = false;
      this.useStrictIteration_ = false;
      this.produce = (base, recipe, patchListener) => {
        if (isFunction(base) && !isFunction(recipe)) {
          const defaultBase = recipe;
          recipe = base;
          const self = this;
          return function curriedProduce(base2 = defaultBase, ...args) {
            return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
          };
        }
        if (!isFunction(recipe))
          die$1(6);
        if (patchListener !== void 0 && !isFunction(patchListener))
          die$1(7);
        let result;
        if (isDraftable$1(base)) {
          const scope = enterScope$1(this);
          const proxy = createProxy$1(scope, base, void 0);
          let hasError = true;
          try {
            result = recipe(proxy);
            hasError = false;
          } finally {
            if (hasError)
              revokeScope$1(scope);
            else
              leaveScope$1(scope);
          }
          usePatchesInScope$1(scope, patchListener);
          return processResult$1(result, scope);
        } else if (!base || !isObjectish(base)) {
          result = recipe(base);
          if (result === void 0)
            result = base;
          if (result === NOTHING$1)
            result = void 0;
          if (this.autoFreeze_)
            freeze$1(result, true);
          if (patchListener) {
            const p = [];
            const ip = [];
            getPlugin$1(PluginPatches).generateReplacementPatches_(base, result, {
              patches_: p,
              inversePatches_: ip
            });
            patchListener(p, ip);
          }
          return result;
        } else
          die$1(1, base);
      };
      this.produceWithPatches = (base, recipe) => {
        if (isFunction(base)) {
          return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
        }
        let patches, inversePatches;
        const result = this.produce(base, recipe, (p, ip) => {
          patches = p;
          inversePatches = ip;
        });
        return [result, patches, inversePatches];
      };
      if (isBoolean$1(config2 == null ? void 0 : config2.autoFreeze))
        this.setAutoFreeze(config2.autoFreeze);
      if (isBoolean$1(config2 == null ? void 0 : config2.useStrictShallowCopy))
        this.setUseStrictShallowCopy(config2.useStrictShallowCopy);
      if (isBoolean$1(config2 == null ? void 0 : config2.useStrictIteration))
        this.setUseStrictIteration(config2.useStrictIteration);
    }
    createDraft(base) {
      if (!isDraftable$1(base))
        die$1(8);
      if (isDraft$1(base))
        base = current$1(base);
      const scope = enterScope$1(this);
      const proxy = createProxy$1(scope, base, void 0);
      proxy[DRAFT_STATE$1].isManual_ = true;
      leaveScope$1(scope);
      return proxy;
    }
    finishDraft(draft, patchListener) {
      const state = draft && draft[DRAFT_STATE$1];
      if (!state || !state.isManual_)
        die$1(9);
      const { scope_: scope } = state;
      usePatchesInScope$1(scope, patchListener);
      return processResult$1(void 0, scope);
    }
    /**
     * Pass true to automatically freeze all copies created by Immer.
     *
     * By default, auto-freezing is enabled.
     */
    setAutoFreeze(value) {
      this.autoFreeze_ = value;
    }
    /**
     * Pass true to enable strict shallow copy.
     *
     * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
     */
    setUseStrictShallowCopy(value) {
      this.useStrictShallowCopy_ = value;
    }
    /**
     * Pass false to use faster iteration that skips non-enumerable properties
     * but still handles symbols for compatibility.
     *
     * By default, strict iteration is enabled (includes all own properties).
     */
    setUseStrictIteration(value) {
      this.useStrictIteration_ = value;
    }
    shouldUseStrictIteration() {
      return this.useStrictIteration_;
    }
    applyPatches(base, patches) {
      let i;
      for (i = patches.length - 1; i >= 0; i--) {
        const patch = patches[i];
        if (patch.path.length === 0 && patch.op === "replace") {
          base = patch.value;
          break;
        }
      }
      if (i > -1) {
        patches = patches.slice(i + 1);
      }
      const applyPatchesImpl = getPlugin$1(PluginPatches).applyPatches_;
      if (isDraft$1(base)) {
        return applyPatchesImpl(base, patches);
      }
      return this.produce(
        base,
        (draft) => applyPatchesImpl(draft, patches)
      );
    }
  };
  function createProxy$1(rootScope, value, parent, key) {
    const [draft, state] = isMap$1(value) ? getPlugin$1(PluginMapSet).proxyMap_(value, parent) : isSet$1(value) ? getPlugin$1(PluginMapSet).proxySet_(value, parent) : createProxyProxy$1(value, parent);
    const scope = (parent == null ? void 0 : parent.scope_) ?? getCurrentScope$1();
    scope.drafts_.push(draft);
    state.callbacks_ = (parent == null ? void 0 : parent.callbacks_) ?? [];
    state.key_ = key;
    if (parent && key !== void 0) {
      registerChildFinalizationCallback(parent, state, key);
    } else {
      state.callbacks_.push(function rootDraftCleanup(rootScope2) {
        var _a;
        (_a = rootScope2.mapSetPlugin_) == null ? void 0 : _a.fixSetContents(state);
        const { patchPlugin_ } = rootScope2;
        if (state.modified_ && patchPlugin_) {
          patchPlugin_.generatePatches_(state, [], rootScope2);
        }
      });
    }
    return draft;
  }
  function current$1(value) {
    if (!isDraft$1(value))
      die$1(10, value);
    return currentImpl$1(value);
  }
  function currentImpl$1(value) {
    if (!isDraftable$1(value) || isFrozen$1(value))
      return value;
    const state = value[DRAFT_STATE$1];
    let copy2;
    let strict = true;
    if (state) {
      if (!state.modified_)
        return state.base_;
      state.finalized_ = true;
      copy2 = shallowCopy$1(value, state.scope_.immer_.useStrictShallowCopy_);
      strict = state.scope_.immer_.shouldUseStrictIteration();
    } else {
      copy2 = shallowCopy$1(value, true);
    }
    each$1(
      copy2,
      (key, childValue) => {
        set$1(copy2, key, currentImpl$1(childValue));
      },
      strict
    );
    if (state) {
      state.finalized_ = false;
    }
    return copy2;
  }
  var immer$1 = new Immer2$1();
  var produce = immer$1.produce;
  function createThunkMiddleware(extraArgument) {
    const middleware = ({ dispatch, getState }) => (next) => (action) => {
      if (typeof action === "function") {
        return action(dispatch, getState, extraArgument);
      }
      return next(action);
    };
    return middleware;
  }
  var thunk = createThunkMiddleware();
  var withExtraArgument = createThunkMiddleware;
  var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
    if (arguments.length === 0) return void 0;
    if (typeof arguments[0] === "object") return compose$1;
    return compose$1.apply(null, arguments);
  };
  function createAction(type, prepareAction) {
    function actionCreator(...args) {
      if (prepareAction) {
        let prepared = prepareAction(...args);
        if (!prepared) {
          throw new Error(formatProdErrorMessage(0));
        }
        return {
          type,
          payload: prepared.payload,
          ..."meta" in prepared && {
            meta: prepared.meta
          },
          ..."error" in prepared && {
            error: prepared.error
          }
        };
      }
      return {
        type,
        payload: args[0]
      };
    }
    actionCreator.toString = () => `${type}`;
    actionCreator.type = type;
    actionCreator.match = (action) => isAction(action) && action.type === type;
    return actionCreator;
  }
  var Tuple = class _Tuple extends Array {
    constructor(...items) {
      super(...items);
      Object.setPrototypeOf(this, _Tuple.prototype);
    }
    static get [Symbol.species]() {
      return _Tuple;
    }
    concat(...arr) {
      return super.concat.apply(this, arr);
    }
    prepend(...arr) {
      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new _Tuple(...arr[0].concat(this));
      }
      return new _Tuple(...arr.concat(this));
    }
  };
  function freezeDraftable(val) {
    return isDraftable$1(val) ? produce(val, () => {
    }) : val;
  }
  function getOrInsertComputed(map2, key, compute) {
    if (map2.has(key)) return map2.get(key);
    return map2.set(key, compute(key)).get(key);
  }
  function isBoolean(x2) {
    return typeof x2 === "boolean";
  }
  var buildGetDefaultMiddleware = () => function getDefaultMiddleware(options) {
    const {
      thunk: thunk$1 = true,
      immutableCheck = true,
      serializableCheck = true,
      actionCreatorCheck = true
    } = options ?? {};
    let middlewareArray = new Tuple();
    if (thunk$1) {
      if (isBoolean(thunk$1)) {
        middlewareArray.push(thunk);
      } else {
        middlewareArray.push(withExtraArgument(thunk$1.extraArgument));
      }
    }
    return middlewareArray;
  };
  var SHOULD_AUTOBATCH = "RTK_autoBatch";
  var prepareAutoBatched = () => (payload) => ({
    payload,
    meta: {
      [SHOULD_AUTOBATCH]: true
    }
  });
  var createQueueWithTimer = (timeout) => {
    return (notify) => {
      setTimeout(notify, timeout);
    };
  };
  var autoBatchEnhancer = (options = {
    type: "raf"
  }) => (next) => (...args) => {
    const store = next(...args);
    let notifying = true;
    let shouldNotifyAtEndOfTick = false;
    let notificationQueued = false;
    const listeners = /* @__PURE__ */ new Set();
    const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? (
      // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
      typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10)
    ) : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
    const notifyListeners = () => {
      notificationQueued = false;
      if (shouldNotifyAtEndOfTick) {
        shouldNotifyAtEndOfTick = false;
        listeners.forEach((l) => l());
      }
    };
    return Object.assign({}, store, {
      // Override the base `store.subscribe` method to keep original listeners
      // from running if we're delaying notifications
      subscribe(listener2) {
        const wrappedListener = () => notifying && listener2();
        const unsubscribe = store.subscribe(wrappedListener);
        listeners.add(listener2);
        return () => {
          unsubscribe();
          listeners.delete(listener2);
        };
      },
      // Override the base `store.dispatch` method so that we can check actions
      // for the `shouldAutoBatch` flag and determine if batching is active
      dispatch(action) {
        var _a;
        try {
          notifying = !((_a = action == null ? void 0 : action.meta) == null ? void 0 : _a[SHOULD_AUTOBATCH]);
          shouldNotifyAtEndOfTick = !notifying;
          if (shouldNotifyAtEndOfTick) {
            if (!notificationQueued) {
              notificationQueued = true;
              queueCallback(notifyListeners);
            }
          }
          return store.dispatch(action);
        } finally {
          notifying = true;
        }
      }
    });
  };
  var buildGetDefaultEnhancers = (middlewareEnhancer) => function getDefaultEnhancers(options) {
    const {
      autoBatch = true
    } = options ?? {};
    let enhancerArray = new Tuple(middlewareEnhancer);
    if (autoBatch) {
      enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
    }
    return enhancerArray;
  };
  function configureStore(options) {
    const getDefaultMiddleware = buildGetDefaultMiddleware();
    const {
      reducer = void 0,
      middleware,
      devTools = true,
      preloadedState = void 0,
      enhancers = void 0
    } = options || {};
    let rootReducer2;
    if (typeof reducer === "function") {
      rootReducer2 = reducer;
    } else if (isPlainObject$5(reducer)) {
      rootReducer2 = combineReducers(reducer);
    } else {
      throw new Error(formatProdErrorMessage(1));
    }
    let finalMiddleware;
    if (typeof middleware === "function") {
      finalMiddleware = middleware(getDefaultMiddleware);
    } else {
      finalMiddleware = getDefaultMiddleware();
    }
    let finalCompose = compose$1;
    if (devTools) {
      finalCompose = composeWithDevTools({
        // Enable capture of stack traces for dispatched Redux actions
        trace: false,
        ...typeof devTools === "object" && devTools
      });
    }
    const middlewareEnhancer = applyMiddleware(...finalMiddleware);
    const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
    let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
    const composedEnhancer = finalCompose(...storeEnhancers);
    return createStore(rootReducer2, preloadedState, composedEnhancer);
  }
  function executeReducerBuilderCallback(builderCallback) {
    const actionsMap = {};
    const actionMatchers = [];
    let defaultCaseReducer;
    const builder = {
      addCase(typeOrActionCreator, reducer) {
        const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
        if (!type) {
          throw new Error(formatProdErrorMessage(28));
        }
        if (type in actionsMap) {
          throw new Error(formatProdErrorMessage(29));
        }
        actionsMap[type] = reducer;
        return builder;
      },
      addAsyncThunk(asyncThunk, reducers) {
        if (reducers.pending) actionsMap[asyncThunk.pending.type] = reducers.pending;
        if (reducers.rejected) actionsMap[asyncThunk.rejected.type] = reducers.rejected;
        if (reducers.fulfilled) actionsMap[asyncThunk.fulfilled.type] = reducers.fulfilled;
        if (reducers.settled) actionMatchers.push({
          matcher: asyncThunk.settled,
          reducer: reducers.settled
        });
        return builder;
      },
      addMatcher(matcher, reducer) {
        actionMatchers.push({
          matcher,
          reducer
        });
        return builder;
      },
      addDefaultCase(reducer) {
        defaultCaseReducer = reducer;
        return builder;
      }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
  }
  function isStateFunction(x2) {
    return typeof x2 === "function";
  }
  function createReducer(initialState2, mapOrBuilderCallback) {
    let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
    let getInitialState;
    if (isStateFunction(initialState2)) {
      getInitialState = () => freezeDraftable(initialState2());
    } else {
      const frozenInitialState = freezeDraftable(initialState2);
      getInitialState = () => frozenInitialState;
    }
    function reducer(state = getInitialState(), action) {
      let caseReducers = [actionsMap[action.type], ...finalActionMatchers.filter(({
        matcher
      }) => matcher(action)).map(({
        reducer: reducer2
      }) => reducer2)];
      if (caseReducers.filter((cr) => !!cr).length === 0) {
        caseReducers = [finalDefaultCaseReducer];
      }
      return caseReducers.reduce((previousState, caseReducer) => {
        if (caseReducer) {
          if (isDraft$1(previousState)) {
            const draft = previousState;
            const result = caseReducer(draft, action);
            if (result === void 0) {
              return previousState;
            }
            return result;
          } else if (!isDraftable$1(previousState)) {
            const result = caseReducer(previousState, action);
            if (result === void 0) {
              if (previousState === null) {
                return previousState;
              }
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return result;
          } else {
            return produce(previousState, (draft) => {
              return caseReducer(draft, action);
            });
          }
        }
        return previousState;
      }, state);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
  }
  var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
  var nanoid = (size = 21) => {
    let id = "";
    let i = size;
    while (i--) {
      id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
  };
  var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
  function getType(slice, actionKey) {
    return `${slice}/${actionKey}`;
  }
  function buildCreateSlice({
    creators
  } = {}) {
    var _a;
    const cAT = (_a = creators == null ? void 0 : creators.asyncThunk) == null ? void 0 : _a[asyncThunkSymbol];
    return function createSlice2(options) {
      const {
        name,
        reducerPath = name
      } = options;
      if (!name) {
        throw new Error(formatProdErrorMessage(11));
      }
      const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
      const reducerNames = Object.keys(reducers);
      const context = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: []
      };
      const contextMethods = {
        addCase(typeOrActionCreator, reducer2) {
          const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
          if (!type) {
            throw new Error(formatProdErrorMessage(12));
          }
          if (type in context.sliceCaseReducersByType) {
            throw new Error(formatProdErrorMessage(13));
          }
          context.sliceCaseReducersByType[type] = reducer2;
          return contextMethods;
        },
        addMatcher(matcher, reducer2) {
          context.sliceMatchers.push({
            matcher,
            reducer: reducer2
          });
          return contextMethods;
        },
        exposeAction(name2, actionCreator) {
          context.actionCreators[name2] = actionCreator;
          return contextMethods;
        },
        exposeCaseReducer(name2, reducer2) {
          context.sliceCaseReducersByName[name2] = reducer2;
          return contextMethods;
        }
      };
      reducerNames.forEach((reducerName) => {
        const reducerDefinition = reducers[reducerName];
        const reducerDetails = {
          reducerName,
          type: getType(name, reducerName),
          createNotation: typeof options.reducers === "function"
        };
        if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) {
          handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
        } else {
          handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
        }
      });
      function buildReducer() {
        const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers];
        const finalCaseReducers = {
          ...extraReducers,
          ...context.sliceCaseReducersByType
        };
        return createReducer(options.initialState, (builder) => {
          for (let key in finalCaseReducers) {
            builder.addCase(key, finalCaseReducers[key]);
          }
          for (let sM of context.sliceMatchers) {
            builder.addMatcher(sM.matcher, sM.reducer);
          }
          for (let m of actionMatchers) {
            builder.addMatcher(m.matcher, m.reducer);
          }
          if (defaultCaseReducer) {
            builder.addDefaultCase(defaultCaseReducer);
          }
        });
      }
      const selectSelf = (state) => state;
      const injectedSelectorCache = /* @__PURE__ */ new Map();
      const injectedStateCache = /* @__PURE__ */ new WeakMap();
      let _reducer;
      function reducer(state, action) {
        if (!_reducer) _reducer = buildReducer();
        return _reducer(state, action);
      }
      function getInitialState() {
        if (!_reducer) _reducer = buildReducer();
        return _reducer.getInitialState();
      }
      function makeSelectorProps(reducerPath2, injected = false) {
        function selectSlice(state) {
          let sliceState = state[reducerPath2];
          if (typeof sliceState === "undefined") {
            if (injected) {
              sliceState = getOrInsertComputed(injectedStateCache, selectSlice, getInitialState);
            }
          }
          return sliceState;
        }
        function getSelectors(selectState = selectSelf) {
          const selectorCache = getOrInsertComputed(injectedSelectorCache, injected, () => /* @__PURE__ */ new WeakMap());
          return getOrInsertComputed(selectorCache, selectState, () => {
            const map2 = {};
            for (const [name2, selector] of Object.entries(options.selectors ?? {})) {
              map2[name2] = wrapSelector(selector, selectState, () => getOrInsertComputed(injectedStateCache, selectState, getInitialState), injected);
            }
            return map2;
          });
        }
        return {
          reducerPath: reducerPath2,
          getSelectors,
          get selectors() {
            return getSelectors(selectSlice);
          },
          selectSlice
        };
      }
      const slice = {
        name,
        reducer,
        actions: context.actionCreators,
        caseReducers: context.sliceCaseReducersByName,
        getInitialState,
        ...makeSelectorProps(reducerPath),
        injectInto(injectable, {
          reducerPath: pathOpt,
          ...config2
        } = {}) {
          const newReducerPath = pathOpt ?? reducerPath;
          injectable.inject({
            reducerPath: newReducerPath,
            reducer
          }, config2);
          return {
            ...slice,
            ...makeSelectorProps(newReducerPath, true)
          };
        }
      };
      return slice;
    };
  }
  function wrapSelector(selector, selectState, getInitialState, injected) {
    function wrapper(rootState, ...args) {
      let sliceState = selectState(rootState);
      if (typeof sliceState === "undefined") {
        if (injected) {
          sliceState = getInitialState();
        }
      }
      return selector(sliceState, ...args);
    }
    wrapper.unwrapped = selector;
    return wrapper;
  }
  var createSlice = /* @__PURE__ */ buildCreateSlice();
  function buildReducerCreators() {
    function asyncThunk(payloadCreator, config2) {
      return {
        _reducerDefinitionType: "asyncThunk",
        payloadCreator,
        ...config2
      };
    }
    asyncThunk.withTypes = () => asyncThunk;
    return {
      reducer(caseReducer) {
        return Object.assign({
          // hack so the wrapping function has the same name as the original
          // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
          [caseReducer.name](...args) {
            return caseReducer(...args);
          }
        }[caseReducer.name], {
          _reducerDefinitionType: "reducer"
          /* reducer */
        });
      },
      preparedReducer(prepare, reducer) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare,
          reducer
        };
      },
      asyncThunk
    };
  }
  function handleNormalReducerDefinition({
    type,
    reducerName,
    createNotation
  }, maybeReducerWithPrepare, context) {
    let caseReducer;
    let prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
      if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) {
        throw new Error(formatProdErrorMessage(17));
      }
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }
    context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
  }
  function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
    return reducerDefinition._reducerDefinitionType === "asyncThunk";
  }
  function isCaseReducerWithPrepareDefinition(reducerDefinition) {
    return reducerDefinition._reducerDefinitionType === "reducerWithPrepare";
  }
  function handleThunkCaseReducerDefinition({
    type,
    reducerName
  }, reducerDefinition, context, cAT) {
    if (!cAT) {
      throw new Error(formatProdErrorMessage(18));
    }
    const {
      payloadCreator,
      fulfilled,
      pending,
      rejected,
      settled,
      options
    } = reducerDefinition;
    const thunk2 = cAT(type, payloadCreator, options);
    context.exposeAction(reducerName, thunk2);
    if (fulfilled) {
      context.addCase(thunk2.fulfilled, fulfilled);
    }
    if (pending) {
      context.addCase(thunk2.pending, pending);
    }
    if (rejected) {
      context.addCase(thunk2.rejected, rejected);
    }
    if (settled) {
      context.addMatcher(thunk2.settled, settled);
    }
    context.exposeCaseReducer(reducerName, {
      fulfilled: fulfilled || noop,
      pending: pending || noop,
      rejected: rejected || noop,
      settled: settled || noop
    });
  }
  function noop() {
  }
  var task = "task";
  var listener = "listener";
  var completed = "completed";
  var cancelled = "cancelled";
  var taskCancelled = `task-${cancelled}`;
  var taskCompleted = `task-${completed}`;
  var listenerCancelled = `${listener}-${cancelled}`;
  var listenerCompleted = `${listener}-${completed}`;
  var TaskAbortError = class {
    constructor(code) {
      __publicField(this, "name", "TaskAbortError");
      __publicField(this, "message");
      this.code = code;
      this.message = `${task} ${cancelled} (reason: ${code})`;
    }
  };
  var assertFunction = (func, expected) => {
    if (typeof func !== "function") {
      throw new TypeError(formatProdErrorMessage(32));
    }
  };
  var noop2 = () => {
  };
  var catchRejection = (promise, onError = noop2) => {
    promise.catch(onError);
    return promise;
  };
  var addAbortSignalListener = (abortSignal, callback) => {
    abortSignal.addEventListener("abort", callback, {
      once: true
    });
    return () => abortSignal.removeEventListener("abort", callback);
  };
  var validateActive = (signal) => {
    if (signal.aborted) {
      throw new TaskAbortError(signal.reason);
    }
  };
  function raceWithSignal(signal, promise) {
    let cleanup = noop2;
    return new Promise((resolve, reject) => {
      const notifyRejection = () => reject(new TaskAbortError(signal.reason));
      if (signal.aborted) {
        notifyRejection();
        return;
      }
      cleanup = addAbortSignalListener(signal, notifyRejection);
      promise.finally(() => cleanup()).then(resolve, reject);
    }).finally(() => {
      cleanup = noop2;
    });
  }
  var runTask = async (task2, cleanUp) => {
    try {
      await Promise.resolve();
      const value = await task2();
      return {
        status: "ok",
        value
      };
    } catch (error) {
      return {
        status: error instanceof TaskAbortError ? "cancelled" : "rejected",
        error
      };
    } finally {
      cleanUp == null ? void 0 : cleanUp();
    }
  };
  var createPause = (signal) => {
    return (promise) => {
      return catchRejection(raceWithSignal(signal, promise).then((output) => {
        validateActive(signal);
        return output;
      }));
    };
  };
  var createDelay = (signal) => {
    const pause = createPause(signal);
    return (timeoutMs) => {
      return pause(new Promise((resolve) => setTimeout(resolve, timeoutMs)));
    };
  };
  var {
    assign
  } = Object;
  var INTERNAL_NIL_TOKEN = {};
  var alm = "listenerMiddleware";
  var createFork = (parentAbortSignal, parentBlockingPromises) => {
    const linkControllers = (controller) => addAbortSignalListener(parentAbortSignal, () => controller.abort(parentAbortSignal.reason));
    return (taskExecutor, opts) => {
      assertFunction(taskExecutor);
      const childAbortController = new AbortController();
      linkControllers(childAbortController);
      const result = runTask(async () => {
        validateActive(parentAbortSignal);
        validateActive(childAbortController.signal);
        const result2 = await taskExecutor({
          pause: createPause(childAbortController.signal),
          delay: createDelay(childAbortController.signal),
          signal: childAbortController.signal
        });
        validateActive(childAbortController.signal);
        return result2;
      }, () => childAbortController.abort(taskCompleted));
      if (opts == null ? void 0 : opts.autoJoin) {
        parentBlockingPromises.push(result.catch(noop2));
      }
      return {
        result: createPause(parentAbortSignal)(result),
        cancel() {
          childAbortController.abort(taskCancelled);
        }
      };
    };
  };
  var createTakePattern = (startListening, signal) => {
    const take = async (predicate, timeout) => {
      validateActive(signal);
      let unsubscribe = () => {
      };
      const tuplePromise = new Promise((resolve, reject) => {
        let stopListening = startListening({
          predicate,
          effect: (action, listenerApi) => {
            listenerApi.unsubscribe();
            resolve([action, listenerApi.getState(), listenerApi.getOriginalState()]);
          }
        });
        unsubscribe = () => {
          stopListening();
          reject();
        };
      });
      const promises = [tuplePromise];
      if (timeout != null) {
        promises.push(new Promise((resolve) => setTimeout(resolve, timeout, null)));
      }
      try {
        const output = await raceWithSignal(signal, Promise.race(promises));
        validateActive(signal);
        return output;
      } finally {
        unsubscribe();
      }
    };
    return (predicate, timeout) => catchRejection(take(predicate, timeout));
  };
  var getListenerEntryPropsFrom = (options) => {
    let {
      type,
      actionCreator,
      matcher,
      predicate,
      effect
    } = options;
    if (type) {
      predicate = createAction(type).match;
    } else if (actionCreator) {
      type = actionCreator.type;
      predicate = actionCreator.match;
    } else if (matcher) {
      predicate = matcher;
    } else if (predicate) ;
    else {
      throw new Error(formatProdErrorMessage(21));
    }
    assertFunction(effect);
    return {
      predicate,
      type,
      effect
    };
  };
  var createListenerEntry = /* @__PURE__ */ assign((options) => {
    const {
      type,
      predicate,
      effect
    } = getListenerEntryPropsFrom(options);
    const entry = {
      id: nanoid(),
      effect,
      type,
      predicate,
      pending: /* @__PURE__ */ new Set(),
      unsubscribe: () => {
        throw new Error(formatProdErrorMessage(22));
      }
    };
    return entry;
  }, {
    withTypes: () => createListenerEntry
  });
  var findListenerEntry = (listenerMap, options) => {
    const {
      type,
      effect,
      predicate
    } = getListenerEntryPropsFrom(options);
    return Array.from(listenerMap.values()).find((entry) => {
      const matchPredicateOrType = typeof type === "string" ? entry.type === type : entry.predicate === predicate;
      return matchPredicateOrType && entry.effect === effect;
    });
  };
  var cancelActiveListeners = (entry) => {
    entry.pending.forEach((controller) => {
      controller.abort(listenerCancelled);
    });
  };
  var createClearListenerMiddleware = (listenerMap, executingListeners) => {
    return () => {
      for (const listener2 of executingListeners.keys()) {
        cancelActiveListeners(listener2);
      }
      listenerMap.clear();
    };
  };
  var safelyNotifyError = (errorHandler, errorToNotify, errorInfo) => {
    try {
      errorHandler(errorToNotify, errorInfo);
    } catch (errorHandlerError) {
      setTimeout(() => {
        throw errorHandlerError;
      }, 0);
    }
  };
  var addListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/add`), {
    withTypes: () => addListener
  });
  var clearAllListeners = /* @__PURE__ */ createAction(`${alm}/removeAll`);
  var removeListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/remove`), {
    withTypes: () => removeListener
  });
  var defaultErrorHandler = (...args) => {
    console.error(`${alm}/error`, ...args);
  };
  var createListenerMiddleware = (middlewareOptions = {}) => {
    const listenerMap = /* @__PURE__ */ new Map();
    const executingListeners = /* @__PURE__ */ new Map();
    const trackExecutingListener = (entry) => {
      const count = executingListeners.get(entry) ?? 0;
      executingListeners.set(entry, count + 1);
    };
    const untrackExecutingListener = (entry) => {
      const count = executingListeners.get(entry) ?? 1;
      if (count === 1) {
        executingListeners.delete(entry);
      } else {
        executingListeners.set(entry, count - 1);
      }
    };
    const {
      extra,
      onError = defaultErrorHandler
    } = middlewareOptions;
    assertFunction(onError);
    const insertEntry = (entry) => {
      entry.unsubscribe = () => listenerMap.delete(entry.id);
      listenerMap.set(entry.id, entry);
      return (cancelOptions) => {
        entry.unsubscribe();
        if (cancelOptions == null ? void 0 : cancelOptions.cancelActive) {
          cancelActiveListeners(entry);
        }
      };
    };
    const startListening = (options) => {
      const entry = findListenerEntry(listenerMap, options) ?? createListenerEntry(options);
      return insertEntry(entry);
    };
    assign(startListening, {
      withTypes: () => startListening
    });
    const stopListening = (options) => {
      const entry = findListenerEntry(listenerMap, options);
      if (entry) {
        entry.unsubscribe();
        if (options.cancelActive) {
          cancelActiveListeners(entry);
        }
      }
      return !!entry;
    };
    assign(stopListening, {
      withTypes: () => stopListening
    });
    const notifyListener = async (entry, action, api, getOriginalState) => {
      const internalTaskController = new AbortController();
      const take = createTakePattern(startListening, internalTaskController.signal);
      const autoJoinPromises = [];
      try {
        entry.pending.add(internalTaskController);
        trackExecutingListener(entry);
        await Promise.resolve(entry.effect(
          action,
          // Use assign() rather than ... to avoid extra helper functions added to bundle
          assign({}, api, {
            getOriginalState,
            condition: (predicate, timeout) => take(predicate, timeout).then(Boolean),
            take,
            delay: createDelay(internalTaskController.signal),
            pause: createPause(internalTaskController.signal),
            extra,
            signal: internalTaskController.signal,
            fork: createFork(internalTaskController.signal, autoJoinPromises),
            unsubscribe: entry.unsubscribe,
            subscribe: () => {
              listenerMap.set(entry.id, entry);
            },
            cancelActiveListeners: () => {
              entry.pending.forEach((controller, _, set2) => {
                if (controller !== internalTaskController) {
                  controller.abort(listenerCancelled);
                  set2.delete(controller);
                }
              });
            },
            cancel: () => {
              internalTaskController.abort(listenerCancelled);
              entry.pending.delete(internalTaskController);
            },
            throwIfCancelled: () => {
              validateActive(internalTaskController.signal);
            }
          })
        ));
      } catch (listenerError) {
        if (!(listenerError instanceof TaskAbortError)) {
          safelyNotifyError(onError, listenerError, {
            raisedBy: "effect"
          });
        }
      } finally {
        await Promise.all(autoJoinPromises);
        internalTaskController.abort(listenerCompleted);
        untrackExecutingListener(entry);
        entry.pending.delete(internalTaskController);
      }
    };
    const clearListenerMiddleware = createClearListenerMiddleware(listenerMap, executingListeners);
    const middleware = (api) => (next) => (action) => {
      if (!isAction(action)) {
        return next(action);
      }
      if (addListener.match(action)) {
        return startListening(action.payload);
      }
      if (clearAllListeners.match(action)) {
        clearListenerMiddleware();
        return;
      }
      if (removeListener.match(action)) {
        return stopListening(action.payload);
      }
      let originalState = api.getState();
      const getOriginalState = () => {
        if (originalState === INTERNAL_NIL_TOKEN) {
          throw new Error(formatProdErrorMessage(23));
        }
        return originalState;
      };
      let result;
      try {
        result = next(action);
        if (listenerMap.size > 0) {
          const currentState = api.getState();
          const listenerEntries = Array.from(listenerMap.values());
          for (const entry of listenerEntries) {
            let runListener = false;
            try {
              runListener = entry.predicate(action, currentState, originalState);
            } catch (predicateError) {
              runListener = false;
              safelyNotifyError(onError, predicateError, {
                raisedBy: "predicate"
              });
            }
            if (!runListener) {
              continue;
            }
            notifyListener(entry, action, api, getOriginalState);
          }
        }
      } finally {
        originalState = INTERNAL_NIL_TOKEN;
      }
      return result;
    };
    return {
      middleware,
      startListening,
      stopListening,
      clearListeners: clearListenerMiddleware
    };
  };
  function formatProdErrorMessage(code) {
    return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
  }
  var initialState$b = {
    layoutType: "horizontal",
    width: 0,
    height: 0,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    scale: 1
  };
  var chartLayoutSlice = createSlice({
    name: "chartLayout",
    initialState: initialState$b,
    reducers: {
      setLayout(state, action) {
        state.layoutType = action.payload;
      },
      setChartSize(state, action) {
        state.width = action.payload.width;
        state.height = action.payload.height;
      },
      setMargin(state, action) {
        var _action$payload$top, _action$payload$right, _action$payload$botto, _action$payload$left;
        state.margin.top = (_action$payload$top = action.payload.top) !== null && _action$payload$top !== void 0 ? _action$payload$top : 0;
        state.margin.right = (_action$payload$right = action.payload.right) !== null && _action$payload$right !== void 0 ? _action$payload$right : 0;
        state.margin.bottom = (_action$payload$botto = action.payload.bottom) !== null && _action$payload$botto !== void 0 ? _action$payload$botto : 0;
        state.margin.left = (_action$payload$left = action.payload.left) !== null && _action$payload$left !== void 0 ? _action$payload$left : 0;
      },
      setScale(state, action) {
        state.scale = action.payload;
      }
    }
  });
  var {
    setMargin,
    setLayout,
    setChartSize,
    setScale
  } = chartLayoutSlice.actions;
  var chartLayoutReducer = chartLayoutSlice.reducer;
  function getSliced(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
      return arr;
    }
    if (arr && startIndex + endIndex !== 0) {
      return arr.slice(startIndex, endIndex + 1);
    }
    return arr;
  }
  function ownKeys$x(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$x(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$x(Object(t), true).forEach(function(r3) {
        _defineProperty$z(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$x(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$z(e, r2, t) {
    return (r2 = _toPropertyKey$z(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$z(t) {
    var i = _toPrimitive$z(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$z(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function getValueByDataKey(obj, dataKey, defaultValue) {
    if (isNullish(obj) || isNullish(dataKey)) {
      return defaultValue;
    }
    if (isNumOrStr(dataKey)) {
      return get$1(obj, dataKey, defaultValue);
    }
    if (typeof dataKey === "function") {
      return dataKey(obj);
    }
    return defaultValue;
  }
  var appendOffsetOfLegend = (offset, legendSettings, legendSize) => {
    if (legendSettings && legendSize) {
      var {
        width: boxWidth,
        height: boxHeight
      } = legendSize;
      var {
        align,
        verticalAlign,
        layout
      } = legendSettings;
      if ((layout === "vertical" || layout === "horizontal" && verticalAlign === "middle") && align !== "center" && isNumber(offset[align])) {
        return _objectSpread$x(_objectSpread$x({}, offset), {}, {
          [align]: offset[align] + (boxWidth || 0)
        });
      }
      if ((layout === "horizontal" || layout === "vertical" && align === "center") && verticalAlign !== "middle" && isNumber(offset[verticalAlign])) {
        return _objectSpread$x(_objectSpread$x({}, offset), {}, {
          [verticalAlign]: offset[verticalAlign] + (boxHeight || 0)
        });
      }
    }
    return offset;
  };
  var isCategoricalAxis = (layout, axisType) => layout === "horizontal" && axisType === "xAxis" || layout === "vertical" && axisType === "yAxis" || layout === "centric" && axisType === "angleAxis" || layout === "radial" && axisType === "radiusAxis";
  var EPS = 1e-4;
  var checkDomainOfScale = (scale) => {
    var domain = scale.domain();
    if (!domain || domain.length <= 2) {
      return;
    }
    var len = domain.length;
    var range2 = scale.range();
    var minValue = Math.min(range2[0], range2[1]) - EPS;
    var maxValue = Math.max(range2[0], range2[1]) + EPS;
    var first = scale(domain[0]);
    var last2 = scale(domain[len - 1]);
    if (first < minValue || first > maxValue || last2 < minValue || last2 > maxValue) {
      scale.domain([domain[0], domain[len - 1]]);
    }
  };
  var truncateByDomain = (value, domain) => {
    if (!domain || domain.length !== 2 || !isNumber(domain[0]) || !isNumber(domain[1])) {
      return value;
    }
    var minValue = Math.min(domain[0], domain[1]);
    var maxValue = Math.max(domain[0], domain[1]);
    var result = [value[0], value[1]];
    if (!isNumber(value[0]) || value[0] < minValue) {
      result[0] = minValue;
    }
    if (!isNumber(value[1]) || value[1] > maxValue) {
      result[1] = maxValue;
    }
    if (result[0] > maxValue) {
      result[0] = maxValue;
    }
    if (result[1] < minValue) {
      result[1] = minValue;
    }
    return result;
  };
  var offsetSign = (series) => {
    var n = series.length;
    if (n <= 0) {
      return;
    }
    for (var j = 0, m = series[0].length; j < m; ++j) {
      var positive = 0;
      var negative = 0;
      for (var i = 0; i < n; ++i) {
        var value = isNan(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
        if (value >= 0) {
          series[i][j][0] = positive;
          series[i][j][1] = positive + value;
          positive = series[i][j][1];
        } else {
          series[i][j][0] = negative;
          series[i][j][1] = negative + value;
          negative = series[i][j][1];
        }
      }
    }
  };
  var offsetPositive = (series) => {
    var n = series.length;
    if (n <= 0) {
      return;
    }
    for (var j = 0, m = series[0].length; j < m; ++j) {
      var positive = 0;
      for (var i = 0; i < n; ++i) {
        var value = isNan(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
        if (value >= 0) {
          series[i][j][0] = positive;
          series[i][j][1] = positive + value;
          positive = series[i][j][1];
        } else {
          series[i][j][0] = 0;
          series[i][j][1] = 0;
        }
      }
    }
  };
  var STACK_OFFSET_MAP = {
    sign: offsetSign,
    // @ts-expect-error definitelytyped types are incorrect
    expand: stackOffsetExpand,
    // @ts-expect-error definitelytyped types are incorrect
    none: stackOffsetNone,
    // @ts-expect-error definitelytyped types are incorrect
    silhouette: stackOffsetSilhouette,
    // @ts-expect-error definitelytyped types are incorrect
    wiggle: stackOffsetWiggle,
    positive: offsetPositive
  };
  var getStackedData = (data, dataKeys, offsetType) => {
    var offsetAccessor = STACK_OFFSET_MAP[offsetType];
    var stack = shapeStack().keys(dataKeys).value((d, key) => Number(getValueByDataKey(d, key, 0))).order(stackOrderNone).offset(offsetAccessor);
    return stack(data);
  };
  function getNormalizedStackId(publicStackId) {
    return publicStackId == null ? void 0 : String(publicStackId);
  }
  var getCateCoordinateOfBar = (_ref2) => {
    var {
      axis,
      ticks: ticks2,
      offset,
      bandSize,
      entry,
      index
    } = _ref2;
    if (axis.type === "category") {
      return ticks2[index] ? ticks2[index].coordinate + offset : null;
    }
    var value = getValueByDataKey(entry, axis.dataKey, axis.scale.domain()[index]);
    return !isNullish(value) ? axis.scale(value) - bandSize / 2 + offset : null;
  };
  var getBaseValueOfBar = (_ref3) => {
    var {
      numericAxis
    } = _ref3;
    var domain = numericAxis.scale.domain();
    if (numericAxis.type === "number") {
      var minValue = Math.min(domain[0], domain[1]);
      var maxValue = Math.max(domain[0], domain[1]);
      if (minValue <= 0 && maxValue >= 0) {
        return 0;
      }
      if (maxValue < 0) {
        return maxValue;
      }
      return minValue;
    }
    return domain[0];
  };
  var getDomainOfSingle = (data) => {
    var flat = data.flat(2).filter(isNumber);
    return [Math.min(...flat), Math.max(...flat)];
  };
  var makeDomainFinite = (domain) => {
    return [domain[0] === Infinity ? 0 : domain[0], domain[1] === -Infinity ? 0 : domain[1]];
  };
  var getDomainOfStackGroups = (stackGroups, startIndex, endIndex) => {
    if (stackGroups == null) {
      return void 0;
    }
    return makeDomainFinite(Object.keys(stackGroups).reduce((result, stackId) => {
      var group = stackGroups[stackId];
      var {
        stackedData
      } = group;
      var domain = stackedData.reduce((res, entry) => {
        var sliced = getSliced(entry, startIndex, endIndex);
        var s2 = getDomainOfSingle(sliced);
        return [Math.min(res[0], s2[0]), Math.max(res[1], s2[1])];
      }, [Infinity, -Infinity]);
      return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
    }, [Infinity, -Infinity]));
  };
  var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
  var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
  var getBandSizeOfAxis = (axis, ticks2, isBar) => {
    if (axis && axis.scale && axis.scale.bandwidth) {
      var bandWidth = axis.scale.bandwidth();
      if (!isBar || bandWidth > 0) {
        return bandWidth;
      }
    }
    if (axis && ticks2 && ticks2.length >= 2) {
      var orderedTicks = sortBy(ticks2, (o) => o.coordinate);
      var bandSize = Infinity;
      for (var i = 1, len = orderedTicks.length; i < len; i++) {
        var cur = orderedTicks[i];
        var prev = orderedTicks[i - 1];
        bandSize = Math.min((cur.coordinate || 0) - (prev.coordinate || 0), bandSize);
      }
      return bandSize === Infinity ? 0 : bandSize;
    }
    return isBar ? void 0 : 0;
  };
  function getTooltipEntry(_ref4) {
    var {
      tooltipEntrySettings,
      dataKey,
      payload,
      value,
      name
    } = _ref4;
    return _objectSpread$x(_objectSpread$x({}, tooltipEntrySettings), {}, {
      dataKey,
      payload,
      value,
      name
    });
  }
  function getTooltipNameProp(nameFromItem, dataKey) {
    if (nameFromItem) {
      return String(nameFromItem);
    }
    if (typeof dataKey === "string") {
      return dataKey;
    }
    return void 0;
  }
  var calculateCartesianTooltipPos = (coordinate, layout) => {
    if (layout === "horizontal") {
      return coordinate.chartX;
    }
    if (layout === "vertical") {
      return coordinate.chartY;
    }
    return void 0;
  };
  var calculatePolarTooltipPos = (rangeObj, layout) => {
    if (layout === "centric") {
      return rangeObj.angle;
    }
    return rangeObj.radius;
  };
  var selectChartWidth = (state) => state.layout.width;
  var selectChartHeight = (state) => state.layout.height;
  var selectContainerScale = (state) => state.layout.scale;
  var selectMargin = (state) => state.layout.margin;
  var selectAllXAxes = createSelector((state) => state.cartesianAxis.xAxis, (xAxisMap) => {
    return Object.values(xAxisMap);
  });
  var selectAllYAxes = createSelector((state) => state.cartesianAxis.yAxis, (yAxisMap) => {
    return Object.values(yAxisMap);
  });
  var DATA_ITEM_INDEX_ATTRIBUTE_NAME = "data-recharts-item-index";
  var DATA_ITEM_DATAKEY_ATTRIBUTE_NAME = "data-recharts-item-data-key";
  var DEFAULT_Y_AXIS_WIDTH = 60;
  function ownKeys$w(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$w(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$w(Object(t), true).forEach(function(r3) {
        _defineProperty$y(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$w(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$y(e, r2, t) {
    return (r2 = _toPropertyKey$y(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$y(t) {
    var i = _toPrimitive$y(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$y(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var selectBrushHeight = (state) => state.brush.height;
  function selectLeftAxesOffset(state) {
    var yAxes = selectAllYAxes(state);
    return yAxes.reduce((result, entry) => {
      if (entry.orientation === "left" && !entry.mirror && !entry.hide) {
        var width = typeof entry.width === "number" ? entry.width : DEFAULT_Y_AXIS_WIDTH;
        return result + width;
      }
      return result;
    }, 0);
  }
  function selectRightAxesOffset(state) {
    var yAxes = selectAllYAxes(state);
    return yAxes.reduce((result, entry) => {
      if (entry.orientation === "right" && !entry.mirror && !entry.hide) {
        var width = typeof entry.width === "number" ? entry.width : DEFAULT_Y_AXIS_WIDTH;
        return result + width;
      }
      return result;
    }, 0);
  }
  function selectTopAxesOffset(state) {
    var xAxes = selectAllXAxes(state);
    return xAxes.reduce((result, entry) => {
      if (entry.orientation === "top" && !entry.mirror && !entry.hide) {
        return result + entry.height;
      }
      return result;
    }, 0);
  }
  function selectBottomAxesOffset(state) {
    var xAxes = selectAllXAxes(state);
    return xAxes.reduce((result, entry) => {
      if (entry.orientation === "bottom" && !entry.mirror && !entry.hide) {
        return result + entry.height;
      }
      return result;
    }, 0);
  }
  var selectChartOffsetInternal = createSelector([selectChartWidth, selectChartHeight, selectMargin, selectBrushHeight, selectLeftAxesOffset, selectRightAxesOffset, selectTopAxesOffset, selectBottomAxesOffset, selectLegendSettings, selectLegendSize], (chartWidth, chartHeight, margin, brushHeight, leftAxesOffset, rightAxesOffset, topAxesOffset, bottomAxesOffset, legendSettings, legendSize) => {
    var offsetH = {
      left: (margin.left || 0) + leftAxesOffset,
      right: (margin.right || 0) + rightAxesOffset
    };
    var offsetV = {
      top: (margin.top || 0) + topAxesOffset,
      bottom: (margin.bottom || 0) + bottomAxesOffset
    };
    var offset = _objectSpread$w(_objectSpread$w({}, offsetV), offsetH);
    var brushBottom = offset.bottom;
    offset.bottom += brushHeight;
    offset = appendOffsetOfLegend(offset, legendSettings, legendSize);
    var offsetWidth = chartWidth - offset.left - offset.right;
    var offsetHeight = chartHeight - offset.top - offset.bottom;
    return _objectSpread$w(_objectSpread$w({
      brushBottom
    }, offset), {}, {
      // never return negative values for height and width
      width: Math.max(offsetWidth, 0),
      height: Math.max(offsetHeight, 0)
    });
  });
  var selectChartViewBox = createSelector(selectChartOffsetInternal, (offset) => ({
    x: offset.left,
    y: offset.top,
    width: offset.width,
    height: offset.height
  }));
  var selectAxisViewBox = createSelector(selectChartWidth, selectChartHeight, (width, height) => ({
    x: 0,
    y: 0,
    width,
    height
  }));
  var PanoramaContext = /* @__PURE__ */ React.createContext(null);
  var useIsPanorama = () => React.useContext(PanoramaContext) != null;
  var selectBrushSettings = (state) => state.brush;
  var selectBrushDimensions = createSelector([selectBrushSettings, selectChartOffsetInternal, selectMargin], (brushSettings, offset, margin) => ({
    height: brushSettings.height,
    x: isNumber(brushSettings.x) ? brushSettings.x : offset.left,
    y: isNumber(brushSettings.y) ? brushSettings.y : offset.top + offset.height + offset.brushBottom - ((margin === null || margin === void 0 ? void 0 : margin.bottom) || 0),
    width: isNumber(brushSettings.width) ? brushSettings.width : offset.width
  }));
  var throttle$2 = {};
  var debounce$1 = {};
  var debounce = {};
  var hasRequiredDebounce$1;
  function requireDebounce$1() {
    if (hasRequiredDebounce$1) return debounce;
    hasRequiredDebounce$1 = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function debounce2(func, debounceMs, { signal, edges } = {}) {
        let pendingThis = void 0;
        let pendingArgs = null;
        const leading = edges != null && edges.includes("leading");
        const trailing = edges == null || edges.includes("trailing");
        const invoke = () => {
          if (pendingArgs !== null) {
            func.apply(pendingThis, pendingArgs);
            pendingThis = void 0;
            pendingArgs = null;
          }
        };
        const onTimerEnd = () => {
          if (trailing) {
            invoke();
          }
          cancel();
        };
        let timeoutId = null;
        const schedule = () => {
          if (timeoutId != null) {
            clearTimeout(timeoutId);
          }
          timeoutId = setTimeout(() => {
            timeoutId = null;
            onTimerEnd();
          }, debounceMs);
        };
        const cancelTimer = () => {
          if (timeoutId !== null) {
            clearTimeout(timeoutId);
            timeoutId = null;
          }
        };
        const cancel = () => {
          cancelTimer();
          pendingThis = void 0;
          pendingArgs = null;
        };
        const flush = () => {
          invoke();
        };
        const debounced = function(...args) {
          if (signal == null ? void 0 : signal.aborted) {
            return;
          }
          pendingThis = this;
          pendingArgs = args;
          const isFirstCall = timeoutId == null;
          schedule();
          if (leading && isFirstCall) {
            invoke();
          }
        };
        debounced.schedule = schedule;
        debounced.cancel = cancel;
        debounced.flush = flush;
        signal == null ? void 0 : signal.addEventListener("abort", cancel, { once: true });
        return debounced;
      }
      exports$1.debounce = debounce2;
    })(debounce);
    return debounce;
  }
  var hasRequiredDebounce;
  function requireDebounce() {
    if (hasRequiredDebounce) return debounce$1;
    hasRequiredDebounce = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const debounce$12 = /* @__PURE__ */ requireDebounce$1();
      function debounce2(func, debounceMs = 0, options = {}) {
        if (typeof options !== "object") {
          options = {};
        }
        const { leading = false, trailing = true, maxWait } = options;
        const edges = Array(2);
        if (leading) {
          edges[0] = "leading";
        }
        if (trailing) {
          edges[1] = "trailing";
        }
        let result = void 0;
        let pendingAt = null;
        const _debounced = debounce$12.debounce(function(...args) {
          result = func.apply(this, args);
          pendingAt = null;
        }, debounceMs, { edges });
        const debounced = function(...args) {
          if (maxWait != null) {
            if (pendingAt === null) {
              pendingAt = Date.now();
            }
            if (Date.now() - pendingAt >= maxWait) {
              result = func.apply(this, args);
              pendingAt = Date.now();
              _debounced.cancel();
              _debounced.schedule();
              return result;
            }
          }
          _debounced.apply(this, args);
          return result;
        };
        const flush = () => {
          _debounced.flush();
          return result;
        };
        debounced.cancel = _debounced.cancel;
        debounced.flush = flush;
        return debounced;
      }
      exports$1.debounce = debounce2;
    })(debounce$1);
    return debounce$1;
  }
  var hasRequiredThrottle$1;
  function requireThrottle$1() {
    if (hasRequiredThrottle$1) return throttle$2;
    hasRequiredThrottle$1 = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const debounce2 = /* @__PURE__ */ requireDebounce();
      function throttle2(func, throttleMs = 0, options = {}) {
        const { leading = true, trailing = true } = options;
        return debounce2.debounce(func, throttleMs, {
          leading,
          maxWait: throttleMs,
          trailing
        });
      }
      exports$1.throttle = throttle2;
    })(throttle$2);
    return throttle$2;
  }
  var throttle$1;
  var hasRequiredThrottle;
  function requireThrottle() {
    if (hasRequiredThrottle) return throttle$1;
    hasRequiredThrottle = 1;
    throttle$1 = requireThrottle$1().throttle;
    return throttle$1;
  }
  var throttleExports = /* @__PURE__ */ requireThrottle();
  const throttle = /* @__PURE__ */ getDefaultExportFromCjs(throttleExports);
  var warn = function warn2(condition, format2) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    if (typeof console !== "undefined" && console.warn) {
      if (format2 === void 0) {
        console.warn("LogUtils requires an error message argument");
      }
      if (!condition) {
        if (format2 === void 0) {
          console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
          var argIndex = 0;
          console.warn(format2.replace(/%s/g, () => args[argIndex++]));
        }
      }
    }
  };
  var calculateChartDimensions = (containerWidth, containerHeight, props) => {
    var {
      width = "100%",
      height = "100%",
      aspect,
      maxHeight
    } = props;
    var calculatedWidth = isPercent(width) ? containerWidth : Number(width);
    var calculatedHeight = isPercent(height) ? containerHeight : Number(height);
    if (aspect && aspect > 0) {
      if (calculatedWidth) {
        calculatedHeight = calculatedWidth / aspect;
      } else if (calculatedHeight) {
        calculatedWidth = calculatedHeight * aspect;
      }
      if (maxHeight && calculatedHeight != null && calculatedHeight > maxHeight) {
        calculatedHeight = maxHeight;
      }
    }
    return {
      calculatedWidth,
      calculatedHeight
    };
  };
  var bothOverflow = {
    width: 0,
    height: 0,
    overflow: "visible"
  };
  var overflowX = {
    width: 0,
    overflowX: "visible"
  };
  var overflowY = {
    height: 0,
    overflowY: "visible"
  };
  var noStyle = {};
  var getInnerDivStyle = (props) => {
    var {
      width,
      height
    } = props;
    var isWidthPercent = isPercent(width);
    var isHeightPercent = isPercent(height);
    if (isWidthPercent && isHeightPercent) {
      return bothOverflow;
    }
    if (isWidthPercent) {
      return overflowX;
    }
    if (isHeightPercent) {
      return overflowY;
    }
    return noStyle;
  };
  function getDefaultWidthAndHeight(_ref2) {
    var {
      width,
      height,
      aspect
    } = _ref2;
    var calculatedWidth = width;
    var calculatedHeight = height;
    if (calculatedWidth === void 0 && calculatedHeight === void 0) {
      calculatedWidth = "100%";
      calculatedHeight = "100%";
    } else if (calculatedWidth === void 0) {
      calculatedWidth = aspect && aspect > 0 ? void 0 : "100%";
    } else if (calculatedHeight === void 0) {
      calculatedHeight = aspect && aspect > 0 ? void 0 : "100%";
    }
    return {
      width: calculatedWidth,
      height: calculatedHeight
    };
  }
  function isWellBehavedNumber(n) {
    return Number.isFinite(n);
  }
  function isPositiveNumber(n) {
    return typeof n === "number" && n > 0 && Number.isFinite(n);
  }
  function _extends$k() {
    return _extends$k = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$k.apply(null, arguments);
  }
  function ownKeys$v(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$v(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$v(Object(t), true).forEach(function(r3) {
        _defineProperty$x(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$v(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$x(e, r2, t) {
    return (r2 = _toPropertyKey$x(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$x(t) {
    var i = _toPrimitive$x(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$x(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var ResponsiveContainerContext = /* @__PURE__ */ React.createContext({
    width: -1,
    height: -1
  });
  function isAcceptableSize(size) {
    return isPositiveNumber(size.width) && isPositiveNumber(size.height);
  }
  function ResponsiveContainerContextProvider(_ref2) {
    var {
      children,
      width,
      height
    } = _ref2;
    var size = React.useMemo(() => ({
      width,
      height
    }), [width, height]);
    if (!isAcceptableSize(size)) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(ResponsiveContainerContext.Provider, {
      value: size
    }, children);
  }
  var useResponsiveContainerContext = () => React.useContext(ResponsiveContainerContext);
  var SizeDetectorContainer = /* @__PURE__ */ React.forwardRef((_ref2, ref) => {
    var {
      aspect,
      initialDimension = {
        width: -1,
        height: -1
      },
      width,
      height,
      /*
       * default min-width to 0 if not specified - 'auto' causes issues with flexbox
       * https://github.com/recharts/recharts/issues/172
       */
      minWidth = 0,
      minHeight,
      maxHeight,
      children,
      debounce: debounce2 = 0,
      id,
      className,
      onResize,
      style = {}
    } = _ref2;
    var containerRef = React.useRef(null);
    var onResizeRef = React.useRef();
    onResizeRef.current = onResize;
    React.useImperativeHandle(ref, () => containerRef.current);
    var [sizes, setSizes] = React.useState({
      containerWidth: initialDimension.width,
      containerHeight: initialDimension.height
    });
    var setContainerSize = React.useCallback((newWidth, newHeight) => {
      setSizes((prevState) => {
        var roundedWidth = Math.round(newWidth);
        var roundedHeight = Math.round(newHeight);
        if (prevState.containerWidth === roundedWidth && prevState.containerHeight === roundedHeight) {
          return prevState;
        }
        return {
          containerWidth: roundedWidth,
          containerHeight: roundedHeight
        };
      });
    }, []);
    React.useEffect(() => {
      if (containerRef.current == null || typeof ResizeObserver === "undefined") {
        return noop$2;
      }
      var callback = (entries) => {
        var _onResizeRef$current;
        var {
          width: containerWidth3,
          height: containerHeight3
        } = entries[0].contentRect;
        setContainerSize(containerWidth3, containerHeight3);
        (_onResizeRef$current = onResizeRef.current) === null || _onResizeRef$current === void 0 || _onResizeRef$current.call(onResizeRef, containerWidth3, containerHeight3);
      };
      if (debounce2 > 0) {
        callback = throttle(callback, debounce2, {
          trailing: true,
          leading: false
        });
      }
      var observer = new ResizeObserver(callback);
      var {
        width: containerWidth2,
        height: containerHeight2
      } = containerRef.current.getBoundingClientRect();
      setContainerSize(containerWidth2, containerHeight2);
      observer.observe(containerRef.current);
      return () => {
        observer.disconnect();
      };
    }, [setContainerSize, debounce2]);
    var {
      containerWidth,
      containerHeight
    } = sizes;
    warn(!aspect || aspect > 0, "The aspect(%s) must be greater than zero.", aspect);
    var {
      calculatedWidth,
      calculatedHeight
    } = calculateChartDimensions(containerWidth, containerHeight, {
      width,
      height,
      aspect,
      maxHeight
    });
    warn(calculatedWidth != null && calculatedWidth > 0 || calculatedHeight != null && calculatedHeight > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);
    return /* @__PURE__ */ React__namespace.createElement("div", {
      id: id ? "".concat(id) : void 0,
      className: clsx("recharts-responsive-container", className),
      style: _objectSpread$v(_objectSpread$v({}, style), {}, {
        width,
        height,
        minWidth,
        minHeight,
        maxHeight
      }),
      ref: containerRef
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      style: getInnerDivStyle({
        width,
        height
      })
    }, /* @__PURE__ */ React__namespace.createElement(ResponsiveContainerContextProvider, {
      width: calculatedWidth,
      height: calculatedHeight
    }, children)));
  });
  var ResponsiveContainer = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var responsiveContainerContext = useResponsiveContainerContext();
    if (isPositiveNumber(responsiveContainerContext.width) && isPositiveNumber(responsiveContainerContext.height)) {
      return props.children;
    }
    var {
      width,
      height
    } = getDefaultWidthAndHeight({
      width: props.width,
      height: props.height,
      aspect: props.aspect
    });
    var {
      calculatedWidth,
      calculatedHeight
    } = calculateChartDimensions(void 0, void 0, {
      width,
      height,
      aspect: props.aspect,
      maxHeight: props.maxHeight
    });
    if (isNumber(calculatedWidth) && isNumber(calculatedHeight)) {
      return /* @__PURE__ */ React__namespace.createElement(ResponsiveContainerContextProvider, {
        width: calculatedWidth,
        height: calculatedHeight
      }, props.children);
    }
    return /* @__PURE__ */ React__namespace.createElement(SizeDetectorContainer, _extends$k({}, props, {
      width,
      height,
      ref
    }));
  });
  function cartesianViewBoxToTrapezoid(box) {
    if (!box) {
      return void 0;
    }
    return {
      x: box.x,
      y: box.y,
      upperWidth: "upperWidth" in box ? box.upperWidth : box.width,
      lowerWidth: "lowerWidth" in box ? box.lowerWidth : box.width,
      width: box.width,
      height: box.height
    };
  }
  var useViewBox = () => {
    var _useAppSelector;
    var panorama = useIsPanorama();
    var rootViewBox = useAppSelector(selectChartViewBox);
    var brushDimensions = useAppSelector(selectBrushDimensions);
    var brushPadding = (_useAppSelector = useAppSelector(selectBrushSettings)) === null || _useAppSelector === void 0 ? void 0 : _useAppSelector.padding;
    if (!panorama || !brushDimensions || !brushPadding) {
      return rootViewBox;
    }
    return {
      width: brushDimensions.width - brushPadding.left - brushPadding.right,
      height: brushDimensions.height - brushPadding.top - brushPadding.bottom,
      x: brushPadding.left,
      y: brushPadding.top
    };
  };
  var manyComponentsThrowErrorsIfOffsetIsUndefined = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0
  };
  var useOffsetInternal = () => {
    var _useAppSelector2;
    return (_useAppSelector2 = useAppSelector(selectChartOffsetInternal)) !== null && _useAppSelector2 !== void 0 ? _useAppSelector2 : manyComponentsThrowErrorsIfOffsetIsUndefined;
  };
  var useChartWidth = () => {
    return useAppSelector(selectChartWidth);
  };
  var useChartHeight = () => {
    return useAppSelector(selectChartHeight);
  };
  var selectChartLayout = (state) => state.layout.layoutType;
  var useChartLayout = () => useAppSelector(selectChartLayout);
  var useIsInChartContext = () => {
    var layout = useChartLayout();
    return layout !== void 0;
  };
  var ReportChartSize = (props) => {
    var dispatch = useAppDispatch();
    var isPanorama = useIsPanorama();
    var {
      width: widthFromProps,
      height: heightFromProps
    } = props;
    var responsiveContainerCalculations = useResponsiveContainerContext();
    var width = widthFromProps;
    var height = heightFromProps;
    if (responsiveContainerCalculations) {
      width = responsiveContainerCalculations.width > 0 ? responsiveContainerCalculations.width : widthFromProps;
      height = responsiveContainerCalculations.height > 0 ? responsiveContainerCalculations.height : heightFromProps;
    }
    React.useEffect(() => {
      if (!isPanorama && isPositiveNumber(width) && isPositiveNumber(height)) {
        dispatch(setChartSize({
          width,
          height
        }));
      }
    }, [dispatch, isPanorama, width, height]);
    return null;
  };
  var NOTHING = Symbol.for("immer-nothing");
  var DRAFTABLE = Symbol.for("immer-draftable");
  var DRAFT_STATE = Symbol.for("immer-state");
  function die(error, ...args) {
    throw new Error(
      `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
    );
  }
  var getPrototypeOf = Object.getPrototypeOf;
  function isDraft(value) {
    return !!value && !!value[DRAFT_STATE];
  }
  function isDraftable(value) {
    var _a;
    if (!value)
      return false;
    return isPlainObject$3(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!((_a = value.constructor) == null ? void 0 : _a[DRAFTABLE]) || isMap(value) || isSet(value);
  }
  var objectCtorString = Object.prototype.constructor.toString();
  var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
  function isPlainObject$3(value) {
    if (!value || typeof value !== "object")
      return false;
    const proto = Object.getPrototypeOf(value);
    if (proto === null || proto === Object.prototype)
      return true;
    const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    if (Ctor === Object)
      return true;
    if (typeof Ctor !== "function")
      return false;
    let ctorString = cachedCtorStrings.get(Ctor);
    if (ctorString === void 0) {
      ctorString = Function.toString.call(Ctor);
      cachedCtorStrings.set(Ctor, ctorString);
    }
    return ctorString === objectCtorString;
  }
  function each(obj, iter, strict = true) {
    if (getArchtype(obj) === 0) {
      const keys = strict ? Reflect.ownKeys(obj) : Object.keys(obj);
      keys.forEach((key) => {
        iter(key, obj[key], obj);
      });
    } else {
      obj.forEach((entry, index) => iter(index, entry, obj));
    }
  }
  function getArchtype(thing) {
    const state = thing[DRAFT_STATE];
    return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
  }
  function has(thing, prop) {
    return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
  }
  function set(thing, propOrOldValue, value) {
    const t = getArchtype(thing);
    if (t === 2)
      thing.set(propOrOldValue, value);
    else if (t === 3) {
      thing.add(value);
    } else
      thing[propOrOldValue] = value;
  }
  function is$1(x2, y2) {
    if (x2 === y2) {
      return x2 !== 0 || 1 / x2 === 1 / y2;
    } else {
      return x2 !== x2 && y2 !== y2;
    }
  }
  function isMap(target) {
    return target instanceof Map;
  }
  function isSet(target) {
    return target instanceof Set;
  }
  function latest(state) {
    return state.copy_ || state.base_;
  }
  function shallowCopy(base, strict) {
    if (isMap(base)) {
      return new Map(base);
    }
    if (isSet(base)) {
      return new Set(base);
    }
    if (Array.isArray(base))
      return Array.prototype.slice.call(base);
    const isPlain = isPlainObject$3(base);
    if (strict === true || strict === "class_only" && !isPlain) {
      const descriptors = Object.getOwnPropertyDescriptors(base);
      delete descriptors[DRAFT_STATE];
      let keys = Reflect.ownKeys(descriptors);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const desc = descriptors[key];
        if (desc.writable === false) {
          desc.writable = true;
          desc.configurable = true;
        }
        if (desc.get || desc.set)
          descriptors[key] = {
            configurable: true,
            writable: true,
            // could live with !!desc.set as well here...
            enumerable: desc.enumerable,
            value: base[key]
          };
      }
      return Object.create(getPrototypeOf(base), descriptors);
    } else {
      const proto = getPrototypeOf(base);
      if (proto !== null && isPlain) {
        return { ...base };
      }
      const obj = Object.create(proto);
      return Object.assign(obj, base);
    }
  }
  function freeze(obj, deep = false) {
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
      return obj;
    if (getArchtype(obj) > 1) {
      Object.defineProperties(obj, {
        set: dontMutateMethodOverride,
        add: dontMutateMethodOverride,
        clear: dontMutateMethodOverride,
        delete: dontMutateMethodOverride
      });
    }
    Object.freeze(obj);
    if (deep)
      Object.values(obj).forEach((value) => freeze(value, true));
    return obj;
  }
  function dontMutateFrozenCollections() {
    die(2);
  }
  var dontMutateMethodOverride = {
    value: dontMutateFrozenCollections
  };
  function isFrozen(obj) {
    if (obj === null || typeof obj !== "object")
      return true;
    return Object.isFrozen(obj);
  }
  var plugins$1 = {};
  function getPlugin(pluginKey) {
    const plugin = plugins$1[pluginKey];
    if (!plugin) {
      die(0, pluginKey);
    }
    return plugin;
  }
  var currentScope;
  function getCurrentScope() {
    return currentScope;
  }
  function createScope(parent_, immer_) {
    return {
      drafts_: [],
      parent_,
      immer_,
      // Whenever the modified draft contains a draft from another scope, we
      // need to prevent auto-freezing so the unowned draft can be finalized.
      canAutoFreeze_: true,
      unfinalizedDrafts_: 0
    };
  }
  function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
      getPlugin("Patches");
      scope.patches_ = [];
      scope.inversePatches_ = [];
      scope.patchListener_ = patchListener;
    }
  }
  function revokeScope(scope) {
    leaveScope(scope);
    scope.drafts_.forEach(revokeDraft);
    scope.drafts_ = null;
  }
  function leaveScope(scope) {
    if (scope === currentScope) {
      currentScope = scope.parent_;
    }
  }
  function enterScope(immer2) {
    return currentScope = createScope(currentScope, immer2);
  }
  function revokeDraft(draft) {
    const state = draft[DRAFT_STATE];
    if (state.type_ === 0 || state.type_ === 1)
      state.revoke_();
    else
      state.revoked_ = true;
  }
  function processResult(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    const baseDraft = scope.drafts_[0];
    const isReplaced = result !== void 0 && result !== baseDraft;
    if (isReplaced) {
      if (baseDraft[DRAFT_STATE].modified_) {
        revokeScope(scope);
        die(4);
      }
      if (isDraftable(result)) {
        result = finalize(scope, result);
        if (!scope.parent_)
          maybeFreeze(scope, result);
      }
      if (scope.patches_) {
        getPlugin("Patches").generateReplacementPatches_(
          baseDraft[DRAFT_STATE].base_,
          result,
          scope.patches_,
          scope.inversePatches_
        );
      }
    } else {
      result = finalize(scope, baseDraft, []);
    }
    revokeScope(scope);
    if (scope.patches_) {
      scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING ? result : void 0;
  }
  function finalize(rootScope, value, path) {
    if (isFrozen(value))
      return value;
    const useStrictIteration = rootScope.immer_.shouldUseStrictIteration();
    const state = value[DRAFT_STATE];
    if (!state) {
      each(
        value,
        (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path),
        useStrictIteration
      );
      return value;
    }
    if (state.scope_ !== rootScope)
      return value;
    if (!state.modified_) {
      maybeFreeze(rootScope, state.base_, true);
      return state.base_;
    }
    if (!state.finalized_) {
      state.finalized_ = true;
      state.scope_.unfinalizedDrafts_--;
      const result = state.copy_;
      let resultEach = result;
      let isSet2 = false;
      if (state.type_ === 3) {
        resultEach = new Set(result);
        result.clear();
        isSet2 = true;
      }
      each(
        resultEach,
        (key, childValue) => finalizeProperty(
          rootScope,
          state,
          result,
          key,
          childValue,
          path,
          isSet2
        ),
        useStrictIteration
      );
      maybeFreeze(rootScope, result, false);
      if (path && rootScope.patches_) {
        getPlugin("Patches").generatePatches_(
          state,
          path,
          rootScope.patches_,
          rootScope.inversePatches_
        );
      }
    }
    return state.copy_;
  }
  function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
    if (childValue == null) {
      return;
    }
    if (typeof childValue !== "object" && !targetIsSet) {
      return;
    }
    const childIsFrozen = isFrozen(childValue);
    if (childIsFrozen && !targetIsSet) {
      return;
    }
    if (isDraft(childValue)) {
      const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
      !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
      const res = finalize(rootScope, childValue, path);
      set(targetObject, prop, res);
      if (isDraft(res)) {
        rootScope.canAutoFreeze_ = false;
      } else
        return;
    } else if (targetIsSet) {
      targetObject.add(childValue);
    }
    if (isDraftable(childValue) && !childIsFrozen) {
      if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
        return;
      }
      if (parentState && parentState.base_ && parentState.base_[prop] === childValue && childIsFrozen) {
        return;
      }
      finalize(rootScope, childValue);
      if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && (isMap(targetObject) ? targetObject.has(prop) : Object.prototype.propertyIsEnumerable.call(targetObject, prop)))
        maybeFreeze(rootScope, childValue);
    }
  }
  function maybeFreeze(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
      freeze(value, deep);
    }
  }
  function createProxyProxy(base, parent) {
    const isArray2 = Array.isArray(base);
    const state = {
      type_: isArray2 ? 1 : 0,
      // Track which produce call this is associated with.
      scope_: parent ? parent.scope_ : getCurrentScope(),
      // True for both shallow and deep changes.
      modified_: false,
      // Used during finalization.
      finalized_: false,
      // Track which properties have been assigned (true) or deleted (false).
      assigned_: {},
      // The parent draft state.
      parent_: parent,
      // The base state.
      base_: base,
      // The base proxy.
      draft_: null,
      // set below
      // The base copy with any updated values.
      copy_: null,
      // Called by the `produce` function.
      revoke_: null,
      isManual_: false
    };
    let target = state;
    let traps = objectTraps;
    if (isArray2) {
      target = [state];
      traps = arrayTraps;
    }
    const { revoke, proxy } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return proxy;
  }
  var objectTraps = {
    get(state, prop) {
      if (prop === DRAFT_STATE)
        return state;
      const source = latest(state);
      if (!has(source, prop)) {
        return readPropFromProto(state, source, prop);
      }
      const value = source[prop];
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value === peek(state.base_, prop)) {
        prepareCopy(state);
        return state.copy_[prop] = createProxy(value, state);
      }
      return value;
    },
    has(state, prop) {
      return prop in latest(state);
    },
    ownKeys(state) {
      return Reflect.ownKeys(latest(state));
    },
    set(state, prop, value) {
      const desc = getDescriptorFromProto(latest(state), prop);
      if (desc == null ? void 0 : desc.set) {
        desc.set.call(state.draft_, value);
        return true;
      }
      if (!state.modified_) {
        const current2 = peek(latest(state), prop);
        const currentState = current2 == null ? void 0 : current2[DRAFT_STATE];
        if (currentState && currentState.base_ === value) {
          state.copy_[prop] = value;
          state.assigned_[prop] = false;
          return true;
        }
        if (is$1(value, current2) && (value !== void 0 || has(state.base_, prop)))
          return true;
        prepareCopy(state);
        markChanged(state);
      }
      if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
      (value !== void 0 || prop in state.copy_) || // special case: NaN
      Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
        return true;
      state.copy_[prop] = value;
      state.assigned_[prop] = true;
      return true;
    },
    deleteProperty(state, prop) {
      if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
        state.assigned_[prop] = false;
        prepareCopy(state);
        markChanged(state);
      } else {
        delete state.assigned_[prop];
      }
      if (state.copy_) {
        delete state.copy_[prop];
      }
      return true;
    },
    // Note: We never coerce `desc.value` into an Immer draft, because we can't make
    // the same guarantee in ES5 mode.
    getOwnPropertyDescriptor(state, prop) {
      const owner = latest(state);
      const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
      if (!desc)
        return desc;
      return {
        writable: true,
        configurable: state.type_ !== 1 || prop !== "length",
        enumerable: desc.enumerable,
        value: owner[prop]
      };
    },
    defineProperty() {
      die(11);
    },
    getPrototypeOf(state) {
      return getPrototypeOf(state.base_);
    },
    setPrototypeOf() {
      die(12);
    }
  };
  var arrayTraps = {};
  each(objectTraps, (key, fn) => {
    arrayTraps[key] = function() {
      arguments[0] = arguments[0][0];
      return fn.apply(this, arguments);
    };
  });
  arrayTraps.deleteProperty = function(state, prop) {
    return arrayTraps.set.call(this, state, prop, void 0);
  };
  arrayTraps.set = function(state, prop, value) {
    return objectTraps.set.call(this, state[0], prop, value, state[0]);
  };
  function peek(draft, prop) {
    const state = draft[DRAFT_STATE];
    const source = state ? latest(state) : draft;
    return source[prop];
  }
  function readPropFromProto(state, source, prop) {
    var _a;
    const desc = getDescriptorFromProto(source, prop);
    return desc ? `value` in desc ? desc.value : (
      // This is a very special case, if the prop is a getter defined by the
      // prototype, we should invoke it with the draft as context!
      (_a = desc.get) == null ? void 0 : _a.call(state.draft_)
    ) : void 0;
  }
  function getDescriptorFromProto(source, prop) {
    if (!(prop in source))
      return void 0;
    let proto = getPrototypeOf(source);
    while (proto) {
      const desc = Object.getOwnPropertyDescriptor(proto, prop);
      if (desc)
        return desc;
      proto = getPrototypeOf(proto);
    }
    return void 0;
  }
  function markChanged(state) {
    if (!state.modified_) {
      state.modified_ = true;
      if (state.parent_) {
        markChanged(state.parent_);
      }
    }
  }
  function prepareCopy(state) {
    if (!state.copy_) {
      state.copy_ = shallowCopy(
        state.base_,
        state.scope_.immer_.useStrictShallowCopy_
      );
    }
  }
  var Immer2 = class {
    constructor(config2) {
      this.autoFreeze_ = true;
      this.useStrictShallowCopy_ = false;
      this.useStrictIteration_ = true;
      this.produce = (base, recipe, patchListener) => {
        if (typeof base === "function" && typeof recipe !== "function") {
          const defaultBase = recipe;
          recipe = base;
          const self = this;
          return function curriedProduce(base2 = defaultBase, ...args) {
            return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
          };
        }
        if (typeof recipe !== "function")
          die(6);
        if (patchListener !== void 0 && typeof patchListener !== "function")
          die(7);
        let result;
        if (isDraftable(base)) {
          const scope = enterScope(this);
          const proxy = createProxy(base, void 0);
          let hasError = true;
          try {
            result = recipe(proxy);
            hasError = false;
          } finally {
            if (hasError)
              revokeScope(scope);
            else
              leaveScope(scope);
          }
          usePatchesInScope(scope, patchListener);
          return processResult(result, scope);
        } else if (!base || typeof base !== "object") {
          result = recipe(base);
          if (result === void 0)
            result = base;
          if (result === NOTHING)
            result = void 0;
          if (this.autoFreeze_)
            freeze(result, true);
          if (patchListener) {
            const p = [];
            const ip = [];
            getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
            patchListener(p, ip);
          }
          return result;
        } else
          die(1, base);
      };
      this.produceWithPatches = (base, recipe) => {
        if (typeof base === "function") {
          return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
        }
        let patches, inversePatches;
        const result = this.produce(base, recipe, (p, ip) => {
          patches = p;
          inversePatches = ip;
        });
        return [result, patches, inversePatches];
      };
      if (typeof (config2 == null ? void 0 : config2.autoFreeze) === "boolean")
        this.setAutoFreeze(config2.autoFreeze);
      if (typeof (config2 == null ? void 0 : config2.useStrictShallowCopy) === "boolean")
        this.setUseStrictShallowCopy(config2.useStrictShallowCopy);
      if (typeof (config2 == null ? void 0 : config2.useStrictIteration) === "boolean")
        this.setUseStrictIteration(config2.useStrictIteration);
    }
    createDraft(base) {
      if (!isDraftable(base))
        die(8);
      if (isDraft(base))
        base = current(base);
      const scope = enterScope(this);
      const proxy = createProxy(base, void 0);
      proxy[DRAFT_STATE].isManual_ = true;
      leaveScope(scope);
      return proxy;
    }
    finishDraft(draft, patchListener) {
      const state = draft && draft[DRAFT_STATE];
      if (!state || !state.isManual_)
        die(9);
      const { scope_: scope } = state;
      usePatchesInScope(scope, patchListener);
      return processResult(void 0, scope);
    }
    /**
     * Pass true to automatically freeze all copies created by Immer.
     *
     * By default, auto-freezing is enabled.
     */
    setAutoFreeze(value) {
      this.autoFreeze_ = value;
    }
    /**
     * Pass true to enable strict shallow copy.
     *
     * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
     */
    setUseStrictShallowCopy(value) {
      this.useStrictShallowCopy_ = value;
    }
    /**
     * Pass false to use faster iteration that skips non-enumerable properties
     * but still handles symbols for compatibility.
     *
     * By default, strict iteration is enabled (includes all own properties).
     */
    setUseStrictIteration(value) {
      this.useStrictIteration_ = value;
    }
    shouldUseStrictIteration() {
      return this.useStrictIteration_;
    }
    applyPatches(base, patches) {
      let i;
      for (i = patches.length - 1; i >= 0; i--) {
        const patch = patches[i];
        if (patch.path.length === 0 && patch.op === "replace") {
          base = patch.value;
          break;
        }
      }
      if (i > -1) {
        patches = patches.slice(i + 1);
      }
      const applyPatchesImpl = getPlugin("Patches").applyPatches_;
      if (isDraft(base)) {
        return applyPatchesImpl(base, patches);
      }
      return this.produce(
        base,
        (draft) => applyPatchesImpl(draft, patches)
      );
    }
  };
  function createProxy(value, parent) {
    const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
    const scope = parent ? parent.scope_ : getCurrentScope();
    scope.drafts_.push(draft);
    return draft;
  }
  function current(value) {
    if (!isDraft(value))
      die(10, value);
    return currentImpl(value);
  }
  function currentImpl(value) {
    if (!isDraftable(value) || isFrozen(value))
      return value;
    const state = value[DRAFT_STATE];
    let copy2;
    let strict = true;
    if (state) {
      if (!state.modified_)
        return state.base_;
      state.finalized_ = true;
      copy2 = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
      strict = state.scope_.immer_.shouldUseStrictIteration();
    } else {
      copy2 = shallowCopy(value, true);
    }
    each(
      copy2,
      (key, childValue) => {
        set(copy2, key, currentImpl(childValue));
      },
      strict
    );
    if (state) {
      state.finalized_ = false;
    }
    return copy2;
  }
  var immer = new Immer2();
  immer.produce;
  function castDraft(value) {
    return value;
  }
  var initialState$a = {
    settings: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      itemSorter: "value"
    },
    size: {
      width: 0,
      height: 0
    },
    payload: []
  };
  var legendSlice = createSlice({
    name: "legend",
    initialState: initialState$a,
    reducers: {
      setLegendSize(state, action) {
        state.size.width = action.payload.width;
        state.size.height = action.payload.height;
      },
      setLegendSettings(state, action) {
        state.settings.align = action.payload.align;
        state.settings.layout = action.payload.layout;
        state.settings.verticalAlign = action.payload.verticalAlign;
        state.settings.itemSorter = action.payload.itemSorter;
      },
      addLegendPayload: {
        reducer(state, action) {
          state.payload.push(castDraft(action.payload));
        },
        prepare: prepareAutoBatched()
      },
      replaceLegendPayload: {
        reducer(state, action) {
          var {
            prev,
            next
          } = action.payload;
          var index = current$1(state).payload.indexOf(castDraft(prev));
          if (index > -1) {
            state.payload[index] = castDraft(next);
          }
        },
        prepare: prepareAutoBatched()
      },
      removeLegendPayload: {
        reducer(state, action) {
          var index = current$1(state).payload.indexOf(castDraft(action.payload));
          if (index > -1) {
            state.payload.splice(index, 1);
          }
        },
        prepare: prepareAutoBatched()
      }
    }
  });
  var {
    setLegendSize,
    setLegendSettings,
    addLegendPayload,
    replaceLegendPayload,
    removeLegendPayload
  } = legendSlice.actions;
  var legendReducer = legendSlice.reducer;
  function _extends$j() {
    return _extends$j = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$j.apply(null, arguments);
  }
  function ownKeys$u(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$u(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$u(Object(t), true).forEach(function(r3) {
        _defineProperty$w(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$u(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$w(e, r2, t) {
    return (r2 = _toPropertyKey$w(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$w(t) {
    var i = _toPrimitive$w(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$w(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function defaultFormatter(value) {
    return Array.isArray(value) && isNumOrStr(value[0]) && isNumOrStr(value[1]) ? value.join(" ~ ") : value;
  }
  var DefaultTooltipContent = (props) => {
    var {
      separator = " : ",
      contentStyle = {},
      itemStyle = {},
      labelStyle = {},
      payload,
      formatter,
      itemSorter,
      wrapperClassName,
      labelClassName,
      label,
      labelFormatter,
      accessibilityLayer = false
    } = props;
    var renderContent2 = () => {
      if (payload && payload.length) {
        var listStyle = {
          padding: 0,
          margin: 0
        };
        var items = (itemSorter ? sortBy(payload, itemSorter) : payload).map((entry, i) => {
          if (entry.type === "none") {
            return null;
          }
          var finalFormatter = entry.formatter || formatter || defaultFormatter;
          var {
            value,
            name
          } = entry;
          var finalValue = value;
          var finalName = name;
          if (finalFormatter) {
            var formatted = finalFormatter(value, name, entry, i, payload);
            if (Array.isArray(formatted)) {
              [finalValue, finalName] = formatted;
            } else if (formatted != null) {
              finalValue = formatted;
            } else {
              return null;
            }
          }
          var finalItemStyle = _objectSpread$u({
            display: "block",
            paddingTop: 4,
            paddingBottom: 4,
            color: entry.color || "#000"
          }, itemStyle);
          return /* @__PURE__ */ React__namespace.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(i),
            style: finalItemStyle
          }, isNumOrStr(finalName) ? /* @__PURE__ */ React__namespace.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, finalName) : null, isNumOrStr(finalName) ? /* @__PURE__ */ React__namespace.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, separator) : null, /* @__PURE__ */ React__namespace.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, finalValue), /* @__PURE__ */ React__namespace.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, entry.unit || ""));
        });
        return /* @__PURE__ */ React__namespace.createElement("ul", {
          className: "recharts-tooltip-item-list",
          style: listStyle
        }, items);
      }
      return null;
    };
    var finalStyle = _objectSpread$u({
      margin: 0,
      padding: 10,
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      whiteSpace: "nowrap"
    }, contentStyle);
    var finalLabelStyle = _objectSpread$u({
      margin: 0
    }, labelStyle);
    var hasLabel = !isNullish(label);
    var finalLabel = hasLabel ? label : "";
    var wrapperCN = clsx("recharts-default-tooltip", wrapperClassName);
    var labelCN = clsx("recharts-tooltip-label", labelClassName);
    if (hasLabel && labelFormatter && payload !== void 0 && payload !== null) {
      finalLabel = labelFormatter(label, payload);
    }
    var accessibilityAttributes = accessibilityLayer ? {
      role: "status",
      "aria-live": "assertive"
    } : {};
    return /* @__PURE__ */ React__namespace.createElement("div", _extends$j({
      className: wrapperCN,
      style: finalStyle
    }, accessibilityAttributes), /* @__PURE__ */ React__namespace.createElement("p", {
      className: labelCN,
      style: finalLabelStyle
    }, /* @__PURE__ */ React__namespace.isValidElement(finalLabel) ? finalLabel : "".concat(finalLabel)), renderContent2());
  };
  var CSS_CLASS_PREFIX = "recharts-tooltip-wrapper";
  var TOOLTIP_HIDDEN = {
    visibility: "hidden"
  };
  function getTooltipCSSClassName(_ref2) {
    var {
      coordinate,
      translateX,
      translateY
    } = _ref2;
    return clsx(CSS_CLASS_PREFIX, {
      ["".concat(CSS_CLASS_PREFIX, "-right")]: isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX >= coordinate.x,
      ["".concat(CSS_CLASS_PREFIX, "-left")]: isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX < coordinate.x,
      ["".concat(CSS_CLASS_PREFIX, "-bottom")]: isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY >= coordinate.y,
      ["".concat(CSS_CLASS_PREFIX, "-top")]: isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY < coordinate.y
    });
  }
  function getTooltipTranslateXY(_ref2) {
    var {
      allowEscapeViewBox,
      coordinate,
      key,
      offsetTopLeft,
      position,
      reverseDirection,
      tooltipDimension,
      viewBox,
      viewBoxDimension
    } = _ref2;
    if (position && isNumber(position[key])) {
      return position[key];
    }
    var negative = coordinate[key] - tooltipDimension - (offsetTopLeft > 0 ? offsetTopLeft : 0);
    var positive = coordinate[key] + offsetTopLeft;
    if (allowEscapeViewBox[key]) {
      return reverseDirection[key] ? negative : positive;
    }
    var viewBoxKey = viewBox[key];
    if (viewBoxKey == null) {
      return 0;
    }
    if (reverseDirection[key]) {
      var _tooltipBoundary = negative;
      var _viewBoxBoundary = viewBoxKey;
      if (_tooltipBoundary < _viewBoxBoundary) {
        return Math.max(positive, viewBoxKey);
      }
      return Math.max(negative, viewBoxKey);
    }
    if (viewBoxDimension == null) {
      return 0;
    }
    var tooltipBoundary = positive + tooltipDimension;
    var viewBoxBoundary = viewBoxKey + viewBoxDimension;
    if (tooltipBoundary > viewBoxBoundary) {
      return Math.max(negative, viewBoxKey);
    }
    return Math.max(positive, viewBoxKey);
  }
  function getTransformStyle(_ref3) {
    var {
      translateX,
      translateY,
      useTranslate3d
    } = _ref3;
    return {
      transform: useTranslate3d ? "translate3d(".concat(translateX, "px, ").concat(translateY, "px, 0)") : "translate(".concat(translateX, "px, ").concat(translateY, "px)")
    };
  }
  function getTooltipTranslate(_ref4) {
    var {
      allowEscapeViewBox,
      coordinate,
      offsetTopLeft,
      position,
      reverseDirection,
      tooltipBox,
      useTranslate3d,
      viewBox
    } = _ref4;
    var cssProperties, translateX, translateY;
    if (tooltipBox.height > 0 && tooltipBox.width > 0 && coordinate) {
      translateX = getTooltipTranslateXY({
        allowEscapeViewBox,
        coordinate,
        key: "x",
        offsetTopLeft,
        position,
        reverseDirection,
        tooltipDimension: tooltipBox.width,
        viewBox,
        viewBoxDimension: viewBox.width
      });
      translateY = getTooltipTranslateXY({
        allowEscapeViewBox,
        coordinate,
        key: "y",
        offsetTopLeft,
        position,
        reverseDirection,
        tooltipDimension: tooltipBox.height,
        viewBox,
        viewBoxDimension: viewBox.height
      });
      cssProperties = getTransformStyle({
        translateX,
        translateY,
        useTranslate3d
      });
    } else {
      cssProperties = TOOLTIP_HIDDEN;
    }
    return {
      cssProperties,
      cssClasses: getTooltipCSSClassName({
        translateX,
        translateY,
        coordinate
      })
    };
  }
  function ownKeys$t(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$t(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$t(Object(t), true).forEach(function(r3) {
        _defineProperty$v(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$t(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$v(e, r2, t) {
    return (r2 = _toPropertyKey$v(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$v(t) {
    var i = _toPrimitive$v(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$v(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  class TooltipBoundingBox extends React.PureComponent {
    constructor() {
      super(...arguments);
      _defineProperty$v(this, "state", {
        dismissed: false,
        dismissedAtCoordinate: {
          x: 0,
          y: 0
        }
      });
      _defineProperty$v(this, "handleKeyDown", (event) => {
        if (event.key === "Escape") {
          var _this$props$coordinat, _this$props$coordinat2, _this$props$coordinat3, _this$props$coordinat4;
          this.setState({
            dismissed: true,
            dismissedAtCoordinate: {
              x: (_this$props$coordinat = (_this$props$coordinat2 = this.props.coordinate) === null || _this$props$coordinat2 === void 0 ? void 0 : _this$props$coordinat2.x) !== null && _this$props$coordinat !== void 0 ? _this$props$coordinat : 0,
              y: (_this$props$coordinat3 = (_this$props$coordinat4 = this.props.coordinate) === null || _this$props$coordinat4 === void 0 ? void 0 : _this$props$coordinat4.y) !== null && _this$props$coordinat3 !== void 0 ? _this$props$coordinat3 : 0
            }
          });
        }
      });
    }
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
    componentDidUpdate() {
      var _this$props$coordinat5, _this$props$coordinat6;
      if (!this.state.dismissed) {
        return;
      }
      if (((_this$props$coordinat5 = this.props.coordinate) === null || _this$props$coordinat5 === void 0 ? void 0 : _this$props$coordinat5.x) !== this.state.dismissedAtCoordinate.x || ((_this$props$coordinat6 = this.props.coordinate) === null || _this$props$coordinat6 === void 0 ? void 0 : _this$props$coordinat6.y) !== this.state.dismissedAtCoordinate.y) {
        this.state.dismissed = false;
      }
    }
    render() {
      var {
        active,
        allowEscapeViewBox,
        animationDuration,
        animationEasing,
        children,
        coordinate,
        hasPayload,
        isAnimationActive,
        offset,
        position,
        reverseDirection,
        useTranslate3d,
        viewBox,
        wrapperStyle,
        lastBoundingBox,
        innerRef,
        hasPortalFromProps
      } = this.props;
      var {
        cssClasses,
        cssProperties
      } = getTooltipTranslate({
        allowEscapeViewBox,
        coordinate,
        offsetTopLeft: offset,
        position,
        reverseDirection,
        tooltipBox: {
          height: lastBoundingBox.height,
          width: lastBoundingBox.width
        },
        useTranslate3d,
        viewBox
      });
      var positionStyles = hasPortalFromProps ? {} : _objectSpread$t(_objectSpread$t({
        transition: isAnimationActive && active ? "transform ".concat(animationDuration, "ms ").concat(animationEasing) : void 0
      }, cssProperties), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && active && hasPayload ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      });
      var outerStyle = _objectSpread$t(_objectSpread$t({}, positionStyles), {}, {
        visibility: !this.state.dismissed && active && hasPayload ? "visible" : "hidden"
      }, wrapperStyle);
      return (
        // This element allow listening to the `Escape` key. See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ React__namespace.createElement("div", {
          // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
          xmlns: "http://www.w3.org/1999/xhtml",
          tabIndex: -1,
          className: cssClasses,
          style: outerStyle,
          ref: innerRef
        }, children)
      );
    }
  }
  var useAccessibilityLayer = () => {
    var _useAppSelector;
    return (_useAppSelector = useAppSelector((state) => state.rootProps.accessibilityLayer)) !== null && _useAppSelector !== void 0 ? _useAppSelector : true;
  };
  function _extends$i() {
    return _extends$i = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$i.apply(null, arguments);
  }
  function ownKeys$s(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$s(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$s(Object(t), true).forEach(function(r3) {
        _defineProperty$u(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$s(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$u(e, r2, t) {
    return (r2 = _toPropertyKey$u(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$u(t) {
    var i = _toPrimitive$u(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$u(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var CURVE_FACTORIES = {
    curveBasisClosed,
    curveBasisOpen,
    curveBasis,
    curveBumpX: bumpX,
    curveBumpY: bumpY,
    curveLinearClosed,
    curveLinear,
    curveMonotoneX: monotoneX,
    curveMonotoneY: monotoneY,
    curveNatural,
    curveStep,
    curveStepAfter: stepAfter,
    curveStepBefore: stepBefore
  };
  var defined = (p) => isWellBehavedNumber(p.x) && isWellBehavedNumber(p.y);
  var areaDefined = (d) => d.base != null && defined(d.base) && defined(d);
  var getX = (p) => p.x;
  var getY = (p) => p.y;
  var getCurveFactory = (type, layout) => {
    if (typeof type === "function") {
      return type;
    }
    var name = "curve".concat(upperFirst(type));
    if ((name === "curveMonotone" || name === "curveBump") && layout) {
      return CURVE_FACTORIES["".concat(name).concat(layout === "vertical" ? "Y" : "X")];
    }
    return CURVE_FACTORIES[name] || curveLinear;
  };
  var getPath$1 = (_ref2) => {
    var {
      type = "linear",
      points = [],
      baseLine,
      layout,
      connectNulls = false
    } = _ref2;
    var curveFactory = getCurveFactory(type, layout);
    var formatPoints = connectNulls ? points.filter(defined) : points;
    var lineFunction;
    if (Array.isArray(baseLine)) {
      var areaPoints = points.map((entry, index) => _objectSpread$s(_objectSpread$s({}, entry), {}, {
        base: baseLine[index]
      }));
      if (layout === "vertical") {
        lineFunction = shapeArea().y(getY).x1(getX).x0((d) => d.base.x);
      } else {
        lineFunction = shapeArea().x(getX).y1(getY).y0((d) => d.base.y);
      }
      var _nullableLineFunction = lineFunction.defined(areaDefined).curve(curveFactory);
      var finalPoints = connectNulls ? areaPoints.filter(areaDefined) : areaPoints;
      return _nullableLineFunction(finalPoints);
    }
    if (layout === "vertical" && isNumber(baseLine)) {
      lineFunction = shapeArea().y(getY).x1(getX).x0(baseLine);
    } else if (isNumber(baseLine)) {
      lineFunction = shapeArea().x(getX).y1(getY).y0(baseLine);
    } else {
      lineFunction = shapeLine().x(getX).y(getY);
    }
    var nullableLineFunction = lineFunction.defined(defined).curve(curveFactory);
    return nullableLineFunction(formatPoints);
  };
  var Curve = (props) => {
    var {
      className,
      points,
      path,
      pathRef
    } = props;
    if ((!points || !points.length) && !path) {
      return null;
    }
    var realPath = points && points.length ? getPath$1(props) : path;
    return /* @__PURE__ */ React__namespace.createElement("path", _extends$i({}, svgPropertiesNoEvents(props), adaptEventHandlers(props), {
      className: clsx("recharts-curve", className),
      d: realPath === null ? void 0 : realPath,
      ref: pathRef
    }));
  };
  var _excluded$h = ["x", "y", "top", "left", "width", "height", "className"];
  function _extends$h() {
    return _extends$h = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$h.apply(null, arguments);
  }
  function ownKeys$r(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$r(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$r(Object(t), true).forEach(function(r3) {
        _defineProperty$t(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$r(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$t(e, r2, t) {
    return (r2 = _toPropertyKey$t(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$t(t) {
    var i = _toPrimitive$t(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$t(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function _objectWithoutProperties$h(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$h(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$h(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  var getPath = (x2, y2, width, height, top, left) => {
    return "M".concat(x2, ",").concat(top, "v").concat(height, "M").concat(left, ",").concat(y2, "h").concat(width);
  };
  var Cross = (_ref2) => {
    var {
      x: x2 = 0,
      y: y2 = 0,
      top = 0,
      left = 0,
      width = 0,
      height = 0,
      className
    } = _ref2, rest = _objectWithoutProperties$h(_ref2, _excluded$h);
    var props = _objectSpread$r({
      x: x2,
      y: y2,
      top,
      left,
      width,
      height
    }, rest);
    if (!isNumber(x2) || !isNumber(y2) || !isNumber(width) || !isNumber(height) || !isNumber(top) || !isNumber(left)) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement("path", _extends$h({}, svgPropertiesAndEvents(props), {
      className: clsx("recharts-cross", className),
      d: getPath(x2, y2, width, height, top, left)
    }));
  };
  function getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize) {
    var halfSize = tooltipAxisBandSize / 2;
    return {
      stroke: "none",
      fill: "#ccc",
      x: layout === "horizontal" ? activeCoordinate.x - halfSize : offset.left + 0.5,
      y: layout === "horizontal" ? offset.top + 0.5 : activeCoordinate.y - halfSize,
      width: layout === "horizontal" ? tooltipAxisBandSize : offset.width - 1,
      height: layout === "horizontal" ? offset.height - 1 : tooltipAxisBandSize
    };
  }
  function ownKeys$q(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$q(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$q(Object(t), true).forEach(function(r3) {
        _defineProperty$s(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$q(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$s(e, r2, t) {
    return (r2 = _toPropertyKey$s(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$s(t) {
    var i = _toPrimitive$s(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$s(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var getDashCase = (name) => name.replace(/([A-Z])/g, (v) => "-".concat(v.toLowerCase()));
  var getTransitionVal = (props, duration, easing) => props.map((prop) => "".concat(getDashCase(prop), " ").concat(duration, "ms ").concat(easing)).join(",");
  var getIntersectionKeys = (preObj, nextObj) => [Object.keys(preObj), Object.keys(nextObj)].reduce((a2, b) => a2.filter((c2) => b.includes(c2)));
  var mapObject = (fn, obj) => Object.keys(obj).reduce((res, key) => _objectSpread$q(_objectSpread$q({}, res), {}, {
    [key]: fn(key, obj[key])
  }), {});
  function ownKeys$p(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$p(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$p(Object(t), true).forEach(function(r3) {
        _defineProperty$r(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$p(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$r(e, r2, t) {
    return (r2 = _toPropertyKey$r(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$r(t) {
    var i = _toPrimitive$r(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$r(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var alpha = (begin, end, k2) => begin + (end - begin) * k2;
  var needContinue = (_ref2) => {
    var {
      from: from2,
      to: to2
    } = _ref2;
    return from2 !== to2;
  };
  var calStepperVals = (easing, preVals, steps) => {
    var nextStepVals = mapObject((key, val) => {
      if (needContinue(val)) {
        var [newX, newV] = easing(val.from, val.to, val.velocity);
        return _objectSpread$p(_objectSpread$p({}, val), {}, {
          from: newX,
          velocity: newV
        });
      }
      return val;
    }, preVals);
    if (steps < 1) {
      return mapObject((key, val) => {
        if (needContinue(val)) {
          return _objectSpread$p(_objectSpread$p({}, val), {}, {
            velocity: alpha(val.velocity, nextStepVals[key].velocity, steps),
            from: alpha(val.from, nextStepVals[key].from, steps)
          });
        }
        return val;
      }, preVals);
    }
    return calStepperVals(easing, nextStepVals, steps - 1);
  };
  function createStepperUpdate(from2, to2, easing, interKeys, render, timeoutController) {
    var preTime;
    var stepperStyle = interKeys.reduce((res, key) => _objectSpread$p(_objectSpread$p({}, res), {}, {
      [key]: {
        from: from2[key],
        velocity: 0,
        to: to2[key]
      }
    }), {});
    var getCurrStyle = () => mapObject((key, val) => val.from, stepperStyle);
    var shouldStopAnimation = () => !Object.values(stepperStyle).filter(needContinue).length;
    var stopAnimation = null;
    var stepperUpdate = (now) => {
      if (!preTime) {
        preTime = now;
      }
      var deltaTime = now - preTime;
      var steps = deltaTime / easing.dt;
      stepperStyle = calStepperVals(easing, stepperStyle, steps);
      render(_objectSpread$p(_objectSpread$p(_objectSpread$p({}, from2), to2), getCurrStyle()));
      preTime = now;
      if (!shouldStopAnimation()) {
        stopAnimation = timeoutController.setTimeout(stepperUpdate);
      }
    };
    return () => {
      stopAnimation = timeoutController.setTimeout(stepperUpdate);
      return () => {
        var _stopAnimation;
        (_stopAnimation = stopAnimation) === null || _stopAnimation === void 0 || _stopAnimation();
      };
    };
  }
  function createTimingUpdate(from2, to2, easing, duration, interKeys, render, timeoutController) {
    var stopAnimation = null;
    var timingStyle = interKeys.reduce((res, key) => _objectSpread$p(_objectSpread$p({}, res), {}, {
      [key]: [from2[key], to2[key]]
    }), {});
    var beginTime;
    var timingUpdate = (now) => {
      if (!beginTime) {
        beginTime = now;
      }
      var t = (now - beginTime) / duration;
      var currStyle = mapObject((key, val) => alpha(...val, easing(t)), timingStyle);
      render(_objectSpread$p(_objectSpread$p(_objectSpread$p({}, from2), to2), currStyle));
      if (t < 1) {
        stopAnimation = timeoutController.setTimeout(timingUpdate);
      } else {
        var finalStyle = mapObject((key, val) => alpha(...val, easing(1)), timingStyle);
        render(_objectSpread$p(_objectSpread$p(_objectSpread$p({}, from2), to2), finalStyle));
      }
    };
    return () => {
      stopAnimation = timeoutController.setTimeout(timingUpdate);
      return () => {
        var _stopAnimation2;
        (_stopAnimation2 = stopAnimation) === null || _stopAnimation2 === void 0 || _stopAnimation2();
      };
    };
  }
  const configUpdate = (from2, to2, easing, duration, render, timeoutController) => {
    var interKeys = getIntersectionKeys(from2, to2);
    if (easing == null) {
      return () => {
        render(_objectSpread$p(_objectSpread$p({}, from2), to2));
        return () => {
        };
      };
    }
    return easing.isStepper === true ? createStepperUpdate(from2, to2, easing, interKeys, render, timeoutController) : createTimingUpdate(from2, to2, easing, duration, interKeys, render, timeoutController);
  };
  var ACCURACY = 1e-4;
  var cubicBezierFactor = (c1, c2) => [0, 3 * c1, 3 * c2 - 6 * c1, 3 * c1 - 3 * c2 + 1];
  var evaluatePolynomial = (params, t) => params.map((param, i) => param * t ** i).reduce((pre, curr) => pre + curr);
  var cubicBezier = (c1, c2) => (t) => {
    var params = cubicBezierFactor(c1, c2);
    return evaluatePolynomial(params, t);
  };
  var derivativeCubicBezier = (c1, c2) => (t) => {
    var params = cubicBezierFactor(c1, c2);
    var newParams = [...params.map((param, i) => param * i).slice(1), 0];
    return evaluatePolynomial(newParams, t);
  };
  var getBezierCoordinates = function getBezierCoordinates2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1) {
      switch (args[0]) {
        case "linear":
          return [0, 0, 1, 1];
        case "ease":
          return [0.25, 0.1, 0.25, 1];
        case "ease-in":
          return [0.42, 0, 1, 1];
        case "ease-out":
          return [0.42, 0, 0.58, 1];
        case "ease-in-out":
          return [0, 0, 0.58, 1];
        default: {
          var _easing$;
          var easing = args[0].split("(");
          if (easing[0] === "cubic-bezier" && ((_easing$ = easing[1]) === null || _easing$ === void 0 ? void 0 : _easing$.split(")")[0].split(",").length) === 4) {
            var coords = easing[1].split(")")[0].split(",").map((x2) => parseFloat(x2));
            return [coords[0], coords[1], coords[2], coords[3]];
          }
        }
      }
    }
    if (args.length === 4) {
      return args;
    }
    return [0, 0, 1, 1];
  };
  var createBezierEasing = (x1, y1, x2, y2) => {
    var curveX = cubicBezier(x1, x2);
    var curveY = cubicBezier(y1, y2);
    var derCurveX = derivativeCubicBezier(x1, x2);
    var rangeValue = (value) => {
      if (value > 1) {
        return 1;
      }
      if (value < 0) {
        return 0;
      }
      return value;
    };
    var bezier = (_t) => {
      var t = _t > 1 ? 1 : _t;
      var x3 = t;
      for (var i = 0; i < 8; ++i) {
        var evalT = curveX(x3) - t;
        var derVal = derCurveX(x3);
        if (Math.abs(evalT - t) < ACCURACY || derVal < ACCURACY) {
          return curveY(x3);
        }
        x3 = rangeValue(x3 - evalT / derVal);
      }
      return curveY(x3);
    };
    bezier.isStepper = false;
    return bezier;
  };
  var configBezier = function configBezier2() {
    return createBezierEasing(...getBezierCoordinates(...arguments));
  };
  var configSpring = function configSpring2() {
    var config2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var {
      stiff = 100,
      damping = 8,
      dt = 17
    } = config2;
    var stepper = (currX, destX, currV) => {
      var FSpring = -(currX - destX) * stiff;
      var FDamping = currV * damping;
      var newV = currV + (FSpring - FDamping) * dt / 1e3;
      var newX = currV * dt / 1e3 + currX;
      if (Math.abs(newX - destX) < ACCURACY && Math.abs(newV) < ACCURACY) {
        return [destX, 0];
      }
      return [newX, newV];
    };
    stepper.isStepper = true;
    stepper.dt = dt;
    return stepper;
  };
  var configEasing = (easing) => {
    if (typeof easing === "string") {
      switch (easing) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return configBezier(easing);
        case "spring":
          return configSpring();
        default:
          if (easing.split("(")[0] === "cubic-bezier") {
            return configBezier(easing);
          }
      }
    }
    if (typeof easing === "function") {
      return easing;
    }
    return null;
  };
  function createAnimateManager(timeoutController) {
    var currStyle;
    var handleChange = () => null;
    var shouldStop = false;
    var cancelTimeout = null;
    var setStyle = (_style) => {
      if (shouldStop) {
        return;
      }
      if (Array.isArray(_style)) {
        if (!_style.length) {
          return;
        }
        var styles = _style;
        var [curr, ...restStyles] = styles;
        if (typeof curr === "number") {
          cancelTimeout = timeoutController.setTimeout(setStyle.bind(null, restStyles), curr);
          return;
        }
        setStyle(curr);
        cancelTimeout = timeoutController.setTimeout(setStyle.bind(null, restStyles));
        return;
      }
      if (typeof _style === "string") {
        currStyle = _style;
        handleChange(currStyle);
      }
      if (typeof _style === "object") {
        currStyle = _style;
        handleChange(currStyle);
      }
      if (typeof _style === "function") {
        _style();
      }
    };
    return {
      stop: () => {
        shouldStop = true;
      },
      start: (style) => {
        shouldStop = false;
        if (cancelTimeout) {
          cancelTimeout();
          cancelTimeout = null;
        }
        setStyle(style);
      },
      subscribe: (_handleChange) => {
        handleChange = _handleChange;
        return () => {
          handleChange = () => null;
        };
      },
      getTimeoutController: () => timeoutController
    };
  }
  class RequestAnimationFrameTimeoutController {
    setTimeout(callback) {
      var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var startTime = performance.now();
      var requestId = null;
      var executeCallback = (now) => {
        if (now - startTime >= delay) {
          callback(now);
        } else if (typeof requestAnimationFrame === "function") {
          requestId = requestAnimationFrame(executeCallback);
        }
      };
      requestId = requestAnimationFrame(executeCallback);
      return () => {
        if (requestId != null) {
          cancelAnimationFrame(requestId);
        }
      };
    }
  }
  function createDefaultAnimationManager() {
    return createAnimateManager(new RequestAnimationFrameTimeoutController());
  }
  var AnimationManagerContext = /* @__PURE__ */ React.createContext(createDefaultAnimationManager);
  function useAnimationManager(animationId, animationManagerFromProps) {
    var contextAnimationManager = React.useContext(AnimationManagerContext);
    return React.useMemo(() => animationManagerFromProps !== null && animationManagerFromProps !== void 0 ? animationManagerFromProps : contextAnimationManager(animationId), [animationId, animationManagerFromProps, contextAnimationManager]);
  }
  var parseIsSsrByDefault = () => !(typeof window !== "undefined" && window.document && Boolean(window.document.createElement) && window.setTimeout);
  var Global = {
    devToolsEnabled: false,
    isSsr: parseIsSsrByDefault()
  };
  var defaultJavascriptAnimateProps = {
    begin: 0,
    duration: 1e3,
    easing: "ease",
    isActive: true,
    canBegin: true,
    onAnimationEnd: () => {
    },
    onAnimationStart: () => {
    }
  };
  var from = {
    t: 0
  };
  var to = {
    t: 1
  };
  function JavascriptAnimate(outsideProps) {
    var props = resolveDefaultProps(outsideProps, defaultJavascriptAnimateProps);
    var {
      isActive: isActiveProp,
      canBegin,
      duration,
      easing,
      begin,
      onAnimationEnd,
      onAnimationStart,
      children
    } = props;
    var isActive = isActiveProp === "auto" ? !Global.isSsr : isActiveProp;
    var animationManager = useAnimationManager(props.animationId, props.animationManager);
    var [style, setStyle] = React.useState(isActive ? from : to);
    var stopJSAnimation = React.useRef(null);
    React.useEffect(() => {
      if (!isActive) {
        setStyle(to);
      }
    }, [isActive]);
    React.useEffect(() => {
      if (!isActive || !canBegin) {
        return noop$2;
      }
      var startAnimation = configUpdate(from, to, configEasing(easing), duration, setStyle, animationManager.getTimeoutController());
      var onAnimationActive = () => {
        stopJSAnimation.current = startAnimation();
      };
      animationManager.start([onAnimationStart, begin, onAnimationActive, duration, onAnimationEnd]);
      return () => {
        animationManager.stop();
        if (stopJSAnimation.current) {
          stopJSAnimation.current();
        }
        onAnimationEnd();
      };
    }, [isActive, canBegin, duration, easing, begin, onAnimationStart, onAnimationEnd, animationManager]);
    return children(style.t);
  }
  function useAnimationId(input) {
    var prefix2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-";
    var animationId = React.useRef(uniqueId(prefix2));
    var prevProps = React.useRef(input);
    if (prevProps.current !== input) {
      animationId.current = uniqueId(prefix2);
      prevProps.current = input;
    }
    return animationId.current;
  }
  var _excluded$g = ["radius"], _excluded2$7 = ["radius"];
  function ownKeys$o(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$o(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$o(Object(t), true).forEach(function(r3) {
        _defineProperty$q(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$o(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$q(e, r2, t) {
    return (r2 = _toPropertyKey$q(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$q(t) {
    var i = _toPrimitive$q(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$q(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function _extends$g() {
    return _extends$g = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$g.apply(null, arguments);
  }
  function _objectWithoutProperties$g(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$g(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$g(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  var getRectanglePath = (x2, y2, width, height, radius) => {
    var maxRadius = Math.min(Math.abs(width) / 2, Math.abs(height) / 2);
    var ySign = height >= 0 ? 1 : -1;
    var xSign = width >= 0 ? 1 : -1;
    var clockWise = height >= 0 && width >= 0 || height < 0 && width < 0 ? 1 : 0;
    var path;
    if (maxRadius > 0 && radius instanceof Array) {
      var newRadius = [0, 0, 0, 0];
      for (var i = 0, len = 4; i < len; i++) {
        newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
      }
      path = "M".concat(x2, ",").concat(y2 + ySign * newRadius[0]);
      if (newRadius[0] > 0) {
        path += "A ".concat(newRadius[0], ",").concat(newRadius[0], ",0,0,").concat(clockWise, ",").concat(x2 + xSign * newRadius[0], ",").concat(y2);
      }
      path += "L ".concat(x2 + width - xSign * newRadius[1], ",").concat(y2);
      if (newRadius[1] > 0) {
        path += "A ".concat(newRadius[1], ",").concat(newRadius[1], ",0,0,").concat(clockWise, ",\n        ").concat(x2 + width, ",").concat(y2 + ySign * newRadius[1]);
      }
      path += "L ".concat(x2 + width, ",").concat(y2 + height - ySign * newRadius[2]);
      if (newRadius[2] > 0) {
        path += "A ".concat(newRadius[2], ",").concat(newRadius[2], ",0,0,").concat(clockWise, ",\n        ").concat(x2 + width - xSign * newRadius[2], ",").concat(y2 + height);
      }
      path += "L ".concat(x2 + xSign * newRadius[3], ",").concat(y2 + height);
      if (newRadius[3] > 0) {
        path += "A ".concat(newRadius[3], ",").concat(newRadius[3], ",0,0,").concat(clockWise, ",\n        ").concat(x2, ",").concat(y2 + height - ySign * newRadius[3]);
      }
      path += "Z";
    } else if (maxRadius > 0 && radius === +radius && radius > 0) {
      var _newRadius = Math.min(maxRadius, radius);
      path = "M ".concat(x2, ",").concat(y2 + ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2 + xSign * _newRadius, ",").concat(y2, "\n            L ").concat(x2 + width - xSign * _newRadius, ",").concat(y2, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2 + width, ",").concat(y2 + ySign * _newRadius, "\n            L ").concat(x2 + width, ",").concat(y2 + height - ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2 + width - xSign * _newRadius, ",").concat(y2 + height, "\n            L ").concat(x2 + xSign * _newRadius, ",").concat(y2 + height, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2, ",").concat(y2 + height - ySign * _newRadius, " Z");
    } else {
      path = "M ".concat(x2, ",").concat(y2, " h ").concat(width, " v ").concat(height, " h ").concat(-width, " Z");
    }
    return path;
  };
  var defaultRectangleProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    // The radius of border
    // The radius of four corners when radius is a number
    // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
    radius: 0,
    isAnimationActive: false,
    isUpdateAnimationActive: false,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
  };
  var Rectangle = (rectangleProps) => {
    var props = resolveDefaultProps(rectangleProps, defaultRectangleProps);
    var pathRef = React.useRef(null);
    var [totalLength, setTotalLength] = React.useState(-1);
    React.useEffect(() => {
      if (pathRef.current && pathRef.current.getTotalLength) {
        try {
          var pathTotalLength = pathRef.current.getTotalLength();
          if (pathTotalLength) {
            setTotalLength(pathTotalLength);
          }
        } catch (_unused) {
        }
      }
    }, []);
    var {
      x: x2,
      y: y2,
      width,
      height,
      radius,
      className
    } = props;
    var {
      animationEasing,
      animationDuration,
      animationBegin,
      isAnimationActive,
      isUpdateAnimationActive
    } = props;
    var prevWidthRef = React.useRef(width);
    var prevHeightRef = React.useRef(height);
    var prevXRef = React.useRef(x2);
    var prevYRef = React.useRef(y2);
    var animationIdInput = React.useMemo(() => ({
      x: x2,
      y: y2,
      width,
      height,
      radius
    }), [x2, y2, width, height, radius]);
    var animationId = useAnimationId(animationIdInput, "rectangle-");
    if (x2 !== +x2 || y2 !== +y2 || width !== +width || height !== +height || width === 0 || height === 0) {
      return null;
    }
    var layerClass = clsx("recharts-rectangle", className);
    if (!isUpdateAnimationActive) {
      var _svgPropertiesAndEven = svgPropertiesAndEvents(props), {
        radius: _
      } = _svgPropertiesAndEven, otherPathProps = _objectWithoutProperties$g(_svgPropertiesAndEven, _excluded$g);
      return /* @__PURE__ */ React__namespace.createElement("path", _extends$g({}, otherPathProps, {
        radius: typeof radius === "number" ? radius : void 0,
        className: layerClass,
        d: getRectanglePath(x2, y2, width, height, radius)
      }));
    }
    var prevWidth = prevWidthRef.current;
    var prevHeight = prevHeightRef.current;
    var prevX = prevXRef.current;
    var prevY = prevYRef.current;
    var from2 = "0px ".concat(totalLength === -1 ? 1 : totalLength, "px");
    var to2 = "".concat(totalLength, "px 0px");
    var transition = getTransitionVal(["strokeDasharray"], animationDuration, typeof animationEasing === "string" ? animationEasing : defaultRectangleProps.animationEasing);
    return /* @__PURE__ */ React__namespace.createElement(JavascriptAnimate, {
      animationId,
      key: animationId,
      canBegin: totalLength > 0,
      duration: animationDuration,
      easing: animationEasing,
      isActive: isUpdateAnimationActive,
      begin: animationBegin
    }, (t) => {
      var currWidth = interpolate$1(prevWidth, width, t);
      var currHeight = interpolate$1(prevHeight, height, t);
      var currX = interpolate$1(prevX, x2, t);
      var currY = interpolate$1(prevY, y2, t);
      if (pathRef.current) {
        prevWidthRef.current = currWidth;
        prevHeightRef.current = currHeight;
        prevXRef.current = currX;
        prevYRef.current = currY;
      }
      var animationStyle;
      if (!isAnimationActive) {
        animationStyle = {
          strokeDasharray: to2
        };
      } else if (t > 0) {
        animationStyle = {
          transition,
          strokeDasharray: to2
        };
      } else {
        animationStyle = {
          strokeDasharray: from2
        };
      }
      var _svgPropertiesAndEven2 = svgPropertiesAndEvents(props), {
        radius: _2
      } = _svgPropertiesAndEven2, otherPathProps2 = _objectWithoutProperties$g(_svgPropertiesAndEven2, _excluded2$7);
      return /* @__PURE__ */ React__namespace.createElement("path", _extends$g({}, otherPathProps2, {
        radius: typeof radius === "number" ? radius : void 0,
        className: layerClass,
        d: getRectanglePath(currX, currY, currWidth, currHeight, radius),
        ref: pathRef,
        style: _objectSpread$o(_objectSpread$o({}, animationStyle), props.style)
      }));
    });
  };
  function ownKeys$n(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$n(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$n(Object(t), true).forEach(function(r3) {
        _defineProperty$p(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$n(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$p(e, r2, t) {
    return (r2 = _toPropertyKey$p(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$p(t) {
    var i = _toPrimitive$p(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$p(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var RADIAN = Math.PI / 180;
  var radianToDegree = (angleInRadian) => angleInRadian * 180 / Math.PI;
  var polarToCartesian = (cx, cy, radius, angle) => ({
    x: cx + Math.cos(-RADIAN * angle) * radius,
    y: cy + Math.sin(-RADIAN * angle) * radius
  });
  var getMaxRadius = function getMaxRadius2(width, height) {
    var offset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    return Math.min(Math.abs(width - (offset.left || 0) - (offset.right || 0)), Math.abs(height - (offset.top || 0) - (offset.bottom || 0))) / 2;
  };
  var distanceBetweenPoints = (point2, anotherPoint) => {
    var {
      x: x1,
      y: y1
    } = point2;
    var {
      x: x2,
      y: y2
    } = anotherPoint;
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  };
  var getAngleOfPoint = (_ref2, _ref22) => {
    var {
      x: x2,
      y: y2
    } = _ref2;
    var {
      cx,
      cy
    } = _ref22;
    var radius = distanceBetweenPoints({
      x: x2,
      y: y2
    }, {
      x: cx,
      y: cy
    });
    if (radius <= 0) {
      return {
        radius,
        angle: 0
      };
    }
    var cos2 = (x2 - cx) / radius;
    var angleInRadian = Math.acos(cos2);
    if (y2 > cy) {
      angleInRadian = 2 * Math.PI - angleInRadian;
    }
    return {
      radius,
      angle: radianToDegree(angleInRadian),
      angleInRadian
    };
  };
  var formatAngleOfSector = (_ref3) => {
    var {
      startAngle,
      endAngle
    } = _ref3;
    var startCnt = Math.floor(startAngle / 360);
    var endCnt = Math.floor(endAngle / 360);
    var min2 = Math.min(startCnt, endCnt);
    return {
      startAngle: startAngle - min2 * 360,
      endAngle: endAngle - min2 * 360
    };
  };
  var reverseFormatAngleOfSector = (angle, _ref4) => {
    var {
      startAngle,
      endAngle
    } = _ref4;
    var startCnt = Math.floor(startAngle / 360);
    var endCnt = Math.floor(endAngle / 360);
    var min2 = Math.min(startCnt, endCnt);
    return angle + min2 * 360;
  };
  var inRangeOfSector = (_ref5, viewBox) => {
    var {
      chartX: x2,
      chartY: y2
    } = _ref5;
    var {
      radius,
      angle
    } = getAngleOfPoint({
      x: x2,
      y: y2
    }, viewBox);
    var {
      innerRadius,
      outerRadius
    } = viewBox;
    if (radius < innerRadius || radius > outerRadius) {
      return null;
    }
    if (radius === 0) {
      return null;
    }
    var {
      startAngle,
      endAngle
    } = formatAngleOfSector(viewBox);
    var formatAngle = angle;
    var inRange;
    if (startAngle <= endAngle) {
      while (formatAngle > endAngle) {
        formatAngle -= 360;
      }
      while (formatAngle < startAngle) {
        formatAngle += 360;
      }
      inRange = formatAngle >= startAngle && formatAngle <= endAngle;
    } else {
      while (formatAngle > startAngle) {
        formatAngle -= 360;
      }
      while (formatAngle < endAngle) {
        formatAngle += 360;
      }
      inRange = formatAngle >= endAngle && formatAngle <= startAngle;
    }
    if (inRange) {
      return _objectSpread$n(_objectSpread$n({}, viewBox), {}, {
        radius,
        angle: reverseFormatAngleOfSector(formatAngle, viewBox)
      });
    }
    return null;
  };
  function getRadialCursorPoints(activeCoordinate) {
    var {
      cx,
      cy,
      radius,
      startAngle,
      endAngle
    } = activeCoordinate;
    var startPoint = polarToCartesian(cx, cy, radius, startAngle);
    var endPoint = polarToCartesian(cx, cy, radius, endAngle);
    return {
      points: [startPoint, endPoint],
      cx,
      cy,
      radius,
      startAngle,
      endAngle
    };
  }
  function _extends$f() {
    return _extends$f = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$f.apply(null, arguments);
  }
  var getDeltaAngle$1 = (startAngle, endAngle) => {
    var sign2 = mathSign(endAngle - startAngle);
    var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);
    return sign2 * deltaAngle;
  };
  var getTangentCircle = (_ref2) => {
    var {
      cx,
      cy,
      radius,
      angle,
      sign: sign2,
      isExternal,
      cornerRadius,
      cornerIsExternal
    } = _ref2;
    var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
    var theta = Math.asin(cornerRadius / centerRadius) / RADIAN;
    var centerAngle = cornerIsExternal ? angle : angle + sign2 * theta;
    var center = polarToCartesian(cx, cy, centerRadius, centerAngle);
    var circleTangency = polarToCartesian(cx, cy, radius, centerAngle);
    var lineTangencyAngle = cornerIsExternal ? angle - sign2 * theta : angle;
    var lineTangency = polarToCartesian(cx, cy, centerRadius * Math.cos(theta * RADIAN), lineTangencyAngle);
    return {
      center,
      circleTangency,
      lineTangency,
      theta
    };
  };
  var getSectorPath = (_ref2) => {
    var {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle
    } = _ref2;
    var angle = getDeltaAngle$1(startAngle, endAngle);
    var tempEndAngle = startAngle + angle;
    var outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
    var outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);
    var path = "M ".concat(outerStartPoint.x, ",").concat(outerStartPoint.y, "\n    A ").concat(outerRadius, ",").concat(outerRadius, ",0,\n    ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle > tempEndAngle), ",\n    ").concat(outerEndPoint.x, ",").concat(outerEndPoint.y, "\n  ");
    if (innerRadius > 0) {
      var innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
      var innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
      path += "L ".concat(innerEndPoint.x, ",").concat(innerEndPoint.y, "\n            A ").concat(innerRadius, ",").concat(innerRadius, ",0,\n            ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle <= tempEndAngle), ",\n            ").concat(innerStartPoint.x, ",").concat(innerStartPoint.y, " Z");
    } else {
      path += "L ".concat(cx, ",").concat(cy, " Z");
    }
    return path;
  };
  var getSectorWithCorner = (_ref3) => {
    var {
      cx,
      cy,
      innerRadius,
      outerRadius,
      cornerRadius,
      forceCornerRadius,
      cornerIsExternal,
      startAngle,
      endAngle
    } = _ref3;
    var sign2 = mathSign(endAngle - startAngle);
    var {
      circleTangency: soct,
      lineTangency: solt,
      theta: sot
    } = getTangentCircle({
      cx,
      cy,
      radius: outerRadius,
      angle: startAngle,
      sign: sign2,
      cornerRadius,
      cornerIsExternal
    });
    var {
      circleTangency: eoct,
      lineTangency: eolt,
      theta: eot
    } = getTangentCircle({
      cx,
      cy,
      radius: outerRadius,
      angle: endAngle,
      sign: -sign2,
      cornerRadius,
      cornerIsExternal
    });
    var outerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sot - eot;
    if (outerArcAngle < 0) {
      if (forceCornerRadius) {
        return "M ".concat(solt.x, ",").concat(solt.y, "\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(cornerRadius * 2, ",0\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(-cornerRadius * 2, ",0\n      ");
      }
      return getSectorPath({
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle
      });
    }
    var path = "M ".concat(solt.x, ",").concat(solt.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(soct.x, ",").concat(soct.y, "\n    A").concat(outerRadius, ",").concat(outerRadius, ",0,").concat(+(outerArcAngle > 180), ",").concat(+(sign2 < 0), ",").concat(eoct.x, ",").concat(eoct.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(eolt.x, ",").concat(eolt.y, "\n  ");
    if (innerRadius > 0) {
      var {
        circleTangency: sict,
        lineTangency: silt,
        theta: sit
      } = getTangentCircle({
        cx,
        cy,
        radius: innerRadius,
        angle: startAngle,
        sign: sign2,
        isExternal: true,
        cornerRadius,
        cornerIsExternal
      });
      var {
        circleTangency: eict,
        lineTangency: eilt,
        theta: eit
      } = getTangentCircle({
        cx,
        cy,
        radius: innerRadius,
        angle: endAngle,
        sign: -sign2,
        isExternal: true,
        cornerRadius,
        cornerIsExternal
      });
      var innerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sit - eit;
      if (innerArcAngle < 0 && cornerRadius === 0) {
        return "".concat(path, "L").concat(cx, ",").concat(cy, "Z");
      }
      path += "L".concat(eilt.x, ",").concat(eilt.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(eict.x, ",").concat(eict.y, "\n      A").concat(innerRadius, ",").concat(innerRadius, ",0,").concat(+(innerArcAngle > 180), ",").concat(+(sign2 > 0), ",").concat(sict.x, ",").concat(sict.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(silt.x, ",").concat(silt.y, "Z");
    } else {
      path += "L".concat(cx, ",").concat(cy, "Z");
    }
    return path;
  };
  var defaultSectorProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: false,
    cornerIsExternal: false
  };
  var Sector = (sectorProps) => {
    var props = resolveDefaultProps(sectorProps, defaultSectorProps);
    var {
      cx,
      cy,
      innerRadius,
      outerRadius,
      cornerRadius,
      forceCornerRadius,
      cornerIsExternal,
      startAngle,
      endAngle,
      className
    } = props;
    if (outerRadius < innerRadius || startAngle === endAngle) {
      return null;
    }
    var layerClass = clsx("recharts-sector", className);
    var deltaRadius = outerRadius - innerRadius;
    var cr = getPercentValue(cornerRadius, deltaRadius, 0, true);
    var path;
    if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
      path = getSectorWithCorner({
        cx,
        cy,
        innerRadius,
        outerRadius,
        cornerRadius: Math.min(cr, deltaRadius / 2),
        forceCornerRadius,
        cornerIsExternal,
        startAngle,
        endAngle
      });
    } else {
      path = getSectorPath({
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle
      });
    }
    return /* @__PURE__ */ React__namespace.createElement("path", _extends$f({}, svgPropertiesAndEvents(props), {
      className: layerClass,
      d: path
    }));
  };
  function getCursorPoints(layout, activeCoordinate, offset) {
    if (layout === "horizontal") {
      return [{
        x: activeCoordinate.x,
        y: offset.top
      }, {
        x: activeCoordinate.x,
        y: offset.top + offset.height
      }];
    }
    if (layout === "vertical") {
      return [{
        x: offset.left,
        y: activeCoordinate.y
      }, {
        x: offset.left + offset.width,
        y: activeCoordinate.y
      }];
    }
    if (isPolarCoordinate(activeCoordinate)) {
      if (layout === "centric") {
        var {
          cx,
          cy,
          innerRadius,
          outerRadius,
          angle
        } = activeCoordinate;
        var innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
        var outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
        return [{
          x: innerPoint.x,
          y: innerPoint.y
        }, {
          x: outerPoint.x,
          y: outerPoint.y
        }];
      }
      return getRadialCursorPoints(activeCoordinate);
    }
    return void 0;
  }
  var range$4 = {};
  var toFinite = {};
  var toNumber = {};
  var hasRequiredToNumber;
  function requireToNumber() {
    if (hasRequiredToNumber) return toNumber;
    hasRequiredToNumber = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const isSymbol2 = /* @__PURE__ */ requireIsSymbol();
      function toNumber2(value) {
        if (isSymbol2.isSymbol(value)) {
          return NaN;
        }
        return Number(value);
      }
      exports$1.toNumber = toNumber2;
    })(toNumber);
    return toNumber;
  }
  var hasRequiredToFinite;
  function requireToFinite() {
    if (hasRequiredToFinite) return toFinite;
    hasRequiredToFinite = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const toNumber2 = /* @__PURE__ */ requireToNumber();
      function toFinite2(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber2.toNumber(value);
        if (value === Infinity || value === -Infinity) {
          const sign2 = value < 0 ? -1 : 1;
          return sign2 * Number.MAX_VALUE;
        }
        return value === value ? value : 0;
      }
      exports$1.toFinite = toFinite2;
    })(toFinite);
    return toFinite;
  }
  var hasRequiredRange$1;
  function requireRange$1() {
    if (hasRequiredRange$1) return range$4;
    hasRequiredRange$1 = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const isIterateeCall2 = /* @__PURE__ */ requireIsIterateeCall();
      const toFinite2 = /* @__PURE__ */ requireToFinite();
      function range2(start, end, step) {
        if (step && typeof step !== "number" && isIterateeCall2.isIterateeCall(start, end, step)) {
          end = step = void 0;
        }
        start = toFinite2.toFinite(start);
        if (end === void 0) {
          end = start;
          start = 0;
        } else {
          end = toFinite2.toFinite(end);
        }
        step = step === void 0 ? start < end ? 1 : -1 : toFinite2.toFinite(step);
        const length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
        const result = new Array(length);
        for (let index = 0; index < length; index++) {
          result[index] = start;
          start += step;
        }
        return result;
      }
      exports$1.range = range2;
    })(range$4);
    return range$4;
  }
  var range$3;
  var hasRequiredRange;
  function requireRange() {
    if (hasRequiredRange) return range$3;
    hasRequiredRange = 1;
    range$3 = requireRange$1().range;
    return range$3;
  }
  var rangeExports = /* @__PURE__ */ requireRange();
  const range$2 = /* @__PURE__ */ getDefaultExportFromCjs(rangeExports);
  function ascending(a2, b) {
    return a2 == null || b == null ? NaN : a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
  }
  function descending(a2, b) {
    return a2 == null || b == null ? NaN : b < a2 ? -1 : b > a2 ? 1 : b >= a2 ? 0 : NaN;
  }
  function bisector(f) {
    let compare1, compare2, delta;
    if (f.length !== 2) {
      compare1 = ascending;
      compare2 = (d, x2) => ascending(f(d), x2);
      delta = (d, x2) => f(d) - x2;
    } else {
      compare1 = f === ascending || f === descending ? f : zero$1;
      compare2 = f;
      delta = f;
    }
    function left(a2, x2, lo = 0, hi = a2.length) {
      if (lo < hi) {
        if (compare1(x2, x2) !== 0) return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a2[mid], x2) < 0) lo = mid + 1;
          else hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function right(a2, x2, lo = 0, hi = a2.length) {
      if (lo < hi) {
        if (compare1(x2, x2) !== 0) return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a2[mid], x2) <= 0) lo = mid + 1;
          else hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function center(a2, x2, lo = 0, hi = a2.length) {
      const i = left(a2, x2, lo, hi - 1);
      return i > lo && delta(a2[i - 1], x2) > -delta(a2[i], x2) ? i - 1 : i;
    }
    return { left, center, right };
  }
  function zero$1() {
    return 0;
  }
  function number$2(x2) {
    return x2 === null ? NaN : +x2;
  }
  function* numbers(values, valueof) {
    {
      for (let value of values) {
        if (value != null && (value = +value) >= value) {
          yield value;
        }
      }
    }
  }
  const ascendingBisect = bisector(ascending);
  const bisectRight = ascendingBisect.right;
  bisector(number$2).center;
  class InternMap extends Map {
    constructor(entries, key = keyof) {
      super();
      Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
      if (entries != null) for (const [key2, value] of entries) this.set(key2, value);
    }
    get(key) {
      return super.get(intern_get(this, key));
    }
    has(key) {
      return super.has(intern_get(this, key));
    }
    set(key, value) {
      return super.set(intern_set(this, key), value);
    }
    delete(key) {
      return super.delete(intern_delete(this, key));
    }
  }
  function intern_get({ _intern, _key }, value) {
    const key = _key(value);
    return _intern.has(key) ? _intern.get(key) : value;
  }
  function intern_set({ _intern, _key }, value) {
    const key = _key(value);
    if (_intern.has(key)) return _intern.get(key);
    _intern.set(key, value);
    return value;
  }
  function intern_delete({ _intern, _key }, value) {
    const key = _key(value);
    if (_intern.has(key)) {
      value = _intern.get(key);
      _intern.delete(key);
    }
    return value;
  }
  function keyof(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
  }
  function compareDefined(compare = ascending) {
    if (compare === ascending) return ascendingDefined;
    if (typeof compare !== "function") throw new TypeError("compare is not a function");
    return (a2, b) => {
      const x2 = compare(a2, b);
      if (x2 || x2 === 0) return x2;
      return (compare(b, b) === 0) - (compare(a2, a2) === 0);
    };
  }
  function ascendingDefined(a2, b) {
    return (a2 == null || !(a2 >= a2)) - (b == null || !(b >= b)) || (a2 < b ? -1 : a2 > b ? 1 : 0);
  }
  const e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
  function tickSpec(start, stop, count) {
    const step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
    let i1, i2, inc;
    if (power < 0) {
      inc = Math.pow(10, -power) / factor;
      i1 = Math.round(start * inc);
      i2 = Math.round(stop * inc);
      if (i1 / inc < start) ++i1;
      if (i2 / inc > stop) --i2;
      inc = -inc;
    } else {
      inc = Math.pow(10, power) * factor;
      i1 = Math.round(start / inc);
      i2 = Math.round(stop / inc);
      if (i1 * inc < start) ++i1;
      if (i2 * inc > stop) --i2;
    }
    if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
    return [i1, i2, inc];
  }
  function ticks(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    if (!(count > 0)) return [];
    if (start === stop) return [start];
    const reverse2 = stop < start, [i1, i2, inc] = reverse2 ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
    if (!(i2 >= i1)) return [];
    const n = i2 - i1 + 1, ticks2 = new Array(n);
    if (reverse2) {
      if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) / -inc;
      else for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) * inc;
    } else {
      if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) / -inc;
      else for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) * inc;
    }
    return ticks2;
  }
  function tickIncrement(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    return tickSpec(start, stop, count)[2];
  }
  function tickStep(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    const reverse2 = stop < start, inc = reverse2 ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
    return (reverse2 ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
  }
  function max(values, valueof) {
    let max2;
    {
      for (const value of values) {
        if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
          max2 = value;
        }
      }
    }
    return max2;
  }
  function min(values, valueof) {
    let min2;
    {
      for (const value of values) {
        if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
          min2 = value;
        }
      }
    }
    return min2;
  }
  function quickselect(array2, k2, left = 0, right = Infinity, compare) {
    k2 = Math.floor(k2);
    left = Math.floor(Math.max(0, left));
    right = Math.floor(Math.min(array2.length - 1, right));
    if (!(left <= k2 && k2 <= right)) return array2;
    compare = compare === void 0 ? ascendingDefined : compareDefined(compare);
    while (right > left) {
      if (right - left > 600) {
        const n = right - left + 1;
        const m = k2 - left + 1;
        const z = Math.log(n);
        const s2 = 0.5 * Math.exp(2 * z / 3);
        const sd = 0.5 * Math.sqrt(z * s2 * (n - s2) / n) * (m - n / 2 < 0 ? -1 : 1);
        const newLeft = Math.max(left, Math.floor(k2 - m * s2 / n + sd));
        const newRight = Math.min(right, Math.floor(k2 + (n - m) * s2 / n + sd));
        quickselect(array2, k2, newLeft, newRight, compare);
      }
      const t = array2[k2];
      let i = left;
      let j = right;
      swap(array2, left, k2);
      if (compare(array2[right], t) > 0) swap(array2, left, right);
      while (i < j) {
        swap(array2, i, j), ++i, --j;
        while (compare(array2[i], t) < 0) ++i;
        while (compare(array2[j], t) > 0) --j;
      }
      if (compare(array2[left], t) === 0) swap(array2, left, j);
      else ++j, swap(array2, j, right);
      if (j <= k2) left = j + 1;
      if (k2 <= j) right = j - 1;
    }
    return array2;
  }
  function swap(array2, i, j) {
    const t = array2[i];
    array2[i] = array2[j];
    array2[j] = t;
  }
  function quantile$1(values, p, valueof) {
    values = Float64Array.from(numbers(values));
    if (!(n = values.length) || isNaN(p = +p)) return;
    if (p <= 0 || n < 2) return min(values);
    if (p >= 1) return max(values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = max(quickselect(values, i0).subarray(0, i0 + 1)), value1 = min(values.subarray(i0 + 1));
    return value0 + (value1 - value0) * (i - i0);
  }
  function quantileSorted(values, p, valueof = number$2) {
    if (!(n = values.length) || isNaN(p = +p)) return;
    if (p <= 0 || n < 2) return +valueof(values[0], 0, values);
    if (p >= 1) return +valueof(values[n - 1], n - 1, values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
    return value0 + (value1 - value0) * (i - i0);
  }
  function range$1(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range2 = new Array(n);
    while (++i < n) {
      range2[i] = start + i * step;
    }
    return range2;
  }
  function initRange(domain, range2) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(domain);
        break;
      default:
        this.range(range2).domain(domain);
        break;
    }
    return this;
  }
  function initInterpolator(domain, interpolator) {
    switch (arguments.length) {
      case 0:
        break;
      case 1: {
        if (typeof domain === "function") this.interpolator(domain);
        else this.range(domain);
        break;
      }
      default: {
        this.domain(domain);
        if (typeof interpolator === "function") this.interpolator(interpolator);
        else this.range(interpolator);
        break;
      }
    }
    return this;
  }
  const implicit = Symbol("implicit");
  function ordinal() {
    var index = new InternMap(), domain = [], range2 = [], unknown = implicit;
    function scale(d) {
      let i = index.get(d);
      if (i === void 0) {
        if (unknown !== implicit) return unknown;
        index.set(d, i = domain.push(d) - 1);
      }
      return range2[i % range2.length];
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain.slice();
      domain = [], index = new InternMap();
      for (const value of _) {
        if (index.has(value)) continue;
        index.set(value, domain.push(value) - 1);
      }
      return scale;
    };
    scale.range = function(_) {
      return arguments.length ? (range2 = Array.from(_), scale) : range2.slice();
    };
    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
      return ordinal(domain, range2).unknown(unknown);
    };
    initRange.apply(scale, arguments);
    return scale;
  }
  function band() {
    var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round2 = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
    delete scale.unknown;
    function rescale() {
      var n = domain().length, reverse2 = r1 < r0, start = reverse2 ? r1 : r0, stop = reverse2 ? r0 : r1;
      step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
      if (round2) step = Math.floor(step);
      start += (stop - start - step * (n - paddingInner)) * align;
      bandwidth = step * (1 - paddingInner);
      if (round2) start = Math.round(start), bandwidth = Math.round(bandwidth);
      var values = range$1(n).map(function(i) {
        return start + step * i;
      });
      return ordinalRange(reverse2 ? values.reverse() : values);
    }
    scale.domain = function(_) {
      return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.range = function(_) {
      return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
    };
    scale.rangeRound = function(_) {
      return [r0, r1] = _, r0 = +r0, r1 = +r1, round2 = true, rescale();
    };
    scale.bandwidth = function() {
      return bandwidth;
    };
    scale.step = function() {
      return step;
    };
    scale.round = function(_) {
      return arguments.length ? (round2 = !!_, rescale()) : round2;
    };
    scale.padding = function(_) {
      return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
    };
    scale.paddingInner = function(_) {
      return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
    };
    scale.paddingOuter = function(_) {
      return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
    };
    scale.align = function(_) {
      return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
    };
    scale.copy = function() {
      return band(domain(), [r0, r1]).round(round2).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
    };
    return initRange.apply(rescale(), arguments);
  }
  function pointish(scale) {
    var copy2 = scale.copy;
    scale.padding = scale.paddingOuter;
    delete scale.paddingInner;
    delete scale.paddingOuter;
    scale.copy = function() {
      return pointish(copy2());
    };
    return scale;
  }
  function point() {
    return pointish(band.apply(null, arguments).paddingInner(1));
  }
  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }
  function Color() {
  }
  var darker = 0.7;
  var brighter = 1 / darker;
  var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
  var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  define(Color, color, {
    copy(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });
  function color_formatHex() {
    return this.rgb().formatHex();
  }
  function color_formatHex8() {
    return this.rgb().formatHex8();
  }
  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }
  function color_formatRgb() {
    return this.rgb().formatRgb();
  }
  function color(format2) {
    var m, l;
    format2 = (format2 + "").trim().toLowerCase();
    return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n) {
    return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
  }
  function rgba(r2, g, b, a2) {
    if (a2 <= 0) r2 = g = b = NaN;
    return new Rgb(r2, g, b, a2);
  }
  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb();
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }
  function rgb$1(r2, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r2) : new Rgb(r2, g, b, opacity == null ? 1 : opacity);
  }
  function Rgb(r2, g, b, opacity) {
    this.r = +r2;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  define(Rgb, rgb$1, extend(Color, {
    brighter(k2) {
      k2 = k2 == null ? brighter : Math.pow(brighter, k2);
      return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
    },
    darker(k2) {
      k2 = k2 == null ? darker : Math.pow(darker, k2);
      return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));
  function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
  }
  function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function rgb_formatRgb() {
    const a2 = clampa(this.opacity);
    return `${a2 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a2 === 1 ? ")" : `, ${a2})`}`;
  }
  function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
  }
  function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
  }
  function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h, s2, l, a2) {
    if (a2 <= 0) h = s2 = l = NaN;
    else if (l <= 0 || l >= 1) h = s2 = NaN;
    else if (s2 <= 0) h = NaN;
    return new Hsl(h, s2, l, a2);
  }
  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl();
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r2 = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r2, g, b), max2 = Math.max(r2, g, b), h = NaN, s2 = max2 - min2, l = (max2 + min2) / 2;
    if (s2) {
      if (r2 === max2) h = (g - b) / s2 + (g < b) * 6;
      else if (g === max2) h = (b - r2) / s2 + 2;
      else h = (r2 - g) / s2 + 4;
      s2 /= l < 0.5 ? max2 + min2 : 2 - max2 - min2;
      h *= 60;
    } else {
      s2 = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s2, l, o.opacity);
  }
  function hsl(h, s2, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s2, l, opacity == null ? 1 : opacity);
  }
  function Hsl(h, s2, l, opacity) {
    this.h = +h;
    this.s = +s2;
    this.l = +l;
    this.opacity = +opacity;
  }
  define(Hsl, hsl, extend(Color, {
    brighter(k2) {
      k2 = k2 == null ? brighter : Math.pow(brighter, k2);
      return new Hsl(this.h, this.s, this.l * k2, this.opacity);
    },
    darker(k2) {
      k2 = k2 == null ? darker : Math.pow(darker, k2);
      return new Hsl(this.h, this.s, this.l * k2, this.opacity);
    },
    rgb() {
      var h = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s2, m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    clamp() {
      return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl() {
      const a2 = clampa(this.opacity);
      return `${a2 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a2 === 1 ? ")" : `, ${a2})`}`;
    }
  }));
  function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
  }
  function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
  }
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
  }
  const constant = (x2) => () => x2;
  function linear$1(a2, d) {
    return function(t) {
      return a2 + t * d;
    };
  }
  function exponential(a2, b, y2) {
    return a2 = Math.pow(a2, y2), b = Math.pow(b, y2) - a2, y2 = 1 / y2, function(t) {
      return Math.pow(a2 + t * b, y2);
    };
  }
  function gamma(y2) {
    return (y2 = +y2) === 1 ? nogamma : function(a2, b) {
      return b - a2 ? exponential(a2, b, y2) : constant(isNaN(a2) ? b : a2);
    };
  }
  function nogamma(a2, b) {
    var d = b - a2;
    return d ? linear$1(a2, d) : constant(isNaN(a2) ? b : a2);
  }
  const rgb = (function rgbGamma(y2) {
    var color2 = gamma(y2);
    function rgb2(start, end) {
      var r2 = color2((start = rgb$1(start)).r, (end = rgb$1(end)).r), g = color2(start.g, end.g), b = color2(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.r = r2(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }
    rgb2.gamma = rgbGamma;
    return rgb2;
  })(1);
  function numberArray(a2, b) {
    if (!b) b = [];
    var n = a2 ? Math.min(b.length, a2.length) : 0, c2 = b.slice(), i;
    return function(t) {
      for (i = 0; i < n; ++i) c2[i] = a2[i] * (1 - t) + b[i] * t;
      return c2;
    };
  }
  function isNumberArray(x2) {
    return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
  }
  function genericArray(a2, b) {
    var nb = b ? b.length : 0, na = a2 ? Math.min(nb, a2.length) : 0, x2 = new Array(na), c2 = new Array(nb), i;
    for (i = 0; i < na; ++i) x2[i] = interpolate(a2[i], b[i]);
    for (; i < nb; ++i) c2[i] = b[i];
    return function(t) {
      for (i = 0; i < na; ++i) c2[i] = x2[i](t);
      return c2;
    };
  }
  function date$1(a2, b) {
    var d = /* @__PURE__ */ new Date();
    return a2 = +a2, b = +b, function(t) {
      return d.setTime(a2 * (1 - t) + b * t), d;
    };
  }
  function interpolateNumber(a2, b) {
    return a2 = +a2, b = +b, function(t) {
      return a2 * (1 - t) + b * t;
    };
  }
  function object(a2, b) {
    var i = {}, c2 = {}, k2;
    if (a2 === null || typeof a2 !== "object") a2 = {};
    if (b === null || typeof b !== "object") b = {};
    for (k2 in b) {
      if (k2 in a2) {
        i[k2] = interpolate(a2[k2], b[k2]);
      } else {
        c2[k2] = b[k2];
      }
    }
    return function(t) {
      for (k2 in i) c2[k2] = i[k2](t);
      return c2;
    };
  }
  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
  function zero(b) {
    return function() {
      return b;
    };
  }
  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }
  function string(a2, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s2 = [], q = [];
    a2 = a2 + "", b = b + "";
    while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s2[i]) s2[i] += bs;
        else s2[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s2[i]) s2[i] += bm;
        else s2[++i] = bm;
      } else {
        s2[++i] = null;
        q.push({ i, x: interpolateNumber(am, bm) });
      }
      bi = reB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s2[i]) s2[i] += bs;
      else s2[++i] = bs;
    }
    return s2.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
      for (var i2 = 0, o; i2 < b; ++i2) s2[(o = q[i2]).i] = o.x(t);
      return s2.join("");
    });
  }
  function interpolate(a2, b) {
    var t = typeof b, c2;
    return b == null || t === "boolean" ? constant(b) : (t === "number" ? interpolateNumber : t === "string" ? (c2 = color(b)) ? (b = c2, rgb) : string : b instanceof color ? rgb : b instanceof Date ? date$1 : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a2, b);
  }
  function interpolateRound(a2, b) {
    return a2 = +a2, b = +b, function(t) {
      return Math.round(a2 * (1 - t) + b * t);
    };
  }
  function piecewise(interpolate$12, values) {
    if (values === void 0) values = interpolate$12, interpolate$12 = interpolate;
    var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
    while (i < n) I[i] = interpolate$12(v, v = values[++i]);
    return function(t) {
      var i2 = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
      return I[i2](t - i2);
    };
  }
  function constants(x2) {
    return function() {
      return x2;
    };
  }
  function number$1(x2) {
    return +x2;
  }
  var unit = [0, 1];
  function identity$3(x2) {
    return x2;
  }
  function normalize(a2, b) {
    return (b -= a2 = +a2) ? function(x2) {
      return (x2 - a2) / b;
    } : constants(isNaN(b) ? NaN : 0.5);
  }
  function clamper(a2, b) {
    var t;
    if (a2 > b) t = a2, a2 = b, b = t;
    return function(x2) {
      return Math.max(a2, Math.min(b, x2));
    };
  }
  function bimap(domain, range2, interpolate2) {
    var d0 = domain[0], d1 = domain[1], r0 = range2[0], r1 = range2[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);
    else d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
    return function(x2) {
      return r0(d0(x2));
    };
  }
  function polymap(domain, range2, interpolate2) {
    var j = Math.min(domain.length, range2.length) - 1, d = new Array(j), r2 = new Array(j), i = -1;
    if (domain[j] < domain[0]) {
      domain = domain.slice().reverse();
      range2 = range2.slice().reverse();
    }
    while (++i < j) {
      d[i] = normalize(domain[i], domain[i + 1]);
      r2[i] = interpolate2(range2[i], range2[i + 1]);
    }
    return function(x2) {
      var i2 = bisectRight(domain, x2, 1, j) - 1;
      return r2[i2](d[i2](x2));
    };
  }
  function copy$1(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
  }
  function transformer$2() {
    var domain = unit, range2 = unit, interpolate$12 = interpolate, transform, untransform, unknown, clamp = identity$3, piecewise2, output, input;
    function rescale() {
      var n = Math.min(domain.length, range2.length);
      if (clamp !== identity$3) clamp = clamper(domain[0], domain[n - 1]);
      piecewise2 = n > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }
    function scale(x2) {
      return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise2(domain.map(transform), range2, interpolate$12)))(transform(clamp(x2)));
    }
    scale.invert = function(y2) {
      return clamp(untransform((input || (input = piecewise2(range2, domain.map(transform), interpolateNumber)))(y2)));
    };
    scale.domain = function(_) {
      return arguments.length ? (domain = Array.from(_, number$1), rescale()) : domain.slice();
    };
    scale.range = function(_) {
      return arguments.length ? (range2 = Array.from(_), rescale()) : range2.slice();
    };
    scale.rangeRound = function(_) {
      return range2 = Array.from(_), interpolate$12 = interpolateRound, rescale();
    };
    scale.clamp = function(_) {
      return arguments.length ? (clamp = _ ? true : identity$3, rescale()) : clamp !== identity$3;
    };
    scale.interpolate = function(_) {
      return arguments.length ? (interpolate$12 = _, rescale()) : interpolate$12;
    };
    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t, u) {
      transform = t, untransform = u;
      return rescale();
    };
  }
  function continuous() {
    return transformer$2()(identity$3, identity$3);
  }
  function formatDecimal(x2) {
    return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
  }
  function formatDecimalParts(x2, p) {
    if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0) return null;
    var i, coefficient = x2.slice(0, i);
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x2.slice(i + 1)
    ];
  }
  function exponent(x2) {
    return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
  }
  function formatGroup(grouping, thousands) {
    return function(value, width) {
      var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = grouping[j = (j + 1) % grouping.length];
      }
      return t.reverse().join(thousands);
    };
  }
  function formatNumerals(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i) {
        return numerals[+i];
      });
    };
  }
  var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
      fill: match[1],
      align: match[2],
      sign: match[3],
      symbol: match[4],
      zero: match[5],
      width: match[6],
      comma: match[7],
      precision: match[8] && match[8].slice(1),
      trim: match[9],
      type: match[10]
    });
  }
  formatSpecifier.prototype = FormatSpecifier.prototype;
  function FormatSpecifier(specifier) {
    this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
    this.align = specifier.align === void 0 ? ">" : specifier.align + "";
    this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === void 0 ? void 0 : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === void 0 ? "" : specifier.type + "";
  }
  FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  function formatTrim(s2) {
    out: for (var n = s2.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s2[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0) i0 = i;
          i1 = i;
          break;
        default:
          if (!+s2[i]) break out;
          if (i0 > 0) i0 = 0;
          break;
      }
    }
    return i0 > 0 ? s2.slice(0, i0) + s2.slice(i1 + 1) : s2;
  }
  var prefixExponent;
  function formatPrefixAuto(x2, p) {
    var d = formatDecimalParts(x2, p);
    if (!d) return x2 + "";
    var coefficient = d[0], exponent2 = d[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x2, Math.max(0, p + i - 1))[0];
  }
  function formatRounded(x2, p) {
    var d = formatDecimalParts(x2, p);
    if (!d) return x2 + "";
    var coefficient = d[0], exponent2 = d[1];
    return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
  }
  const formatTypes = {
    "%": (x2, p) => (x2 * 100).toFixed(p),
    "b": (x2) => Math.round(x2).toString(2),
    "c": (x2) => x2 + "",
    "d": formatDecimal,
    "e": (x2, p) => x2.toExponential(p),
    "f": (x2, p) => x2.toFixed(p),
    "g": (x2, p) => x2.toPrecision(p),
    "o": (x2) => Math.round(x2).toString(8),
    "p": (x2, p) => formatRounded(x2 * 100, p),
    "r": formatRounded,
    "s": formatPrefixAuto,
    "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
    "x": (x2) => Math.round(x2).toString(16)
  };
  function identity$2(x2) {
    return x2;
  }
  var map$1 = Array.prototype.map, prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function formatLocale$1(locale2) {
    var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity$2 : formatGroup(map$1.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity$2 : formatNumerals(map$1.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "−" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);
      var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
      if (type === "n") comma = true, type = "g";
      else if (!formatTypes[type]) precision === void 0 && (precision = 12), trim = true, type = "g";
      if (zero2 || fill === "0" && align === "=") zero2 = true, fill = "0", align = "=";
      var prefix2 = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix2 = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
      var formatType = formatTypes[type], maybeSuffix = /[defgprs%]/.test(type);
      precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
      function format2(value) {
        var valuePrefix = prefix2, valueSuffix = suffix2, i, n, c2;
        if (type === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;
          var valueNegative = value < 0 || 1 / value < 0;
          value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
          if (trim) value = formatTrim(value);
          if (valueNegative && +value === 0 && sign2 !== "+") valueNegative = false;
          valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
          valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
          if (maybeSuffix) {
            i = -1, n = value.length;
            while (++i < n) {
              if (c2 = value.charCodeAt(i), 48 > c2 || c2 > 57) {
                valueSuffix = (c2 === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }
        if (comma && !zero2) value = group(value, Infinity);
        var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
        if (comma && zero2) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
        switch (align) {
          case "<":
            value = valuePrefix + value + valueSuffix + padding;
            break;
          case "=":
            value = valuePrefix + padding + value + valueSuffix;
            break;
          case "^":
            value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
            break;
          default:
            value = padding + valuePrefix + value + valueSuffix;
            break;
        }
        return numerals(value);
      }
      format2.toString = function() {
        return specifier + "";
      };
      return format2;
    }
    function formatPrefix2(specifier, value) {
      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3, k2 = Math.pow(10, -e), prefix2 = prefixes[8 + e / 3];
      return function(value2) {
        return f(k2 * value2) + prefix2;
      };
    }
    return {
      format: newFormat,
      formatPrefix: formatPrefix2
    };
  }
  var locale$1;
  var format;
  var formatPrefix;
  defaultLocale$1({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });
  function defaultLocale$1(definition) {
    locale$1 = formatLocale$1(definition);
    format = locale$1.format;
    formatPrefix = locale$1.formatPrefix;
    return locale$1;
  }
  function precisionFixed(step) {
    return Math.max(0, -exponent(Math.abs(step)));
  }
  function precisionPrefix(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
  }
  function precisionRound(step, max2) {
    step = Math.abs(step), max2 = Math.abs(max2) - step;
    return Math.max(0, exponent(max2) - exponent(step)) + 1;
  }
  function tickFormat(start, stop, count, specifier) {
    var step = tickStep(start, stop, count), precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s": {
        var value = Math.max(Math.abs(start), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
        return formatPrefix(specifier, value);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
        break;
      }
      case "f":
      case "%": {
        if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
    }
    return format(specifier);
  }
  function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
      var d = domain();
      return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
      var d = domain();
      return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
      if (count == null) count = 10;
      var d = domain();
      var i0 = 0;
      var i1 = d.length - 1;
      var start = d[i0];
      var stop = d[i1];
      var prestep;
      var step;
      var maxIter = 10;
      if (stop < start) {
        step = start, start = stop, stop = step;
        step = i0, i0 = i1, i1 = step;
      }
      while (maxIter-- > 0) {
        step = tickIncrement(start, stop, count);
        if (step === prestep) {
          d[i0] = start;
          d[i1] = stop;
          return domain(d);
        } else if (step > 0) {
          start = Math.floor(start / step) * step;
          stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
          start = Math.ceil(start * step) / step;
          stop = Math.floor(stop * step) / step;
        } else {
          break;
        }
        prestep = step;
      }
      return scale;
    };
    return scale;
  }
  function linear() {
    var scale = continuous();
    scale.copy = function() {
      return copy$1(scale, linear());
    };
    initRange.apply(scale, arguments);
    return linearish(scale);
  }
  function identity$1(domain) {
    var unknown;
    function scale(x2) {
      return x2 == null || isNaN(x2 = +x2) ? unknown : x2;
    }
    scale.invert = scale;
    scale.domain = scale.range = function(_) {
      return arguments.length ? (domain = Array.from(_, number$1), scale) : domain.slice();
    };
    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
      return identity$1(domain).unknown(unknown);
    };
    domain = arguments.length ? Array.from(domain, number$1) : [0, 1];
    return linearish(scale);
  }
  function nice(domain, interval) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
    if (x1 < x0) {
      t = i0, i0 = i1, i1 = t;
      t = x0, x0 = x1, x1 = t;
    }
    domain[i0] = interval.floor(x0);
    domain[i1] = interval.ceil(x1);
    return domain;
  }
  function transformLog(x2) {
    return Math.log(x2);
  }
  function transformExp(x2) {
    return Math.exp(x2);
  }
  function transformLogn(x2) {
    return -Math.log(-x2);
  }
  function transformExpn(x2) {
    return -Math.exp(-x2);
  }
  function pow10(x2) {
    return isFinite(x2) ? +("1e" + x2) : x2 < 0 ? 0 : x2;
  }
  function powp(base) {
    return base === 10 ? pow10 : base === Math.E ? Math.exp : (x2) => Math.pow(base, x2);
  }
  function logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x2) => Math.log(x2) / base);
  }
  function reflect(f) {
    return (x2, k2) => -f(-x2, k2);
  }
  function loggish(transform) {
    const scale = transform(transformLog, transformExp);
    const domain = scale.domain;
    let base = 10;
    let logs;
    let pows;
    function rescale() {
      logs = logp(base), pows = powp(base);
      if (domain()[0] < 0) {
        logs = reflect(logs), pows = reflect(pows);
        transform(transformLogn, transformExpn);
      } else {
        transform(transformLog, transformExp);
      }
      return scale;
    }
    scale.base = function(_) {
      return arguments.length ? (base = +_, rescale()) : base;
    };
    scale.domain = function(_) {
      return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.ticks = (count) => {
      const d = domain();
      let u = d[0];
      let v = d[d.length - 1];
      const r2 = v < u;
      if (r2) [u, v] = [v, u];
      let i = logs(u);
      let j = logs(v);
      let k2;
      let t;
      const n = count == null ? 10 : +count;
      let z = [];
      if (!(base % 1) && j - i < n) {
        i = Math.floor(i), j = Math.ceil(j);
        if (u > 0) for (; i <= j; ++i) {
          for (k2 = 1; k2 < base; ++k2) {
            t = i < 0 ? k2 / pows(-i) : k2 * pows(i);
            if (t < u) continue;
            if (t > v) break;
            z.push(t);
          }
        }
        else for (; i <= j; ++i) {
          for (k2 = base - 1; k2 >= 1; --k2) {
            t = i > 0 ? k2 / pows(-i) : k2 * pows(i);
            if (t < u) continue;
            if (t > v) break;
            z.push(t);
          }
        }
        if (z.length * 2 < n) z = ticks(u, v, n);
      } else {
        z = ticks(i, j, Math.min(j - i, n)).map(pows);
      }
      return r2 ? z.reverse() : z;
    };
    scale.tickFormat = (count, specifier) => {
      if (count == null) count = 10;
      if (specifier == null) specifier = base === 10 ? "s" : ",";
      if (typeof specifier !== "function") {
        if (!(base % 1) && (specifier = formatSpecifier(specifier)).precision == null) specifier.trim = true;
        specifier = format(specifier);
      }
      if (count === Infinity) return specifier;
      const k2 = Math.max(1, base * count / scale.ticks().length);
      return (d) => {
        let i = d / pows(Math.round(logs(d)));
        if (i * base < base - 0.5) i *= base;
        return i <= k2 ? specifier(d) : "";
      };
    };
    scale.nice = () => {
      return domain(nice(domain(), {
        floor: (x2) => pows(Math.floor(logs(x2))),
        ceil: (x2) => pows(Math.ceil(logs(x2)))
      }));
    };
    return scale;
  }
  function log() {
    const scale = loggish(transformer$2()).domain([1, 10]);
    scale.copy = () => copy$1(scale, log()).base(scale.base());
    initRange.apply(scale, arguments);
    return scale;
  }
  function transformSymlog(c2) {
    return function(x2) {
      return Math.sign(x2) * Math.log1p(Math.abs(x2 / c2));
    };
  }
  function transformSymexp(c2) {
    return function(x2) {
      return Math.sign(x2) * Math.expm1(Math.abs(x2)) * c2;
    };
  }
  function symlogish(transform) {
    var c2 = 1, scale = transform(transformSymlog(c2), transformSymexp(c2));
    scale.constant = function(_) {
      return arguments.length ? transform(transformSymlog(c2 = +_), transformSymexp(c2)) : c2;
    };
    return linearish(scale);
  }
  function symlog() {
    var scale = symlogish(transformer$2());
    scale.copy = function() {
      return copy$1(scale, symlog()).constant(scale.constant());
    };
    return initRange.apply(scale, arguments);
  }
  function transformPow(exponent2) {
    return function(x2) {
      return x2 < 0 ? -Math.pow(-x2, exponent2) : Math.pow(x2, exponent2);
    };
  }
  function transformSqrt(x2) {
    return x2 < 0 ? -Math.sqrt(-x2) : Math.sqrt(x2);
  }
  function transformSquare(x2) {
    return x2 < 0 ? -x2 * x2 : x2 * x2;
  }
  function powish(transform) {
    var scale = transform(identity$3, identity$3), exponent2 = 1;
    function rescale() {
      return exponent2 === 1 ? transform(identity$3, identity$3) : exponent2 === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent2), transformPow(1 / exponent2));
    }
    scale.exponent = function(_) {
      return arguments.length ? (exponent2 = +_, rescale()) : exponent2;
    };
    return linearish(scale);
  }
  function pow() {
    var scale = powish(transformer$2());
    scale.copy = function() {
      return copy$1(scale, pow()).exponent(scale.exponent());
    };
    initRange.apply(scale, arguments);
    return scale;
  }
  function sqrt() {
    return pow.apply(null, arguments).exponent(0.5);
  }
  function square(x2) {
    return Math.sign(x2) * x2 * x2;
  }
  function unsquare(x2) {
    return Math.sign(x2) * Math.sqrt(Math.abs(x2));
  }
  function radial() {
    var squared = continuous(), range2 = [0, 1], round2 = false, unknown;
    function scale(x2) {
      var y2 = unsquare(squared(x2));
      return isNaN(y2) ? unknown : round2 ? Math.round(y2) : y2;
    }
    scale.invert = function(y2) {
      return squared.invert(square(y2));
    };
    scale.domain = function(_) {
      return arguments.length ? (squared.domain(_), scale) : squared.domain();
    };
    scale.range = function(_) {
      return arguments.length ? (squared.range((range2 = Array.from(_, number$1)).map(square)), scale) : range2.slice();
    };
    scale.rangeRound = function(_) {
      return scale.range(_).round(true);
    };
    scale.round = function(_) {
      return arguments.length ? (round2 = !!_, scale) : round2;
    };
    scale.clamp = function(_) {
      return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
    };
    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
      return radial(squared.domain(), range2).round(round2).clamp(squared.clamp()).unknown(unknown);
    };
    initRange.apply(scale, arguments);
    return linearish(scale);
  }
  function quantile() {
    var domain = [], range2 = [], thresholds = [], unknown;
    function rescale() {
      var i = 0, n = Math.max(1, range2.length);
      thresholds = new Array(n - 1);
      while (++i < n) thresholds[i - 1] = quantileSorted(domain, i / n);
      return scale;
    }
    function scale(x2) {
      return x2 == null || isNaN(x2 = +x2) ? unknown : range2[bisectRight(thresholds, x2)];
    }
    scale.invertExtent = function(y2) {
      var i = range2.indexOf(y2);
      return i < 0 ? [NaN, NaN] : [
        i > 0 ? thresholds[i - 1] : domain[0],
        i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
      ];
    };
    scale.domain = function(_) {
      if (!arguments.length) return domain.slice();
      domain = [];
      for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
      domain.sort(ascending);
      return rescale();
    };
    scale.range = function(_) {
      return arguments.length ? (range2 = Array.from(_), rescale()) : range2.slice();
    };
    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.quantiles = function() {
      return thresholds.slice();
    };
    scale.copy = function() {
      return quantile().domain(domain).range(range2).unknown(unknown);
    };
    return initRange.apply(scale, arguments);
  }
  function quantize() {
    var x0 = 0, x1 = 1, n = 1, domain = [0.5], range2 = [0, 1], unknown;
    function scale(x2) {
      return x2 != null && x2 <= x2 ? range2[bisectRight(domain, x2, 0, n)] : unknown;
    }
    function rescale() {
      var i = -1;
      domain = new Array(n);
      while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
      return scale;
    }
    scale.domain = function(_) {
      return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
    };
    scale.range = function(_) {
      return arguments.length ? (n = (range2 = Array.from(_)).length - 1, rescale()) : range2.slice();
    };
    scale.invertExtent = function(y2) {
      var i = range2.indexOf(y2);
      return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
    };
    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : scale;
    };
    scale.thresholds = function() {
      return domain.slice();
    };
    scale.copy = function() {
      return quantize().domain([x0, x1]).range(range2).unknown(unknown);
    };
    return initRange.apply(linearish(scale), arguments);
  }
  function threshold() {
    var domain = [0.5], range2 = [0, 1], unknown, n = 1;
    function scale(x2) {
      return x2 != null && x2 <= x2 ? range2[bisectRight(domain, x2, 0, n)] : unknown;
    }
    scale.domain = function(_) {
      return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range2.length - 1), scale) : domain.slice();
    };
    scale.range = function(_) {
      return arguments.length ? (range2 = Array.from(_), n = Math.min(domain.length, range2.length - 1), scale) : range2.slice();
    };
    scale.invertExtent = function(y2) {
      var i = range2.indexOf(y2);
      return [domain[i - 1], domain[i]];
    };
    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
      return threshold().domain(domain).range(range2).unknown(unknown);
    };
    return initRange.apply(scale, arguments);
  }
  const t0 = /* @__PURE__ */ new Date(), t1 = /* @__PURE__ */ new Date();
  function timeInterval(floori, offseti, count, field) {
    function interval(date2) {
      return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
    }
    interval.floor = (date2) => {
      return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
    };
    interval.ceil = (date2) => {
      return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
    };
    interval.round = (date2) => {
      const d0 = interval(date2), d1 = interval.ceil(date2);
      return date2 - d0 < d1 - date2 ? d0 : d1;
    };
    interval.offset = (date2, step) => {
      return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
    };
    interval.range = (start, stop, step) => {
      const range2 = [];
      start = interval.ceil(start);
      step = step == null ? 1 : Math.floor(step);
      if (!(start < stop) || !(step > 0)) return range2;
      let previous;
      do
        range2.push(previous = /* @__PURE__ */ new Date(+start)), offseti(start, step), floori(start);
      while (previous < start && start < stop);
      return range2;
    };
    interval.filter = (test) => {
      return timeInterval((date2) => {
        if (date2 >= date2) while (floori(date2), !test(date2)) date2.setTime(date2 - 1);
      }, (date2, step) => {
        if (date2 >= date2) {
          if (step < 0) while (++step <= 0) {
            while (offseti(date2, -1), !test(date2)) {
            }
          }
          else while (--step >= 0) {
            while (offseti(date2, 1), !test(date2)) {
            }
          }
        }
      });
    };
    if (count) {
      interval.count = (start, end) => {
        t0.setTime(+start), t1.setTime(+end);
        floori(t0), floori(t1);
        return Math.floor(count(t0, t1));
      };
      interval.every = (step) => {
        step = Math.floor(step);
        return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d) => field(d) % step === 0 : (d) => interval.count(0, d) % step === 0);
      };
    }
    return interval;
  }
  const millisecond = timeInterval(() => {
  }, (date2, step) => {
    date2.setTime(+date2 + step);
  }, (start, end) => {
    return end - start;
  });
  millisecond.every = (k2) => {
    k2 = Math.floor(k2);
    if (!isFinite(k2) || !(k2 > 0)) return null;
    if (!(k2 > 1)) return millisecond;
    return timeInterval((date2) => {
      date2.setTime(Math.floor(date2 / k2) * k2);
    }, (date2, step) => {
      date2.setTime(+date2 + step * k2);
    }, (start, end) => {
      return (end - start) / k2;
    });
  };
  millisecond.range;
  const durationSecond = 1e3;
  const durationMinute = durationSecond * 60;
  const durationHour = durationMinute * 60;
  const durationDay = durationHour * 24;
  const durationWeek = durationDay * 7;
  const durationMonth = durationDay * 30;
  const durationYear = durationDay * 365;
  const second = timeInterval((date2) => {
    date2.setTime(date2 - date2.getMilliseconds());
  }, (date2, step) => {
    date2.setTime(+date2 + step * durationSecond);
  }, (start, end) => {
    return (end - start) / durationSecond;
  }, (date2) => {
    return date2.getUTCSeconds();
  });
  second.range;
  const timeMinute = timeInterval((date2) => {
    date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
  }, (date2, step) => {
    date2.setTime(+date2 + step * durationMinute);
  }, (start, end) => {
    return (end - start) / durationMinute;
  }, (date2) => {
    return date2.getMinutes();
  });
  timeMinute.range;
  const utcMinute = timeInterval((date2) => {
    date2.setUTCSeconds(0, 0);
  }, (date2, step) => {
    date2.setTime(+date2 + step * durationMinute);
  }, (start, end) => {
    return (end - start) / durationMinute;
  }, (date2) => {
    return date2.getUTCMinutes();
  });
  utcMinute.range;
  const timeHour = timeInterval((date2) => {
    date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
  }, (date2, step) => {
    date2.setTime(+date2 + step * durationHour);
  }, (start, end) => {
    return (end - start) / durationHour;
  }, (date2) => {
    return date2.getHours();
  });
  timeHour.range;
  const utcHour = timeInterval((date2) => {
    date2.setUTCMinutes(0, 0, 0);
  }, (date2, step) => {
    date2.setTime(+date2 + step * durationHour);
  }, (start, end) => {
    return (end - start) / durationHour;
  }, (date2) => {
    return date2.getUTCHours();
  });
  utcHour.range;
  const timeDay = timeInterval(
    (date2) => date2.setHours(0, 0, 0, 0),
    (date2, step) => date2.setDate(date2.getDate() + step),
    (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
    (date2) => date2.getDate() - 1
  );
  timeDay.range;
  const utcDay = timeInterval((date2) => {
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step);
  }, (start, end) => {
    return (end - start) / durationDay;
  }, (date2) => {
    return date2.getUTCDate() - 1;
  });
  utcDay.range;
  const unixDay = timeInterval((date2) => {
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step);
  }, (start, end) => {
    return (end - start) / durationDay;
  }, (date2) => {
    return Math.floor(date2 / durationDay);
  });
  unixDay.range;
  function timeWeekday(i) {
    return timeInterval((date2) => {
      date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
      date2.setHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setDate(date2.getDate() + step * 7);
    }, (start, end) => {
      return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
    });
  }
  const timeSunday = timeWeekday(0);
  const timeMonday = timeWeekday(1);
  const timeTuesday = timeWeekday(2);
  const timeWednesday = timeWeekday(3);
  const timeThursday = timeWeekday(4);
  const timeFriday = timeWeekday(5);
  const timeSaturday = timeWeekday(6);
  timeSunday.range;
  timeMonday.range;
  timeTuesday.range;
  timeWednesday.range;
  timeThursday.range;
  timeFriday.range;
  timeSaturday.range;
  function utcWeekday(i) {
    return timeInterval((date2) => {
      date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
      date2.setUTCHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setUTCDate(date2.getUTCDate() + step * 7);
    }, (start, end) => {
      return (end - start) / durationWeek;
    });
  }
  const utcSunday = utcWeekday(0);
  const utcMonday = utcWeekday(1);
  const utcTuesday = utcWeekday(2);
  const utcWednesday = utcWeekday(3);
  const utcThursday = utcWeekday(4);
  const utcFriday = utcWeekday(5);
  const utcSaturday = utcWeekday(6);
  utcSunday.range;
  utcMonday.range;
  utcTuesday.range;
  utcWednesday.range;
  utcThursday.range;
  utcFriday.range;
  utcSaturday.range;
  const timeMonth = timeInterval((date2) => {
    date2.setDate(1);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setMonth(date2.getMonth() + step);
  }, (start, end) => {
    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
  }, (date2) => {
    return date2.getMonth();
  });
  timeMonth.range;
  const utcMonth = timeInterval((date2) => {
    date2.setUTCDate(1);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCMonth(date2.getUTCMonth() + step);
  }, (start, end) => {
    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
  }, (date2) => {
    return date2.getUTCMonth();
  });
  utcMonth.range;
  const timeYear = timeInterval((date2) => {
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setFullYear(date2.getFullYear() + step);
  }, (start, end) => {
    return end.getFullYear() - start.getFullYear();
  }, (date2) => {
    return date2.getFullYear();
  });
  timeYear.every = (k2) => {
    return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date2) => {
      date2.setFullYear(Math.floor(date2.getFullYear() / k2) * k2);
      date2.setMonth(0, 1);
      date2.setHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setFullYear(date2.getFullYear() + step * k2);
    });
  };
  timeYear.range;
  const utcYear = timeInterval((date2) => {
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCFullYear(date2.getUTCFullYear() + step);
  }, (start, end) => {
    return end.getUTCFullYear() - start.getUTCFullYear();
  }, (date2) => {
    return date2.getUTCFullYear();
  });
  utcYear.every = (k2) => {
    return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date2) => {
      date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k2) * k2);
      date2.setUTCMonth(0, 1);
      date2.setUTCHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setUTCFullYear(date2.getUTCFullYear() + step * k2);
    });
  };
  utcYear.range;
  function ticker(year, month, week, day, hour, minute) {
    const tickIntervals = [
      [second, 1, durationSecond],
      [second, 5, 5 * durationSecond],
      [second, 15, 15 * durationSecond],
      [second, 30, 30 * durationSecond],
      [minute, 1, durationMinute],
      [minute, 5, 5 * durationMinute],
      [minute, 15, 15 * durationMinute],
      [minute, 30, 30 * durationMinute],
      [hour, 1, durationHour],
      [hour, 3, 3 * durationHour],
      [hour, 6, 6 * durationHour],
      [hour, 12, 12 * durationHour],
      [day, 1, durationDay],
      [day, 2, 2 * durationDay],
      [week, 1, durationWeek],
      [month, 1, durationMonth],
      [month, 3, 3 * durationMonth],
      [year, 1, durationYear]
    ];
    function ticks2(start, stop, count) {
      const reverse2 = stop < start;
      if (reverse2) [start, stop] = [stop, start];
      const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
      const ticks3 = interval ? interval.range(start, +stop + 1) : [];
      return reverse2 ? ticks3.reverse() : ticks3;
    }
    function tickInterval(start, stop, count) {
      const target = Math.abs(stop - start) / count;
      const i = bisector(([, , step2]) => step2).right(tickIntervals, target);
      if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count));
      if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count), 1));
      const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
      return t.every(step);
    }
    return [ticks2, tickInterval];
  }
  const [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
  const [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);
  function localDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
      date2.setFullYear(d.y);
      return date2;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
  }
  function utcDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
      date2.setUTCFullYear(d.y);
      return date2;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
  }
  function newDate(y2, m, d) {
    return { y: y2, m, d, H: 0, M: 0, S: 0, L: 0 };
  }
  function formatLocale(locale2) {
    var locale_dateTime = locale2.dateTime, locale_date = locale2.date, locale_time = locale2.time, locale_periods = locale2.periods, locale_weekdays = locale2.days, locale_shortWeekdays = locale2.shortDays, locale_months = locale2.months, locale_shortMonths = locale2.shortMonths;
    var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
    var formats = {
      "a": formatShortWeekday,
      "A": formatWeekday,
      "b": formatShortMonth,
      "B": formatMonth,
      "c": null,
      "d": formatDayOfMonth,
      "e": formatDayOfMonth,
      "f": formatMicroseconds,
      "g": formatYearISO,
      "G": formatFullYearISO,
      "H": formatHour24,
      "I": formatHour12,
      "j": formatDayOfYear,
      "L": formatMilliseconds,
      "m": formatMonthNumber,
      "M": formatMinutes,
      "p": formatPeriod,
      "q": formatQuarter,
      "Q": formatUnixTimestamp,
      "s": formatUnixTimestampSeconds,
      "S": formatSeconds,
      "u": formatWeekdayNumberMonday,
      "U": formatWeekNumberSunday,
      "V": formatWeekNumberISO,
      "w": formatWeekdayNumberSunday,
      "W": formatWeekNumberMonday,
      "x": null,
      "X": null,
      "y": formatYear,
      "Y": formatFullYear,
      "Z": formatZone,
      "%": formatLiteralPercent
    };
    var utcFormats = {
      "a": formatUTCShortWeekday,
      "A": formatUTCWeekday,
      "b": formatUTCShortMonth,
      "B": formatUTCMonth,
      "c": null,
      "d": formatUTCDayOfMonth,
      "e": formatUTCDayOfMonth,
      "f": formatUTCMicroseconds,
      "g": formatUTCYearISO,
      "G": formatUTCFullYearISO,
      "H": formatUTCHour24,
      "I": formatUTCHour12,
      "j": formatUTCDayOfYear,
      "L": formatUTCMilliseconds,
      "m": formatUTCMonthNumber,
      "M": formatUTCMinutes,
      "p": formatUTCPeriod,
      "q": formatUTCQuarter,
      "Q": formatUnixTimestamp,
      "s": formatUnixTimestampSeconds,
      "S": formatUTCSeconds,
      "u": formatUTCWeekdayNumberMonday,
      "U": formatUTCWeekNumberSunday,
      "V": formatUTCWeekNumberISO,
      "w": formatUTCWeekdayNumberSunday,
      "W": formatUTCWeekNumberMonday,
      "x": null,
      "X": null,
      "y": formatUTCYear,
      "Y": formatUTCFullYear,
      "Z": formatUTCZone,
      "%": formatLiteralPercent
    };
    var parses = {
      "a": parseShortWeekday,
      "A": parseWeekday,
      "b": parseShortMonth,
      "B": parseMonth,
      "c": parseLocaleDateTime,
      "d": parseDayOfMonth,
      "e": parseDayOfMonth,
      "f": parseMicroseconds,
      "g": parseYear,
      "G": parseFullYear,
      "H": parseHour24,
      "I": parseHour24,
      "j": parseDayOfYear,
      "L": parseMilliseconds,
      "m": parseMonthNumber,
      "M": parseMinutes,
      "p": parsePeriod,
      "q": parseQuarter,
      "Q": parseUnixTimestamp,
      "s": parseUnixTimestampSeconds,
      "S": parseSeconds,
      "u": parseWeekdayNumberMonday,
      "U": parseWeekNumberSunday,
      "V": parseWeekNumberISO,
      "w": parseWeekdayNumberSunday,
      "W": parseWeekNumberMonday,
      "x": parseLocaleDate,
      "X": parseLocaleTime,
      "y": parseYear,
      "Y": parseFullYear,
      "Z": parseZone,
      "%": parseLiteralPercent
    };
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats2) {
      return function(date2) {
        var string2 = [], i = -1, j = 0, n = specifier.length, c2, pad2, format2;
        if (!(date2 instanceof Date)) date2 = /* @__PURE__ */ new Date(+date2);
        while (++i < n) {
          if (specifier.charCodeAt(i) === 37) {
            string2.push(specifier.slice(j, i));
            if ((pad2 = pads[c2 = specifier.charAt(++i)]) != null) c2 = specifier.charAt(++i);
            else pad2 = c2 === "e" ? " " : "0";
            if (format2 = formats2[c2]) c2 = format2(date2, pad2);
            string2.push(c2);
            j = i + 1;
          }
        }
        string2.push(specifier.slice(j, i));
        return string2.join("");
      };
    }
    function newParse(specifier, Z) {
      return function(string2) {
        var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string2 += "", 0), week, day;
        if (i != string2.length) return null;
        if ("Q" in d) return new Date(d.Q);
        if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
        if (Z && !("Z" in d)) d.Z = 0;
        if ("p" in d) d.H = d.H % 12 + d.p * 12;
        if (d.m === void 0) d.m = "q" in d ? d.q : 0;
        if ("V" in d) {
          if (d.V < 1 || d.V > 53) return null;
          if (!("w" in d)) d.w = 1;
          if ("Z" in d) {
            week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
            week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
            week = utcDay.offset(week, (d.V - 1) * 7);
            d.y = week.getUTCFullYear();
            d.m = week.getUTCMonth();
            d.d = week.getUTCDate() + (d.w + 6) % 7;
          } else {
            week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
            week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
            week = timeDay.offset(week, (d.V - 1) * 7);
            d.y = week.getFullYear();
            d.m = week.getMonth();
            d.d = week.getDate() + (d.w + 6) % 7;
          }
        } else if ("W" in d || "U" in d) {
          if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
          day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
          d.m = 0;
          d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
        }
        if ("Z" in d) {
          d.H += d.Z / 100 | 0;
          d.M += d.Z % 100;
          return utcDate(d);
        }
        return localDate(d);
      };
    }
    function parseSpecifier(d, specifier, string2, j) {
      var i = 0, n = specifier.length, m = string2.length, c2, parse;
      while (i < n) {
        if (j >= m) return -1;
        c2 = specifier.charCodeAt(i++);
        if (c2 === 37) {
          c2 = specifier.charAt(i++);
          parse = parses[c2 in pads ? specifier.charAt(i++) : c2];
          if (!parse || (j = parse(d, string2, j)) < 0) return -1;
        } else if (c2 != string2.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    function parsePeriod(d, string2, i) {
      var n = periodRe.exec(string2.slice(i));
      return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string2, i) {
      var n = shortWeekdayRe.exec(string2.slice(i));
      return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseWeekday(d, string2, i) {
      var n = weekdayRe.exec(string2.slice(i));
      return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortMonth(d, string2, i) {
      var n = shortMonthRe.exec(string2.slice(i));
      return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseMonth(d, string2, i) {
      var n = monthRe.exec(string2.slice(i));
      return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string2, i) {
      return parseSpecifier(d, locale_dateTime, string2, i);
    }
    function parseLocaleDate(d, string2, i) {
      return parseSpecifier(d, locale_date, string2, i);
    }
    function parseLocaleTime(d, string2, i) {
      return parseSpecifier(d, locale_time, string2, i);
    }
    function formatShortWeekday(d) {
      return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
      return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
      return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
      return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
      return locale_periods[+(d.getHours() >= 12)];
    }
    function formatQuarter(d) {
      return 1 + ~~(d.getMonth() / 3);
    }
    function formatUTCShortWeekday(d) {
      return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
      return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
      return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
      return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
      return locale_periods[+(d.getUTCHours() >= 12)];
    }
    function formatUTCQuarter(d) {
      return 1 + ~~(d.getUTCMonth() / 3);
    }
    return {
      format: function(specifier) {
        var f = newFormat(specifier += "", formats);
        f.toString = function() {
          return specifier;
        };
        return f;
      },
      parse: function(specifier) {
        var p = newParse(specifier += "", false);
        p.toString = function() {
          return specifier;
        };
        return p;
      },
      utcFormat: function(specifier) {
        var f = newFormat(specifier += "", utcFormats);
        f.toString = function() {
          return specifier;
        };
        return f;
      },
      utcParse: function(specifier) {
        var p = newParse(specifier += "", true);
        p.toString = function() {
          return specifier;
        };
        return p;
      }
    };
  }
  var pads = { "-": "", "_": " ", "0": "0" }, numberRe = /^\s*\d+/, percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
  function pad(value, fill, width) {
    var sign2 = value < 0 ? "-" : "", string2 = (sign2 ? -value : value) + "", length = string2.length;
    return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string2 : string2);
  }
  function requote(s2) {
    return s2.replace(requoteRe, "\\$&");
  }
  function formatRe(names) {
    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
  }
  function formatLookup(names) {
    return new Map(names.map((name, i) => [name.toLowerCase(), i]));
  }
  function parseWeekdayNumberSunday(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
  }
  function parseWeekdayNumberMonday(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberSunday(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberISO(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberMonday(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
  }
  function parseFullYear(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
  }
  function parseYear(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
  }
  function parseZone(d, string2, i) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string2.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
  }
  function parseQuarter(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 1));
    return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
  }
  function parseMonthNumber(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
  }
  function parseDayOfMonth(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
  }
  function parseDayOfYear(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
  }
  function parseHour24(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
  }
  function parseMinutes(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
  }
  function parseSeconds(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
  }
  function parseMilliseconds(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
  }
  function parseMicroseconds(d, string2, i) {
    var n = numberRe.exec(string2.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
  }
  function parseLiteralPercent(d, string2, i) {
    var n = percentRe.exec(string2.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function parseUnixTimestamp(d, string2, i) {
    var n = numberRe.exec(string2.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
  }
  function parseUnixTimestampSeconds(d, string2, i) {
    var n = numberRe.exec(string2.slice(i));
    return n ? (d.s = +n[0], i + n[0].length) : -1;
  }
  function formatDayOfMonth(d, p) {
    return pad(d.getDate(), p, 2);
  }
  function formatHour24(d, p) {
    return pad(d.getHours(), p, 2);
  }
  function formatHour12(d, p) {
    return pad(d.getHours() % 12 || 12, p, 2);
  }
  function formatDayOfYear(d, p) {
    return pad(1 + timeDay.count(timeYear(d), d), p, 3);
  }
  function formatMilliseconds(d, p) {
    return pad(d.getMilliseconds(), p, 3);
  }
  function formatMicroseconds(d, p) {
    return formatMilliseconds(d, p) + "000";
  }
  function formatMonthNumber(d, p) {
    return pad(d.getMonth() + 1, p, 2);
  }
  function formatMinutes(d, p) {
    return pad(d.getMinutes(), p, 2);
  }
  function formatSeconds(d, p) {
    return pad(d.getSeconds(), p, 2);
  }
  function formatWeekdayNumberMonday(d) {
    var day = d.getDay();
    return day === 0 ? 7 : day;
  }
  function formatWeekNumberSunday(d, p) {
    return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
  }
  function dISO(d) {
    var day = d.getDay();
    return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  }
  function formatWeekNumberISO(d, p) {
    d = dISO(d);
    return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
  }
  function formatWeekdayNumberSunday(d) {
    return d.getDay();
  }
  function formatWeekNumberMonday(d, p) {
    return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
  }
  function formatYear(d, p) {
    return pad(d.getFullYear() % 100, p, 2);
  }
  function formatYearISO(d, p) {
    d = dISO(d);
    return pad(d.getFullYear() % 100, p, 2);
  }
  function formatFullYear(d, p) {
    return pad(d.getFullYear() % 1e4, p, 4);
  }
  function formatFullYearISO(d, p) {
    var day = d.getDay();
    d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
    return pad(d.getFullYear() % 1e4, p, 4);
  }
  function formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
  }
  function formatUTCDayOfMonth(d, p) {
    return pad(d.getUTCDate(), p, 2);
  }
  function formatUTCHour24(d, p) {
    return pad(d.getUTCHours(), p, 2);
  }
  function formatUTCHour12(d, p) {
    return pad(d.getUTCHours() % 12 || 12, p, 2);
  }
  function formatUTCDayOfYear(d, p) {
    return pad(1 + utcDay.count(utcYear(d), d), p, 3);
  }
  function formatUTCMilliseconds(d, p) {
    return pad(d.getUTCMilliseconds(), p, 3);
  }
  function formatUTCMicroseconds(d, p) {
    return formatUTCMilliseconds(d, p) + "000";
  }
  function formatUTCMonthNumber(d, p) {
    return pad(d.getUTCMonth() + 1, p, 2);
  }
  function formatUTCMinutes(d, p) {
    return pad(d.getUTCMinutes(), p, 2);
  }
  function formatUTCSeconds(d, p) {
    return pad(d.getUTCSeconds(), p, 2);
  }
  function formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
  }
  function formatUTCWeekNumberSunday(d, p) {
    return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
  }
  function UTCdISO(d) {
    var day = d.getUTCDay();
    return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  }
  function formatUTCWeekNumberISO(d, p) {
    d = UTCdISO(d);
    return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
  }
  function formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
  }
  function formatUTCWeekNumberMonday(d, p) {
    return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
  }
  function formatUTCYear(d, p) {
    return pad(d.getUTCFullYear() % 100, p, 2);
  }
  function formatUTCYearISO(d, p) {
    d = UTCdISO(d);
    return pad(d.getUTCFullYear() % 100, p, 2);
  }
  function formatUTCFullYear(d, p) {
    return pad(d.getUTCFullYear() % 1e4, p, 4);
  }
  function formatUTCFullYearISO(d, p) {
    var day = d.getUTCDay();
    d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
    return pad(d.getUTCFullYear() % 1e4, p, 4);
  }
  function formatUTCZone() {
    return "+0000";
  }
  function formatLiteralPercent() {
    return "%";
  }
  function formatUnixTimestamp(d) {
    return +d;
  }
  function formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1e3);
  }
  var locale;
  var timeFormat;
  var utcFormat;
  defaultLocale({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  });
  function defaultLocale(definition) {
    locale = formatLocale(definition);
    timeFormat = locale.format;
    locale.parse;
    utcFormat = locale.utcFormat;
    locale.utcParse;
    return locale;
  }
  function date(t) {
    return new Date(t);
  }
  function number(t) {
    return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
  }
  function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2) {
    var scale = continuous(), invert = scale.invert, domain = scale.domain;
    var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
    function tickFormat2(date2) {
      return (second2(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear2)(date2);
    }
    scale.invert = function(y2) {
      return new Date(invert(y2));
    };
    scale.domain = function(_) {
      return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
    };
    scale.ticks = function(interval) {
      var d = domain();
      return ticks2(d[0], d[d.length - 1], interval == null ? 10 : interval);
    };
    scale.tickFormat = function(count, specifier) {
      return specifier == null ? tickFormat2 : format2(specifier);
    };
    scale.nice = function(interval) {
      var d = domain();
      if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
      return interval ? domain(nice(d, interval)) : scale;
    };
    scale.copy = function() {
      return copy$1(scale, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2));
    };
    return scale;
  }
  function time() {
    return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
  }
  function utcTime() {
    return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
  }
  function transformer$1() {
    var x0 = 0, x1 = 1, t02, t12, k10, transform, interpolator = identity$3, clamp = false, unknown;
    function scale(x2) {
      return x2 == null || isNaN(x2 = +x2) ? unknown : interpolator(k10 === 0 ? 0.5 : (x2 = (transform(x2) - t02) * k10, clamp ? Math.max(0, Math.min(1, x2)) : x2));
    }
    scale.domain = function(_) {
      return arguments.length ? ([x0, x1] = _, t02 = transform(x0 = +x0), t12 = transform(x1 = +x1), k10 = t02 === t12 ? 0 : 1 / (t12 - t02), scale) : [x0, x1];
    };
    scale.clamp = function(_) {
      return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
      return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range2(interpolate2) {
      return function(_) {
        var r0, r1;
        return arguments.length ? ([r0, r1] = _, interpolator = interpolate2(r0, r1), scale) : [interpolator(0), interpolator(1)];
      };
    }
    scale.range = range2(interpolate);
    scale.rangeRound = range2(interpolateRound);
    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
      transform = t, t02 = t(x0), t12 = t(x1), k10 = t02 === t12 ? 0 : 1 / (t12 - t02);
      return scale;
    };
  }
  function copy(source, target) {
    return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
  }
  function sequential() {
    var scale = linearish(transformer$1()(identity$3));
    scale.copy = function() {
      return copy(scale, sequential());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function sequentialLog() {
    var scale = loggish(transformer$1()).domain([1, 10]);
    scale.copy = function() {
      return copy(scale, sequentialLog()).base(scale.base());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function sequentialSymlog() {
    var scale = symlogish(transformer$1());
    scale.copy = function() {
      return copy(scale, sequentialSymlog()).constant(scale.constant());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function sequentialPow() {
    var scale = powish(transformer$1());
    scale.copy = function() {
      return copy(scale, sequentialPow()).exponent(scale.exponent());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function sequentialSqrt() {
    return sequentialPow.apply(null, arguments).exponent(0.5);
  }
  function sequentialQuantile() {
    var domain = [], interpolator = identity$3;
    function scale(x2) {
      if (x2 != null && !isNaN(x2 = +x2)) return interpolator((bisectRight(domain, x2, 1) - 1) / (domain.length - 1));
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain.slice();
      domain = [];
      for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
      domain.sort(ascending);
      return scale;
    };
    scale.interpolator = function(_) {
      return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    scale.range = function() {
      return domain.map((d, i) => interpolator(i / (domain.length - 1)));
    };
    scale.quantiles = function(n) {
      return Array.from({ length: n + 1 }, (_, i) => quantile$1(domain, i / n));
    };
    scale.copy = function() {
      return sequentialQuantile(interpolator).domain(domain);
    };
    return initInterpolator.apply(scale, arguments);
  }
  function transformer() {
    var x0 = 0, x1 = 0.5, x2 = 1, s2 = 1, t02, t12, t2, k10, k21, interpolator = identity$3, transform, clamp = false, unknown;
    function scale(x3) {
      return isNaN(x3 = +x3) ? unknown : (x3 = 0.5 + ((x3 = +transform(x3)) - t12) * (s2 * x3 < s2 * t12 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x3)) : x3));
    }
    scale.domain = function(_) {
      return arguments.length ? ([x0, x1, x2] = _, t02 = transform(x0 = +x0), t12 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t02 === t12 ? 0 : 0.5 / (t12 - t02), k21 = t12 === t2 ? 0 : 0.5 / (t2 - t12), s2 = t12 < t02 ? -1 : 1, scale) : [x0, x1, x2];
    };
    scale.clamp = function(_) {
      return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
      return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range2(interpolate2) {
      return function(_) {
        var r0, r1, r2;
        return arguments.length ? ([r0, r1, r2] = _, interpolator = piecewise(interpolate2, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
      };
    }
    scale.range = range2(interpolate);
    scale.rangeRound = range2(interpolateRound);
    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
      transform = t, t02 = t(x0), t12 = t(x1), t2 = t(x2), k10 = t02 === t12 ? 0 : 0.5 / (t12 - t02), k21 = t12 === t2 ? 0 : 0.5 / (t2 - t12), s2 = t12 < t02 ? -1 : 1;
      return scale;
    };
  }
  function diverging() {
    var scale = linearish(transformer()(identity$3));
    scale.copy = function() {
      return copy(scale, diverging());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function divergingLog() {
    var scale = loggish(transformer()).domain([0.1, 1, 10]);
    scale.copy = function() {
      return copy(scale, divergingLog()).base(scale.base());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function divergingSymlog() {
    var scale = symlogish(transformer());
    scale.copy = function() {
      return copy(scale, divergingSymlog()).constant(scale.constant());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function divergingPow() {
    var scale = powish(transformer());
    scale.copy = function() {
      return copy(scale, divergingPow()).exponent(scale.exponent());
    };
    return initInterpolator.apply(scale, arguments);
  }
  function divergingSqrt() {
    return divergingPow.apply(null, arguments).exponent(0.5);
  }
  const d3Scales = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    scaleBand: band,
    scaleDiverging: diverging,
    scaleDivergingLog: divergingLog,
    scaleDivergingPow: divergingPow,
    scaleDivergingSqrt: divergingSqrt,
    scaleDivergingSymlog: divergingSymlog,
    scaleIdentity: identity$1,
    scaleImplicit: implicit,
    scaleLinear: linear,
    scaleLog: log,
    scaleOrdinal: ordinal,
    scalePoint: point,
    scalePow: pow,
    scaleQuantile: quantile,
    scaleQuantize: quantize,
    scaleRadial: radial,
    scaleSequential: sequential,
    scaleSequentialLog: sequentialLog,
    scaleSequentialPow: sequentialPow,
    scaleSequentialQuantile: sequentialQuantile,
    scaleSequentialSqrt: sequentialSqrt,
    scaleSequentialSymlog: sequentialSymlog,
    scaleSqrt: sqrt,
    scaleSymlog: symlog,
    scaleThreshold: threshold,
    scaleTime: time,
    scaleUtc: utcTime,
    tickFormat
  }, Symbol.toStringTag, { value: "Module" }));
  var selectChartDataWithIndexes = (state) => state.chartData;
  var selectChartDataAndAlwaysIgnoreIndexes = createSelector([selectChartDataWithIndexes], (dataState) => {
    var dataEndIndex = dataState.chartData != null ? dataState.chartData.length - 1 : 0;
    return {
      chartData: dataState.chartData,
      computedData: dataState.computedData,
      dataEndIndex,
      dataStartIndex: 0
    };
  });
  var selectChartDataWithIndexesIfNotInPanorama = (state, _unused1, _unused2, isPanorama) => {
    if (isPanorama) {
      return selectChartDataAndAlwaysIgnoreIndexes(state);
    }
    return selectChartDataWithIndexes(state);
  };
  function isWellFormedNumberDomain(v) {
    if (Array.isArray(v) && v.length === 2) {
      var [min2, max2] = v;
      if (isWellBehavedNumber(min2) && isWellBehavedNumber(max2)) {
        return true;
      }
    }
    return false;
  }
  function extendDomain(providedDomain, boundaryDomain, allowDataOverflow) {
    if (allowDataOverflow) {
      return providedDomain;
    }
    return [Math.min(providedDomain[0], boundaryDomain[0]), Math.max(providedDomain[1], boundaryDomain[1])];
  }
  function numericalDomainSpecifiedWithoutRequiringData(userDomain, allowDataOverflow) {
    if (!allowDataOverflow) {
      return void 0;
    }
    if (typeof userDomain === "function") {
      return void 0;
    }
    if (Array.isArray(userDomain) && userDomain.length === 2) {
      var [providedMin, providedMax] = userDomain;
      var finalMin, finalMax;
      if (isWellBehavedNumber(providedMin)) {
        finalMin = providedMin;
      } else if (typeof providedMin === "function") {
        return void 0;
      }
      if (isWellBehavedNumber(providedMax)) {
        finalMax = providedMax;
      } else if (typeof providedMax === "function") {
        return void 0;
      }
      var candidate = [finalMin, finalMax];
      if (isWellFormedNumberDomain(candidate)) {
        return candidate;
      }
    }
    return void 0;
  }
  function parseNumericalUserDomain(userDomain, dataDomain, allowDataOverflow) {
    if (!allowDataOverflow && dataDomain == null) {
      return void 0;
    }
    if (typeof userDomain === "function" && dataDomain != null) {
      try {
        var result = userDomain(dataDomain, allowDataOverflow);
        if (isWellFormedNumberDomain(result)) {
          return extendDomain(result, dataDomain, allowDataOverflow);
        }
      } catch (_unused) {
      }
    }
    if (Array.isArray(userDomain) && userDomain.length === 2) {
      var [providedMin, providedMax] = userDomain;
      var finalMin, finalMax;
      if (providedMin === "auto") {
        if (dataDomain != null) {
          finalMin = Math.min(...dataDomain);
        }
      } else if (isNumber(providedMin)) {
        finalMin = providedMin;
      } else if (typeof providedMin === "function") {
        try {
          if (dataDomain != null) {
            finalMin = providedMin(dataDomain === null || dataDomain === void 0 ? void 0 : dataDomain[0]);
          }
        } catch (_unused2) {
        }
      } else if (typeof providedMin === "string" && MIN_VALUE_REG.test(providedMin)) {
        var match = MIN_VALUE_REG.exec(providedMin);
        if (match == null || dataDomain == null) {
          finalMin = void 0;
        } else {
          var value = +match[1];
          finalMin = dataDomain[0] - value;
        }
      } else {
        finalMin = dataDomain === null || dataDomain === void 0 ? void 0 : dataDomain[0];
      }
      if (providedMax === "auto") {
        if (dataDomain != null) {
          finalMax = Math.max(...dataDomain);
        }
      } else if (isNumber(providedMax)) {
        finalMax = providedMax;
      } else if (typeof providedMax === "function") {
        try {
          if (dataDomain != null) {
            finalMax = providedMax(dataDomain === null || dataDomain === void 0 ? void 0 : dataDomain[1]);
          }
        } catch (_unused3) {
        }
      } else if (typeof providedMax === "string" && MAX_VALUE_REG.test(providedMax)) {
        var _match = MAX_VALUE_REG.exec(providedMax);
        if (_match == null || dataDomain == null) {
          finalMax = void 0;
        } else {
          var _value = +_match[1];
          finalMax = dataDomain[1] + _value;
        }
      } else {
        finalMax = dataDomain === null || dataDomain === void 0 ? void 0 : dataDomain[1];
      }
      var candidate = [finalMin, finalMax];
      if (isWellFormedNumberDomain(candidate)) {
        if (dataDomain == null) {
          return candidate;
        }
        return extendDomain(candidate, dataDomain, allowDataOverflow);
      }
    }
    return void 0;
  }
  var MAX_DIGITS = 1e9, defaults = {
    // These values must be integers within the stated ranges (inclusive).
    // Most of these values can be changed during run-time using `Decimal.config`.
    // The maximum number of significant digits of the result of a calculation or base conversion.
    // E.g. `Decimal.config({ precision: 20 });`
    precision: 20,
    // 1 to MAX_DIGITS
    // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
    // `toFixed`, `toPrecision` and `toSignificantDigits`.
    //
    // ROUND_UP         0 Away from zero.
    // ROUND_DOWN       1 Towards zero.
    // ROUND_CEIL       2 Towards +Infinity.
    // ROUND_FLOOR      3 Towards -Infinity.
    // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    //
    // E.g.
    // `Decimal.rounding = 4;`
    // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
    rounding: 4,
    // 0 to 8
    // The exponent value at and beneath which `toString` returns exponential notation.
    // JavaScript numbers: -7
    toExpNeg: -7,
    // 0 to -MAX_E
    // The exponent value at and above which `toString` returns exponential notation.
    // JavaScript numbers: 21
    toExpPos: 21,
    // 0 to MAX_E
    // The natural logarithm of 10.
    // 115 digits
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
  }, Decimal, external = true, decimalError = "[DecimalError] ", invalidArgument = decimalError + "Invalid argument: ", exponentOutOfRange = decimalError + "Exponent out of range: ", mathfloor = Math.floor, mathpow = Math.pow, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ONE, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER = 9007199254740991, MAX_E = mathfloor(MAX_SAFE_INTEGER / LOG_BASE), P = {};
  P.absoluteValue = P.abs = function() {
    var x2 = new this.constructor(this);
    if (x2.s) x2.s = 1;
    return x2;
  };
  P.comparedTo = P.cmp = function(y2) {
    var i, j, xdL, ydL, x2 = this;
    y2 = new x2.constructor(y2);
    if (x2.s !== y2.s) return x2.s || -y2.s;
    if (x2.e !== y2.e) return x2.e > y2.e ^ x2.s < 0 ? 1 : -1;
    xdL = x2.d.length;
    ydL = y2.d.length;
    for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
      if (x2.d[i] !== y2.d[i]) return x2.d[i] > y2.d[i] ^ x2.s < 0 ? 1 : -1;
    }
    return xdL === ydL ? 0 : xdL > ydL ^ x2.s < 0 ? 1 : -1;
  };
  P.decimalPlaces = P.dp = function() {
    var x2 = this, w = x2.d.length - 1, dp = (w - x2.e) * LOG_BASE;
    w = x2.d[w];
    if (w) for (; w % 10 == 0; w /= 10) dp--;
    return dp < 0 ? 0 : dp;
  };
  P.dividedBy = P.div = function(y2) {
    return divide(this, new this.constructor(y2));
  };
  P.dividedToIntegerBy = P.idiv = function(y2) {
    var x2 = this, Ctor = x2.constructor;
    return round(divide(x2, new Ctor(y2), 0, 1), Ctor.precision);
  };
  P.equals = P.eq = function(y2) {
    return !this.cmp(y2);
  };
  P.exponent = function() {
    return getBase10Exponent(this);
  };
  P.greaterThan = P.gt = function(y2) {
    return this.cmp(y2) > 0;
  };
  P.greaterThanOrEqualTo = P.gte = function(y2) {
    return this.cmp(y2) >= 0;
  };
  P.isInteger = P.isint = function() {
    return this.e > this.d.length - 2;
  };
  P.isNegative = P.isneg = function() {
    return this.s < 0;
  };
  P.isPositive = P.ispos = function() {
    return this.s > 0;
  };
  P.isZero = function() {
    return this.s === 0;
  };
  P.lessThan = P.lt = function(y2) {
    return this.cmp(y2) < 0;
  };
  P.lessThanOrEqualTo = P.lte = function(y2) {
    return this.cmp(y2) < 1;
  };
  P.logarithm = P.log = function(base) {
    var r2, x2 = this, Ctor = x2.constructor, pr = Ctor.precision, wpr = pr + 5;
    if (base === void 0) {
      base = new Ctor(10);
    } else {
      base = new Ctor(base);
      if (base.s < 1 || base.eq(ONE)) throw Error(decimalError + "NaN");
    }
    if (x2.s < 1) throw Error(decimalError + (x2.s ? "NaN" : "-Infinity"));
    if (x2.eq(ONE)) return new Ctor(0);
    external = false;
    r2 = divide(ln(x2, wpr), ln(base, wpr), wpr);
    external = true;
    return round(r2, pr);
  };
  P.minus = P.sub = function(y2) {
    var x2 = this;
    y2 = new x2.constructor(y2);
    return x2.s == y2.s ? subtract(x2, y2) : add(x2, (y2.s = -y2.s, y2));
  };
  P.modulo = P.mod = function(y2) {
    var q, x2 = this, Ctor = x2.constructor, pr = Ctor.precision;
    y2 = new Ctor(y2);
    if (!y2.s) throw Error(decimalError + "NaN");
    if (!x2.s) return round(new Ctor(x2), pr);
    external = false;
    q = divide(x2, y2, 0, 1).times(y2);
    external = true;
    return x2.minus(q);
  };
  P.naturalExponential = P.exp = function() {
    return exp(this);
  };
  P.naturalLogarithm = P.ln = function() {
    return ln(this);
  };
  P.negated = P.neg = function() {
    var x2 = new this.constructor(this);
    x2.s = -x2.s || 0;
    return x2;
  };
  P.plus = P.add = function(y2) {
    var x2 = this;
    y2 = new x2.constructor(y2);
    return x2.s == y2.s ? add(x2, y2) : subtract(x2, (y2.s = -y2.s, y2));
  };
  P.precision = P.sd = function(z) {
    var e, sd, w, x2 = this;
    if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
    e = getBase10Exponent(x2) + 1;
    w = x2.d.length - 1;
    sd = w * LOG_BASE + 1;
    w = x2.d[w];
    if (w) {
      for (; w % 10 == 0; w /= 10) sd--;
      for (w = x2.d[0]; w >= 10; w /= 10) sd++;
    }
    return z && e > sd ? e : sd;
  };
  P.squareRoot = P.sqrt = function() {
    var e, n, pr, r2, s2, t, wpr, x2 = this, Ctor = x2.constructor;
    if (x2.s < 1) {
      if (!x2.s) return new Ctor(0);
      throw Error(decimalError + "NaN");
    }
    e = getBase10Exponent(x2);
    external = false;
    s2 = Math.sqrt(+x2);
    if (s2 == 0 || s2 == 1 / 0) {
      n = digitsToString(x2.d);
      if ((n.length + e) % 2 == 0) n += "0";
      s2 = Math.sqrt(n);
      e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
      if (s2 == 1 / 0) {
        n = "5e" + e;
      } else {
        n = s2.toExponential();
        n = n.slice(0, n.indexOf("e") + 1) + e;
      }
      r2 = new Ctor(n);
    } else {
      r2 = new Ctor(s2.toString());
    }
    pr = Ctor.precision;
    s2 = wpr = pr + 3;
    for (; ; ) {
      t = r2;
      r2 = t.plus(divide(x2, t, wpr + 2)).times(0.5);
      if (digitsToString(t.d).slice(0, wpr) === (n = digitsToString(r2.d)).slice(0, wpr)) {
        n = n.slice(wpr - 3, wpr + 1);
        if (s2 == wpr && n == "4999") {
          round(t, pr + 1, 0);
          if (t.times(t).eq(x2)) {
            r2 = t;
            break;
          }
        } else if (n != "9999") {
          break;
        }
        wpr += 4;
      }
    }
    external = true;
    return round(r2, pr);
  };
  P.times = P.mul = function(y2) {
    var carry, e, i, k2, r2, rL, t, xdL, ydL, x2 = this, Ctor = x2.constructor, xd = x2.d, yd = (y2 = new Ctor(y2)).d;
    if (!x2.s || !y2.s) return new Ctor(0);
    y2.s *= x2.s;
    e = x2.e + y2.e;
    xdL = xd.length;
    ydL = yd.length;
    if (xdL < ydL) {
      r2 = xd;
      xd = yd;
      yd = r2;
      rL = xdL;
      xdL = ydL;
      ydL = rL;
    }
    r2 = [];
    rL = xdL + ydL;
    for (i = rL; i--; ) r2.push(0);
    for (i = ydL; --i >= 0; ) {
      carry = 0;
      for (k2 = xdL + i; k2 > i; ) {
        t = r2[k2] + yd[i] * xd[k2 - i - 1] + carry;
        r2[k2--] = t % BASE | 0;
        carry = t / BASE | 0;
      }
      r2[k2] = (r2[k2] + carry) % BASE | 0;
    }
    for (; !r2[--rL]; ) r2.pop();
    if (carry) ++e;
    else r2.shift();
    y2.d = r2;
    y2.e = e;
    return external ? round(y2, Ctor.precision) : y2;
  };
  P.toDecimalPlaces = P.todp = function(dp, rm) {
    var x2 = this, Ctor = x2.constructor;
    x2 = new Ctor(x2);
    if (dp === void 0) return x2;
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    return round(x2, dp + getBase10Exponent(x2) + 1, rm);
  };
  P.toExponential = function(dp, rm) {
    var str, x2 = this, Ctor = x2.constructor;
    if (dp === void 0) {
      str = toString(x2, true);
    } else {
      checkInt32(dp, 0, MAX_DIGITS);
      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
      x2 = round(new Ctor(x2), dp + 1, rm);
      str = toString(x2, true, dp + 1);
    }
    return str;
  };
  P.toFixed = function(dp, rm) {
    var str, y2, x2 = this, Ctor = x2.constructor;
    if (dp === void 0) return toString(x2);
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    y2 = round(new Ctor(x2), dp + getBase10Exponent(x2) + 1, rm);
    str = toString(y2.abs(), false, dp + getBase10Exponent(y2) + 1);
    return x2.isneg() && !x2.isZero() ? "-" + str : str;
  };
  P.toInteger = P.toint = function() {
    var x2 = this, Ctor = x2.constructor;
    return round(new Ctor(x2), getBase10Exponent(x2) + 1, Ctor.rounding);
  };
  P.toNumber = function() {
    return +this;
  };
  P.toPower = P.pow = function(y2) {
    var e, k2, pr, r2, sign2, yIsInt, x2 = this, Ctor = x2.constructor, guard = 12, yn = +(y2 = new Ctor(y2));
    if (!y2.s) return new Ctor(ONE);
    x2 = new Ctor(x2);
    if (!x2.s) {
      if (y2.s < 1) throw Error(decimalError + "Infinity");
      return x2;
    }
    if (x2.eq(ONE)) return x2;
    pr = Ctor.precision;
    if (y2.eq(ONE)) return round(x2, pr);
    e = y2.e;
    k2 = y2.d.length - 1;
    yIsInt = e >= k2;
    sign2 = x2.s;
    if (!yIsInt) {
      if (sign2 < 0) throw Error(decimalError + "NaN");
    } else if ((k2 = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
      r2 = new Ctor(ONE);
      e = Math.ceil(pr / LOG_BASE + 4);
      external = false;
      for (; ; ) {
        if (k2 % 2) {
          r2 = r2.times(x2);
          truncate(r2.d, e);
        }
        k2 = mathfloor(k2 / 2);
        if (k2 === 0) break;
        x2 = x2.times(x2);
        truncate(x2.d, e);
      }
      external = true;
      return y2.s < 0 ? new Ctor(ONE).div(r2) : round(r2, pr);
    }
    sign2 = sign2 < 0 && y2.d[Math.max(e, k2)] & 1 ? -1 : 1;
    x2.s = 1;
    external = false;
    r2 = y2.times(ln(x2, pr + guard));
    external = true;
    r2 = exp(r2);
    r2.s = sign2;
    return r2;
  };
  P.toPrecision = function(sd, rm) {
    var e, str, x2 = this, Ctor = x2.constructor;
    if (sd === void 0) {
      e = getBase10Exponent(x2);
      str = toString(x2, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
    } else {
      checkInt32(sd, 1, MAX_DIGITS);
      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
      x2 = round(new Ctor(x2), sd, rm);
      e = getBase10Exponent(x2);
      str = toString(x2, sd <= e || e <= Ctor.toExpNeg, sd);
    }
    return str;
  };
  P.toSignificantDigits = P.tosd = function(sd, rm) {
    var x2 = this, Ctor = x2.constructor;
    if (sd === void 0) {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    } else {
      checkInt32(sd, 1, MAX_DIGITS);
      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
    }
    return round(new Ctor(x2), sd, rm);
  };
  P.toString = P.valueOf = P.val = P.toJSON = P[Symbol.for("nodejs.util.inspect.custom")] = function() {
    var x2 = this, e = getBase10Exponent(x2), Ctor = x2.constructor;
    return toString(x2, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
  };
  function add(x2, y2) {
    var carry, d, e, i, k2, len, xd, yd, Ctor = x2.constructor, pr = Ctor.precision;
    if (!x2.s || !y2.s) {
      if (!y2.s) y2 = new Ctor(x2);
      return external ? round(y2, pr) : y2;
    }
    xd = x2.d;
    yd = y2.d;
    k2 = x2.e;
    e = y2.e;
    xd = xd.slice();
    i = k2 - e;
    if (i) {
      if (i < 0) {
        d = xd;
        i = -i;
        len = yd.length;
      } else {
        d = yd;
        e = k2;
        len = xd.length;
      }
      k2 = Math.ceil(pr / LOG_BASE);
      len = k2 > len ? k2 + 1 : len + 1;
      if (i > len) {
        i = len;
        d.length = 1;
      }
      d.reverse();
      for (; i--; ) d.push(0);
      d.reverse();
    }
    len = xd.length;
    i = yd.length;
    if (len - i < 0) {
      i = len;
      d = yd;
      yd = xd;
      xd = d;
    }
    for (carry = 0; i; ) {
      carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
      xd[i] %= BASE;
    }
    if (carry) {
      xd.unshift(carry);
      ++e;
    }
    for (len = xd.length; xd[--len] == 0; ) xd.pop();
    y2.d = xd;
    y2.e = e;
    return external ? round(y2, pr) : y2;
  }
  function checkInt32(i, min2, max2) {
    if (i !== ~~i || i < min2 || i > max2) {
      throw Error(invalidArgument + i);
    }
  }
  function digitsToString(d) {
    var i, k2, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
    if (indexOfLastWord > 0) {
      str += w;
      for (i = 1; i < indexOfLastWord; i++) {
        ws = d[i] + "";
        k2 = LOG_BASE - ws.length;
        if (k2) str += getZeroString(k2);
        str += ws;
      }
      w = d[i];
      ws = w + "";
      k2 = LOG_BASE - ws.length;
      if (k2) str += getZeroString(k2);
    } else if (w === 0) {
      return "0";
    }
    for (; w % 10 === 0; ) w /= 10;
    return str + w;
  }
  var divide = /* @__PURE__ */ (function() {
    function multiplyInteger(x2, k2) {
      var temp, carry = 0, i = x2.length;
      for (x2 = x2.slice(); i--; ) {
        temp = x2[i] * k2 + carry;
        x2[i] = temp % BASE | 0;
        carry = temp / BASE | 0;
      }
      if (carry) x2.unshift(carry);
      return x2;
    }
    function compare(a2, b, aL, bL) {
      var i, r2;
      if (aL != bL) {
        r2 = aL > bL ? 1 : -1;
      } else {
        for (i = r2 = 0; i < aL; i++) {
          if (a2[i] != b[i]) {
            r2 = a2[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }
      return r2;
    }
    function subtract2(a2, b, aL) {
      var i = 0;
      for (; aL--; ) {
        a2[aL] -= i;
        i = a2[aL] < b[aL] ? 1 : 0;
        a2[aL] = i * BASE + a2[aL] - b[aL];
      }
      for (; !a2[0] && a2.length > 1; ) a2.shift();
    }
    return function(x2, y2, pr, dp) {
      var cmp, e, i, k2, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x2.constructor, sign2 = x2.s == y2.s ? 1 : -1, xd = x2.d, yd = y2.d;
      if (!x2.s) return new Ctor(x2);
      if (!y2.s) throw Error(decimalError + "Division by zero");
      e = x2.e - y2.e;
      yL = yd.length;
      xL = xd.length;
      q = new Ctor(sign2);
      qd = q.d = [];
      for (i = 0; yd[i] == (xd[i] || 0); ) ++i;
      if (yd[i] > (xd[i] || 0)) --e;
      if (pr == null) {
        sd = pr = Ctor.precision;
      } else if (dp) {
        sd = pr + (getBase10Exponent(x2) - getBase10Exponent(y2)) + 1;
      } else {
        sd = pr;
      }
      if (sd < 0) return new Ctor(0);
      sd = sd / LOG_BASE + 2 | 0;
      i = 0;
      if (yL == 1) {
        k2 = 0;
        yd = yd[0];
        sd++;
        for (; (i < xL || k2) && sd--; i++) {
          t = k2 * BASE + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k2 = t % yd | 0;
        }
      } else {
        k2 = BASE / (yd[0] + 1) | 0;
        if (k2 > 1) {
          yd = multiplyInteger(yd, k2);
          xd = multiplyInteger(xd, k2);
          yL = yd.length;
          xL = xd.length;
        }
        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; ) rem[remL++] = 0;
        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];
        if (yd[1] >= BASE / 2) ++yd0;
        do {
          k2 = 0;
          cmp = compare(yd, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * BASE + (rem[1] || 0);
            k2 = rem0 / yd0 | 0;
            if (k2 > 1) {
              if (k2 >= BASE) k2 = BASE - 1;
              prod = multiplyInteger(yd, k2);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare(prod, rem, prodL, remL);
              if (cmp == 1) {
                k2--;
                subtract2(prod, yL < prodL ? yz : yd, prodL);
              }
            } else {
              if (k2 == 0) cmp = k2 = 1;
              prod = yd.slice();
            }
            prodL = prod.length;
            if (prodL < remL) prod.unshift(0);
            subtract2(rem, prod, remL);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 1) {
                k2++;
                subtract2(rem, yL < remL ? yz : yd, remL);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k2++;
            rem = [0];
          }
          qd[i++] = k2;
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
      }
      if (!qd[0]) qd.shift();
      q.e = e;
      return round(q, dp ? pr + getBase10Exponent(q) + 1 : pr);
    };
  })();
  function exp(x2, sd) {
    var denominator, guard, pow2, sum, t, wpr, i = 0, k2 = 0, Ctor = x2.constructor, pr = Ctor.precision;
    if (getBase10Exponent(x2) > 16) throw Error(exponentOutOfRange + getBase10Exponent(x2));
    if (!x2.s) return new Ctor(ONE);
    {
      external = false;
      wpr = pr;
    }
    t = new Ctor(0.03125);
    while (x2.abs().gte(0.1)) {
      x2 = x2.times(t);
      k2 += 5;
    }
    guard = Math.log(mathpow(2, k2)) / Math.LN10 * 2 + 5 | 0;
    wpr += guard;
    denominator = pow2 = sum = new Ctor(ONE);
    Ctor.precision = wpr;
    for (; ; ) {
      pow2 = round(pow2.times(x2), wpr);
      denominator = denominator.times(++i);
      t = sum.plus(divide(pow2, denominator, wpr));
      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        while (k2--) sum = round(sum.times(sum), wpr);
        Ctor.precision = pr;
        return sd == null ? (external = true, round(sum, pr)) : sum;
      }
      sum = t;
    }
  }
  function getBase10Exponent(x2) {
    var e = x2.e * LOG_BASE, w = x2.d[0];
    for (; w >= 10; w /= 10) e++;
    return e;
  }
  function getLn10(Ctor, sd, pr) {
    if (sd > Ctor.LN10.sd()) {
      external = true;
      if (pr) Ctor.precision = pr;
      throw Error(decimalError + "LN10 precision limit exceeded");
    }
    return round(new Ctor(Ctor.LN10), sd);
  }
  function getZeroString(k2) {
    var zs = "";
    for (; k2--; ) zs += "0";
    return zs;
  }
  function ln(y2, sd) {
    var c2, c0, denominator, e, numerator, sum, t, wpr, x2, n = 1, guard = 10, x3 = y2, xd = x3.d, Ctor = x3.constructor, pr = Ctor.precision;
    if (x3.s < 1) throw Error(decimalError + (x3.s ? "NaN" : "-Infinity"));
    if (x3.eq(ONE)) return new Ctor(0);
    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }
    if (x3.eq(10)) {
      if (sd == null) external = true;
      return getLn10(Ctor, wpr);
    }
    wpr += guard;
    Ctor.precision = wpr;
    c2 = digitsToString(xd);
    c0 = c2.charAt(0);
    e = getBase10Exponent(x3);
    if (Math.abs(e) < 15e14) {
      while (c0 < 7 && c0 != 1 || c0 == 1 && c2.charAt(1) > 3) {
        x3 = x3.times(y2);
        c2 = digitsToString(x3.d);
        c0 = c2.charAt(0);
        n++;
      }
      e = getBase10Exponent(x3);
      if (c0 > 1) {
        x3 = new Ctor("0." + c2);
        e++;
      } else {
        x3 = new Ctor(c0 + "." + c2.slice(1));
      }
    } else {
      t = getLn10(Ctor, wpr + 2, pr).times(e + "");
      x3 = ln(new Ctor(c0 + "." + c2.slice(1)), wpr - guard).plus(t);
      Ctor.precision = pr;
      return sd == null ? (external = true, round(x3, pr)) : x3;
    }
    sum = numerator = x3 = divide(x3.minus(ONE), x3.plus(ONE), wpr);
    x2 = round(x3.times(x3), wpr);
    denominator = 3;
    for (; ; ) {
      numerator = round(numerator.times(x2), wpr);
      t = sum.plus(divide(numerator, new Ctor(denominator), wpr));
      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        sum = sum.times(2);
        if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
        sum = divide(sum, new Ctor(n), wpr);
        Ctor.precision = pr;
        return sd == null ? (external = true, round(sum, pr)) : sum;
      }
      sum = t;
      denominator += 2;
    }
  }
  function parseDecimal(x2, str) {
    var e, i, len;
    if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
    if ((i = str.search(/e/i)) > 0) {
      if (e < 0) e = i;
      e += +str.slice(i + 1);
      str = str.substring(0, i);
    } else if (e < 0) {
      e = str.length;
    }
    for (i = 0; str.charCodeAt(i) === 48; ) ++i;
    for (len = str.length; str.charCodeAt(len - 1) === 48; ) --len;
    str = str.slice(i, len);
    if (str) {
      len -= i;
      e = e - i - 1;
      x2.e = mathfloor(e / LOG_BASE);
      x2.d = [];
      i = (e + 1) % LOG_BASE;
      if (e < 0) i += LOG_BASE;
      if (i < len) {
        if (i) x2.d.push(+str.slice(0, i));
        for (len -= LOG_BASE; i < len; ) x2.d.push(+str.slice(i, i += LOG_BASE));
        str = str.slice(i);
        i = LOG_BASE - str.length;
      } else {
        i -= len;
      }
      for (; i--; ) str += "0";
      x2.d.push(+str);
      if (external && (x2.e > MAX_E || x2.e < -MAX_E)) throw Error(exponentOutOfRange + e);
    } else {
      x2.s = 0;
      x2.e = 0;
      x2.d = [0];
    }
    return x2;
  }
  function round(x2, sd, rm) {
    var i, j, k2, n, rd, doRound, w, xdi, xd = x2.d;
    for (n = 1, k2 = xd[0]; k2 >= 10; k2 /= 10) n++;
    i = sd - n;
    if (i < 0) {
      i += LOG_BASE;
      j = sd;
      w = xd[xdi = 0];
    } else {
      xdi = Math.ceil((i + 1) / LOG_BASE);
      k2 = xd.length;
      if (xdi >= k2) return x2;
      w = k2 = xd[xdi];
      for (n = 1; k2 >= 10; k2 /= 10) n++;
      i %= LOG_BASE;
      j = i - LOG_BASE + n;
    }
    if (rm !== void 0) {
      k2 = mathpow(10, n - j - 1);
      rd = w / k2 % 10 | 0;
      doRound = sd < 0 || xd[xdi + 1] !== void 0 || w % k2;
      doRound = rm < 4 ? (rd || doRound) && (rm == 0 || rm == (x2.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || doRound || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (i > 0 ? j > 0 ? w / mathpow(10, n - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x2.s < 0 ? 8 : 7));
    }
    if (sd < 1 || !xd[0]) {
      if (doRound) {
        k2 = getBase10Exponent(x2);
        xd.length = 1;
        sd = sd - k2 - 1;
        xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
        x2.e = mathfloor(-sd / LOG_BASE) || 0;
      } else {
        xd.length = 1;
        xd[0] = x2.e = x2.s = 0;
      }
      return x2;
    }
    if (i == 0) {
      xd.length = xdi;
      k2 = 1;
      xdi--;
    } else {
      xd.length = xdi + 1;
      k2 = mathpow(10, LOG_BASE - i);
      xd[xdi] = j > 0 ? (w / mathpow(10, n - j) % mathpow(10, j) | 0) * k2 : 0;
    }
    if (doRound) {
      for (; ; ) {
        if (xdi == 0) {
          if ((xd[0] += k2) == BASE) {
            xd[0] = 1;
            ++x2.e;
          }
          break;
        } else {
          xd[xdi] += k2;
          if (xd[xdi] != BASE) break;
          xd[xdi--] = 0;
          k2 = 1;
        }
      }
    }
    for (i = xd.length; xd[--i] === 0; ) xd.pop();
    if (external && (x2.e > MAX_E || x2.e < -MAX_E)) {
      throw Error(exponentOutOfRange + getBase10Exponent(x2));
    }
    return x2;
  }
  function subtract(x2, y2) {
    var d, e, i, j, k2, len, xd, xe, xLTy, yd, Ctor = x2.constructor, pr = Ctor.precision;
    if (!x2.s || !y2.s) {
      if (y2.s) y2.s = -y2.s;
      else y2 = new Ctor(x2);
      return external ? round(y2, pr) : y2;
    }
    xd = x2.d;
    yd = y2.d;
    e = y2.e;
    xe = x2.e;
    xd = xd.slice();
    k2 = xe - e;
    if (k2) {
      xLTy = k2 < 0;
      if (xLTy) {
        d = xd;
        k2 = -k2;
        len = yd.length;
      } else {
        d = yd;
        e = xe;
        len = xd.length;
      }
      i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
      if (k2 > i) {
        k2 = i;
        d.length = 1;
      }
      d.reverse();
      for (i = k2; i--; ) d.push(0);
      d.reverse();
    } else {
      i = xd.length;
      len = yd.length;
      xLTy = i < len;
      if (xLTy) len = i;
      for (i = 0; i < len; i++) {
        if (xd[i] != yd[i]) {
          xLTy = xd[i] < yd[i];
          break;
        }
      }
      k2 = 0;
    }
    if (xLTy) {
      d = xd;
      xd = yd;
      yd = d;
      y2.s = -y2.s;
    }
    len = xd.length;
    for (i = yd.length - len; i > 0; --i) xd[len++] = 0;
    for (i = yd.length; i > k2; ) {
      if (xd[--i] < yd[i]) {
        for (j = i; j && xd[--j] === 0; ) xd[j] = BASE - 1;
        --xd[j];
        xd[i] += BASE;
      }
      xd[i] -= yd[i];
    }
    for (; xd[--len] === 0; ) xd.pop();
    for (; xd[0] === 0; xd.shift()) --e;
    if (!xd[0]) return new Ctor(0);
    y2.d = xd;
    y2.e = e;
    return external ? round(y2, pr) : y2;
  }
  function toString(x2, isExp, sd) {
    var k2, e = getBase10Exponent(x2), str = digitsToString(x2.d), len = str.length;
    if (isExp) {
      if (sd && (k2 = sd - len) > 0) {
        str = str.charAt(0) + "." + str.slice(1) + getZeroString(k2);
      } else if (len > 1) {
        str = str.charAt(0) + "." + str.slice(1);
      }
      str = str + (e < 0 ? "e" : "e+") + e;
    } else if (e < 0) {
      str = "0." + getZeroString(-e - 1) + str;
      if (sd && (k2 = sd - len) > 0) str += getZeroString(k2);
    } else if (e >= len) {
      str += getZeroString(e + 1 - len);
      if (sd && (k2 = sd - e - 1) > 0) str = str + "." + getZeroString(k2);
    } else {
      if ((k2 = e + 1) < len) str = str.slice(0, k2) + "." + str.slice(k2);
      if (sd && (k2 = sd - len) > 0) {
        if (e + 1 === len) str += ".";
        str += getZeroString(k2);
      }
    }
    return x2.s < 0 ? "-" + str : str;
  }
  function truncate(arr, len) {
    if (arr.length > len) {
      arr.length = len;
      return true;
    }
  }
  function clone(obj) {
    var i, p, ps;
    function Decimal2(value) {
      var x2 = this;
      if (!(x2 instanceof Decimal2)) return new Decimal2(value);
      x2.constructor = Decimal2;
      if (value instanceof Decimal2) {
        x2.s = value.s;
        x2.e = value.e;
        x2.d = (value = value.d) ? value.slice() : value;
        return;
      }
      if (typeof value === "number") {
        if (value * 0 !== 0) {
          throw Error(invalidArgument + value);
        }
        if (value > 0) {
          x2.s = 1;
        } else if (value < 0) {
          value = -value;
          x2.s = -1;
        } else {
          x2.s = 0;
          x2.e = 0;
          x2.d = [0];
          return;
        }
        if (value === ~~value && value < 1e7) {
          x2.e = 0;
          x2.d = [value];
          return;
        }
        return parseDecimal(x2, value.toString());
      } else if (typeof value !== "string") {
        throw Error(invalidArgument + value);
      }
      if (value.charCodeAt(0) === 45) {
        value = value.slice(1);
        x2.s = -1;
      } else {
        x2.s = 1;
      }
      if (isDecimal.test(value)) parseDecimal(x2, value);
      else throw Error(invalidArgument + value);
    }
    Decimal2.prototype = P;
    Decimal2.ROUND_UP = 0;
    Decimal2.ROUND_DOWN = 1;
    Decimal2.ROUND_CEIL = 2;
    Decimal2.ROUND_FLOOR = 3;
    Decimal2.ROUND_HALF_UP = 4;
    Decimal2.ROUND_HALF_DOWN = 5;
    Decimal2.ROUND_HALF_EVEN = 6;
    Decimal2.ROUND_HALF_CEIL = 7;
    Decimal2.ROUND_HALF_FLOOR = 8;
    Decimal2.clone = clone;
    Decimal2.config = Decimal2.set = config;
    if (obj === void 0) obj = {};
    if (obj) {
      ps = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
      for (i = 0; i < ps.length; ) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
    }
    Decimal2.config(obj);
    return Decimal2;
  }
  function config(obj) {
    if (!obj || typeof obj !== "object") {
      throw Error(decimalError + "Object expected");
    }
    var i, p, v, ps = [
      "precision",
      1,
      MAX_DIGITS,
      "rounding",
      0,
      8,
      "toExpNeg",
      -1 / 0,
      0,
      "toExpPos",
      0,
      1 / 0
    ];
    for (i = 0; i < ps.length; i += 3) {
      if ((v = obj[p = ps[i]]) !== void 0) {
        if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
        else throw Error(invalidArgument + p + ": " + v);
      }
    }
    if ((v = obj[p = "LN10"]) !== void 0) {
      if (v == Math.LN10) this[p] = new this(v);
      else throw Error(invalidArgument + p + ": " + v);
    }
    return this;
  }
  var Decimal = clone(defaults);
  ONE = new Decimal(1);
  const Decimal$1 = Decimal;
  var identity = (i) => i;
  var PLACE_HOLDER = {};
  var isPlaceHolder = (val) => val === PLACE_HOLDER;
  var curry0 = (fn) => function _curried() {
    if (arguments.length === 0 || arguments.length === 1 && isPlaceHolder(arguments.length <= 0 ? void 0 : arguments[0])) {
      return _curried;
    }
    return fn(...arguments);
  };
  var curryN = (n, fn) => {
    if (n === 1) {
      return fn;
    }
    return curry0(function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var argsLength = args.filter((arg) => arg !== PLACE_HOLDER).length;
      if (argsLength >= n) {
        return fn(...args);
      }
      return curryN(n - argsLength, curry0(function() {
        for (var _len2 = arguments.length, restArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          restArgs[_key2] = arguments[_key2];
        }
        var newArgs = args.map((arg) => isPlaceHolder(arg) ? restArgs.shift() : arg);
        return fn(...newArgs, ...restArgs);
      }));
    });
  };
  var curry = (fn) => curryN(fn.length, fn);
  var range = (begin, end) => {
    var arr = [];
    for (var i = begin; i < end; ++i) {
      arr[i - begin] = i;
    }
    return arr;
  };
  var map = curry((fn, arr) => {
    if (Array.isArray(arr)) {
      return arr.map(fn);
    }
    return Object.keys(arr).map((key) => arr[key]).map(fn);
  });
  var compose = function compose2() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    if (!args.length) {
      return identity;
    }
    var fns = args.reverse();
    var firstFn = fns[0];
    var tailsFn = fns.slice(1);
    return function() {
      return tailsFn.reduce((res, fn) => fn(res), firstFn(...arguments));
    };
  };
  var reverse = (arr) => {
    if (Array.isArray(arr)) {
      return arr.reverse();
    }
    return arr.split("").reverse().join("");
  };
  function getDigitCount(value) {
    var result;
    if (value === 0) {
      result = 1;
    } else {
      result = Math.floor(new Decimal$1(value).abs().log(10).toNumber()) + 1;
    }
    return result;
  }
  function rangeStep(start, end, step) {
    var num = new Decimal$1(start);
    var i = 0;
    var result = [];
    while (num.lt(end) && i < 1e5) {
      result.push(num.toNumber());
      num = num.add(step);
      i++;
    }
    return result;
  }
  var getValidInterval = (_ref2) => {
    var [min2, max2] = _ref2;
    var [validMin, validMax] = [min2, max2];
    if (min2 > max2) {
      [validMin, validMax] = [max2, min2];
    }
    return [validMin, validMax];
  };
  var getFormatStep = (roughStep, allowDecimals, correctionFactor) => {
    if (roughStep.lte(0)) {
      return new Decimal$1(0);
    }
    var digitCount = getDigitCount(roughStep.toNumber());
    var digitCountValue = new Decimal$1(10).pow(digitCount);
    var stepRatio = roughStep.div(digitCountValue);
    var stepRatioScale = digitCount !== 1 ? 0.05 : 0.1;
    var amendStepRatio = new Decimal$1(Math.ceil(stepRatio.div(stepRatioScale).toNumber())).add(correctionFactor).mul(stepRatioScale);
    var formatStep = amendStepRatio.mul(digitCountValue);
    return allowDecimals ? new Decimal$1(formatStep.toNumber()) : new Decimal$1(Math.ceil(formatStep.toNumber()));
  };
  var getTickOfSingleValue = (value, tickCount, allowDecimals) => {
    var step = new Decimal$1(1);
    var middle = new Decimal$1(value);
    if (!middle.isint() && allowDecimals) {
      var absVal = Math.abs(value);
      if (absVal < 1) {
        step = new Decimal$1(10).pow(getDigitCount(value) - 1);
        middle = new Decimal$1(Math.floor(middle.div(step).toNumber())).mul(step);
      } else if (absVal > 1) {
        middle = new Decimal$1(Math.floor(value));
      }
    } else if (value === 0) {
      middle = new Decimal$1(Math.floor((tickCount - 1) / 2));
    } else if (!allowDecimals) {
      middle = new Decimal$1(Math.floor(value));
    }
    var middleIndex = Math.floor((tickCount - 1) / 2);
    var fn = compose(map((n) => middle.add(new Decimal$1(n - middleIndex).mul(step)).toNumber()), range);
    return fn(0, tickCount);
  };
  var _calculateStep = function calculateStep(min2, max2, tickCount, allowDecimals) {
    var correctionFactor = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((max2 - min2) / (tickCount - 1))) {
      return {
        step: new Decimal$1(0),
        tickMin: new Decimal$1(0),
        tickMax: new Decimal$1(0)
      };
    }
    var step = getFormatStep(new Decimal$1(max2).sub(min2).div(tickCount - 1), allowDecimals, correctionFactor);
    var middle;
    if (min2 <= 0 && max2 >= 0) {
      middle = new Decimal$1(0);
    } else {
      middle = new Decimal$1(min2).add(max2).div(2);
      middle = middle.sub(new Decimal$1(middle).mod(step));
    }
    var belowCount = Math.ceil(middle.sub(min2).div(step).toNumber());
    var upCount = Math.ceil(new Decimal$1(max2).sub(middle).div(step).toNumber());
    var scaleCount = belowCount + upCount + 1;
    if (scaleCount > tickCount) {
      return _calculateStep(min2, max2, tickCount, allowDecimals, correctionFactor + 1);
    }
    if (scaleCount < tickCount) {
      upCount = max2 > 0 ? upCount + (tickCount - scaleCount) : upCount;
      belowCount = max2 > 0 ? belowCount : belowCount + (tickCount - scaleCount);
    }
    return {
      step,
      tickMin: middle.sub(new Decimal$1(belowCount).mul(step)),
      tickMax: middle.add(new Decimal$1(upCount).mul(step))
    };
  };
  var getNiceTickValues = function getNiceTickValues2(_ref2) {
    var [min2, max2] = _ref2;
    var tickCount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6;
    var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    var count = Math.max(tickCount, 2);
    var [cormin, cormax] = getValidInterval([min2, max2]);
    if (cormin === -Infinity || cormax === Infinity) {
      var _values = cormax === Infinity ? [cormin, ...range(0, tickCount - 1).map(() => Infinity)] : [...range(0, tickCount - 1).map(() => -Infinity), cormax];
      return min2 > max2 ? reverse(_values) : _values;
    }
    if (cormin === cormax) {
      return getTickOfSingleValue(cormin, tickCount, allowDecimals);
    }
    var {
      step,
      tickMin,
      tickMax
    } = _calculateStep(cormin, cormax, count, allowDecimals, 0);
    var values = rangeStep(tickMin, tickMax.add(new Decimal$1(0.1).mul(step)), step);
    return min2 > max2 ? reverse(values) : values;
  };
  var getTickValuesFixedDomain = function getTickValuesFixedDomain2(_ref3, tickCount) {
    var [min2, max2] = _ref3;
    var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    var [cormin, cormax] = getValidInterval([min2, max2]);
    if (cormin === -Infinity || cormax === Infinity) {
      return [min2, max2];
    }
    if (cormin === cormax) {
      return [cormin];
    }
    var count = Math.max(tickCount, 2);
    var step = getFormatStep(new Decimal$1(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
    var values = [...rangeStep(new Decimal$1(cormin), new Decimal$1(cormax), step), cormax];
    if (allowDecimals === false) {
      values = values.map((value) => Math.round(value));
    }
    return min2 > max2 ? reverse(values) : values;
  };
  var selectRootMaxBarSize = (state) => state.rootProps.maxBarSize;
  var selectBarGap = (state) => state.rootProps.barGap;
  var selectBarCategoryGap = (state) => state.rootProps.barCategoryGap;
  var selectRootBarSize = (state) => state.rootProps.barSize;
  var selectStackOffsetType = (state) => state.rootProps.stackOffset;
  var selectReverseStackOrder = (state) => state.rootProps.reverseStackOrder;
  var selectChartName = (state) => state.options.chartName;
  var selectSyncId = (state) => state.rootProps.syncId;
  var selectSyncMethod = (state) => state.rootProps.syncMethod;
  var selectEventEmitter = (state) => state.options.eventEmitter;
  var DefaultZIndexes = {
    /**
     * CartesianGrid and PolarGrid
     */
    grid: -100,
    /**
     * Background of Bar and RadialBar.
     * This is not visible by default but can be enabled by setting background={true} on Bar or RadialBar.
     */
    barBackground: -50,
    /*
     * other chart elements or custom elements without specific zIndex
     * render in here, at zIndex 0
     */
    /**
     * Area, Pie, Radar, and ReferenceArea
     */
    area: 100,
    /**
     * Cursor is embedded inside Tooltip and controlled by it.
     * The Tooltip itself has a separate portal and is not included in the zIndex system;
     * Cursor is the decoration inside the chart area. CursorRectangle is a rectangle box.
     * It renders below bar so that in a stacked bar chart the cursor rectangle does not hide the other bars.
     */
    cursorRectangle: 200,
    /**
     * Bar and RadialBar
     */
    bar: 300,
    /**
     * Line and ReferenceLine, and ErrorBor
     */
    line: 400,
    /**
     * XAxis and YAxis and PolarAngleAxis and PolarRadiusAxis ticks and lines and children
     */
    axis: 500,
    /**
     * Scatter and ReferenceDot,
     * and Dots of Line and Area and Radar if they have dot=true
     */
    scatter: 600,
    /**
     * Hovering over a Bar or RadialBar renders a highlight rectangle
     */
    activeBar: 1e3,
    /**
     * Cursor is embedded inside Tooltip and controlled by it.
     * The Tooltip itself has a separate portal and is not included in the zIndex system;
     * Cursor is the decoration inside the chart area, usually a cross or a box.
     * CursorLine is a line cursor rendered in Line, Area, Scatter, Radar charts.
     * It renders above the Line and Scatter so that it is always visible.
     * It renders below active dot so that the dot is always visible and shows the current point.
     * We're also assuming that the active dot is small enough that it does not fully cover the cursor line.
     *
     * This also applies to the radial cursor in RadialBarChart.
     */
    cursorLine: 1100,
    /**
     * Hovering over a Point in Line, Area, Scatter, Radar renders a highlight dot
     */
    activeDot: 1200,
    /**
     * LabelList and Label, including Axis labels
     */
    label: 2e3
  };
  var defaultPolarAngleAxisProps = {
    allowDuplicatedCategory: true,
    // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
    angleAxisId: 0,
    reversed: false,
    scale: "auto",
    tick: true,
    type: "category"
  };
  var defaultPolarRadiusAxisProps = {
    allowDataOverflow: false,
    allowDuplicatedCategory: true,
    radiusAxisId: 0,
    scale: "auto",
    tick: true,
    tickCount: 5,
    type: "number"
  };
  var combineAxisRangeWithReverse = (axisSettings, axisRange) => {
    if (!axisSettings || !axisRange) {
      return void 0;
    }
    if (axisSettings !== null && axisSettings !== void 0 && axisSettings.reversed) {
      return [axisRange[1], axisRange[0]];
    }
    return axisRange;
  };
  var implicitAngleAxis = {
    allowDataOverflow: false,
    allowDecimals: false,
    allowDuplicatedCategory: false,
    // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
    dataKey: void 0,
    domain: void 0,
    id: defaultPolarAngleAxisProps.angleAxisId,
    includeHidden: false,
    name: void 0,
    reversed: defaultPolarAngleAxisProps.reversed,
    scale: defaultPolarAngleAxisProps.scale,
    tick: defaultPolarAngleAxisProps.tick,
    tickCount: void 0,
    ticks: void 0,
    type: defaultPolarAngleAxisProps.type,
    unit: void 0
  };
  var implicitRadiusAxis = {
    allowDataOverflow: defaultPolarRadiusAxisProps.allowDataOverflow,
    allowDecimals: false,
    allowDuplicatedCategory: defaultPolarRadiusAxisProps.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: defaultPolarRadiusAxisProps.radiusAxisId,
    includeHidden: false,
    name: void 0,
    reversed: false,
    scale: defaultPolarRadiusAxisProps.scale,
    tick: defaultPolarRadiusAxisProps.tick,
    tickCount: defaultPolarRadiusAxisProps.tickCount,
    ticks: void 0,
    type: defaultPolarRadiusAxisProps.type,
    unit: void 0
  };
  var implicitRadialBarAngleAxis = {
    allowDataOverflow: false,
    allowDecimals: false,
    allowDuplicatedCategory: defaultPolarAngleAxisProps.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: defaultPolarAngleAxisProps.angleAxisId,
    includeHidden: false,
    name: void 0,
    reversed: false,
    scale: defaultPolarAngleAxisProps.scale,
    tick: defaultPolarAngleAxisProps.tick,
    tickCount: void 0,
    ticks: void 0,
    type: "number",
    unit: void 0
  };
  var implicitRadialBarRadiusAxis = {
    allowDataOverflow: defaultPolarRadiusAxisProps.allowDataOverflow,
    allowDecimals: false,
    allowDuplicatedCategory: defaultPolarRadiusAxisProps.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: defaultPolarRadiusAxisProps.radiusAxisId,
    includeHidden: false,
    name: void 0,
    reversed: false,
    scale: defaultPolarRadiusAxisProps.scale,
    tick: defaultPolarRadiusAxisProps.tick,
    tickCount: defaultPolarRadiusAxisProps.tickCount,
    ticks: void 0,
    type: "category",
    unit: void 0
  };
  var selectAngleAxis = (state, angleAxisId) => {
    if (state.polarAxis.angleAxis[angleAxisId] != null) {
      return state.polarAxis.angleAxis[angleAxisId];
    }
    if (state.layout.layoutType === "radial") {
      return implicitRadialBarAngleAxis;
    }
    return implicitAngleAxis;
  };
  var selectRadiusAxis = (state, radiusAxisId) => {
    if (state.polarAxis.radiusAxis[radiusAxisId] != null) {
      return state.polarAxis.radiusAxis[radiusAxisId];
    }
    if (state.layout.layoutType === "radial") {
      return implicitRadialBarRadiusAxis;
    }
    return implicitRadiusAxis;
  };
  var selectPolarOptions = (state) => state.polarOptions;
  var selectMaxRadius = createSelector([selectChartWidth, selectChartHeight, selectChartOffsetInternal], getMaxRadius);
  var selectInnerRadius = createSelector([selectPolarOptions, selectMaxRadius], (polarChartOptions, maxRadius) => {
    if (polarChartOptions == null) {
      return void 0;
    }
    return getPercentValue(polarChartOptions.innerRadius, maxRadius, 0);
  });
  var selectOuterRadius = createSelector([selectPolarOptions, selectMaxRadius], (polarChartOptions, maxRadius) => {
    if (polarChartOptions == null) {
      return void 0;
    }
    return getPercentValue(polarChartOptions.outerRadius, maxRadius, maxRadius * 0.8);
  });
  var combineAngleAxisRange = (polarOptions) => {
    if (polarOptions == null) {
      return [0, 0];
    }
    var {
      startAngle,
      endAngle
    } = polarOptions;
    return [startAngle, endAngle];
  };
  var selectAngleAxisRange = createSelector([selectPolarOptions], combineAngleAxisRange);
  createSelector([selectAngleAxis, selectAngleAxisRange], combineAxisRangeWithReverse);
  var selectRadiusAxisRange = createSelector([selectMaxRadius, selectInnerRadius, selectOuterRadius], (maxRadius, innerRadius, outerRadius) => {
    if (maxRadius == null || innerRadius == null || outerRadius == null) {
      return void 0;
    }
    return [innerRadius, outerRadius];
  });
  createSelector([selectRadiusAxis, selectRadiusAxisRange], combineAxisRangeWithReverse);
  var selectPolarViewBox = createSelector([selectChartLayout, selectPolarOptions, selectInnerRadius, selectOuterRadius, selectChartWidth, selectChartHeight], (layout, polarOptions, innerRadius, outerRadius, width, height) => {
    if (layout !== "centric" && layout !== "radial" || polarOptions == null || innerRadius == null || outerRadius == null) {
      return void 0;
    }
    var {
      cx,
      cy,
      startAngle,
      endAngle
    } = polarOptions;
    return {
      cx: getPercentValue(cx, width, width / 2),
      cy: getPercentValue(cy, height, height / 2),
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      clockWise: false
      // this property look useful, why not use it?
    };
  });
  var pickAxisType = (_state, axisType) => axisType;
  var pickAxisId = (_state, _axisType, axisId) => axisId;
  function getStackSeriesIdentifier(graphicalItem) {
    return graphicalItem === null || graphicalItem === void 0 ? void 0 : graphicalItem.id;
  }
  function combineDisplayedStackedData(stackedGraphicalItems, _ref2, tooltipAxisSettings) {
    var {
      chartData = []
    } = _ref2;
    var {
      allowDuplicatedCategory,
      dataKey: tooltipDataKey
    } = tooltipAxisSettings;
    var knownItemsByDataKey = /* @__PURE__ */ new Map();
    stackedGraphicalItems.forEach((item) => {
      var _item$data;
      var resolvedData = (_item$data = item.data) !== null && _item$data !== void 0 ? _item$data : chartData;
      if (resolvedData == null || resolvedData.length === 0) {
        return;
      }
      var stackIdentifier = getStackSeriesIdentifier(item);
      resolvedData.forEach((entry, index) => {
        var tooltipValue = tooltipDataKey == null || allowDuplicatedCategory ? index : String(getValueByDataKey(entry, tooltipDataKey, null));
        var numericValue = getValueByDataKey(entry, item.dataKey, 0);
        var curr;
        if (knownItemsByDataKey.has(tooltipValue)) {
          curr = knownItemsByDataKey.get(tooltipValue);
        } else {
          curr = {};
        }
        Object.assign(curr, {
          [stackIdentifier]: numericValue
        });
        knownItemsByDataKey.set(tooltipValue, curr);
      });
    });
    return Array.from(knownItemsByDataKey.values());
  }
  function isStacked(graphicalItem) {
    return graphicalItem.stackId != null && graphicalItem.dataKey != null;
  }
  var numberDomainEqualityCheck = (a2, b) => {
    if (a2 === b) {
      return true;
    }
    if (a2 == null || b == null) {
      return false;
    }
    return a2[0] === b[0] && a2[1] === b[1];
  };
  function emptyArraysAreEqualCheck(a2, b) {
    if (Array.isArray(a2) && Array.isArray(b) && a2.length === 0 && b.length === 0) {
      return true;
    }
    return a2 === b;
  }
  function arrayContentsAreEqualCheck(a2, b) {
    if (a2.length === b.length) {
      for (var i = 0; i < a2.length; i++) {
        if (a2[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  var selectTooltipAxisType = (state) => {
    var layout = selectChartLayout(state);
    if (layout === "horizontal") {
      return "xAxis";
    }
    if (layout === "vertical") {
      return "yAxis";
    }
    if (layout === "centric") {
      return "angleAxis";
    }
    return "radiusAxis";
  };
  var selectTooltipAxisId = (state) => state.tooltip.settings.axisId;
  function ownKeys$m(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$m(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$m(Object(t), true).forEach(function(r3) {
        _defineProperty$o(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$m(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$o(e, r2, t) {
    return (r2 = _toPropertyKey$o(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$o(t) {
    var i = _toPrimitive$o(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$o(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var defaultNumericDomain = [0, "auto"];
  var implicitXAxis = {
    allowDataOverflow: false,
    allowDecimals: true,
    allowDuplicatedCategory: true,
    angle: 0,
    dataKey: void 0,
    domain: void 0,
    height: 30,
    hide: true,
    id: 0,
    includeHidden: false,
    interval: "preserveEnd",
    minTickGap: 5,
    mirror: false,
    name: void 0,
    orientation: "bottom",
    padding: {
      left: 0,
      right: 0
    },
    reversed: false,
    scale: "auto",
    tick: true,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: "category",
    unit: void 0
  };
  var selectXAxisSettingsNoDefaults = (state, axisId) => {
    return state.cartesianAxis.xAxis[axisId];
  };
  var selectXAxisSettings = (state, axisId) => {
    var axis = selectXAxisSettingsNoDefaults(state, axisId);
    if (axis == null) {
      return implicitXAxis;
    }
    return axis;
  };
  var implicitYAxis = {
    allowDataOverflow: false,
    allowDecimals: true,
    allowDuplicatedCategory: true,
    angle: 0,
    dataKey: void 0,
    domain: defaultNumericDomain,
    hide: true,
    id: 0,
    includeHidden: false,
    interval: "preserveEnd",
    minTickGap: 5,
    mirror: false,
    name: void 0,
    orientation: "left",
    padding: {
      top: 0,
      bottom: 0
    },
    reversed: false,
    scale: "auto",
    tick: true,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: "number",
    unit: void 0,
    width: DEFAULT_Y_AXIS_WIDTH
  };
  var selectYAxisSettingsNoDefaults = (state, axisId) => {
    return state.cartesianAxis.yAxis[axisId];
  };
  var selectYAxisSettings = (state, axisId) => {
    var axis = selectYAxisSettingsNoDefaults(state, axisId);
    if (axis == null) {
      return implicitYAxis;
    }
    return axis;
  };
  var implicitZAxis = {
    domain: [0, "auto"],
    includeHidden: false,
    reversed: false,
    allowDataOverflow: false,
    allowDuplicatedCategory: false,
    dataKey: void 0,
    id: 0,
    name: "",
    range: [64, 64],
    scale: "auto",
    type: "number",
    unit: ""
  };
  var selectZAxisSettings = (state, axisId) => {
    var axis = state.cartesianAxis.zAxis[axisId];
    if (axis == null) {
      return implicitZAxis;
    }
    return axis;
  };
  var selectBaseAxis = (state, axisType, axisId) => {
    switch (axisType) {
      case "xAxis": {
        return selectXAxisSettings(state, axisId);
      }
      case "yAxis": {
        return selectYAxisSettings(state, axisId);
      }
      case "zAxis": {
        return selectZAxisSettings(state, axisId);
      }
      case "angleAxis": {
        return selectAngleAxis(state, axisId);
      }
      case "radiusAxis": {
        return selectRadiusAxis(state, axisId);
      }
      default:
        throw new Error("Unexpected axis type: ".concat(axisType));
    }
  };
  var selectCartesianAxisSettings = (state, axisType, axisId) => {
    switch (axisType) {
      case "xAxis": {
        return selectXAxisSettings(state, axisId);
      }
      case "yAxis": {
        return selectYAxisSettings(state, axisId);
      }
      default:
        throw new Error("Unexpected axis type: ".concat(axisType));
    }
  };
  var selectAxisSettings = (state, axisType, axisId) => {
    switch (axisType) {
      case "xAxis": {
        return selectXAxisSettings(state, axisId);
      }
      case "yAxis": {
        return selectYAxisSettings(state, axisId);
      }
      case "angleAxis": {
        return selectAngleAxis(state, axisId);
      }
      case "radiusAxis": {
        return selectRadiusAxis(state, axisId);
      }
      default:
        throw new Error("Unexpected axis type: ".concat(axisType));
    }
  };
  var selectHasBar = (state) => state.graphicalItems.cartesianItems.some((item) => item.type === "bar") || state.graphicalItems.polarItems.some((item) => item.type === "radialBar");
  function itemAxisPredicate(axisType, axisId) {
    return (item) => {
      switch (axisType) {
        case "xAxis":
          return "xAxisId" in item && item.xAxisId === axisId;
        case "yAxis":
          return "yAxisId" in item && item.yAxisId === axisId;
        case "zAxis":
          return "zAxisId" in item && item.zAxisId === axisId;
        case "angleAxis":
          return "angleAxisId" in item && item.angleAxisId === axisId;
        case "radiusAxis":
          return "radiusAxisId" in item && item.radiusAxisId === axisId;
        default:
          return false;
      }
    };
  }
  var selectUnfilteredCartesianItems = (state) => state.graphicalItems.cartesianItems;
  var selectAxisPredicate$1 = createSelector([pickAxisType, pickAxisId], itemAxisPredicate);
  var combineGraphicalItemsSettings = (graphicalItems, axisSettings, axisPredicate) => graphicalItems.filter(axisPredicate).filter((item) => {
    if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.includeHidden) === true) {
      return true;
    }
    return !item.hide;
  });
  var selectCartesianItemsSettings = createSelector([selectUnfilteredCartesianItems, selectBaseAxis, selectAxisPredicate$1], combineGraphicalItemsSettings, {
    memoizeOptions: {
      resultEqualityCheck: emptyArraysAreEqualCheck
    }
  });
  var selectStackedCartesianItemsSettings = createSelector([selectCartesianItemsSettings], (cartesianItems) => {
    return cartesianItems.filter((item) => item.type === "area" || item.type === "bar").filter(isStacked);
  });
  var filterGraphicalNotStackedItems = (cartesianItems) => cartesianItems.filter((item) => !("stackId" in item) || item.stackId === void 0);
  var selectCartesianItemsSettingsExceptStacked = createSelector([selectCartesianItemsSettings], filterGraphicalNotStackedItems);
  var combineGraphicalItemsData = (cartesianItems) => cartesianItems.map((item) => item.data).filter(Boolean).flat(1);
  var selectCartesianGraphicalItemsData = createSelector([selectCartesianItemsSettings], combineGraphicalItemsData, {
    memoizeOptions: {
      resultEqualityCheck: emptyArraysAreEqualCheck
    }
  });
  var combineDisplayedData = (graphicalItemsData, _ref2) => {
    var {
      chartData = [],
      dataStartIndex,
      dataEndIndex
    } = _ref2;
    if (graphicalItemsData.length > 0) {
      return graphicalItemsData;
    }
    return chartData.slice(dataStartIndex, dataEndIndex + 1);
  };
  var selectDisplayedData$1 = createSelector([selectCartesianGraphicalItemsData, selectChartDataWithIndexesIfNotInPanorama], combineDisplayedData);
  var combineAppliedValues = (data, axisSettings, items) => {
    if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.dataKey) != null) {
      return data.map((item) => ({
        value: getValueByDataKey(item, axisSettings.dataKey)
      }));
    }
    if (items.length > 0) {
      return items.map((item) => item.dataKey).flatMap((dataKey) => data.map((entry) => ({
        value: getValueByDataKey(entry, dataKey)
      })));
    }
    return data.map((entry) => ({
      value: entry
    }));
  };
  var selectAllAppliedValues = createSelector([selectDisplayedData$1, selectBaseAxis, selectCartesianItemsSettings], combineAppliedValues);
  function isErrorBarRelevantForAxisType(axisType, errorBar) {
    switch (axisType) {
      case "xAxis":
        return errorBar.direction === "x";
      case "yAxis":
        return errorBar.direction === "y";
      default:
        return false;
    }
  }
  function makeNumber(val) {
    if (isNumOrStr(val) || val instanceof Date) {
      var n = Number(val);
      if (isWellBehavedNumber(n)) {
        return n;
      }
    }
    return void 0;
  }
  function makeDomain(val) {
    if (Array.isArray(val)) {
      var attempt = [makeNumber(val[0]), makeNumber(val[1])];
      if (isWellFormedNumberDomain(attempt)) {
        return attempt;
      }
      return void 0;
    }
    var n = makeNumber(val);
    if (n == null) {
      return void 0;
    }
    return [n, n];
  }
  function onlyAllowNumbers(data) {
    return data.map(makeNumber).filter(isNotNil);
  }
  function getErrorDomainByDataKey(entry, appliedValue, relevantErrorBars) {
    if (!relevantErrorBars || typeof appliedValue !== "number" || isNan(appliedValue)) {
      return [];
    }
    if (!relevantErrorBars.length) {
      return [];
    }
    return onlyAllowNumbers(relevantErrorBars.flatMap((eb) => {
      var errorValue = getValueByDataKey(entry, eb.dataKey);
      var lowBound, highBound;
      if (Array.isArray(errorValue)) {
        [lowBound, highBound] = errorValue;
      } else {
        lowBound = highBound = errorValue;
      }
      if (!isWellBehavedNumber(lowBound) || !isWellBehavedNumber(highBound)) {
        return void 0;
      }
      return [appliedValue - lowBound, appliedValue + highBound];
    }));
  }
  var selectTooltipAxis = (state) => {
    var axisType = selectTooltipAxisType(state);
    var axisId = selectTooltipAxisId(state);
    return selectAxisSettings(state, axisType, axisId);
  };
  var selectTooltipAxisDataKey = createSelector([selectTooltipAxis], (axis) => axis === null || axis === void 0 ? void 0 : axis.dataKey);
  var selectDisplayedStackedData = createSelector([selectStackedCartesianItemsSettings, selectChartDataWithIndexesIfNotInPanorama, selectTooltipAxis], combineDisplayedStackedData);
  var combineStackGroups = (displayedData, items, stackOffsetType, reverseStackOrder) => {
    var initialItemsGroups = {};
    var itemsGroup = items.reduce((acc, item) => {
      if (item.stackId == null) {
        return acc;
      }
      if (acc[item.stackId] == null) {
        acc[item.stackId] = [];
      }
      acc[item.stackId].push(item);
      return acc;
    }, initialItemsGroups);
    return Object.fromEntries(Object.entries(itemsGroup).map((_ref2) => {
      var [stackId, graphicalItems] = _ref2;
      var orderedGraphicalItems = reverseStackOrder ? [...graphicalItems].reverse() : graphicalItems;
      var dataKeys = orderedGraphicalItems.map(getStackSeriesIdentifier);
      return [stackId, {
        // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
        stackedData: getStackedData(displayedData, dataKeys, stackOffsetType),
        graphicalItems: orderedGraphicalItems
      }];
    }));
  };
  var selectStackGroups = createSelector([selectDisplayedStackedData, selectStackedCartesianItemsSettings, selectStackOffsetType, selectReverseStackOrder], combineStackGroups);
  var combineDomainOfStackGroups = (stackGroups, _ref3, axisType, domainFromUserPreference) => {
    var {
      dataStartIndex,
      dataEndIndex
    } = _ref3;
    if (domainFromUserPreference != null) {
      return void 0;
    }
    if (axisType === "zAxis") {
      return void 0;
    }
    var domainOfStackGroups = getDomainOfStackGroups(stackGroups, dataStartIndex, dataEndIndex);
    if (domainOfStackGroups != null && domainOfStackGroups[0] === 0 && domainOfStackGroups[1] === 0) {
      return void 0;
    }
    return domainOfStackGroups;
  };
  var selectAllowsDataOverflow = createSelector([selectBaseAxis], (axisSettings) => axisSettings.allowDataOverflow);
  var getDomainDefinition = (axisSettings) => {
    var _axisSettings$domain;
    if (axisSettings == null || !("domain" in axisSettings)) {
      return defaultNumericDomain;
    }
    if (axisSettings.domain != null) {
      return axisSettings.domain;
    }
    if (axisSettings.ticks != null) {
      if (axisSettings.type === "number") {
        var allValues = onlyAllowNumbers(axisSettings.ticks);
        return [Math.min(...allValues), Math.max(...allValues)];
      }
      if (axisSettings.type === "category") {
        return axisSettings.ticks.map(String);
      }
    }
    return (_axisSettings$domain = axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.domain) !== null && _axisSettings$domain !== void 0 ? _axisSettings$domain : defaultNumericDomain;
  };
  var selectDomainDefinition = createSelector([selectBaseAxis], getDomainDefinition);
  var selectDomainFromUserPreference = createSelector([selectDomainDefinition, selectAllowsDataOverflow], numericalDomainSpecifiedWithoutRequiringData);
  var selectDomainOfStackGroups = createSelector([selectStackGroups, selectChartDataWithIndexes, pickAxisType, selectDomainFromUserPreference], combineDomainOfStackGroups, {
    memoizeOptions: {
      resultEqualityCheck: numberDomainEqualityCheck
    }
  });
  var selectAllErrorBarSettings = (state) => state.errorBars;
  var combineRelevantErrorBarSettings = (cartesianItemsSettings, allErrorBarSettings, axisType) => {
    return cartesianItemsSettings.flatMap((item) => {
      return allErrorBarSettings[item.id];
    }).filter(Boolean).filter((e) => {
      return isErrorBarRelevantForAxisType(axisType, e);
    });
  };
  var mergeDomains = function mergeDomains2() {
    for (var _len = arguments.length, domains = new Array(_len), _key = 0; _key < _len; _key++) {
      domains[_key] = arguments[_key];
    }
    var allDomains = domains.filter(Boolean);
    if (allDomains.length === 0) {
      return void 0;
    }
    var allValues = allDomains.flat();
    var min2 = Math.min(...allValues);
    var max2 = Math.max(...allValues);
    return [min2, max2];
  };
  var combineDomainOfAllAppliedNumericalValuesIncludingErrorValues = (data, axisSettings, items, errorBars, axisType) => {
    var lowerEnd, upperEnd;
    if (items.length > 0) {
      data.forEach((entry) => {
        items.forEach((item) => {
          var _errorBars$item$id, _axisSettings$dataKey;
          var relevantErrorBars = (_errorBars$item$id = errorBars[item.id]) === null || _errorBars$item$id === void 0 ? void 0 : _errorBars$item$id.filter((errorBar) => isErrorBarRelevantForAxisType(axisType, errorBar));
          var valueByDataKey = getValueByDataKey(entry, (_axisSettings$dataKey = axisSettings.dataKey) !== null && _axisSettings$dataKey !== void 0 ? _axisSettings$dataKey : item.dataKey);
          var errorDomain = getErrorDomainByDataKey(entry, valueByDataKey, relevantErrorBars);
          if (errorDomain.length >= 2) {
            var localLower = Math.min(...errorDomain);
            var localUpper = Math.max(...errorDomain);
            if (lowerEnd == null || localLower < lowerEnd) {
              lowerEnd = localLower;
            }
            if (upperEnd == null || localUpper > upperEnd) {
              upperEnd = localUpper;
            }
          }
          var dataValueDomain = makeDomain(valueByDataKey);
          if (dataValueDomain != null) {
            lowerEnd = lowerEnd == null ? dataValueDomain[0] : Math.min(lowerEnd, dataValueDomain[0]);
            upperEnd = upperEnd == null ? dataValueDomain[1] : Math.max(upperEnd, dataValueDomain[1]);
          }
        });
      });
    }
    if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.dataKey) != null) {
      data.forEach((item) => {
        var dataValueDomain = makeDomain(getValueByDataKey(item, axisSettings.dataKey));
        if (dataValueDomain != null) {
          lowerEnd = lowerEnd == null ? dataValueDomain[0] : Math.min(lowerEnd, dataValueDomain[0]);
          upperEnd = upperEnd == null ? dataValueDomain[1] : Math.max(upperEnd, dataValueDomain[1]);
        }
      });
    }
    if (isWellBehavedNumber(lowerEnd) && isWellBehavedNumber(upperEnd)) {
      return [lowerEnd, upperEnd];
    }
    return void 0;
  };
  var selectDomainOfAllAppliedNumericalValuesIncludingErrorValues$1 = createSelector([selectDisplayedData$1, selectBaseAxis, selectCartesianItemsSettingsExceptStacked, selectAllErrorBarSettings, pickAxisType], combineDomainOfAllAppliedNumericalValuesIncludingErrorValues, {
    memoizeOptions: {
      resultEqualityCheck: numberDomainEqualityCheck
    }
  });
  function onlyAllowNumbersAndStringsAndDates(item) {
    var {
      value
    } = item;
    if (isNumOrStr(value) || value instanceof Date) {
      return value;
    }
    return void 0;
  }
  var computeDomainOfTypeCategory = (allDataSquished, axisSettings, isCategorical) => {
    var categoricalDomain = allDataSquished.map(onlyAllowNumbersAndStringsAndDates).filter((v) => v != null);
    if (isCategorical && (axisSettings.dataKey == null || axisSettings.allowDuplicatedCategory && hasDuplicate(categoricalDomain))) {
      return range$2(0, allDataSquished.length);
    }
    if (axisSettings.allowDuplicatedCategory) {
      return categoricalDomain;
    }
    return Array.from(new Set(categoricalDomain));
  };
  var selectReferenceDots = (state) => state.referenceElements.dots;
  var filterReferenceElements = (elements, axisType, axisId) => {
    return elements.filter((el) => el.ifOverflow === "extendDomain").filter((el) => {
      if (axisType === "xAxis") {
        return el.xAxisId === axisId;
      }
      return el.yAxisId === axisId;
    });
  };
  var selectReferenceDotsByAxis = createSelector([selectReferenceDots, pickAxisType, pickAxisId], filterReferenceElements);
  var selectReferenceAreas = (state) => state.referenceElements.areas;
  var selectReferenceAreasByAxis = createSelector([selectReferenceAreas, pickAxisType, pickAxisId], filterReferenceElements);
  var selectReferenceLines = (state) => state.referenceElements.lines;
  var selectReferenceLinesByAxis = createSelector([selectReferenceLines, pickAxisType, pickAxisId], filterReferenceElements);
  var combineDotsDomain = (dots, axisType) => {
    var allCoords = onlyAllowNumbers(dots.map((dot) => axisType === "xAxis" ? dot.x : dot.y));
    if (allCoords.length === 0) {
      return void 0;
    }
    return [Math.min(...allCoords), Math.max(...allCoords)];
  };
  var selectReferenceDotsDomain = createSelector(selectReferenceDotsByAxis, pickAxisType, combineDotsDomain);
  var combineAreasDomain = (areas, axisType) => {
    var allCoords = onlyAllowNumbers(areas.flatMap((area) => [axisType === "xAxis" ? area.x1 : area.y1, axisType === "xAxis" ? area.x2 : area.y2]));
    if (allCoords.length === 0) {
      return void 0;
    }
    return [Math.min(...allCoords), Math.max(...allCoords)];
  };
  var selectReferenceAreasDomain = createSelector([selectReferenceAreasByAxis, pickAxisType], combineAreasDomain);
  function extractXCoordinates(line) {
    var _line$segment;
    if (line.x != null) {
      return onlyAllowNumbers([line.x]);
    }
    var segmentCoordinates = (_line$segment = line.segment) === null || _line$segment === void 0 ? void 0 : _line$segment.map((s2) => s2.x);
    if (segmentCoordinates == null || segmentCoordinates.length === 0) {
      return [];
    }
    return onlyAllowNumbers(segmentCoordinates);
  }
  function extractYCoordinates(line) {
    var _line$segment2;
    if (line.y != null) {
      return onlyAllowNumbers([line.y]);
    }
    var segmentCoordinates = (_line$segment2 = line.segment) === null || _line$segment2 === void 0 ? void 0 : _line$segment2.map((s2) => s2.y);
    if (segmentCoordinates == null || segmentCoordinates.length === 0) {
      return [];
    }
    return onlyAllowNumbers(segmentCoordinates);
  }
  var combineLinesDomain = (lines, axisType) => {
    var allCoords = lines.flatMap((line) => axisType === "xAxis" ? extractXCoordinates(line) : extractYCoordinates(line));
    if (allCoords.length === 0) {
      return void 0;
    }
    return [Math.min(...allCoords), Math.max(...allCoords)];
  };
  var selectReferenceLinesDomain = createSelector([selectReferenceLinesByAxis, pickAxisType], combineLinesDomain);
  var selectReferenceElementsDomain = createSelector(selectReferenceDotsDomain, selectReferenceLinesDomain, selectReferenceAreasDomain, (dotsDomain, linesDomain, areasDomain) => {
    return mergeDomains(dotsDomain, areasDomain, linesDomain);
  });
  var combineNumericalDomain = (axisSettings, domainDefinition, domainFromUserPreference, domainOfStackGroups, dataAndErrorBarsDomain, referenceElementsDomain, layout, axisType) => {
    if (domainFromUserPreference != null) {
      return domainFromUserPreference;
    }
    var shouldIncludeDomainOfStackGroups = layout === "vertical" && axisType === "xAxis" || layout === "horizontal" && axisType === "yAxis";
    var mergedDomains = shouldIncludeDomainOfStackGroups ? mergeDomains(domainOfStackGroups, referenceElementsDomain, dataAndErrorBarsDomain) : mergeDomains(referenceElementsDomain, dataAndErrorBarsDomain);
    return parseNumericalUserDomain(domainDefinition, mergedDomains, axisSettings.allowDataOverflow);
  };
  var selectNumericalDomain = createSelector([selectBaseAxis, selectDomainDefinition, selectDomainFromUserPreference, selectDomainOfStackGroups, selectDomainOfAllAppliedNumericalValuesIncludingErrorValues$1, selectReferenceElementsDomain, selectChartLayout, pickAxisType], combineNumericalDomain, {
    memoizeOptions: {
      resultEqualityCheck: numberDomainEqualityCheck
    }
  });
  var expandDomain = [0, 1];
  var combineAxisDomain = (axisSettings, layout, displayedData, allAppliedValues, stackOffsetType, axisType, numericalDomain) => {
    if ((axisSettings == null || displayedData == null || displayedData.length === 0) && numericalDomain === void 0) {
      return void 0;
    }
    var {
      dataKey,
      type
    } = axisSettings;
    var isCategorical = isCategoricalAxis(layout, axisType);
    if (isCategorical && dataKey == null) {
      var _displayedData$length;
      return range$2(0, (_displayedData$length = displayedData === null || displayedData === void 0 ? void 0 : displayedData.length) !== null && _displayedData$length !== void 0 ? _displayedData$length : 0);
    }
    if (type === "category") {
      return computeDomainOfTypeCategory(allAppliedValues, axisSettings, isCategorical);
    }
    if (stackOffsetType === "expand") {
      return expandDomain;
    }
    return numericalDomain;
  };
  var selectAxisDomain = createSelector([selectBaseAxis, selectChartLayout, selectDisplayedData$1, selectAllAppliedValues, selectStackOffsetType, pickAxisType, selectNumericalDomain], combineAxisDomain);
  var combineRealScaleType = (axisConfig, layout, hasBar, chartType, axisType) => {
    if (axisConfig == null) {
      return void 0;
    }
    var {
      scale,
      type
    } = axisConfig;
    if (scale === "auto") {
      if (layout === "radial" && axisType === "radiusAxis") {
        return "band";
      }
      if (layout === "radial" && axisType === "angleAxis") {
        return "linear";
      }
      if (type === "category" && chartType && (chartType.indexOf("LineChart") >= 0 || chartType.indexOf("AreaChart") >= 0 || chartType.indexOf("ComposedChart") >= 0 && !hasBar)) {
        return "point";
      }
      if (type === "category") {
        return "band";
      }
      return "linear";
    }
    if (typeof scale === "string") {
      var name = "scale".concat(upperFirst(scale));
      return name in d3Scales ? name : "point";
    }
    return void 0;
  };
  var selectRealScaleType = createSelector([selectBaseAxis, selectChartLayout, selectHasBar, selectChartName, pickAxisType], combineRealScaleType);
  function getD3ScaleFromType(realScaleType) {
    if (realScaleType == null) {
      return void 0;
    }
    if (realScaleType in d3Scales) {
      return d3Scales[realScaleType]();
    }
    var name = "scale".concat(upperFirst(realScaleType));
    if (name in d3Scales) {
      return d3Scales[name]();
    }
    return void 0;
  }
  function combineScaleFunction(axis, realScaleType, axisDomain, axisRange) {
    if (axisDomain == null || axisRange == null) {
      return void 0;
    }
    if (typeof axis.scale === "function") {
      return axis.scale.copy().domain(axisDomain).range(axisRange);
    }
    var d3ScaleFunction = getD3ScaleFromType(realScaleType);
    if (d3ScaleFunction == null) {
      return void 0;
    }
    var scale = d3ScaleFunction.domain(axisDomain).range(axisRange);
    checkDomainOfScale(scale);
    return scale;
  }
  var combineNiceTicks = (axisDomain, axisSettings, realScaleType) => {
    var domainDefinition = getDomainDefinition(axisSettings);
    if (realScaleType !== "auto" && realScaleType !== "linear") {
      return void 0;
    }
    if (axisSettings != null && axisSettings.tickCount && Array.isArray(domainDefinition) && (domainDefinition[0] === "auto" || domainDefinition[1] === "auto") && isWellFormedNumberDomain(axisDomain)) {
      return getNiceTickValues(axisDomain, axisSettings.tickCount, axisSettings.allowDecimals);
    }
    if (axisSettings != null && axisSettings.tickCount && axisSettings.type === "number" && isWellFormedNumberDomain(axisDomain)) {
      return getTickValuesFixedDomain(axisDomain, axisSettings.tickCount, axisSettings.allowDecimals);
    }
    return void 0;
  };
  var selectNiceTicks = createSelector([selectAxisDomain, selectAxisSettings, selectRealScaleType], combineNiceTicks);
  var combineAxisDomainWithNiceTicks = (axisSettings, domain, niceTicks, axisType) => {
    if (
      /*
       * Angle axis for some reason uses nice ticks when rendering axis tick labels,
       * but doesn't use nice ticks for extending domain like all the other axes do.
       * Not really sure why? Is there a good reason,
       * or is it just because someone added support for nice ticks to the other axes and forgot this one?
       */
      axisType !== "angleAxis" && (axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.type) === "number" && isWellFormedNumberDomain(domain) && Array.isArray(niceTicks) && niceTicks.length > 0
    ) {
      var minFromDomain = domain[0];
      var minFromTicks = niceTicks[0];
      var maxFromDomain = domain[1];
      var maxFromTicks = niceTicks[niceTicks.length - 1];
      return [Math.min(minFromDomain, minFromTicks), Math.max(maxFromDomain, maxFromTicks)];
    }
    return domain;
  };
  var selectAxisDomainIncludingNiceTicks = createSelector([selectBaseAxis, selectAxisDomain, selectNiceTicks, pickAxisType], combineAxisDomainWithNiceTicks);
  var selectSmallestDistanceBetweenValues = createSelector(selectAllAppliedValues, selectBaseAxis, (allDataSquished, axisSettings) => {
    if (!axisSettings || axisSettings.type !== "number") {
      return void 0;
    }
    var smallestDistanceBetweenValues = Infinity;
    var sortedValues = Array.from(onlyAllowNumbers(allDataSquished.map((d) => d.value))).sort((a2, b) => a2 - b);
    if (sortedValues.length < 2) {
      return Infinity;
    }
    var diff = sortedValues[sortedValues.length - 1] - sortedValues[0];
    if (diff === 0) {
      return Infinity;
    }
    for (var i = 0; i < sortedValues.length - 1; i++) {
      var distance = sortedValues[i + 1] - sortedValues[i];
      smallestDistanceBetweenValues = Math.min(smallestDistanceBetweenValues, distance);
    }
    return smallestDistanceBetweenValues / diff;
  });
  var selectCalculatedPadding = createSelector(selectSmallestDistanceBetweenValues, selectChartLayout, selectBarCategoryGap, selectChartOffsetInternal, (_1, _2, _3, padding) => padding, (smallestDistanceInPercent, layout, barCategoryGap, offset, padding) => {
    if (!isWellBehavedNumber(smallestDistanceInPercent)) {
      return 0;
    }
    var rangeWidth = layout === "vertical" ? offset.height : offset.width;
    if (padding === "gap") {
      return smallestDistanceInPercent * rangeWidth / 2;
    }
    if (padding === "no-gap") {
      var gap = getPercentValue(barCategoryGap, smallestDistanceInPercent * rangeWidth);
      var halfBand = smallestDistanceInPercent * rangeWidth / 2;
      return halfBand - gap - (halfBand - gap) / rangeWidth * gap;
    }
    return 0;
  });
  var selectCalculatedXAxisPadding = (state, axisId) => {
    var xAxisSettings = selectXAxisSettings(state, axisId);
    if (xAxisSettings == null || typeof xAxisSettings.padding !== "string") {
      return 0;
    }
    return selectCalculatedPadding(state, "xAxis", axisId, xAxisSettings.padding);
  };
  var selectCalculatedYAxisPadding = (state, axisId) => {
    var yAxisSettings = selectYAxisSettings(state, axisId);
    if (yAxisSettings == null || typeof yAxisSettings.padding !== "string") {
      return 0;
    }
    return selectCalculatedPadding(state, "yAxis", axisId, yAxisSettings.padding);
  };
  var selectXAxisPadding = createSelector(selectXAxisSettings, selectCalculatedXAxisPadding, (xAxisSettings, calculated) => {
    var _padding$left, _padding$right;
    if (xAxisSettings == null) {
      return {
        left: 0,
        right: 0
      };
    }
    var {
      padding
    } = xAxisSettings;
    if (typeof padding === "string") {
      return {
        left: calculated,
        right: calculated
      };
    }
    return {
      left: ((_padding$left = padding.left) !== null && _padding$left !== void 0 ? _padding$left : 0) + calculated,
      right: ((_padding$right = padding.right) !== null && _padding$right !== void 0 ? _padding$right : 0) + calculated
    };
  });
  var selectYAxisPadding = createSelector(selectYAxisSettings, selectCalculatedYAxisPadding, (yAxisSettings, calculated) => {
    var _padding$top, _padding$bottom;
    if (yAxisSettings == null) {
      return {
        top: 0,
        bottom: 0
      };
    }
    var {
      padding
    } = yAxisSettings;
    if (typeof padding === "string") {
      return {
        top: calculated,
        bottom: calculated
      };
    }
    return {
      top: ((_padding$top = padding.top) !== null && _padding$top !== void 0 ? _padding$top : 0) + calculated,
      bottom: ((_padding$bottom = padding.bottom) !== null && _padding$bottom !== void 0 ? _padding$bottom : 0) + calculated
    };
  });
  var combineXAxisRange = createSelector([selectChartOffsetInternal, selectXAxisPadding, selectBrushDimensions, selectBrushSettings, (_state, _axisId, isPanorama) => isPanorama], (offset, padding, brushDimensions, _ref4, isPanorama) => {
    var {
      padding: brushPadding
    } = _ref4;
    if (isPanorama) {
      return [brushPadding.left, brushDimensions.width - brushPadding.right];
    }
    return [offset.left + padding.left, offset.left + offset.width - padding.right];
  });
  var combineYAxisRange = createSelector([selectChartOffsetInternal, selectChartLayout, selectYAxisPadding, selectBrushDimensions, selectBrushSettings, (_state, _axisId, isPanorama) => isPanorama], (offset, layout, padding, brushDimensions, _ref5, isPanorama) => {
    var {
      padding: brushPadding
    } = _ref5;
    if (isPanorama) {
      return [brushDimensions.height - brushPadding.bottom, brushPadding.top];
    }
    if (layout === "horizontal") {
      return [offset.top + offset.height - padding.bottom, offset.top + padding.top];
    }
    return [offset.top + padding.top, offset.top + offset.height - padding.bottom];
  });
  var selectAxisRange = (state, axisType, axisId, isPanorama) => {
    var _selectZAxisSettings;
    switch (axisType) {
      case "xAxis":
        return combineXAxisRange(state, axisId, isPanorama);
      case "yAxis":
        return combineYAxisRange(state, axisId, isPanorama);
      case "zAxis":
        return (_selectZAxisSettings = selectZAxisSettings(state, axisId)) === null || _selectZAxisSettings === void 0 ? void 0 : _selectZAxisSettings.range;
      case "angleAxis":
        return selectAngleAxisRange(state);
      case "radiusAxis":
        return selectRadiusAxisRange(state, axisId);
      default:
        return void 0;
    }
  };
  var selectAxisRangeWithReverse = createSelector([selectBaseAxis, selectAxisRange], combineAxisRangeWithReverse);
  var selectAxisScale = createSelector([selectBaseAxis, selectRealScaleType, selectAxisDomainIncludingNiceTicks, selectAxisRangeWithReverse], combineScaleFunction);
  createSelector([selectCartesianItemsSettings, selectAllErrorBarSettings, pickAxisType], combineRelevantErrorBarSettings);
  function compareIds(a2, b) {
    if (a2.id < b.id) {
      return -1;
    }
    if (a2.id > b.id) {
      return 1;
    }
    return 0;
  }
  var pickAxisOrientation = (_state, orientation) => orientation;
  var pickMirror = (_state, _orientation, mirror) => mirror;
  var selectAllXAxesWithOffsetType = createSelector(selectAllXAxes, pickAxisOrientation, pickMirror, (allAxes, orientation, mirror) => allAxes.filter((axis) => axis.orientation === orientation).filter((axis) => axis.mirror === mirror).sort(compareIds));
  var selectAllYAxesWithOffsetType = createSelector(selectAllYAxes, pickAxisOrientation, pickMirror, (allAxes, orientation, mirror) => allAxes.filter((axis) => axis.orientation === orientation).filter((axis) => axis.mirror === mirror).sort(compareIds));
  var getXAxisSize = (offset, axisSettings) => {
    return {
      width: offset.width,
      height: axisSettings.height
    };
  };
  var getYAxisSize = (offset, axisSettings) => {
    var width = typeof axisSettings.width === "number" ? axisSettings.width : DEFAULT_Y_AXIS_WIDTH;
    return {
      width,
      height: offset.height
    };
  };
  var selectXAxisSize = createSelector(selectChartOffsetInternal, selectXAxisSettings, getXAxisSize);
  var combineXAxisPositionStartingPoint = (offset, orientation, chartHeight) => {
    switch (orientation) {
      case "top":
        return offset.top;
      case "bottom":
        return chartHeight - offset.bottom;
      default:
        return 0;
    }
  };
  var combineYAxisPositionStartingPoint = (offset, orientation, chartWidth) => {
    switch (orientation) {
      case "left":
        return offset.left;
      case "right":
        return chartWidth - offset.right;
      default:
        return 0;
    }
  };
  var selectAllXAxesOffsetSteps = createSelector(selectChartHeight, selectChartOffsetInternal, selectAllXAxesWithOffsetType, pickAxisOrientation, pickMirror, (chartHeight, offset, allAxesWithSameOffsetType, orientation, mirror) => {
    var steps = {};
    var position;
    allAxesWithSameOffsetType.forEach((axis) => {
      var axisSize = getXAxisSize(offset, axis);
      if (position == null) {
        position = combineXAxisPositionStartingPoint(offset, orientation, chartHeight);
      }
      var needSpace = orientation === "top" && !mirror || orientation === "bottom" && mirror;
      steps[axis.id] = position - Number(needSpace) * axisSize.height;
      position += (needSpace ? -1 : 1) * axisSize.height;
    });
    return steps;
  });
  var selectAllYAxesOffsetSteps = createSelector(selectChartWidth, selectChartOffsetInternal, selectAllYAxesWithOffsetType, pickAxisOrientation, pickMirror, (chartWidth, offset, allAxesWithSameOffsetType, orientation, mirror) => {
    var steps = {};
    var position;
    allAxesWithSameOffsetType.forEach((axis) => {
      var axisSize = getYAxisSize(offset, axis);
      if (position == null) {
        position = combineYAxisPositionStartingPoint(offset, orientation, chartWidth);
      }
      var needSpace = orientation === "left" && !mirror || orientation === "right" && mirror;
      steps[axis.id] = position - Number(needSpace) * axisSize.width;
      position += (needSpace ? -1 : 1) * axisSize.width;
    });
    return steps;
  });
  var selectXAxisOffsetSteps = (state, axisId) => {
    var axisSettings = selectXAxisSettings(state, axisId);
    if (axisSettings == null) {
      return void 0;
    }
    return selectAllXAxesOffsetSteps(state, axisSettings.orientation, axisSettings.mirror);
  };
  var selectXAxisPosition = createSelector([selectChartOffsetInternal, selectXAxisSettings, selectXAxisOffsetSteps, (_, axisId) => axisId], (offset, axisSettings, allSteps, axisId) => {
    if (axisSettings == null) {
      return void 0;
    }
    var stepOfThisAxis = allSteps === null || allSteps === void 0 ? void 0 : allSteps[axisId];
    if (stepOfThisAxis == null) {
      return {
        x: offset.left,
        y: 0
      };
    }
    return {
      x: offset.left,
      y: stepOfThisAxis
    };
  });
  var selectYAxisOffsetSteps = (state, axisId) => {
    var axisSettings = selectYAxisSettings(state, axisId);
    if (axisSettings == null) {
      return void 0;
    }
    return selectAllYAxesOffsetSteps(state, axisSettings.orientation, axisSettings.mirror);
  };
  var selectYAxisPosition = createSelector([selectChartOffsetInternal, selectYAxisSettings, selectYAxisOffsetSteps, (_, axisId) => axisId], (offset, axisSettings, allSteps, axisId) => {
    if (axisSettings == null) {
      return void 0;
    }
    var stepOfThisAxis = allSteps === null || allSteps === void 0 ? void 0 : allSteps[axisId];
    if (stepOfThisAxis == null) {
      return {
        x: 0,
        y: offset.top
      };
    }
    return {
      x: stepOfThisAxis,
      y: offset.top
    };
  });
  var selectYAxisSize = createSelector(selectChartOffsetInternal, selectYAxisSettings, (offset, axisSettings) => {
    var width = typeof axisSettings.width === "number" ? axisSettings.width : DEFAULT_Y_AXIS_WIDTH;
    return {
      width,
      height: offset.height
    };
  });
  var selectCartesianAxisSize = (state, axisType, axisId) => {
    switch (axisType) {
      case "xAxis": {
        return selectXAxisSize(state, axisId).width;
      }
      case "yAxis": {
        return selectYAxisSize(state, axisId).height;
      }
      default: {
        return void 0;
      }
    }
  };
  var combineDuplicateDomain = (chartLayout, appliedValues, axis, axisType) => {
    if (axis == null) {
      return void 0;
    }
    var {
      allowDuplicatedCategory,
      type,
      dataKey
    } = axis;
    var isCategorical = isCategoricalAxis(chartLayout, axisType);
    var allData = appliedValues.map((av) => av.value);
    if (dataKey && isCategorical && type === "category" && allowDuplicatedCategory && hasDuplicate(allData)) {
      return allData;
    }
    return void 0;
  };
  var selectDuplicateDomain = createSelector([selectChartLayout, selectAllAppliedValues, selectBaseAxis, pickAxisType], combineDuplicateDomain);
  var combineCategoricalDomain = (layout, appliedValues, axis, axisType) => {
    if (axis == null || axis.dataKey == null) {
      return void 0;
    }
    var {
      type,
      scale
    } = axis;
    var isCategorical = isCategoricalAxis(layout, axisType);
    if (isCategorical && (type === "number" || scale !== "auto")) {
      return appliedValues.map((d) => d.value);
    }
    return void 0;
  };
  var selectCategoricalDomain = createSelector([selectChartLayout, selectAllAppliedValues, selectAxisSettings, pickAxisType], combineCategoricalDomain);
  createSelector([selectChartLayout, selectCartesianAxisSettings, selectRealScaleType, selectAxisScale, selectDuplicateDomain, selectCategoricalDomain, selectAxisRange, selectNiceTicks, pickAxisType], (layout, axis, realScaleType, scale, duplicateDomain, categoricalDomain, axisRange, niceTicks, axisType) => {
    if (axis == null) {
      return void 0;
    }
    var isCategorical = isCategoricalAxis(layout, axisType);
    return {
      angle: axis.angle,
      interval: axis.interval,
      minTickGap: axis.minTickGap,
      orientation: axis.orientation,
      tick: axis.tick,
      tickCount: axis.tickCount,
      tickFormatter: axis.tickFormatter,
      ticks: axis.ticks,
      type: axis.type,
      unit: axis.unit,
      axisType,
      categoricalDomain,
      duplicateDomain,
      isCategorical,
      niceTicks,
      range: axisRange,
      realScaleType,
      scale
    };
  });
  var combineAxisTicks = (layout, axis, realScaleType, scale, niceTicks, axisRange, duplicateDomain, categoricalDomain, axisType) => {
    if (axis == null || scale == null) {
      return void 0;
    }
    var isCategorical = isCategoricalAxis(layout, axisType);
    var {
      type,
      ticks: ticks2,
      tickCount
    } = axis;
    var offsetForBand = realScaleType === "scaleBand" && typeof scale.bandwidth === "function" ? scale.bandwidth() / 2 : 2;
    var offset = type === "category" && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
    offset = axisType === "angleAxis" && axisRange != null && axisRange.length >= 2 ? mathSign(axisRange[0] - axisRange[1]) * 2 * offset : offset;
    var ticksOrNiceTicks = ticks2 || niceTicks;
    if (ticksOrNiceTicks) {
      var result = ticksOrNiceTicks.map((entry, index) => {
        var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;
        return {
          index,
          // If the scaleContent is not a number, the coordinate will be NaN.
          // That could be the case for example with a PointScale and a string as domain.
          coordinate: scale(scaleContent) + offset,
          value: entry,
          offset
        };
      });
      return result.filter((row) => isWellBehavedNumber(row.coordinate));
    }
    if (isCategorical && categoricalDomain) {
      return categoricalDomain.map((entry, index) => ({
        coordinate: scale(entry) + offset,
        value: entry,
        index,
        offset
      })).filter((row) => isWellBehavedNumber(row.coordinate));
    }
    if (scale.ticks) {
      return scale.ticks(tickCount).map((entry) => ({
        coordinate: scale(entry) + offset,
        value: entry,
        offset
      }));
    }
    return scale.domain().map((entry, index) => ({
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index,
      offset
    }));
  };
  var selectTicksOfAxis = createSelector([selectChartLayout, selectAxisSettings, selectRealScaleType, selectAxisScale, selectNiceTicks, selectAxisRange, selectDuplicateDomain, selectCategoricalDomain, pickAxisType], combineAxisTicks);
  var combineGraphicalItemTicks = (layout, axis, scale, axisRange, duplicateDomain, categoricalDomain, axisType) => {
    if (axis == null || scale == null || axisRange == null || axisRange[0] === axisRange[1]) {
      return void 0;
    }
    var isCategorical = isCategoricalAxis(layout, axisType);
    var {
      tickCount
    } = axis;
    var offset = 0;
    offset = axisType === "angleAxis" && (axisRange === null || axisRange === void 0 ? void 0 : axisRange.length) >= 2 ? mathSign(axisRange[0] - axisRange[1]) * 2 * offset : offset;
    if (isCategorical && categoricalDomain) {
      return categoricalDomain.map((entry, index) => ({
        coordinate: scale(entry) + offset,
        value: entry,
        index,
        offset
      }));
    }
    if (scale.ticks) {
      return scale.ticks(tickCount).map((entry) => ({
        coordinate: scale(entry) + offset,
        value: entry,
        offset
      }));
    }
    return scale.domain().map((entry, index) => ({
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index,
      offset
    }));
  };
  var selectTicksOfGraphicalItem = createSelector([selectChartLayout, selectAxisSettings, selectAxisScale, selectAxisRange, selectDuplicateDomain, selectCategoricalDomain, pickAxisType], combineGraphicalItemTicks);
  var selectAxisWithScale = createSelector(selectBaseAxis, selectAxisScale, (axis, scale) => {
    if (axis == null || scale == null) {
      return void 0;
    }
    return _objectSpread$m(_objectSpread$m({}, axis), {}, {
      scale
    });
  });
  var selectZAxisScale = createSelector([selectBaseAxis, selectRealScaleType, selectAxisDomain, selectAxisRangeWithReverse], combineScaleFunction);
  createSelector((state, _axisType, axisId) => selectZAxisSettings(state, axisId), selectZAxisScale, (axis, scale) => {
    if (axis == null || scale == null) {
      return void 0;
    }
    return _objectSpread$m(_objectSpread$m({}, axis), {}, {
      scale
    });
  });
  var selectChartDirection = createSelector([selectChartLayout, selectAllXAxes, selectAllYAxes], (layout, allXAxes, allYAxes) => {
    switch (layout) {
      case "horizontal": {
        return allXAxes.some((axis) => axis.reversed) ? "right-to-left" : "left-to-right";
      }
      case "vertical": {
        return allYAxes.some((axis) => axis.reversed) ? "bottom-to-top" : "top-to-bottom";
      }
      // TODO: make this better. For now, right arrow triggers "forward", left arrow "back"
      // however, the tooltip moves an unintuitive direction because of how the indices are rendered
      case "centric":
      case "radial": {
        return "left-to-right";
      }
      default: {
        return void 0;
      }
    }
  });
  var selectDefaultTooltipEventType = (state) => state.options.defaultTooltipEventType;
  var selectValidateTooltipEventTypes = (state) => state.options.validateTooltipEventTypes;
  function combineTooltipEventType(shared, defaultTooltipEventType, validateTooltipEventTypes) {
    if (shared == null) {
      return defaultTooltipEventType;
    }
    var eventType = shared ? "axis" : "item";
    if (validateTooltipEventTypes == null) {
      return defaultTooltipEventType;
    }
    return validateTooltipEventTypes.includes(eventType) ? eventType : defaultTooltipEventType;
  }
  function selectTooltipEventType$1(state, shared) {
    var defaultTooltipEventType = selectDefaultTooltipEventType(state);
    var validateTooltipEventTypes = selectValidateTooltipEventTypes(state);
    return combineTooltipEventType(shared, defaultTooltipEventType, validateTooltipEventTypes);
  }
  function useTooltipEventType(shared) {
    return useAppSelector((state) => selectTooltipEventType$1(state, shared));
  }
  var combineActiveLabel = (tooltipTicks, activeIndex) => {
    var _tooltipTicks$n;
    var n = Number(activeIndex);
    if (isNan(n) || activeIndex == null) {
      return void 0;
    }
    return n >= 0 ? tooltipTicks === null || tooltipTicks === void 0 || (_tooltipTicks$n = tooltipTicks[n]) === null || _tooltipTicks$n === void 0 ? void 0 : _tooltipTicks$n.value : void 0;
  };
  var selectTooltipSettings = (state) => state.tooltip.settings;
  var noInteraction = {
    active: false,
    index: null,
    dataKey: void 0,
    graphicalItemId: void 0,
    coordinate: void 0
  };
  var initialState$9 = {
    itemInteraction: {
      click: noInteraction,
      hover: noInteraction
    },
    axisInteraction: {
      click: noInteraction,
      hover: noInteraction
    },
    keyboardInteraction: noInteraction,
    syncInteraction: {
      active: false,
      index: null,
      dataKey: void 0,
      label: void 0,
      coordinate: void 0,
      sourceViewBox: void 0,
      graphicalItemId: void 0
    },
    tooltipItemPayloads: [],
    settings: {
      shared: void 0,
      trigger: "hover",
      axisId: 0,
      active: false,
      defaultIndex: void 0
    }
  };
  var tooltipSlice = createSlice({
    name: "tooltip",
    initialState: initialState$9,
    reducers: {
      addTooltipEntrySettings: {
        reducer(state, action) {
          state.tooltipItemPayloads.push(castDraft(action.payload));
        },
        prepare: prepareAutoBatched()
      },
      replaceTooltipEntrySettings: {
        reducer(state, action) {
          var {
            prev,
            next
          } = action.payload;
          var index = current$1(state).tooltipItemPayloads.indexOf(castDraft(prev));
          if (index > -1) {
            state.tooltipItemPayloads[index] = castDraft(next);
          }
        },
        prepare: prepareAutoBatched()
      },
      removeTooltipEntrySettings: {
        reducer(state, action) {
          var index = current$1(state).tooltipItemPayloads.indexOf(castDraft(action.payload));
          if (index > -1) {
            state.tooltipItemPayloads.splice(index, 1);
          }
        },
        prepare: prepareAutoBatched()
      },
      setTooltipSettingsState(state, action) {
        state.settings = action.payload;
      },
      setActiveMouseOverItemIndex(state, action) {
        state.syncInteraction.active = false;
        state.keyboardInteraction.active = false;
        state.itemInteraction.hover.active = true;
        state.itemInteraction.hover.index = action.payload.activeIndex;
        state.itemInteraction.hover.dataKey = action.payload.activeDataKey;
        state.itemInteraction.hover.graphicalItemId = action.payload.activeGraphicalItemId;
        state.itemInteraction.hover.coordinate = action.payload.activeCoordinate;
      },
      mouseLeaveChart(state) {
        state.itemInteraction.hover.active = false;
        state.axisInteraction.hover.active = false;
      },
      mouseLeaveItem(state) {
        state.itemInteraction.hover.active = false;
      },
      setActiveClickItemIndex(state, action) {
        state.syncInteraction.active = false;
        state.itemInteraction.click.active = true;
        state.keyboardInteraction.active = false;
        state.itemInteraction.click.index = action.payload.activeIndex;
        state.itemInteraction.click.dataKey = action.payload.activeDataKey;
        state.itemInteraction.click.graphicalItemId = action.payload.activeGraphicalItemId;
        state.itemInteraction.click.coordinate = action.payload.activeCoordinate;
      },
      setMouseOverAxisIndex(state, action) {
        state.syncInteraction.active = false;
        state.axisInteraction.hover.active = true;
        state.keyboardInteraction.active = false;
        state.axisInteraction.hover.index = action.payload.activeIndex;
        state.axisInteraction.hover.dataKey = action.payload.activeDataKey;
        state.axisInteraction.hover.coordinate = action.payload.activeCoordinate;
      },
      setMouseClickAxisIndex(state, action) {
        state.syncInteraction.active = false;
        state.keyboardInteraction.active = false;
        state.axisInteraction.click.active = true;
        state.axisInteraction.click.index = action.payload.activeIndex;
        state.axisInteraction.click.dataKey = action.payload.activeDataKey;
        state.axisInteraction.click.coordinate = action.payload.activeCoordinate;
      },
      setSyncInteraction(state, action) {
        state.syncInteraction = action.payload;
      },
      setKeyboardInteraction(state, action) {
        state.keyboardInteraction.active = action.payload.active;
        state.keyboardInteraction.index = action.payload.activeIndex;
        state.keyboardInteraction.coordinate = action.payload.activeCoordinate;
        state.keyboardInteraction.dataKey = action.payload.activeDataKey;
      }
    }
  });
  var {
    addTooltipEntrySettings,
    replaceTooltipEntrySettings,
    removeTooltipEntrySettings,
    setTooltipSettingsState,
    setActiveMouseOverItemIndex,
    mouseLeaveItem,
    mouseLeaveChart,
    setActiveClickItemIndex,
    setMouseOverAxisIndex,
    setMouseClickAxisIndex,
    setSyncInteraction,
    setKeyboardInteraction
  } = tooltipSlice.actions;
  var tooltipReducer = tooltipSlice.reducer;
  function ownKeys$l(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$l(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$l(Object(t), true).forEach(function(r3) {
        _defineProperty$n(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$l(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$n(e, r2, t) {
    return (r2 = _toPropertyKey$n(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$n(t) {
    var i = _toPrimitive$n(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$n(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function chooseAppropriateMouseInteraction(tooltipState, tooltipEventType, trigger) {
    if (tooltipEventType === "axis") {
      if (trigger === "click") {
        return tooltipState.axisInteraction.click;
      }
      return tooltipState.axisInteraction.hover;
    }
    if (trigger === "click") {
      return tooltipState.itemInteraction.click;
    }
    return tooltipState.itemInteraction.hover;
  }
  function hasBeenActivePreviously(tooltipInteractionState) {
    return tooltipInteractionState.index != null;
  }
  var combineTooltipInteractionState = (tooltipState, tooltipEventType, trigger, defaultIndex) => {
    if (tooltipEventType == null) {
      return noInteraction;
    }
    var appropriateMouseInteraction = chooseAppropriateMouseInteraction(tooltipState, tooltipEventType, trigger);
    if (appropriateMouseInteraction == null) {
      return noInteraction;
    }
    if (appropriateMouseInteraction.active) {
      return appropriateMouseInteraction;
    }
    if (tooltipState.keyboardInteraction.active) {
      return tooltipState.keyboardInteraction;
    }
    if (tooltipState.syncInteraction.active && tooltipState.syncInteraction.index != null) {
      return tooltipState.syncInteraction;
    }
    var activeFromProps = tooltipState.settings.active === true;
    if (hasBeenActivePreviously(appropriateMouseInteraction)) {
      if (activeFromProps) {
        return _objectSpread$l(_objectSpread$l({}, appropriateMouseInteraction), {}, {
          active: true
        });
      }
    } else if (defaultIndex != null) {
      return {
        active: true,
        coordinate: void 0,
        dataKey: void 0,
        index: defaultIndex,
        graphicalItemId: void 0
      };
    }
    return _objectSpread$l(_objectSpread$l({}, noInteraction), {}, {
      coordinate: appropriateMouseInteraction.coordinate
    });
  };
  function toFiniteNumber(value) {
    if (typeof value === "number") {
      return Number.isFinite(value) ? value : void 0;
    }
    if (value instanceof Date) {
      var numericValue = value.valueOf();
      return Number.isFinite(numericValue) ? numericValue : void 0;
    }
    var parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : void 0;
  }
  function isValueWithinNumberDomain(value, domain) {
    var numericValue = toFiniteNumber(value);
    var lowerBound = domain[0];
    var upperBound = domain[1];
    if (numericValue === void 0) {
      return false;
    }
    var min2 = Math.min(lowerBound, upperBound);
    var max2 = Math.max(lowerBound, upperBound);
    return numericValue >= min2 && numericValue <= max2;
  }
  function isValueWithinDomain(entry, axisDataKey, domain) {
    if (domain == null || axisDataKey == null) {
      return true;
    }
    var value = getValueByDataKey(entry, axisDataKey);
    if (value == null) {
      return true;
    }
    if (!isWellFormedNumberDomain(domain)) {
      return true;
    }
    return isValueWithinNumberDomain(value, domain);
  }
  var combineActiveTooltipIndex = (tooltipInteraction, chartData, axisDataKey, domain) => {
    var desiredIndex = tooltipInteraction === null || tooltipInteraction === void 0 ? void 0 : tooltipInteraction.index;
    if (desiredIndex == null) {
      return null;
    }
    var indexAsNumber = Number(desiredIndex);
    if (!isWellBehavedNumber(indexAsNumber)) {
      return desiredIndex;
    }
    var lowerLimit = 0;
    var upperLimit = Infinity;
    if (chartData.length > 0) {
      upperLimit = chartData.length - 1;
    }
    var clampedIndex = Math.max(lowerLimit, Math.min(indexAsNumber, upperLimit));
    var entry = chartData[clampedIndex];
    if (entry == null) {
      return String(clampedIndex);
    }
    if (!isValueWithinDomain(entry, axisDataKey, domain)) {
      return null;
    }
    return String(clampedIndex);
  };
  var combineCoordinateForDefaultIndex = (width, height, layout, offset, tooltipTicks, defaultIndex, tooltipConfigurations, tooltipPayloadSearcher) => {
    if (defaultIndex == null || tooltipPayloadSearcher == null) {
      return void 0;
    }
    var firstConfiguration = tooltipConfigurations[0];
    var maybePosition = firstConfiguration == null ? void 0 : tooltipPayloadSearcher(firstConfiguration.positions, defaultIndex);
    if (maybePosition != null) {
      return maybePosition;
    }
    var tick = tooltipTicks === null || tooltipTicks === void 0 ? void 0 : tooltipTicks[Number(defaultIndex)];
    if (!tick) {
      return void 0;
    }
    switch (layout) {
      case "horizontal": {
        return {
          x: tick.coordinate,
          y: (offset.top + height) / 2
        };
      }
      default: {
        return {
          x: (offset.left + width) / 2,
          y: tick.coordinate
        };
      }
    }
  };
  var combineTooltipPayloadConfigurations = (tooltipState, tooltipEventType, trigger, defaultIndex) => {
    if (tooltipEventType === "axis") {
      return tooltipState.tooltipItemPayloads;
    }
    if (tooltipState.tooltipItemPayloads.length === 0) {
      return [];
    }
    var filterByDataKey;
    if (trigger === "hover") {
      filterByDataKey = tooltipState.itemInteraction.hover.dataKey;
    } else {
      filterByDataKey = tooltipState.itemInteraction.click.dataKey;
    }
    if (filterByDataKey == null && defaultIndex != null) {
      return [tooltipState.tooltipItemPayloads[0]];
    }
    return tooltipState.tooltipItemPayloads.filter((tpc) => {
      var _tpc$settings;
      return ((_tpc$settings = tpc.settings) === null || _tpc$settings === void 0 ? void 0 : _tpc$settings.dataKey) === filterByDataKey;
    });
  };
  var selectTooltipPayloadSearcher = (state) => state.options.tooltipPayloadSearcher;
  var selectTooltipState = (state) => state.tooltip;
  function ownKeys$k(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$k(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$k(Object(t), true).forEach(function(r3) {
        _defineProperty$m(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$k(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$m(e, r2, t) {
    return (r2 = _toPropertyKey$m(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$m(t) {
    var i = _toPrimitive$m(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$m(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function selectFinalData(dataDefinedOnItem, dataDefinedOnChart) {
    if (dataDefinedOnItem != null) {
      return dataDefinedOnItem;
    }
    return dataDefinedOnChart;
  }
  var combineTooltipPayload = (tooltipPayloadConfigurations, activeIndex, chartDataState, tooltipAxisDataKey, activeLabel, tooltipPayloadSearcher, tooltipEventType) => {
    if (activeIndex == null || tooltipPayloadSearcher == null) {
      return void 0;
    }
    var {
      chartData,
      computedData,
      dataStartIndex,
      dataEndIndex
    } = chartDataState;
    var init = [];
    return tooltipPayloadConfigurations.reduce((agg, _ref2) => {
      var _settings$dataKey;
      var {
        dataDefinedOnItem,
        settings
      } = _ref2;
      var finalData = selectFinalData(dataDefinedOnItem, chartData);
      var sliced = Array.isArray(finalData) ? getSliced(finalData, dataStartIndex, dataEndIndex) : finalData;
      var finalDataKey = (_settings$dataKey = settings === null || settings === void 0 ? void 0 : settings.dataKey) !== null && _settings$dataKey !== void 0 ? _settings$dataKey : tooltipAxisDataKey;
      var finalNameKey = settings === null || settings === void 0 ? void 0 : settings.nameKey;
      var tooltipPayload;
      if (tooltipAxisDataKey && Array.isArray(sliced) && /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(sliced[0]) && /*
       * If the tooltipEventType is 'axis', we should search for the dataKey in the sliced data
       * because thanks to allowDuplicatedCategory=false, the order of elements in the array
       * no longer matches the order of elements in the original data
       * and so we need to search by the active dataKey + label rather than by index.
       *
       * The same happens if multiple graphical items are present in the chart
       * and each of them has its own data array. Those arrays get concatenated
       * and again the tooltip index no longer matches the original data.
       *
       * On the other hand the tooltipEventType 'item' should always search by index
       * because we get the index from interacting over the individual elements
       * which is always accurate, irrespective of the allowDuplicatedCategory setting.
       */
      tooltipEventType === "axis") {
        tooltipPayload = findEntryInArray(sliced, tooltipAxisDataKey, activeLabel);
      } else {
        tooltipPayload = tooltipPayloadSearcher(sliced, activeIndex, computedData, finalNameKey);
      }
      if (Array.isArray(tooltipPayload)) {
        tooltipPayload.forEach((item) => {
          var newSettings = _objectSpread$k(_objectSpread$k({}, settings), {}, {
            name: item.name,
            unit: item.unit,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            color: void 0,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            fill: void 0
          });
          agg.push(getTooltipEntry({
            tooltipEntrySettings: newSettings,
            dataKey: item.dataKey,
            payload: item.payload,
            // @ts-expect-error getValueByDataKey does not validate the output type
            value: getValueByDataKey(item.payload, item.dataKey),
            name: item.name
          }));
        });
      } else {
        var _getValueByDataKey;
        agg.push(getTooltipEntry({
          tooltipEntrySettings: settings,
          dataKey: finalDataKey,
          payload: tooltipPayload,
          // @ts-expect-error getValueByDataKey does not validate the output type
          value: getValueByDataKey(tooltipPayload, finalDataKey),
          // @ts-expect-error getValueByDataKey does not validate the output type
          name: (_getValueByDataKey = getValueByDataKey(tooltipPayload, finalNameKey)) !== null && _getValueByDataKey !== void 0 ? _getValueByDataKey : settings === null || settings === void 0 ? void 0 : settings.name
        }));
      }
      return agg;
    }, init);
  };
  var selectTooltipAxisRealScaleType = createSelector([selectTooltipAxis, selectChartLayout, selectHasBar, selectChartName, selectTooltipAxisType], combineRealScaleType);
  var selectAllUnfilteredGraphicalItems = createSelector([(state) => state.graphicalItems.cartesianItems, (state) => state.graphicalItems.polarItems], (cartesianItems, polarItems) => [...cartesianItems, ...polarItems]);
  var selectTooltipAxisPredicate = createSelector([selectTooltipAxisType, selectTooltipAxisId], itemAxisPredicate);
  var selectAllGraphicalItemsSettings = createSelector([selectAllUnfilteredGraphicalItems, selectTooltipAxis, selectTooltipAxisPredicate], combineGraphicalItemsSettings, {
    memoizeOptions: {
      resultEqualityCheck: emptyArraysAreEqualCheck
    }
  });
  var selectAllStackedGraphicalItemsSettings = createSelector([selectAllGraphicalItemsSettings], (graphicalItems) => graphicalItems.filter(isStacked));
  var selectTooltipGraphicalItemsData = createSelector([selectAllGraphicalItemsSettings], combineGraphicalItemsData, {
    memoizeOptions: {
      resultEqualityCheck: emptyArraysAreEqualCheck
    }
  });
  var selectTooltipDisplayedData = createSelector([selectTooltipGraphicalItemsData, selectChartDataWithIndexes], combineDisplayedData);
  var selectTooltipStackedData = createSelector([selectAllStackedGraphicalItemsSettings, selectChartDataWithIndexes, selectTooltipAxis], combineDisplayedStackedData);
  var selectAllTooltipAppliedValues = createSelector([selectTooltipDisplayedData, selectTooltipAxis, selectAllGraphicalItemsSettings], combineAppliedValues);
  var selectTooltipAxisDomainDefinition = createSelector([selectTooltipAxis], getDomainDefinition);
  var selectTooltipDataOverflow = createSelector([selectTooltipAxis], (axisSettings) => axisSettings.allowDataOverflow);
  var selectTooltipDomainFromUserPreferences = createSelector([selectTooltipAxisDomainDefinition, selectTooltipDataOverflow], numericalDomainSpecifiedWithoutRequiringData);
  var selectAllStackedGraphicalItems = createSelector([selectAllGraphicalItemsSettings], (graphicalItems) => graphicalItems.filter(isStacked));
  var selectTooltipStackGroups = createSelector([selectTooltipStackedData, selectAllStackedGraphicalItems, selectStackOffsetType, selectReverseStackOrder], combineStackGroups);
  var selectTooltipDomainOfStackGroups = createSelector([selectTooltipStackGroups, selectChartDataWithIndexes, selectTooltipAxisType, selectTooltipDomainFromUserPreferences], combineDomainOfStackGroups);
  var selectTooltipItemsSettingsExceptStacked = createSelector([selectAllGraphicalItemsSettings], filterGraphicalNotStackedItems);
  var selectDomainOfAllAppliedNumericalValuesIncludingErrorValues = createSelector([selectTooltipDisplayedData, selectTooltipAxis, selectTooltipItemsSettingsExceptStacked, selectAllErrorBarSettings, selectTooltipAxisType], combineDomainOfAllAppliedNumericalValuesIncludingErrorValues, {
    memoizeOptions: {
      resultEqualityCheck: numberDomainEqualityCheck
    }
  });
  var selectReferenceDotsByTooltipAxis = createSelector([selectReferenceDots, selectTooltipAxisType, selectTooltipAxisId], filterReferenceElements);
  var selectTooltipReferenceDotsDomain = createSelector([selectReferenceDotsByTooltipAxis, selectTooltipAxisType], combineDotsDomain);
  var selectReferenceAreasByTooltipAxis = createSelector([selectReferenceAreas, selectTooltipAxisType, selectTooltipAxisId], filterReferenceElements);
  var selectTooltipReferenceAreasDomain = createSelector([selectReferenceAreasByTooltipAxis, selectTooltipAxisType], combineAreasDomain);
  var selectReferenceLinesByTooltipAxis = createSelector([selectReferenceLines, selectTooltipAxisType, selectTooltipAxisId], filterReferenceElements);
  var selectTooltipReferenceLinesDomain = createSelector([selectReferenceLinesByTooltipAxis, selectTooltipAxisType], combineLinesDomain);
  var selectTooltipReferenceElementsDomain = createSelector([selectTooltipReferenceDotsDomain, selectTooltipReferenceLinesDomain, selectTooltipReferenceAreasDomain], mergeDomains);
  var selectTooltipNumericalDomain = createSelector([selectTooltipAxis, selectTooltipAxisDomainDefinition, selectTooltipDomainFromUserPreferences, selectTooltipDomainOfStackGroups, selectDomainOfAllAppliedNumericalValuesIncludingErrorValues, selectTooltipReferenceElementsDomain, selectChartLayout, selectTooltipAxisType], combineNumericalDomain);
  var selectTooltipAxisDomain = createSelector([selectTooltipAxis, selectChartLayout, selectTooltipDisplayedData, selectAllTooltipAppliedValues, selectStackOffsetType, selectTooltipAxisType, selectTooltipNumericalDomain], combineAxisDomain);
  var selectTooltipNiceTicks = createSelector([selectTooltipAxisDomain, selectTooltipAxis, selectTooltipAxisRealScaleType], combineNiceTicks);
  var selectTooltipAxisDomainIncludingNiceTicks = createSelector([selectTooltipAxis, selectTooltipAxisDomain, selectTooltipNiceTicks, selectTooltipAxisType], combineAxisDomainWithNiceTicks);
  var selectTooltipAxisRange = (state) => {
    var axisType = selectTooltipAxisType(state);
    var axisId = selectTooltipAxisId(state);
    var isPanorama = false;
    return selectAxisRange(state, axisType, axisId, isPanorama);
  };
  var selectTooltipAxisRangeWithReverse = createSelector([selectTooltipAxis, selectTooltipAxisRange], combineAxisRangeWithReverse);
  var selectTooltipAxisScale = createSelector([selectTooltipAxis, selectTooltipAxisRealScaleType, selectTooltipAxisDomainIncludingNiceTicks, selectTooltipAxisRangeWithReverse], combineScaleFunction);
  var selectTooltipDuplicateDomain = createSelector([selectChartLayout, selectAllTooltipAppliedValues, selectTooltipAxis, selectTooltipAxisType], combineDuplicateDomain);
  var selectTooltipCategoricalDomain = createSelector([selectChartLayout, selectAllTooltipAppliedValues, selectTooltipAxis, selectTooltipAxisType], combineCategoricalDomain);
  var combineTicksOfTooltipAxis = (layout, axis, realScaleType, scale, range2, duplicateDomain, categoricalDomain, axisType) => {
    if (!axis) {
      return void 0;
    }
    var {
      type
    } = axis;
    var isCategorical = isCategoricalAxis(layout, axisType);
    if (!scale) {
      return void 0;
    }
    var offsetForBand = realScaleType === "scaleBand" && scale.bandwidth ? scale.bandwidth() / 2 : 2;
    var offset = type === "category" && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
    offset = axisType === "angleAxis" && range2 != null && (range2 === null || range2 === void 0 ? void 0 : range2.length) >= 2 ? mathSign(range2[0] - range2[1]) * 2 * offset : offset;
    if (isCategorical && categoricalDomain) {
      return categoricalDomain.map((entry, index) => ({
        coordinate: scale(entry) + offset,
        value: entry,
        index,
        offset
      }));
    }
    return scale.domain().map((entry, index) => ({
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index,
      offset
    }));
  };
  var selectTooltipAxisTicks = createSelector([selectChartLayout, selectTooltipAxis, selectTooltipAxisRealScaleType, selectTooltipAxisScale, selectTooltipAxisRange, selectTooltipDuplicateDomain, selectTooltipCategoricalDomain, selectTooltipAxisType], combineTicksOfTooltipAxis);
  var selectTooltipEventType = createSelector([selectDefaultTooltipEventType, selectValidateTooltipEventTypes, selectTooltipSettings], (defaultTooltipEventType, validateTooltipEventType, settings) => combineTooltipEventType(settings.shared, defaultTooltipEventType, validateTooltipEventType));
  var selectTooltipTrigger = (state) => state.tooltip.settings.trigger;
  var selectDefaultIndex = (state) => state.tooltip.settings.defaultIndex;
  var selectTooltipInteractionState$1 = createSelector([selectTooltipState, selectTooltipEventType, selectTooltipTrigger, selectDefaultIndex], combineTooltipInteractionState);
  var selectActiveTooltipIndex = createSelector([selectTooltipInteractionState$1, selectTooltipDisplayedData, selectTooltipAxisDataKey, selectTooltipAxisDomain], combineActiveTooltipIndex);
  var selectActiveLabel$1 = createSelector([selectTooltipAxisTicks, selectActiveTooltipIndex], combineActiveLabel);
  var selectActiveTooltipDataKey = createSelector([selectTooltipInteractionState$1], (tooltipInteraction) => {
    if (!tooltipInteraction) {
      return void 0;
    }
    return tooltipInteraction.dataKey;
  });
  var selectActiveTooltipGraphicalItemId = createSelector([selectTooltipInteractionState$1], (tooltipInteraction) => {
    if (!tooltipInteraction) {
      return void 0;
    }
    return tooltipInteraction.graphicalItemId;
  });
  var selectTooltipPayloadConfigurations$1 = createSelector([selectTooltipState, selectTooltipEventType, selectTooltipTrigger, selectDefaultIndex], combineTooltipPayloadConfigurations);
  var selectTooltipCoordinateForDefaultIndex = createSelector([selectChartWidth, selectChartHeight, selectChartLayout, selectChartOffsetInternal, selectTooltipAxisTicks, selectDefaultIndex, selectTooltipPayloadConfigurations$1, selectTooltipPayloadSearcher], combineCoordinateForDefaultIndex);
  var selectActiveTooltipCoordinate = createSelector([selectTooltipInteractionState$1, selectTooltipCoordinateForDefaultIndex], (tooltipInteractionState, defaultIndexCoordinate) => {
    if (tooltipInteractionState !== null && tooltipInteractionState !== void 0 && tooltipInteractionState.coordinate) {
      return tooltipInteractionState.coordinate;
    }
    return defaultIndexCoordinate;
  });
  var selectIsTooltipActive$1 = createSelector([selectTooltipInteractionState$1], (tooltipInteractionState) => tooltipInteractionState.active);
  var selectActiveTooltipPayload = createSelector([selectTooltipPayloadConfigurations$1, selectActiveTooltipIndex, selectChartDataWithIndexes, selectTooltipAxisDataKey, selectActiveLabel$1, selectTooltipPayloadSearcher, selectTooltipEventType], combineTooltipPayload);
  createSelector([selectActiveTooltipPayload], (payload) => {
    if (payload == null) {
      return void 0;
    }
    var dataPoints = payload.map((p) => p.payload).filter((p) => p != null);
    return Array.from(new Set(dataPoints));
  });
  function ownKeys$j(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$j(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$j(Object(t), true).forEach(function(r3) {
        _defineProperty$l(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$j(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$l(e, r2, t) {
    return (r2 = _toPropertyKey$l(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$l(t) {
    var i = _toPrimitive$l(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$l(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var useTooltipAxis = () => useAppSelector(selectTooltipAxis);
  var useTooltipAxisBandSize = () => {
    var tooltipAxis = useTooltipAxis();
    var tooltipTicks = useAppSelector(selectTooltipAxisTicks);
    var tooltipAxisScale = useAppSelector(selectTooltipAxisScale);
    if (!tooltipAxis || !tooltipAxisScale) {
      return getBandSizeOfAxis(void 0, tooltipTicks);
    }
    return getBandSizeOfAxis(_objectSpread$j(_objectSpread$j({}, tooltipAxis), {}, {
      scale: tooltipAxisScale
    }), tooltipTicks);
  };
  function ownKeys$i(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$i(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$i(Object(t), true).forEach(function(r3) {
        _defineProperty$k(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$i(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$k(e, r2, t) {
    return (r2 = _toPropertyKey$k(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$k(t) {
    var i = _toPrimitive$k(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$k(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var getActiveCartesianCoordinate = (layout, tooltipTicks, activeIndex, pointer) => {
    var entry = tooltipTicks.find((tick) => tick && tick.index === activeIndex);
    if (entry) {
      if (layout === "horizontal") {
        return {
          x: entry.coordinate,
          y: pointer.chartY
        };
      }
      if (layout === "vertical") {
        return {
          x: pointer.chartX,
          y: entry.coordinate
        };
      }
    }
    return {
      x: 0,
      y: 0
    };
  };
  var getActivePolarCoordinate = (layout, tooltipTicks, activeIndex, rangeObj) => {
    var entry = tooltipTicks.find((tick) => tick && tick.index === activeIndex);
    if (entry) {
      if (layout === "centric") {
        var _angle = entry.coordinate;
        var {
          radius: _radius
        } = rangeObj;
        return _objectSpread$i(_objectSpread$i(_objectSpread$i({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, _radius, _angle)), {}, {
          angle: _angle,
          radius: _radius
        });
      }
      var radius = entry.coordinate;
      var {
        angle
      } = rangeObj;
      return _objectSpread$i(_objectSpread$i(_objectSpread$i({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle)), {}, {
        angle,
        radius
      });
    }
    return {
      angle: 0,
      clockWise: false,
      cx: 0,
      cy: 0,
      endAngle: 0,
      innerRadius: 0,
      outerRadius: 0,
      radius: 0,
      startAngle: 0,
      x: 0,
      y: 0
    };
  };
  function isInCartesianRange(pointer, offset) {
    var {
      chartX: x2,
      chartY: y2
    } = pointer;
    return x2 >= offset.left && x2 <= offset.left + offset.width && y2 >= offset.top && y2 <= offset.top + offset.height;
  }
  var calculateActiveTickIndex = (coordinate, ticks2, unsortedTicks, axisType, range2) => {
    var _ticks$length;
    var index = -1;
    var len = (_ticks$length = ticks2 === null || ticks2 === void 0 ? void 0 : ticks2.length) !== null && _ticks$length !== void 0 ? _ticks$length : 0;
    if (len <= 1 || coordinate == null) {
      return 0;
    }
    if (axisType === "angleAxis" && range2 != null && Math.abs(Math.abs(range2[1] - range2[0]) - 360) <= 1e-6) {
      for (var i = 0; i < len; i++) {
        var before = i > 0 ? unsortedTicks[i - 1].coordinate : unsortedTicks[len - 1].coordinate;
        var cur = unsortedTicks[i].coordinate;
        var after = i >= len - 1 ? unsortedTicks[0].coordinate : unsortedTicks[i + 1].coordinate;
        var sameDirectionCoord = void 0;
        if (mathSign(cur - before) !== mathSign(after - cur)) {
          var diffInterval = [];
          if (mathSign(after - cur) === mathSign(range2[1] - range2[0])) {
            sameDirectionCoord = after;
            var curInRange = cur + range2[1] - range2[0];
            diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
            diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
          } else {
            sameDirectionCoord = before;
            var afterInRange = after + range2[1] - range2[0];
            diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
            diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
          }
          var sameInterval = [Math.min(cur, (sameDirectionCoord + cur) / 2), Math.max(cur, (sameDirectionCoord + cur) / 2)];
          if (coordinate > sameInterval[0] && coordinate <= sameInterval[1] || coordinate >= diffInterval[0] && coordinate <= diffInterval[1]) {
            ({
              index
            } = unsortedTicks[i]);
            break;
          }
        } else {
          var minValue = Math.min(before, after);
          var maxValue = Math.max(before, after);
          if (coordinate > (minValue + cur) / 2 && coordinate <= (maxValue + cur) / 2) {
            ({
              index
            } = unsortedTicks[i]);
            break;
          }
        }
      }
    } else if (ticks2) {
      for (var _i = 0; _i < len; _i++) {
        if (_i === 0 && coordinate <= (ticks2[_i].coordinate + ticks2[_i + 1].coordinate) / 2 || _i > 0 && _i < len - 1 && coordinate > (ticks2[_i].coordinate + ticks2[_i - 1].coordinate) / 2 && coordinate <= (ticks2[_i].coordinate + ticks2[_i + 1].coordinate) / 2 || _i === len - 1 && coordinate > (ticks2[_i].coordinate + ticks2[_i - 1].coordinate) / 2) {
          ({
            index
          } = ticks2[_i]);
          break;
        }
      }
    }
    return index;
  };
  var useChartName = () => {
    return useAppSelector(selectChartName);
  };
  var pickTooltipEventType = (_state, tooltipEventType) => tooltipEventType;
  var pickTrigger = (_state, _tooltipEventType, trigger) => trigger;
  var pickDefaultIndex = (_state, _tooltipEventType, _trigger, defaultIndex) => defaultIndex;
  var selectOrderedTooltipTicks = createSelector(selectTooltipAxisTicks, (ticks2) => sortBy(ticks2, (o) => o.coordinate));
  var selectTooltipInteractionState = createSelector([selectTooltipState, pickTooltipEventType, pickTrigger, pickDefaultIndex], combineTooltipInteractionState);
  var selectActiveIndex = createSelector([selectTooltipInteractionState, selectTooltipDisplayedData, selectTooltipAxisDataKey, selectTooltipAxisDomain], combineActiveTooltipIndex);
  var selectTooltipDataKey = (state, tooltipEventType, trigger) => {
    if (tooltipEventType == null) {
      return void 0;
    }
    var tooltipState = selectTooltipState(state);
    if (tooltipEventType === "axis") {
      if (trigger === "hover") {
        return tooltipState.axisInteraction.hover.dataKey;
      }
      return tooltipState.axisInteraction.click.dataKey;
    }
    if (trigger === "hover") {
      return tooltipState.itemInteraction.hover.dataKey;
    }
    return tooltipState.itemInteraction.click.dataKey;
  };
  var selectTooltipPayloadConfigurations = createSelector([selectTooltipState, pickTooltipEventType, pickTrigger, pickDefaultIndex], combineTooltipPayloadConfigurations);
  var selectCoordinateForDefaultIndex = createSelector([selectChartWidth, selectChartHeight, selectChartLayout, selectChartOffsetInternal, selectTooltipAxisTicks, pickDefaultIndex, selectTooltipPayloadConfigurations, selectTooltipPayloadSearcher], combineCoordinateForDefaultIndex);
  var selectActiveCoordinate = createSelector([selectTooltipInteractionState, selectCoordinateForDefaultIndex], (tooltipInteractionState, defaultIndexCoordinate) => {
    var _tooltipInteractionSt;
    return (_tooltipInteractionSt = tooltipInteractionState.coordinate) !== null && _tooltipInteractionSt !== void 0 ? _tooltipInteractionSt : defaultIndexCoordinate;
  });
  var selectActiveLabel = createSelector([selectTooltipAxisTicks, selectActiveIndex], combineActiveLabel);
  var selectTooltipPayload = createSelector([selectTooltipPayloadConfigurations, selectActiveIndex, selectChartDataWithIndexes, selectTooltipAxisDataKey, selectActiveLabel, selectTooltipPayloadSearcher, pickTooltipEventType], combineTooltipPayload);
  var selectIsTooltipActive = createSelector([selectTooltipInteractionState, selectActiveIndex], (tooltipInteractionState, activeIndex) => {
    return {
      isActive: tooltipInteractionState.active && activeIndex != null,
      activeIndex
    };
  });
  var combineActiveCartesianProps = (chartEvent, layout, tooltipAxisType, tooltipAxisRange, tooltipTicks, orderedTooltipTicks, offset) => {
    if (!chartEvent || !tooltipAxisType || !tooltipAxisRange || !tooltipTicks) {
      return void 0;
    }
    if (!isInCartesianRange(chartEvent, offset)) {
      return void 0;
    }
    var pos = calculateCartesianTooltipPos(chartEvent, layout);
    var activeIndex = calculateActiveTickIndex(pos, orderedTooltipTicks, tooltipTicks, tooltipAxisType, tooltipAxisRange);
    var activeCoordinate = getActiveCartesianCoordinate(layout, tooltipTicks, activeIndex, chartEvent);
    return {
      activeIndex: String(activeIndex),
      activeCoordinate
    };
  };
  var combineActivePolarProps = (chartEvent, layout, polarViewBox, tooltipAxisType, tooltipAxisRange, tooltipTicks, orderedTooltipTicks) => {
    if (!chartEvent || !tooltipAxisType || !tooltipAxisRange || !tooltipTicks || !polarViewBox) {
      return void 0;
    }
    var rangeObj = inRangeOfSector(chartEvent, polarViewBox);
    if (!rangeObj) {
      return void 0;
    }
    var pos = calculatePolarTooltipPos(rangeObj, layout);
    var activeIndex = calculateActiveTickIndex(pos, orderedTooltipTicks, tooltipTicks, tooltipAxisType, tooltipAxisRange);
    var activeCoordinate = getActivePolarCoordinate(layout, tooltipTicks, activeIndex, rangeObj);
    return {
      activeIndex: String(activeIndex),
      activeCoordinate
    };
  };
  var combineActiveProps = (chartEvent, layout, polarViewBox, tooltipAxisType, tooltipAxisRange, tooltipTicks, orderedTooltipTicks, offset) => {
    if (!chartEvent || !layout || !tooltipAxisType || !tooltipAxisRange || !tooltipTicks) {
      return void 0;
    }
    if (layout === "horizontal" || layout === "vertical") {
      return combineActiveCartesianProps(chartEvent, layout, tooltipAxisType, tooltipAxisRange, tooltipTicks, orderedTooltipTicks, offset);
    }
    return combineActivePolarProps(chartEvent, layout, polarViewBox, tooltipAxisType, tooltipAxisRange, tooltipTicks, orderedTooltipTicks);
  };
  var selectZIndexPortalId = createSelector((state) => state.zIndex.zIndexMap, (_, zIndex) => zIndex, (_, _zIndex, isPanorama) => isPanorama, (zIndexMap, zIndex, isPanorama) => {
    if (zIndex == null) {
      return void 0;
    }
    var entry = zIndexMap[zIndex];
    if (entry == null) {
      return void 0;
    }
    if (isPanorama) {
      return entry.panoramaElementId;
    }
    return entry.elementId;
  });
  var selectAllRegisteredZIndexes = createSelector((state) => state.zIndex.zIndexMap, (zIndexMap) => {
    var allNumbers = Object.keys(zIndexMap).map((zIndexStr) => parseInt(zIndexStr, 10)).concat(Object.values(DefaultZIndexes));
    var uniqueNumbers = Array.from(new Set(allNumbers));
    return uniqueNumbers.sort((a2, b) => a2 - b);
  }, {
    memoizeOptions: {
      resultEqualityCheck: arrayContentsAreEqualCheck
    }
  });
  function ownKeys$h(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$h(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$h(Object(t), true).forEach(function(r3) {
        _defineProperty$j(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$h(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$j(e, r2, t) {
    return (r2 = _toPropertyKey$j(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$j(t) {
    var i = _toPrimitive$j(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$j(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var seed = {};
  var initialState$8 = {
    zIndexMap: Object.values(DefaultZIndexes).reduce((acc, current2) => _objectSpread$h(_objectSpread$h({}, acc), {}, {
      [current2]: {
        elementId: void 0,
        panoramaElementId: void 0,
        consumers: 0
      }
    }), seed)
  };
  var defaultZIndexSet = new Set(Object.values(DefaultZIndexes));
  function isDefaultZIndex(zIndex) {
    return defaultZIndexSet.has(zIndex);
  }
  var zIndexSlice = createSlice({
    name: "zIndex",
    initialState: initialState$8,
    reducers: {
      registerZIndexPortal: {
        reducer: (state, action) => {
          var {
            zIndex
          } = action.payload;
          if (state.zIndexMap[zIndex]) {
            state.zIndexMap[zIndex].consumers += 1;
          } else {
            state.zIndexMap[zIndex] = {
              consumers: 1,
              elementId: void 0,
              panoramaElementId: void 0
            };
          }
        },
        prepare: prepareAutoBatched()
      },
      unregisterZIndexPortal: {
        reducer: (state, action) => {
          var {
            zIndex
          } = action.payload;
          if (state.zIndexMap[zIndex]) {
            state.zIndexMap[zIndex].consumers -= 1;
            if (state.zIndexMap[zIndex].consumers <= 0 && !isDefaultZIndex(zIndex)) {
              delete state.zIndexMap[zIndex];
            }
          }
        },
        prepare: prepareAutoBatched()
      },
      registerZIndexPortalId: {
        reducer: (state, action) => {
          var {
            zIndex,
            elementId,
            isPanorama
          } = action.payload;
          if (state.zIndexMap[zIndex]) {
            if (isPanorama) {
              state.zIndexMap[zIndex].panoramaElementId = elementId;
            } else {
              state.zIndexMap[zIndex].elementId = elementId;
            }
          } else {
            state.zIndexMap[zIndex] = {
              consumers: 0,
              elementId: isPanorama ? void 0 : elementId,
              panoramaElementId: isPanorama ? elementId : void 0
            };
          }
        },
        prepare: prepareAutoBatched()
      },
      unregisterZIndexPortalId: {
        reducer: (state, action) => {
          var {
            zIndex
          } = action.payload;
          if (state.zIndexMap[zIndex]) {
            if (action.payload.isPanorama) {
              state.zIndexMap[zIndex].panoramaElementId = void 0;
            } else {
              state.zIndexMap[zIndex].elementId = void 0;
            }
          }
        },
        prepare: prepareAutoBatched()
      }
    }
  });
  var {
    registerZIndexPortal,
    unregisterZIndexPortal,
    registerZIndexPortalId,
    unregisterZIndexPortalId
  } = zIndexSlice.actions;
  var zIndexReducer = zIndexSlice.reducer;
  function ZIndexLayer(_ref2) {
    var {
      zIndex,
      children
    } = _ref2;
    var isInChartContext = useIsInChartContext();
    var shouldRenderInPortal = isInChartContext && zIndex !== void 0 && zIndex !== 0;
    var isPanorama = useIsPanorama();
    var dispatch = useAppDispatch();
    React.useLayoutEffect(() => {
      if (!shouldRenderInPortal) {
        return noop$2;
      }
      dispatch(registerZIndexPortal({
        zIndex
      }));
      return () => {
        dispatch(unregisterZIndexPortal({
          zIndex
        }));
      };
    }, [dispatch, zIndex, shouldRenderInPortal]);
    var portalId = useAppSelector((state) => selectZIndexPortalId(state, zIndex, isPanorama));
    if (!shouldRenderInPortal) {
      return children;
    }
    if (!portalId) {
      return null;
    }
    var zIndexPortal = document.getElementById(portalId);
    if (zIndexPortal) {
      return /* @__PURE__ */ reactDom.createPortal(children, zIndexPortal);
    }
    return null;
  }
  function _extends$e() {
    return _extends$e = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$e.apply(null, arguments);
  }
  function ownKeys$g(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$g(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$g(Object(t), true).forEach(function(r3) {
        _defineProperty$i(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$g(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$i(e, r2, t) {
    return (r2 = _toPropertyKey$i(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$i(t) {
    var i = _toPrimitive$i(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$i(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function RenderCursor(_ref2) {
    var {
      cursor,
      cursorComp,
      cursorProps
    } = _ref2;
    if (/* @__PURE__ */ React.isValidElement(cursor)) {
      return /* @__PURE__ */ React.cloneElement(cursor, cursorProps);
    }
    return /* @__PURE__ */ React.createElement(cursorComp, cursorProps);
  }
  function CursorInternal(props) {
    var _props$zIndex;
    var {
      coordinate,
      payload,
      index,
      offset,
      tooltipAxisBandSize,
      layout,
      cursor,
      tooltipEventType,
      chartName
    } = props;
    var activeCoordinate = coordinate;
    var activePayload = payload;
    var activeTooltipIndex = index;
    if (!cursor || !activeCoordinate || chartName !== "ScatterChart" && tooltipEventType !== "axis") {
      return null;
    }
    var restProps, cursorComp, preferredZIndex;
    if (chartName === "ScatterChart") {
      restProps = activeCoordinate;
      cursorComp = Cross;
      preferredZIndex = DefaultZIndexes.cursorLine;
    } else if (chartName === "BarChart") {
      restProps = getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize);
      cursorComp = Rectangle;
      preferredZIndex = DefaultZIndexes.cursorRectangle;
    } else if (layout === "radial" && isPolarCoordinate(activeCoordinate)) {
      var {
        cx,
        cy,
        radius,
        startAngle,
        endAngle
      } = getRadialCursorPoints(activeCoordinate);
      restProps = {
        cx,
        cy,
        startAngle,
        endAngle,
        innerRadius: radius,
        outerRadius: radius
      };
      cursorComp = Sector;
      preferredZIndex = DefaultZIndexes.cursorLine;
    } else {
      restProps = {
        points: getCursorPoints(layout, activeCoordinate, offset)
      };
      cursorComp = Curve;
      preferredZIndex = DefaultZIndexes.cursorLine;
    }
    var extraClassName = typeof cursor === "object" && "className" in cursor ? cursor.className : void 0;
    var cursorProps = _objectSpread$g(_objectSpread$g(_objectSpread$g(_objectSpread$g({
      stroke: "#ccc",
      pointerEvents: "none"
    }, offset), restProps), svgPropertiesNoEventsFromUnknown(cursor)), {}, {
      payload: activePayload,
      payloadIndex: activeTooltipIndex,
      className: clsx("recharts-tooltip-cursor", extraClassName)
    });
    return /* @__PURE__ */ React__namespace.createElement(ZIndexLayer, {
      zIndex: (_props$zIndex = props.zIndex) !== null && _props$zIndex !== void 0 ? _props$zIndex : preferredZIndex
    }, /* @__PURE__ */ React__namespace.createElement(RenderCursor, {
      cursor,
      cursorComp,
      cursorProps
    }));
  }
  function Cursor(props) {
    var tooltipAxisBandSize = useTooltipAxisBandSize();
    var offset = useOffsetInternal();
    var layout = useChartLayout();
    var chartName = useChartName();
    if (tooltipAxisBandSize == null || offset == null || layout == null || chartName == null) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(CursorInternal, _extends$e({}, props, {
      offset,
      layout,
      tooltipAxisBandSize,
      chartName
    }));
  }
  var TooltipPortalContext = /* @__PURE__ */ React.createContext(null);
  var useTooltipPortal = () => React.useContext(TooltipPortalContext);
  var eventemitter3 = { exports: {} };
  var hasRequiredEventemitter3;
  function requireEventemitter3() {
    if (hasRequiredEventemitter3) return eventemitter3.exports;
    hasRequiredEventemitter3 = 1;
    (function(module) {
      var has2 = Object.prototype.hasOwnProperty, prefix2 = "~";
      function Events() {
      }
      if (Object.create) {
        Events.prototype = /* @__PURE__ */ Object.create(null);
        if (!new Events().__proto__) prefix2 = false;
      }
      function EE(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
      }
      function addListener2(emitter, event, fn, context, once) {
        if (typeof fn !== "function") {
          throw new TypeError("The listener must be a function");
        }
        var listener2 = new EE(fn, context || emitter, once), evt = prefix2 ? prefix2 + event : event;
        if (!emitter._events[evt]) emitter._events[evt] = listener2, emitter._eventsCount++;
        else if (!emitter._events[evt].fn) emitter._events[evt].push(listener2);
        else emitter._events[evt] = [emitter._events[evt], listener2];
        return emitter;
      }
      function clearEvent(emitter, evt) {
        if (--emitter._eventsCount === 0) emitter._events = new Events();
        else delete emitter._events[evt];
      }
      function EventEmitter2() {
        this._events = new Events();
        this._eventsCount = 0;
      }
      EventEmitter2.prototype.eventNames = function eventNames() {
        var names = [], events, name;
        if (this._eventsCount === 0) return names;
        for (name in events = this._events) {
          if (has2.call(events, name)) names.push(prefix2 ? name.slice(1) : name);
        }
        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events));
        }
        return names;
      };
      EventEmitter2.prototype.listeners = function listeners(event) {
        var evt = prefix2 ? prefix2 + event : event, handlers = this._events[evt];
        if (!handlers) return [];
        if (handlers.fn) return [handlers.fn];
        for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
          ee[i] = handlers[i].fn;
        }
        return ee;
      };
      EventEmitter2.prototype.listenerCount = function listenerCount(event) {
        var evt = prefix2 ? prefix2 + event : event, listeners = this._events[evt];
        if (!listeners) return 0;
        if (listeners.fn) return 1;
        return listeners.length;
      };
      EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix2 ? prefix2 + event : event;
        if (!this._events[evt]) return false;
        var listeners = this._events[evt], len = arguments.length, args, i;
        if (listeners.fn) {
          if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
          switch (len) {
            case 1:
              return listeners.fn.call(listeners.context), true;
            case 2:
              return listeners.fn.call(listeners.context, a1), true;
            case 3:
              return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
          }
          for (i = 1, args = new Array(len - 1); i < len; i++) {
            args[i - 1] = arguments[i];
          }
          listeners.fn.apply(listeners.context, args);
        } else {
          var length = listeners.length, j;
          for (i = 0; i < length; i++) {
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
            switch (len) {
              case 1:
                listeners[i].fn.call(listeners[i].context);
                break;
              case 2:
                listeners[i].fn.call(listeners[i].context, a1);
                break;
              case 3:
                listeners[i].fn.call(listeners[i].context, a1, a2);
                break;
              case 4:
                listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                break;
              default:
                if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
                listeners[i].fn.apply(listeners[i].context, args);
            }
          }
        }
        return true;
      };
      EventEmitter2.prototype.on = function on(event, fn, context) {
        return addListener2(this, event, fn, context, false);
      };
      EventEmitter2.prototype.once = function once(event, fn, context) {
        return addListener2(this, event, fn, context, true);
      };
      EventEmitter2.prototype.removeListener = function removeListener2(event, fn, context, once) {
        var evt = prefix2 ? prefix2 + event : event;
        if (!this._events[evt]) return this;
        if (!fn) {
          clearEvent(this, evt);
          return this;
        }
        var listeners = this._events[evt];
        if (listeners.fn) {
          if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
          }
        } else {
          for (var i = 0, events = [], length = listeners.length; i < length; i++) {
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
              events.push(listeners[i]);
            }
          }
          if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
          else clearEvent(this, evt);
        }
        return this;
      };
      EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;
        if (event) {
          evt = prefix2 ? prefix2 + event : event;
          if (this._events[evt]) clearEvent(this, evt);
        } else {
          this._events = new Events();
          this._eventsCount = 0;
        }
        return this;
      };
      EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
      EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
      EventEmitter2.prefixed = prefix2;
      EventEmitter2.EventEmitter = EventEmitter2;
      {
        module.exports = EventEmitter2;
      }
    })(eventemitter3);
    return eventemitter3.exports;
  }
  var eventemitter3Exports = requireEventemitter3();
  const EventEmitter = /* @__PURE__ */ getDefaultExportFromCjs(eventemitter3Exports);
  var eventCenter = new EventEmitter();
  var TOOLTIP_SYNC_EVENT = "recharts.syncEvent.tooltip";
  var BRUSH_SYNC_EVENT = "recharts.syncEvent.brush";
  function arrayTooltipSearcher(data, strIndex) {
    if (!strIndex) return void 0;
    var numIndex = Number.parseInt(strIndex, 10);
    if (isNan(numIndex)) {
      return void 0;
    }
    return data === null || data === void 0 ? void 0 : data[numIndex];
  }
  var initialState$7 = {
    chartName: "",
    tooltipPayloadSearcher: void 0,
    eventEmitter: void 0,
    defaultTooltipEventType: "axis"
  };
  var optionsSlice = createSlice({
    name: "options",
    initialState: initialState$7,
    reducers: {
      createEventEmitter: (state) => {
        if (state.eventEmitter == null) {
          state.eventEmitter = Symbol("rechartsEventEmitter");
        }
      }
    }
  });
  var optionsReducer = optionsSlice.reducer;
  var {
    createEventEmitter
  } = optionsSlice.actions;
  function selectSynchronisedTooltipState(state) {
    return state.tooltip.syncInteraction;
  }
  var initialChartDataState = {
    chartData: void 0,
    computedData: void 0,
    dataStartIndex: 0,
    dataEndIndex: 0
  };
  var chartDataSlice = createSlice({
    name: "chartData",
    initialState: initialChartDataState,
    reducers: {
      setChartData(state, action) {
        state.chartData = action.payload;
        if (action.payload == null) {
          state.dataStartIndex = 0;
          state.dataEndIndex = 0;
          return;
        }
        if (action.payload.length > 0 && state.dataEndIndex !== action.payload.length - 1) {
          state.dataEndIndex = action.payload.length - 1;
        }
      },
      setComputedData(state, action) {
        state.computedData = action.payload;
      },
      setDataStartEndIndexes(state, action) {
        var {
          startIndex,
          endIndex
        } = action.payload;
        if (startIndex != null) {
          state.dataStartIndex = startIndex;
        }
        if (endIndex != null) {
          state.dataEndIndex = endIndex;
        }
      }
    }
  });
  var {
    setChartData,
    setDataStartEndIndexes,
    setComputedData
  } = chartDataSlice.actions;
  var chartDataReducer = chartDataSlice.reducer;
  var _excluded$f = ["x", "y"];
  function ownKeys$f(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$f(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$f(Object(t), true).forEach(function(r3) {
        _defineProperty$h(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$f(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$h(e, r2, t) {
    return (r2 = _toPropertyKey$h(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$h(t) {
    var i = _toPrimitive$h(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$h(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function _objectWithoutProperties$f(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$f(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$f(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  function useTooltipSyncEventsListener() {
    var mySyncId = useAppSelector(selectSyncId);
    var myEventEmitter = useAppSelector(selectEventEmitter);
    var dispatch = useAppDispatch();
    var syncMethod = useAppSelector(selectSyncMethod);
    var tooltipTicks = useAppSelector(selectTooltipAxisTicks);
    var layout = useChartLayout();
    var viewBox = useViewBox();
    var className = useAppSelector((state) => state.rootProps.className);
    React.useEffect(() => {
      if (mySyncId == null) {
        return noop$2;
      }
      var listener2 = (incomingSyncId, action, emitter) => {
        if (myEventEmitter === emitter) {
          return;
        }
        if (mySyncId !== incomingSyncId) {
          return;
        }
        if (syncMethod === "index") {
          var _action$payload;
          if (viewBox && action !== null && action !== void 0 && (_action$payload = action.payload) !== null && _action$payload !== void 0 && _action$payload.coordinate && action.payload.sourceViewBox) {
            var _action$payload$coord = action.payload.coordinate, {
              x: _x,
              y: _y
            } = _action$payload$coord, otherCoordinateProps = _objectWithoutProperties$f(_action$payload$coord, _excluded$f);
            var {
              x: sourceX,
              y: sourceY,
              width: sourceWidth,
              height: sourceHeight
            } = action.payload.sourceViewBox;
            var scaledCoordinate = _objectSpread$f(_objectSpread$f({}, otherCoordinateProps), {}, {
              x: viewBox.x + (sourceWidth ? (_x - sourceX) / sourceWidth : 0) * viewBox.width,
              y: viewBox.y + (sourceHeight ? (_y - sourceY) / sourceHeight : 0) * viewBox.height
            });
            dispatch(_objectSpread$f(_objectSpread$f({}, action), {}, {
              payload: _objectSpread$f(_objectSpread$f({}, action.payload), {}, {
                coordinate: scaledCoordinate
              })
            }));
          } else {
            dispatch(action);
          }
          return;
        }
        if (tooltipTicks == null) {
          return;
        }
        var activeTick;
        if (typeof syncMethod === "function") {
          var syncMethodParam = {
            activeTooltipIndex: action.payload.index == null ? void 0 : Number(action.payload.index),
            isTooltipActive: action.payload.active,
            activeIndex: action.payload.index == null ? void 0 : Number(action.payload.index),
            activeLabel: action.payload.label,
            activeDataKey: action.payload.dataKey,
            activeCoordinate: action.payload.coordinate
          };
          var activeTooltipIndex = syncMethod(tooltipTicks, syncMethodParam);
          activeTick = tooltipTicks[activeTooltipIndex];
        } else if (syncMethod === "value") {
          activeTick = tooltipTicks.find((tick) => String(tick.value) === action.payload.label);
        }
        var {
          coordinate
        } = action.payload;
        if (activeTick == null || action.payload.active === false || coordinate == null || viewBox == null) {
          dispatch(setSyncInteraction({
            active: false,
            coordinate: void 0,
            dataKey: void 0,
            index: null,
            label: void 0,
            sourceViewBox: void 0,
            graphicalItemId: void 0
          }));
          return;
        }
        var {
          x: x2,
          y: y2
        } = coordinate;
        var validateChartX = Math.min(x2, viewBox.x + viewBox.width);
        var validateChartY = Math.min(y2, viewBox.y + viewBox.height);
        var activeCoordinate = {
          x: layout === "horizontal" ? activeTick.coordinate : validateChartX,
          y: layout === "horizontal" ? validateChartY : activeTick.coordinate
        };
        var syncAction = setSyncInteraction({
          active: action.payload.active,
          coordinate: activeCoordinate,
          dataKey: action.payload.dataKey,
          index: String(activeTick.index),
          label: action.payload.label,
          sourceViewBox: action.payload.sourceViewBox,
          graphicalItemId: action.payload.graphicalItemId
        });
        dispatch(syncAction);
      };
      eventCenter.on(TOOLTIP_SYNC_EVENT, listener2);
      return () => {
        eventCenter.off(TOOLTIP_SYNC_EVENT, listener2);
      };
    }, [className, dispatch, myEventEmitter, mySyncId, syncMethod, tooltipTicks, layout, viewBox]);
  }
  function useBrushSyncEventsListener() {
    var mySyncId = useAppSelector(selectSyncId);
    var myEventEmitter = useAppSelector(selectEventEmitter);
    var dispatch = useAppDispatch();
    React.useEffect(() => {
      if (mySyncId == null) {
        return noop$2;
      }
      var listener2 = (incomingSyncId, action, emitter) => {
        if (myEventEmitter === emitter) {
          return;
        }
        if (mySyncId === incomingSyncId) {
          dispatch(setDataStartEndIndexes(action));
        }
      };
      eventCenter.on(BRUSH_SYNC_EVENT, listener2);
      return () => {
        eventCenter.off(BRUSH_SYNC_EVENT, listener2);
      };
    }, [dispatch, myEventEmitter, mySyncId]);
  }
  function useSynchronisedEventsFromOtherCharts() {
    var dispatch = useAppDispatch();
    React.useEffect(() => {
      dispatch(createEventEmitter());
    }, [dispatch]);
    useTooltipSyncEventsListener();
    useBrushSyncEventsListener();
  }
  function useTooltipChartSynchronisation(tooltipEventType, trigger, activeCoordinate, activeLabel, activeIndex, isTooltipActive) {
    var activeDataKey = useAppSelector((state) => selectTooltipDataKey(state, tooltipEventType, trigger));
    var eventEmitterSymbol = useAppSelector(selectEventEmitter);
    var syncId = useAppSelector(selectSyncId);
    var syncMethod = useAppSelector(selectSyncMethod);
    var tooltipState = useAppSelector(selectSynchronisedTooltipState);
    var isReceivingSynchronisation = tooltipState === null || tooltipState === void 0 ? void 0 : tooltipState.active;
    var viewBox = useViewBox();
    React.useEffect(() => {
      if (isReceivingSynchronisation) {
        return;
      }
      if (syncId == null) {
        return;
      }
      if (eventEmitterSymbol == null) {
        return;
      }
      var syncAction = setSyncInteraction({
        active: isTooltipActive,
        coordinate: activeCoordinate,
        dataKey: activeDataKey,
        index: activeIndex,
        label: typeof activeLabel === "number" ? String(activeLabel) : activeLabel,
        sourceViewBox: viewBox,
        graphicalItemId: void 0
      });
      eventCenter.emit(TOOLTIP_SYNC_EVENT, syncId, syncAction, eventEmitterSymbol);
    }, [isReceivingSynchronisation, activeCoordinate, activeDataKey, activeIndex, activeLabel, eventEmitterSymbol, syncId, syncMethod, isTooltipActive, viewBox]);
  }
  function ownKeys$e(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$e(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$e(Object(t), true).forEach(function(r3) {
        _defineProperty$g(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$g(e, r2, t) {
    return (r2 = _toPropertyKey$g(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$g(t) {
    var i = _toPrimitive$g(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$g(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function defaultUniqBy(entry) {
    return entry.dataKey;
  }
  function renderContent(content, props) {
    if (/* @__PURE__ */ React__namespace.isValidElement(content)) {
      return /* @__PURE__ */ React__namespace.cloneElement(content, props);
    }
    if (typeof content === "function") {
      return /* @__PURE__ */ React__namespace.createElement(content, props);
    }
    return /* @__PURE__ */ React__namespace.createElement(DefaultTooltipContent, props);
  }
  var emptyPayload = [];
  var defaultTooltipProps = {
    allowEscapeViewBox: {
      x: false,
      y: false
    },
    animationDuration: 400,
    animationEasing: "ease",
    axisId: 0,
    contentStyle: {},
    cursor: true,
    filterNull: true,
    isAnimationActive: "auto",
    itemSorter: "name",
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: {
      x: false,
      y: false
    },
    separator: " : ",
    trigger: "hover",
    useTranslate3d: false,
    wrapperStyle: {}
  };
  function Tooltip(outsideProps) {
    var _useAppSelector, _ref2;
    var props = resolveDefaultProps(outsideProps, defaultTooltipProps);
    var {
      active: activeFromProps,
      allowEscapeViewBox,
      animationDuration,
      animationEasing,
      content,
      filterNull,
      isAnimationActive,
      offset,
      payloadUniqBy,
      position,
      reverseDirection,
      useTranslate3d,
      wrapperStyle,
      cursor,
      shared,
      trigger,
      defaultIndex,
      portal: portalFromProps,
      axisId
    } = props;
    var dispatch = useAppDispatch();
    var defaultIndexAsString = typeof defaultIndex === "number" ? String(defaultIndex) : defaultIndex;
    React.useEffect(() => {
      dispatch(setTooltipSettingsState({
        shared,
        trigger,
        axisId,
        active: activeFromProps,
        defaultIndex: defaultIndexAsString
      }));
    }, [dispatch, shared, trigger, axisId, activeFromProps, defaultIndexAsString]);
    var viewBox = useViewBox();
    var accessibilityLayer = useAccessibilityLayer();
    var tooltipEventType = useTooltipEventType(shared);
    var {
      activeIndex,
      isActive
    } = (_useAppSelector = useAppSelector((state) => selectIsTooltipActive(state, tooltipEventType, trigger, defaultIndexAsString))) !== null && _useAppSelector !== void 0 ? _useAppSelector : {};
    var payloadFromRedux = useAppSelector((state) => selectTooltipPayload(state, tooltipEventType, trigger, defaultIndexAsString));
    var labelFromRedux = useAppSelector((state) => selectActiveLabel(state, tooltipEventType, trigger, defaultIndexAsString));
    var coordinate = useAppSelector((state) => selectActiveCoordinate(state, tooltipEventType, trigger, defaultIndexAsString));
    var payload = payloadFromRedux;
    var tooltipPortalFromContext = useTooltipPortal();
    var finalIsActive = (_ref2 = activeFromProps !== null && activeFromProps !== void 0 ? activeFromProps : isActive) !== null && _ref2 !== void 0 ? _ref2 : false;
    var [lastBoundingBox, updateBoundingBox] = useElementOffset([payload, finalIsActive]);
    var finalLabel = tooltipEventType === "axis" ? labelFromRedux : void 0;
    useTooltipChartSynchronisation(tooltipEventType, trigger, coordinate, finalLabel, activeIndex, finalIsActive);
    var tooltipPortal = portalFromProps !== null && portalFromProps !== void 0 ? portalFromProps : tooltipPortalFromContext;
    if (tooltipPortal == null || viewBox == null || tooltipEventType == null) {
      return null;
    }
    var finalPayload = payload !== null && payload !== void 0 ? payload : emptyPayload;
    if (!finalIsActive) {
      finalPayload = emptyPayload;
    }
    if (filterNull && finalPayload.length) {
      finalPayload = getUniqPayload(finalPayload.filter((entry) => entry.value != null && (entry.hide !== true || props.includeHidden)), payloadUniqBy, defaultUniqBy);
    }
    var hasPayload = finalPayload.length > 0;
    var tooltipElement = /* @__PURE__ */ React__namespace.createElement(TooltipBoundingBox, {
      allowEscapeViewBox,
      animationDuration,
      animationEasing,
      isAnimationActive,
      active: finalIsActive,
      coordinate,
      hasPayload,
      offset,
      position,
      reverseDirection,
      useTranslate3d,
      viewBox,
      wrapperStyle,
      lastBoundingBox,
      innerRef: updateBoundingBox,
      hasPortalFromProps: Boolean(portalFromProps)
    }, renderContent(content, _objectSpread$e(_objectSpread$e({}, props), {}, {
      payload: finalPayload,
      label: finalLabel,
      active: finalIsActive,
      activeIndex,
      coordinate,
      accessibilityLayer
    })));
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ reactDom.createPortal(tooltipElement, tooltipPortal), finalIsActive && /* @__PURE__ */ React__namespace.createElement(Cursor, {
      cursor,
      tooltipEventType,
      coordinate,
      payload: finalPayload,
      index: activeIndex
    }));
  }
  var Cell = (_props) => null;
  Cell.displayName = "Cell";
  function _defineProperty$f(e, r2, t) {
    return (r2 = _toPropertyKey$f(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$f(t) {
    var i = _toPrimitive$f(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$f(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  class LRUCache {
    constructor(maxSize) {
      _defineProperty$f(this, "cache", /* @__PURE__ */ new Map());
      this.maxSize = maxSize;
    }
    get(key) {
      var value = this.cache.get(key);
      if (value !== void 0) {
        this.cache.delete(key);
        this.cache.set(key, value);
      }
      return value;
    }
    set(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      } else if (this.cache.size >= this.maxSize) {
        var firstKey = this.cache.keys().next().value;
        if (firstKey != null) {
          this.cache.delete(firstKey);
        }
      }
      this.cache.set(key, value);
    }
    clear() {
      this.cache.clear();
    }
    size() {
      return this.cache.size;
    }
  }
  function ownKeys$d(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$d(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$d(Object(t), true).forEach(function(r3) {
        _defineProperty$e(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$e(e, r2, t) {
    return (r2 = _toPropertyKey$e(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$e(t) {
    var i = _toPrimitive$e(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$e(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var defaultConfig = {
    cacheSize: 2e3,
    enableCache: true
  };
  var currentConfig = _objectSpread$d({}, defaultConfig);
  var stringCache = new LRUCache(currentConfig.cacheSize);
  var SPAN_STYLE = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre"
  };
  var MEASUREMENT_SPAN_ID = "recharts_measurement_span";
  function createCacheKey(text, style) {
    var fontSize = style.fontSize || "";
    var fontFamily = style.fontFamily || "";
    var fontWeight = style.fontWeight || "";
    var fontStyle = style.fontStyle || "";
    var letterSpacing = style.letterSpacing || "";
    var textTransform = style.textTransform || "";
    return "".concat(text, "|").concat(fontSize, "|").concat(fontFamily, "|").concat(fontWeight, "|").concat(fontStyle, "|").concat(letterSpacing, "|").concat(textTransform);
  }
  var measureTextWithDOM = (text, style) => {
    try {
      var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
      if (!measurementSpan) {
        measurementSpan = document.createElement("span");
        measurementSpan.setAttribute("id", MEASUREMENT_SPAN_ID);
        measurementSpan.setAttribute("aria-hidden", "true");
        document.body.appendChild(measurementSpan);
      }
      Object.assign(measurementSpan.style, SPAN_STYLE, style);
      measurementSpan.textContent = "".concat(text);
      var rect = measurementSpan.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height
      };
    } catch (_unused) {
      return {
        width: 0,
        height: 0
      };
    }
  };
  var getStringSize = function getStringSize2(text) {
    var style = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (text === void 0 || text === null || Global.isSsr) {
      return {
        width: 0,
        height: 0
      };
    }
    if (!currentConfig.enableCache) {
      return measureTextWithDOM(text, style);
    }
    var cacheKey = createCacheKey(text, style);
    var cachedResult = stringCache.get(cacheKey);
    if (cachedResult) {
      return cachedResult;
    }
    var result = measureTextWithDOM(text, style);
    stringCache.set(cacheKey, result);
    return result;
  };
  var MULTIPLY_OR_DIVIDE_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
  var ADD_OR_SUBTRACT_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
  var CSS_LENGTH_UNIT_REGEX = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/;
  var NUM_SPLIT_REGEX = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/;
  var CONVERSION_RATES = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1
  };
  var FIXED_CSS_LENGTH_UNITS = Object.keys(CONVERSION_RATES);
  var STR_NAN = "NaN";
  function convertToPx(value, unit2) {
    return value * CONVERSION_RATES[unit2];
  }
  class DecimalCSS {
    static parse(str) {
      var _NUM_SPLIT_REGEX$exec;
      var [, numStr, unit2] = (_NUM_SPLIT_REGEX$exec = NUM_SPLIT_REGEX.exec(str)) !== null && _NUM_SPLIT_REGEX$exec !== void 0 ? _NUM_SPLIT_REGEX$exec : [];
      return new DecimalCSS(parseFloat(numStr), unit2 !== null && unit2 !== void 0 ? unit2 : "");
    }
    constructor(num, unit2) {
      this.num = num;
      this.unit = unit2;
      this.num = num;
      this.unit = unit2;
      if (isNan(num)) {
        this.unit = "";
      }
      if (unit2 !== "" && !CSS_LENGTH_UNIT_REGEX.test(unit2)) {
        this.num = NaN;
        this.unit = "";
      }
      if (FIXED_CSS_LENGTH_UNITS.includes(unit2)) {
        this.num = convertToPx(num, unit2);
        this.unit = "px";
      }
    }
    add(other) {
      if (this.unit !== other.unit) {
        return new DecimalCSS(NaN, "");
      }
      return new DecimalCSS(this.num + other.num, this.unit);
    }
    subtract(other) {
      if (this.unit !== other.unit) {
        return new DecimalCSS(NaN, "");
      }
      return new DecimalCSS(this.num - other.num, this.unit);
    }
    multiply(other) {
      if (this.unit !== "" && other.unit !== "" && this.unit !== other.unit) {
        return new DecimalCSS(NaN, "");
      }
      return new DecimalCSS(this.num * other.num, this.unit || other.unit);
    }
    divide(other) {
      if (this.unit !== "" && other.unit !== "" && this.unit !== other.unit) {
        return new DecimalCSS(NaN, "");
      }
      return new DecimalCSS(this.num / other.num, this.unit || other.unit);
    }
    toString() {
      return "".concat(this.num).concat(this.unit);
    }
    isNaN() {
      return isNan(this.num);
    }
  }
  function calculateArithmetic(expr) {
    if (expr.includes(STR_NAN)) {
      return STR_NAN;
    }
    var newExpr = expr;
    while (newExpr.includes("*") || newExpr.includes("/")) {
      var _MULTIPLY_OR_DIVIDE_R;
      var [, leftOperand, operator, rightOperand] = (_MULTIPLY_OR_DIVIDE_R = MULTIPLY_OR_DIVIDE_REGEX.exec(newExpr)) !== null && _MULTIPLY_OR_DIVIDE_R !== void 0 ? _MULTIPLY_OR_DIVIDE_R : [];
      var lTs = DecimalCSS.parse(leftOperand !== null && leftOperand !== void 0 ? leftOperand : "");
      var rTs = DecimalCSS.parse(rightOperand !== null && rightOperand !== void 0 ? rightOperand : "");
      var result = operator === "*" ? lTs.multiply(rTs) : lTs.divide(rTs);
      if (result.isNaN()) {
        return STR_NAN;
      }
      newExpr = newExpr.replace(MULTIPLY_OR_DIVIDE_REGEX, result.toString());
    }
    while (newExpr.includes("+") || /.-\d+(?:\.\d+)?/.test(newExpr)) {
      var _ADD_OR_SUBTRACT_REGE;
      var [, _leftOperand, _operator, _rightOperand] = (_ADD_OR_SUBTRACT_REGE = ADD_OR_SUBTRACT_REGEX.exec(newExpr)) !== null && _ADD_OR_SUBTRACT_REGE !== void 0 ? _ADD_OR_SUBTRACT_REGE : [];
      var _lTs = DecimalCSS.parse(_leftOperand !== null && _leftOperand !== void 0 ? _leftOperand : "");
      var _rTs = DecimalCSS.parse(_rightOperand !== null && _rightOperand !== void 0 ? _rightOperand : "");
      var _result = _operator === "+" ? _lTs.add(_rTs) : _lTs.subtract(_rTs);
      if (_result.isNaN()) {
        return STR_NAN;
      }
      newExpr = newExpr.replace(ADD_OR_SUBTRACT_REGEX, _result.toString());
    }
    return newExpr;
  }
  var PARENTHESES_REGEX = /\(([^()]*)\)/;
  function calculateParentheses(expr) {
    var newExpr = expr;
    var match;
    while ((match = PARENTHESES_REGEX.exec(newExpr)) != null) {
      var [, parentheticalExpression] = match;
      newExpr = newExpr.replace(PARENTHESES_REGEX, calculateArithmetic(parentheticalExpression));
    }
    return newExpr;
  }
  function evaluateExpression(expression) {
    var newExpr = expression.replace(/\s+/g, "");
    newExpr = calculateParentheses(newExpr);
    newExpr = calculateArithmetic(newExpr);
    return newExpr;
  }
  function safeEvaluateExpression(expression) {
    try {
      return evaluateExpression(expression);
    } catch (_unused) {
      return STR_NAN;
    }
  }
  function reduceCSSCalc(expression) {
    var result = safeEvaluateExpression(expression.slice(5, -1));
    if (result === STR_NAN) {
      return "";
    }
    return result;
  }
  var _excluded$e = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], _excluded2$6 = ["dx", "dy", "angle", "className", "breakAll"];
  function _extends$d() {
    return _extends$d = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$d.apply(null, arguments);
  }
  function _objectWithoutProperties$e(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$e(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$e(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  var BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;
  var calculateWordWidths = (_ref2) => {
    var {
      children,
      breakAll,
      style
    } = _ref2;
    try {
      var words = [];
      if (!isNullish(children)) {
        if (breakAll) {
          words = children.toString().split("");
        } else {
          words = children.toString().split(BREAKING_SPACES);
        }
      }
      var wordsWithComputedWidth = words.map((word) => ({
        word,
        width: getStringSize(word, style).width
      }));
      var spaceWidth = breakAll ? 0 : getStringSize(" ", style).width;
      return {
        wordsWithComputedWidth,
        spaceWidth
      };
    } catch (_unused) {
      return null;
    }
  };
  function isValidTextAnchor(value) {
    return value === "start" || value === "middle" || value === "end" || value === "inherit";
  }
  var calculate = (words, lineWidth, spaceWidth, scaleToFit) => words.reduce((result, _ref2) => {
    var {
      word,
      width
    } = _ref2;
    var currentLine = result[result.length - 1];
    if (currentLine && width != null && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < Number(lineWidth))) {
      currentLine.words.push(word);
      currentLine.width += width + spaceWidth;
    } else {
      var newLine = {
        words: [word],
        width
      };
      result.push(newLine);
    }
    return result;
  }, []);
  var findLongestLine = (words) => words.reduce((a2, b) => a2.width > b.width ? a2 : b);
  var suffix = "…";
  var checkOverflow = (text, index, breakAll, style, maxLines, lineWidth, spaceWidth, scaleToFit) => {
    var tempText = text.slice(0, index);
    var words = calculateWordWidths({
      breakAll,
      style,
      children: tempText + suffix
    });
    if (!words) {
      return [false, []];
    }
    var result = calculate(words.wordsWithComputedWidth, lineWidth, spaceWidth, scaleToFit);
    var doesOverflow = result.length > maxLines || findLongestLine(result).width > Number(lineWidth);
    return [doesOverflow, result];
  };
  var calculateWordsByLines = (_ref3, initialWordsWithComputedWith, spaceWidth, lineWidth, scaleToFit) => {
    var {
      maxLines,
      children,
      style,
      breakAll
    } = _ref3;
    var shouldLimitLines = isNumber(maxLines);
    var text = String(children);
    var originalResult = calculate(initialWordsWithComputedWith, lineWidth, spaceWidth, scaleToFit);
    if (!shouldLimitLines || scaleToFit) {
      return originalResult;
    }
    var overflows = originalResult.length > maxLines || findLongestLine(originalResult).width > Number(lineWidth);
    if (!overflows) {
      return originalResult;
    }
    var start = 0;
    var end = text.length - 1;
    var iterations = 0;
    var trimmedResult;
    while (start <= end && iterations <= text.length - 1) {
      var middle = Math.floor((start + end) / 2);
      var prev = middle - 1;
      var [doesPrevOverflow, result] = checkOverflow(text, prev, breakAll, style, maxLines, lineWidth, spaceWidth, scaleToFit);
      var [doesMiddleOverflow] = checkOverflow(text, middle, breakAll, style, maxLines, lineWidth, spaceWidth, scaleToFit);
      if (!doesPrevOverflow && !doesMiddleOverflow) {
        start = middle + 1;
      }
      if (doesPrevOverflow && doesMiddleOverflow) {
        end = middle - 1;
      }
      if (!doesPrevOverflow && doesMiddleOverflow) {
        trimmedResult = result;
        break;
      }
      iterations++;
    }
    return trimmedResult || originalResult;
  };
  var getWordsWithoutCalculate = (children) => {
    var words = !isNullish(children) ? children.toString().split(BREAKING_SPACES) : [];
    return [{
      words,
      width: void 0
    }];
  };
  var getWordsByLines = (_ref4) => {
    var {
      width,
      scaleToFit,
      children,
      style,
      breakAll,
      maxLines
    } = _ref4;
    if ((width || scaleToFit) && !Global.isSsr) {
      var wordsWithComputedWidth, spaceWidth;
      var wordWidths = calculateWordWidths({
        breakAll,
        children,
        style
      });
      if (wordWidths) {
        var {
          wordsWithComputedWidth: wcw,
          spaceWidth: sw
        } = wordWidths;
        wordsWithComputedWidth = wcw;
        spaceWidth = sw;
      } else {
        return getWordsWithoutCalculate(children);
      }
      return calculateWordsByLines({
        breakAll,
        children,
        maxLines,
        style
      }, wordsWithComputedWidth, spaceWidth, width, Boolean(scaleToFit));
    }
    return getWordsWithoutCalculate(children);
  };
  var DEFAULT_FILL = "#808080";
  var textDefaultProps = {
    angle: 0,
    breakAll: false,
    // Magic number from d3
    capHeight: "0.71em",
    fill: DEFAULT_FILL,
    lineHeight: "1em",
    scaleToFit: false,
    textAnchor: "start",
    // Maintain compat with existing charts / default SVG behavior
    verticalAnchor: "end",
    x: 0,
    y: 0
  };
  var Text = /* @__PURE__ */ React.forwardRef((outsideProps, ref) => {
    var _resolveDefaultProps = resolveDefaultProps(outsideProps, textDefaultProps), {
      x: propsX,
      y: propsY,
      lineHeight,
      capHeight,
      fill,
      scaleToFit,
      textAnchor,
      verticalAnchor
    } = _resolveDefaultProps, props = _objectWithoutProperties$e(_resolveDefaultProps, _excluded$e);
    var wordsByLines = React.useMemo(() => {
      return getWordsByLines({
        breakAll: props.breakAll,
        children: props.children,
        maxLines: props.maxLines,
        scaleToFit,
        style: props.style,
        width: props.width
      });
    }, [props.breakAll, props.children, props.maxLines, scaleToFit, props.style, props.width]);
    var {
      dx,
      dy,
      angle,
      className,
      breakAll
    } = props, textProps = _objectWithoutProperties$e(props, _excluded2$6);
    if (!isNumOrStr(propsX) || !isNumOrStr(propsY) || wordsByLines.length === 0) {
      return null;
    }
    var x2 = Number(propsX) + (isNumber(dx) ? dx : 0);
    var y2 = Number(propsY) + (isNumber(dy) ? dy : 0);
    if (!isWellBehavedNumber(x2) || !isWellBehavedNumber(y2)) {
      return null;
    }
    var startDy;
    switch (verticalAnchor) {
      case "start":
        startDy = reduceCSSCalc("calc(".concat(capHeight, ")"));
        break;
      case "middle":
        startDy = reduceCSSCalc("calc(".concat((wordsByLines.length - 1) / 2, " * -").concat(lineHeight, " + (").concat(capHeight, " / 2))"));
        break;
      default:
        startDy = reduceCSSCalc("calc(".concat(wordsByLines.length - 1, " * -").concat(lineHeight, ")"));
        break;
    }
    var transforms = [];
    if (scaleToFit) {
      var lineWidth = wordsByLines[0].width;
      var {
        width
      } = props;
      transforms.push("scale(".concat(isNumber(width) && isNumber(lineWidth) ? width / lineWidth : 1, ")"));
    }
    if (angle) {
      transforms.push("rotate(".concat(angle, ", ").concat(x2, ", ").concat(y2, ")"));
    }
    if (transforms.length) {
      textProps.transform = transforms.join(" ");
    }
    return /* @__PURE__ */ React__namespace.createElement("text", _extends$d({}, svgPropertiesAndEvents(textProps), {
      ref,
      x: x2,
      y: y2,
      className: clsx("recharts-text", className),
      textAnchor,
      fill: fill.includes("url") ? DEFAULT_FILL : fill
    }), wordsByLines.map((line, index) => {
      var words = line.words.join(breakAll ? "" : " ");
      return (
        // duplicate words will cause duplicate keys which is why we add the array index here
        /* @__PURE__ */ React__namespace.createElement("tspan", {
          x: x2,
          dy: index === 0 ? startDy : lineHeight,
          key: "".concat(words, "-").concat(index)
        }, words)
      );
    }));
  });
  Text.displayName = "Text";
  var _excluded$d = ["labelRef"];
  function _objectWithoutProperties$d(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$d(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$d(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  function ownKeys$c(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$c(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$c(Object(t), true).forEach(function(r3) {
        _defineProperty$d(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$d(e, r2, t) {
    return (r2 = _toPropertyKey$d(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$d(t) {
    var i = _toPrimitive$d(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$d(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function _extends$c() {
    return _extends$c = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$c.apply(null, arguments);
  }
  var CartesianLabelContext = /* @__PURE__ */ React.createContext(null);
  var CartesianLabelContextProvider = (_ref2) => {
    var {
      x: x2,
      y: y2,
      upperWidth,
      lowerWidth,
      width,
      height,
      children
    } = _ref2;
    var viewBox = React.useMemo(() => ({
      x: x2,
      y: y2,
      upperWidth,
      lowerWidth,
      width,
      height
    }), [x2, y2, upperWidth, lowerWidth, width, height]);
    return /* @__PURE__ */ React__namespace.createElement(CartesianLabelContext.Provider, {
      value: viewBox
    }, children);
  };
  var useCartesianLabelContext = () => {
    var labelChildContext = React.useContext(CartesianLabelContext);
    var chartContext = useViewBox();
    return labelChildContext || cartesianViewBoxToTrapezoid(chartContext);
  };
  var PolarLabelContext = /* @__PURE__ */ React.createContext(null);
  var usePolarLabelContext = () => {
    var labelChildContext = React.useContext(PolarLabelContext);
    var chartContext = useAppSelector(selectPolarViewBox);
    return labelChildContext || chartContext;
  };
  var getLabel = (props) => {
    var {
      value,
      formatter
    } = props;
    var label = isNullish(props.children) ? value : props.children;
    if (typeof formatter === "function") {
      return formatter(label);
    }
    return label;
  };
  var isLabelContentAFunction = (content) => {
    return content != null && typeof content === "function";
  };
  var getDeltaAngle = (startAngle, endAngle) => {
    var sign2 = mathSign(endAngle - startAngle);
    var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
    return sign2 * deltaAngle;
  };
  var renderRadialLabel = (labelProps, position, label, attrs, viewBox) => {
    var {
      offset,
      className
    } = labelProps;
    var {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      clockWise
    } = viewBox;
    var radius = (innerRadius + outerRadius) / 2;
    var deltaAngle = getDeltaAngle(startAngle, endAngle);
    var sign2 = deltaAngle >= 0 ? 1 : -1;
    var labelAngle, direction;
    switch (position) {
      case "insideStart":
        labelAngle = startAngle + sign2 * offset;
        direction = clockWise;
        break;
      case "insideEnd":
        labelAngle = endAngle - sign2 * offset;
        direction = !clockWise;
        break;
      case "end":
        labelAngle = endAngle + sign2 * offset;
        direction = clockWise;
        break;
      default:
        throw new Error("Unsupported position ".concat(position));
    }
    direction = deltaAngle <= 0 ? direction : !direction;
    var startPoint = polarToCartesian(cx, cy, radius, labelAngle);
    var endPoint = polarToCartesian(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
    var path = "M".concat(startPoint.x, ",").concat(startPoint.y, "\n    A").concat(radius, ",").concat(radius, ",0,1,").concat(direction ? 0 : 1, ",\n    ").concat(endPoint.x, ",").concat(endPoint.y);
    var id = isNullish(labelProps.id) ? uniqueId("recharts-radial-line-") : labelProps.id;
    return /* @__PURE__ */ React__namespace.createElement("text", _extends$c({}, attrs, {
      dominantBaseline: "central",
      className: clsx("recharts-radial-bar-label", className)
    }), /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("path", {
      id,
      d: path
    })), /* @__PURE__ */ React__namespace.createElement("textPath", {
      xlinkHref: "#".concat(id)
    }, label));
  };
  var getAttrsOfPolarLabel = (viewBox, offset, position) => {
    var {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle
    } = viewBox;
    var midAngle = (startAngle + endAngle) / 2;
    if (position === "outside") {
      var {
        x: _x,
        y: _y
      } = polarToCartesian(cx, cy, outerRadius + offset, midAngle);
      return {
        x: _x,
        y: _y,
        textAnchor: _x >= cx ? "start" : "end",
        verticalAnchor: "middle"
      };
    }
    if (position === "center") {
      return {
        x: cx,
        y: cy,
        textAnchor: "middle",
        verticalAnchor: "middle"
      };
    }
    if (position === "centerTop") {
      return {
        x: cx,
        y: cy,
        textAnchor: "middle",
        verticalAnchor: "start"
      };
    }
    if (position === "centerBottom") {
      return {
        x: cx,
        y: cy,
        textAnchor: "middle",
        verticalAnchor: "end"
      };
    }
    var r2 = (innerRadius + outerRadius) / 2;
    var {
      x: x2,
      y: y2
    } = polarToCartesian(cx, cy, r2, midAngle);
    return {
      x: x2,
      y: y2,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  };
  var isPolar = (viewBox) => "cx" in viewBox && isNumber(viewBox.cx);
  var getAttrsOfCartesianLabel = (props, viewBox) => {
    var {
      parentViewBox: parentViewBoxFromProps,
      offset,
      position
    } = props;
    var parentViewBox;
    if (parentViewBoxFromProps != null && !isPolar(parentViewBoxFromProps)) {
      parentViewBox = parentViewBoxFromProps;
    }
    var {
      x: x2,
      y: y2,
      upperWidth,
      lowerWidth,
      height
    } = viewBox;
    var upperX = x2;
    var lowerX = x2 + (upperWidth - lowerWidth) / 2;
    var middleX = (upperX + lowerX) / 2;
    var midHeightWidth = (upperWidth + lowerWidth) / 2;
    var centerX = upperX + upperWidth / 2;
    var verticalSign = height >= 0 ? 1 : -1;
    var verticalOffset = verticalSign * offset;
    var verticalEnd = verticalSign > 0 ? "end" : "start";
    var verticalStart = verticalSign > 0 ? "start" : "end";
    var horizontalSign = upperWidth >= 0 ? 1 : -1;
    var horizontalOffset = horizontalSign * offset;
    var horizontalEnd = horizontalSign > 0 ? "end" : "start";
    var horizontalStart = horizontalSign > 0 ? "start" : "end";
    if (position === "top") {
      var attrs = {
        x: upperX + upperWidth / 2,
        y: y2 - verticalOffset,
        textAnchor: "middle",
        verticalAnchor: verticalEnd
      };
      return _objectSpread$c(_objectSpread$c({}, attrs), parentViewBox ? {
        height: Math.max(y2 - parentViewBox.y, 0),
        width: upperWidth
      } : {});
    }
    if (position === "bottom") {
      var _attrs = {
        x: lowerX + lowerWidth / 2,
        y: y2 + height + verticalOffset,
        textAnchor: "middle",
        verticalAnchor: verticalStart
      };
      return _objectSpread$c(_objectSpread$c({}, _attrs), parentViewBox ? {
        height: Math.max(parentViewBox.y + parentViewBox.height - (y2 + height), 0),
        width: lowerWidth
      } : {});
    }
    if (position === "left") {
      var _attrs2 = {
        x: middleX - horizontalOffset,
        y: y2 + height / 2,
        textAnchor: horizontalEnd,
        verticalAnchor: "middle"
      };
      return _objectSpread$c(_objectSpread$c({}, _attrs2), parentViewBox ? {
        width: Math.max(_attrs2.x - parentViewBox.x, 0),
        height
      } : {});
    }
    if (position === "right") {
      var _attrs3 = {
        x: middleX + midHeightWidth + horizontalOffset,
        y: y2 + height / 2,
        textAnchor: horizontalStart,
        verticalAnchor: "middle"
      };
      return _objectSpread$c(_objectSpread$c({}, _attrs3), parentViewBox ? {
        width: Math.max(parentViewBox.x + parentViewBox.width - _attrs3.x, 0),
        height
      } : {});
    }
    var sizeAttrs = parentViewBox ? {
      width: midHeightWidth,
      height
    } : {};
    if (position === "insideLeft") {
      return _objectSpread$c({
        x: middleX + horizontalOffset,
        y: y2 + height / 2,
        textAnchor: horizontalStart,
        verticalAnchor: "middle"
      }, sizeAttrs);
    }
    if (position === "insideRight") {
      return _objectSpread$c({
        x: middleX + midHeightWidth - horizontalOffset,
        y: y2 + height / 2,
        textAnchor: horizontalEnd,
        verticalAnchor: "middle"
      }, sizeAttrs);
    }
    if (position === "insideTop") {
      return _objectSpread$c({
        x: upperX + upperWidth / 2,
        y: y2 + verticalOffset,
        textAnchor: "middle",
        verticalAnchor: verticalStart
      }, sizeAttrs);
    }
    if (position === "insideBottom") {
      return _objectSpread$c({
        x: lowerX + lowerWidth / 2,
        y: y2 + height - verticalOffset,
        textAnchor: "middle",
        verticalAnchor: verticalEnd
      }, sizeAttrs);
    }
    if (position === "insideTopLeft") {
      return _objectSpread$c({
        x: upperX + horizontalOffset,
        y: y2 + verticalOffset,
        textAnchor: horizontalStart,
        verticalAnchor: verticalStart
      }, sizeAttrs);
    }
    if (position === "insideTopRight") {
      return _objectSpread$c({
        x: upperX + upperWidth - horizontalOffset,
        y: y2 + verticalOffset,
        textAnchor: horizontalEnd,
        verticalAnchor: verticalStart
      }, sizeAttrs);
    }
    if (position === "insideBottomLeft") {
      return _objectSpread$c({
        x: lowerX + horizontalOffset,
        y: y2 + height - verticalOffset,
        textAnchor: horizontalStart,
        verticalAnchor: verticalEnd
      }, sizeAttrs);
    }
    if (position === "insideBottomRight") {
      return _objectSpread$c({
        x: lowerX + lowerWidth - horizontalOffset,
        y: y2 + height - verticalOffset,
        textAnchor: horizontalEnd,
        verticalAnchor: verticalEnd
      }, sizeAttrs);
    }
    if (!!position && typeof position === "object" && (isNumber(position.x) || isPercent(position.x)) && (isNumber(position.y) || isPercent(position.y))) {
      return _objectSpread$c({
        x: x2 + getPercentValue(position.x, midHeightWidth),
        y: y2 + getPercentValue(position.y, height),
        textAnchor: "end",
        verticalAnchor: "end"
      }, sizeAttrs);
    }
    return _objectSpread$c({
      x: centerX,
      y: y2 + height / 2,
      textAnchor: "middle",
      verticalAnchor: "middle"
    }, sizeAttrs);
  };
  var defaultLabelProps = {
    angle: 0,
    offset: 5,
    zIndex: DefaultZIndexes.label,
    position: "middle",
    textBreakAll: false
  };
  function Label(outerProps) {
    var props = resolveDefaultProps(outerProps, defaultLabelProps);
    var {
      viewBox: viewBoxFromProps,
      position,
      value,
      children,
      content,
      className = "",
      textBreakAll,
      labelRef
    } = props;
    var polarViewBox = usePolarLabelContext();
    var cartesianViewBox = useCartesianLabelContext();
    var resolvedViewBox = position === "center" ? cartesianViewBox : polarViewBox !== null && polarViewBox !== void 0 ? polarViewBox : cartesianViewBox;
    var viewBox, label, positionAttrs;
    if (viewBoxFromProps == null) {
      viewBox = resolvedViewBox;
    } else if (isPolar(viewBoxFromProps)) {
      viewBox = viewBoxFromProps;
    } else {
      viewBox = cartesianViewBoxToTrapezoid(viewBoxFromProps);
    }
    if (!viewBox || isNullish(value) && isNullish(children) && !/* @__PURE__ */ React.isValidElement(content) && typeof content !== "function") {
      return null;
    }
    var propsWithViewBox = _objectSpread$c(_objectSpread$c({}, props), {}, {
      viewBox
    });
    if (/* @__PURE__ */ React.isValidElement(content)) {
      var {
        labelRef: _
      } = propsWithViewBox, propsWithoutLabelRef = _objectWithoutProperties$d(propsWithViewBox, _excluded$d);
      return /* @__PURE__ */ React.cloneElement(content, propsWithoutLabelRef);
    }
    if (typeof content === "function") {
      label = /* @__PURE__ */ React.createElement(content, propsWithViewBox);
      if (/* @__PURE__ */ React.isValidElement(label)) {
        return label;
      }
    } else {
      label = getLabel(props);
    }
    var attrs = svgPropertiesAndEvents(props);
    if (isPolar(viewBox)) {
      if (position === "insideStart" || position === "insideEnd" || position === "end") {
        return renderRadialLabel(props, position, label, attrs, viewBox);
      }
      positionAttrs = getAttrsOfPolarLabel(viewBox, props.offset, props.position);
    } else {
      positionAttrs = getAttrsOfCartesianLabel(props, viewBox);
    }
    return /* @__PURE__ */ React__namespace.createElement(ZIndexLayer, {
      zIndex: props.zIndex
    }, /* @__PURE__ */ React__namespace.createElement(Text, _extends$c({
      ref: labelRef,
      className: clsx("recharts-label", className)
    }, attrs, positionAttrs, {
      /*
       * textAnchor is decided by default based on the `position`
       * but we allow overriding via props for precise control.
       */
      textAnchor: isValidTextAnchor(attrs.textAnchor) ? attrs.textAnchor : positionAttrs.textAnchor,
      breakAll: textBreakAll
    }), label));
  }
  Label.displayName = "Label";
  var parseLabel = (label, viewBox, labelRef) => {
    if (!label) {
      return null;
    }
    var commonProps = {
      viewBox,
      labelRef
    };
    if (label === true) {
      return /* @__PURE__ */ React__namespace.createElement(Label, _extends$c({
        key: "label-implicit"
      }, commonProps));
    }
    if (isNumOrStr(label)) {
      return /* @__PURE__ */ React__namespace.createElement(Label, _extends$c({
        key: "label-implicit",
        value: label
      }, commonProps));
    }
    if (/* @__PURE__ */ React.isValidElement(label)) {
      if (label.type === Label) {
        return /* @__PURE__ */ React.cloneElement(label, _objectSpread$c({
          key: "label-implicit"
        }, commonProps));
      }
      return /* @__PURE__ */ React__namespace.createElement(Label, _extends$c({
        key: "label-implicit",
        content: label
      }, commonProps));
    }
    if (isLabelContentAFunction(label)) {
      return /* @__PURE__ */ React__namespace.createElement(Label, _extends$c({
        key: "label-implicit",
        content: label
      }, commonProps));
    }
    if (label && typeof label === "object") {
      return /* @__PURE__ */ React__namespace.createElement(Label, _extends$c({}, label, {
        key: "label-implicit"
      }, commonProps));
    }
    return null;
  };
  function CartesianLabelFromLabelProp(_ref3) {
    var {
      label,
      labelRef
    } = _ref3;
    var viewBox = useCartesianLabelContext();
    return parseLabel(label, viewBox, labelRef) || null;
  }
  var last$3 = {};
  var last$2 = {};
  var hasRequiredLast$2;
  function requireLast$2() {
    if (hasRequiredLast$2) return last$2;
    hasRequiredLast$2 = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function last2(arr) {
        return arr[arr.length - 1];
      }
      exports$1.last = last2;
    })(last$2);
    return last$2;
  }
  var toArray$1 = {};
  var hasRequiredToArray;
  function requireToArray() {
    if (hasRequiredToArray) return toArray$1;
    hasRequiredToArray = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function toArray2(value) {
        return Array.isArray(value) ? value : Array.from(value);
      }
      exports$1.toArray = toArray2;
    })(toArray$1);
    return toArray$1;
  }
  var hasRequiredLast$1;
  function requireLast$1() {
    if (hasRequiredLast$1) return last$3;
    hasRequiredLast$1 = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      const last$12 = /* @__PURE__ */ requireLast$2();
      const toArray2 = /* @__PURE__ */ requireToArray();
      const isArrayLike2 = /* @__PURE__ */ requireIsArrayLike();
      function last2(array2) {
        if (!isArrayLike2.isArrayLike(array2)) {
          return void 0;
        }
        return last$12.last(toArray2.toArray(array2));
      }
      exports$1.last = last2;
    })(last$3);
    return last$3;
  }
  var last$1;
  var hasRequiredLast;
  function requireLast() {
    if (hasRequiredLast) return last$1;
    hasRequiredLast = 1;
    last$1 = requireLast$1().last;
    return last$1;
  }
  var lastExports = /* @__PURE__ */ requireLast();
  const last = /* @__PURE__ */ getDefaultExportFromCjs(lastExports);
  var _excluded$c = ["valueAccessor"], _excluded2$5 = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
  function _extends$b() {
    return _extends$b = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$b.apply(null, arguments);
  }
  function _objectWithoutProperties$c(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$c(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$c(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  var defaultAccessor = (entry) => Array.isArray(entry.value) ? last(entry.value) : entry.value;
  var CartesianLabelListContext = /* @__PURE__ */ React.createContext(void 0);
  var CartesianLabelListContextProvider = CartesianLabelListContext.Provider;
  var PolarLabelListContext = /* @__PURE__ */ React.createContext(void 0);
  var PolarLabelListContextProvider = PolarLabelListContext.Provider;
  function useCartesianLabelListContext() {
    return React.useContext(CartesianLabelListContext);
  }
  function usePolarLabelListContext() {
    return React.useContext(PolarLabelListContext);
  }
  function LabelList(_ref2) {
    var {
      valueAccessor = defaultAccessor
    } = _ref2, restProps = _objectWithoutProperties$c(_ref2, _excluded$c);
    var {
      dataKey,
      clockWise,
      id,
      textBreakAll,
      zIndex
    } = restProps, others = _objectWithoutProperties$c(restProps, _excluded2$5);
    var cartesianData = useCartesianLabelListContext();
    var polarData = usePolarLabelListContext();
    var data = cartesianData || polarData;
    if (!data || !data.length) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(ZIndexLayer, {
      zIndex: zIndex !== null && zIndex !== void 0 ? zIndex : DefaultZIndexes.label
    }, /* @__PURE__ */ React__namespace.createElement(Layer, {
      className: "recharts-label-list"
    }, data.map((entry, index) => {
      var _restProps$fill;
      var value = isNullish(dataKey) ? valueAccessor(entry, index) : getValueByDataKey(entry && entry.payload, dataKey);
      var idProps = isNullish(id) ? {} : {
        id: "".concat(id, "-").concat(index)
      };
      return /* @__PURE__ */ React__namespace.createElement(Label, _extends$b({
        key: "label-".concat(index)
      }, svgPropertiesAndEvents(entry), others, idProps, {
        /*
         * Prefer to use the explicit fill from LabelList props.
         * Only in an absence of that, fall back to the fill of the entry.
         * The entry fill can be quite difficult to see especially in Bar, Pie, RadialBar in inside positions.
         * On the other hand it's quite convenient in Scatter, Line, or when the position is outside the Bar, Pie filled shapes.
         */
        fill: (_restProps$fill = restProps.fill) !== null && _restProps$fill !== void 0 ? _restProps$fill : entry.fill,
        parentViewBox: entry.parentViewBox,
        value,
        textBreakAll,
        viewBox: entry.viewBox,
        index,
        zIndex: 0
      }));
    })));
  }
  LabelList.displayName = "LabelList";
  function LabelListFromLabelProp(_ref2) {
    var {
      label
    } = _ref2;
    if (!label) {
      return null;
    }
    if (label === true) {
      return /* @__PURE__ */ React__namespace.createElement(LabelList, {
        key: "labelList-implicit"
      });
    }
    if (/* @__PURE__ */ React__namespace.isValidElement(label) || isLabelContentAFunction(label)) {
      return /* @__PURE__ */ React__namespace.createElement(LabelList, {
        key: "labelList-implicit",
        content: label
      });
    }
    if (typeof label === "object") {
      return /* @__PURE__ */ React__namespace.createElement(LabelList, _extends$b({
        key: "labelList-implicit"
      }, label, {
        type: String(label.type)
      }));
    }
    return null;
  }
  var selectUnfilteredPolarItems = (state) => state.graphicalItems.polarItems;
  var selectAxisPredicate = createSelector([pickAxisType, pickAxisId], itemAxisPredicate);
  var selectPolarItemsSettings = createSelector([selectUnfilteredPolarItems, selectBaseAxis, selectAxisPredicate], combineGraphicalItemsSettings);
  var selectPolarGraphicalItemsData = createSelector([selectPolarItemsSettings], combineGraphicalItemsData);
  var selectPolarDisplayedData = createSelector([selectPolarGraphicalItemsData, selectChartDataAndAlwaysIgnoreIndexes], combineDisplayedData);
  var selectPolarAppliedValues = createSelector([selectPolarDisplayedData, selectBaseAxis, selectPolarItemsSettings], combineAppliedValues);
  createSelector([selectPolarDisplayedData, selectBaseAxis, selectPolarItemsSettings], (data, axisSettings, items) => {
    if (items.length > 0) {
      return data.flatMap((entry) => {
        return items.flatMap((item) => {
          var _axisSettings$dataKey;
          var valueByDataKey = getValueByDataKey(entry, (_axisSettings$dataKey = axisSettings.dataKey) !== null && _axisSettings$dataKey !== void 0 ? _axisSettings$dataKey : item.dataKey);
          return {
            value: valueByDataKey,
            errorDomain: []
            // polar charts do not have error bars
          };
        });
      }).filter(Boolean);
    }
    if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.dataKey) != null) {
      return data.map((item) => ({
        value: getValueByDataKey(item, axisSettings.dataKey),
        errorDomain: []
      }));
    }
    return data.map((entry) => ({
      value: entry,
      errorDomain: []
    }));
  });
  var unsupportedInPolarChart = () => void 0;
  var selectDomainOfAllPolarAppliedNumericalValues = createSelector([selectPolarDisplayedData, selectBaseAxis, selectPolarItemsSettings, selectAllErrorBarSettings, pickAxisType], combineDomainOfAllAppliedNumericalValuesIncludingErrorValues);
  var selectPolarNumericalDomain = createSelector([selectBaseAxis, selectDomainDefinition, selectDomainFromUserPreference, unsupportedInPolarChart, selectDomainOfAllPolarAppliedNumericalValues, unsupportedInPolarChart, selectChartLayout, pickAxisType], combineNumericalDomain);
  var selectPolarAxisDomain = createSelector([selectBaseAxis, selectChartLayout, selectPolarDisplayedData, selectPolarAppliedValues, selectStackOffsetType, pickAxisType, selectPolarNumericalDomain], combineAxisDomain);
  var selectPolarNiceTicks = createSelector([selectPolarAxisDomain, selectBaseAxis, selectRealScaleType], combineNiceTicks);
  createSelector([selectBaseAxis, selectPolarAxisDomain, selectPolarNiceTicks, pickAxisType], combineAxisDomainWithNiceTicks);
  var initialState$6 = {
    radiusAxis: {},
    angleAxis: {}
  };
  var polarAxisSlice = createSlice({
    name: "polarAxis",
    initialState: initialState$6,
    reducers: {
      addRadiusAxis(state, action) {
        state.radiusAxis[action.payload.id] = castDraft(action.payload);
      },
      removeRadiusAxis(state, action) {
        delete state.radiusAxis[action.payload.id];
      },
      addAngleAxis(state, action) {
        state.angleAxis[action.payload.id] = castDraft(action.payload);
      },
      removeAngleAxis(state, action) {
        delete state.angleAxis[action.payload.id];
      }
    }
  });
  var {
    addRadiusAxis,
    removeRadiusAxis,
    addAngleAxis,
    removeAngleAxis
  } = polarAxisSlice.actions;
  var polarAxisReducer = polarAxisSlice.reducer;
  function ownKeys$b(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$b(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$b(Object(t), true).forEach(function(r3) {
        _defineProperty$c(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$c(e, r2, t) {
    return (r2 = _toPropertyKey$c(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$c(t) {
    var i = _toPrimitive$c(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$c(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var pickId = (_state, id) => id;
  var selectSynchronisedPieSettings = createSelector([selectUnfilteredPolarItems, pickId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "pie").find((item) => item.id === id));
  var emptyArray = [];
  var pickCells$1 = (_state, _id, cells) => {
    if ((cells === null || cells === void 0 ? void 0 : cells.length) === 0) {
      return emptyArray;
    }
    return cells;
  };
  var selectDisplayedData = createSelector([selectChartDataAndAlwaysIgnoreIndexes, selectSynchronisedPieSettings, pickCells$1], (_ref2, pieSettings, cells) => {
    var {
      chartData
    } = _ref2;
    if (pieSettings == null) {
      return void 0;
    }
    var displayedData;
    if ((pieSettings === null || pieSettings === void 0 ? void 0 : pieSettings.data) != null && pieSettings.data.length > 0) {
      displayedData = pieSettings.data;
    } else {
      displayedData = chartData;
    }
    if ((!displayedData || !displayedData.length) && cells != null) {
      displayedData = cells.map((cell) => _objectSpread$b(_objectSpread$b({}, pieSettings.presentationProps), cell.props));
    }
    if (displayedData == null) {
      return void 0;
    }
    return displayedData;
  });
  var selectPieLegend = createSelector([selectDisplayedData, selectSynchronisedPieSettings, pickCells$1], (displayedData, pieSettings, cells) => {
    if (displayedData == null || pieSettings == null) {
      return void 0;
    }
    return displayedData.map((entry, i) => {
      var _cells$i;
      var name = getValueByDataKey(entry, pieSettings.nameKey, pieSettings.name);
      var color2;
      if (cells !== null && cells !== void 0 && (_cells$i = cells[i]) !== null && _cells$i !== void 0 && (_cells$i = _cells$i.props) !== null && _cells$i !== void 0 && _cells$i.fill) {
        color2 = cells[i].props.fill;
      } else if (typeof entry === "object" && entry != null && "fill" in entry) {
        color2 = entry.fill;
      } else {
        color2 = pieSettings.fill;
      }
      return {
        value: getTooltipNameProp(name, pieSettings.dataKey),
        color: color2,
        // @ts-expect-error we need a better typing for our data inputs
        payload: entry,
        type: pieSettings.legendType
      };
    });
  });
  var selectPieSectors = createSelector([selectDisplayedData, selectSynchronisedPieSettings, pickCells$1, selectChartOffsetInternal], (displayedData, pieSettings, cells, offset) => {
    if (pieSettings == null || displayedData == null) {
      return void 0;
    }
    return computePieSectors({
      offset,
      pieSettings,
      displayedData,
      cells
    });
  });
  var reactIs = { exports: {} };
  var reactIs_production = {};
  /**
   * @license React
   * react-is.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactIs_production;
  function requireReactIs_production() {
    if (hasRequiredReactIs_production) return reactIs_production;
    hasRequiredReactIs_production = 1;
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    function typeOf(object2) {
      if ("object" === typeof object2 && null !== object2) {
        var $$typeof = object2.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            switch (object2 = object2.type, object2) {
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
              case REACT_SUSPENSE_LIST_TYPE:
              case REACT_VIEW_TRANSITION_TYPE:
                return object2;
              default:
                switch (object2 = object2 && object2.$$typeof, object2) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                    return object2;
                  case REACT_CONSUMER_TYPE:
                    return object2;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
    }
    reactIs_production.ContextConsumer = REACT_CONSUMER_TYPE;
    reactIs_production.ContextProvider = REACT_CONTEXT_TYPE;
    reactIs_production.Element = REACT_ELEMENT_TYPE;
    reactIs_production.ForwardRef = REACT_FORWARD_REF_TYPE;
    reactIs_production.Fragment = REACT_FRAGMENT_TYPE;
    reactIs_production.Lazy = REACT_LAZY_TYPE;
    reactIs_production.Memo = REACT_MEMO_TYPE;
    reactIs_production.Portal = REACT_PORTAL_TYPE;
    reactIs_production.Profiler = REACT_PROFILER_TYPE;
    reactIs_production.StrictMode = REACT_STRICT_MODE_TYPE;
    reactIs_production.Suspense = REACT_SUSPENSE_TYPE;
    reactIs_production.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
    reactIs_production.isContextConsumer = function(object2) {
      return typeOf(object2) === REACT_CONSUMER_TYPE;
    };
    reactIs_production.isContextProvider = function(object2) {
      return typeOf(object2) === REACT_CONTEXT_TYPE;
    };
    reactIs_production.isElement = function(object2) {
      return "object" === typeof object2 && null !== object2 && object2.$$typeof === REACT_ELEMENT_TYPE;
    };
    reactIs_production.isForwardRef = function(object2) {
      return typeOf(object2) === REACT_FORWARD_REF_TYPE;
    };
    reactIs_production.isFragment = function(object2) {
      return typeOf(object2) === REACT_FRAGMENT_TYPE;
    };
    reactIs_production.isLazy = function(object2) {
      return typeOf(object2) === REACT_LAZY_TYPE;
    };
    reactIs_production.isMemo = function(object2) {
      return typeOf(object2) === REACT_MEMO_TYPE;
    };
    reactIs_production.isPortal = function(object2) {
      return typeOf(object2) === REACT_PORTAL_TYPE;
    };
    reactIs_production.isProfiler = function(object2) {
      return typeOf(object2) === REACT_PROFILER_TYPE;
    };
    reactIs_production.isStrictMode = function(object2) {
      return typeOf(object2) === REACT_STRICT_MODE_TYPE;
    };
    reactIs_production.isSuspense = function(object2) {
      return typeOf(object2) === REACT_SUSPENSE_TYPE;
    };
    reactIs_production.isSuspenseList = function(object2) {
      return typeOf(object2) === REACT_SUSPENSE_LIST_TYPE;
    };
    reactIs_production.isValidElementType = function(type) {
      return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
    };
    reactIs_production.typeOf = typeOf;
    return reactIs_production;
  }
  var hasRequiredReactIs;
  function requireReactIs() {
    if (hasRequiredReactIs) return reactIs.exports;
    hasRequiredReactIs = 1;
    {
      reactIs.exports = /* @__PURE__ */ requireReactIs_production();
    }
    return reactIs.exports;
  }
  var reactIsExports = /* @__PURE__ */ requireReactIs();
  var getDisplayName = (Comp) => {
    if (typeof Comp === "string") {
      return Comp;
    }
    if (!Comp) {
      return "";
    }
    return Comp.displayName || Comp.name || "Component";
  };
  var lastChildren = null;
  var lastResult = null;
  var toArray = (children) => {
    if (children === lastChildren && Array.isArray(lastResult)) {
      return lastResult;
    }
    var result = [];
    React.Children.forEach(children, (child) => {
      if (isNullish(child)) return;
      if (reactIsExports.isFragment(child)) {
        result = result.concat(toArray(child.props.children));
      } else {
        result.push(child);
      }
    });
    lastResult = result;
    lastChildren = children;
    return result;
  };
  function findAllByType(children, type) {
    var result = [];
    var types = [];
    if (Array.isArray(type)) {
      types = type.map((t) => getDisplayName(t));
    } else {
      types = [getDisplayName(type)];
    }
    toArray(children).forEach((child) => {
      var childType = get$1(child, "type.displayName") || get$1(child, "type.name");
      if (childType && types.indexOf(childType) !== -1) {
        result.push(child);
      }
    });
    return result;
  }
  var isPlainObject$2 = {};
  var hasRequiredIsPlainObject$1;
  function requireIsPlainObject$1() {
    if (hasRequiredIsPlainObject$1) return isPlainObject$2;
    hasRequiredIsPlainObject$1 = 1;
    (function(exports$1) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
      function isPlainObject2(object2) {
        var _a;
        if (typeof object2 !== "object") {
          return false;
        }
        if (object2 == null) {
          return false;
        }
        if (Object.getPrototypeOf(object2) === null) {
          return true;
        }
        if (Object.prototype.toString.call(object2) !== "[object Object]") {
          const tag = object2[Symbol.toStringTag];
          if (tag == null) {
            return false;
          }
          const isTagReadonly = !((_a = Object.getOwnPropertyDescriptor(object2, Symbol.toStringTag)) == null ? void 0 : _a.writable);
          if (isTagReadonly) {
            return false;
          }
          return object2.toString() === `[object ${tag}]`;
        }
        let proto = object2;
        while (Object.getPrototypeOf(proto) !== null) {
          proto = Object.getPrototypeOf(proto);
        }
        return Object.getPrototypeOf(object2) === proto;
      }
      exports$1.isPlainObject = isPlainObject2;
    })(isPlainObject$2);
    return isPlainObject$2;
  }
  var isPlainObject$1;
  var hasRequiredIsPlainObject;
  function requireIsPlainObject() {
    if (hasRequiredIsPlainObject) return isPlainObject$1;
    hasRequiredIsPlainObject = 1;
    isPlainObject$1 = requireIsPlainObject$1().isPlainObject;
    return isPlainObject$1;
  }
  var isPlainObjectExports = /* @__PURE__ */ requireIsPlainObject();
  const isPlainObject = /* @__PURE__ */ getDefaultExportFromCjs(isPlainObjectExports);
  function ownKeys$a(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$a(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$a(Object(t), true).forEach(function(r3) {
        _defineProperty$b(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$b(e, r2, t) {
    return (r2 = _toPropertyKey$b(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$b(t) {
    var i = _toPrimitive$b(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$b(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function _extends$a() {
    return _extends$a = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$a.apply(null, arguments);
  }
  var getTrapezoidPath = (x2, y2, upperWidth, lowerWidth, height) => {
    var widthGap = upperWidth - lowerWidth;
    var path;
    path = "M ".concat(x2, ",").concat(y2);
    path += "L ".concat(x2 + upperWidth, ",").concat(y2);
    path += "L ".concat(x2 + upperWidth - widthGap / 2, ",").concat(y2 + height);
    path += "L ".concat(x2 + upperWidth - widthGap / 2 - lowerWidth, ",").concat(y2 + height);
    path += "L ".concat(x2, ",").concat(y2, " Z");
    return path;
  };
  var defaultTrapezoidProps = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: false,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
  };
  var Trapezoid = (outsideProps) => {
    var trapezoidProps = resolveDefaultProps(outsideProps, defaultTrapezoidProps);
    var {
      x: x2,
      y: y2,
      upperWidth,
      lowerWidth,
      height,
      className
    } = trapezoidProps;
    var {
      animationEasing,
      animationDuration,
      animationBegin,
      isUpdateAnimationActive
    } = trapezoidProps;
    var pathRef = React.useRef(null);
    var [totalLength, setTotalLength] = React.useState(-1);
    var prevUpperWidthRef = React.useRef(upperWidth);
    var prevLowerWidthRef = React.useRef(lowerWidth);
    var prevHeightRef = React.useRef(height);
    var prevXRef = React.useRef(x2);
    var prevYRef = React.useRef(y2);
    var animationId = useAnimationId(outsideProps, "trapezoid-");
    React.useEffect(() => {
      if (pathRef.current && pathRef.current.getTotalLength) {
        try {
          var pathTotalLength = pathRef.current.getTotalLength();
          if (pathTotalLength) {
            setTotalLength(pathTotalLength);
          }
        } catch (_unused) {
        }
      }
    }, []);
    if (x2 !== +x2 || y2 !== +y2 || upperWidth !== +upperWidth || lowerWidth !== +lowerWidth || height !== +height || upperWidth === 0 && lowerWidth === 0 || height === 0) {
      return null;
    }
    var layerClass = clsx("recharts-trapezoid", className);
    if (!isUpdateAnimationActive) {
      return /* @__PURE__ */ React__namespace.createElement("g", null, /* @__PURE__ */ React__namespace.createElement("path", _extends$a({}, svgPropertiesAndEvents(trapezoidProps), {
        className: layerClass,
        d: getTrapezoidPath(x2, y2, upperWidth, lowerWidth, height)
      })));
    }
    var prevUpperWidth = prevUpperWidthRef.current;
    var prevLowerWidth = prevLowerWidthRef.current;
    var prevHeight = prevHeightRef.current;
    var prevX = prevXRef.current;
    var prevY = prevYRef.current;
    var from2 = "0px ".concat(totalLength === -1 ? 1 : totalLength, "px");
    var to2 = "".concat(totalLength, "px 0px");
    var transition = getTransitionVal(["strokeDasharray"], animationDuration, animationEasing);
    return /* @__PURE__ */ React__namespace.createElement(JavascriptAnimate, {
      animationId,
      key: animationId,
      canBegin: totalLength > 0,
      duration: animationDuration,
      easing: animationEasing,
      isActive: isUpdateAnimationActive,
      begin: animationBegin
    }, (t) => {
      var currUpperWidth = interpolate$1(prevUpperWidth, upperWidth, t);
      var currLowerWidth = interpolate$1(prevLowerWidth, lowerWidth, t);
      var currHeight = interpolate$1(prevHeight, height, t);
      var currX = interpolate$1(prevX, x2, t);
      var currY = interpolate$1(prevY, y2, t);
      if (pathRef.current) {
        prevUpperWidthRef.current = currUpperWidth;
        prevLowerWidthRef.current = currLowerWidth;
        prevHeightRef.current = currHeight;
        prevXRef.current = currX;
        prevYRef.current = currY;
      }
      var animationStyle = t > 0 ? {
        transition,
        strokeDasharray: to2
      } : {
        strokeDasharray: from2
      };
      return /* @__PURE__ */ React__namespace.createElement("path", _extends$a({}, svgPropertiesAndEvents(trapezoidProps), {
        className: layerClass,
        d: getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight),
        ref: pathRef,
        style: _objectSpread$a(_objectSpread$a({}, animationStyle), trapezoidProps.style)
      }));
    });
  };
  var _excluded$b = ["option", "shapeType", "propTransformer", "activeClassName"];
  function _objectWithoutProperties$b(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$b(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$b(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  function ownKeys$9(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$9(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$9(Object(t), true).forEach(function(r3) {
        _defineProperty$a(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$a(e, r2, t) {
    return (r2 = _toPropertyKey$a(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$a(t) {
    var i = _toPrimitive$a(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$a(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function defaultPropTransformer(option, props) {
    return _objectSpread$9(_objectSpread$9({}, props), option);
  }
  function isSymbolsProps(shapeType, _elementProps) {
    return shapeType === "symbols";
  }
  function ShapeSelector(_ref2) {
    var {
      shapeType,
      elementProps
    } = _ref2;
    switch (shapeType) {
      case "rectangle":
        return /* @__PURE__ */ React__namespace.createElement(Rectangle, elementProps);
      case "trapezoid":
        return /* @__PURE__ */ React__namespace.createElement(Trapezoid, elementProps);
      case "sector":
        return /* @__PURE__ */ React__namespace.createElement(Sector, elementProps);
      case "symbols":
        if (isSymbolsProps(shapeType)) {
          return /* @__PURE__ */ React__namespace.createElement(Symbols, elementProps);
        }
        break;
      case "curve":
        return /* @__PURE__ */ React__namespace.createElement(Curve, elementProps);
      default:
        return null;
    }
  }
  function getPropsFromShapeOption(option) {
    if (/* @__PURE__ */ React.isValidElement(option)) {
      return option.props;
    }
    return option;
  }
  function Shape(_ref2) {
    var {
      option,
      shapeType,
      propTransformer = defaultPropTransformer,
      activeClassName = "recharts-active-shape"
    } = _ref2, props = _objectWithoutProperties$b(_ref2, _excluded$b);
    var shape;
    if (/* @__PURE__ */ React.isValidElement(option)) {
      shape = /* @__PURE__ */ React.cloneElement(option, _objectSpread$9(_objectSpread$9({}, props), getPropsFromShapeOption(option)));
    } else if (typeof option === "function") {
      shape = option(props, props.index);
    } else if (isPlainObject(option) && typeof option !== "boolean") {
      var nextProps = propTransformer(option, props);
      shape = /* @__PURE__ */ React__namespace.createElement(ShapeSelector, {
        shapeType,
        elementProps: nextProps
      });
    } else {
      var elementProps = props;
      shape = /* @__PURE__ */ React__namespace.createElement(ShapeSelector, {
        shapeType,
        elementProps
      });
    }
    if (props.isActive) {
      return /* @__PURE__ */ React__namespace.createElement(Layer, {
        className: activeClassName
      }, shape);
    }
    return shape;
  }
  var useMouseEnterItemDispatch = (onMouseEnterFromProps, dataKey, graphicalItemId) => {
    var dispatch = useAppDispatch();
    return (data, index) => (event) => {
      onMouseEnterFromProps === null || onMouseEnterFromProps === void 0 || onMouseEnterFromProps(data, index, event);
      dispatch(setActiveMouseOverItemIndex({
        activeIndex: String(index),
        activeDataKey: dataKey,
        activeCoordinate: data.tooltipPosition,
        activeGraphicalItemId: graphicalItemId
      }));
    };
  };
  var useMouseLeaveItemDispatch = (onMouseLeaveFromProps) => {
    var dispatch = useAppDispatch();
    return (data, index) => (event) => {
      onMouseLeaveFromProps === null || onMouseLeaveFromProps === void 0 || onMouseLeaveFromProps(data, index, event);
      dispatch(mouseLeaveItem());
    };
  };
  var useMouseClickItemDispatch = (onMouseClickFromProps, dataKey, graphicalItemId) => {
    var dispatch = useAppDispatch();
    return (data, index) => (event) => {
      onMouseClickFromProps === null || onMouseClickFromProps === void 0 || onMouseClickFromProps(data, index, event);
      dispatch(setActiveClickItemIndex({
        activeIndex: String(index),
        activeDataKey: dataKey,
        activeCoordinate: data.tooltipPosition,
        activeGraphicalItemId: graphicalItemId
      }));
    };
  };
  function SetTooltipEntrySettings(_ref2) {
    var {
      tooltipEntrySettings
    } = _ref2;
    var dispatch = useAppDispatch();
    var isPanorama = useIsPanorama();
    var prevSettingsRef = React.useRef(null);
    React.useLayoutEffect(() => {
      if (isPanorama) {
        return;
      }
      if (prevSettingsRef.current === null) {
        dispatch(addTooltipEntrySettings(tooltipEntrySettings));
      } else if (prevSettingsRef.current !== tooltipEntrySettings) {
        dispatch(replaceTooltipEntrySettings({
          prev: prevSettingsRef.current,
          next: tooltipEntrySettings
        }));
      }
      prevSettingsRef.current = tooltipEntrySettings;
    }, [tooltipEntrySettings, dispatch, isPanorama]);
    React.useLayoutEffect(() => {
      return () => {
        if (prevSettingsRef.current) {
          dispatch(removeTooltipEntrySettings(prevSettingsRef.current));
          prevSettingsRef.current = null;
        }
      };
    }, [dispatch]);
    return null;
  }
  function SetLegendPayload(_ref2) {
    var {
      legendPayload
    } = _ref2;
    var dispatch = useAppDispatch();
    var isPanorama = useIsPanorama();
    var prevPayloadRef = React.useRef(null);
    React.useLayoutEffect(() => {
      if (isPanorama) {
        return;
      }
      if (prevPayloadRef.current === null) {
        dispatch(addLegendPayload(legendPayload));
      } else if (prevPayloadRef.current !== legendPayload) {
        dispatch(replaceLegendPayload({
          prev: prevPayloadRef.current,
          next: legendPayload
        }));
      }
      prevPayloadRef.current = legendPayload;
    }, [dispatch, isPanorama, legendPayload]);
    React.useLayoutEffect(() => {
      return () => {
        if (prevPayloadRef.current) {
          dispatch(removeLegendPayload(prevPayloadRef.current));
          prevPayloadRef.current = null;
        }
      };
    }, [dispatch]);
    return null;
  }
  function SetPolarLegendPayload(_ref2) {
    var {
      legendPayload
    } = _ref2;
    var dispatch = useAppDispatch();
    var layout = useAppSelector(selectChartLayout);
    var prevPayloadRef = React.useRef(null);
    React.useLayoutEffect(() => {
      if (layout !== "centric" && layout !== "radial") {
        return;
      }
      if (prevPayloadRef.current === null) {
        dispatch(addLegendPayload(legendPayload));
      } else if (prevPayloadRef.current !== legendPayload) {
        dispatch(replaceLegendPayload({
          prev: prevPayloadRef.current,
          next: legendPayload
        }));
      }
      prevPayloadRef.current = legendPayload;
    }, [dispatch, layout, legendPayload]);
    React.useLayoutEffect(() => {
      return () => {
        if (prevPayloadRef.current) {
          dispatch(removeLegendPayload(prevPayloadRef.current));
          prevPayloadRef.current = null;
        }
      };
    }, [dispatch]);
    return null;
  }
  var _ref;
  var useIdFallback = () => {
    var [id] = React__namespace.useState(() => uniqueId("uid-"));
    return id;
  };
  var useId = (_ref = React__namespace["useId".toString()]) !== null && _ref !== void 0 ? _ref : useIdFallback;
  function useUniqueId(prefix2, customId) {
    var generatedId = useId();
    if (customId) {
      return customId;
    }
    return prefix2 ? "".concat(prefix2, "-").concat(generatedId) : generatedId;
  }
  var GraphicalItemIdContext = /* @__PURE__ */ React.createContext(void 0);
  var RegisterGraphicalItemId = (_ref2) => {
    var {
      id,
      type,
      children
    } = _ref2;
    var resolvedId = useUniqueId("recharts-".concat(type), id);
    return /* @__PURE__ */ React__namespace.createElement(GraphicalItemIdContext.Provider, {
      value: resolvedId
    }, children(resolvedId));
  };
  var initialState$5 = {
    cartesianItems: [],
    polarItems: []
  };
  var graphicalItemsSlice = createSlice({
    name: "graphicalItems",
    initialState: initialState$5,
    reducers: {
      addCartesianGraphicalItem: {
        reducer(state, action) {
          state.cartesianItems.push(castDraft(action.payload));
        },
        prepare: prepareAutoBatched()
      },
      replaceCartesianGraphicalItem: {
        reducer(state, action) {
          var {
            prev,
            next
          } = action.payload;
          var index = current$1(state).cartesianItems.indexOf(castDraft(prev));
          if (index > -1) {
            state.cartesianItems[index] = castDraft(next);
          }
        },
        prepare: prepareAutoBatched()
      },
      removeCartesianGraphicalItem: {
        reducer(state, action) {
          var index = current$1(state).cartesianItems.indexOf(castDraft(action.payload));
          if (index > -1) {
            state.cartesianItems.splice(index, 1);
          }
        },
        prepare: prepareAutoBatched()
      },
      addPolarGraphicalItem: {
        reducer(state, action) {
          state.polarItems.push(castDraft(action.payload));
        },
        prepare: prepareAutoBatched()
      },
      removePolarGraphicalItem: {
        reducer(state, action) {
          var index = current$1(state).polarItems.indexOf(castDraft(action.payload));
          if (index > -1) {
            state.polarItems.splice(index, 1);
          }
        },
        prepare: prepareAutoBatched()
      }
    }
  });
  var {
    addCartesianGraphicalItem,
    replaceCartesianGraphicalItem,
    removeCartesianGraphicalItem,
    addPolarGraphicalItem,
    removePolarGraphicalItem
  } = graphicalItemsSlice.actions;
  var graphicalItemsReducer = graphicalItemsSlice.reducer;
  var SetCartesianGraphicalItemImpl = (props) => {
    var dispatch = useAppDispatch();
    var prevPropsRef = React.useRef(null);
    React.useLayoutEffect(() => {
      if (prevPropsRef.current === null) {
        dispatch(addCartesianGraphicalItem(props));
      } else if (prevPropsRef.current !== props) {
        dispatch(replaceCartesianGraphicalItem({
          prev: prevPropsRef.current,
          next: props
        }));
      }
      prevPropsRef.current = props;
    }, [dispatch, props]);
    React.useLayoutEffect(() => {
      return () => {
        if (prevPropsRef.current) {
          dispatch(removeCartesianGraphicalItem(prevPropsRef.current));
          prevPropsRef.current = null;
        }
      };
    }, [dispatch]);
    return null;
  };
  var SetCartesianGraphicalItem = /* @__PURE__ */ React.memo(SetCartesianGraphicalItemImpl);
  function SetPolarGraphicalItem(props) {
    var dispatch = useAppDispatch();
    React.useLayoutEffect(() => {
      dispatch(addPolarGraphicalItem(props));
      return () => {
        dispatch(removePolarGraphicalItem(props));
      };
    }, [dispatch, props]);
    return null;
  }
  var _excluded$a = ["key"], _excluded2$4 = ["onMouseEnter", "onClick", "onMouseLeave"], _excluded3$1 = ["id"], _excluded4$1 = ["id"];
  function ownKeys$8(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$8(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$8(Object(t), true).forEach(function(r3) {
        _defineProperty$9(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$9(e, r2, t) {
    return (r2 = _toPropertyKey$9(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$9(t) {
    var i = _toPrimitive$9(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$9(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function _extends$9() {
    return _extends$9 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$9.apply(null, arguments);
  }
  function _objectWithoutProperties$a(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$a(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$a(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  function SetPiePayloadLegend(props) {
    var cells = React.useMemo(() => findAllByType(props.children, Cell), [props.children]);
    var legendPayload = useAppSelector((state) => selectPieLegend(state, props.id, cells));
    if (legendPayload == null) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(SetPolarLegendPayload, {
      legendPayload
    });
  }
  var SetPieTooltipEntrySettings = /* @__PURE__ */ React__namespace.memo((_ref2) => {
    var {
      dataKey,
      nameKey,
      sectors,
      stroke,
      strokeWidth,
      fill,
      name,
      hide,
      tooltipType
    } = _ref2;
    var tooltipEntrySettings = {
      dataDefinedOnItem: sectors.map((p) => p.tooltipPayload),
      positions: sectors.map((p) => p.tooltipPosition),
      settings: {
        stroke,
        strokeWidth,
        fill,
        dataKey,
        nameKey,
        name: getTooltipNameProp(name, dataKey),
        hide,
        type: tooltipType,
        color: fill,
        unit: ""
        // why doesn't Pie support unit?
      }
    };
    return /* @__PURE__ */ React__namespace.createElement(SetTooltipEntrySettings, {
      tooltipEntrySettings
    });
  });
  var getTextAnchor = (x2, cx) => {
    if (x2 > cx) {
      return "start";
    }
    if (x2 < cx) {
      return "end";
    }
    return "middle";
  };
  var getOuterRadius = (dataPoint, outerRadius, maxPieRadius) => {
    if (typeof outerRadius === "function") {
      return getPercentValue(outerRadius(dataPoint), maxPieRadius, maxPieRadius * 0.8);
    }
    return getPercentValue(outerRadius, maxPieRadius, maxPieRadius * 0.8);
  };
  var parseCoordinateOfPie = (pieSettings, offset, dataPoint) => {
    var {
      top,
      left,
      width,
      height
    } = offset;
    var maxPieRadius = getMaxRadius(width, height);
    var cx = left + getPercentValue(pieSettings.cx, width, width / 2);
    var cy = top + getPercentValue(pieSettings.cy, height, height / 2);
    var innerRadius = getPercentValue(pieSettings.innerRadius, maxPieRadius, 0);
    var outerRadius = getOuterRadius(dataPoint, pieSettings.outerRadius, maxPieRadius);
    var maxRadius = pieSettings.maxRadius || Math.sqrt(width * width + height * height) / 2;
    return {
      cx,
      cy,
      innerRadius,
      outerRadius,
      maxRadius
    };
  };
  var parseDeltaAngle = (startAngle, endAngle) => {
    var sign2 = mathSign(endAngle - startAngle);
    var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
    return sign2 * deltaAngle;
  };
  function getClassNamePropertyIfExists(u) {
    if (u && typeof u === "object" && "className" in u && typeof u.className === "string") {
      return u.className;
    }
    return "";
  }
  var renderLabelLineItem = (option, props) => {
    if (/* @__PURE__ */ React__namespace.isValidElement(option)) {
      return /* @__PURE__ */ React__namespace.cloneElement(option, props);
    }
    if (typeof option === "function") {
      return option(props);
    }
    var className = clsx("recharts-pie-label-line", typeof option !== "boolean" ? option.className : "");
    var {
      key
    } = props, otherProps = _objectWithoutProperties$a(props, _excluded$a);
    return /* @__PURE__ */ React__namespace.createElement(Curve, _extends$9({}, otherProps, {
      type: "linear",
      className
    }));
  };
  var renderLabelItem = (option, props, value) => {
    if (/* @__PURE__ */ React__namespace.isValidElement(option)) {
      return /* @__PURE__ */ React__namespace.cloneElement(option, props);
    }
    var label = value;
    if (typeof option === "function") {
      label = option(props);
      if (/* @__PURE__ */ React__namespace.isValidElement(label)) {
        return label;
      }
    }
    var className = clsx("recharts-pie-label-text", getClassNamePropertyIfExists(option));
    return /* @__PURE__ */ React__namespace.createElement(Text, _extends$9({}, props, {
      alignmentBaseline: "middle",
      className
    }), label);
  };
  function PieLabels(_ref2) {
    var {
      sectors,
      props,
      showLabels
    } = _ref2;
    var {
      label,
      labelLine,
      dataKey
    } = props;
    if (!showLabels || !label || !sectors) {
      return null;
    }
    var pieProps = svgPropertiesNoEvents(props);
    var customLabelProps = svgPropertiesNoEventsFromUnknown(label);
    var customLabelLineProps = svgPropertiesNoEventsFromUnknown(labelLine);
    var offsetRadius = typeof label === "object" && "offsetRadius" in label && typeof label.offsetRadius === "number" && label.offsetRadius || 20;
    var labels = sectors.map((entry, i) => {
      var midAngle = (entry.startAngle + entry.endAngle) / 2;
      var endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
      var labelProps = _objectSpread$8(_objectSpread$8(_objectSpread$8(_objectSpread$8({}, pieProps), entry), {}, {
        // @ts-expect-error customLabelProps is contributing unknown props
        stroke: "none"
      }, customLabelProps), {}, {
        index: i,
        textAnchor: getTextAnchor(endPoint.x, entry.cx)
      }, endPoint);
      var lineProps = _objectSpread$8(_objectSpread$8(_objectSpread$8(_objectSpread$8({}, pieProps), entry), {}, {
        // @ts-expect-error customLabelLineProps is contributing unknown props
        fill: "none",
        // @ts-expect-error customLabelLineProps is contributing unknown props
        stroke: entry.fill
      }, customLabelLineProps), {}, {
        index: i,
        points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
        key: "line"
      });
      return /* @__PURE__ */ React__namespace.createElement(ZIndexLayer, {
        zIndex: DefaultZIndexes.label,
        key: "label-".concat(entry.startAngle, "-").concat(entry.endAngle, "-").concat(entry.midAngle, "-").concat(i)
      }, /* @__PURE__ */ React__namespace.createElement(Layer, null, labelLine && renderLabelLineItem(labelLine, lineProps), renderLabelItem(label, labelProps, getValueByDataKey(entry, dataKey))));
    });
    return /* @__PURE__ */ React__namespace.createElement(Layer, {
      className: "recharts-pie-labels"
    }, labels);
  }
  function PieLabelList(_ref3) {
    var {
      sectors,
      props,
      showLabels
    } = _ref3;
    var {
      label
    } = props;
    if (typeof label === "object" && label != null && "position" in label) {
      return /* @__PURE__ */ React__namespace.createElement(LabelListFromLabelProp, {
        label
      });
    }
    return /* @__PURE__ */ React__namespace.createElement(PieLabels, {
      sectors,
      props,
      showLabels
    });
  }
  function PieSectors(props) {
    var {
      sectors,
      activeShape,
      inactiveShape: inactiveShapeProp,
      allOtherPieProps,
      shape,
      id
    } = props;
    var activeIndex = useAppSelector(selectActiveTooltipIndex);
    var activeDataKey = useAppSelector(selectActiveTooltipDataKey);
    var activeGraphicalItemId = useAppSelector(selectActiveTooltipGraphicalItemId);
    var {
      onMouseEnter: onMouseEnterFromProps,
      onClick: onItemClickFromProps,
      onMouseLeave: onMouseLeaveFromProps
    } = allOtherPieProps, restOfAllOtherProps = _objectWithoutProperties$a(allOtherPieProps, _excluded2$4);
    var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherPieProps.dataKey, id);
    var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
    var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherPieProps.dataKey, id);
    if (sectors == null || sectors.length === 0) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, sectors.map((entry, i) => {
      if ((entry === null || entry === void 0 ? void 0 : entry.startAngle) === 0 && (entry === null || entry === void 0 ? void 0 : entry.endAngle) === 0 && sectors.length !== 1) return null;
      var graphicalItemMatches = activeGraphicalItemId == null || activeGraphicalItemId === id;
      var isActive = String(i) === activeIndex && (activeDataKey == null || allOtherPieProps.dataKey === activeDataKey) && graphicalItemMatches;
      var inactiveShape = activeIndex ? inactiveShapeProp : null;
      var sectorOptions = activeShape && isActive ? activeShape : inactiveShape;
      var sectorProps = _objectSpread$8(_objectSpread$8({}, entry), {}, {
        stroke: entry.stroke,
        tabIndex: -1,
        [DATA_ITEM_INDEX_ATTRIBUTE_NAME]: i,
        [DATA_ITEM_DATAKEY_ATTRIBUTE_NAME]: allOtherPieProps.dataKey
      });
      return /* @__PURE__ */ React__namespace.createElement(Layer, _extends$9({
        key: "sector-".concat(entry === null || entry === void 0 ? void 0 : entry.startAngle, "-").concat(entry === null || entry === void 0 ? void 0 : entry.endAngle, "-").concat(entry.midAngle, "-").concat(i),
        tabIndex: -1,
        className: "recharts-pie-sector"
      }, adaptEventsOfChild(restOfAllOtherProps, entry, i), {
        // @ts-expect-error the types need a bit of attention
        onMouseEnter: onMouseEnterFromContext(entry, i),
        onMouseLeave: onMouseLeaveFromContext(entry, i),
        onClick: onClickFromContext(entry, i)
      }), /* @__PURE__ */ React__namespace.createElement(Shape, _extends$9({
        option: shape !== null && shape !== void 0 ? shape : sectorOptions,
        index: i,
        shapeType: "sector",
        isActive
      }, sectorProps)));
    }));
  }
  function computePieSectors(_ref4) {
    var _pieSettings$paddingA;
    var {
      pieSettings,
      displayedData,
      cells,
      offset
    } = _ref4;
    var {
      cornerRadius,
      startAngle,
      endAngle,
      dataKey,
      nameKey,
      tooltipType
    } = pieSettings;
    var minAngle = Math.abs(pieSettings.minAngle);
    var deltaAngle = parseDeltaAngle(startAngle, endAngle);
    var absDeltaAngle = Math.abs(deltaAngle);
    var paddingAngle = displayedData.length <= 1 ? 0 : (_pieSettings$paddingA = pieSettings.paddingAngle) !== null && _pieSettings$paddingA !== void 0 ? _pieSettings$paddingA : 0;
    var notZeroItemCount = displayedData.filter((entry) => getValueByDataKey(entry, dataKey, 0) !== 0).length;
    var totalPaddingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
    var realTotalAngle = absDeltaAngle - notZeroItemCount * minAngle - totalPaddingAngle;
    var sum = displayedData.reduce((result, entry) => {
      var val = getValueByDataKey(entry, dataKey, 0);
      return result + (isNumber(val) ? val : 0);
    }, 0);
    var sectors;
    if (sum > 0) {
      var prev;
      sectors = displayedData.map((entry, i) => {
        var val = getValueByDataKey(entry, dataKey, 0);
        var name = getValueByDataKey(entry, nameKey, i);
        var coordinate = parseCoordinateOfPie(pieSettings, offset, entry);
        var percent = (isNumber(val) ? val : 0) / sum;
        var tempStartAngle;
        var entryWithCellInfo = _objectSpread$8(_objectSpread$8({}, entry), cells && cells[i] && cells[i].props);
        if (i) {
          tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle * (val !== 0 ? 1 : 0);
        } else {
          tempStartAngle = startAngle;
        }
        var tempEndAngle = tempStartAngle + mathSign(deltaAngle) * ((val !== 0 ? minAngle : 0) + percent * realTotalAngle);
        var midAngle = (tempStartAngle + tempEndAngle) / 2;
        var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
        var tooltipPayload = [{
          name,
          value: val,
          payload: entryWithCellInfo,
          dataKey,
          type: tooltipType
        }];
        var tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);
        prev = _objectSpread$8(_objectSpread$8(_objectSpread$8(_objectSpread$8({}, pieSettings.presentationProps), {}, {
          percent,
          cornerRadius: typeof cornerRadius === "string" ? parseFloat(cornerRadius) : cornerRadius,
          name,
          tooltipPayload,
          midAngle,
          middleRadius,
          tooltipPosition
        }, entryWithCellInfo), coordinate), {}, {
          value: val,
          dataKey,
          startAngle: tempStartAngle,
          endAngle: tempEndAngle,
          payload: entryWithCellInfo,
          paddingAngle: mathSign(deltaAngle) * paddingAngle
        });
        return prev;
      });
    }
    return sectors;
  }
  function PieLabelListProvider(_ref5) {
    var {
      showLabels,
      sectors,
      children
    } = _ref5;
    var labelListEntries = React.useMemo(() => {
      if (!showLabels || !sectors) {
        return [];
      }
      return sectors.map((entry) => ({
        value: entry.value,
        payload: entry.payload,
        clockWise: false,
        parentViewBox: void 0,
        viewBox: {
          cx: entry.cx,
          cy: entry.cy,
          innerRadius: entry.innerRadius,
          outerRadius: entry.outerRadius,
          startAngle: entry.startAngle,
          endAngle: entry.endAngle,
          clockWise: false
        },
        fill: entry.fill
      }));
    }, [sectors, showLabels]);
    return /* @__PURE__ */ React__namespace.createElement(PolarLabelListContextProvider, {
      value: showLabels ? labelListEntries : void 0
    }, children);
  }
  function SectorsWithAnimation(_ref6) {
    var {
      props,
      previousSectorsRef,
      id
    } = _ref6;
    var {
      sectors,
      isAnimationActive,
      animationBegin,
      animationDuration,
      animationEasing,
      activeShape,
      inactiveShape,
      onAnimationStart,
      onAnimationEnd
    } = props;
    var animationId = useAnimationId(props, "recharts-pie-");
    var prevSectors = previousSectorsRef.current;
    var [isAnimating, setIsAnimating] = React.useState(false);
    var handleAnimationEnd = React.useCallback(() => {
      if (typeof onAnimationEnd === "function") {
        onAnimationEnd();
      }
      setIsAnimating(false);
    }, [onAnimationEnd]);
    var handleAnimationStart = React.useCallback(() => {
      if (typeof onAnimationStart === "function") {
        onAnimationStart();
      }
      setIsAnimating(true);
    }, [onAnimationStart]);
    return /* @__PURE__ */ React__namespace.createElement(PieLabelListProvider, {
      showLabels: !isAnimating,
      sectors
    }, /* @__PURE__ */ React__namespace.createElement(JavascriptAnimate, {
      animationId,
      begin: animationBegin,
      duration: animationDuration,
      isActive: isAnimationActive,
      easing: animationEasing,
      onAnimationStart: handleAnimationStart,
      onAnimationEnd: handleAnimationEnd,
      key: animationId
    }, (t) => {
      var stepData = [];
      var first = sectors && sectors[0];
      var curAngle = first === null || first === void 0 ? void 0 : first.startAngle;
      sectors === null || sectors === void 0 || sectors.forEach((entry, index) => {
        var prev = prevSectors && prevSectors[index];
        var paddingAngle = index > 0 ? get$1(entry, "paddingAngle", 0) : 0;
        if (prev) {
          var angle = interpolate$1(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle, t);
          var latest2 = _objectSpread$8(_objectSpread$8({}, entry), {}, {
            startAngle: curAngle + paddingAngle,
            endAngle: curAngle + angle + paddingAngle
          });
          stepData.push(latest2);
          curAngle = latest2.endAngle;
        } else {
          var {
            endAngle,
            startAngle
          } = entry;
          var deltaAngle = interpolate$1(0, endAngle - startAngle, t);
          var _latest = _objectSpread$8(_objectSpread$8({}, entry), {}, {
            startAngle: curAngle + paddingAngle,
            endAngle: curAngle + deltaAngle + paddingAngle
          });
          stepData.push(_latest);
          curAngle = _latest.endAngle;
        }
      });
      previousSectorsRef.current = stepData;
      return /* @__PURE__ */ React__namespace.createElement(Layer, null, /* @__PURE__ */ React__namespace.createElement(PieSectors, {
        sectors: stepData,
        activeShape,
        inactiveShape,
        allOtherPieProps: props,
        shape: props.shape,
        id
      }));
    }), /* @__PURE__ */ React__namespace.createElement(PieLabelList, {
      showLabels: !isAnimating,
      sectors,
      props
    }), props.children);
  }
  var defaultPieProps = {
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: "ease",
    cx: "50%",
    cy: "50%",
    dataKey: "value",
    endAngle: 360,
    fill: "#808080",
    hide: false,
    innerRadius: 0,
    isAnimationActive: "auto",
    label: false,
    labelLine: true,
    legendType: "rect",
    minAngle: 0,
    nameKey: "name",
    outerRadius: "80%",
    paddingAngle: 0,
    rootTabIndex: 0,
    startAngle: 0,
    stroke: "#fff",
    zIndex: DefaultZIndexes.area
  };
  function PieImpl(props) {
    var {
      id
    } = props, propsWithoutId = _objectWithoutProperties$a(props, _excluded3$1);
    var {
      hide,
      className,
      rootTabIndex
    } = props;
    var cells = React.useMemo(() => findAllByType(props.children, Cell), [props.children]);
    var sectors = useAppSelector((state) => selectPieSectors(state, id, cells));
    var previousSectorsRef = React.useRef(null);
    var layerClass = clsx("recharts-pie", className);
    if (hide || sectors == null) {
      previousSectorsRef.current = null;
      return /* @__PURE__ */ React__namespace.createElement(Layer, {
        tabIndex: rootTabIndex,
        className: layerClass
      });
    }
    return /* @__PURE__ */ React__namespace.createElement(ZIndexLayer, {
      zIndex: props.zIndex
    }, /* @__PURE__ */ React__namespace.createElement(SetPieTooltipEntrySettings, {
      dataKey: props.dataKey,
      nameKey: props.nameKey,
      sectors,
      stroke: props.stroke,
      strokeWidth: props.strokeWidth,
      fill: props.fill,
      name: props.name,
      hide: props.hide,
      tooltipType: props.tooltipType
    }), /* @__PURE__ */ React__namespace.createElement(Layer, {
      tabIndex: rootTabIndex,
      className: layerClass
    }, /* @__PURE__ */ React__namespace.createElement(SectorsWithAnimation, {
      props: _objectSpread$8(_objectSpread$8({}, propsWithoutId), {}, {
        sectors
      }),
      previousSectorsRef,
      id
    })));
  }
  function Pie(outsideProps) {
    var props = resolveDefaultProps(outsideProps, defaultPieProps);
    var {
      id: externalId
    } = props, propsWithoutId = _objectWithoutProperties$a(props, _excluded4$1);
    var presentationProps = svgPropertiesNoEvents(propsWithoutId);
    return /* @__PURE__ */ React__namespace.createElement(RegisterGraphicalItemId, {
      id: externalId,
      type: "pie"
    }, (id) => /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(SetPolarGraphicalItem, {
      type: "pie",
      id,
      data: propsWithoutId.data,
      dataKey: propsWithoutId.dataKey,
      hide: propsWithoutId.hide,
      angleAxisId: 0,
      radiusAxisId: 0,
      name: propsWithoutId.name,
      nameKey: propsWithoutId.nameKey,
      tooltipType: propsWithoutId.tooltipType,
      legendType: propsWithoutId.legendType,
      fill: propsWithoutId.fill,
      cx: propsWithoutId.cx,
      cy: propsWithoutId.cy,
      startAngle: propsWithoutId.startAngle,
      endAngle: propsWithoutId.endAngle,
      paddingAngle: propsWithoutId.paddingAngle,
      minAngle: propsWithoutId.minAngle,
      innerRadius: propsWithoutId.innerRadius,
      outerRadius: propsWithoutId.outerRadius,
      cornerRadius: propsWithoutId.cornerRadius,
      presentationProps,
      maxRadius: props.maxRadius
    }), /* @__PURE__ */ React__namespace.createElement(SetPiePayloadLegend, _extends$9({}, propsWithoutId, {
      id
    })), /* @__PURE__ */ React__namespace.createElement(PieImpl, _extends$9({}, propsWithoutId, {
      id
    }))));
  }
  Pie.displayName = "Pie";
  function ownKeys$7(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$7(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$7(Object(t), true).forEach(function(r3) {
        _defineProperty$8(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$8(e, r2, t) {
    return (r2 = _toPropertyKey$8(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$8(t) {
    var i = _toPrimitive$8(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$8(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var initialState$4 = {
    xAxis: {},
    yAxis: {},
    zAxis: {}
  };
  var cartesianAxisSlice = createSlice({
    name: "cartesianAxis",
    initialState: initialState$4,
    reducers: {
      addXAxis: {
        reducer(state, action) {
          state.xAxis[action.payload.id] = castDraft(action.payload);
        },
        prepare: prepareAutoBatched()
      },
      replaceXAxis: {
        reducer(state, action) {
          var {
            prev,
            next
          } = action.payload;
          if (state.xAxis[prev.id] !== void 0) {
            if (prev.id !== next.id) {
              delete state.xAxis[prev.id];
            }
            state.xAxis[next.id] = castDraft(next);
          }
        },
        prepare: prepareAutoBatched()
      },
      removeXAxis: {
        reducer(state, action) {
          delete state.xAxis[action.payload.id];
        },
        prepare: prepareAutoBatched()
      },
      addYAxis: {
        reducer(state, action) {
          state.yAxis[action.payload.id] = castDraft(action.payload);
        },
        prepare: prepareAutoBatched()
      },
      replaceYAxis: {
        reducer(state, action) {
          var {
            prev,
            next
          } = action.payload;
          if (state.yAxis[prev.id] !== void 0) {
            if (prev.id !== next.id) {
              delete state.yAxis[prev.id];
            }
            state.yAxis[next.id] = castDraft(next);
          }
        },
        prepare: prepareAutoBatched()
      },
      removeYAxis: {
        reducer(state, action) {
          delete state.yAxis[action.payload.id];
        },
        prepare: prepareAutoBatched()
      },
      addZAxis: {
        reducer(state, action) {
          state.zAxis[action.payload.id] = castDraft(action.payload);
        },
        prepare: prepareAutoBatched()
      },
      replaceZAxis: {
        reducer(state, action) {
          var {
            prev,
            next
          } = action.payload;
          if (state.zAxis[prev.id] !== void 0) {
            if (prev.id !== next.id) {
              delete state.zAxis[prev.id];
            }
            state.zAxis[next.id] = castDraft(next);
          }
        },
        prepare: prepareAutoBatched()
      },
      removeZAxis: {
        reducer(state, action) {
          delete state.zAxis[action.payload.id];
        },
        prepare: prepareAutoBatched()
      },
      updateYAxisWidth(state, action) {
        var {
          id,
          width
        } = action.payload;
        var axis = state.yAxis[id];
        if (axis) {
          var history = axis.widthHistory || [];
          if (history.length === 3 && history[0] === history[2] && width === history[1] && width !== axis.width && Math.abs(width - history[0]) <= 1) {
            return;
          }
          var newHistory = [...history, width].slice(-3);
          state.yAxis[id] = _objectSpread$7(_objectSpread$7({}, state.yAxis[id]), {}, {
            width,
            widthHistory: newHistory
          });
        }
      }
    }
  });
  var {
    addXAxis,
    replaceXAxis,
    removeXAxis,
    addYAxis,
    replaceYAxis,
    removeYAxis,
    addZAxis,
    replaceZAxis,
    removeZAxis,
    updateYAxisWidth
  } = cartesianAxisSlice.actions;
  var cartesianAxisReducer = cartesianAxisSlice.reducer;
  var selectChartOffset = createSelector([selectChartOffsetInternal], (offsetInternal) => {
    return {
      top: offsetInternal.top,
      bottom: offsetInternal.bottom,
      left: offsetInternal.left,
      right: offsetInternal.right
    };
  });
  var selectPlotArea = createSelector([selectChartOffset, selectChartWidth, selectChartHeight], (offset, chartWidth, chartHeight) => {
    if (!offset || chartWidth == null || chartHeight == null) {
      return void 0;
    }
    return {
      x: offset.left,
      y: offset.top,
      width: Math.max(0, chartWidth - offset.left - offset.right),
      height: Math.max(0, chartHeight - offset.top - offset.bottom)
    };
  });
  var usePlotArea = () => {
    return useAppSelector(selectPlotArea);
  };
  var prefix = "Invariant failed";
  function invariant(condition, message) {
    {
      throw new Error(prefix);
    }
  }
  var _excluded$9 = ["x", "y"];
  function _extends$8() {
    return _extends$8 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$8.apply(null, arguments);
  }
  function ownKeys$6(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$6(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$6(Object(t), true).forEach(function(r3) {
        _defineProperty$7(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$7(e, r2, t) {
    return (r2 = _toPropertyKey$7(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$7(t) {
    var i = _toPrimitive$7(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$7(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function _objectWithoutProperties$9(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$9(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$9(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  function typeguardBarRectangleProps(_ref2, props) {
    var {
      x: xProp,
      y: yProp
    } = _ref2, option = _objectWithoutProperties$9(_ref2, _excluded$9);
    var xValue = "".concat(xProp);
    var x2 = parseInt(xValue, 10);
    var yValue = "".concat(yProp);
    var y2 = parseInt(yValue, 10);
    var heightValue = "".concat(props.height || option.height);
    var height = parseInt(heightValue, 10);
    var widthValue = "".concat(props.width || option.width);
    var width = parseInt(widthValue, 10);
    return _objectSpread$6(_objectSpread$6(_objectSpread$6(_objectSpread$6(_objectSpread$6({}, props), option), x2 ? {
      x: x2
    } : {}), y2 ? {
      y: y2
    } : {}), {}, {
      height,
      width,
      name: props.name,
      radius: props.radius
    });
  }
  function BarRectangle(props) {
    return /* @__PURE__ */ React__namespace.createElement(Shape, _extends$8({
      shapeType: "rectangle",
      propTransformer: typeguardBarRectangleProps,
      activeClassName: "recharts-active-bar"
    }, props));
  }
  var minPointSizeCallback = function minPointSizeCallback2(minPointSize) {
    var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (value, index) => {
      if (isNumber(minPointSize)) return minPointSize;
      var isValueNumberOrNil = isNumber(value) || isNullish(value);
      if (isValueNumberOrNil) {
        return minPointSize(value, index);
      }
      !isValueNumberOrNil ? invariant() : void 0;
      return defaultValue;
    };
  };
  var initialState$3 = {};
  var errorBarSlice = createSlice({
    name: "errorBars",
    initialState: initialState$3,
    reducers: {
      addErrorBar: (state, action) => {
        var {
          itemId,
          errorBar
        } = action.payload;
        if (!state[itemId]) {
          state[itemId] = [];
        }
        state[itemId].push(errorBar);
      },
      replaceErrorBar: (state, action) => {
        var {
          itemId,
          prev,
          next
        } = action.payload;
        if (state[itemId]) {
          state[itemId] = state[itemId].map((e) => e.dataKey === prev.dataKey && e.direction === prev.direction ? next : e);
        }
      },
      removeErrorBar: (state, action) => {
        var {
          itemId,
          errorBar
        } = action.payload;
        if (state[itemId]) {
          state[itemId] = state[itemId].filter((e) => e.dataKey !== errorBar.dataKey || e.direction !== errorBar.direction);
        }
      }
    }
  });
  var {
    addErrorBar,
    replaceErrorBar,
    removeErrorBar
  } = errorBarSlice.actions;
  var errorBarReducer = errorBarSlice.reducer;
  var _excluded$8 = ["children"];
  function _objectWithoutProperties$8(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$8(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$8(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  var initialContextState = {
    data: [],
    xAxisId: "xAxis-0",
    yAxisId: "yAxis-0",
    dataPointFormatter: () => ({
      x: 0,
      y: 0,
      value: 0
    }),
    errorBarOffset: 0
  };
  var ErrorBarContext = /* @__PURE__ */ React.createContext(initialContextState);
  function SetErrorBarContext(props) {
    var {
      children
    } = props, rest = _objectWithoutProperties$8(props, _excluded$8);
    return /* @__PURE__ */ React__namespace.createElement(ErrorBarContext.Provider, {
      value: rest
    }, children);
  }
  function useNeedsClip(xAxisId, yAxisId) {
    var _xAxis$allowDataOverf, _yAxis$allowDataOverf;
    var xAxis = useAppSelector((state) => selectXAxisSettings(state, xAxisId));
    var yAxis = useAppSelector((state) => selectYAxisSettings(state, yAxisId));
    var needClipX = (_xAxis$allowDataOverf = xAxis === null || xAxis === void 0 ? void 0 : xAxis.allowDataOverflow) !== null && _xAxis$allowDataOverf !== void 0 ? _xAxis$allowDataOverf : implicitXAxis.allowDataOverflow;
    var needClipY = (_yAxis$allowDataOverf = yAxis === null || yAxis === void 0 ? void 0 : yAxis.allowDataOverflow) !== null && _yAxis$allowDataOverf !== void 0 ? _yAxis$allowDataOverf : implicitYAxis.allowDataOverflow;
    var needClip = needClipX || needClipY;
    return {
      needClip,
      needClipX,
      needClipY
    };
  }
  function GraphicalItemClipPath(_ref2) {
    var {
      xAxisId,
      yAxisId,
      clipPathId
    } = _ref2;
    var plotArea = usePlotArea();
    var {
      needClipX,
      needClipY,
      needClip
    } = useNeedsClip(xAxisId, yAxisId);
    if (!needClip || !plotArea) {
      return null;
    }
    var {
      x: x2,
      y: y2,
      width,
      height
    } = plotArea;
    return /* @__PURE__ */ React__namespace.createElement("clipPath", {
      id: "clipPath-".concat(clipPathId)
    }, /* @__PURE__ */ React__namespace.createElement("rect", {
      x: needClipX ? x2 : x2 - width / 2,
      y: needClipY ? y2 : y2 - height / 2,
      width: needClipX ? width : width * 2,
      height: needClipY ? height : height * 2
    }));
  }
  function getZIndexFromUnknown(input, defaultZIndex) {
    if (input && typeof input === "object" && "zIndex" in input && typeof input.zIndex === "number" && isWellBehavedNumber(input.zIndex)) {
      return input.zIndex;
    }
    return defaultZIndex;
  }
  var withSelector = { exports: {} };
  var useSyncExternalStoreWithSelector_production = {};
  /**
   * @license React
   * use-sync-external-store-with-selector.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredUseSyncExternalStoreWithSelector_production;
  function requireUseSyncExternalStoreWithSelector_production() {
    if (hasRequiredUseSyncExternalStoreWithSelector_production) return useSyncExternalStoreWithSelector_production;
    hasRequiredUseSyncExternalStoreWithSelector_production = 1;
    var React$1 = React;
    function is2(x2, y2) {
      return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
    }
    var objectIs = "function" === typeof Object.is ? Object.is : is2, useSyncExternalStore = React$1.useSyncExternalStore, useRef = React$1.useRef, useEffect = React$1.useEffect, useMemo = React$1.useMemo, useDebugValue = React$1.useDebugValue;
    useSyncExternalStoreWithSelector_production.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
      var instRef = useRef(null);
      if (null === instRef.current) {
        var inst = { hasValue: false, value: null };
        instRef.current = inst;
      } else inst = instRef.current;
      instRef = useMemo(
        function() {
          function memoizedSelector(nextSnapshot) {
            if (!hasMemo) {
              hasMemo = true;
              memoizedSnapshot = nextSnapshot;
              nextSnapshot = selector(nextSnapshot);
              if (void 0 !== isEqual && inst.hasValue) {
                var currentSelection = inst.value;
                if (isEqual(currentSelection, nextSnapshot))
                  return memoizedSelection = currentSelection;
              }
              return memoizedSelection = nextSnapshot;
            }
            currentSelection = memoizedSelection;
            if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
            var nextSelection = selector(nextSnapshot);
            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
              return memoizedSnapshot = nextSnapshot, currentSelection;
            memoizedSnapshot = nextSnapshot;
            return memoizedSelection = nextSelection;
          }
          var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
          return [
            function() {
              return memoizedSelector(getSnapshot());
            },
            null === maybeGetServerSnapshot ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            }
          ];
        },
        [getSnapshot, getServerSnapshot, selector, isEqual]
      );
      var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
      useEffect(
        function() {
          inst.hasValue = true;
          inst.value = value;
        },
        [value]
      );
      useDebugValue(value);
      return value;
    };
    return useSyncExternalStoreWithSelector_production;
  }
  var hasRequiredWithSelector;
  function requireWithSelector() {
    if (hasRequiredWithSelector) return withSelector.exports;
    hasRequiredWithSelector = 1;
    {
      withSelector.exports = requireUseSyncExternalStoreWithSelector_production();
    }
    return withSelector.exports;
  }
  requireWithSelector();
  function defaultNoopBatch(callback) {
    callback();
  }
  function createListenerCollection() {
    let first = null;
    let last2 = null;
    return {
      clear() {
        first = null;
        last2 = null;
      },
      notify() {
        defaultNoopBatch(() => {
          let listener2 = first;
          while (listener2) {
            listener2.callback();
            listener2 = listener2.next;
          }
        });
      },
      get() {
        const listeners = [];
        let listener2 = first;
        while (listener2) {
          listeners.push(listener2);
          listener2 = listener2.next;
        }
        return listeners;
      },
      subscribe(callback) {
        let isSubscribed = true;
        const listener2 = last2 = {
          callback,
          next: null,
          prev: last2
        };
        if (listener2.prev) {
          listener2.prev.next = listener2;
        } else {
          first = listener2;
        }
        return function unsubscribe() {
          if (!isSubscribed || first === null) return;
          isSubscribed = false;
          if (listener2.next) {
            listener2.next.prev = listener2.prev;
          } else {
            last2 = listener2.prev;
          }
          if (listener2.prev) {
            listener2.prev.next = listener2.next;
          } else {
            first = listener2.next;
          }
        };
      }
    };
  }
  var nullListeners = {
    notify() {
    },
    get: () => []
  };
  function createSubscription(store, parentSub) {
    let unsubscribe;
    let listeners = nullListeners;
    let subscriptionsAmount = 0;
    let selfSubscribed = false;
    function addNestedSub(listener2) {
      trySubscribe();
      const cleanupListener = listeners.subscribe(listener2);
      let removed = false;
      return () => {
        if (!removed) {
          removed = true;
          cleanupListener();
          tryUnsubscribe();
        }
      };
    }
    function notifyNestedSubs() {
      listeners.notify();
    }
    function handleChangeWrapper() {
      if (subscription.onStateChange) {
        subscription.onStateChange();
      }
    }
    function isSubscribed() {
      return selfSubscribed;
    }
    function trySubscribe() {
      subscriptionsAmount++;
      if (!unsubscribe) {
        unsubscribe = store.subscribe(handleChangeWrapper);
        listeners = createListenerCollection();
      }
    }
    function tryUnsubscribe() {
      subscriptionsAmount--;
      if (unsubscribe && subscriptionsAmount === 0) {
        unsubscribe();
        unsubscribe = void 0;
        listeners.clear();
        listeners = nullListeners;
      }
    }
    function trySubscribeSelf() {
      if (!selfSubscribed) {
        selfSubscribed = true;
        trySubscribe();
      }
    }
    function tryUnsubscribeSelf() {
      if (selfSubscribed) {
        selfSubscribed = false;
        tryUnsubscribe();
      }
    }
    const subscription = {
      addNestedSub,
      notifyNestedSubs,
      handleChangeWrapper,
      isSubscribed,
      trySubscribe: trySubscribeSelf,
      tryUnsubscribe: tryUnsubscribeSelf,
      getListeners: () => listeners
    };
    return subscription;
  }
  var canUseDOM = () => !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
  var isDOM = /* @__PURE__ */ canUseDOM();
  var isRunningInReactNative = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
  var isReactNative = /* @__PURE__ */ isRunningInReactNative();
  var getUseIsomorphicLayoutEffect = () => isDOM || isReactNative ? React__namespace.useLayoutEffect : React__namespace.useEffect;
  var useIsomorphicLayoutEffect = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
  function is(x2, y2) {
    if (x2 === y2) {
      return x2 !== 0 || y2 !== 0 || 1 / x2 === 1 / y2;
    } else {
      return x2 !== x2 && y2 !== y2;
    }
  }
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
      return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (let i = 0; i < keysA.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }
    return true;
  }
  var ContextKey = /* @__PURE__ */ Symbol.for(`react-redux-context`);
  var gT = typeof globalThis !== "undefined" ? globalThis : (
    /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
    {}
  );
  function getContext() {
    if (!React__namespace.createContext) return {};
    const contextMap = gT[ContextKey] ?? (gT[ContextKey] = /* @__PURE__ */ new Map());
    let realContext = contextMap.get(React__namespace.createContext);
    if (!realContext) {
      realContext = React__namespace.createContext(
        null
      );
      contextMap.set(React__namespace.createContext, realContext);
    }
    return realContext;
  }
  var ReactReduxContext = /* @__PURE__ */ getContext();
  function Provider(providerProps) {
    const { children, context, serverState, store } = providerProps;
    const contextValue = React__namespace.useMemo(() => {
      const subscription = createSubscription(store);
      const baseContextValue = {
        store,
        subscription,
        getServerState: serverState ? () => serverState : void 0
      };
      {
        return baseContextValue;
      }
    }, [store, serverState]);
    const previousState = React__namespace.useMemo(() => store.getState(), [store]);
    useIsomorphicLayoutEffect(() => {
      const { subscription } = contextValue;
      subscription.onStateChange = subscription.notifyNestedSubs;
      subscription.trySubscribe();
      if (previousState !== store.getState()) {
        subscription.notifyNestedSubs();
      }
      return () => {
        subscription.tryUnsubscribe();
        subscription.onStateChange = void 0;
      };
    }, [contextValue, previousState]);
    const Context = context || ReactReduxContext;
    return /* @__PURE__ */ React__namespace.createElement(Context.Provider, { value: contextValue }, children);
  }
  var Provider_default = Provider;
  var propsToShallowCompare = /* @__PURE__ */ new Set(["axisLine", "tickLine", "activeBar", "activeDot", "activeLabel", "activeShape", "allowEscapeViewBox", "background", "cursor", "dot", "label", "line", "margin", "padding", "position", "shape", "style", "tick", "wrapperStyle"]);
  function sameValueZero(x2, y2) {
    if (x2 == null && y2 == null) {
      return true;
    }
    if (typeof x2 === "number" && typeof y2 === "number") {
      return x2 === y2 || x2 !== x2 && y2 !== y2;
    }
    return x2 === y2;
  }
  function propsAreEqual(prevProps, nextProps) {
    var allKeys = /* @__PURE__ */ new Set([...Object.keys(prevProps), ...Object.keys(nextProps)]);
    for (var key of allKeys) {
      if (propsToShallowCompare.has(key)) {
        if (prevProps[key] == null && nextProps[key] == null) {
          continue;
        }
        if (!shallowEqual(prevProps[key], nextProps[key])) {
          return false;
        }
      } else if (!sameValueZero(prevProps[key], nextProps[key])) {
        return false;
      }
    }
    return true;
  }
  var _excluded$7 = ["onMouseEnter", "onMouseLeave", "onClick"], _excluded2$3 = ["value", "background", "tooltipPosition"], _excluded3 = ["id"], _excluded4 = ["onMouseEnter", "onClick", "onMouseLeave"];
  function _extends$7() {
    return _extends$7 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$7.apply(null, arguments);
  }
  function ownKeys$5(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$5(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$5(Object(t), true).forEach(function(r3) {
        _defineProperty$6(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$6(e, r2, t) {
    return (r2 = _toPropertyKey$6(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$6(t) {
    var i = _toPrimitive$6(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$6(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function _objectWithoutProperties$7(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$7(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$7(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  var computeLegendPayloadFromBarData = (props) => {
    var {
      dataKey,
      name,
      fill,
      legendType,
      hide
    } = props;
    return [{
      inactive: hide,
      dataKey,
      type: legendType,
      color: fill,
      value: getTooltipNameProp(name, dataKey),
      payload: props
    }];
  };
  var SetBarTooltipEntrySettings = /* @__PURE__ */ React__namespace.memo((_ref2) => {
    var {
      dataKey,
      stroke,
      strokeWidth,
      fill,
      name,
      hide,
      unit: unit2,
      tooltipType
    } = _ref2;
    var tooltipEntrySettings = {
      dataDefinedOnItem: void 0,
      positions: void 0,
      settings: {
        stroke,
        strokeWidth,
        fill,
        dataKey,
        nameKey: void 0,
        name: getTooltipNameProp(name, dataKey),
        hide,
        type: tooltipType,
        color: fill,
        unit: unit2
      }
    };
    return /* @__PURE__ */ React__namespace.createElement(SetTooltipEntrySettings, {
      tooltipEntrySettings
    });
  });
  function BarBackground(props) {
    var activeIndex = useAppSelector(selectActiveTooltipIndex);
    var {
      data,
      dataKey,
      background: backgroundFromProps,
      allOtherBarProps
    } = props;
    var {
      onMouseEnter: onMouseEnterFromProps,
      onMouseLeave: onMouseLeaveFromProps,
      onClick: onItemClickFromProps
    } = allOtherBarProps, restOfAllOtherProps = _objectWithoutProperties$7(allOtherBarProps, _excluded$7);
    var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey);
    var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
    var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey);
    if (!backgroundFromProps || data == null) {
      return null;
    }
    var backgroundProps = svgPropertiesNoEventsFromUnknown(backgroundFromProps);
    return /* @__PURE__ */ React__namespace.createElement(ZIndexLayer, {
      zIndex: getZIndexFromUnknown(backgroundFromProps, DefaultZIndexes.barBackground)
    }, data.map((entry, i) => {
      var {
        value,
        background: backgroundFromDataEntry,
        tooltipPosition
      } = entry, rest = _objectWithoutProperties$7(entry, _excluded2$3);
      if (!backgroundFromDataEntry) {
        return null;
      }
      var onMouseEnter = onMouseEnterFromContext(entry, i);
      var onMouseLeave = onMouseLeaveFromContext(entry, i);
      var onClick = onClickFromContext(entry, i);
      var barRectangleProps = _objectSpread$5(_objectSpread$5(_objectSpread$5(_objectSpread$5(_objectSpread$5({
        option: backgroundFromProps,
        isActive: String(i) === activeIndex
      }, rest), {}, {
        // @ts-expect-error backgroundProps is contributing unknown props
        fill: "#eee"
      }, backgroundFromDataEntry), backgroundProps), adaptEventsOfChild(restOfAllOtherProps, entry, i)), {}, {
        onMouseEnter,
        onMouseLeave,
        onClick,
        dataKey,
        index: i,
        className: "recharts-bar-background-rectangle"
      });
      return /* @__PURE__ */ React__namespace.createElement(BarRectangle, _extends$7({
        key: "background-bar-".concat(i)
      }, barRectangleProps));
    }));
  }
  function BarLabelListProvider(_ref2) {
    var {
      showLabels,
      children,
      rects
    } = _ref2;
    var labelListEntries = rects === null || rects === void 0 ? void 0 : rects.map((entry) => {
      var viewBox = {
        x: entry.x,
        y: entry.y,
        width: entry.width,
        lowerWidth: entry.width,
        upperWidth: entry.width,
        height: entry.height
      };
      return _objectSpread$5(_objectSpread$5({}, viewBox), {}, {
        value: entry.value,
        payload: entry.payload,
        parentViewBox: entry.parentViewBox,
        viewBox,
        fill: entry.fill
      });
    });
    return /* @__PURE__ */ React__namespace.createElement(CartesianLabelListContextProvider, {
      value: showLabels ? labelListEntries : void 0
    }, children);
  }
  function BarRectangleWithActiveState(props) {
    var {
      shape,
      activeBar,
      baseProps,
      entry,
      index,
      dataKey
    } = props;
    var activeIndex = useAppSelector(selectActiveTooltipIndex);
    var activeDataKey = useAppSelector(selectActiveTooltipDataKey);
    var isActive = activeBar && String(index) === activeIndex && (activeDataKey == null || dataKey === activeDataKey);
    var option = isActive ? activeBar : shape;
    if (isActive) {
      return /* @__PURE__ */ React__namespace.createElement(ZIndexLayer, {
        zIndex: DefaultZIndexes.activeBar
      }, /* @__PURE__ */ React__namespace.createElement(BarRectangle, _extends$7({}, baseProps, {
        name: String(baseProps.name)
      }, entry, {
        isActive,
        option,
        index,
        dataKey
      })));
    }
    return /* @__PURE__ */ React__namespace.createElement(BarRectangle, _extends$7({}, baseProps, {
      name: String(baseProps.name)
    }, entry, {
      isActive,
      option,
      index,
      dataKey
    }));
  }
  function BarRectangleNeverActive(props) {
    var {
      shape,
      baseProps,
      entry,
      index,
      dataKey
    } = props;
    return /* @__PURE__ */ React__namespace.createElement(BarRectangle, _extends$7({}, baseProps, {
      name: String(baseProps.name)
    }, entry, {
      isActive: false,
      option: shape,
      index,
      dataKey
    }));
  }
  function BarRectangles(_ref3) {
    var _svgPropertiesNoEvent;
    var {
      data,
      props
    } = _ref3;
    var _ref4 = (_svgPropertiesNoEvent = svgPropertiesNoEvents(props)) !== null && _svgPropertiesNoEvent !== void 0 ? _svgPropertiesNoEvent : {}, {
      id
    } = _ref4, baseProps = _objectWithoutProperties$7(_ref4, _excluded3);
    var {
      shape,
      dataKey,
      activeBar
    } = props;
    var {
      onMouseEnter: onMouseEnterFromProps,
      onClick: onItemClickFromProps,
      onMouseLeave: onMouseLeaveFromProps
    } = props, restOfAllOtherProps = _objectWithoutProperties$7(props, _excluded4);
    var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey);
    var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
    var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey);
    if (!data) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, data.map((entry, i) => {
      return /* @__PURE__ */ React__namespace.createElement(
        Layer,
        _extends$7({
          key: "rectangle-".concat(entry === null || entry === void 0 ? void 0 : entry.x, "-").concat(entry === null || entry === void 0 ? void 0 : entry.y, "-").concat(entry === null || entry === void 0 ? void 0 : entry.value, "-").concat(i),
          className: "recharts-bar-rectangle"
        }, adaptEventsOfChild(restOfAllOtherProps, entry, i), {
          // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
          onMouseEnter: onMouseEnterFromContext(entry, i),
          onMouseLeave: onMouseLeaveFromContext(entry, i),
          onClick: onClickFromContext(entry, i)
        }),
        activeBar ? /* @__PURE__ */ React__namespace.createElement(BarRectangleWithActiveState, {
          shape,
          activeBar,
          baseProps,
          entry,
          index: i,
          dataKey
        }) : (
          /*
           * If the `activeBar` prop is falsy, then let's call the variant without hooks.
           * Using the `selectActiveTooltipIndex` selector is usually fast
           * but in charts with large-ish amount of data even the few nanoseconds add up to a noticeable jank.
           * If the activeBar is false then we don't need to know which index is active - because we won't use it anyway.
           * So let's just skip the hooks altogether. That way, React can skip rendering the component,
           * and can skip the tree reconciliation for its children too.
           * Because we can't call hooks conditionally, we need to have a separate component for that.
           */
          /* @__PURE__ */ React__namespace.createElement(BarRectangleNeverActive, {
            shape,
            baseProps,
            entry,
            index: i,
            dataKey
          })
        )
      );
    }));
  }
  function RectanglesWithAnimation(_ref5) {
    var {
      props,
      previousRectanglesRef
    } = _ref5;
    var {
      data,
      layout,
      isAnimationActive,
      animationBegin,
      animationDuration,
      animationEasing,
      onAnimationEnd,
      onAnimationStart
    } = props;
    var prevData = previousRectanglesRef.current;
    var animationId = useAnimationId(props, "recharts-bar-");
    var [isAnimating, setIsAnimating] = React.useState(false);
    var showLabels = !isAnimating;
    var handleAnimationEnd = React.useCallback(() => {
      if (typeof onAnimationEnd === "function") {
        onAnimationEnd();
      }
      setIsAnimating(false);
    }, [onAnimationEnd]);
    var handleAnimationStart = React.useCallback(() => {
      if (typeof onAnimationStart === "function") {
        onAnimationStart();
      }
      setIsAnimating(true);
    }, [onAnimationStart]);
    return /* @__PURE__ */ React__namespace.createElement(BarLabelListProvider, {
      showLabels,
      rects: data
    }, /* @__PURE__ */ React__namespace.createElement(JavascriptAnimate, {
      animationId,
      begin: animationBegin,
      duration: animationDuration,
      isActive: isAnimationActive,
      easing: animationEasing,
      onAnimationEnd: handleAnimationEnd,
      onAnimationStart: handleAnimationStart,
      key: animationId
    }, (t) => {
      var stepData = t === 1 ? data : data === null || data === void 0 ? void 0 : data.map((entry, index) => {
        var prev = prevData && prevData[index];
        if (prev) {
          return _objectSpread$5(_objectSpread$5({}, entry), {}, {
            x: interpolate$1(prev.x, entry.x, t),
            y: interpolate$1(prev.y, entry.y, t),
            width: interpolate$1(prev.width, entry.width, t),
            height: interpolate$1(prev.height, entry.height, t)
          });
        }
        if (layout === "horizontal") {
          var height = interpolate$1(0, entry.height, t);
          var y2 = interpolate$1(entry.stackedBarStart, entry.y, t);
          return _objectSpread$5(_objectSpread$5({}, entry), {}, {
            y: y2,
            height
          });
        }
        var w = interpolate$1(0, entry.width, t);
        var x2 = interpolate$1(entry.stackedBarStart, entry.x, t);
        return _objectSpread$5(_objectSpread$5({}, entry), {}, {
          width: w,
          x: x2
        });
      });
      if (t > 0) {
        previousRectanglesRef.current = stepData !== null && stepData !== void 0 ? stepData : null;
      }
      if (stepData == null) {
        return null;
      }
      return /* @__PURE__ */ React__namespace.createElement(Layer, null, /* @__PURE__ */ React__namespace.createElement(BarRectangles, {
        props,
        data: stepData
      }));
    }), /* @__PURE__ */ React__namespace.createElement(LabelListFromLabelProp, {
      label: props.label
    }), props.children);
  }
  function RenderRectangles(props) {
    var previousRectanglesRef = React.useRef(null);
    return /* @__PURE__ */ React__namespace.createElement(RectanglesWithAnimation, {
      previousRectanglesRef,
      props
    });
  }
  var defaultMinPointSize = 0;
  var errorBarDataPointFormatter = (dataPoint, dataKey) => {
    var value = Array.isArray(dataPoint.value) ? dataPoint.value[1] : dataPoint.value;
    return {
      x: dataPoint.x,
      y: dataPoint.y,
      value,
      // @ts-expect-error getValueByDataKey does not validate the output type
      errorVal: getValueByDataKey(dataPoint, dataKey)
    };
  };
  class BarWithState extends React.PureComponent {
    render() {
      var {
        hide,
        data,
        dataKey,
        className,
        xAxisId,
        yAxisId,
        needClip,
        background,
        id
      } = this.props;
      if (hide || data == null) {
        return null;
      }
      var layerClass = clsx("recharts-bar", className);
      var clipPathId = id;
      return /* @__PURE__ */ React__namespace.createElement(Layer, {
        className: layerClass,
        id
      }, needClip && /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement(GraphicalItemClipPath, {
        clipPathId,
        xAxisId,
        yAxisId
      })), /* @__PURE__ */ React__namespace.createElement(Layer, {
        className: "recharts-bar-rectangles",
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0
      }, /* @__PURE__ */ React__namespace.createElement(BarBackground, {
        data,
        dataKey,
        background,
        allOtherBarProps: this.props
      }), /* @__PURE__ */ React__namespace.createElement(RenderRectangles, this.props)));
    }
  }
  var defaultBarProps = {
    activeBar: false,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: "ease",
    background: false,
    hide: false,
    isAnimationActive: "auto",
    label: false,
    legendType: "rect",
    minPointSize: defaultMinPointSize,
    xAxisId: 0,
    yAxisId: 0,
    zIndex: DefaultZIndexes.bar
  };
  function BarImpl(props) {
    var {
      xAxisId,
      yAxisId,
      hide,
      legendType,
      minPointSize,
      activeBar,
      animationBegin,
      animationDuration,
      animationEasing,
      isAnimationActive
    } = props;
    var {
      needClip
    } = useNeedsClip(xAxisId, yAxisId);
    var layout = useChartLayout();
    var isPanorama = useIsPanorama();
    var cells = findAllByType(props.children, Cell);
    var rects = useAppSelector((state) => selectBarRectangles(state, xAxisId, yAxisId, isPanorama, props.id, cells));
    if (layout !== "vertical" && layout !== "horizontal") {
      return null;
    }
    var errorBarOffset;
    var firstDataPoint = rects === null || rects === void 0 ? void 0 : rects[0];
    if (firstDataPoint == null || firstDataPoint.height == null || firstDataPoint.width == null) {
      errorBarOffset = 0;
    } else {
      errorBarOffset = layout === "vertical" ? firstDataPoint.height / 2 : firstDataPoint.width / 2;
    }
    return /* @__PURE__ */ React__namespace.createElement(SetErrorBarContext, {
      xAxisId,
      yAxisId,
      data: rects,
      dataPointFormatter: errorBarDataPointFormatter,
      errorBarOffset
    }, /* @__PURE__ */ React__namespace.createElement(BarWithState, _extends$7({}, props, {
      layout,
      needClip,
      data: rects,
      xAxisId,
      yAxisId,
      hide,
      legendType,
      minPointSize,
      activeBar,
      animationBegin,
      animationDuration,
      animationEasing,
      isAnimationActive
    })));
  }
  function computeBarRectangles(_ref6) {
    var {
      layout,
      barSettings: {
        dataKey,
        minPointSize: minPointSizeProp
      },
      pos,
      bandSize,
      xAxis,
      yAxis,
      xAxisTicks,
      yAxisTicks,
      stackedData,
      displayedData,
      offset,
      cells,
      parentViewBox,
      dataStartIndex
    } = _ref6;
    var numericAxis = layout === "horizontal" ? yAxis : xAxis;
    var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
    var baseValue = getBaseValueOfBar({
      numericAxis
    });
    var stackedBarStart = numericAxis.scale(baseValue);
    return displayedData.map((entry, index) => {
      var value, x2, y2, width, height, background;
      if (stackedData) {
        value = truncateByDomain(stackedData[index + dataStartIndex], stackedDomain);
      } else {
        value = getValueByDataKey(entry, dataKey);
        if (!Array.isArray(value)) {
          value = [baseValue, value];
        }
      }
      var minPointSize = minPointSizeCallback(minPointSizeProp, defaultMinPointSize)(value[1], index);
      if (layout === "horizontal") {
        var _ref7;
        var [baseValueScale, currentValueScale] = [yAxis.scale(value[0]), yAxis.scale(value[1])];
        x2 = getCateCoordinateOfBar({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize,
          offset: pos.offset,
          entry,
          index
        });
        y2 = (_ref7 = currentValueScale !== null && currentValueScale !== void 0 ? currentValueScale : baseValueScale) !== null && _ref7 !== void 0 ? _ref7 : void 0;
        width = pos.size;
        var computedHeight = baseValueScale - currentValueScale;
        height = isNan(computedHeight) ? 0 : computedHeight;
        background = {
          x: x2,
          y: offset.top,
          width,
          height: offset.height
        };
        if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
          var delta = mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
          y2 -= delta;
          height += delta;
        }
      } else {
        var [_baseValueScale, _currentValueScale] = [xAxis.scale(value[0]), xAxis.scale(value[1])];
        x2 = _baseValueScale;
        y2 = getCateCoordinateOfBar({
          axis: yAxis,
          ticks: yAxisTicks,
          bandSize,
          offset: pos.offset,
          entry,
          index
        });
        width = _currentValueScale - _baseValueScale;
        height = pos.size;
        background = {
          x: offset.left,
          y: y2,
          width: offset.width,
          height
        };
        if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
          var _delta = mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
          width += _delta;
        }
      }
      if (x2 == null || y2 == null || width == null || height == null) {
        return null;
      }
      var barRectangleItem = _objectSpread$5(_objectSpread$5({}, entry), {}, {
        stackedBarStart,
        x: x2,
        y: y2,
        width,
        height,
        value: stackedData ? value : value[1],
        payload: entry,
        background,
        tooltipPosition: {
          x: x2 + width / 2,
          y: y2 + height / 2
        },
        parentViewBox
      }, cells && cells[index] && cells[index].props);
      return barRectangleItem;
    }).filter(Boolean);
  }
  function BarFn(outsideProps) {
    var props = resolveDefaultProps(outsideProps, defaultBarProps);
    var isPanorama = useIsPanorama();
    return /* @__PURE__ */ React__namespace.createElement(RegisterGraphicalItemId, {
      id: props.id,
      type: "bar"
    }, (id) => /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(SetLegendPayload, {
      legendPayload: computeLegendPayloadFromBarData(props)
    }), /* @__PURE__ */ React__namespace.createElement(SetBarTooltipEntrySettings, {
      dataKey: props.dataKey,
      stroke: props.stroke,
      strokeWidth: props.strokeWidth,
      fill: props.fill,
      name: props.name,
      hide: props.hide,
      unit: props.unit,
      tooltipType: props.tooltipType
    }), /* @__PURE__ */ React__namespace.createElement(SetCartesianGraphicalItem, {
      type: "bar",
      id,
      data: void 0,
      xAxisId: props.xAxisId,
      yAxisId: props.yAxisId,
      zAxisId: 0,
      dataKey: props.dataKey,
      stackId: getNormalizedStackId(props.stackId),
      hide: props.hide,
      barSize: props.barSize,
      minPointSize: props.minPointSize,
      maxBarSize: props.maxBarSize,
      isPanorama
    }), /* @__PURE__ */ React__namespace.createElement(ZIndexLayer, {
      zIndex: props.zIndex
    }, /* @__PURE__ */ React__namespace.createElement(BarImpl, _extends$7({}, props, {
      id
    })))));
  }
  var Bar = /* @__PURE__ */ React__namespace.memo(BarFn, propsAreEqual);
  Bar.displayName = "Bar";
  function ownKeys$4(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$4(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$4(Object(t), true).forEach(function(r3) {
        _defineProperty$5(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$5(e, r2, t) {
    return (r2 = _toPropertyKey$5(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$5(t) {
    var i = _toPrimitive$5(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$5(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var pickXAxisId = (_state, xAxisId) => xAxisId;
  var pickYAxisId = (_state, _xAxisId, yAxisId) => yAxisId;
  var pickIsPanorama = (_state, _xAxisId, _yAxisId, isPanorama) => isPanorama;
  var pickBarId = (_state, _xAxisId, _yAxisId, _isPanorama, id) => id;
  var selectSynchronisedBarSettings = createSelector([selectUnfilteredCartesianItems, pickBarId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "bar").find((item) => item.id === id));
  var selectMaxBarSize = createSelector([selectSynchronisedBarSettings], (barSettings) => barSettings === null || barSettings === void 0 ? void 0 : barSettings.maxBarSize);
  var pickCells = (_state, _xAxisId, _yAxisId, _isPanorama, _id, cells) => cells;
  var getBarSize = (globalSize, totalSize, selfSize) => {
    var barSize = selfSize !== null && selfSize !== void 0 ? selfSize : globalSize;
    if (isNullish(barSize)) {
      return void 0;
    }
    return getPercentValue(barSize, totalSize, 0);
  };
  var selectAllVisibleBars = createSelector([selectChartLayout, selectUnfilteredCartesianItems, pickXAxisId, pickYAxisId, pickIsPanorama], (layout, allItems, xAxisId, yAxisId, isPanorama) => allItems.filter((i) => {
    if (layout === "horizontal") {
      return i.xAxisId === xAxisId;
    }
    return i.yAxisId === yAxisId;
  }).filter((i) => i.isPanorama === isPanorama).filter((i) => i.hide === false).filter((i) => i.type === "bar"));
  var selectBarStackGroups = (state, xAxisId, yAxisId, isPanorama) => {
    var layout = selectChartLayout(state);
    if (layout === "horizontal") {
      return selectStackGroups(state, "yAxis", yAxisId, isPanorama);
    }
    return selectStackGroups(state, "xAxis", xAxisId, isPanorama);
  };
  var selectBarCartesianAxisSize = (state, xAxisId, yAxisId) => {
    var layout = selectChartLayout(state);
    if (layout === "horizontal") {
      return selectCartesianAxisSize(state, "xAxis", xAxisId);
    }
    return selectCartesianAxisSize(state, "yAxis", yAxisId);
  };
  var combineBarSizeList = (allBars, globalSize, totalSize) => {
    var initialValue = {};
    var stackedBars = allBars.filter(isStacked);
    var unstackedBars = allBars.filter((b) => b.stackId == null);
    var groupByStack = stackedBars.reduce((acc, bar) => {
      if (!acc[bar.stackId]) {
        acc[bar.stackId] = [];
      }
      acc[bar.stackId].push(bar);
      return acc;
    }, initialValue);
    var stackedSizeList = Object.entries(groupByStack).map((_ref2) => {
      var [stackId, bars] = _ref2;
      var dataKeys = bars.map((b) => b.dataKey);
      var barSize = getBarSize(globalSize, totalSize, bars[0].barSize);
      return {
        stackId,
        dataKeys,
        barSize
      };
    });
    var unstackedSizeList = unstackedBars.map((b) => {
      var dataKeys = [b.dataKey].filter((dk) => dk != null);
      var barSize = getBarSize(globalSize, totalSize, b.barSize);
      return {
        stackId: void 0,
        dataKeys,
        barSize
      };
    });
    return [...stackedSizeList, ...unstackedSizeList];
  };
  var selectBarSizeList = createSelector([selectAllVisibleBars, selectRootBarSize, selectBarCartesianAxisSize], combineBarSizeList);
  var selectBarBandSize = (state, xAxisId, yAxisId, isPanorama, id) => {
    var _ref2, _getBandSizeOfAxis;
    var barSettings = selectSynchronisedBarSettings(state, xAxisId, yAxisId, isPanorama, id);
    if (barSettings == null) {
      return void 0;
    }
    var layout = selectChartLayout(state);
    var globalMaxBarSize = selectRootMaxBarSize(state);
    var {
      maxBarSize: childMaxBarSize
    } = barSettings;
    var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
    var axis, ticks2;
    if (layout === "horizontal") {
      axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
      ticks2 = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
    } else {
      axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
      ticks2 = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
    }
    return (_ref2 = (_getBandSizeOfAxis = getBandSizeOfAxis(axis, ticks2, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref2 !== void 0 ? _ref2 : 0;
  };
  var selectAxisBandSize = (state, xAxisId, yAxisId, isPanorama) => {
    var layout = selectChartLayout(state);
    var axis, ticks2;
    if (layout === "horizontal") {
      axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
      ticks2 = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
    } else {
      axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
      ticks2 = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
    }
    return getBandSizeOfAxis(axis, ticks2);
  };
  function getBarPositions(barGap, barCategoryGap, bandSize, sizeList, maxBarSize) {
    var len = sizeList.length;
    if (len < 1) {
      return void 0;
    }
    var realBarGap = getPercentValue(barGap, bandSize, 0, true);
    var result;
    var initialValue = [];
    if (isWellBehavedNumber(sizeList[0].barSize)) {
      var useFull = false;
      var fullBarSize = bandSize / len;
      var sum = sizeList.reduce((res, entry) => res + (entry.barSize || 0), 0);
      sum += (len - 1) * realBarGap;
      if (sum >= bandSize) {
        sum -= (len - 1) * realBarGap;
        realBarGap = 0;
      }
      if (sum >= bandSize && fullBarSize > 0) {
        useFull = true;
        fullBarSize *= 0.9;
        sum = len * fullBarSize;
      }
      var offset = (bandSize - sum) / 2 >> 0;
      var prev = {
        offset: offset - realBarGap,
        size: 0
      };
      result = sizeList.reduce((res, entry) => {
        var _entry$barSize;
        var newPosition = {
          stackId: entry.stackId,
          dataKeys: entry.dataKeys,
          position: {
            offset: prev.offset + prev.size + realBarGap,
            size: useFull ? fullBarSize : (_entry$barSize = entry.barSize) !== null && _entry$barSize !== void 0 ? _entry$barSize : 0
          }
        };
        var newRes = [...res, newPosition];
        prev = newRes[newRes.length - 1].position;
        return newRes;
      }, initialValue);
    } else {
      var _offset = getPercentValue(barCategoryGap, bandSize, 0, true);
      if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) {
        realBarGap = 0;
      }
      var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;
      if (originalSize > 1) {
        originalSize >>= 0;
      }
      var size = isWellBehavedNumber(maxBarSize) ? Math.min(originalSize, maxBarSize) : originalSize;
      result = sizeList.reduce((res, entry, i) => [...res, {
        stackId: entry.stackId,
        dataKeys: entry.dataKeys,
        position: {
          offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
          size
        }
      }], initialValue);
    }
    return result;
  }
  var combineAllBarPositions = (sizeList, globalMaxBarSize, barGap, barCategoryGap, barBandSize, bandSize, childMaxBarSize) => {
    var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
    var allBarPositions = getBarPositions(barGap, barCategoryGap, barBandSize !== bandSize ? barBandSize : bandSize, sizeList, maxBarSize);
    if (barBandSize !== bandSize && allBarPositions != null) {
      allBarPositions = allBarPositions.map((pos) => _objectSpread$4(_objectSpread$4({}, pos), {}, {
        position: _objectSpread$4(_objectSpread$4({}, pos.position), {}, {
          offset: pos.position.offset - barBandSize / 2
        })
      }));
    }
    return allBarPositions;
  };
  var selectAllBarPositions = createSelector([selectBarSizeList, selectRootMaxBarSize, selectBarGap, selectBarCategoryGap, selectBarBandSize, selectAxisBandSize, selectMaxBarSize], combineAllBarPositions);
  var selectXAxisWithScale = (state, xAxisId, _yAxisId, isPanorama) => selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
  var selectYAxisWithScale = (state, _xAxisId, yAxisId, isPanorama) => selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
  var selectXAxisTicks = (state, xAxisId, _yAxisId, isPanorama) => selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
  var selectYAxisTicks = (state, _xAxisId, yAxisId, isPanorama) => selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
  var selectBarPosition = createSelector([selectAllBarPositions, selectSynchronisedBarSettings], (allBarPositions, barSettings) => {
    if (allBarPositions == null || barSettings == null) {
      return void 0;
    }
    var position = allBarPositions.find((p) => p.stackId === barSettings.stackId && barSettings.dataKey != null && p.dataKeys.includes(barSettings.dataKey));
    if (position == null) {
      return void 0;
    }
    return position.position;
  });
  var combineStackedData = (stackGroups, barSettings) => {
    var stackSeriesIdentifier = getStackSeriesIdentifier(barSettings);
    if (!stackGroups || stackSeriesIdentifier == null || barSettings == null) {
      return void 0;
    }
    var {
      stackId
    } = barSettings;
    if (stackId == null) {
      return void 0;
    }
    var stackGroup = stackGroups[stackId];
    if (!stackGroup) {
      return void 0;
    }
    var {
      stackedData
    } = stackGroup;
    if (!stackedData) {
      return void 0;
    }
    return stackedData.find((sd) => sd.key === stackSeriesIdentifier);
  };
  var selectStackedDataOfItem = createSelector([selectBarStackGroups, selectSynchronisedBarSettings], combineStackedData);
  var selectBarRectangles = createSelector([selectChartOffsetInternal, selectAxisViewBox, selectXAxisWithScale, selectYAxisWithScale, selectXAxisTicks, selectYAxisTicks, selectBarPosition, selectChartLayout, selectChartDataWithIndexesIfNotInPanorama, selectAxisBandSize, selectStackedDataOfItem, selectSynchronisedBarSettings, pickCells], (offset, axisViewBox, xAxis, yAxis, xAxisTicks, yAxisTicks, pos, layout, _ref3, bandSize, stackedData, barSettings, cells) => {
    var {
      chartData,
      dataStartIndex,
      dataEndIndex
    } = _ref3;
    if (barSettings == null || pos == null || axisViewBox == null || layout !== "horizontal" && layout !== "vertical" || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || bandSize == null) {
      return void 0;
    }
    var {
      data
    } = barSettings;
    var displayedData;
    if (data != null && data.length > 0) {
      displayedData = data;
    } else {
      displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
    }
    if (displayedData == null) {
      return void 0;
    }
    return computeBarRectangles({
      layout,
      barSettings,
      pos,
      parentViewBox: axisViewBox,
      bandSize,
      xAxis,
      yAxis,
      xAxisTicks,
      yAxisTicks,
      stackedData,
      displayedData,
      offset,
      cells,
      dataStartIndex
    });
  });
  var ChartDataContextProvider = (props) => {
    var {
      chartData
    } = props;
    var dispatch = useAppDispatch();
    var isPanorama = useIsPanorama();
    React.useEffect(() => {
      if (isPanorama) {
        return () => {
        };
      }
      dispatch(setChartData(chartData));
      return () => {
        dispatch(setChartData(void 0));
      };
    }, [chartData, dispatch, isPanorama]);
    return null;
  };
  var initialState$2 = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  };
  var brushSlice = createSlice({
    name: "brush",
    initialState: initialState$2,
    reducers: {
      setBrushSettings(_state, action) {
        if (action.payload == null) {
          return initialState$2;
        }
        return action.payload;
      }
    }
  });
  var {
    setBrushSettings
  } = brushSlice.actions;
  var brushReducer = brushSlice.reducer;
  function _defineProperty$4(e, r2, t) {
    return (r2 = _toPropertyKey$4(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$4(t) {
    var i = _toPrimitive$4(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$4(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  class ScaleHelper {
    static create(obj) {
      return new ScaleHelper(obj);
    }
    constructor(scale) {
      this.scale = scale;
    }
    get domain() {
      return this.scale.domain;
    }
    get range() {
      return this.scale.range;
    }
    get rangeMin() {
      return this.range()[0];
    }
    get rangeMax() {
      return this.range()[1];
    }
    get bandwidth() {
      return this.scale.bandwidth;
    }
    apply(value) {
      var {
        bandAware,
        position
      } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (value === void 0) {
        return void 0;
      }
      if (position) {
        switch (position) {
          case "start": {
            return this.scale(value);
          }
          case "middle": {
            var offset = this.bandwidth ? this.bandwidth() / 2 : 0;
            return this.scale(value) + offset;
          }
          case "end": {
            var _offset = this.bandwidth ? this.bandwidth() : 0;
            return this.scale(value) + _offset;
          }
          default: {
            return this.scale(value);
          }
        }
      }
      if (bandAware) {
        var _offset2 = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(value) + _offset2;
      }
      return this.scale(value);
    }
    isInRange(value) {
      var range2 = this.range();
      var first = range2[0];
      var last2 = range2[range2.length - 1];
      return first <= last2 ? value >= first && value <= last2 : value >= last2 && value <= first;
    }
  }
  _defineProperty$4(ScaleHelper, "EPS", 1e-4);
  function normalizeAngle(angle) {
    return (angle % 180 + 180) % 180;
  }
  var getAngledRectangleWidth = function getAngledRectangleWidth2(_ref5) {
    var {
      width,
      height
    } = _ref5;
    var angle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var normalizedAngle = normalizeAngle(angle);
    var angleRadians = normalizedAngle * Math.PI / 180;
    var angleThreshold = Math.atan(height / width);
    var angledWidth = angleRadians > angleThreshold && angleRadians < Math.PI - angleThreshold ? height / Math.sin(angleRadians) : width / Math.cos(angleRadians);
    return Math.abs(angledWidth);
  };
  var initialState$1 = {
    dots: [],
    areas: [],
    lines: []
  };
  var referenceElementsSlice = createSlice({
    name: "referenceElements",
    initialState: initialState$1,
    reducers: {
      addDot: (state, action) => {
        state.dots.push(action.payload);
      },
      removeDot: (state, action) => {
        var index = current$1(state).dots.findIndex((dot) => dot === action.payload);
        if (index !== -1) {
          state.dots.splice(index, 1);
        }
      },
      addArea: (state, action) => {
        state.areas.push(action.payload);
      },
      removeArea: (state, action) => {
        var index = current$1(state).areas.findIndex((area) => area === action.payload);
        if (index !== -1) {
          state.areas.splice(index, 1);
        }
      },
      addLine: (state, action) => {
        state.lines.push(castDraft(action.payload));
      },
      removeLine: (state, action) => {
        var index = current$1(state).lines.findIndex((line) => line === action.payload);
        if (index !== -1) {
          state.lines.splice(index, 1);
        }
      }
    }
  });
  var {
    addDot,
    removeDot,
    addArea,
    removeArea,
    addLine,
    removeLine
  } = referenceElementsSlice.actions;
  var referenceElementsReducer = referenceElementsSlice.reducer;
  var ClipPathIdContext = /* @__PURE__ */ React.createContext(void 0);
  var ClipPathProvider = (_ref2) => {
    var {
      children
    } = _ref2;
    var [clipPathId] = React.useState("".concat(uniqueId("recharts"), "-clip"));
    var plotArea = usePlotArea();
    if (plotArea == null) {
      return null;
    }
    var {
      x: x2,
      y: y2,
      width,
      height
    } = plotArea;
    return /* @__PURE__ */ React__namespace.createElement(ClipPathIdContext.Provider, {
      value: clipPathId
    }, /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", {
      id: clipPathId
    }, /* @__PURE__ */ React__namespace.createElement("rect", {
      x: x2,
      y: y2,
      height,
      width
    }))), children);
  };
  function getEveryNthWithCondition(array2, n) {
    if (n < 1) {
      return [];
    }
    if (n === 1) {
      return array2;
    }
    var result = [];
    for (var i = 0; i < array2.length; i += n) {
      result.push(array2[i]);
    }
    return result;
  }
  function getAngledTickWidth(contentSize, unitSize, angle) {
    var size = {
      width: contentSize.width + unitSize.width,
      height: contentSize.height + unitSize.height
    };
    return getAngledRectangleWidth(size, angle);
  }
  function getTickBoundaries(viewBox, sign2, sizeKey) {
    var isWidth = sizeKey === "width";
    var {
      x: x2,
      y: y2,
      width,
      height
    } = viewBox;
    if (sign2 === 1) {
      return {
        start: isWidth ? x2 : y2,
        end: isWidth ? x2 + width : y2 + height
      };
    }
    return {
      start: isWidth ? x2 + width : y2 + height,
      end: isWidth ? x2 : y2
    };
  }
  function isVisible(sign2, tickPosition, getSize, start, end) {
    if (sign2 * tickPosition < sign2 * start || sign2 * tickPosition > sign2 * end) {
      return false;
    }
    var size = getSize();
    return sign2 * (tickPosition - sign2 * size / 2 - start) >= 0 && sign2 * (tickPosition + sign2 * size / 2 - end) <= 0;
  }
  function getNumberIntervalTicks(ticks2, interval) {
    return getEveryNthWithCondition(ticks2, interval + 1);
  }
  function getEquidistantTicks(sign2, boundaries, getTickSize, ticks2, minTickGap) {
    var result = (ticks2 || []).slice();
    var {
      start: initialStart,
      end
    } = boundaries;
    var index = 0;
    var stepsize = 1;
    var start = initialStart;
    var _loop = function _loop2() {
      var entry = ticks2 === null || ticks2 === void 0 ? void 0 : ticks2[index];
      if (entry === void 0) {
        return {
          v: getEveryNthWithCondition(ticks2, stepsize)
        };
      }
      var i = index;
      var size;
      var getSize = () => {
        if (size === void 0) {
          size = getTickSize(entry, i);
        }
        return size;
      };
      var tickCoord = entry.coordinate;
      var isShow = index === 0 || isVisible(sign2, tickCoord, getSize, start, end);
      if (!isShow) {
        index = 0;
        start = initialStart;
        stepsize += 1;
      }
      if (isShow) {
        start = tickCoord + sign2 * (getSize() / 2 + minTickGap);
        index += stepsize;
      }
    }, _ret;
    while (stepsize <= result.length) {
      _ret = _loop();
      if (_ret) return _ret.v;
    }
    return [];
  }
  function ownKeys$3(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$3(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$3(Object(t), true).forEach(function(r3) {
        _defineProperty$3(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$3(e, r2, t) {
    return (r2 = _toPropertyKey$3(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$3(t) {
    var i = _toPrimitive$3(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$3(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function getTicksEnd(sign2, boundaries, getTickSize, ticks2, minTickGap) {
    var result = (ticks2 || []).slice();
    var len = result.length;
    var {
      start
    } = boundaries;
    var {
      end
    } = boundaries;
    var _loop = function _loop2(i2) {
      var entry = result[i2];
      var size;
      var getSize = () => {
        if (size === void 0) {
          size = getTickSize(entry, i2);
        }
        return size;
      };
      if (i2 === len - 1) {
        var gap = sign2 * (entry.coordinate + sign2 * getSize() / 2 - end);
        result[i2] = entry = _objectSpread$3(_objectSpread$3({}, entry), {}, {
          tickCoord: gap > 0 ? entry.coordinate - gap * sign2 : entry.coordinate
        });
      } else {
        result[i2] = entry = _objectSpread$3(_objectSpread$3({}, entry), {}, {
          tickCoord: entry.coordinate
        });
      }
      if (entry.tickCoord != null) {
        var isShow = isVisible(sign2, entry.tickCoord, getSize, start, end);
        if (isShow) {
          end = entry.tickCoord - sign2 * (getSize() / 2 + minTickGap);
          result[i2] = _objectSpread$3(_objectSpread$3({}, entry), {}, {
            isShow: true
          });
        }
      }
    };
    for (var i = len - 1; i >= 0; i--) {
      _loop(i);
    }
    return result;
  }
  function getTicksStart(sign2, boundaries, getTickSize, ticks2, minTickGap, preserveEnd) {
    var result = (ticks2 || []).slice();
    var len = result.length;
    var {
      start,
      end
    } = boundaries;
    if (preserveEnd) {
      var tail = ticks2[len - 1];
      var tailSize = getTickSize(tail, len - 1);
      var tailGap = sign2 * (tail.coordinate + sign2 * tailSize / 2 - end);
      result[len - 1] = tail = _objectSpread$3(_objectSpread$3({}, tail), {}, {
        tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign2 : tail.coordinate
      });
      if (tail.tickCoord != null) {
        var isTailShow = isVisible(sign2, tail.tickCoord, () => tailSize, start, end);
        if (isTailShow) {
          end = tail.tickCoord - sign2 * (tailSize / 2 + minTickGap);
          result[len - 1] = _objectSpread$3(_objectSpread$3({}, tail), {}, {
            isShow: true
          });
        }
      }
    }
    var count = preserveEnd ? len - 1 : len;
    var _loop2 = function _loop22(i2) {
      var entry = result[i2];
      var size;
      var getSize = () => {
        if (size === void 0) {
          size = getTickSize(entry, i2);
        }
        return size;
      };
      if (i2 === 0) {
        var gap = sign2 * (entry.coordinate - sign2 * getSize() / 2 - start);
        result[i2] = entry = _objectSpread$3(_objectSpread$3({}, entry), {}, {
          tickCoord: gap < 0 ? entry.coordinate - gap * sign2 : entry.coordinate
        });
      } else {
        result[i2] = entry = _objectSpread$3(_objectSpread$3({}, entry), {}, {
          tickCoord: entry.coordinate
        });
      }
      if (entry.tickCoord != null) {
        var isShow = isVisible(sign2, entry.tickCoord, getSize, start, end);
        if (isShow) {
          start = entry.tickCoord + sign2 * (getSize() / 2 + minTickGap);
          result[i2] = _objectSpread$3(_objectSpread$3({}, entry), {}, {
            isShow: true
          });
        }
      }
    };
    for (var i = 0; i < count; i++) {
      _loop2(i);
    }
    return result;
  }
  function getTicks(props, fontSize, letterSpacing) {
    var {
      tick,
      ticks: ticks2,
      viewBox,
      minTickGap,
      orientation,
      interval,
      tickFormatter,
      unit: unit2,
      angle
    } = props;
    if (!ticks2 || !ticks2.length || !tick) {
      return [];
    }
    if (isNumber(interval) || Global.isSsr) {
      var _getNumberIntervalTic;
      return (_getNumberIntervalTic = getNumberIntervalTicks(ticks2, isNumber(interval) ? interval : 0)) !== null && _getNumberIntervalTic !== void 0 ? _getNumberIntervalTic : [];
    }
    var candidates = [];
    var sizeKey = orientation === "top" || orientation === "bottom" ? "width" : "height";
    var unitSize = unit2 && sizeKey === "width" ? getStringSize(unit2, {
      fontSize,
      letterSpacing
    }) : {
      width: 0,
      height: 0
    };
    var getTickSize = (content, index) => {
      var value = typeof tickFormatter === "function" ? tickFormatter(content.value, index) : content.value;
      return sizeKey === "width" ? getAngledTickWidth(getStringSize(value, {
        fontSize,
        letterSpacing
      }), unitSize, angle) : getStringSize(value, {
        fontSize,
        letterSpacing
      })[sizeKey];
    };
    var sign2 = ticks2.length >= 2 ? mathSign(ticks2[1].coordinate - ticks2[0].coordinate) : 1;
    var boundaries = getTickBoundaries(viewBox, sign2, sizeKey);
    if (interval === "equidistantPreserveStart") {
      return getEquidistantTicks(sign2, boundaries, getTickSize, ticks2, minTickGap);
    }
    if (interval === "preserveStart" || interval === "preserveStartEnd") {
      candidates = getTicksStart(sign2, boundaries, getTickSize, ticks2, minTickGap, interval === "preserveStartEnd");
    } else {
      candidates = getTicksEnd(sign2, boundaries, getTickSize, ticks2, minTickGap);
    }
    return candidates.filter((entry) => entry.isShow);
  }
  var getCalculatedYAxisWidth = (_ref2) => {
    var {
      ticks: ticks2,
      label,
      labelGapWithTick = 5,
      // Default gap between label and tick
      tickSize = 0,
      tickMargin = 0
    } = _ref2;
    var maxTickWidth = 0;
    if (ticks2) {
      Array.from(ticks2).forEach((tickNode) => {
        if (tickNode) {
          var bbox = tickNode.getBoundingClientRect();
          if (bbox.width > maxTickWidth) {
            maxTickWidth = bbox.width;
          }
        }
      });
      var labelWidth = label ? label.getBoundingClientRect().width : 0;
      var tickWidth = tickSize + tickMargin;
      var updatedYAxisWidth = maxTickWidth + tickWidth + labelWidth + (label ? labelGapWithTick : 0);
      return Math.round(updatedYAxisWidth);
    }
    return 0;
  };
  var _excluded$6 = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType"];
  function _objectWithoutProperties$6(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$6(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$6(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  function _extends$6() {
    return _extends$6 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$6.apply(null, arguments);
  }
  function ownKeys$2(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$2(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$2(Object(t), true).forEach(function(r3) {
        _defineProperty$2(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$2(e, r2, t) {
    return (r2 = _toPropertyKey$2(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$2(t) {
    var i = _toPrimitive$2(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$2(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var defaultCartesianAxisProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    // The orientation of axis
    orientation: "bottom",
    // The ticks
    ticks: [],
    stroke: "#666",
    tickLine: true,
    axisLine: true,
    tick: true,
    mirror: false,
    minTickGap: 5,
    // The width or height of tick
    tickSize: 6,
    tickMargin: 2,
    interval: "preserveEnd",
    zIndex: DefaultZIndexes.axis
  };
  function AxisLine(axisLineProps) {
    var {
      x: x2,
      y: y2,
      width,
      height,
      orientation,
      mirror,
      axisLine,
      otherSvgProps
    } = axisLineProps;
    if (!axisLine) {
      return null;
    }
    var props = _objectSpread$2(_objectSpread$2(_objectSpread$2({}, otherSvgProps), svgPropertiesNoEvents(axisLine)), {}, {
      fill: "none"
    });
    if (orientation === "top" || orientation === "bottom") {
      var needHeight = +(orientation === "top" && !mirror || orientation === "bottom" && mirror);
      props = _objectSpread$2(_objectSpread$2({}, props), {}, {
        x1: x2,
        y1: y2 + needHeight * height,
        x2: x2 + width,
        y2: y2 + needHeight * height
      });
    } else {
      var needWidth = +(orientation === "left" && !mirror || orientation === "right" && mirror);
      props = _objectSpread$2(_objectSpread$2({}, props), {}, {
        x1: x2 + needWidth * width,
        y1: y2,
        x2: x2 + needWidth * width,
        y2: y2 + height
      });
    }
    return /* @__PURE__ */ React__namespace.createElement("line", _extends$6({}, props, {
      className: clsx("recharts-cartesian-axis-line", get$1(axisLine, "className"))
    }));
  }
  function getTickLineCoord(data, x2, y2, width, height, orientation, tickSize, mirror, tickMargin) {
    var x1, x22, y1, y22, tx, ty;
    var sign2 = mirror ? -1 : 1;
    var finalTickSize = data.tickSize || tickSize;
    var tickCoord = isNumber(data.tickCoord) ? data.tickCoord : data.coordinate;
    switch (orientation) {
      case "top":
        x1 = x22 = data.coordinate;
        y22 = y2 + +!mirror * height;
        y1 = y22 - sign2 * finalTickSize;
        ty = y1 - sign2 * tickMargin;
        tx = tickCoord;
        break;
      case "left":
        y1 = y22 = data.coordinate;
        x22 = x2 + +!mirror * width;
        x1 = x22 - sign2 * finalTickSize;
        tx = x1 - sign2 * tickMargin;
        ty = tickCoord;
        break;
      case "right":
        y1 = y22 = data.coordinate;
        x22 = x2 + +mirror * width;
        x1 = x22 + sign2 * finalTickSize;
        tx = x1 + sign2 * tickMargin;
        ty = tickCoord;
        break;
      default:
        x1 = x22 = data.coordinate;
        y22 = y2 + +mirror * height;
        y1 = y22 + sign2 * finalTickSize;
        ty = y1 + sign2 * tickMargin;
        tx = tickCoord;
        break;
    }
    return {
      line: {
        x1,
        y1,
        x2: x22,
        y2: y22
      },
      tick: {
        x: tx,
        y: ty
      }
    };
  }
  function getTickTextAnchor(orientation, mirror) {
    switch (orientation) {
      case "left":
        return mirror ? "start" : "end";
      case "right":
        return mirror ? "end" : "start";
      default:
        return "middle";
    }
  }
  function getTickVerticalAnchor(orientation, mirror) {
    switch (orientation) {
      case "left":
      case "right":
        return "middle";
      case "top":
        return mirror ? "start" : "end";
      default:
        return mirror ? "end" : "start";
    }
  }
  function TickItem(props) {
    var {
      option,
      tickProps,
      value
    } = props;
    var tickItem;
    var combinedClassName = clsx(tickProps.className, "recharts-cartesian-axis-tick-value");
    if (/* @__PURE__ */ React__namespace.isValidElement(option)) {
      tickItem = /* @__PURE__ */ React__namespace.cloneElement(option, _objectSpread$2(_objectSpread$2({}, tickProps), {}, {
        className: combinedClassName
      }));
    } else if (typeof option === "function") {
      tickItem = option(_objectSpread$2(_objectSpread$2({}, tickProps), {}, {
        className: combinedClassName
      }));
    } else {
      var className = "recharts-cartesian-axis-tick-value";
      if (typeof option !== "boolean") {
        className = clsx(className, option === null || option === void 0 ? void 0 : option.className);
      }
      tickItem = /* @__PURE__ */ React__namespace.createElement(Text, _extends$6({}, tickProps, {
        className
      }), value);
    }
    return tickItem;
  }
  var Ticks = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var {
      ticks: ticks2 = [],
      tick,
      tickLine,
      stroke,
      tickFormatter,
      unit: unit2,
      padding,
      tickTextProps,
      orientation,
      mirror,
      x: x2,
      y: y2,
      width,
      height,
      tickSize,
      tickMargin,
      fontSize,
      letterSpacing,
      getTicksConfig,
      events,
      axisType
    } = props;
    var finalTicks = getTicks(_objectSpread$2(_objectSpread$2({}, getTicksConfig), {}, {
      ticks: ticks2
    }), fontSize, letterSpacing);
    var textAnchor = getTickTextAnchor(orientation, mirror);
    var verticalAnchor = getTickVerticalAnchor(orientation, mirror);
    var axisProps = svgPropertiesNoEvents(getTicksConfig);
    var customTickProps = svgPropertiesNoEventsFromUnknown(tick);
    var tickLinePropsObject = {};
    if (typeof tickLine === "object") {
      tickLinePropsObject = tickLine;
    }
    var tickLineProps = _objectSpread$2(_objectSpread$2({}, axisProps), {}, {
      fill: "none"
    }, tickLinePropsObject);
    var tickLineCoords = finalTicks.map((entry) => _objectSpread$2({
      entry
    }, getTickLineCoord(entry, x2, y2, width, height, orientation, tickSize, mirror, tickMargin)));
    var tickLines = tickLineCoords.map((_ref2) => {
      var {
        entry,
        line: lineCoord
      } = _ref2;
      return /* @__PURE__ */ React__namespace.createElement(Layer, {
        className: "recharts-cartesian-axis-tick",
        key: "tick-".concat(entry.value, "-").concat(entry.coordinate, "-").concat(entry.tickCoord)
      }, tickLine && /* @__PURE__ */ React__namespace.createElement("line", _extends$6({}, tickLineProps, lineCoord, {
        className: clsx("recharts-cartesian-axis-tick-line", get$1(tickLine, "className"))
      })));
    });
    var tickLabels = tickLineCoords.map((_ref2, i) => {
      var {
        entry,
        tick: tickCoord
      } = _ref2;
      var tickProps = _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({
        // @ts-expect-error textAnchor from axisProps is typed as `string` but Text wants type `TextAnchor`
        textAnchor,
        verticalAnchor
      }, axisProps), {}, {
        // @ts-expect-error customTickProps is contributing unknown props
        stroke: "none",
        // @ts-expect-error customTickProps is contributing unknown props
        fill: stroke
      }, customTickProps), tickCoord), {}, {
        index: i,
        payload: entry,
        visibleTicksCount: finalTicks.length,
        tickFormatter,
        padding
      }, tickTextProps);
      return /* @__PURE__ */ React__namespace.createElement(Layer, _extends$6({
        className: "recharts-cartesian-axis-tick-label",
        key: "tick-label-".concat(entry.value, "-").concat(entry.coordinate, "-").concat(entry.tickCoord)
      }, adaptEventsOfChild(events, entry, i)), tick && /* @__PURE__ */ React__namespace.createElement(TickItem, {
        option: tick,
        tickProps,
        value: "".concat(typeof tickFormatter === "function" ? tickFormatter(entry.value, i) : entry.value).concat(unit2 || "")
      }));
    });
    return /* @__PURE__ */ React__namespace.createElement("g", {
      className: "recharts-cartesian-axis-ticks recharts-".concat(axisType, "-ticks")
    }, tickLabels.length > 0 && /* @__PURE__ */ React__namespace.createElement(ZIndexLayer, {
      zIndex: DefaultZIndexes.label
    }, /* @__PURE__ */ React__namespace.createElement("g", {
      className: "recharts-cartesian-axis-tick-labels recharts-".concat(axisType, "-tick-labels"),
      ref
    }, tickLabels)), tickLines.length > 0 && /* @__PURE__ */ React__namespace.createElement("g", {
      className: "recharts-cartesian-axis-tick-lines recharts-".concat(axisType, "-tick-lines")
    }, tickLines));
  });
  var CartesianAxisComponent = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var {
      axisLine,
      width,
      height,
      className,
      hide,
      ticks: ticks2,
      axisType
    } = props, rest = _objectWithoutProperties$6(props, _excluded$6);
    var [fontSize, setFontSize] = React.useState("");
    var [letterSpacing, setLetterSpacing] = React.useState("");
    var tickRefs = React.useRef(null);
    React.useImperativeHandle(ref, () => ({
      getCalculatedWidth: () => {
        var _props$labelRef;
        return getCalculatedYAxisWidth({
          ticks: tickRefs.current,
          label: (_props$labelRef = props.labelRef) === null || _props$labelRef === void 0 ? void 0 : _props$labelRef.current,
          labelGapWithTick: 5,
          tickSize: props.tickSize,
          tickMargin: props.tickMargin
        });
      }
    }));
    var layerRef = React.useCallback((el) => {
      if (el) {
        var tickNodes = el.getElementsByClassName("recharts-cartesian-axis-tick-value");
        tickRefs.current = tickNodes;
        var tick = tickNodes[0];
        if (tick) {
          var computedStyle = window.getComputedStyle(tick);
          var calculatedFontSize = computedStyle.fontSize;
          var calculatedLetterSpacing = computedStyle.letterSpacing;
          if (calculatedFontSize !== fontSize || calculatedLetterSpacing !== letterSpacing) {
            setFontSize(calculatedFontSize);
            setLetterSpacing(calculatedLetterSpacing);
          }
        }
      }
    }, [fontSize, letterSpacing]);
    if (hide) {
      return null;
    }
    if (width != null && width <= 0 || height != null && height <= 0) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(ZIndexLayer, {
      zIndex: props.zIndex
    }, /* @__PURE__ */ React__namespace.createElement(Layer, {
      className: clsx("recharts-cartesian-axis", className)
    }, /* @__PURE__ */ React__namespace.createElement(AxisLine, {
      x: props.x,
      y: props.y,
      width,
      height,
      orientation: props.orientation,
      mirror: props.mirror,
      axisLine,
      otherSvgProps: svgPropertiesNoEvents(props)
    }), /* @__PURE__ */ React__namespace.createElement(Ticks, {
      ref: layerRef,
      axisType,
      events: rest,
      fontSize,
      getTicksConfig: props,
      height: props.height,
      letterSpacing,
      mirror: props.mirror,
      orientation: props.orientation,
      padding: props.padding,
      stroke: props.stroke,
      tick: props.tick,
      tickFormatter: props.tickFormatter,
      tickLine: props.tickLine,
      tickMargin: props.tickMargin,
      tickSize: props.tickSize,
      tickTextProps: props.tickTextProps,
      ticks: ticks2,
      unit: props.unit,
      width: props.width,
      x: props.x,
      y: props.y
    }), /* @__PURE__ */ React__namespace.createElement(CartesianLabelContextProvider, {
      x: props.x,
      y: props.y,
      width: props.width,
      height: props.height,
      lowerWidth: props.width,
      upperWidth: props.width
    }, /* @__PURE__ */ React__namespace.createElement(CartesianLabelFromLabelProp, {
      label: props.label,
      labelRef: props.labelRef
    }), props.children)));
  });
  var CartesianAxis = /* @__PURE__ */ React__namespace.forwardRef((outsideProps, ref) => {
    var props = resolveDefaultProps(outsideProps, defaultCartesianAxisProps);
    return /* @__PURE__ */ React__namespace.createElement(CartesianAxisComponent, _extends$6({}, props, {
      ref
    }));
  });
  CartesianAxis.displayName = "CartesianAxis";
  var _excluded$5 = ["domain", "range"], _excluded2$2 = ["domain", "range"];
  function _objectWithoutProperties$5(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$5(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$5(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  function shortArraysAreEqual(arr1, arr2) {
    if (arr1 === arr2) {
      return true;
    }
    if (Array.isArray(arr1) && arr1.length === 2 && Array.isArray(arr2) && arr2.length === 2) {
      return arr1[0] === arr2[0] && arr1[1] === arr2[1];
    }
    return false;
  }
  function axisPropsAreEqual(prevProps, nextProps) {
    if (prevProps === nextProps) {
      return true;
    }
    var {
      domain: prevDomain,
      range: prevRange
    } = prevProps, prevRest = _objectWithoutProperties$5(prevProps, _excluded$5);
    var {
      domain: nextDomain,
      range: nextRange
    } = nextProps, nextRest = _objectWithoutProperties$5(nextProps, _excluded2$2);
    if (!shortArraysAreEqual(prevDomain, nextDomain)) {
      return false;
    }
    if (!shortArraysAreEqual(prevRange, nextRange)) {
      return false;
    }
    return propsAreEqual(prevRest, nextRest);
  }
  var _excluded$4 = ["dangerouslySetInnerHTML", "ticks"], _excluded2$1 = ["id"];
  function _extends$5() {
    return _extends$5 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$5.apply(null, arguments);
  }
  function _objectWithoutProperties$4(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$4(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$4(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  function SetXAxisSettings(settings) {
    var dispatch = useAppDispatch();
    var prevSettingsRef = React.useRef(null);
    React.useLayoutEffect(() => {
      if (prevSettingsRef.current === null) {
        dispatch(addXAxis(settings));
      } else if (prevSettingsRef.current !== settings) {
        dispatch(replaceXAxis({
          prev: prevSettingsRef.current,
          next: settings
        }));
      }
      prevSettingsRef.current = settings;
    }, [settings, dispatch]);
    React.useLayoutEffect(() => {
      return () => {
        if (prevSettingsRef.current) {
          dispatch(removeXAxis(prevSettingsRef.current));
          prevSettingsRef.current = null;
        }
      };
    }, [dispatch]);
    return null;
  }
  var XAxisImpl = (props) => {
    var {
      xAxisId,
      className
    } = props;
    var viewBox = useAppSelector(selectAxisViewBox);
    var isPanorama = useIsPanorama();
    var axisType = "xAxis";
    var scale = useAppSelector((state) => selectAxisScale(state, axisType, xAxisId, isPanorama));
    var cartesianTickItems = useAppSelector((state) => selectTicksOfAxis(state, axisType, xAxisId, isPanorama));
    var axisSize = useAppSelector((state) => selectXAxisSize(state, xAxisId));
    var position = useAppSelector((state) => selectXAxisPosition(state, xAxisId));
    var synchronizedSettings = useAppSelector((state) => selectXAxisSettingsNoDefaults(state, xAxisId));
    if (axisSize == null || position == null || synchronizedSettings == null) {
      return null;
    }
    var {
      dangerouslySetInnerHTML,
      ticks: ticks2
    } = props, allOtherProps = _objectWithoutProperties$4(props, _excluded$4);
    var {
      id
    } = synchronizedSettings, restSynchronizedSettings = _objectWithoutProperties$4(synchronizedSettings, _excluded2$1);
    return /* @__PURE__ */ React__namespace.createElement(CartesianAxis, _extends$5({}, allOtherProps, restSynchronizedSettings, {
      scale,
      x: position.x,
      y: position.y,
      width: axisSize.width,
      height: axisSize.height,
      className: clsx("recharts-".concat(axisType, " ").concat(axisType), className),
      viewBox,
      ticks: cartesianTickItems,
      axisType
    }));
  };
  var xAxisDefaultProps = {
    allowDataOverflow: implicitXAxis.allowDataOverflow,
    allowDecimals: implicitXAxis.allowDecimals,
    allowDuplicatedCategory: implicitXAxis.allowDuplicatedCategory,
    angle: implicitXAxis.angle,
    axisLine: defaultCartesianAxisProps.axisLine,
    height: implicitXAxis.height,
    hide: false,
    includeHidden: implicitXAxis.includeHidden,
    interval: implicitXAxis.interval,
    minTickGap: implicitXAxis.minTickGap,
    mirror: implicitXAxis.mirror,
    orientation: implicitXAxis.orientation,
    padding: implicitXAxis.padding,
    reversed: implicitXAxis.reversed,
    scale: implicitXAxis.scale,
    tick: implicitXAxis.tick,
    tickCount: implicitXAxis.tickCount,
    tickLine: defaultCartesianAxisProps.tickLine,
    tickSize: defaultCartesianAxisProps.tickSize,
    type: implicitXAxis.type,
    xAxisId: 0
  };
  var XAxisSettingsDispatcher = (outsideProps) => {
    var props = resolveDefaultProps(outsideProps, xAxisDefaultProps);
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(SetXAxisSettings, {
      allowDataOverflow: props.allowDataOverflow,
      allowDecimals: props.allowDecimals,
      allowDuplicatedCategory: props.allowDuplicatedCategory,
      angle: props.angle,
      dataKey: props.dataKey,
      domain: props.domain,
      height: props.height,
      hide: props.hide,
      id: props.xAxisId,
      includeHidden: props.includeHidden,
      interval: props.interval,
      minTickGap: props.minTickGap,
      mirror: props.mirror,
      name: props.name,
      orientation: props.orientation,
      padding: props.padding,
      reversed: props.reversed,
      scale: props.scale,
      tick: props.tick,
      tickCount: props.tickCount,
      tickFormatter: props.tickFormatter,
      ticks: props.ticks,
      type: props.type,
      unit: props.unit
    }), /* @__PURE__ */ React__namespace.createElement(XAxisImpl, props));
  };
  var XAxis = /* @__PURE__ */ React__namespace.memo(XAxisSettingsDispatcher, axisPropsAreEqual);
  XAxis.displayName = "XAxis";
  var _excluded$3 = ["dangerouslySetInnerHTML", "ticks"], _excluded2 = ["id"];
  function _extends$4() {
    return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$4.apply(null, arguments);
  }
  function _objectWithoutProperties$3(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$3(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$3(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  function SetYAxisSettings(settings) {
    var dispatch = useAppDispatch();
    var prevSettingsRef = React.useRef(null);
    React.useLayoutEffect(() => {
      if (prevSettingsRef.current === null) {
        dispatch(addYAxis(settings));
      } else if (prevSettingsRef.current !== settings) {
        dispatch(replaceYAxis({
          prev: prevSettingsRef.current,
          next: settings
        }));
      }
      prevSettingsRef.current = settings;
    }, [settings, dispatch]);
    React.useLayoutEffect(() => {
      return () => {
        if (prevSettingsRef.current) {
          dispatch(removeYAxis(prevSettingsRef.current));
          prevSettingsRef.current = null;
        }
      };
    }, [dispatch]);
    return null;
  }
  var YAxisImpl = (props) => {
    var {
      yAxisId,
      className,
      width,
      label
    } = props;
    var cartesianAxisRef = React.useRef(null);
    var labelRef = React.useRef(null);
    var viewBox = useAppSelector(selectAxisViewBox);
    var isPanorama = useIsPanorama();
    var dispatch = useAppDispatch();
    var axisType = "yAxis";
    var scale = useAppSelector((state) => selectAxisScale(state, axisType, yAxisId, isPanorama));
    var axisSize = useAppSelector((state) => selectYAxisSize(state, yAxisId));
    var position = useAppSelector((state) => selectYAxisPosition(state, yAxisId));
    var cartesianTickItems = useAppSelector((state) => selectTicksOfAxis(state, axisType, yAxisId, isPanorama));
    var synchronizedSettings = useAppSelector((state) => selectYAxisSettingsNoDefaults(state, yAxisId));
    React.useLayoutEffect(() => {
      if (width !== "auto" || !axisSize || isLabelContentAFunction(label) || /* @__PURE__ */ React.isValidElement(label) || synchronizedSettings == null) {
        return;
      }
      var axisComponent = cartesianAxisRef.current;
      if (!axisComponent) {
        return;
      }
      var updatedYAxisWidth = axisComponent.getCalculatedWidth();
      if (Math.round(axisSize.width) !== Math.round(updatedYAxisWidth)) {
        dispatch(updateYAxisWidth({
          id: yAxisId,
          width: updatedYAxisWidth
        }));
      }
    }, [
      // The dependency on cartesianAxisRef.current is not needed because useLayoutEffect will run after every render.
      // The ref will be populated by then.
      // To re-run this effect when ticks change, we can depend on the ticks array from the store.
      cartesianTickItems,
      axisSize,
      dispatch,
      label,
      yAxisId,
      width,
      synchronizedSettings
    ]);
    if (axisSize == null || position == null || synchronizedSettings == null) {
      return null;
    }
    var {
      dangerouslySetInnerHTML,
      ticks: ticks2
    } = props, allOtherProps = _objectWithoutProperties$3(props, _excluded$3);
    var {
      id
    } = synchronizedSettings, restSynchronizedSettings = _objectWithoutProperties$3(synchronizedSettings, _excluded2);
    return /* @__PURE__ */ React__namespace.createElement(CartesianAxis, _extends$4({}, allOtherProps, restSynchronizedSettings, {
      ref: cartesianAxisRef,
      labelRef,
      scale,
      x: position.x,
      y: position.y,
      tickTextProps: width === "auto" ? {
        width: void 0
      } : {
        width
      },
      width: axisSize.width,
      height: axisSize.height,
      className: clsx("recharts-".concat(axisType, " ").concat(axisType), className),
      viewBox,
      ticks: cartesianTickItems,
      axisType
    }));
  };
  var yAxisDefaultProps = {
    allowDataOverflow: implicitYAxis.allowDataOverflow,
    allowDecimals: implicitYAxis.allowDecimals,
    allowDuplicatedCategory: implicitYAxis.allowDuplicatedCategory,
    angle: implicitYAxis.angle,
    axisLine: defaultCartesianAxisProps.axisLine,
    hide: false,
    includeHidden: implicitYAxis.includeHidden,
    interval: implicitYAxis.interval,
    minTickGap: implicitYAxis.minTickGap,
    mirror: implicitYAxis.mirror,
    orientation: implicitYAxis.orientation,
    padding: implicitYAxis.padding,
    reversed: implicitYAxis.reversed,
    scale: implicitYAxis.scale,
    tick: implicitYAxis.tick,
    tickCount: implicitYAxis.tickCount,
    tickLine: defaultCartesianAxisProps.tickLine,
    tickSize: defaultCartesianAxisProps.tickSize,
    type: implicitYAxis.type,
    width: implicitYAxis.width,
    yAxisId: 0
  };
  var YAxisSettingsDispatcher = (outsideProps) => {
    var props = resolveDefaultProps(outsideProps, yAxisDefaultProps);
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(SetYAxisSettings, {
      interval: props.interval,
      id: props.yAxisId,
      scale: props.scale,
      type: props.type,
      domain: props.domain,
      allowDataOverflow: props.allowDataOverflow,
      dataKey: props.dataKey,
      allowDuplicatedCategory: props.allowDuplicatedCategory,
      allowDecimals: props.allowDecimals,
      tickCount: props.tickCount,
      padding: props.padding,
      includeHidden: props.includeHidden,
      reversed: props.reversed,
      ticks: props.ticks,
      width: props.width,
      orientation: props.orientation,
      mirror: props.mirror,
      hide: props.hide,
      unit: props.unit,
      name: props.name,
      angle: props.angle,
      minTickGap: props.minTickGap,
      tick: props.tick,
      tickFormatter: props.tickFormatter
    }), /* @__PURE__ */ React__namespace.createElement(YAxisImpl, props));
  };
  var YAxis = /* @__PURE__ */ React__namespace.memo(YAxisSettingsDispatcher, axisPropsAreEqual);
  YAxis.displayName = "YAxis";
  var pickChartPointer = (_state, chartPointer) => chartPointer;
  var selectActivePropsFromChartPointer = createSelector([pickChartPointer, selectChartLayout, selectPolarViewBox, selectTooltipAxisType, selectTooltipAxisRangeWithReverse, selectTooltipAxisTicks, selectOrderedTooltipTicks, selectChartOffsetInternal], combineActiveProps);
  var getChartPointer = (event) => {
    var rect = event.currentTarget.getBoundingClientRect();
    var scaleX = rect.width / event.currentTarget.offsetWidth;
    var scaleY = rect.height / event.currentTarget.offsetHeight;
    return {
      /*
       * Here it's important to use:
       * - event.clientX and event.clientY to get the mouse position relative to the viewport, including scroll.
       * - pageX and pageY are not used because they are relative to the whole document, and ignore scroll.
       * - rect.left and rect.top are used to get the position of the chart relative to the viewport.
       * - offsetX and offsetY are not used because they are relative to the offset parent
       *  which may or may not be the same as the clientX and clientY, depending on the position of the chart in the DOM
       *  and surrounding element styles. CSS position: relative, absolute, fixed, will change the offset parent.
       * - scaleX and scaleY are necessary for when the chart element is scaled using CSS `transform: scale(N)`.
       */
      chartX: Math.round((event.clientX - rect.left) / scaleX),
      chartY: Math.round((event.clientY - rect.top) / scaleY)
    };
  };
  var mouseClickAction = createAction("mouseClick");
  var mouseClickMiddleware = createListenerMiddleware();
  mouseClickMiddleware.startListening({
    actionCreator: mouseClickAction,
    effect: (action, listenerApi) => {
      var mousePointer = action.payload;
      var activeProps = selectActivePropsFromChartPointer(listenerApi.getState(), getChartPointer(mousePointer));
      if ((activeProps === null || activeProps === void 0 ? void 0 : activeProps.activeIndex) != null) {
        listenerApi.dispatch(setMouseClickAxisIndex({
          activeIndex: activeProps.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: activeProps.activeCoordinate
        }));
      }
    }
  });
  var mouseMoveAction = createAction("mouseMove");
  var mouseMoveMiddleware = createListenerMiddleware();
  var rafId = null;
  mouseMoveMiddleware.startListening({
    actionCreator: mouseMoveAction,
    effect: (action, listenerApi) => {
      var mousePointer = action.payload;
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      var chartPointer = getChartPointer(mousePointer);
      rafId = requestAnimationFrame(() => {
        var state = listenerApi.getState();
        var tooltipEventType = selectTooltipEventType$1(state, state.tooltip.settings.shared);
        if (tooltipEventType === "axis") {
          var activeProps = selectActivePropsFromChartPointer(state, chartPointer);
          if ((activeProps === null || activeProps === void 0 ? void 0 : activeProps.activeIndex) != null) {
            listenerApi.dispatch(setMouseOverAxisIndex({
              activeIndex: activeProps.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: activeProps.activeCoordinate
            }));
          } else {
            listenerApi.dispatch(mouseLeaveChart());
          }
        }
        rafId = null;
      });
    }
  });
  var initialState = {
    accessibilityLayer: true,
    barCategoryGap: "10%",
    barGap: 4,
    barSize: void 0,
    className: void 0,
    maxBarSize: void 0,
    stackOffset: "none",
    syncId: void 0,
    syncMethod: "index",
    baseValue: void 0,
    reverseStackOrder: false
  };
  var rootPropsSlice = createSlice({
    name: "rootProps",
    initialState,
    reducers: {
      updateOptions: (state, action) => {
        var _action$payload$barGa;
        state.accessibilityLayer = action.payload.accessibilityLayer;
        state.barCategoryGap = action.payload.barCategoryGap;
        state.barGap = (_action$payload$barGa = action.payload.barGap) !== null && _action$payload$barGa !== void 0 ? _action$payload$barGa : initialState.barGap;
        state.barSize = action.payload.barSize;
        state.maxBarSize = action.payload.maxBarSize;
        state.stackOffset = action.payload.stackOffset;
        state.syncId = action.payload.syncId;
        state.syncMethod = action.payload.syncMethod;
        state.className = action.payload.className;
        state.baseValue = action.payload.baseValue;
        state.reverseStackOrder = action.payload.reverseStackOrder;
      }
    }
  });
  var rootPropsReducer = rootPropsSlice.reducer;
  var {
    updateOptions
  } = rootPropsSlice.actions;
  var polarOptionsSlice = createSlice({
    name: "polarOptions",
    initialState: null,
    reducers: {
      updatePolarOptions: (_state, action) => {
        return action.payload;
      }
    }
  });
  var {
    updatePolarOptions
  } = polarOptionsSlice.actions;
  var polarOptionsReducer = polarOptionsSlice.reducer;
  var keyDownAction = createAction("keyDown");
  var focusAction = createAction("focus");
  var keyboardEventsMiddleware = createListenerMiddleware();
  keyboardEventsMiddleware.startListening({
    actionCreator: keyDownAction,
    effect: (action, listenerApi) => {
      var state = listenerApi.getState();
      var accessibilityLayerIsActive = state.rootProps.accessibilityLayer !== false;
      if (!accessibilityLayerIsActive) {
        return;
      }
      var {
        keyboardInteraction
      } = state.tooltip;
      var key = action.payload;
      if (key !== "ArrowRight" && key !== "ArrowLeft" && key !== "Enter") {
        return;
      }
      var resolvedIndex = combineActiveTooltipIndex(keyboardInteraction, selectTooltipDisplayedData(state), selectTooltipAxisDataKey(state), selectTooltipAxisDomain(state));
      var currentIndex = resolvedIndex == null ? -1 : Number(resolvedIndex);
      if (!Number.isFinite(currentIndex) || currentIndex < 0) {
        return;
      }
      var tooltipTicks = selectTooltipAxisTicks(state);
      if (key === "Enter") {
        var _coordinate = selectCoordinateForDefaultIndex(state, "axis", "hover", String(keyboardInteraction.index));
        listenerApi.dispatch(setKeyboardInteraction({
          active: !keyboardInteraction.active,
          activeIndex: keyboardInteraction.index,
          activeDataKey: keyboardInteraction.dataKey,
          activeCoordinate: _coordinate
        }));
        return;
      }
      var direction = selectChartDirection(state);
      var directionMultiplier = direction === "left-to-right" ? 1 : -1;
      var movement = key === "ArrowRight" ? 1 : -1;
      var nextIndex = currentIndex + movement * directionMultiplier;
      if (tooltipTicks == null || nextIndex >= tooltipTicks.length || nextIndex < 0) {
        return;
      }
      var coordinate = selectCoordinateForDefaultIndex(state, "axis", "hover", String(nextIndex));
      listenerApi.dispatch(setKeyboardInteraction({
        active: true,
        activeIndex: nextIndex.toString(),
        activeDataKey: void 0,
        activeCoordinate: coordinate
      }));
    }
  });
  keyboardEventsMiddleware.startListening({
    actionCreator: focusAction,
    effect: (_action, listenerApi) => {
      var state = listenerApi.getState();
      var accessibilityLayerIsActive = state.rootProps.accessibilityLayer !== false;
      if (!accessibilityLayerIsActive) {
        return;
      }
      var {
        keyboardInteraction
      } = state.tooltip;
      if (keyboardInteraction.active) {
        return;
      }
      if (keyboardInteraction.index == null) {
        var nextIndex = "0";
        var coordinate = selectCoordinateForDefaultIndex(state, "axis", "hover", String(nextIndex));
        listenerApi.dispatch(setKeyboardInteraction({
          activeDataKey: void 0,
          active: true,
          activeIndex: nextIndex,
          activeCoordinate: coordinate
        }));
      }
    }
  });
  var externalEventAction = createAction("externalEvent");
  var externalEventsMiddleware = createListenerMiddleware();
  var rafIdMap = /* @__PURE__ */ new Map();
  externalEventsMiddleware.startListening({
    actionCreator: externalEventAction,
    effect: (action, listenerApi) => {
      var {
        handler,
        reactEvent
      } = action.payload;
      if (handler == null) {
        return;
      }
      reactEvent.persist();
      var eventType = reactEvent.type;
      var existingRafId = rafIdMap.get(eventType);
      if (existingRafId !== void 0) {
        cancelAnimationFrame(existingRafId);
      }
      var rafId2 = requestAnimationFrame(() => {
        try {
          var state = listenerApi.getState();
          var nextState = {
            activeCoordinate: selectActiveTooltipCoordinate(state),
            activeDataKey: selectActiveTooltipDataKey(state),
            activeIndex: selectActiveTooltipIndex(state),
            activeLabel: selectActiveLabel$1(state),
            activeTooltipIndex: selectActiveTooltipIndex(state),
            isTooltipActive: selectIsTooltipActive$1(state)
          };
          handler(nextState, reactEvent);
        } finally {
          rafIdMap.delete(eventType);
        }
      });
      rafIdMap.set(eventType, rafId2);
    }
  });
  var selectAllTooltipPayloadConfiguration = createSelector([selectTooltipState], (tooltipState) => tooltipState.tooltipItemPayloads);
  var selectTooltipCoordinate = createSelector([selectAllTooltipPayloadConfiguration, selectTooltipPayloadSearcher, (_state, tooltipIndex, _dataKey) => tooltipIndex, (_state, _tooltipIndex, dataKey) => dataKey], (allTooltipConfigurations, tooltipPayloadSearcher, tooltipIndex, dataKey) => {
    var mostRelevantTooltipConfiguration = allTooltipConfigurations.find((tooltipConfiguration) => {
      return tooltipConfiguration.settings.dataKey === dataKey;
    });
    if (mostRelevantTooltipConfiguration == null) {
      return void 0;
    }
    var {
      positions
    } = mostRelevantTooltipConfiguration;
    if (positions == null) {
      return void 0;
    }
    var maybePosition = tooltipPayloadSearcher(positions, tooltipIndex);
    return maybePosition;
  });
  var touchEventAction = createAction("touchMove");
  var touchEventMiddleware = createListenerMiddleware();
  touchEventMiddleware.startListening({
    actionCreator: touchEventAction,
    effect: (action, listenerApi) => {
      var touchEvent = action.payload;
      if (touchEvent.touches == null || touchEvent.touches.length === 0) {
        return;
      }
      var state = listenerApi.getState();
      var tooltipEventType = selectTooltipEventType$1(state, state.tooltip.settings.shared);
      if (tooltipEventType === "axis") {
        var activeProps = selectActivePropsFromChartPointer(state, getChartPointer({
          clientX: touchEvent.touches[0].clientX,
          clientY: touchEvent.touches[0].clientY,
          currentTarget: touchEvent.currentTarget
        }));
        if ((activeProps === null || activeProps === void 0 ? void 0 : activeProps.activeIndex) != null) {
          listenerApi.dispatch(setMouseOverAxisIndex({
            activeIndex: activeProps.activeIndex,
            activeDataKey: void 0,
            activeCoordinate: activeProps.activeCoordinate
          }));
        }
      } else if (tooltipEventType === "item") {
        var _target$getAttribute;
        var touch = touchEvent.touches[0];
        if (document.elementFromPoint == null) {
          return;
        }
        var target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (!target || !target.getAttribute) {
          return;
        }
        var itemIndex = target.getAttribute(DATA_ITEM_INDEX_ATTRIBUTE_NAME);
        var dataKey = (_target$getAttribute = target.getAttribute(DATA_ITEM_DATAKEY_ATTRIBUTE_NAME)) !== null && _target$getAttribute !== void 0 ? _target$getAttribute : void 0;
        var coordinate = selectTooltipCoordinate(listenerApi.getState(), itemIndex, dataKey);
        listenerApi.dispatch(setActiveMouseOverItemIndex({
          activeDataKey: dataKey,
          activeIndex: itemIndex,
          activeCoordinate: coordinate
        }));
      }
    }
  });
  var rootReducer = combineReducers({
    brush: brushReducer,
    cartesianAxis: cartesianAxisReducer,
    chartData: chartDataReducer,
    errorBars: errorBarReducer,
    graphicalItems: graphicalItemsReducer,
    layout: chartLayoutReducer,
    legend: legendReducer,
    options: optionsReducer,
    polarAxis: polarAxisReducer,
    polarOptions: polarOptionsReducer,
    referenceElements: referenceElementsReducer,
    rootProps: rootPropsReducer,
    tooltip: tooltipReducer,
    zIndex: zIndexReducer
  });
  var createRechartsStore = function createRechartsStore2(preloadedState) {
    return configureStore({
      reducer: rootReducer,
      // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
      preloadedState,
      // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
      middleware: (getDefaultMiddleware) => {
        var _process$env$NODE_ENV;
        return getDefaultMiddleware({
          serializableCheck: false,
          immutableCheck: !["commonjs", "es6", "production"].includes((_process$env$NODE_ENV = "es6") !== null && _process$env$NODE_ENV !== void 0 ? _process$env$NODE_ENV : "")
        }).concat([mouseClickMiddleware.middleware, mouseMoveMiddleware.middleware, keyboardEventsMiddleware.middleware, externalEventsMiddleware.middleware, touchEventMiddleware.middleware]);
      },
      /*
       * I can't find out how to satisfy typescript here.
       * We return `EnhancerArray<[StoreEnhancer<{}, {}>, StoreEnhancer]>` from this function,
       * but the types say we should return `EnhancerArray<StoreEnhancer<{}, {}>`.
       * Looks like it's badly inferred generics, but it won't allow me to provide the correct type manually either.
       * So let's just ignore the error for now.
       */
      // @ts-expect-error mismatched generics
      enhancers: (getDefaultEnhancers) => {
        var enhancers = getDefaultEnhancers;
        if (typeof getDefaultEnhancers === "function") {
          enhancers = getDefaultEnhancers();
        }
        return enhancers.concat(autoBatchEnhancer({
          type: "raf"
        }));
      },
      devTools: Global.devToolsEnabled
    });
  };
  function RechartsStoreProvider(_ref2) {
    var {
      preloadedState,
      children,
      reduxStoreName
    } = _ref2;
    var isPanorama = useIsPanorama();
    var storeRef = React.useRef(null);
    if (isPanorama) {
      return children;
    }
    if (storeRef.current == null) {
      storeRef.current = createRechartsStore(preloadedState);
    }
    var nonNullContext = RechartsReduxContext;
    return /* @__PURE__ */ React__namespace.createElement(Provider_default, {
      context: nonNullContext,
      store: storeRef.current
    }, children);
  }
  function ReportMainChartPropsImpl(_ref2) {
    var {
      layout,
      margin
    } = _ref2;
    var dispatch = useAppDispatch();
    var isPanorama = useIsPanorama();
    React.useEffect(() => {
      if (!isPanorama) {
        dispatch(setLayout(layout));
        dispatch(setMargin(margin));
      }
    }, [dispatch, isPanorama, layout, margin]);
    return null;
  }
  var ReportMainChartProps = /* @__PURE__ */ React.memo(ReportMainChartPropsImpl, propsAreEqual);
  function ReportChartProps(props) {
    var dispatch = useAppDispatch();
    React.useEffect(() => {
      dispatch(updateOptions(props));
    }, [dispatch, props]);
    return null;
  }
  function ZIndexSvgPortal(_ref2) {
    var {
      zIndex,
      isPanorama
    } = _ref2;
    var prefix2 = isPanorama ? "recharts-zindex-panorama-" : "recharts-zindex-";
    var portalId = useUniqueId("".concat(prefix2).concat(zIndex));
    var dispatch = useAppDispatch();
    React.useLayoutEffect(() => {
      dispatch(registerZIndexPortalId({
        zIndex,
        elementId: portalId,
        isPanorama
      }));
      return () => {
        dispatch(unregisterZIndexPortalId({
          zIndex,
          isPanorama
        }));
      };
    }, [dispatch, zIndex, portalId, isPanorama]);
    return /* @__PURE__ */ React__namespace.createElement("g", {
      tabIndex: -1,
      id: portalId
    });
  }
  function AllZIndexPortals(_ref2) {
    var {
      children,
      isPanorama
    } = _ref2;
    var allRegisteredZIndexes = useAppSelector(selectAllRegisteredZIndexes);
    if (!allRegisteredZIndexes || allRegisteredZIndexes.length === 0) {
      return children;
    }
    var allNegativeZIndexes = allRegisteredZIndexes.filter((zIndex) => zIndex < 0);
    var allPositiveZIndexes = allRegisteredZIndexes.filter((zIndex) => zIndex > 0);
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, allNegativeZIndexes.map((zIndex) => /* @__PURE__ */ React__namespace.createElement(ZIndexSvgPortal, {
      key: zIndex,
      zIndex,
      isPanorama
    })), children, allPositiveZIndexes.map((zIndex) => /* @__PURE__ */ React__namespace.createElement(ZIndexSvgPortal, {
      key: zIndex,
      zIndex,
      isPanorama
    })));
  }
  var _excluded$2 = ["children"];
  function _objectWithoutProperties$2(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$2(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$2(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  function _extends$3() {
    return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$3.apply(null, arguments);
  }
  var FULL_WIDTH_AND_HEIGHT = {
    width: "100%",
    height: "100%",
    /*
     * display: block is necessary here because the default for an SVG is display: inline,
     * which in some browsers (Chrome) adds a little bit of extra space above and below the SVG
     * to make space for the descender of letters like "g" and "y". This throws off the height calculation
     * and causes the container to grow indefinitely on each render with responsive=true.
     * Display: block removes that extra space.
     *
     * Interestingly, Firefox does not have this problem, but it doesn't hurt to add the style anyway.
     */
    display: "block"
  };
  var MainChartSurface = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var width = useChartWidth();
    var height = useChartHeight();
    var hasAccessibilityLayer = useAccessibilityLayer();
    if (!isPositiveNumber(width) || !isPositiveNumber(height)) {
      return null;
    }
    var {
      children,
      otherAttributes,
      title,
      desc
    } = props;
    var tabIndex, role;
    if (otherAttributes != null) {
      if (typeof otherAttributes.tabIndex === "number") {
        tabIndex = otherAttributes.tabIndex;
      } else {
        tabIndex = hasAccessibilityLayer ? 0 : void 0;
      }
      if (typeof otherAttributes.role === "string") {
        role = otherAttributes.role;
      } else {
        role = hasAccessibilityLayer ? "application" : void 0;
      }
    }
    return /* @__PURE__ */ React__namespace.createElement(Surface, _extends$3({}, otherAttributes, {
      title,
      desc,
      role,
      tabIndex,
      width,
      height,
      style: FULL_WIDTH_AND_HEIGHT,
      ref
    }), children);
  });
  var BrushPanoramaSurface = (_ref2) => {
    var {
      children
    } = _ref2;
    var brushDimensions = useAppSelector(selectBrushDimensions);
    if (!brushDimensions) {
      return null;
    }
    var {
      width,
      height,
      y: y2,
      x: x2
    } = brushDimensions;
    return /* @__PURE__ */ React__namespace.createElement(Surface, {
      width,
      height,
      x: x2,
      y: y2
    }, children);
  };
  var RootSurface = /* @__PURE__ */ React.forwardRef((_ref2, ref) => {
    var {
      children
    } = _ref2, rest = _objectWithoutProperties$2(_ref2, _excluded$2);
    var isPanorama = useIsPanorama();
    if (isPanorama) {
      return /* @__PURE__ */ React__namespace.createElement(BrushPanoramaSurface, null, /* @__PURE__ */ React__namespace.createElement(AllZIndexPortals, {
        isPanorama: true
      }, children));
    }
    return /* @__PURE__ */ React__namespace.createElement(MainChartSurface, _extends$3({
      ref
    }, rest), /* @__PURE__ */ React__namespace.createElement(AllZIndexPortals, {
      isPanorama: false
    }, children));
  });
  function useReportScale() {
    var dispatch = useAppDispatch();
    var [ref, setRef] = React.useState(null);
    var scale = useAppSelector(selectContainerScale);
    React.useEffect(() => {
      if (ref == null) {
        return;
      }
      var rect = ref.getBoundingClientRect();
      var newScale = rect.width / ref.offsetWidth;
      if (isWellBehavedNumber(newScale) && newScale !== scale) {
        dispatch(setScale(newScale));
      }
    }, [ref, dispatch, scale]);
    return setRef;
  }
  function ownKeys$1(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$1(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys$1(Object(t), true).forEach(function(r3) {
        _defineProperty$1(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty$1(e, r2, t) {
    return (r2 = _toPropertyKey$1(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey$1(t) {
    var i = _toPrimitive$1(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive$1(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  function _extends$2() {
    return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$2.apply(null, arguments);
  }
  var EventSynchronizer = () => {
    useSynchronisedEventsFromOtherCharts();
    return null;
  };
  function getNumberOrZero(value) {
    if (typeof value === "number") {
      return value;
    }
    if (typeof value === "string") {
      var parsed = parseFloat(value);
      if (!Number.isNaN(parsed)) {
        return parsed;
      }
    }
    return 0;
  }
  var ResponsiveDiv = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var _props$style, _props$style2;
    var observerRef = React.useRef(null);
    var [sizes, setSizes] = React.useState({
      containerWidth: getNumberOrZero((_props$style = props.style) === null || _props$style === void 0 ? void 0 : _props$style.width),
      containerHeight: getNumberOrZero((_props$style2 = props.style) === null || _props$style2 === void 0 ? void 0 : _props$style2.height)
    });
    var setContainerSize = React.useCallback((newWidth, newHeight) => {
      setSizes((prevState) => {
        var roundedWidth = Math.round(newWidth);
        var roundedHeight = Math.round(newHeight);
        if (prevState.containerWidth === roundedWidth && prevState.containerHeight === roundedHeight) {
          return prevState;
        }
        return {
          containerWidth: roundedWidth,
          containerHeight: roundedHeight
        };
      });
    }, []);
    var innerRef = React.useCallback((node) => {
      if (typeof ref === "function") {
        ref(node);
      }
      if (node != null && typeof ResizeObserver !== "undefined") {
        var {
          width: containerWidth,
          height: containerHeight
        } = node.getBoundingClientRect();
        setContainerSize(containerWidth, containerHeight);
        var callback = (entries) => {
          var {
            width,
            height
          } = entries[0].contentRect;
          setContainerSize(width, height);
        };
        var observer = new ResizeObserver(callback);
        observer.observe(node);
        observerRef.current = observer;
      }
    }, [ref, setContainerSize]);
    React.useEffect(() => {
      return () => {
        var observer = observerRef.current;
        if (observer != null) {
          observer.disconnect();
        }
      };
    }, [setContainerSize]);
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(ReportChartSize, {
      width: sizes.containerWidth,
      height: sizes.containerHeight
    }), /* @__PURE__ */ React__namespace.createElement("div", _extends$2({
      ref: innerRef
    }, props)));
  });
  var ReadSizeOnceDiv = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var {
      width,
      height
    } = props;
    var [sizes, setSizes] = React.useState({
      containerWidth: getNumberOrZero(width),
      containerHeight: getNumberOrZero(height)
    });
    var setContainerSize = React.useCallback((newWidth, newHeight) => {
      setSizes((prevState) => {
        var roundedWidth = Math.round(newWidth);
        var roundedHeight = Math.round(newHeight);
        if (prevState.containerWidth === roundedWidth && prevState.containerHeight === roundedHeight) {
          return prevState;
        }
        return {
          containerWidth: roundedWidth,
          containerHeight: roundedHeight
        };
      });
    }, []);
    var innerRef = React.useCallback((node) => {
      if (typeof ref === "function") {
        ref(node);
      }
      if (node != null) {
        var {
          width: containerWidth,
          height: containerHeight
        } = node.getBoundingClientRect();
        setContainerSize(containerWidth, containerHeight);
      }
    }, [ref, setContainerSize]);
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(ReportChartSize, {
      width: sizes.containerWidth,
      height: sizes.containerHeight
    }), /* @__PURE__ */ React__namespace.createElement("div", _extends$2({
      ref: innerRef
    }, props)));
  });
  var StaticDiv = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var {
      width,
      height
    } = props;
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(ReportChartSize, {
      width,
      height
    }), /* @__PURE__ */ React__namespace.createElement("div", _extends$2({
      ref
    }, props)));
  });
  var NonResponsiveDiv = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var {
      width,
      height
    } = props;
    if (isPercent(width) || isPercent(height)) {
      return /* @__PURE__ */ React__namespace.createElement(ReadSizeOnceDiv, _extends$2({}, props, {
        ref
      }));
    }
    return /* @__PURE__ */ React__namespace.createElement(StaticDiv, _extends$2({}, props, {
      ref
    }));
  });
  function getWrapperDivComponent(responsive) {
    return responsive === true ? ResponsiveDiv : NonResponsiveDiv;
  }
  var RechartsWrapper = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var {
      children,
      className,
      height: heightFromProps,
      onClick,
      onContextMenu,
      onDoubleClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      style,
      width: widthFromProps,
      responsive,
      dispatchTouchEvents = true
    } = props;
    var containerRef = React.useRef(null);
    var dispatch = useAppDispatch();
    var [tooltipPortal, setTooltipPortal] = React.useState(null);
    var [legendPortal, setLegendPortal] = React.useState(null);
    var setScaleRef = useReportScale();
    var responsiveContainerCalculations = useResponsiveContainerContext();
    var width = (responsiveContainerCalculations === null || responsiveContainerCalculations === void 0 ? void 0 : responsiveContainerCalculations.width) > 0 ? responsiveContainerCalculations.width : widthFromProps;
    var height = (responsiveContainerCalculations === null || responsiveContainerCalculations === void 0 ? void 0 : responsiveContainerCalculations.height) > 0 ? responsiveContainerCalculations.height : heightFromProps;
    var innerRef = React.useCallback((node) => {
      setScaleRef(node);
      if (typeof ref === "function") {
        ref(node);
      }
      setTooltipPortal(node);
      setLegendPortal(node);
      if (node != null) {
        containerRef.current = node;
      }
    }, [setScaleRef, ref, setTooltipPortal, setLegendPortal]);
    var myOnClick = React.useCallback((e) => {
      dispatch(mouseClickAction(e));
      dispatch(externalEventAction({
        handler: onClick,
        reactEvent: e
      }));
    }, [dispatch, onClick]);
    var myOnMouseEnter = React.useCallback((e) => {
      dispatch(mouseMoveAction(e));
      dispatch(externalEventAction({
        handler: onMouseEnter,
        reactEvent: e
      }));
    }, [dispatch, onMouseEnter]);
    var myOnMouseLeave = React.useCallback((e) => {
      dispatch(mouseLeaveChart());
      dispatch(externalEventAction({
        handler: onMouseLeave,
        reactEvent: e
      }));
    }, [dispatch, onMouseLeave]);
    var myOnMouseMove = React.useCallback((e) => {
      dispatch(mouseMoveAction(e));
      dispatch(externalEventAction({
        handler: onMouseMove,
        reactEvent: e
      }));
    }, [dispatch, onMouseMove]);
    var onFocus = React.useCallback(() => {
      dispatch(focusAction());
    }, [dispatch]);
    var onKeyDown = React.useCallback((e) => {
      dispatch(keyDownAction(e.key));
    }, [dispatch]);
    var myOnContextMenu = React.useCallback((e) => {
      dispatch(externalEventAction({
        handler: onContextMenu,
        reactEvent: e
      }));
    }, [dispatch, onContextMenu]);
    var myOnDoubleClick = React.useCallback((e) => {
      dispatch(externalEventAction({
        handler: onDoubleClick,
        reactEvent: e
      }));
    }, [dispatch, onDoubleClick]);
    var myOnMouseDown = React.useCallback((e) => {
      dispatch(externalEventAction({
        handler: onMouseDown,
        reactEvent: e
      }));
    }, [dispatch, onMouseDown]);
    var myOnMouseUp = React.useCallback((e) => {
      dispatch(externalEventAction({
        handler: onMouseUp,
        reactEvent: e
      }));
    }, [dispatch, onMouseUp]);
    var myOnTouchStart = React.useCallback((e) => {
      dispatch(externalEventAction({
        handler: onTouchStart,
        reactEvent: e
      }));
    }, [dispatch, onTouchStart]);
    var myOnTouchMove = React.useCallback((e) => {
      if (dispatchTouchEvents) {
        dispatch(touchEventAction(e));
      }
      dispatch(externalEventAction({
        handler: onTouchMove,
        reactEvent: e
      }));
    }, [dispatch, dispatchTouchEvents, onTouchMove]);
    var myOnTouchEnd = React.useCallback((e) => {
      dispatch(externalEventAction({
        handler: onTouchEnd,
        reactEvent: e
      }));
    }, [dispatch, onTouchEnd]);
    var WrapperDiv = getWrapperDivComponent(responsive);
    return /* @__PURE__ */ React__namespace.createElement(TooltipPortalContext.Provider, {
      value: tooltipPortal
    }, /* @__PURE__ */ React__namespace.createElement(LegendPortalContext.Provider, {
      value: legendPortal
    }, /* @__PURE__ */ React__namespace.createElement(WrapperDiv, {
      width: width !== null && width !== void 0 ? width : style === null || style === void 0 ? void 0 : style.width,
      height: height !== null && height !== void 0 ? height : style === null || style === void 0 ? void 0 : style.height,
      className: clsx("recharts-wrapper", className),
      style: _objectSpread$1({
        position: "relative",
        cursor: "default",
        width,
        height
      }, style),
      onClick: myOnClick,
      onContextMenu: myOnContextMenu,
      onDoubleClick: myOnDoubleClick,
      onFocus,
      onKeyDown,
      onMouseDown: myOnMouseDown,
      onMouseEnter: myOnMouseEnter,
      onMouseLeave: myOnMouseLeave,
      onMouseMove: myOnMouseMove,
      onMouseUp: myOnMouseUp,
      onTouchEnd: myOnTouchEnd,
      onTouchMove: myOnTouchMove,
      onTouchStart: myOnTouchStart,
      ref: innerRef
    }, /* @__PURE__ */ React__namespace.createElement(EventSynchronizer, null), children)));
  });
  var _excluded$1 = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
  function _objectWithoutProperties$1(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose$1(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$1(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  var CategoricalChart = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var {
      width,
      height,
      responsive,
      children,
      className,
      style,
      compact,
      title,
      desc
    } = props, others = _objectWithoutProperties$1(props, _excluded$1);
    var attrs = svgPropertiesNoEvents(others);
    if (compact) {
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(ReportChartSize, {
        width,
        height
      }), /* @__PURE__ */ React__namespace.createElement(RootSurface, {
        otherAttributes: attrs,
        title,
        desc
      }, children));
    }
    return /* @__PURE__ */ React__namespace.createElement(RechartsWrapper, {
      className,
      style,
      width,
      height,
      responsive: responsive !== null && responsive !== void 0 ? responsive : false,
      onClick: props.onClick,
      onMouseLeave: props.onMouseLeave,
      onMouseEnter: props.onMouseEnter,
      onMouseMove: props.onMouseMove,
      onMouseDown: props.onMouseDown,
      onMouseUp: props.onMouseUp,
      onContextMenu: props.onContextMenu,
      onDoubleClick: props.onDoubleClick,
      onTouchStart: props.onTouchStart,
      onTouchMove: props.onTouchMove,
      onTouchEnd: props.onTouchEnd
    }, /* @__PURE__ */ React__namespace.createElement(RootSurface, {
      otherAttributes: attrs,
      title,
      desc,
      ref
    }, /* @__PURE__ */ React__namespace.createElement(ClipPathProvider, null, children)));
  });
  function _extends$1() {
    return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends$1.apply(null, arguments);
  }
  var defaultMargin$1 = {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  };
  var defaultCartesianChartProps = {
    accessibilityLayer: true,
    barCategoryGap: "10%",
    barGap: 4,
    layout: "horizontal",
    margin: defaultMargin$1,
    responsive: false,
    reverseStackOrder: false,
    stackOffset: "none",
    syncMethod: "index"
  };
  var CartesianChart = /* @__PURE__ */ React.forwardRef(function CartesianChart2(props, ref) {
    var _categoricalChartProp;
    var rootChartProps = resolveDefaultProps(props.categoricalChartProps, defaultCartesianChartProps);
    var {
      chartName,
      defaultTooltipEventType,
      validateTooltipEventTypes,
      tooltipPayloadSearcher,
      categoricalChartProps
    } = props;
    var options = {
      chartName,
      defaultTooltipEventType,
      validateTooltipEventTypes,
      tooltipPayloadSearcher,
      eventEmitter: void 0
    };
    return /* @__PURE__ */ React__namespace.createElement(RechartsStoreProvider, {
      preloadedState: {
        options
      },
      reduxStoreName: (_categoricalChartProp = categoricalChartProps.id) !== null && _categoricalChartProp !== void 0 ? _categoricalChartProp : chartName
    }, /* @__PURE__ */ React__namespace.createElement(ChartDataContextProvider, {
      chartData: categoricalChartProps.data
    }), /* @__PURE__ */ React__namespace.createElement(ReportMainChartProps, {
      layout: rootChartProps.layout,
      margin: rootChartProps.margin
    }), /* @__PURE__ */ React__namespace.createElement(ReportChartProps, {
      baseValue: rootChartProps.baseValue,
      accessibilityLayer: rootChartProps.accessibilityLayer,
      barCategoryGap: rootChartProps.barCategoryGap,
      maxBarSize: rootChartProps.maxBarSize,
      stackOffset: rootChartProps.stackOffset,
      barGap: rootChartProps.barGap,
      barSize: rootChartProps.barSize,
      syncId: rootChartProps.syncId,
      syncMethod: rootChartProps.syncMethod,
      className: rootChartProps.className,
      reverseStackOrder: rootChartProps.reverseStackOrder
    }), /* @__PURE__ */ React__namespace.createElement(CategoricalChart, _extends$1({}, rootChartProps, {
      ref
    })));
  });
  var allowedTooltipTypes$1 = ["axis", "item"];
  var BarChart = /* @__PURE__ */ React.forwardRef((props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(CartesianChart, {
      chartName: "BarChart",
      defaultTooltipEventType: "axis",
      validateTooltipEventTypes: allowedTooltipTypes$1,
      tooltipPayloadSearcher: arrayTooltipSearcher,
      categoricalChartProps: props,
      ref
    });
  });
  function ReportPolarOptions(props) {
    var dispatch = useAppDispatch();
    React.useEffect(() => {
      dispatch(updatePolarOptions(props));
    }, [dispatch, props]);
    return null;
  }
  var _excluded = ["layout"];
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r2, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  var defaultMargin = {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  };
  var defaultPolarChartProps = {
    accessibilityLayer: true,
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: defaultMargin,
    reverseStackOrder: false,
    syncMethod: "index",
    layout: "radial",
    responsive: false,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  };
  var PolarChart = /* @__PURE__ */ React.forwardRef(function PolarChart2(props, ref) {
    var _polarChartProps$id;
    var polarChartProps = resolveDefaultProps(props.categoricalChartProps, defaultPolarChartProps);
    var {
      layout
    } = polarChartProps, otherCategoricalProps = _objectWithoutProperties(polarChartProps, _excluded);
    var {
      chartName,
      defaultTooltipEventType,
      validateTooltipEventTypes,
      tooltipPayloadSearcher
    } = props;
    var options = {
      chartName,
      defaultTooltipEventType,
      validateTooltipEventTypes,
      tooltipPayloadSearcher,
      eventEmitter: void 0
    };
    return /* @__PURE__ */ React__namespace.createElement(RechartsStoreProvider, {
      preloadedState: {
        options
      },
      reduxStoreName: (_polarChartProps$id = polarChartProps.id) !== null && _polarChartProps$id !== void 0 ? _polarChartProps$id : chartName
    }, /* @__PURE__ */ React__namespace.createElement(ChartDataContextProvider, {
      chartData: polarChartProps.data
    }), /* @__PURE__ */ React__namespace.createElement(ReportMainChartProps, {
      layout,
      margin: polarChartProps.margin
    }), /* @__PURE__ */ React__namespace.createElement(ReportChartProps, {
      baseValue: void 0,
      accessibilityLayer: polarChartProps.accessibilityLayer,
      barCategoryGap: polarChartProps.barCategoryGap,
      maxBarSize: polarChartProps.maxBarSize,
      stackOffset: polarChartProps.stackOffset,
      barGap: polarChartProps.barGap,
      barSize: polarChartProps.barSize,
      syncId: polarChartProps.syncId,
      syncMethod: polarChartProps.syncMethod,
      className: polarChartProps.className,
      reverseStackOrder: polarChartProps.reverseStackOrder
    }), /* @__PURE__ */ React__namespace.createElement(ReportPolarOptions, {
      cx: polarChartProps.cx,
      cy: polarChartProps.cy,
      startAngle: polarChartProps.startAngle,
      endAngle: polarChartProps.endAngle,
      innerRadius: polarChartProps.innerRadius,
      outerRadius: polarChartProps.outerRadius
    }), /* @__PURE__ */ React__namespace.createElement(CategoricalChart, _extends({}, otherCategoricalProps, {
      ref
    })));
  });
  function ownKeys(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e, r3).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys(Object(t), true).forEach(function(r3) {
        _defineProperty(e, r3, t[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r3) {
        Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
      });
    }
    return e;
  }
  function _defineProperty(e, r2, t) {
    return (r2 = _toPropertyKey(r2)) in e ? Object.defineProperty(e, r2, { value: t, enumerable: true, configurable: true, writable: true }) : e[r2] = t, e;
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive(t, r2) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }
  var allowedTooltipTypes = ["item"];
  var defaultPieChartProps = _objectSpread(_objectSpread({}, defaultPolarChartProps), {}, {
    layout: "centric",
    startAngle: 0,
    endAngle: 360
  });
  var PieChart = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var propsWithDefaults = resolveDefaultProps(props, defaultPieChartProps);
    return /* @__PURE__ */ React__namespace.createElement(PolarChart, {
      chartName: "PieChart",
      defaultTooltipEventType: "item",
      validateTooltipEventTypes: allowedTooltipTypes,
      tooltipPayloadSearcher: arrayTooltipSearcher,
      categoricalChartProps: propsWithDefaults,
      ref
    });
  });
  const manifest$1 = {
    id: "interface-roles-chart",
    name: "Interface Roles",
    kinds: [],
    // Empty for dashboard plugins
    position: "dashboard",
    panelTitle: "Interfaces by Role",
    icon: "mdi:chart-bar",
    priority: 10,
    dashboardSize: {
      colSpan: 2,
      rowSpan: 2
    },
    query: {
      type: "inline",
      query: `
      query {
        DcimInterface {
          edges {
            node {
              __typename
              role {
                value
              }
            }
          }
        }
      }
    `
    }
  };
  const ROLE_COLORS$1 = {
    backbone: "#8b5cf6",
    // purple
    upstream: "#3b82f6",
    // blue
    peering: "#22c55e",
    // green
    peer: "#10b981",
    // emerald
    server: "#f97316",
    // orange
    spare: "#9ca3af",
    // gray
    loopback: "#06b6d4",
    // cyan
    management: "#eab308",
    // yellow
    leaf: "#14b8a6",
    // teal
    unassigned: "#64748b",
    // slate
    default: "#64748b"
    // slate
  };
  function getColorForRole(role) {
    return ROLE_COLORS$1[role.toLowerCase()] ?? ROLE_COLORS$1.default;
  }
  function InterfaceRolesPlugin({
    queryData,
    isQueryLoading,
    queryError
  }) {
    var _a;
    if (isQueryLoading) {
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" }) });
    }
    if (queryError) {
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-red-50 border border-red-200 rounded-lg p-3", children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-red-600 text-sm", children: queryError.message }) }) });
    }
    const data = queryData;
    const interfaces = ((_a = data == null ? void 0 : data.DcimInterface) == null ? void 0 : _a.edges) ?? [];
    const roleCounts = interfaces.reduce(
      (acc, { node }) => {
        var _a2;
        const role = ((_a2 = node.role) == null ? void 0 : _a2.value) ?? "Unassigned";
        acc[role] = (acc[role] ?? 0) + 1;
        return acc;
      },
      {}
    );
    const chartData = Object.entries(roleCounts).map(([name, value]) => ({
      name,
      value,
      fill: getColorForRole(name)
    })).sort((a2, b) => b.value - a2.value);
    const totalInterfaces = interfaces.length;
    if (chartData.length === 0) {
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center h-full text-gray-500", children: "No interface data available" });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "h-full flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm text-gray-500", children: [
          totalInterfaces,
          " total interface",
          totalInterfaces !== 1 ? "s" : ""
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm text-gray-500", children: [
          chartData.length,
          " role",
          chartData.length !== 1 ? "s" : ""
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 flex gap-4 min-h-0", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntime.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntime.jsxs(BarChart, { data: chartData, layout: "vertical", margin: { left: 0, right: 20 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(XAxis, { type: "number", hide: true }),
          /* @__PURE__ */ jsxRuntime.jsx(
            YAxis,
            {
              type: "category",
              dataKey: "name",
              width: 80,
              tick: { fontSize: 11 },
              tickLine: false,
              axisLine: false
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Tooltip,
            {
              formatter: (value) => [value, "Interfaces"],
              contentStyle: { fontSize: 12 }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(Bar, { dataKey: "value", radius: [0, 4, 4, 0], children: chartData.map((entry) => /* @__PURE__ */ jsxRuntime.jsx(Cell, { fill: entry.fill }, entry.name)) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-40", children: /* @__PURE__ */ jsxRuntime.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntime.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Pie,
            {
              data: chartData,
              dataKey: "value",
              nameKey: "name",
              cx: "50%",
              cy: "50%",
              innerRadius: 25,
              outerRadius: 50,
              paddingAngle: 2,
              children: chartData.map((entry) => /* @__PURE__ */ jsxRuntime.jsx(Cell, { fill: entry.fill }, entry.name))
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Tooltip,
            {
              formatter: (value, name) => [value, name],
              contentStyle: { fontSize: 12 }
            }
          )
        ] }) }) })
      ] })
    ] });
  }
  const manifest = {
    id: "example-device-info",
    name: "Device Visualization",
    kinds: ["DcimDevice"],
    position: "tab",
    tabLabel: "Visualization",
    icon: "mdi:server",
    priority: 10,
    query: {
      type: "inline",
      query: `
      query GetDeviceInfo($ids: [ID!]) {
        DcimDevice(ids: $ids) {
          edges {
            node {
              id
              display_label
              name { value }
              description { value }
              status { value }
              interfaces {
                count
                edges {
                  node {
                    id
                    display_label
                    name {
                      value
                    }
                    role {
                      value
                    }
                    status {
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
    }
  };
  const ROLE_COLORS = {
    backbone: {
      bg: "bg-purple-100 hover:bg-purple-200",
      border: "border-purple-400",
      text: "text-purple-800",
      label: "Backbone"
    },
    upstream: {
      bg: "bg-blue-100 hover:bg-blue-200",
      border: "border-blue-400",
      text: "text-blue-800",
      label: "Upstream"
    },
    peering: {
      bg: "bg-green-100 hover:bg-green-200",
      border: "border-green-400",
      text: "text-green-800",
      label: "Peering"
    },
    peer: {
      bg: "bg-green-100 hover:bg-green-200",
      border: "border-green-400",
      text: "text-green-800",
      label: "Peer"
    },
    server: {
      bg: "bg-orange-100 hover:bg-orange-200",
      border: "border-orange-400",
      text: "text-orange-800",
      label: "Server"
    },
    spare: {
      bg: "bg-gray-100 hover:bg-gray-200",
      border: "border-gray-400",
      text: "text-gray-600",
      label: "Spare"
    },
    loopback: {
      bg: "bg-cyan-100 hover:bg-cyan-200",
      border: "border-cyan-400",
      text: "text-cyan-800",
      label: "Loopback"
    },
    management: {
      bg: "bg-yellow-100 hover:bg-yellow-200",
      border: "border-yellow-400",
      text: "text-yellow-800",
      label: "Management"
    },
    leaf: {
      bg: "bg-emerald-100 hover:bg-emerald-200",
      border: "border-emerald-400",
      text: "text-emerald-800",
      label: "Leaf"
    },
    default: {
      bg: "bg-slate-100 hover:bg-slate-200",
      border: "border-slate-400",
      text: "text-slate-700",
      label: "Unknown"
    }
  };
  function getRoleColors(role) {
    if (!role) return ROLE_COLORS.default;
    const normalizedRole = role.toLowerCase();
    return ROLE_COLORS[normalizedRole] ?? ROLE_COLORS.default;
  }
  function InterfaceSlot({
    iface,
    onClick
  }) {
    var _a, _b, _c;
    const role = (_a = iface.role) == null ? void 0 : _a.value;
    const colors = getRoleColors(role);
    const status = (_c = (_b = iface.status) == null ? void 0 : _b.value) == null ? void 0 : _c.toLowerCase();
    const isActive = status === "active" || status === "enabled";
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        onClick,
        className: `
        relative group w-16 h-20 rounded-lg border-2 transition-all duration-200
        ${colors.bg} ${colors.border}
        ${!isActive ? "opacity-50" : ""}
        cursor-pointer shadow-sm hover:shadow-md hover:scale-105
        flex flex-col items-center justify-center p-1
      `,
        title: `${iface.name.value}${role ? ` (${role})` : ""}${status ? ` - ${status}` : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: `w-8 h-3 rounded-sm mb-1 ${isActive ? "bg-green-500" : "bg-gray-400"}`
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: `text-xs font-medium ${colors.text} truncate w-full text-center`, children: iface.name.value.replace(/^(Ethernet|eth|GigabitEthernet|Gi|xe-|et-)/, "") }),
          role && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: `text-[9px] ${colors.text} opacity-75 truncate w-full text-center`,
              children: role
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              className: "\n          absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1\n          bg-gray-900 text-white text-xs rounded shadow-lg\n          opacity-0 group-hover:opacity-100 transition-opacity\n          pointer-events-none whitespace-nowrap z-10\n        ",
              children: [
                iface.display_label || iface.name.value,
                status && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-gray-400 ml-1", children: [
                  "(",
                  status,
                  ")"
                ] })
              ]
            }
          )
        ]
      }
    );
  }
  function DeviceVisualization({
    device,
    onInterfaceClick
  }) {
    var _a;
    const interfaces = device.interfaces.edges.map((e) => e.node);
    const roleGroups = interfaces.reduce(
      (acc, iface) => {
        var _a2, _b;
        const role = ((_b = (_a2 = iface.role) == null ? void 0 : _a2.value) == null ? void 0 : _b.toLowerCase()) ?? "default";
        if (!acc[role]) acc[role] = [];
        acc[role].push(iface);
        return acc;
      },
      {}
    );
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-lg p-4 border border-gray-200", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-4 pb-3 border-b border-gray-700", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-3 h-3 rounded-full bg-green-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-black font-bold text-lg", children: device.name.value })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-2", children: ((_a = device.status) == null ? void 0 : _a.value) && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: `px-2 py-0.5 rounded text-xs font-medium ${device.status.value.toLowerCase() === "active" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"}`,
              children: device.status.value
            }
          ) })
        ] }),
        interfaces.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: interfaces.map((iface) => /* @__PURE__ */ jsxRuntime.jsx(
          InterfaceSlot,
          {
            iface,
            onClick: () => onInterfaceClick(iface)
          },
          iface.id
        )) }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-gray-500 text-center py-8", children: "No interfaces configured" })
      ] }) }),
      Object.keys(roleGroups).length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-lg border border-gray-200 p-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "text-sm font-semibold text-gray-700 mb-3", children: "Interface Roles" }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-3", children: Object.entries(roleGroups).map(([role, ifaces]) => {
          const colors = getRoleColors(role);
          return /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              className: `flex items-center gap-2 px-3 py-1.5 rounded-full border ${colors.bg} ${colors.border}`,
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: `w-3 h-3 rounded-full ${colors.border} border-2` }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: `text-sm font-medium ${colors.text}`, children: colors.label }),
                /* @__PURE__ */ jsxRuntime.jsxs("span", { className: `text-xs ${colors.text} opacity-70`, children: [
                  "(",
                  ifaces.length,
                  ")"
                ] })
              ]
            },
            role
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-3 gap-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-blue-50 rounded-lg p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-3xl font-bold text-blue-600", children: device.interfaces.count }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-blue-700", children: "Total Interfaces" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-green-50 rounded-lg p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-3xl font-bold text-green-600", children: interfaces.filter((i) => {
            var _a2, _b;
            const s2 = (_b = (_a2 = i.status) == null ? void 0 : _a2.value) == null ? void 0 : _b.toLowerCase();
            return s2 === "active" || s2 === "enabled";
          }).length }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-green-700", children: "Active" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-gray-50 rounded-lg p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-3xl font-bold text-gray-600", children: interfaces.filter((i) => {
            var _a2, _b;
            const s2 = (_b = (_a2 = i.status) == null ? void 0 : _a2.value) == null ? void 0 : _b.toLowerCase();
            return s2 !== "active" && s2 !== "enabled";
          }).length }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-700", children: "Inactive" })
        ] })
      ] })
    ] });
  }
  function DeviceInfoPlugin({
    queryData,
    isQueryLoading,
    queryError
  }) {
    var _a, _b, _c;
    const navigate = reactRouter.useNavigate();
    if (isQueryLoading) {
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center p-12", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-500 text-sm", children: "Loading device data..." })
      ] }) });
    }
    if (queryError) {
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "text-red-800 font-medium mb-1", children: "Error loading device" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-red-600 text-sm", children: queryError.message })
      ] }) });
    }
    const deviceResponse = queryData;
    const device = (_c = (_b = (_a = deviceResponse == null ? void 0 : deviceResponse.DcimDevice) == null ? void 0 : _a.edges) == null ? void 0 : _b[0]) == null ? void 0 : _c.node;
    if (!device) {
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-yellow-700", children: "No device data available" }) }) });
    }
    const handleInterfaceClick = (iface) => {
      navigate(`/objects/DcimInterface/${iface.id}`);
    };
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntime.jsx(DeviceVisualization, { device, onInterfaceClick: handleInterfaceClick }) });
  }
  const plugins = [
    { manifest, component: DeviceInfoPlugin },
    { manifest: manifest$2, component: QuickStatsPlugin },
    { manifest: manifest$1, component: InterfaceRolesPlugin }
  ];
  exports.default = DeviceInfoPlugin;
  exports.manifest = manifest;
  exports.plugins = plugins;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
})({}, window.InfrahubRuntime.jsxRuntime, window.InfrahubRuntime.ReactRouter, window.InfrahubRuntime.React, window.InfrahubRuntime.ReactDOM);
//# sourceMappingURL=index.js.map

// Register plugin(s) with Infrahub
(function() {
  if (!window.InfrahubRuntime) {
    console.error('[InfrahubPlugin] InfrahubRuntime not found. Plugin cannot load.');
    return;
  }
  window.InfrahubPlugins = window.InfrahubPlugins || {};
  var exported = typeof InfrahubPluginExport !== 'undefined' ? InfrahubPluginExport : {};
  if (exported.plugins) {
    exported.plugins.forEach(function(p) {
      window.InfrahubPlugins[p.manifest.id] = p;
      console.log('[InfrahubPlugin] Registered:', p.manifest.id);
    });
  } else if (exported.manifest && exported.default) {
    window.InfrahubPlugins[exported.manifest.id] = { manifest: exported.manifest, component: exported.default };
    console.log('[InfrahubPlugin] Registered:', exported.manifest.id);
  }
})();
