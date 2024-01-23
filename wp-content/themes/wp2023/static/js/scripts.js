/*!
 * Glide.js v3.5.2
 * (c) 2013-2021 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Glide = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  var defaults = {
    /**
     * Type of the movement.
     *
     * Available types:
     * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
     * `carousel` - Changes slides without starting over when it reaches the first or last slide.
     *
     * @type {String}
     */
    type: 'slider',

    /**
     * Start at specific slide number defined with zero-based index.
     *
     * @type {Number}
     */
    startAt: 0,

    /**
     * A number of slides visible on the single viewport.
     *
     * @type {Number}
     */
    perView: 1,

    /**
     * Focus currently active slide at a specified position in the track.
     *
     * Available inputs:
     * `center` - Current slide will be always focused at the center of a track.
     * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
     *
     * @type {String|Number}
     */
    focusAt: 0,

    /**
     * A size of the gap added between slides.
     *
     * @type {Number}
     */
    gap: 10,

    /**
     * Change slides after a specified interval. Use `false` for turning off autoplay.
     *
     * @type {Number|Boolean}
     */
    autoplay: false,

    /**
     * Stop autoplay on mouseover event.
     *
     * @type {Boolean}
     */
    hoverpause: true,

    /**
     * Allow for changing slides with left and right keyboard arrows.
     *
     * @type {Boolean}
     */
    keyboard: true,

    /**
     * Stop running `perView` number of slides from the end. Use this
     * option if you don't want to have an empty space after
     * a slider. Works only with `slider` type and a
     * non-centered `focusAt` setting.
     *
     * @type {Boolean}
     */
    bound: false,

    /**
     * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
     *
     * @type {Number|Boolean}
     */
    swipeThreshold: 80,

    /**
     * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
     *
     * @type {Number|Boolean}
     */
    dragThreshold: 120,

    /**
     * A number of slides moved on single swipe.
     *
     * Available types:
     * `` - Moves slider by one slide per swipe
     * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
     *
     * @type {String}
     */
    perSwipe: '',

    /**
     * Moving distance ratio of the slides on a swiping and dragging.
     *
     * @type {Number}
     */
    touchRatio: 0.5,

    /**
     * Angle required to activate slides moving on swiping or dragging.
     *
     * @type {Number}
     */
    touchAngle: 45,

    /**
     * Duration of the animation in milliseconds.
     *
     * @type {Number}
     */
    animationDuration: 400,

    /**
     * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
     *
     * @type {Boolean}
     */
    rewind: true,

    /**
     * Duration of the rewinding animation of the `slider` type in milliseconds.
     *
     * @type {Number}
     */
    rewindDuration: 800,

    /**
     * Easing function for the animation.
     *
     * @type {String}
     */
    animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

    /**
     * Wait for the animation to finish until the next user input can be processed
     *
     * @type {boolean}
     */
    waitForTransition: true,

    /**
     * Throttle costly events at most once per every wait milliseconds.
     *
     * @type {Number}
     */
    throttle: 10,

    /**
     * Moving direction mode.
     *
     * Available inputs:
     * - 'ltr' - left to right movement,
     * - 'rtl' - right to left movement.
     *
     * @type {String}
     */
    direction: 'ltr',

    /**
     * The distance value of the next and previous viewports which
     * have to peek in the current view. Accepts number and
     * pixels as a string. Left and right peeking can be
     * set up separately with a directions object.
     *
     * For example:
     * `100` - Peek 100px on the both sides.
     * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
     *
     * @type {Number|String|Object}
     */
    peek: 0,

    /**
     * Defines how many clones of current viewport will be generated.
     *
     * @type {Number}
     */
    cloningRatio: 1,

    /**
     * Collection of options applied at specified media breakpoints.
     * For example: display two slides per view under 800px.
     * `{
     *   '800px': {
     *     perView: 2
     *   }
     * }`
     */
    breakpoints: {},

    /**
     * Collection of internally used HTML classes.
     *
     * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
     * @type {Object}
     */
    classes: {
      swipeable: 'glide--swipeable',
      dragging: 'glide--dragging',
      direction: {
        ltr: 'glide--ltr',
        rtl: 'glide--rtl'
      },
      type: {
        slider: 'glide--slider',
        carousel: 'glide--carousel'
      },
      slide: {
        clone: 'glide__slide--clone',
        active: 'glide__slide--active'
      },
      arrow: {
        disabled: 'glide__arrow--disabled'
      },
      nav: {
        active: 'glide__bullet--active'
      }
    }
  };

  /**
   * Outputs warning message to the bowser console.
   *
   * @param  {String} msg
   * @return {Void}
   */
  function warn(msg) {
    console.error("[Glide warn]: ".concat(msg));
  }

  /**
   * Converts value entered as number
   * or string to integer value.
   *
   * @param {String} value
   * @returns {Number}
   */
  function toInt(value) {
    return parseInt(value);
  }
  /**
   * Converts value entered as number
   * or string to flat value.
   *
   * @param {String} value
   * @returns {Number}
   */

  function toFloat(value) {
    return parseFloat(value);
  }
  /**
   * Indicates whether the specified value is a string.
   *
   * @param  {*}   value
   * @return {Boolean}
   */

  function isString(value) {
    return typeof value === 'string';
  }
  /**
   * Indicates whether the specified value is an object.
   *
   * @param  {*} value
   * @return {Boolean}
   *
   * @see https://github.com/jashkenas/underscore
   */

  function isObject(value) {
    var type = _typeof(value);

    return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
  }
  /**
   * Indicates whether the specified value is a function.
   *
   * @param  {*} value
   * @return {Boolean}
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  /**
   * Indicates whether the specified value is undefined.
   *
   * @param  {*} value
   * @return {Boolean}
   */

  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Indicates whether the specified value is an array.
   *
   * @param  {*} value
   * @return {Boolean}
   */

  function isArray(value) {
    return value.constructor === Array;
  }

  /**
   * Creates and initializes specified collection of extensions.
   * Each extension receives access to instance of glide and rest of components.
   *
   * @param {Object} glide
   * @param {Object} extensions
   *
   * @returns {Object}
   */

  function mount(glide, extensions, events) {
    var components = {};

    for (var name in extensions) {
      if (isFunction(extensions[name])) {
        components[name] = extensions[name](glide, components, events);
      } else {
        warn('Extension must be a function');
      }
    }

    for (var _name in components) {
      if (isFunction(components[_name].mount)) {
        components[_name].mount();
      }
    }

    return components;
  }

  /**
   * Defines getter and setter property on the specified object.
   *
   * @param  {Object} obj         Object where property has to be defined.
   * @param  {String} prop        Name of the defined property.
   * @param  {Object} definition  Get and set definitions for the property.
   * @return {Void}
   */
  function define(obj, prop, definition) {
    Object.defineProperty(obj, prop, definition);
  }
  /**
   * Sorts aphabetically object keys.
   *
   * @param  {Object} obj
   * @return {Object}
   */

  function sortKeys(obj) {
    return Object.keys(obj).sort().reduce(function (r, k) {
      r[k] = obj[k];
      return r[k], r;
    }, {});
  }
  /**
   * Merges passed settings object with default options.
   *
   * @param  {Object} defaults
   * @param  {Object} settings
   * @return {Object}
   */

  function mergeOptions(defaults, settings) {
    var options = Object.assign({}, defaults, settings); // `Object.assign` do not deeply merge objects, so we
    // have to do it manually for every nested object
    // in options. Although it does not look smart,
    // it's smaller and faster than some fancy
    // merging deep-merge algorithm script.

    if (settings.hasOwnProperty('classes')) {
      options.classes = Object.assign({}, defaults.classes, settings.classes);

      if (settings.classes.hasOwnProperty('direction')) {
        options.classes.direction = Object.assign({}, defaults.classes.direction, settings.classes.direction);
      }

      if (settings.classes.hasOwnProperty('type')) {
        options.classes.type = Object.assign({}, defaults.classes.type, settings.classes.type);
      }

      if (settings.classes.hasOwnProperty('slide')) {
        options.classes.slide = Object.assign({}, defaults.classes.slide, settings.classes.slide);
      }

      if (settings.classes.hasOwnProperty('arrow')) {
        options.classes.arrow = Object.assign({}, defaults.classes.arrow, settings.classes.arrow);
      }

      if (settings.classes.hasOwnProperty('nav')) {
        options.classes.nav = Object.assign({}, defaults.classes.nav, settings.classes.nav);
      }
    }

    if (settings.hasOwnProperty('breakpoints')) {
      options.breakpoints = Object.assign({}, defaults.breakpoints, settings.breakpoints);
    }

    return options;
  }

  var EventsBus = /*#__PURE__*/function () {
    /**
     * Construct a EventBus instance.
     *
     * @param {Object} events
     */
    function EventsBus() {
      var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, EventsBus);

      this.events = events;
      this.hop = events.hasOwnProperty;
    }
    /**
     * Adds listener to the specifed event.
     *
     * @param {String|Array} event
     * @param {Function} handler
     */


    _createClass(EventsBus, [{
      key: "on",
      value: function on(event, handler) {
        if (isArray(event)) {
          for (var i = 0; i < event.length; i++) {
            this.on(event[i], handler);
          }

          return;
        } // Create the event's object if not yet created


        if (!this.hop.call(this.events, event)) {
          this.events[event] = [];
        } // Add the handler to queue


        var index = this.events[event].push(handler) - 1; // Provide handle back for removal of event

        return {
          remove: function remove() {
            delete this.events[event][index];
          }
        };
      }
      /**
       * Runs registered handlers for specified event.
       *
       * @param {String|Array} event
       * @param {Object=} context
       */

    }, {
      key: "emit",
      value: function emit(event, context) {
        if (isArray(event)) {
          for (var i = 0; i < event.length; i++) {
            this.emit(event[i], context);
          }

          return;
        } // If the event doesn't exist, or there's no handlers in queue, just leave


        if (!this.hop.call(this.events, event)) {
          return;
        } // Cycle through events queue, fire!


        this.events[event].forEach(function (item) {
          item(context || {});
        });
      }
    }]);

    return EventsBus;
  }();

  var Glide$1 = /*#__PURE__*/function () {
    /**
     * Construct glide.
     *
     * @param  {String} selector
     * @param  {Object} options
     */
    function Glide(selector) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Glide);

      this._c = {};
      this._t = [];
      this._e = new EventsBus();
      this.disabled = false;
      this.selector = selector;
      this.settings = mergeOptions(defaults, options);
      this.index = this.settings.startAt;
    }
    /**
     * Initializes glide.
     *
     * @param {Object} extensions Collection of extensions to initialize.
     * @return {Glide}
     */


    _createClass(Glide, [{
      key: "mount",
      value: function mount$1() {
        var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this._e.emit('mount.before');

        if (isObject(extensions)) {
          this._c = mount(this, extensions, this._e);
        } else {
          warn('You need to provide a object on `mount()`');
        }

        this._e.emit('mount.after');

        return this;
      }
      /**
       * Collects an instance `translate` transformers.
       *
       * @param  {Array} transformers Collection of transformers.
       * @return {Void}
       */

    }, {
      key: "mutate",
      value: function mutate() {
        var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (isArray(transformers)) {
          this._t = transformers;
        } else {
          warn('You need to provide a array on `mutate()`');
        }

        return this;
      }
      /**
       * Updates glide with specified settings.
       *
       * @param {Object} settings
       * @return {Glide}
       */

    }, {
      key: "update",
      value: function update() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this.settings = mergeOptions(this.settings, settings);

        if (settings.hasOwnProperty('startAt')) {
          this.index = settings.startAt;
        }

        this._e.emit('update');

        return this;
      }
      /**
       * Change slide with specified pattern. A pattern must be in the special format:
       * `>` - Move one forward
       * `<` - Move one backward
       * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
       * `>>` - Rewinds to end (last slide)
       * `<<` - Rewinds to start (first slide)
       * `|>` - Move one viewport forward
       * `|<` - Move one viewport backward
       *
       * @param {String} pattern
       * @return {Glide}
       */

    }, {
      key: "go",
      value: function go(pattern) {
        this._c.Run.make(pattern);

        return this;
      }
      /**
       * Move track by specified distance.
       *
       * @param {String} distance
       * @return {Glide}
       */

    }, {
      key: "move",
      value: function move(distance) {
        this._c.Transition.disable();

        this._c.Move.make(distance);

        return this;
      }
      /**
       * Destroy instance and revert all changes done by this._c.
       *
       * @return {Glide}
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this._e.emit('destroy');

        return this;
      }
      /**
       * Start instance autoplaying.
       *
       * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
       * @return {Glide}
       */

    }, {
      key: "play",
      value: function play() {
        var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (interval) {
          this.settings.autoplay = interval;
        }

        this._e.emit('play');

        return this;
      }
      /**
       * Stop instance autoplaying.
       *
       * @return {Glide}
       */

    }, {
      key: "pause",
      value: function pause() {
        this._e.emit('pause');

        return this;
      }
      /**
       * Sets glide into a idle status.
       *
       * @return {Glide}
       */

    }, {
      key: "disable",
      value: function disable() {
        this.disabled = true;
        return this;
      }
      /**
       * Sets glide into a active status.
       *
       * @return {Glide}
       */

    }, {
      key: "enable",
      value: function enable() {
        this.disabled = false;
        return this;
      }
      /**
       * Adds cuutom event listener with handler.
       *
       * @param  {String|Array} event
       * @param  {Function} handler
       * @return {Glide}
       */

    }, {
      key: "on",
      value: function on(event, handler) {
        this._e.on(event, handler);

        return this;
      }
      /**
       * Checks if glide is a precised type.
       *
       * @param  {String} name
       * @return {Boolean}
       */

    }, {
      key: "isType",
      value: function isType(name) {
        return this.settings.type === name;
      }
      /**
       * Gets value of the core options.
       *
       * @return {Object}
       */

    }, {
      key: "settings",
      get: function get() {
        return this._o;
      }
      /**
       * Sets value of the core options.
       *
       * @param  {Object} o
       * @return {Void}
       */
      ,
      set: function set(o) {
        if (isObject(o)) {
          this._o = o;
        } else {
          warn('Options must be an `object` instance.');
        }
      }
      /**
       * Gets current index of the slider.
       *
       * @return {Object}
       */

    }, {
      key: "index",
      get: function get() {
        return this._i;
      }
      /**
       * Sets current index a slider.
       *
       * @return {Object}
       */
      ,
      set: function set(i) {
        this._i = toInt(i);
      }
      /**
       * Gets type name of the slider.
       *
       * @return {String}
       */

    }, {
      key: "type",
      get: function get() {
        return this.settings.type;
      }
      /**
       * Gets value of the idle status.
       *
       * @return {Boolean}
       */

    }, {
      key: "disabled",
      get: function get() {
        return this._d;
      }
      /**
       * Sets value of the idle status.
       *
       * @return {Boolean}
       */
      ,
      set: function set(status) {
        this._d = !!status;
      }
    }]);

    return Glide;
  }();

  function Run (Glide, Components, Events) {
    var Run = {
      /**
       * Initializes autorunning of the glide.
       *
       * @return {Void}
       */
      mount: function mount() {
        this._o = false;
      },

      /**
       * Makes glides running based on the passed moving schema.
       *
       * @param {String} move
       */
      make: function make(move) {
        var _this = this;

        if (!Glide.disabled) {
          !Glide.settings.waitForTransition || Glide.disable();
          this.move = move;
          Events.emit('run.before', this.move);
          this.calculate();
          Events.emit('run', this.move);
          Components.Transition.after(function () {
            if (_this.isStart()) {
              Events.emit('run.start', _this.move);
            }

            if (_this.isEnd()) {
              Events.emit('run.end', _this.move);
            }

            if (_this.isOffset()) {
              _this._o = false;
              Events.emit('run.offset', _this.move);
            }

            Events.emit('run.after', _this.move);
            Glide.enable();
          });
        }
      },

      /**
       * Calculates current index based on defined move.
       *
       * @return {Number|Undefined}
       */
      calculate: function calculate() {
        var move = this.move,
            length = this.length;
        var steps = move.steps,
            direction = move.direction; // By default assume that size of view is equal to one slide

        var viewSize = 1; // While direction is `=` we want jump to
        // a specified index described in steps.

        if (direction === '=') {
          // Check if bound is true, 
          // as we want to avoid whitespaces.
          if (Glide.settings.bound && toInt(steps) > length) {
            Glide.index = length;
            return;
          }

          Glide.index = steps;
          return;
        } // When pattern is equal to `>>` we want
        // fast forward to the last slide.


        if (direction === '>' && steps === '>') {
          Glide.index = length;
          return;
        } // When pattern is equal to `<<` we want
        // fast forward to the first slide.


        if (direction === '<' && steps === '<') {
          Glide.index = 0;
          return;
        } // pagination movement


        if (direction === '|') {
          viewSize = Glide.settings.perView || 1;
        } // we are moving forward


        if (direction === '>' || direction === '|' && steps === '>') {
          var index = calculateForwardIndex(viewSize);

          if (index > length) {
            this._o = true;
          }

          Glide.index = normalizeForwardIndex(index, viewSize);
          return;
        } // we are moving backward


        if (direction === '<' || direction === '|' && steps === '<') {
          var _index = calculateBackwardIndex(viewSize);

          if (_index < 0) {
            this._o = true;
          }

          Glide.index = normalizeBackwardIndex(_index, viewSize);
          return;
        }

        warn("Invalid direction pattern [".concat(direction).concat(steps, "] has been used"));
      },

      /**
       * Checks if we are on the first slide.
       *
       * @return {Boolean}
       */
      isStart: function isStart() {
        return Glide.index <= 0;
      },

      /**
       * Checks if we are on the last slide.
       *
       * @return {Boolean}
       */
      isEnd: function isEnd() {
        return Glide.index >= this.length;
      },

      /**
       * Checks if we are making a offset run.
       *
       * @param {String} direction
       * @return {Boolean}
       */
      isOffset: function isOffset() {
        var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

        if (!direction) {
          return this._o;
        }

        if (!this._o) {
          return false;
        } // did we view to the right?


        if (direction === '|>') {
          return this.move.direction === '|' && this.move.steps === '>';
        } // did we view to the left?


        if (direction === '|<') {
          return this.move.direction === '|' && this.move.steps === '<';
        }

        return this.move.direction === direction;
      },

      /**
       * Checks if bound mode is active
       *
       * @return {Boolean}
       */
      isBound: function isBound() {
        return Glide.isType('slider') && Glide.settings.focusAt !== 'center' && Glide.settings.bound;
      }
    };
    /**
     * Returns index value to move forward/to the right
     *
     * @param viewSize
     * @returns {Number}
     */

    function calculateForwardIndex(viewSize) {
      var index = Glide.index;

      if (Glide.isType('carousel')) {
        return index + viewSize;
      }

      return index + (viewSize - index % viewSize);
    }
    /**
     * Normalizes the given forward index based on glide settings, preventing it to exceed certain boundaries
     *
     * @param index
     * @param length
     * @param viewSize
     * @returns {Number}
     */


    function normalizeForwardIndex(index, viewSize) {
      var length = Run.length;

      if (index <= length) {
        return index;
      }

      if (Glide.isType('carousel')) {
        return index - (length + 1);
      }

      if (Glide.settings.rewind) {
        // bound does funny things with the length, therefor we have to be certain
        // that we are on the last possible index value given by bound
        if (Run.isBound() && !Run.isEnd()) {
          return length;
        }

        return 0;
      }

      if (Run.isBound()) {
        return length;
      }

      return Math.floor(length / viewSize) * viewSize;
    }
    /**
     * Calculates index value to move backward/to the left
     *
     * @param viewSize
     * @returns {Number}
     */


    function calculateBackwardIndex(viewSize) {
      var index = Glide.index;

      if (Glide.isType('carousel')) {
        return index - viewSize;
      } // ensure our back navigation results in the same index as a forward navigation
      // to experience a homogeneous paging


      var view = Math.ceil(index / viewSize);
      return (view - 1) * viewSize;
    }
    /**
     * Normalizes the given backward index based on glide settings, preventing it to exceed certain boundaries
     *
     * @param index
     * @param length
     * @param viewSize
     * @returns {*}
     */


    function normalizeBackwardIndex(index, viewSize) {
      var length = Run.length;

      if (index >= 0) {
        return index;
      }

      if (Glide.isType('carousel')) {
        return index + (length + 1);
      }

      if (Glide.settings.rewind) {
        // bound does funny things with the length, therefor we have to be certain
        // that we are on first possible index value before we to rewind to the length given by bound
        if (Run.isBound() && Run.isStart()) {
          return length;
        }

        return Math.floor(length / viewSize) * viewSize;
      }

      return 0;
    }

    define(Run, 'move', {
      /**
       * Gets value of the move schema.
       *
       * @returns {Object}
       */
      get: function get() {
        return this._m;
      },

      /**
       * Sets value of the move schema.
       *
       * @returns {Object}
       */
      set: function set(value) {
        var step = value.substr(1);
        this._m = {
          direction: value.substr(0, 1),
          steps: step ? toInt(step) ? toInt(step) : step : 0
        };
      }
    });
    define(Run, 'length', {
      /**
       * Gets value of the running distance based
       * on zero-indexing number of slides.
       *
       * @return {Number}
       */
      get: function get() {
        var settings = Glide.settings;
        var length = Components.Html.slides.length; // If the `bound` option is active, a maximum running distance should be
        // reduced by `perView` and `focusAt` settings. Running distance
        // should end before creating an empty space after instance.

        if (this.isBound()) {
          return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
        }

        return length - 1;
      }
    });
    define(Run, 'offset', {
      /**
       * Gets status of the offsetting flag.
       *
       * @return {Boolean}
       */
      get: function get() {
        return this._o;
      }
    });
    return Run;
  }

  /**
   * Returns a current time.
   *
   * @return {Number}
   */
  function now() {
    return new Date().getTime();
  }

  /**
   * Returns a function, that, when invoked, will only be triggered
   * at most once during a given window of time.
   *
   * @param {Function} func
   * @param {Number} wait
   * @param {Object=} options
   * @return {Function}
   *
   * @see https://github.com/jashkenas/underscore
   */

  function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function later() {
      previous = options.leading === false ? 0 : now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function throttled() {
      var at = now();
      if (!previous && options.leading === false) previous = at;
      var remaining = wait - (at - previous);
      context = this;
      args = arguments;

      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }

        previous = at;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }

      return result;
    };

    throttled.cancel = function () {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  }

  var MARGIN_TYPE = {
    ltr: ['marginLeft', 'marginRight'],
    rtl: ['marginRight', 'marginLeft']
  };
  function Gaps (Glide, Components, Events) {
    var Gaps = {
      /**
       * Applies gaps between slides. First and last
       * slides do not receive it's edge margins.
       *
       * @param {HTMLCollection} slides
       * @return {Void}
       */
      apply: function apply(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;
          var direction = Components.Direction.value;

          if (i !== 0) {
            style[MARGIN_TYPE[direction][0]] = "".concat(this.value / 2, "px");
          } else {
            style[MARGIN_TYPE[direction][0]] = '';
          }

          if (i !== slides.length - 1) {
            style[MARGIN_TYPE[direction][1]] = "".concat(this.value / 2, "px");
          } else {
            style[MARGIN_TYPE[direction][1]] = '';
          }
        }
      },

      /**
       * Removes gaps from the slides.
       *
       * @param {HTMLCollection} slides
       * @returns {Void}
      */
      remove: function remove(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;
          style.marginLeft = '';
          style.marginRight = '';
        }
      }
    };
    define(Gaps, 'value', {
      /**
       * Gets value of the gap.
       *
       * @returns {Number}
       */
      get: function get() {
        return toInt(Glide.settings.gap);
      }
    });
    define(Gaps, 'grow', {
      /**
       * Gets additional dimensions value caused by gaps.
       * Used to increase width of the slides wrapper.
       *
       * @returns {Number}
       */
      get: function get() {
        return Gaps.value * Components.Sizes.length;
      }
    });
    define(Gaps, 'reductor', {
      /**
       * Gets reduction value caused by gaps.
       * Used to subtract width of the slides.
       *
       * @returns {Number}
       */
      get: function get() {
        var perView = Glide.settings.perView;
        return Gaps.value * (perView - 1) / perView;
      }
    });
    /**
     * Apply calculated gaps:
     * - after building, so slides (including clones) will receive proper margins
     * - on updating via API, to recalculate gaps with new options
     */

    Events.on(['build.after', 'update'], throttle(function () {
      Gaps.apply(Components.Html.wrapper.children);
    }, 30));
    /**
     * Remove gaps:
     * - on destroying to bring markup to its inital state
     */

    Events.on('destroy', function () {
      Gaps.remove(Components.Html.wrapper.children);
    });
    return Gaps;
  }

  /**
   * Finds siblings nodes of the passed node.
   *
   * @param  {Element} node
   * @return {Array}
   */
  function siblings(node) {
    if (node && node.parentNode) {
      var n = node.parentNode.firstChild;
      var matched = [];

      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== node) {
          matched.push(n);
        }
      }

      return matched;
    }

    return [];
  }
  /**
   * Checks if passed node exist and is a valid element.
   *
   * @param  {Element} node
   * @return {Boolean}
   */

  function exist(node) {
    if (node && node instanceof window.HTMLElement) {
      return true;
    }

    return false;
  }

  var TRACK_SELECTOR = '[data-glide-el="track"]';
  function Html (Glide, Components, Events) {
    var Html = {
      /**
       * Setup slider HTML nodes.
       *
       * @param {Glide} glide
       */
      mount: function mount() {
        this.root = Glide.selector;
        this.track = this.root.querySelector(TRACK_SELECTOR);
        this.collectSlides();
      },

      /**
       * Collect slides
       */
      collectSlides: function collectSlides() {
        this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
          return !slide.classList.contains(Glide.settings.classes.slide.clone);
        });
      }
    };
    define(Html, 'root', {
      /**
       * Gets node of the glide main element.
       *
       * @return {Object}
       */
      get: function get() {
        return Html._r;
      },

      /**
       * Sets node of the glide main element.
       *
       * @return {Object}
       */
      set: function set(r) {
        if (isString(r)) {
          r = document.querySelector(r);
        }

        if (exist(r)) {
          Html._r = r;
        } else {
          warn('Root element must be a existing Html node');
        }
      }
    });
    define(Html, 'track', {
      /**
       * Gets node of the glide track with slides.
       *
       * @return {Object}
       */
      get: function get() {
        return Html._t;
      },

      /**
       * Sets node of the glide track with slides.
       *
       * @return {Object}
       */
      set: function set(t) {
        if (exist(t)) {
          Html._t = t;
        } else {
          warn("Could not find track element. Please use ".concat(TRACK_SELECTOR, " attribute."));
        }
      }
    });
    define(Html, 'wrapper', {
      /**
       * Gets node of the slides wrapper.
       *
       * @return {Object}
       */
      get: function get() {
        return Html.track.children[0];
      }
    });
    /**
     * Add/remove/reorder dynamic slides
     */

    Events.on('update', function () {
      Html.collectSlides();
    });
    return Html;
  }

  function Peek (Glide, Components, Events) {
    var Peek = {
      /**
       * Setups how much to peek based on settings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.value = Glide.settings.peek;
      }
    };
    define(Peek, 'value', {
      /**
       * Gets value of the peek.
       *
       * @returns {Number|Object}
       */
      get: function get() {
        return Peek._v;
      },

      /**
       * Sets value of the peek.
       *
       * @param {Number|Object} value
       * @return {Void}
       */
      set: function set(value) {
        if (isObject(value)) {
          value.before = toInt(value.before);
          value.after = toInt(value.after);
        } else {
          value = toInt(value);
        }

        Peek._v = value;
      }
    });
    define(Peek, 'reductor', {
      /**
       * Gets reduction value caused by peek.
       *
       * @returns {Number}
       */
      get: function get() {
        var value = Peek.value;
        var perView = Glide.settings.perView;

        if (isObject(value)) {
          return value.before / perView + value.after / perView;
        }

        return value * 2 / perView;
      }
    });
    /**
     * Recalculate peeking sizes on:
     * - when resizing window to update to proper percents
     */

    Events.on(['resize', 'update'], function () {
      Peek.mount();
    });
    return Peek;
  }

  function Move (Glide, Components, Events) {
    var Move = {
      /**
       * Constructs move component.
       *
       * @returns {Void}
       */
      mount: function mount() {
        this._o = 0;
      },

      /**
       * Calculates a movement value based on passed offset and currently active index.
       *
       * @param  {Number} offset
       * @return {Void}
       */
      make: function make() {
        var _this = this;

        var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this.offset = offset;
        Events.emit('move', {
          movement: this.value
        });
        Components.Transition.after(function () {
          Events.emit('move.after', {
            movement: _this.value
          });
        });
      }
    };
    define(Move, 'offset', {
      /**
       * Gets an offset value used to modify current translate.
       *
       * @return {Object}
       */
      get: function get() {
        return Move._o;
      },

      /**
       * Sets an offset value used to modify current translate.
       *
       * @return {Object}
       */
      set: function set(value) {
        Move._o = !isUndefined(value) ? toInt(value) : 0;
      }
    });
    define(Move, 'translate', {
      /**
       * Gets a raw movement value.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Sizes.slideWidth * Glide.index;
      }
    });
    define(Move, 'value', {
      /**
       * Gets an actual movement value corrected by offset.
       *
       * @return {Number}
       */
      get: function get() {
        var offset = this.offset;
        var translate = this.translate;

        if (Components.Direction.is('rtl')) {
          return translate + offset;
        }

        return translate - offset;
      }
    });
    /**
     * Make movement to proper slide on:
     * - before build, so glide will start at `startAt` index
     * - on each standard run to move to newly calculated index
     */

    Events.on(['build.before', 'run'], function () {
      Move.make();
    });
    return Move;
  }

  function Sizes (Glide, Components, Events) {
    var Sizes = {
      /**
       * Setups dimensions of slides.
       *
       * @return {Void}
       */
      setupSlides: function setupSlides() {
        var width = "".concat(this.slideWidth, "px");
        var slides = Components.Html.slides;

        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = width;
        }
      },

      /**
       * Setups dimensions of slides wrapper.
       *
       * @return {Void}
       */
      setupWrapper: function setupWrapper() {
        Components.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
      },

      /**
       * Removes applied styles from HTML elements.
       *
       * @returns {Void}
       */
      remove: function remove() {
        var slides = Components.Html.slides;

        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = '';
        }

        Components.Html.wrapper.style.width = '';
      }
    };
    define(Sizes, 'length', {
      /**
       * Gets count number of the slides.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Html.slides.length;
      }
    });
    define(Sizes, 'width', {
      /**
       * Gets width value of the slider (visible area).
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Html.track.offsetWidth;
      }
    });
    define(Sizes, 'wrapperSize', {
      /**
       * Gets size of the slides wrapper.
       *
       * @return {Number}
       */
      get: function get() {
        return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
      }
    });
    define(Sizes, 'slideWidth', {
      /**
       * Gets width value of a single slide.
       *
       * @return {Number}
       */
      get: function get() {
        return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
      }
    });
    /**
     * Apply calculated glide's dimensions:
     * - before building, so other dimensions (e.g. translate) will be calculated propertly
     * - when resizing window to recalculate sildes dimensions
     * - on updating via API, to calculate dimensions based on new options
     */

    Events.on(['build.before', 'resize', 'update'], function () {
      Sizes.setupSlides();
      Sizes.setupWrapper();
    });
    /**
     * Remove calculated glide's dimensions:
     * - on destoting to bring markup to its inital state
     */

    Events.on('destroy', function () {
      Sizes.remove();
    });
    return Sizes;
  }

  function Build (Glide, Components, Events) {
    var Build = {
      /**
       * Init glide building. Adds classes, sets
       * dimensions and setups initial state.
       *
       * @return {Void}
       */
      mount: function mount() {
        Events.emit('build.before');
        this.typeClass();
        this.activeClass();
        Events.emit('build.after');
      },

      /**
       * Adds `type` class to the glide element.
       *
       * @return {Void}
       */
      typeClass: function typeClass() {
        Components.Html.root.classList.add(Glide.settings.classes.type[Glide.settings.type]);
      },

      /**
       * Sets active class to current slide.
       *
       * @return {Void}
       */
      activeClass: function activeClass() {
        var classes = Glide.settings.classes;
        var slide = Components.Html.slides[Glide.index];

        if (slide) {
          slide.classList.add(classes.slide.active);
          siblings(slide).forEach(function (sibling) {
            sibling.classList.remove(classes.slide.active);
          });
        }
      },

      /**
       * Removes HTML classes applied at building.
       *
       * @return {Void}
       */
      removeClasses: function removeClasses() {
        var _Glide$settings$class = Glide.settings.classes,
            type = _Glide$settings$class.type,
            slide = _Glide$settings$class.slide;
        Components.Html.root.classList.remove(type[Glide.settings.type]);
        Components.Html.slides.forEach(function (sibling) {
          sibling.classList.remove(slide.active);
        });
      }
    };
    /**
     * Clear building classes:
     * - on destroying to bring HTML to its initial state
     * - on updating to remove classes before remounting component
     */

    Events.on(['destroy', 'update'], function () {
      Build.removeClasses();
    });
    /**
     * Remount component:
     * - on resizing of the window to calculate new dimensions
     * - on updating settings via API
     */

    Events.on(['resize', 'update'], function () {
      Build.mount();
    });
    /**
     * Swap active class of current slide:
     * - after each move to the new index
     */

    Events.on('move.after', function () {
      Build.activeClass();
    });
    return Build;
  }

  function Clones (Glide, Components, Events) {
    var Clones = {
      /**
       * Create pattern map and collect slides to be cloned.
       */
      mount: function mount() {
        this.items = [];

        if (Glide.isType('carousel')) {
          this.items = this.collect();
        }
      },

      /**
       * Collect clones with pattern.
       *
       * @return {[]}
       */
      collect: function collect() {
        var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var slides = Components.Html.slides;
        var _Glide$settings = Glide.settings,
            perView = _Glide$settings.perView,
            classes = _Glide$settings.classes,
            cloningRatio = _Glide$settings.cloningRatio;

        if (slides.length !== 0) {
          var peekIncrementer = +!!Glide.settings.peek;
          var cloneCount = perView + peekIncrementer + Math.round(perView / 2);
          var append = slides.slice(0, cloneCount).reverse();
          var prepend = slides.slice(cloneCount * -1);

          for (var r = 0; r < Math.max(cloningRatio, Math.floor(perView / slides.length)); r++) {
            for (var i = 0; i < append.length; i++) {
              var clone = append[i].cloneNode(true);
              clone.classList.add(classes.slide.clone);
              items.push(clone);
            }

            for (var _i = 0; _i < prepend.length; _i++) {
              var _clone = prepend[_i].cloneNode(true);

              _clone.classList.add(classes.slide.clone);

              items.unshift(_clone);
            }
          }
        }

        return items;
      },

      /**
       * Append cloned slides with generated pattern.
       *
       * @return {Void}
       */
      append: function append() {
        var items = this.items;
        var _Components$Html = Components.Html,
            wrapper = _Components$Html.wrapper,
            slides = _Components$Html.slides;
        var half = Math.floor(items.length / 2);
        var prepend = items.slice(0, half).reverse();
        var append = items.slice(half * -1).reverse();
        var width = "".concat(Components.Sizes.slideWidth, "px");

        for (var i = 0; i < append.length; i++) {
          wrapper.appendChild(append[i]);
        }

        for (var _i2 = 0; _i2 < prepend.length; _i2++) {
          wrapper.insertBefore(prepend[_i2], slides[0]);
        }

        for (var _i3 = 0; _i3 < items.length; _i3++) {
          items[_i3].style.width = width;
        }
      },

      /**
       * Remove all cloned slides.
       *
       * @return {Void}
       */
      remove: function remove() {
        var items = this.items;

        for (var i = 0; i < items.length; i++) {
          Components.Html.wrapper.removeChild(items[i]);
        }
      }
    };
    define(Clones, 'grow', {
      /**
       * Gets additional dimensions value caused by clones.
       *
       * @return {Number}
       */
      get: function get() {
        return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
      }
    });
    /**
     * Append additional slide's clones:
     * - while glide's type is `carousel`
     */

    Events.on('update', function () {
      Clones.remove();
      Clones.mount();
      Clones.append();
    });
    /**
     * Append additional slide's clones:
     * - while glide's type is `carousel`
     */

    Events.on('build.before', function () {
      if (Glide.isType('carousel')) {
        Clones.append();
      }
    });
    /**
     * Remove clones HTMLElements:
     * - on destroying, to bring HTML to its initial state
     */

    Events.on('destroy', function () {
      Clones.remove();
    });
    return Clones;
  }

  var EventsBinder = /*#__PURE__*/function () {
    /**
     * Construct a EventsBinder instance.
     */
    function EventsBinder() {
      var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, EventsBinder);

      this.listeners = listeners;
    }
    /**
     * Adds events listeners to arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Function} closure
     * @param  {Boolean|Object} capture
     * @return {Void}
     */


    _createClass(EventsBinder, [{
      key: "on",
      value: function on(events, el, closure) {
        var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (isString(events)) {
          events = [events];
        }

        for (var i = 0; i < events.length; i++) {
          this.listeners[events[i]] = closure;
          el.addEventListener(events[i], this.listeners[events[i]], capture);
        }
      }
      /**
       * Removes event listeners from arrows HTML elements.
       *
       * @param  {String|Array} events
       * @param  {Element|Window|Document} el
       * @param  {Boolean|Object} capture
       * @return {Void}
       */

    }, {
      key: "off",
      value: function off(events, el) {
        var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (isString(events)) {
          events = [events];
        }

        for (var i = 0; i < events.length; i++) {
          el.removeEventListener(events[i], this.listeners[events[i]], capture);
        }
      }
      /**
       * Destroy collected listeners.
       *
       * @returns {Void}
       */

    }, {
      key: "destroy",
      value: function destroy() {
        delete this.listeners;
      }
    }]);

    return EventsBinder;
  }();

  function Resize (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();
    var Resize = {
      /**
       * Initializes window bindings.
       */
      mount: function mount() {
        this.bind();
      },

      /**
       * Binds `rezsize` listener to the window.
       * It's a costly event, so we are debouncing it.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('resize', window, throttle(function () {
          Events.emit('resize');
        }, Glide.settings.throttle));
      },

      /**
       * Unbinds listeners from the window.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('resize', window);
      }
    };
    /**
     * Remove bindings from window:
     * - on destroying, to remove added EventListener
     */

    Events.on('destroy', function () {
      Resize.unbind();
      Binder.destroy();
    });
    return Resize;
  }

  var VALID_DIRECTIONS = ['ltr', 'rtl'];
  var FLIPED_MOVEMENTS = {
    '>': '<',
    '<': '>',
    '=': '='
  };
  function Direction (Glide, Components, Events) {
    var Direction = {
      /**
       * Setups gap value based on settings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.value = Glide.settings.direction;
      },

      /**
       * Resolves pattern based on direction value
       *
       * @param {String} pattern
       * @returns {String}
       */
      resolve: function resolve(pattern) {
        var token = pattern.slice(0, 1);

        if (this.is('rtl')) {
          return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
        }

        return pattern;
      },

      /**
       * Checks value of direction mode.
       *
       * @param {String} direction
       * @returns {Boolean}
       */
      is: function is(direction) {
        return this.value === direction;
      },

      /**
       * Applies direction class to the root HTML element.
       *
       * @return {Void}
       */
      addClass: function addClass() {
        Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
      },

      /**
       * Removes direction class from the root HTML element.
       *
       * @return {Void}
       */
      removeClass: function removeClass() {
        Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
      }
    };
    define(Direction, 'value', {
      /**
       * Gets value of the direction.
       *
       * @returns {Number}
       */
      get: function get() {
        return Direction._v;
      },

      /**
       * Sets value of the direction.
       *
       * @param {String} value
       * @return {Void}
       */
      set: function set(value) {
        if (VALID_DIRECTIONS.indexOf(value) > -1) {
          Direction._v = value;
        } else {
          warn('Direction value must be `ltr` or `rtl`');
        }
      }
    });
    /**
     * Clear direction class:
     * - on destroy to bring HTML to its initial state
     * - on update to remove class before reappling bellow
     */

    Events.on(['destroy', 'update'], function () {
      Direction.removeClass();
    });
    /**
     * Remount component:
     * - on update to reflect changes in direction value
     */

    Events.on('update', function () {
      Direction.mount();
    });
    /**
     * Apply direction class:
     * - before building to apply class for the first time
     * - on updating to reapply direction class that may changed
     */

    Events.on(['build.before', 'update'], function () {
      Direction.addClass();
    });
    return Direction;
  }

  /**
   * Reflects value of glide movement.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Rtl (Glide, Components) {
    return {
      /**
       * Negates the passed translate if glide is in RTL option.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        if (Components.Direction.is('rtl')) {
          return -translate;
        }

        return translate;
      }
    };
  }

  /**
   * Updates glide movement with a `gap` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Gap (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with number in the `gap` settings.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        var multiplier = Math.floor(translate / Components.Sizes.slideWidth);
        return translate + Components.Gaps.value * multiplier;
      }
    };
  }

  /**
   * Updates glide movement with width of additional clones width.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Grow (Glide, Components) {
    return {
      /**
       * Adds to the passed translate width of the half of clones.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        return translate + Components.Clones.grow / 2;
      }
    };
  }

  /**
   * Updates glide movement with a `peek` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */

  function Peeking (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with a `peek` setting.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        if (Glide.settings.focusAt >= 0) {
          var peek = Components.Peek.value;

          if (isObject(peek)) {
            return translate - peek.before;
          }

          return translate - peek;
        }

        return translate;
      }
    };
  }

  /**
   * Updates glide movement with a `focusAt` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Focusing (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with index in the `focusAt` setting.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        var gap = Components.Gaps.value;
        var width = Components.Sizes.width;
        var focusAt = Glide.settings.focusAt;
        var slideWidth = Components.Sizes.slideWidth;

        if (focusAt === 'center') {
          return translate - (width / 2 - slideWidth / 2);
        }

        return translate - slideWidth * focusAt - gap * focusAt;
      }
    };
  }

  /**
   * Applies diffrent transformers on translate value.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */

  function mutator (Glide, Components, Events) {
    /**
     * Merge instance transformers with collection of default transformers.
     * It's important that the Rtl component be last on the list,
     * so it reflects all previous transformations.
     *
     * @type {Array}
     */
    var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);
    return {
      /**
       * Piplines translate value with registered transformers.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      mutate: function mutate(translate) {
        for (var i = 0; i < TRANSFORMERS.length; i++) {
          var transformer = TRANSFORMERS[i];

          if (isFunction(transformer) && isFunction(transformer().modify)) {
            translate = transformer(Glide, Components, Events).modify(translate);
          } else {
            warn('Transformer should be a function that returns an object with `modify()` method');
          }
        }

        return translate;
      }
    };
  }

  function Translate (Glide, Components, Events) {
    var Translate = {
      /**
       * Sets value of translate on HTML element.
       *
       * @param {Number} value
       * @return {Void}
       */
      set: function set(value) {
        var transform = mutator(Glide, Components).mutate(value);
        var translate3d = "translate3d(".concat(-1 * transform, "px, 0px, 0px)");
        Components.Html.wrapper.style.mozTransform = translate3d; // needed for supported Firefox 10-15

        Components.Html.wrapper.style.webkitTransform = translate3d; // needed for supported Chrome 10-35, Safari 5.1-8, and Opera 15-22

        Components.Html.wrapper.style.transform = translate3d;
      },

      /**
       * Removes value of translate from HTML element.
       *
       * @return {Void}
       */
      remove: function remove() {
        Components.Html.wrapper.style.transform = '';
      },

      /**
       * @return {number}
       */
      getStartIndex: function getStartIndex() {
        var length = Components.Sizes.length;
        var index = Glide.index;
        var perView = Glide.settings.perView;

        if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {
          return length + (index - perView);
        } // "modulo length" converts an index that equals length to zero


        return (index + perView) % length;
      },

      /**
       * @return {number}
       */
      getTravelDistance: function getTravelDistance() {
        var travelDistance = Components.Sizes.slideWidth * Glide.settings.perView;

        if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {
          // reverse travel distance so that we don't have to change subtract operations
          return travelDistance * -1;
        }

        return travelDistance;
      }
    };
    /**
     * Set new translate value:
     * - on move to reflect index change
     * - on updating via API to reflect possible changes in options
     */

    Events.on('move', function (context) {
      if (!Glide.isType('carousel') || !Components.Run.isOffset()) {
        return Translate.set(context.movement);
      }

      Components.Transition.after(function () {
        Events.emit('translate.jump');
        Translate.set(Components.Sizes.slideWidth * Glide.index);
      });
      var startWidth = Components.Sizes.slideWidth * Components.Translate.getStartIndex();
      return Translate.set(startWidth - Components.Translate.getTravelDistance());
    });
    /**
     * Remove translate:
     * - on destroying to bring markup to its inital state
     */

    Events.on('destroy', function () {
      Translate.remove();
    });
    return Translate;
  }

  function Transition (Glide, Components, Events) {
    /**
     * Holds inactivity status of transition.
     * When true transition is not applied.
     *
     * @type {Boolean}
     */
    var disabled = false;
    var Transition = {
      /**
       * Composes string of the CSS transition.
       *
       * @param {String} property
       * @return {String}
       */
      compose: function compose(property) {
        var settings = Glide.settings;

        if (!disabled) {
          return "".concat(property, " ").concat(this.duration, "ms ").concat(settings.animationTimingFunc);
        }

        return "".concat(property, " 0ms ").concat(settings.animationTimingFunc);
      },

      /**
       * Sets value of transition on HTML element.
       *
       * @param {String=} property
       * @return {Void}
       */
      set: function set() {
        var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
        Components.Html.wrapper.style.transition = this.compose(property);
      },

      /**
       * Removes value of transition from HTML element.
       *
       * @return {Void}
       */
      remove: function remove() {
        Components.Html.wrapper.style.transition = '';
      },

      /**
       * Runs callback after animation.
       *
       * @param  {Function} callback
       * @return {Void}
       */
      after: function after(callback) {
        setTimeout(function () {
          callback();
        }, this.duration);
      },

      /**
       * Enable transition.
       *
       * @return {Void}
       */
      enable: function enable() {
        disabled = false;
        this.set();
      },

      /**
       * Disable transition.
       *
       * @return {Void}
       */
      disable: function disable() {
        disabled = true;
        this.set();
      }
    };
    define(Transition, 'duration', {
      /**
       * Gets duration of the transition based
       * on currently running animation type.
       *
       * @return {Number}
       */
      get: function get() {
        var settings = Glide.settings;

        if (Glide.isType('slider') && Components.Run.offset) {
          return settings.rewindDuration;
        }

        return settings.animationDuration;
      }
    });
    /**
     * Set transition `style` value:
     * - on each moving, because it may be cleared by offset move
     */

    Events.on('move', function () {
      Transition.set();
    });
    /**
     * Disable transition:
     * - before initial build to avoid transitioning from `0` to `startAt` index
     * - while resizing window and recalculating dimensions
     * - on jumping from offset transition at start and end edges in `carousel` type
     */

    Events.on(['build.before', 'resize', 'translate.jump'], function () {
      Transition.disable();
    });
    /**
     * Enable transition:
     * - on each running, because it may be disabled by offset move
     */

    Events.on('run', function () {
      Transition.enable();
    });
    /**
     * Remove transition:
     * - on destroying to bring markup to its inital state
     */

    Events.on('destroy', function () {
      Transition.remove();
    });
    return Transition;
  }

  /**
   * Test via a getter in the options object to see
   * if the passive property is accessed.
   *
   * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
   */
  var supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('testPassive', null, opts);
    window.removeEventListener('testPassive', null, opts);
  } catch (e) {}

  var supportsPassive$1 = supportsPassive;

  var START_EVENTS = ['touchstart', 'mousedown'];
  var MOVE_EVENTS = ['touchmove', 'mousemove'];
  var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
  var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
  function Swipe (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();
    var swipeSin = 0;
    var swipeStartX = 0;
    var swipeStartY = 0;
    var disabled = false;
    var capture = supportsPassive$1 ? {
      passive: true
    } : false;
    var Swipe = {
      /**
       * Initializes swipe bindings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.bindSwipeStart();
      },

      /**
       * Handler for `swipestart` event. Calculates entry points of the user's tap.
       *
       * @param {Object} event
       * @return {Void}
       */
      start: function start(event) {
        if (!disabled && !Glide.disabled) {
          this.disable();
          var swipe = this.touches(event);
          swipeSin = null;
          swipeStartX = toInt(swipe.pageX);
          swipeStartY = toInt(swipe.pageY);
          this.bindSwipeMove();
          this.bindSwipeEnd();
          Events.emit('swipe.start');
        }
      },

      /**
       * Handler for `swipemove` event. Calculates user's tap angle and distance.
       *
       * @param {Object} event
       */
      move: function move(event) {
        if (!Glide.disabled) {
          var _Glide$settings = Glide.settings,
              touchAngle = _Glide$settings.touchAngle,
              touchRatio = _Glide$settings.touchRatio,
              classes = _Glide$settings.classes;
          var swipe = this.touches(event);
          var subExSx = toInt(swipe.pageX) - swipeStartX;
          var subEySy = toInt(swipe.pageY) - swipeStartY;
          var powEX = Math.abs(subExSx << 2);
          var powEY = Math.abs(subEySy << 2);
          var swipeHypotenuse = Math.sqrt(powEX + powEY);
          var swipeCathetus = Math.sqrt(powEY);
          swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

          if (swipeSin * 180 / Math.PI < touchAngle) {
            event.stopPropagation();
            Components.Move.make(subExSx * toFloat(touchRatio));
            Components.Html.root.classList.add(classes.dragging);
            Events.emit('swipe.move');
          } else {
            return false;
          }
        }
      },

      /**
       * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
       *
       * @param {Object} event
       * @return {Void}
       */
      end: function end(event) {
        if (!Glide.disabled) {
          var _Glide$settings2 = Glide.settings,
              perSwipe = _Glide$settings2.perSwipe,
              touchAngle = _Glide$settings2.touchAngle,
              classes = _Glide$settings2.classes;
          var swipe = this.touches(event);
          var threshold = this.threshold(event);
          var swipeDistance = swipe.pageX - swipeStartX;
          var swipeDeg = swipeSin * 180 / Math.PI;
          this.enable();

          if (swipeDistance > threshold && swipeDeg < touchAngle) {
            Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
          } else if (swipeDistance < -threshold && swipeDeg < touchAngle) {
            Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
          } else {
            // While swipe don't reach distance apply previous transform.
            Components.Move.make();
          }

          Components.Html.root.classList.remove(classes.dragging);
          this.unbindSwipeMove();
          this.unbindSwipeEnd();
          Events.emit('swipe.end');
        }
      },

      /**
       * Binds swipe's starting event.
       *
       * @return {Void}
       */
      bindSwipeStart: function bindSwipeStart() {
        var _this = this;

        var _Glide$settings3 = Glide.settings,
            swipeThreshold = _Glide$settings3.swipeThreshold,
            dragThreshold = _Glide$settings3.dragThreshold;

        if (swipeThreshold) {
          Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
            _this.start(event);
          }, capture);
        }

        if (dragThreshold) {
          Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
            _this.start(event);
          }, capture);
        }
      },

      /**
       * Unbinds swipe's starting event.
       *
       * @return {Void}
       */
      unbindSwipeStart: function unbindSwipeStart() {
        Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
        Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
      },

      /**
       * Binds swipe's moving event.
       *
       * @return {Void}
       */
      bindSwipeMove: function bindSwipeMove() {
        var _this2 = this;

        Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
          _this2.move(event);
        }, Glide.settings.throttle), capture);
      },

      /**
       * Unbinds swipe's moving event.
       *
       * @return {Void}
       */
      unbindSwipeMove: function unbindSwipeMove() {
        Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
      },

      /**
       * Binds swipe's ending event.
       *
       * @return {Void}
       */
      bindSwipeEnd: function bindSwipeEnd() {
        var _this3 = this;

        Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
          _this3.end(event);
        });
      },

      /**
       * Unbinds swipe's ending event.
       *
       * @return {Void}
       */
      unbindSwipeEnd: function unbindSwipeEnd() {
        Binder.off(END_EVENTS, Components.Html.wrapper);
      },

      /**
       * Normalizes event touches points accorting to different types.
       *
       * @param {Object} event
       */
      touches: function touches(event) {
        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return event;
        }

        return event.touches[0] || event.changedTouches[0];
      },

      /**
       * Gets value of minimum swipe distance settings based on event type.
       *
       * @return {Number}
       */
      threshold: function threshold(event) {
        var settings = Glide.settings;

        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return settings.dragThreshold;
        }

        return settings.swipeThreshold;
      },

      /**
       * Enables swipe event.
       *
       * @return {self}
       */
      enable: function enable() {
        disabled = false;
        Components.Transition.enable();
        return this;
      },

      /**
       * Disables swipe event.
       *
       * @return {self}
       */
      disable: function disable() {
        disabled = true;
        Components.Transition.disable();
        return this;
      }
    };
    /**
     * Add component class:
     * - after initial building
     */

    Events.on('build.after', function () {
      Components.Html.root.classList.add(Glide.settings.classes.swipeable);
    });
    /**
     * Remove swiping bindings:
     * - on destroying, to remove added EventListeners
     */

    Events.on('destroy', function () {
      Swipe.unbindSwipeStart();
      Swipe.unbindSwipeMove();
      Swipe.unbindSwipeEnd();
      Binder.destroy();
    });
    return Swipe;
  }

  function Images (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();
    var Images = {
      /**
       * Binds listener to glide wrapper.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.bind();
      },

      /**
       * Binds `dragstart` event on wrapper to prevent dragging images.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
      },

      /**
       * Unbinds `dragstart` event on wrapper.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('dragstart', Components.Html.wrapper);
      },

      /**
       * Event handler. Prevents dragging.
       *
       * @return {Void}
       */
      dragstart: function dragstart(event) {
        event.preventDefault();
      }
    };
    /**
     * Remove bindings from images:
     * - on destroying, to remove added EventListeners
     */

    Events.on('destroy', function () {
      Images.unbind();
      Binder.destroy();
    });
    return Images;
  }

  function Anchors (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();
    /**
     * Holds detaching status of anchors.
     * Prevents detaching of already detached anchors.
     *
     * @private
     * @type {Boolean}
     */

    var detached = false;
    /**
     * Holds preventing status of anchors.
     * If `true` redirection after click will be disabled.
     *
     * @private
     * @type {Boolean}
     */

    var prevented = false;
    var Anchors = {
      /**
       * Setups a initial state of anchors component.
       *
       * @returns {Void}
       */
      mount: function mount() {
        /**
         * Holds collection of anchors elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._a = Components.Html.wrapper.querySelectorAll('a');
        this.bind();
      },

      /**
       * Binds events to anchors inside a track.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('click', Components.Html.wrapper, this.click);
      },

      /**
       * Unbinds events attached to anchors inside a track.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('click', Components.Html.wrapper);
      },

      /**
       * Handler for click event. Prevents clicks when glide is in `prevent` status.
       *
       * @param  {Object} event
       * @return {Void}
       */
      click: function click(event) {
        if (prevented) {
          event.stopPropagation();
          event.preventDefault();
        }
      },

      /**
       * Detaches anchors click event inside glide.
       *
       * @return {self}
       */
      detach: function detach() {
        prevented = true;

        if (!detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = false;
          }

          detached = true;
        }

        return this;
      },

      /**
       * Attaches anchors click events inside glide.
       *
       * @return {self}
       */
      attach: function attach() {
        prevented = false;

        if (detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = true;
          }

          detached = false;
        }

        return this;
      }
    };
    define(Anchors, 'items', {
      /**
       * Gets collection of the arrows HTML elements.
       *
       * @return {HTMLElement[]}
       */
      get: function get() {
        return Anchors._a;
      }
    });
    /**
     * Detach anchors inside slides:
     * - on swiping, so they won't redirect to its `href` attributes
     */

    Events.on('swipe.move', function () {
      Anchors.detach();
    });
    /**
     * Attach anchors inside slides:
     * - after swiping and transitions ends, so they can redirect after click again
     */

    Events.on('swipe.end', function () {
      Components.Transition.after(function () {
        Anchors.attach();
      });
    });
    /**
     * Unbind anchors inside slides:
     * - on destroying, to bring anchors to its initial state
     */

    Events.on('destroy', function () {
      Anchors.attach();
      Anchors.unbind();
      Binder.destroy();
    });
    return Anchors;
  }

  var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
  var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';
  var PREVIOUS_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, " [data-glide-dir*=\"<\"]");
  var NEXT_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, " [data-glide-dir*=\">\"]");
  function Controls (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();
    var capture = supportsPassive$1 ? {
      passive: true
    } : false;
    var Controls = {
      /**
       * Inits arrows. Binds events listeners
       * to the arrows HTML elements.
       *
       * @return {Void}
       */
      mount: function mount() {
        /**
         * Collection of navigation HTML elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);
        /**
         * Collection of controls HTML elements.
         *
         * @private
         * @type {HTMLCollection}
         */

        this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);
        /**
         * Collection of arrow control HTML elements.
         *
         * @private
         * @type {Object}
         */

        this._arrowControls = {
          previous: Components.Html.root.querySelectorAll(PREVIOUS_CONTROLS_SELECTOR),
          next: Components.Html.root.querySelectorAll(NEXT_CONTROLS_SELECTOR)
        };
        this.addBindings();
      },

      /**
       * Sets active class to current slide.
       *
       * @return {Void}
       */
      setActive: function setActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.addClass(this._n[i].children);
        }
      },

      /**
       * Removes active class to current slide.
       *
       * @return {Void}
       */
      removeActive: function removeActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.removeClass(this._n[i].children);
        }
      },

      /**
       * Toggles active class on items inside navigation.
       *
       * @param  {HTMLElement} controls
       * @return {Void}
       */
      addClass: function addClass(controls) {
        var settings = Glide.settings;
        var item = controls[Glide.index];

        if (!item) {
          return;
        }

        if (item) {
          item.classList.add(settings.classes.nav.active);
          siblings(item).forEach(function (sibling) {
            sibling.classList.remove(settings.classes.nav.active);
          });
        }
      },

      /**
       * Removes active class from active control.
       *
       * @param  {HTMLElement} controls
       * @return {Void}
       */
      removeClass: function removeClass(controls) {
        var item = controls[Glide.index];

        if (item) {
          item.classList.remove(Glide.settings.classes.nav.active);
        }
      },

      /**
       * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
       */
      setArrowState: function setArrowState() {
        if (Glide.settings.rewind) {
          return;
        }

        var next = Controls._arrowControls.next;
        var previous = Controls._arrowControls.previous;
        this.resetArrowState(next, previous);

        if (Glide.index === 0) {
          this.disableArrow(previous);
        }

        if (Glide.index === Components.Run.length) {
          this.disableArrow(next);
        }
      },

      /**
       * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
       *
       * @param {NodeList[]} lists
       */
      resetArrowState: function resetArrowState() {
        var settings = Glide.settings;

        for (var _len = arguments.length, lists = new Array(_len), _key = 0; _key < _len; _key++) {
          lists[_key] = arguments[_key];
        }

        lists.forEach(function (list) {
          list.forEach(function (element) {
            element.classList.remove(settings.classes.arrow.disabled);
          });
        });
      },

      /**
       * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
       *
       * @param {NodeList[]} lists
       */
      disableArrow: function disableArrow() {
        var settings = Glide.settings;

        for (var _len2 = arguments.length, lists = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          lists[_key2] = arguments[_key2];
        }

        lists.forEach(function (list) {
          list.forEach(function (element) {
            element.classList.add(settings.classes.arrow.disabled);
          });
        });
      },

      /**
       * Adds handles to the each group of controls.
       *
       * @return {Void}
       */
      addBindings: function addBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.bind(this._c[i].children);
        }
      },

      /**
       * Removes handles from the each group of controls.
       *
       * @return {Void}
       */
      removeBindings: function removeBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.unbind(this._c[i].children);
        }
      },

      /**
       * Binds events to arrows HTML elements.
       *
       * @param {HTMLCollection} elements
       * @return {Void}
       */
      bind: function bind(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.on('click', elements[i], this.click);
          Binder.on('touchstart', elements[i], this.click, capture);
        }
      },

      /**
       * Unbinds events binded to the arrows HTML elements.
       *
       * @param {HTMLCollection} elements
       * @return {Void}
       */
      unbind: function unbind(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.off(['click', 'touchstart'], elements[i]);
        }
      },

      /**
       * Handles `click` event on the arrows HTML elements.
       * Moves slider in direction given via the
       * `data-glide-dir` attribute.
       *
       * @param {Object} event
       * @return {void}
       */
      click: function click(event) {
        if (!supportsPassive$1 && event.type === 'touchstart') {
          event.preventDefault();
        }

        var direction = event.currentTarget.getAttribute('data-glide-dir');
        Components.Run.make(Components.Direction.resolve(direction));
      }
    };
    define(Controls, 'items', {
      /**
       * Gets collection of the controls HTML elements.
       *
       * @return {HTMLElement[]}
       */
      get: function get() {
        return Controls._c;
      }
    });
    /**
     * Swap active class of current navigation item:
     * - after mounting to set it to initial index
     * - after each move to the new index
     */

    Events.on(['mount.after', 'move.after'], function () {
      Controls.setActive();
    });
    /**
     * Add or remove disabled class of arrow elements
     */

    Events.on(['mount.after', 'run'], function () {
      Controls.setArrowState();
    });
    /**
     * Remove bindings and HTML Classes:
     * - on destroying, to bring markup to its initial state
     */

    Events.on('destroy', function () {
      Controls.removeBindings();
      Controls.removeActive();
      Binder.destroy();
    });
    return Controls;
  }

  function Keyboard (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();
    var Keyboard = {
      /**
       * Binds keyboard events on component mount.
       *
       * @return {Void}
       */
      mount: function mount() {
        if (Glide.settings.keyboard) {
          this.bind();
        }
      },

      /**
       * Adds keyboard press events.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('keyup', document, this.press);
      },

      /**
       * Removes keyboard press events.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('keyup', document);
      },

      /**
       * Handles keyboard's arrows press and moving glide foward and backward.
       *
       * @param  {Object} event
       * @return {Void}
       */
      press: function press(event) {
        var perSwipe = Glide.settings.perSwipe;

        if (event.keyCode === 39) {
          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
        }

        if (event.keyCode === 37) {
          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
        }
      }
    };
    /**
     * Remove bindings from keyboard:
     * - on destroying to remove added events
     * - on updating to remove events before remounting
     */

    Events.on(['destroy', 'update'], function () {
      Keyboard.unbind();
    });
    /**
     * Remount component
     * - on updating to reflect potential changes in settings
     */

    Events.on('update', function () {
      Keyboard.mount();
    });
    /**
     * Destroy binder:
     * - on destroying to remove listeners
     */

    Events.on('destroy', function () {
      Binder.destroy();
    });
    return Keyboard;
  }

  function Autoplay (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();
    var Autoplay = {
      /**
       * Initializes autoplaying and events.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.enable();
        this.start();

        if (Glide.settings.hoverpause) {
          this.bind();
        }
      },

      /**
       * Enables autoplaying
       *
       * @returns {Void}
       */
      enable: function enable() {
        this._e = true;
      },

      /**
       * Disables autoplaying.
       *
       * @returns {Void}
       */
      disable: function disable() {
        this._e = false;
      },

      /**
       * Starts autoplaying in configured interval.
       *
       * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
       * @return {Void}
       */
      start: function start() {
        var _this = this;

        if (!this._e) {
          return;
        }

        this.enable();

        if (Glide.settings.autoplay) {
          if (isUndefined(this._i)) {
            this._i = setInterval(function () {
              _this.stop();

              Components.Run.make('>');

              _this.start();

              Events.emit('autoplay');
            }, this.time);
          }
        }
      },

      /**
       * Stops autorunning of the glide.
       *
       * @return {Void}
       */
      stop: function stop() {
        this._i = clearInterval(this._i);
      },

      /**
       * Stops autoplaying while mouse is over glide's area.
       *
       * @return {Void}
       */
      bind: function bind() {
        var _this2 = this;

        Binder.on('mouseover', Components.Html.root, function () {
          if (_this2._e) {
            _this2.stop();
          }
        });
        Binder.on('mouseout', Components.Html.root, function () {
          if (_this2._e) {
            _this2.start();
          }
        });
      },

      /**
       * Unbind mouseover events.
       *
       * @returns {Void}
       */
      unbind: function unbind() {
        Binder.off(['mouseover', 'mouseout'], Components.Html.root);
      }
    };
    define(Autoplay, 'time', {
      /**
       * Gets time period value for the autoplay interval. Prioritizes
       * times in `data-glide-autoplay` attrubutes over options.
       *
       * @return {Number}
       */
      get: function get() {
        var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

        if (autoplay) {
          return toInt(autoplay);
        }

        return toInt(Glide.settings.autoplay);
      }
    });
    /**
     * Stop autoplaying and unbind events:
     * - on destroying, to clear defined interval
     * - on updating via API to reset interval that may changed
     */

    Events.on(['destroy', 'update'], function () {
      Autoplay.unbind();
    });
    /**
     * Stop autoplaying:
     * - before each run, to restart autoplaying
     * - on pausing via API
     * - on destroying, to clear defined interval
     * - while starting a swipe
     * - on updating via API to reset interval that may changed
     */

    Events.on(['run.before', 'swipe.start', 'update'], function () {
      Autoplay.stop();
    });
    Events.on(['pause', 'destroy'], function () {
      Autoplay.disable();
      Autoplay.stop();
    });
    /**
     * Start autoplaying:
     * - after each run, to restart autoplaying
     * - on playing via API
     * - while ending a swipe
     */

    Events.on(['run.after', 'swipe.end'], function () {
      Autoplay.start();
    });
    /**
     * Start autoplaying:
     * - after each run, to restart autoplaying
     * - on playing via API
     * - while ending a swipe
     */

    Events.on(['play'], function () {
      Autoplay.enable();
      Autoplay.start();
    });
    /**
     * Remount autoplaying:
     * - on updating via API to reset interval that may changed
     */

    Events.on('update', function () {
      Autoplay.mount();
    });
    /**
     * Destroy a binder:
     * - on destroying glide instance to clearup listeners
     */

    Events.on('destroy', function () {
      Binder.destroy();
    });
    return Autoplay;
  }

  /**
   * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
   *
   * @param {Object} points
   * @returns {Object}
   */

  function sortBreakpoints(points) {
    if (isObject(points)) {
      return sortKeys(points);
    } else {
      warn("Breakpoints option must be an object");
    }

    return {};
  }

  function Breakpoints (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();
    /**
     * Holds reference to settings.
     *
     * @type {Object}
     */

    var settings = Glide.settings;
    /**
     * Holds reference to breakpoints object in settings. Sorts breakpoints
     * from smaller to larger. It is required in order to proper
     * matching currently active breakpoint settings.
     *
     * @type {Object}
     */

    var points = sortBreakpoints(settings.breakpoints);
    /**
     * Cache initial settings before overwritting.
     *
     * @type {Object}
     */

    var defaults = Object.assign({}, settings);
    var Breakpoints = {
      /**
       * Matches settings for currectly matching media breakpoint.
       *
       * @param {Object} points
       * @returns {Object}
       */
      match: function match(points) {
        if (typeof window.matchMedia !== 'undefined') {
          for (var point in points) {
            if (points.hasOwnProperty(point)) {
              if (window.matchMedia("(max-width: ".concat(point, "px)")).matches) {
                return points[point];
              }
            }
          }
        }

        return defaults;
      }
    };
    /**
     * Overwrite instance settings with currently matching breakpoint settings.
     * This happens right after component initialization.
     */

    Object.assign(settings, Breakpoints.match(points));
    /**
     * Update glide with settings of matched brekpoint:
     * - window resize to update slider
     */

    Binder.on('resize', window, throttle(function () {
      Glide.settings = mergeOptions(settings, Breakpoints.match(points));
    }, Glide.settings.throttle));
    /**
     * Resort and update default settings:
     * - on reinit via API, so breakpoint matching will be performed with options
     */

    Events.on('update', function () {
      points = sortBreakpoints(points);
      defaults = Object.assign({}, settings);
    });
    /**
     * Unbind resize listener:
     * - on destroying, to bring markup to its initial state
     */

    Events.on('destroy', function () {
      Binder.off('resize', window);
    });
    return Breakpoints;
  }

  var COMPONENTS = {
    // Required
    Html: Html,
    Translate: Translate,
    Transition: Transition,
    Direction: Direction,
    Peek: Peek,
    Sizes: Sizes,
    Gaps: Gaps,
    Move: Move,
    Clones: Clones,
    Resize: Resize,
    Build: Build,
    Run: Run,
    // Optional
    Swipe: Swipe,
    Images: Images,
    Anchors: Anchors,
    Controls: Controls,
    Keyboard: Keyboard,
    Autoplay: Autoplay,
    Breakpoints: Breakpoints
  };

  var Glide = /*#__PURE__*/function (_Core) {
    _inherits(Glide, _Core);

    var _super = _createSuper(Glide);

    function Glide() {
      _classCallCheck(this, Glide);

      return _super.apply(this, arguments);
    }

    _createClass(Glide, [{
      key: "mount",
      value: function mount() {
        var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return _get(_getPrototypeOf(Glide.prototype), "mount", this).call(this, Object.assign({}, COMPONENTS, extensions));
      }
    }]);

    return Glide;
  }(Glide$1);

  return Glide;

}));

(function(window, factory) {
	var lazySizes = factory(window, window.document, Date);
	window.lazySizes = lazySizes;
	if(typeof module == 'object' && module.exports){
		module.exports = lazySizes;
	}
}(typeof window != 'undefined' ?
      window : {}, function l(window, document, Date) { // Pass in the windoe Date function also for SSR because the Date class can be lost
	'use strict';
	/*jshint eqnull:true */

	var lazysizes, lazySizesCfg;

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = lazySizesDefaults[prop];
			}
		}
	})();

	if (!document || !document.getElementsByClassName) {
		return {
			init: function () {},
			cfg: lazySizesCfg,
			noSupport: true,
		};
	}

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	/**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */
	var addEventListener = window[_addEventListener].bind(window);

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesCfg.throttleDelay;
		var rICTimeout = lazySizesCfg.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesCfg.ricTimeout){
					rICTimeout = lazySizesCfg.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if (!defaultExpand) {
						defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
							docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
							lazySizesCfg.expand;

						lazysizes._defEx = defaultExpand;

						preloadExpand = defaultExpand * lazySizesCfg.expFactor;
						hFac = lazySizesCfg.hFac;
						isBodyHidden = null;

						if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
							currentExpand = preloadExpand;
							lowRuns = 0;
						} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
							currentExpand = defaultExpand;
						} else {
							currentExpand = shrinkExpand;
						}
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesCfg.loadedClass);
			removeClass(elem, lazySizesCfg.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			try {
				elem.contentWindow.location.replace(src);
			} catch(e){
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

			if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesCfg.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
				src = elem[_getAttribute](lazySizesCfg.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesCfg.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesCfg.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if( !firesLoad || isLoaded){
					if (isLoaded) {
						addClass(elem, 'ls-is-cached');
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
				if (elem.loading == 'lazy') {
					isLoading--;
				}
			}, true);
		});

		var unveilElement = function (elem){
			if (elem._lazyRace) {return;}
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var afterScroll = debounce(function(){
			lazySizesCfg.loadMode = 3;
			throttledCheckElements();
		});

		var altLoadmodeScrollListner = function(){
			if(lazySizesCfg.loadMode == 3){
				lazySizesCfg.loadMode = 2;
			}
			afterScroll();
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}


			isCompleted = true;

			lazySizesCfg.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', altLoadmodeScrollListner, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				addEventListener('pageshow', function (e) {
					if (e.persisted) {
						var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

						if (loadingElements.length && loadingElements.forEach) {
							requestAnimationFrame(function () {
								loadingElements.forEach( function (img) {
									if (img.complete) {
										unveilElement(img);
									}
								});
							});
						}
					}
				});

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement,
			_aLSL: altLoadmodeScrollListner,
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i && document.getElementsByClassName){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	setTimeout(function(){
		if(lazySizesCfg.init){
			init();
		}
	});

	lazysizes = {
		cfg: lazySizesCfg,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));

(function(root, factory) {

    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.SimpleLightbox = factory();
    }

}(this, function() {

    function assign(target) {

        for (var i = 1; i < arguments.length; i++) {

            var obj = arguments[i];

            if (obj) {
                for (var key in obj) {
                    obj.hasOwnProperty(key) && (target[key] = obj[key]);
                }
            }

        }

        return target;

    }

    function addClass(element, className) {

        if (element && className) {
            element.className += ' ' + className;
        }

    }

    function removeClass(element, className) {

        if (element && className) {
            element.className = element.className.replace(
                new RegExp('(\\s|^)' + className + '(\\s|$)'), ' '
            ).trim();
        }

    }

    function parseHtml(html) {

        var div = document.createElement('div');
        div.innerHTML = html.trim();

        return div.childNodes[0];

    }

    function matches(el, selector) {

        return (el.matches || el.matchesSelector || el.msMatchesSelector).call(el, selector);

    }

    function getWindowHeight() {

        return 'innerHeight' in window
            ? window.innerHeight
            : document.documentElement.offsetHeight;

    }

    function SimpleLightbox(options) {

        this.init.apply(this, arguments);

    }

    SimpleLightbox.defaults = {

        // add custom classes to lightbox elements
        elementClass: '',
        elementLoadingClass: 'slbLoading',
        htmlClass: 'slbActive',
        closeBtnClass: '',
        nextBtnClass: '',
        prevBtnClass: '',
        loadingTextClass: '',

        // customize / localize controls captions
        closeBtnCaption: 'Close',
        nextBtnCaption: 'Next',
        prevBtnCaption: 'Previous',
        loadingCaption: 'Loading...',

        bindToItems: true, // set click event handler to trigger lightbox on provided $items
        closeOnOverlayClick: true,
        closeOnEscapeKey: true,
        nextOnImageClick: true,
        showCaptions: true,

        captionAttribute: 'title', // choose data source for library to glean image caption from
        urlAttribute: 'href', // where to expect large image

        startAt: 0, // start gallery at custom index
        loadingTimeout: 100, // time after loading element will appear

        appendTarget: 'body', // append elsewhere if needed

        beforeSetContent: null, // convenient hooks for extending library behavoiur
        beforeClose: null,
        afterClose: null,
        beforeDestroy: null,
        afterDestroy: null,

        videoRegex: new RegExp(/youtube.com|vimeo.com/) // regex which tests load url for iframe content

    };

    assign(SimpleLightbox.prototype, {

        init: function(options) {

            options = this.options = assign({}, SimpleLightbox.defaults, options);

            var self = this;
            var elements;

            if (options.$items) {
                elements = options.$items.get();
            }

            if (options.elements) {
                elements = [].slice.call(
                    typeof options.elements === 'string'
                        ? document.querySelectorAll(options.elements)
                        : options.elements
                );
            }

            this.eventRegistry = {lightbox: [], thumbnails: []};
            this.items = [];
            this.captions = [];

            if (elements) {

                elements.forEach(function(element, index) {

                    self.items.push(element.getAttribute(options.urlAttribute));
                    self.captions.push(element.getAttribute(options.captionAttribute));

                    if (options.bindToItems) {

                        self.addEvent(element, 'click', function(e) {

                            e.preventDefault();
                            self.showPosition(index);

                        }, 'thumbnails');

                    }

                });

            }

            if (options.items) {
                this.items = options.items;
            }

            if (options.captions) {
                this.captions = options.captions;
            }

        },

        addEvent: function(element, eventName, callback, scope) {

            this.eventRegistry[scope || 'lightbox'].push({
                element: element,
                eventName: eventName,
                callback: callback
            });

            element.addEventListener(eventName, callback);

            return this;

        },

        removeEvents: function(scope) {

            this.eventRegistry[scope].forEach(function(item) {
                item.element.removeEventListener(item.eventName, item.callback);
            });

            this.eventRegistry[scope] = [];

            return this;

        },

        next: function() {

            return this.showPosition(this.currentPosition + 1);

        },

        prev: function() {

            return this.showPosition(this.currentPosition - 1);

        },

        normalizePosition: function(position) {

            if (position >= this.items.length) {
                position = 0;
            } else if (position < 0) {
                position = this.items.length - 1;
            }

            return position;

        },

        showPosition: function(position) {

            var newPosition = this.normalizePosition(position);

            if (typeof this.currentPosition !== 'undefined') {
                this.direction = newPosition > this.currentPosition ? 'next' : 'prev';
            }

            this.currentPosition = newPosition;

            return this.setupLightboxHtml()
                .prepareItem(this.currentPosition, this.setContent)
                .show();

        },

        loading: function(on) {

            var self = this;
            var options = this.options;

            if (on) {

                this.loadingTimeout = setTimeout(function() {

                    addClass(self.$el, options.elementLoadingClass);

                    self.$content.innerHTML =
                        '<p class="slbLoadingText ' + options.loadingTextClass + '">' +
                            options.loadingCaption +
                        '</p>';
                    self.show();

                }, options.loadingTimeout);

            } else {

                removeClass(this.$el, options.elementLoadingClass);
                clearTimeout(this.loadingTimeout);

            }

        },

        prepareItem: function(position, callback) {

            var self = this;
            var url = this.items[position];

            this.loading(true);

            if (this.options.videoRegex.test(url)) {

                callback.call(self, parseHtml(
                    '<div class="slbIframeCont"><iframe class="slbIframe" frameborder="0" allowfullscreen src="' + url + '"></iframe></div>')
                );

            } else {

                var $imageCont = parseHtml(
                    '<div class="slbImageWrap"><img class="slbImage" src="' + url + '" /></div>'
                );

                this.$currentImage = $imageCont.querySelector('.slbImage');

                if (this.options.showCaptions && this.captions[position]) {
                    $imageCont.appendChild(parseHtml(
                        '<div class="slbCaption">' + this.captions[position] + '</div>')
                    );
                }

                this.loadImage(url, function() {

                    self.setImageDimensions();

                    callback.call(self, $imageCont);

                    self.loadImage(self.items[self.normalizePosition(self.currentPosition + 1)]);

                });

            }

            return this;

        },

        loadImage: function(url, callback) {

            if (!this.options.videoRegex.test(url)) {

                var image = new Image();
                callback && (image.onload = callback);
                image.src = url;

            }

        },

        setupLightboxHtml: function() {

            var o = this.options;

            if (!this.$el) {

                this.$el = parseHtml(
                    '<div class="slbElement ' + o.elementClass + '">' +
                        '<div class="slbOverlay"></div>' +
                        '<div class="slbWrapOuter">' +
                            '<div class="slbWrap">' +
                                '<div class="slbContentOuter">' +
                                    '<div class="slbContent"></div>' +
                                    '<button type="button" title="' + o.closeBtnCaption + '" class="slbCloseBtn ' + o.closeBtnClass + '">×</button>' +
                                    (this.items.length > 1
                                        ? '<div class="slbArrows">' +
                                             '<button type="button" title="' + o.prevBtnCaption + '" class="prev slbArrow' + o.prevBtnClass + '">' + o.prevBtnCaption + '</button>' +
                                             '<button type="button" title="' + o.nextBtnCaption + '" class="next slbArrow' + o.nextBtnClass + '">' + o.nextBtnCaption + '</button>' +
                                          '</div>'
                                        : ''
                                    ) +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>'
                );

                this.$content = this.$el.querySelector('.slbContent');

            }

            this.$content.innerHTML = '';

            return this;

        },

        show: function() {

            if (!this.modalInDom) {

                document.querySelector(this.options.appendTarget).appendChild(this.$el);
                addClass(document.documentElement, this.options.htmlClass);
                this.setupLightboxEvents();
                this.modalInDom = true;

            }

            return this;

        },

        setContent: function(content) {

            var $content = typeof content === 'string'
                ? parseHtml(content)
                : content
            ;

            this.loading(false);

            this.setupLightboxHtml();

            removeClass(this.$content, 'slbDirectionNext');
            removeClass(this.$content, 'slbDirectionPrev');

            if (this.direction) {
                addClass(this.$content, this.direction === 'next'
                    ? 'slbDirectionNext'
                    : 'slbDirectionPrev'
                );
            }

            if (this.options.beforeSetContent) {
                this.options.beforeSetContent($content, this);
            }

            this.$content.appendChild($content);

            return this;

        },

        setImageDimensions: function() {

            if (this.$currentImage) {
                this.$currentImage.style.maxHeight = getWindowHeight() + 'px';
            }

        },

        setupLightboxEvents: function() {

            var self = this;

            if (this.eventRegistry.lightbox.length) {
                return this;
            }

            this.addEvent(this.$el, 'click', function(e) {

                var $target = e.target;

                if (matches($target, '.slbCloseBtn') || (self.options.closeOnOverlayClick && matches($target, '.slbWrap'))) {

                    self.close();

                } else if (matches($target, '.slbArrow')) {

                    matches($target, '.next') ? self.next() : self.prev();

                } else if (self.options.nextOnImageClick && self.items.length > 1 && matches($target, '.slbImage')) {

                    self.next();

                }

            }).addEvent(document, 'keyup', function(e) {

                self.options.closeOnEscapeKey && e.keyCode === 27 && self.close();

                if (self.items.length > 1) {
                    (e.keyCode === 39 || e.keyCode === 68) && self.next();
                    (e.keyCode === 37 || e.keyCode === 65) && self.prev();
                }

            }).addEvent(window, 'resize', function() {

                self.setImageDimensions();

            });

            return this;

        },

        close: function() {

            if (this.modalInDom) {

                this.runHook('beforeClose');
                this.removeEvents('lightbox');
                this.$el && this.$el.parentNode.removeChild(this.$el);
                removeClass(document.documentElement, this.options.htmlClass);
                this.modalInDom = false;
                this.runHook('afterClose');

            }

            this.direction = undefined;
            this.currentPosition = this.options.startAt;

        },

        destroy: function() {

            this.close();
            this.runHook('beforeDestroy');
            this.removeEvents('thumbnails');
            this.runHook('afterDestroy');

        },

        runHook: function(name) {

            this.options[name] && this.options[name](this);

        }

    });

    SimpleLightbox.open = function(options) {

        var instance = new SimpleLightbox(options);

        return options.content
            ? instance.setContent(options.content).show()
            : instance.showPosition(instance.options.startAt);

    };

    SimpleLightbox.registerAsJqueryPlugin = function($) {

        $.fn.simpleLightbox = function(options) {

            var lightboxInstance;
            var $items = this;

            return this.each(function() {
                if (!$.data(this, 'simpleLightbox')) {
                    lightboxInstance = lightboxInstance || new SimpleLightbox($.extend({}, options, {$items: $items}));
                    $.data(this, 'simpleLightbox', lightboxInstance);
                }
            });

        };

        $.SimpleLightbox = SimpleLightbox;

    };

    if (typeof window !== 'undefined' && window.jQuery) {
        SimpleLightbox.registerAsJqueryPlugin(window.jQuery);
    }

    return SimpleLightbox;

}));

!function(root, factory) {
    "function" == typeof define && define.amd ? // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function() {
        return root.svg4everybody = factory();
    }) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});
/*!
 * pure-swipe.js - v@version@
 * Pure JavaScript swipe events
 * https://github.com/john-doherty/pure-swipe
 * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
(function (window, document) {

	'use strict';

	// patch CustomEvent to allow constructor creation (IE/Chrome) - resolved once initCustomEvent no longer exists
	if ('initCustomEvent' in document.createEvent('CustomEvent')) {

		window.CustomEvent = function (event, params) {

			params = params || { bubbles: false, cancelable: false, detail: undefined };

			var evt = document.createEvent('CustomEvent');
			evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
			return evt;
		};

		window.CustomEvent.prototype = window.Event.prototype;
	}

	document.addEventListener('touchstart', handleTouchStart, false);
	document.addEventListener('touchmove', handleTouchMove, false);
	document.addEventListener('touchend', handleTouchEnd, false);

	var xDown = null;
	var yDown = null;
	var xDiff = null;
	var yDiff = null;
	var timeDown = null;
	var startEl = null;

	function handleTouchEnd(e) {

		// if the user released on a different target, cancel!
		if (startEl !== e.target) return;

		var swipeThreshold = parseInt(startEl.getAttribute('data-swipe-threshold') || '20', 10);    // default 10px
		var swipeTimeout = parseInt(startEl.getAttribute('data-swipe-timeout') || '500', 10);      // default 1000ms
		var timeDiff = Date.now() - timeDown;
		var eventType = '';

		if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
			if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
				if (xDiff > 0) {
					eventType = 'swiped-left';
				}
				else {
					eventType = 'swiped-right';
				}
			}
		}
		else {
			if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
				if (yDiff > 0) {
					eventType = 'swiped-up';
				}
				else {
					eventType = 'swiped-down';
				}
			}
		}

		if (eventType !== '') {

			// fire event on the element that started the swipe
			startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true }));

			//if (console && console.log) console.log(eventType + ' fired on ' + startEl.tagName);
		}

		// reset values
		xDown = null;
		yDown = null;
		timeDown = null;
	}

	function handleTouchStart(e) {

		// if the element has data-swipe-ignore="true" we stop listening for swipe events
		if (e.target.getAttribute('data-swipe-ignore') === 'true') return;

		startEl = e.target;

		timeDown = Date.now();
		xDown = e.touches[0].clientX;
		yDown = e.touches[0].clientY;
		xDiff = 0;
		yDiff = 0;
	}

	function handleTouchMove(e) {

		if (!xDown || !yDown) return;

		var xUp = e.touches[0].clientX;
		var yUp = e.touches[0].clientY;

		xDiff = xDown - xUp;
		yDiff = yDown - yUp;
	}

}(this, document));
/*
 *
 * FIREMNI AJTACI
 * Author: Martin Winkler
 * url: http://www.martinwinkler.cz/
 *
 */

var sliders = [];

/****************************************************************************************************************************************************************************************
DOCUMENT READY
****************************************************************************************************************************************************************************************/

jQuery(document).ready(function($) {

/**********************************************
VARIOUS
**********************************************/

	// Scrollování ke kotvě
	$('.to-anchor').scrollToAnchor();

	// Show/hide
	$('.sh-trig').toggler();

	// Scrollspy
	$('.scrollspy').scrollSpy();

	// Tabs
	$('.tabs').liteTabs();

	// Language switcher
	$('.lng > a').on('click', function() {
		var lng = $(this).closest('.lng');

		if (!lng.hasClass('active')) {
			lng.addClass('active');
		} else {
			lng.removeClass('active');
		}
	});

	// Wrap table - responsive hack
	$('table').wrap('<div class="table-wrap"></div>');

	// FAQ
	$('.accordion .item-head').on('click', function() {
		var item = $(this).closest('.item');

		if (!item.hasClass('active')) {
			item.addClass('active');
		} else {
			item.removeClass('active');
		}
	});

	// File input txt change
  $('.custom-file-input input[type="file"]').on('change', function(e){
    $(this).closest('.wpcf7-form-control-wrap').siblings('.txt').html(e.target.files[0].name);
  });

  // Services - show items
  $('.services .item').slice(6,100).addClass('hidden');

  $('[data-purpose="show-items"]').on('click', function() {

  	// Hide btn
  	$(this).addClass('hidden');

  	// Show all items
  	var item = $('.services .item.hidden');

  	item.each(function(index,el) {
  		var itemHidden = $(this);
  		setTimeout(function() {
  			itemHidden.removeClass('hidden').addClass('animate');
  		}, 100 * index);
  	});

  	return false;
  });

    // Fixed header
    $(window).on('load scroll resize', function() {
        var scrollTop = $(window).scrollTop();
        var winW = $(window).width();

        if (scrollTop > 230 && !$('.header').hasClass('fixed')) {
            $('.header').addClass('fixed');
        } else if (scrollTop <= 155 && $('.header').hasClass('fixed')) {
            $('.header').removeClass('fixed');
        }
    });

	// Rollable footer items
	$('.foot-item .head').on('click', function() {
		var item = $(this).closest('.foot-item');

		if (!item.hasClass('active')) {
			item.addClass('active');
		} else {
			item.removeClass('active');
		}
	});

	// Header dropdown
	$('.trig-sluzby, [data-dropdown="sluzby"]').on('mouseover', function() {
		var trig = $('.trig-sluzby');
		var nav = $('[data-dropdown="sluzby"]');

		trig.addClass('active');
		nav.addClass('active');
	});

	$('.trig-sluzby, [data-dropdown="sluzby"]').on('mouseout', function() {
		var trig = $('.trig-sluzby');
		var nav = $('[data-dropdown="sluzby"]');

		trig.removeClass('active');
		nav.removeClass('active');
	});

	// Header dropdown - Produkty
	$('.menu-item-type-produkty, [data-dropdown="produkty"]').on('mouseover', function() {
		var trig = $('.menu-item-type-produkty');
		var nav = $('[data-dropdown="produkty"]');

		trig.addClass('active');
		nav.addClass('active');
	});

	$('.menu-item-type-produkty, [data-dropdown="produkty"]').on('mouseout', function() {
		var trig = $('.menu-item-type-produkty');
		var nav = $('[data-dropdown="produkty"]');

		trig.removeClass('active');
		nav.removeClass('active');
	});

	// Clients - show more
	$('.clients').each(function() {
		var items = $(this).find('.item');
		var count = items.length;

		/*if (count > 12) {
			$(this).find('.item-list').append('<a href="javascript:void(0)" class="show-more">Zobrazit více</a>')
		}*/
	});

	$('body').on('click', '.clients .show-more', function() {
		$(this).closest('.clients').addClass('active');
	});

	/**********************************************
  FIX BANNER
  **********************************************/

	$(function() {
		var cookie = 'fixBanner';

		if (ReadCookie(cookie) != 'true') {
			$('.fix-banner').addClass('active');

			$('.fix-banner a').on('click', function() {
				SetCookie(cookie, 'true', 365);
			});
		}

		$('.fix-banner .close').on('click', function() {
			$('.fix-banner').removeClass('active');
		});
	});

	/**********************************************
  FORM STYLING
  **********************************************/

  var checkbox = $('form.std input[type="checkbox"]');

  checkbox.each(function(index, element) {
    var wrapper = $(element).wrap('<div class="checker"></div>');

    $(element).on('change tickle', function() {
    	wrapper = $(this).closest('.checker');

      if (element.checked) {
        wrapper.addClass('active');
      } else {
        wrapper.removeClass('active');
      }
    });
  }).trigger('tickle');

	/**********************************************
	MODAL BOX
	**********************************************/

  $(function() {
    var trigger = $('.modal-trigger');
    var close = $('.modal-close');

    trigger.each(function(index, element) {
      var id = element.hash;
      var modal = $(id);

      $(element).on('click', function() {
        modal.addClass('active');
        $('body').addClass('modal-opened');
      });
    });

    // Close link
    close.on('click', function() {
      $('.modal').removeClass('active');
      $('body').removeClass('modal-opened');
    });

    // Overlay click
    $(window).on('click', function(e) {
      $('.modal-box-wrap').each(function(index, element) {
        if (e.target === element) {
          $('.modal').removeClass('active');
          $('body').removeClass('modal-opened');
        }
      });
    });

    // Escape close
    $(window).on('keyup', function(e) {
      if (e.keyCode === 27) {
        $('.modal').removeClass('active');
        $('body').removeClass('modal-opened');
      }
    });
  });

	/**********************************************
	AJAX FORM
	**********************************************/

	var ajaxContent = $("#form-ajax-content");
	var siteUrl = window.location.href;

	$('body').on('change','.form-ajax input, .form-ajax select', function(e) {
		var parameters = $(this).closest('form').serialize(); // Get form parameters
		var url = window.location.pathname + '?' + parameters;

		window.history.replaceState(null, null, url); // Change url

		if (!url) {
			return;
		}
		url = url + " #form-ajax-content > .inner";
		ajaxContent.addClass('loading').load(url, function() {
			ajaxContent.removeClass('loading');

			$(window).trigger('filterLoad');
		});
	});

	/**********************************************
	CONTACT FORM 7
	**********************************************/

	// Nascrolluje na chybovou hlášku
	document.addEventListener('wpcf7invalid', function(event) {
	  if (!$('.modal.active').length > 0) {
	  	$('html:not(:animated),body:not(:animated)').animate({ scrollTop: $('.wpcf7-form').offset().top - 20 - $('.header').height() }, 1000 );
		}
	}, false );

  // Nascrolluje na success hlášku
  document.addEventListener('wpcf7mailsent', function(event) {
	  if (!$('.modal.active').length > 0) {
	  	$('html:not(:animated),body:not(:animated)').animate({ scrollTop: $('.wpcf7-form').offset().top - 20 - $('.header').height() }, 1000 );
		}
	}, false );

  // CF7 redirect
	document.addEventListener('wpcf7mailsent', function(event) {
	  location = 'https://www.firemniajtaci.cz/zprava-byla-uspesne-odeslana/';
	}, false );

	/**********************************************
	FIXER
	**********************************************/

	$(window).on('load scroll', function() {
		if ($('.fixer').length) {
			$('.fixer-start').each(function() {
				var scrollTop = $(window).scrollTop();
				var winH = $(window).height();
				var fixElWrapper = $(this);
				var fixEl = fixElWrapper.find('.fixer');
				var offset = 0;
				if (fixEl.attr('data-offset')) {
					var offset = fixEl.data('offset');
				}

				var fixElWrapperTop = fixElWrapper.offset().top + offset;

				var fixElHeight = fixEl.height();
				var end = $('.fixer-end').height() + $('.fixer-end').offset().top - fixEl.height();

				// Top panel
				if (scrollTop > fixElWrapperTop) {
					fixEl.addClass('fixed');

					// Hide in the end
					if (scrollTop > end) {
						fixEl.fadeOut();
					}
					else {
						fixEl.fadeIn();
					}
				}
				else {
					fixEl.removeClass('fixed');
				}
			});
		}
	});

	/**********************************************
	MOBILE NAV
	**********************************************/

	$(function() {
		var body              = $('body');
	  var mobileNav         = $('.mobile-nav');
	  var mobileNavOverlay  = $('.mobile-nav-overlay');

	  function showNav() {
	    body.addClass('mobile-nav-opened');
	  }

	  function hideNav() {
	    body.removeClass('mobile-nav-opened');
	  }

	  // Navigation button
	  $('.nav-btn').on('click', function(e) {
	    if (!body.hasClass('mobile-nav-opened')) {
	      showNav();
	    }
	    else {
	      hideNav();
	    }
	    return false;
	  });

	  // Mobile nav overlay close
	  $('.mobile-nav-overlay').on('click', function(e) {
	    hideNav();
	  });

	  $('.mobile-nav li a').each(function(e) {
	    if ($(this).siblings('ul').length > 0) {
	      $(this).append('<span class="more"></span>');
	    }
	  });

	  // Mobile nav accordion
	  $('.mobile-nav li .more').on('click', function(e) {
	    var link = $(this).closest('a');
	    var ul = link.siblings('ul');

	    if (ul.length > 0) {
	      if (!ul.hasClass('active')) {
	        link.addClass('active');
	        ul.addClass('active');
	      } else {
	        link.removeClass('active');
	        ul.removeClass('active');
	      }
	      return false;
	    }
	  });
	});

	/**********************************************
	RESIZE END / SCROLL END
	**********************************************/

	var resizeEnd;
	$(window).on('resize', function() {
		clearTimeout(resizeEnd);
		resizeEnd = setTimeout(function() {
			$(window).trigger('resizeEnd');
		}, 100);
	});

	var scrollEnd;
	$(window).on('scroll', function() {
		clearTimeout(scrollEnd);
		scrollEnd = setTimeout(function() {
			$(window).trigger('scrollEnd');
		}, 100);
	});

	/**********************************************
  SIMPLE LIGHTBOX
  **********************************************/

  // Simple lightbox
	var lightbox = new SimpleLightbox({
	  elements: ".fancybox, a[href$='.jpg'], a[href$='.jpeg'], a[href$='.webp'], a[href$='.png'], a[href$='.gif'], [data-fancybox='gallery']"
	});

	var videolightbox = new SimpleLightbox({
	  elements: "[data-purpose='play']"
	});

	// Swipe
	document.addEventListener('swiped-left', function(e) {
	  if ($('html.slbActive').length > 0) {
	    lightbox.next();
	  }
	});

	document.addEventListener('swiped-right', function(e) {
	  if ($('html.slbActive').length > 0) {
	    lightbox.prev();
	  }
	});

	/**********************************************
	GLIDE
	**********************************************/

	// Case slider
  if (document.querySelector('.case-slider')) {
    var caseSlider = new Glide('.case-slider', {
      type: 'carousel',
      startAt: 0,
      perView: 2,
      //perSwipe: '|',
      //focusAt: 'center',
      animationDuration: 1000,
      gap: 30,
      swipeThreshold: true,
      dragThreshold: false,
      autoplay: 0,
      breakpoints: {
        991: {
          perView: 1
        },
        767: {
          perView: 2
        },
        575: {
          perView: 1
        }
      }
    });

    var nextButton = document.querySelector('.case-studies .next');
    var prevButton = document.querySelector('.case-studies .prev');

    nextButton.addEventListener('click', function (event) {
      event.preventDefault();

      caseSlider.go('>');
    });

    prevButton.addEventListener('click', function (event) {
      event.preventDefault();

      caseSlider.go('<');
    });

    caseSlider.mount();
  }

  // Offer slider
  if (document.querySelector('.offer-slider')) {
    var offerSlider = new Glide('.offer-slider', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      //perSwipe: '|',
      //focusAt: 'center',
      animationDuration: 1000,
      gap: 40,
      swipeThreshold: true,
      dragThreshold: false,
      autoplay: 0,
      breakpoints: {
        991: {
          perView: 2,
          gap: 30
        },
        767: {
          perView: 2,
          gap: 20
        },
        575: {
          perView: 1
        }
      }
    });

    var nextButton = document.querySelector('.offer .next');
    var prevButton = document.querySelector('.offer .prev');

    nextButton.addEventListener('click', function (event) {
      event.preventDefault();

      offerSlider.go('>');
    });

    prevButton.addEventListener('click', function (event) {
      event.preventDefault();

      offerSlider.go('<');
    });

    offerSlider.mount();

    // Hide nav
	  $(window).on('load resize', function() {
	  	var perView = offerSlider.settings.perView;
	  	var currentSlides = $('.offer-slider .panel:not(.glide__slide--clone)').length;

	  	//console.log(perView);
	  	//console.log(currentSlides);

	  	if (perView >= currentSlides) {
	  		$('.offer').addClass('hide-nav');
	  	} else {
	  		$('.offer').removeClass('hide-nav');
	  	}
	  });
  }

	// Item slider
	if ($('.item-slider').length > 0) {

		$('.item-slider').each(function() {
			var el = $(this);
			var id = el.attr('id');
			sliders[id] = [];

			el.attr('data-slides') ? sliders[id]['slideNum'] = el.attr('data-slides') : sliders[id]['slideNum'] = 1;
			el.attr('data-slides-desktop') ? sliders[id]['slideNumDesktop'] = el.attr('data-slides-desktop') : sliders[id]['slideNumDesktop'] = sliders[id]['slideNum'];
			el.attr('data-slides-tablet') ? sliders[id]['slideNumTablet'] = el.attr('data-slides-tablet') : sliders[id]['slideNumTablet'] = sliders[id]['slideNumDesktop'];
			el.attr('data-slides-phablet') ? sliders[id]['slideNumPhablet'] = el.attr('data-slides-phablet') : sliders[id]['slideNumPhablet'] = sliders[id]['slideNumTablet'];
			el.attr('data-slides-mobile') ? sliders[id]['slideNumMobile'] = el.attr('data-slides-mobile') : sliders[id]['slideNumMobile'] = sliders[id]['slideNumPhablet'];

			el.attr('data-focus') ? sliders[id]['slideFocus'] = el.attr('data-focus') : sliders[id]['slideFocus'] = 'center';
			el.attr('data-focus-desktop') ? sliders[id]['slideFocusDesktop'] = el.attr('data-focus-desktop') : sliders[id]['slideFocusDesktop'] = sliders[id]['slideFocus'];
			el.attr('data-focus-tablet') ? sliders[id]['slideFocusTablet'] = el.attr('data-focus-tablet') : sliders[id]['slideFocusTablet'] = sliders[id]['slideFocusDesktop'];
			el.attr('data-focus-phablet') ? sliders[id]['slideFocusPhablet'] = el.attr('data-focus-phablet') : sliders[id]['slideFocusPhablet'] = sliders[id]['slideFocusTablet'];
			el.attr('data-focus-mobile') ? sliders[id]['slideFocusMobile'] = el.attr('data-focus-mobile') : sliders[id]['slideFocusMobile'] = sliders[id]['slideFocusPhablet'];

			el.attr('data-gap') ? sliders[id]['slideGap'] = el.attr('data-gap') : sliders[id]['slideGap'] = 0;

			sliders[id] = new Glide('#' + id, {
		    type: 'carousel',
		    startAt: 0,
		    perView: sliders[id]['slideNum'],
		    focusAt: sliders[id]['slideFocus'],
		    gap: sliders[id]['slideGap'],
		    swipeThreshold: true,
		    dragThreshold: false,
		    breakpoints: {
		      1199: {
		        perView: sliders[id]['slideNumDesktop'],
		        focusAt: sliders[id]['slideFocusDesktop'],
		      },
		      991: {
		        perView: sliders[id]['slideNumTablet'],
		        focusAt: sliders[id]['slideFocusTablet']
		      },
		      767: {
		        perView: sliders[id]['slideNumPhablet'],
		        focusAt: sliders[id]['slideFocusPhablet']
		      },
		      575: {
		      	perView: sliders[id]['slideNumMobile'],
		        focusAt: sliders[id]['slideFocusMobile']
		      }
		    }
		  }).mount()
		});
	}

});

/****************************************************************************************************************************************************************************************
FUNCTIONS
****************************************************************************************************************************************************************************************/

// Scrollspy
(function($) {
	$.fn.scrollSpy = function (settings) {
		settings = jQuery.extend({
			showSpeed: 100,
			callback: function() {}
		}, settings);

		var topMenu = $(this);

		if (topMenu.length) {
			// Cache selectors
			var lastId,
				topMenuHeight = topMenu.outerHeight(),

				// All list items
				menuItems = topMenu.find("a"),

				// Anchors corresponding to menu items
				scrollItems = menuItems.map(function(){
					var item = $( $(this).attr("href") );
					if (item.length) { return item; }
				});

			// Bind to scroll
			$(window).on('load scroll', function(){
				// Get container scroll position
				var fromTop = $(this).scrollTop() + topMenuHeight + 50;

				// Get id of current scroll item
				var cur = scrollItems.map(function(){
					if ($(this).offset().top < fromTop)
					return this;
				});
				// Get the id of the current element
				cur = cur[cur.length-1];
				var id = cur && cur.length ? cur[0].id : "";

				if (lastId !== id) {
					lastId = id;
					// Set/remove active class
					menuItems
					.parent().removeClass("active")
					.end().filter("[href*=\\#" + id + "]").parent().addClass("active");
				}
			});
		}
	}
})(jQuery);

// Univerzální show/hide
(function($) {
	$.fn.toggler = function (settings) {

		settings = jQuery.extend({
			showSpeed: 100,
			hideSpeed: 100,
			hideTrigger: false,
			slide: false,
			scrollToContent: false,
			offsetScroll: 0,
			hideOnDocumentClick: false,
			documentClickElement: '',
			hideOnEscape: false
		}, settings);

		$(this).each(function(index,value) {

			var trigger = $(this);
			var content = $('#' + trigger.data('content'));

			// Radio nebo checkbox
			if ( trigger.is(':radio') || trigger.is(':checkbox') ) {
				var name = trigger.attr('name');

				$('[name=' + name + ']').on('change', function() {
					content.hide();
				});
				trigger.on('change', function() {
					if ( $(this).is(':checked') ) {
						content.fadeIn(settings.showSpeed);
					}
					else {
						content.hide();
					}
				});
				$(window).on('load',function() {
					if ( trigger.is(':checked') ) {
						content.fadeIn(settings.showSpeed);
					}
				});
			}
			// Standardní element
			else {
				function scrollToContent() {
					var offset = 0;
					if ( settings.offsetScroll ) {
						offset = settings.offsetScroll
					}
					$("html:not(:animated),body:not(:animated)").animate({ scrollTop: $(content).offset().top + offset }, 500);
				}

				function scrollToTrigger() {
					var offset = 0;
					if ( settings.offsetScroll ) {
						offset = settings.offsetScroll + 200
					}
					$("html:not(:animated),body:not(:animated)").animate({ scrollTop: $('[data-content=' + trigger.attr('data-content') + ']').offset().top + offset }, 500);
				}

				trigger.on('click',function(event) {
					if ( content.is(':hidden') ) {
						if ( settings.slide ) {
							content.slideDown(settings.showSpeed,function() {
								if ( settings.scrollToContent ) {
									scrollToContent();
								};
							});
						}
						else {
							content.fadeIn(settings.showSpeed,function() {
								if ( settings.scrollToContent ) {
									scrollToContent();
								};
							});
						}

						$(this).addClass('active').find('.text').text( $(this).attr('data-less') );

						if ( settings.hideTrigger ) {
							trigger.hide();
						}
					}
					else {
						if ( settings.slide ) {
							content.slideUp(settings.hideSpeed,function() {
								if ( settings.scrollToContent ) {
									scrollToTrigger();
								};
							});
						}
						else {
							content.fadeOut(settings.hideSpeed,function() {
								if ( settings.scrollToContent ) {
									scrollToTrigger();
								};
							});
						}
						$(this).removeClass('active').find('.text').text( $(this).attr('data-more') );

						if ( settings.hideTrigger ) {
							$('[data-content=' + trigger.attr('data-content') + ']').fadeIn(settings.hideSpeed);
						}
					}
					event.preventDefault();
					//return false;
				});
			}
			// Hide on document click
			if ( settings.hideOnDocumentClick || trigger.attr('data-hideonclick') == 'true' ) {
				$(document).on('click', function(e) {
					if ( (! $(settings.documentClickElement).is(e.target) && $(settings.documentClickElement).has(e.target).length === 0) && ( ! trigger.is(e.target) && trigger.has(e.target).length === 0 ) )  {
						content.fadeOut();
						trigger.removeClass('active');
					}
				});
			}
			// Escape button
			if ( settings.hideOnEscape ) {
				$(document).keyup(function(e){
					if (e.keyCode === 27) {
						content.fadeOut();
						trigger.removeClass('active');
					}
				});
			}
		});
	}
})(jQuery);

// Plynulý scroll ke kotvě
(function($) {
	$.fn.scrollToAnchor = function(settings) {

		settings = jQuery.extend({
			speed : 750
		}, settings);

		return this.each(function(){
			var caller = this
			$(caller).click(function (event) {
				event.preventDefault()
				var locationHref = window.location.href;
				var elementClick = $(caller).attr("href");

				var offset = 0;
				if ($('.header.fixed').length > 0) {
					offset = offset + $('.header.fixed').height();
				}
				if ($('.notification-bar').length > 0) {
					offset = offset + $('.notification-bar').height();
				}

				var destination = $(elementClick).offset().top - offset;

				$("html:not(:animated),body:not(:animated)").animate({
						scrollTop: destination
					}, {
				  	duration: settings.speed,
				  	//easing: "easeInOutQuint",
				  	complete: function() {
							history.pushState(null, null, elementClick);

							var offset = 0;
							if ($('.header.fixed').length > 0) {
								offset = offset + $('.header.fixed').height();
							}
							if ($('.notification-bar').length > 0) {
								offset = offset + $('.notification-bar').height();
							}

							$("html:not(:animated),body:not(:animated)").animate({
									scrollTop: $(elementClick).offset().top - offset
								}, {
									duration: settings.speed
							});
						}
					}
				);
				return false;
			});
		});
	}
})(jQuery);

// Lite tabs
(function($) {
	$.fn.liteTabs = function(options) {
    return this.each(function() {
  		var defaults = {
  			fadeIn 			: false,
  			height 			: 'auto',
  			hideHash 		: false,
  			hashTag 		: true,
  			selectedTab : 1,
  			width 			: 500
  		};

  		// Merge defaults with options in new settings object
  		var settings = $.extend({}, defaults, options);

  		// Define key variables
  		var $this = $(this);
  		var $ul = $this.find('.tab-nav ul');
  		var $tab = $ul.find('a');
  		var $div = $this.find('.tab-content').first().find('.tab');

			// Tab click
			$tab.click(function(e) {
				var hash = this.hash;
				var id = hash.replace('#','');
				var selectedPanel = $div.filter('[id="' + id + '"]');
				var filterHash = $div.removeClass('selected').filter('[id="' + id + '"]');

				// defaults: add selected class to tab
				$tab.removeClass('selected').filter(this).addClass('selected');

				// Rodičovská záložka zůstane otevřená při kliku na vnořené záložky v záložce
				var parentId = $tab.filter(this).closest('.tab').attr('id');

				$('.tab[id="' + parentId + '"]').addClass('selected');
				$('.tab-nav a[href="' + parentId + '"]').addClass('selected');

				if ($tab.parents('.tabs').length > 1 ) {
					e.preventDefault();
				}

				// Show panel
				filterHash.addClass('selected');

				// Option: hide hash change
				if (settings.hideHash) {
					e.preventDefault();
				}

				return false;
			});

			// Option: set selected tab
			if (settings.selectedTab) {
			 	$tab.eq(settings.selectedTab - 1).addClass('selected');
			 	$div.eq(settings.selectedTab - 1).addClass('selected');
			}

			// If hash tag..
			var hash = window.location.hash.substring(1);
			$('[href="#' + hash + '"]').click();
    });
	};
})(jQuery);

// Exit intent
(function ($) {
	'use strict';

	var timer;

	function trackLeave(ev) {
		if (ev.clientY > 0) {
			return;
		}

		if (timer) {
			clearTimeout(timer);
		}

		if ($.exitIntent.settings.sensitivity <= 0) {
			$.event.trigger('exitintent');
			return;
		}

		timer = setTimeout(
			function() {
				timer = null;
				$.event.trigger('exitintent');
			}, $.exitIntent.settings.sensitivity);
	}

	function trackEnter() {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
	}

	$.exitIntent = function(enable, options) {
		$.exitIntent.settings = $.extend($.exitIntent.settings, options);

		if (enable == 'enable') {
			$(window).mouseleave(trackLeave);
			$(window).mouseenter(trackEnter);
		} else if (enable == 'disable') {
			trackEnter(); // Turn off any outstanding timer
			$(window).unbind('mouseleave', trackLeave);
			$(window).unbind('mouseenter', trackEnter);
		} else {
			throw "Invalid parameter to jQuery.exitIntent -- should be 'enable'/'disable'";
		}
	}

	$.exitIntent.settings = {
		'sensitivity': 300
	};
})(jQuery);

// Cookies
function ReadCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

function SetCookie(name, value, days) {
  var d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function DeleteCookie(name) {
  setCookie(name, '', -1);
}