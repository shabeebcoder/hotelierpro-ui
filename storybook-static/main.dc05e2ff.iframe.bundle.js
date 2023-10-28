(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        './.storybook/preview.js-generated-config-entry.js': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            var preview_namespaceObject = {};
            __webpack_require__.r(preview_namespaceObject),
                __webpack_require__.d(
                    preview_namespaceObject,
                    'parameters',
                    function () {
                        return parameters;
                    }
                );
            __webpack_require__(
                './node_modules/core-js/modules/es.object.keys.js'
            ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.symbol.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.array.filter.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.object.get-own-property-descriptor.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.array.for-each.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/web.dom-collections.for-each.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.object.get-own-property-descriptors.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.object.define-properties.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.object.define-property.js'
                );
            var ClientApi = __webpack_require__(
                    './node_modules/@storybook/client-api/dist/esm/ClientApi.js'
                ),
                parameters = {
                    actions: { argTypesRegex: '^on[A-Z].*' },
                    controls: {
                        matchers: {
                            color: /(background|color)$/i,
                            date: /Date$/,
                        },
                    },
                };
            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    enumerableOnly &&
                        (symbols = symbols.filter(function (sym) {
                            return Object.getOwnPropertyDescriptor(
                                object,
                                sym
                            ).enumerable;
                        })),
                        keys.push.apply(keys, symbols);
                }
                return keys;
            }
            function _defineProperty(obj, key, value) {
                return (
                    key in obj
                        ? Object.defineProperty(obj, key, {
                              value: value,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (obj[key] = value),
                    obj
                );
            }
            Object.keys(preview_namespaceObject).forEach(function (key) {
                var value = preview_namespaceObject[key];
                switch (key) {
                    case 'args':
                        return Object(ClientApi.d)(value);
                    case 'argTypes':
                        return Object(ClientApi.b)(value);
                    case 'decorators':
                        return value.forEach(function (decorator) {
                            return Object(ClientApi.f)(decorator, !1);
                        });
                    case 'loaders':
                        return value.forEach(function (loader) {
                            return Object(ClientApi.g)(loader, !1);
                        });
                    case 'parameters':
                        return Object(ClientApi.h)(
                            (function _objectSpread(target) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source =
                                        null != arguments[i]
                                            ? arguments[i]
                                            : {};
                                    i % 2
                                        ? ownKeys(Object(source), !0).forEach(
                                              function (key) {
                                                  _defineProperty(
                                                      target,
                                                      key,
                                                      source[key]
                                                  );
                                              }
                                          )
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              target,
                                              Object.getOwnPropertyDescriptors(
                                                  source
                                              )
                                          )
                                        : ownKeys(Object(source)).forEach(
                                              function (key) {
                                                  Object.defineProperty(
                                                      target,
                                                      key,
                                                      Object.getOwnPropertyDescriptor(
                                                          source,
                                                          key
                                                      )
                                                  );
                                              }
                                          );
                                }
                                return target;
                            })({}, value),
                            !1
                        );
                    case 'argTypesEnhancers':
                        return value.forEach(function (enhancer) {
                            return Object(ClientApi.c)(enhancer);
                        });
                    case 'argsEnhancers':
                        return value.forEach(function (enhancer) {
                            return Object(ClientApi.e)(enhancer);
                        });
                    case 'render':
                        return Object(ClientApi.i)(value);
                    case 'globals':
                    case 'globalTypes':
                        var v = {};
                        return (v[key] = value), Object(ClientApi.h)(v, !1);
                    case '__namedExportsOrder':
                    case 'decorateStory':
                    case 'renderToDOM':
                        return null;
                    default:
                        return console.log(key + ' was not supported :( !');
                }
            });
        },
        './generated-stories-entry.js': function (
            module,
            exports,
            __webpack_require__
        ) {
            'use strict';
            (function (module) {
                (0,
                __webpack_require__(
                    './node_modules/@storybook/react/dist/esm/client/index.js'
                ).configure)(
                    [
                        __webpack_require__(
                            './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$'
                        ),
                        __webpack_require__(
                            './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$'
                        ),
                    ],
                    module,
                    !1
                );
            }).call(
                this,
                __webpack_require__('./node_modules/webpack/buildin/module.js')(
                    module
                )
            );
        },
        './node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/Pages/styles.css':
            function (module, exports, __webpack_require__) {
                (exports = __webpack_require__(
                    './node_modules/css-loader/dist/runtime/api.js'
                )(!1)).push([
                    module.i,
                    "/* @import 'antd/dist/reset.css'; */\n\n@media (max-width:500px) {\n    .headerMenu {\n        display: none;\n    }\n}\n\n@media (min-width:500px) {\n    .menuIcon {\n        display: none;\n    }\n}",
                    '',
                ]),
                    (module.exports = exports);
            },
        './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$':
            function (module, exports, __webpack_require__) {
                var map = {
                    './Breadcrumb/breadcrumb.stories.tsx':
                        './src/Breadcrumb/breadcrumb.stories.tsx',
                    './Buttons/Button.stories.tsx':
                        './src/Buttons/Button.stories.tsx',
                    './Checkbox/checkbox.stories.tsx':
                        './src/Checkbox/checkbox.stories.tsx',
                    './ComponentConfig/pageComponentConfig.stories.tsx':
                        './src/ComponentConfig/pageComponentConfig.stories.tsx',
                    './Divider/divider.stories.tsx':
                        './src/Divider/divider.stories.tsx',
                    './Input/input.stories.tsx':
                        './src/Input/input.stories.tsx',
                    './Pages/startPage.stories.tsx':
                        './src/Pages/startPage.stories.tsx',
                    './ProcessTracker/processTracker.stories.tsx':
                        './src/ProcessTracker/processTracker.stories.tsx',
                    './Radio/radio.stories.tsx':
                        './src/Radio/radio.stories.tsx',
                    './Tables/tables.stories.tsx':
                        './src/Tables/tables.stories.tsx',
                    './TestComponent/TestComponent.stories.tsx':
                        './src/TestComponent/TestComponent.stories.tsx',
                    './Typography/typography.stories.tsx':
                        './src/Typography/typography.stories.tsx',
                };
                function webpackContext(req) {
                    var id = webpackContextResolve(req);
                    return __webpack_require__(id);
                }
                function webpackContextResolve(req) {
                    if (!__webpack_require__.o(map, req)) {
                        var e = new Error("Cannot find module '" + req + "'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    }
                    return map[req];
                }
                (webpackContext.keys = function webpackContextKeys() {
                    return Object.keys(map);
                }),
                    (webpackContext.resolve = webpackContextResolve),
                    (module.exports = webpackContext),
                    (webpackContext.id =
                        './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$');
            },
        './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$':
            function (module, exports) {
                function webpackEmptyContext(req) {
                    var e = new Error("Cannot find module '" + req + "'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                }
                (webpackEmptyContext.keys = function () {
                    return [];
                }),
                    (webpackEmptyContext.resolve = webpackEmptyContext),
                    (module.exports = webpackEmptyContext),
                    (webpackEmptyContext.id =
                        './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$');
            },
        './src/Breadcrumb/breadcrumb.stories.tsx': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Breadcrumbs',
                    function () {
                        return breadcrumb_stories_Breadcrumbs;
                    }
                );
            __webpack_require__(
                './node_modules/core-js/modules/es.object.assign.js'
            ),
                __webpack_require__('./node_modules/react/index.js');
            var es_breadcrumb = __webpack_require__(
                    './node_modules/antd/es/breadcrumb/index.js'
                ),
                jsx_runtime = __webpack_require__(
                    './node_modules/react/jsx-runtime.js'
                );
            function _uid(props) {
                return Object(jsx_runtime.jsx)(
                    es_breadcrumb.a,
                    Object.assign({}, props)
                );
            }
            _uid.displayName = 'breadcrumb';
            try {
                (breadcrumb.displayName = 'breadcrumb'),
                    (breadcrumb.__docgenInfo = {
                        description: '',
                        displayName: 'breadcrumb',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Breadcrumb/breadcrumb.tsx#breadcrumb'
                        ] = {
                            docgenInfo: breadcrumb.__docgenInfo,
                            name: 'breadcrumb',
                            path: 'src/Breadcrumb/breadcrumb.tsx#breadcrumb',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            __webpack_exports__.default = { title: 'Breadcrumbs' };
            var breadcrumb_stories_Breadcrumbs = function Breadcrumbs(args) {
                return Object(jsx_runtime.jsx)(_uid, Object.assign({}, args));
            };
            (breadcrumb_stories_Breadcrumbs.displayName = 'Breadcrumbs'),
                (breadcrumb_stories_Breadcrumbs.args = {
                    items: [
                        { title: 'Home' },
                        {
                            title: Object(jsx_runtime.jsx)('a', {
                                href: '',
                                children: 'Application Center',
                            }),
                        },
                        {
                            title: Object(jsx_runtime.jsx)('a', {
                                href: '',
                                children: 'Application List',
                            }),
                        },
                        { title: 'An Application' },
                    ],
                }),
                (breadcrumb_stories_Breadcrumbs.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <Breadcrumb {...args} />',
                        },
                    },
                    breadcrumb_stories_Breadcrumbs.parameters
                ));
            try {
                (breadcrumb_stories_Breadcrumbs.displayName = 'Breadcrumbs'),
                    (breadcrumb_stories_Breadcrumbs.__docgenInfo = {
                        description: '',
                        displayName: 'Breadcrumbs',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Breadcrumb/breadcrumb.stories.tsx#Breadcrumbs'
                        ] = {
                            docgenInfo:
                                breadcrumb_stories_Breadcrumbs.__docgenInfo,
                            name: 'Breadcrumbs',
                            path: 'src/Breadcrumb/breadcrumb.stories.tsx#Breadcrumbs',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/Buttons/Button.stories.tsx': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Primary',
                    function () {
                        return Button_stories_Primary;
                    }
                ),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Default',
                    function () {
                        return Button_stories_Default;
                    }
                ),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Dashed',
                    function () {
                        return Button_stories_Dashed;
                    }
                ),
                __webpack_require__.d(__webpack_exports__, 'Text', function () {
                    return Button_stories_Text;
                }),
                __webpack_require__.d(__webpack_exports__, 'Link', function () {
                    return Button_stories_Link;
                });
            __webpack_require__(
                './node_modules/core-js/modules/es.object.assign.js'
            ),
                __webpack_require__('./node_modules/react/index.js'),
                __webpack_require__(
                    './node_modules/core-js/modules/es.object.keys.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.array.index-of.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.symbol.js'
                );
            var space = __webpack_require__(
                    './node_modules/antd/es/space/index.js'
                ),
                es_button = __webpack_require__(
                    './node_modules/antd/es/button/index.js'
                ),
                jsx_runtime = __webpack_require__(
                    './node_modules/react/jsx-runtime.js'
                ),
                _excluded = ['children'];
            function _objectWithoutProperties(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = (function _objectWithoutPropertiesLoose(
                        source,
                        excluded
                    ) {
                        if (null == source) return {};
                        var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source);
                        for (i = 0; i < sourceKeys.length; i++)
                            (key = sourceKeys[i]),
                                excluded.indexOf(key) >= 0 ||
                                    (target[key] = source[key]);
                        return target;
                    })(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        (key = sourceSymbolKeys[i]),
                            excluded.indexOf(key) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    source,
                                    key
                                ) &&
                                    (target[key] = source[key]));
                }
                return target;
            }
            function _uid(_ref) {
                var children = _ref.children,
                    props = _objectWithoutProperties(_ref, _excluded);
                return Object(jsx_runtime.jsx)(space.b, {
                    wrap: !0,
                    children: Object(jsx_runtime.jsx)(
                        es_button.a,
                        Object.assign({ style: props.style }, props, {
                            children: children,
                        })
                    ),
                });
            }
            _uid.displayName = 'Button';
            try {
                (Button.displayName = 'Button'),
                    (Button.__docgenInfo = {
                        description: '',
                        displayName: 'Button',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Buttons/Button.tsx#Button'
                        ] = {
                            docgenInfo: Button.__docgenInfo,
                            name: 'Button',
                            path: 'src/Buttons/Button.tsx#Button',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            __webpack_exports__.default = { title: 'Buttons' };
            var Button_stories_Primary = function Primary(args) {
                return Object(jsx_runtime.jsx)(_uid, Object.assign({}, args));
            };
            (Button_stories_Primary.displayName = 'Primary'),
                (Button_stories_Primary.args = {
                    children: 'Primary Button',
                    type: 'default',
                    style: { backgroundColor: '#3A7jC7C', color: 'white' },
                });
            var Button_stories_Default = function Default(args) {
                return Object(jsx_runtime.jsx)(_uid, Object.assign({}, args));
            };
            (Button_stories_Default.displayName = 'Default'),
                (Button_stories_Default.args = {
                    children: 'Primary Button',
                    type: 'default',
                });
            var Button_stories_Dashed = function Dashed(args) {
                return Object(jsx_runtime.jsx)(_uid, Object.assign({}, args));
            };
            (Button_stories_Dashed.displayName = 'Dashed'),
                (Button_stories_Dashed.args = {
                    children: 'Dashed Button',
                    type: 'dashed',
                });
            var Button_stories_Text = function Text(args) {
                return Object(jsx_runtime.jsx)(_uid, Object.assign({}, args));
            };
            (Button_stories_Text.displayName = 'Text'),
                (Button_stories_Text.args = {
                    children: 'Text Button',
                    type: 'text',
                });
            var Button_stories_Link = function Link(args) {
                return Object(jsx_runtime.jsx)(_uid, Object.assign({}, args));
            };
            (Button_stories_Link.displayName = 'Link'),
                (Button_stories_Link.args = {
                    children: 'Link Button',
                    type: 'link',
                }),
                (Button_stories_Primary.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <Buttons {...args} />',
                        },
                    },
                    Button_stories_Primary.parameters
                )),
                (Button_stories_Default.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <Buttons {...args} />',
                        },
                    },
                    Button_stories_Default.parameters
                )),
                (Button_stories_Dashed.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <Buttons {...args} />',
                        },
                    },
                    Button_stories_Dashed.parameters
                )),
                (Button_stories_Text.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <Buttons {...args} />',
                        },
                    },
                    Button_stories_Text.parameters
                )),
                (Button_stories_Link.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <Buttons {...args} />',
                        },
                    },
                    Button_stories_Link.parameters
                ));
            try {
                (Button_stories_Primary.displayName = 'Primary'),
                    (Button_stories_Primary.__docgenInfo = {
                        description: '',
                        displayName: 'Primary',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Buttons/Button.stories.tsx#Primary'
                        ] = {
                            docgenInfo: Button_stories_Primary.__docgenInfo,
                            name: 'Primary',
                            path: 'src/Buttons/Button.stories.tsx#Primary',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (Button_stories_Default.displayName = 'Default'),
                    (Button_stories_Default.__docgenInfo = {
                        description: '',
                        displayName: 'Default',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Buttons/Button.stories.tsx#Default'
                        ] = {
                            docgenInfo: Button_stories_Default.__docgenInfo,
                            name: 'Default',
                            path: 'src/Buttons/Button.stories.tsx#Default',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (Button_stories_Dashed.displayName = 'Dashed'),
                    (Button_stories_Dashed.__docgenInfo = {
                        description: '',
                        displayName: 'Dashed',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Buttons/Button.stories.tsx#Dashed'
                        ] = {
                            docgenInfo: Button_stories_Dashed.__docgenInfo,
                            name: 'Dashed',
                            path: 'src/Buttons/Button.stories.tsx#Dashed',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (Button_stories_Text.displayName = 'Text'),
                    (Button_stories_Text.__docgenInfo = {
                        description: '',
                        displayName: 'Text',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Buttons/Button.stories.tsx#Text'
                        ] = {
                            docgenInfo: Button_stories_Text.__docgenInfo,
                            name: 'Text',
                            path: 'src/Buttons/Button.stories.tsx#Text',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (Button_stories_Link.displayName = 'Link'),
                    (Button_stories_Link.__docgenInfo = {
                        description: '',
                        displayName: 'Link',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Buttons/Button.stories.tsx#Link'
                        ] = {
                            docgenInfo: Button_stories_Link.__docgenInfo,
                            name: 'Link',
                            path: 'src/Buttons/Button.stories.tsx#Link',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/Checkbox/checkbox.stories.tsx': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Basic',
                    function () {
                        return checkbox_stories_Basic;
                    }
                );
            __webpack_require__(
                './node_modules/core-js/modules/es.object.assign.js'
            ),
                __webpack_require__('./node_modules/react/index.js');
            var es_checkbox = __webpack_require__(
                    './node_modules/antd/es/checkbox/index.js'
                ),
                jsx_runtime = __webpack_require__(
                    './node_modules/react/jsx-runtime.js'
                ),
                onChange = function onChange(e) {
                    console.log('checked = ' + e.target.checked);
                },
                checkbox_App = function App() {
                    return Object(jsx_runtime.jsx)(es_checkbox.a, {
                        onChange: onChange,
                        children: 'Checkbox',
                    });
                };
            checkbox_App.displayName = 'App';
            var Checkbox_checkbox = checkbox_App;
            try {
                (checkbox.displayName = 'checkbox'),
                    (checkbox.__docgenInfo = {
                        description: '',
                        displayName: 'checkbox',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Checkbox/checkbox.tsx#checkbox'
                        ] = {
                            docgenInfo: checkbox.__docgenInfo,
                            name: 'checkbox',
                            path: 'src/Checkbox/checkbox.tsx#checkbox',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            __webpack_exports__.default = { title: 'Check Box' };
            var checkbox_stories_Basic = function Basic(args) {
                return Object(jsx_runtime.jsx)(
                    Checkbox_checkbox,
                    Object.assign({}, args)
                );
            };
            (checkbox_stories_Basic.displayName = 'Basic'),
                (checkbox_stories_Basic.args = {}),
                (checkbox_stories_Basic.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <Checkbox {...args} />',
                        },
                    },
                    checkbox_stories_Basic.parameters
                ));
            try {
                (checkbox_stories_Basic.displayName = 'Basic'),
                    (checkbox_stories_Basic.__docgenInfo = {
                        description: '',
                        displayName: 'Basic',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Checkbox/checkbox.stories.tsx#Basic'
                        ] = {
                            docgenInfo: checkbox_stories_Basic.__docgenInfo,
                            name: 'Basic',
                            path: 'src/Checkbox/checkbox.stories.tsx#Basic',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/ComponentConfig/pageComponentConfig.stories.tsx': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    'PageComponentConfig',
                    function () {
                        return pageComponentConfig_stories_PageComponentConfig;
                    }
                );
            __webpack_require__(
                './node_modules/core-js/modules/es.object.assign.js'
            ),
                __webpack_require__('./node_modules/react/index.js'),
                __webpack_require__(
                    './node_modules/core-js/modules/es.array.includes.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.string.includes.js'
                );
            var card = __webpack_require__(
                    './node_modules/antd/es/card/index.js'
                ),
                es_collapse = __webpack_require__(
                    './node_modules/antd/es/collapse/index.js'
                ),
                tabs = __webpack_require__(
                    './node_modules/antd/es/tabs/index.js'
                ),
                es_form = __webpack_require__(
                    './node_modules/antd/es/form/index.js'
                ),
                es_select = __webpack_require__(
                    './node_modules/antd/es/select/index.js'
                ),
                jsx_runtime = __webpack_require__(
                    './node_modules/react/jsx-runtime.js'
                ),
                collapse_text =
                    '\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n',
                collapse_items = [
                    {
                        key: '1',
                        label: 'This is panel header 1',
                        children: Object(jsx_runtime.jsx)('p', {
                            children: collapse_text,
                        }),
                    },
                    {
                        key: '2',
                        label: 'This is panel header 2',
                        children: Object(jsx_runtime.jsx)('p', {
                            children: collapse_text,
                        }),
                    },
                    {
                        key: '3',
                        label: 'This is panel header 3',
                        children: Object(jsx_runtime.jsx)('p', {
                            children: collapse_text,
                        }),
                    },
                ],
                collapse_App = function App() {
                    return Object(jsx_runtime.jsx)(es_collapse.a, {
                        items: collapse_items,
                        defaultActiveKey: ['1'],
                        onChange: function onChange(key) {
                            console.log(key);
                        },
                    });
                };
            collapse_App.displayName = 'App';
            var ComponentConfig_collapse = collapse_App;
            try {
                (collapse.displayName = 'collapse'),
                    (collapse.__docgenInfo = {
                        description: '',
                        displayName: 'collapse',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/ComponentConfig/collapse.tsx#collapse'
                        ] = {
                            docgenInfo: collapse.__docgenInfo,
                            name: 'collapse',
                            path: 'src/ComponentConfig/collapse.tsx#collapse',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var pageComponentConfig_Collapses = function Collapses() {
                var text =
                        '\n    A dog is a type of domesticated animal.\n    Known for its loyalty and faithfulness,\n    it can be found as a welcome guest in many households across the world.\n  ',
                    items = [
                        {
                            key: '1',
                            label: 'This is panel header 1',
                            children: Object(jsx_runtime.jsx)('p', {
                                children: text,
                            }),
                        },
                        {
                            key: '2',
                            label: 'This is panel header 2',
                            children: Object(jsx_runtime.jsx)('p', {
                                children: text,
                            }),
                        },
                        {
                            key: '3',
                            label: 'This is panel header 3',
                            children: Object(jsx_runtime.jsx)('p', {
                                children: text,
                            }),
                        },
                    ];
                return Object(jsx_runtime.jsx)(es_collapse.a, {
                    items: items,
                    defaultActiveKey: ['1'],
                    onChange: function onChange(key) {
                        console.log(key);
                    },
                });
            };
            pageComponentConfig_Collapses.displayName = 'Collapses';
            var pageComponentConfig_SelectComponent =
                function SelectComponent() {
                    return Object(jsx_runtime.jsxs)('div', {
                        style: { padding: 10 },
                        children: [
                            Object(jsx_runtime.jsx)(es_form.a, {
                                layout: 'vertical',
                                children: Object(jsx_runtime.jsx)(
                                    es_form.a.Item,
                                    {
                                        label: 'Required Mark',
                                        name: 'requiredMarkValue',
                                        children: Object(jsx_runtime.jsx)(
                                            es_select.a,
                                            {
                                                showSearch: !0,
                                                placeholder:
                                                    'Select a component',
                                                optionFilterProp: 'children',
                                                onChange: function onChange(
                                                    value
                                                ) {
                                                    console.log(
                                                        'selected ' + value
                                                    );
                                                },
                                                style: { width: '100%' },
                                                onSearch: function onSearch(
                                                    value
                                                ) {
                                                    console.log(
                                                        'search:',
                                                        value
                                                    );
                                                },
                                                filterOption:
                                                    function filterOption(
                                                        input,
                                                        option
                                                    ) {
                                                        var _option$label;
                                                        return (
                                                            null !==
                                                                (_option$label =
                                                                    null ==
                                                                    option
                                                                        ? void 0
                                                                        : option.label) &&
                                                            void 0 !==
                                                                _option$label
                                                                ? _option$label
                                                                : ''
                                                        )
                                                            .toLowerCase()
                                                            .includes(
                                                                input.toLowerCase()
                                                            );
                                                    },
                                                options: [
                                                    {
                                                        value: 'jack',
                                                        label: 'Jack',
                                                    },
                                                    {
                                                        value: 'lucy',
                                                        label: 'Lucy',
                                                    },
                                                    {
                                                        value: 'tom',
                                                        label: 'Tom',
                                                    },
                                                ],
                                            }
                                        ),
                                    }
                                ),
                            }),
                            Object(jsx_runtime.jsx)(
                                pageComponentConfig_Collapses,
                                {}
                            ),
                        ],
                    });
                };
            pageComponentConfig_SelectComponent.displayName = 'SelectComponent';
            var ComponentConfig_pageComponentConfig = function App() {
                var items = [
                    {
                        key: '1',
                        label: 'Component',
                        children: Object(jsx_runtime.jsx)(
                            pageComponentConfig_SelectComponent,
                            {}
                        ),
                    },
                    {
                        key: '2',
                        label: 'Page',
                        children: 'Content of Tab Pane 2',
                    },
                ];
                return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        Object(jsx_runtime.jsxs)(card.a, {
                            bodyStyle: {
                                borderRadius: '0px',
                                boxShadow: 'none',
                                padding: '0px',
                            },
                            style: { borderRadius: 0, width: '100%' },
                            children: [
                                Object(jsx_runtime.jsx)(tabs.a, {
                                    defaultActiveKey: '1',
                                    items: items,
                                    onChange: function onChange(key) {
                                        console.log(key);
                                    },
                                }),
                                Object(jsx_runtime.jsx)('p', {
                                    children: 'Card content',
                                }),
                                Object(jsx_runtime.jsx)('p', {
                                    children: 'Card content',
                                }),
                            ],
                        }),
                        'das',
                        Object(jsx_runtime.jsx)(ComponentConfig_collapse, {}),
                    ],
                });
            };
            try {
                (pageComponentConfig.displayName = 'pageComponentConfig'),
                    (pageComponentConfig.__docgenInfo = {
                        description: '',
                        displayName: 'pageComponentConfig',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/ComponentConfig/pageComponentConfig.tsx#pageComponentConfig'
                        ] = {
                            docgenInfo: pageComponentConfig.__docgenInfo,
                            name: 'pageComponentConfig',
                            path: 'src/ComponentConfig/pageComponentConfig.tsx#pageComponentConfig',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            __webpack_exports__.default = {
                title: 'work station/page component config',
            };
            var pageComponentConfig_stories_PageComponentConfig =
                function PageComponentConfig(args) {
                    return Object(jsx_runtime.jsx)(
                        ComponentConfig_pageComponentConfig,
                        {}
                    );
                };
            (pageComponentConfig_stories_PageComponentConfig.displayName =
                'PageComponentConfig'),
                (pageComponentConfig_stories_PageComponentConfig.args = {
                    dashed: !1,
                }),
                (pageComponentConfig_stories_PageComponentConfig.parameters =
                    Object.assign(
                        {
                            storySource: {
                                source: '(args) => <PageComponentConfigComponent />',
                            },
                        },
                        pageComponentConfig_stories_PageComponentConfig.parameters
                    ));
            try {
                (pageComponentConfig_stories_PageComponentConfig.displayName =
                    'PageComponentConfig'),
                    (pageComponentConfig_stories_PageComponentConfig.__docgenInfo =
                        {
                            description: '',
                            displayName: 'PageComponentConfig',
                            props: {},
                        }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/ComponentConfig/pageComponentConfig.stories.tsx#PageComponentConfig'
                        ] = {
                            docgenInfo:
                                pageComponentConfig_stories_PageComponentConfig.__docgenInfo,
                            name: 'PageComponentConfig',
                            path: 'src/ComponentConfig/pageComponentConfig.stories.tsx#PageComponentConfig',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/Divider/divider.stories.tsx': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Horizontal',
                    function () {
                        return divider_stories_Horizontal;
                    }
                ),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Dashed',
                    function () {
                        return divider_stories_Dashed;
                    }
                ),
                __webpack_require__.d(
                    __webpack_exports__,
                    'TextCenter',
                    function () {
                        return divider_stories_TextCenter;
                    }
                );
            __webpack_require__(
                './node_modules/core-js/modules/es.object.assign.js'
            ),
                __webpack_require__('./node_modules/react/index.js'),
                __webpack_require__(
                    './node_modules/core-js/modules/es.object.keys.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.array.index-of.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.symbol.js'
                );
            var es_divider = __webpack_require__(
                    './node_modules/antd/es/divider/index.js'
                ),
                jsx_runtime = __webpack_require__(
                    './node_modules/react/jsx-runtime.js'
                ),
                _excluded = ['children'];
            function _objectWithoutProperties(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = (function _objectWithoutPropertiesLoose(
                        source,
                        excluded
                    ) {
                        if (null == source) return {};
                        var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source);
                        for (i = 0; i < sourceKeys.length; i++)
                            (key = sourceKeys[i]),
                                excluded.indexOf(key) >= 0 ||
                                    (target[key] = source[key]);
                        return target;
                    })(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        (key = sourceSymbolKeys[i]),
                            excluded.indexOf(key) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    source,
                                    key
                                ) &&
                                    (target[key] = source[key]));
                }
                return target;
            }
            var divider_Divider = function Divider(_ref) {
                var children = _ref.children,
                    props = _objectWithoutProperties(_ref, _excluded);
                return Object(jsx_runtime.jsx)(
                    es_divider.a,
                    Object.assign({}, props, { children: children })
                );
            };
            divider_Divider.displayName = 'Divider';
            var Divider_divider = divider_Divider;
            try {
                (divider.displayName = 'divider'),
                    (divider.__docgenInfo = {
                        description: '',
                        displayName: 'divider',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Divider/divider.tsx#divider'
                        ] = {
                            docgenInfo: divider.__docgenInfo,
                            name: 'divider',
                            path: 'src/Divider/divider.tsx#divider',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            __webpack_exports__.default = { title: 'Divider' };
            var divider_stories_Horizontal = function Horizontal(args) {
                return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        Object(jsx_runtime.jsx)('p', {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.',
                        }),
                        Object(jsx_runtime.jsx)(
                            Divider_divider,
                            Object.assign({}, args)
                        ),
                    ],
                });
            };
            divider_stories_Horizontal.args = { dashed: !1 };
            var divider_stories_Dashed = function Dashed(args) {
                return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        Object(jsx_runtime.jsx)('p', {
                            children:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.',
                        }),
                        Object(jsx_runtime.jsx)(
                            Divider_divider,
                            Object.assign({}, args)
                        ),
                    ],
                });
            };
            divider_stories_Horizontal.args = { dashed: !0 };
            var divider_stories_TextCenter = function TextCenter(args) {
                return Object(jsx_runtime.jsx)(
                    Divider_divider,
                    Object.assign({}, args, { children: ' Hello world ' })
                );
            };
            (divider_stories_TextCenter.displayName = 'TextCenter'),
                (divider_stories_TextCenter.args = {
                    dashed: !0,
                    orientation: 'left',
                }),
                (divider_stories_Horizontal.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) =>\n(<>\n    <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista\n        probare, quae sunt a te dicta? Refert tamen, quo modo.\n    </p>\n    <Divider {...args} />\n</>\n)',
                        },
                    },
                    divider_stories_Horizontal.parameters
                )),
                (divider_stories_Dashed.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) =>\n(<>\n    <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista\n        probare, quae sunt a te dicta? Refert tamen, quo modo.\n    </p>\n    <Divider {...args} />\n</>\n)',
                        },
                    },
                    divider_stories_Dashed.parameters
                )),
                (divider_stories_TextCenter.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <Divider {...args}> Hello world </Divider>',
                        },
                    },
                    divider_stories_TextCenter.parameters
                ));
            try {
                (divider_stories_Horizontal.displayName = 'Horizontal'),
                    (divider_stories_Horizontal.__docgenInfo = {
                        description: '',
                        displayName: 'Horizontal',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Divider/divider.stories.tsx#Horizontal'
                        ] = {
                            docgenInfo: divider_stories_Horizontal.__docgenInfo,
                            name: 'Horizontal',
                            path: 'src/Divider/divider.stories.tsx#Horizontal',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (divider_stories_Dashed.displayName = 'Dashed'),
                    (divider_stories_Dashed.__docgenInfo = {
                        description: '',
                        displayName: 'Dashed',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Divider/divider.stories.tsx#Dashed'
                        ] = {
                            docgenInfo: divider_stories_Dashed.__docgenInfo,
                            name: 'Dashed',
                            path: 'src/Divider/divider.stories.tsx#Dashed',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (divider_stories_TextCenter.displayName = 'TextCenter'),
                    (divider_stories_TextCenter.__docgenInfo = {
                        description: '',
                        displayName: 'TextCenter',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Divider/divider.stories.tsx#TextCenter'
                        ] = {
                            docgenInfo: divider_stories_TextCenter.__docgenInfo,
                            name: 'TextCenter',
                            path: 'src/Divider/divider.stories.tsx#TextCenter',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/Input/input.stories.tsx': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    'AutoComplete',
                    function () {
                        return input_stories_AutoComplete;
                    }
                ),
                __webpack_require__.d(
                    __webpack_exports__,
                    'SimpleInput',
                    function () {
                        return input_stories_SimpleInput;
                    }
                );
            __webpack_require__(
                './node_modules/core-js/modules/es.object.assign.js'
            );
            var react = __webpack_require__('./node_modules/react/index.js'),
                auto_complete =
                    (__webpack_require__(
                        './node_modules/core-js/modules/es.string.repeat.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.array.is-array.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.symbol.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.symbol.description.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.object.to-string.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.symbol.iterator.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.string.iterator.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.array.iterator.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/web.dom-collections.iterator.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.array.slice.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.function.name.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.array.from.js'
                    ),
                    __webpack_require__(
                        './node_modules/antd/es/auto-complete/index.js'
                    )),
                jsx_runtime = __webpack_require__(
                    './node_modules/react/jsx-runtime.js'
                );
            function _slicedToArray(arr, i) {
                return (
                    (function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr;
                    })(arr) ||
                    (function _iterableToArrayLimit(arr, i) {
                        var _i =
                            null == arr
                                ? null
                                : ('undefined' != typeof Symbol &&
                                      arr[Symbol.iterator]) ||
                                  arr['@@iterator'];
                        if (null != _i) {
                            var _s,
                                _e,
                                _x,
                                _r,
                                _arr = [],
                                _n = !0,
                                _d = !1;
                            try {
                                if (
                                    ((_x = (_i = _i.call(arr)).next), 0 === i)
                                ) {
                                    if (Object(_i) !== _i) return;
                                    _n = !1;
                                } else
                                    for (
                                        ;
                                        !(_n = (_s = _x.call(_i)).done) &&
                                        (_arr.push(_s.value),
                                        _arr.length !== i);
                                        _n = !0
                                    );
                            } catch (err) {
                                (_d = !0), (_e = err);
                            } finally {
                                try {
                                    if (
                                        !_n &&
                                        null != _i.return &&
                                        ((_r = _i.return()), Object(_r) !== _r)
                                    )
                                        return;
                                } finally {
                                    if (_d) throw _e;
                                }
                            }
                            return _arr;
                        }
                    })(arr, i) ||
                    (function _unsupportedIterableToArray(o, minLen) {
                        if (!o) return;
                        if ('string' == typeof o)
                            return _arrayLikeToArray(o, minLen);
                        var n = Object.prototype.toString.call(o).slice(8, -1);
                        'Object' === n &&
                            o.constructor &&
                            (n = o.constructor.name);
                        if ('Map' === n || 'Set' === n) return Array.from(o);
                        if (
                            'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                            return _arrayLikeToArray(o, minLen);
                    })(arr, i) ||
                    (function _nonIterableRest() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++)
                    arr2[i] = arr[i];
                return arr2;
            }
            var mockVal = function mockVal(str) {
                    var repeat =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 1;
                    return { value: str.repeat(repeat) };
                },
                Input_input = function Input() {
                    var _useState2 = _slicedToArray(
                            Object(react.useState)(''),
                            2
                        ),
                        value = _useState2[0],
                        setValue = _useState2[1],
                        _useState4 = _slicedToArray(
                            Object(react.useState)([]),
                            2
                        ),
                        options = _useState4[0],
                        setOptions = _useState4[1],
                        _useState6 = _slicedToArray(
                            Object(react.useState)([]),
                            2
                        ),
                        anotherOptions = _useState6[0],
                        setAnotherOptions = _useState6[1],
                        getPanelValue = function getPanelValue(searchText) {
                            return searchText
                                ? [
                                      mockVal(searchText),
                                      mockVal(searchText, 2),
                                      mockVal(searchText, 3),
                                  ]
                                : [];
                        },
                        onSelect = function onSelect(data) {
                            console.log('onSelect', data);
                        };
                    return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            Object(jsx_runtime.jsx)(auto_complete.a, {
                                options: options,
                                style: { width: 200 },
                                onSelect: onSelect,
                                onSearch: function onSearch(text) {
                                    return setOptions(getPanelValue(text));
                                },
                                placeholder: 'input here',
                            }),
                            Object(jsx_runtime.jsx)('br', {}),
                            Object(jsx_runtime.jsx)('br', {}),
                            Object(jsx_runtime.jsx)(auto_complete.a, {
                                value: value,
                                options: anotherOptions,
                                style: { width: 200 },
                                onSelect: onSelect,
                                onSearch: function onSearch(text) {
                                    return setAnotherOptions(
                                        getPanelValue(text)
                                    );
                                },
                                onChange: function onChange(data) {
                                    setValue(data);
                                },
                                placeholder: 'control mode',
                            }),
                        ],
                    });
                };
            try {
                (input.displayName = 'input'),
                    (input.__docgenInfo = {
                        description: '',
                        displayName: 'input',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['src/Input/input.tsx#input'] =
                            {
                                docgenInfo: input.__docgenInfo,
                                name: 'input',
                                path: 'src/Input/input.tsx#input',
                            });
            } catch (__react_docgen_typescript_loader_error) {}
            var es_input = __webpack_require__(
                    './node_modules/antd/es/input/index.js'
                ),
                simpleInput_TextField = function TextField() {
                    return Object(jsx_runtime.jsx)(es_input.a, {
                        placeholder: 'Basic usage',
                    });
                };
            simpleInput_TextField.displayName = 'TextField';
            var Input_simpleInput = simpleInput_TextField;
            try {
                (simpleInput.displayName = 'simpleInput'),
                    (simpleInput.__docgenInfo = {
                        description: '',
                        displayName: 'simpleInput',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Input/simpleInput.tsx#simpleInput'
                        ] = {
                            docgenInfo: simpleInput.__docgenInfo,
                            name: 'simpleInput',
                            path: 'src/Input/simpleInput.tsx#simpleInput',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            __webpack_exports__.default = { title: 'Input' };
            var input_stories_AutoComplete = function AutoComplete(args) {
                return Object(jsx_runtime.jsx)(
                    Input_input,
                    Object.assign({}, args)
                );
            };
            (input_stories_AutoComplete.displayName = 'AutoComplete'),
                (input_stories_AutoComplete.args = {});
            var input_stories_SimpleInput = function SimpleInput(args) {
                return Object(jsx_runtime.jsx)(
                    Input_simpleInput,
                    Object.assign({}, args)
                );
            };
            (input_stories_SimpleInput.displayName = 'SimpleInput'),
                (input_stories_SimpleInput.args = {}),
                (input_stories_AutoComplete.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <Input {...args} />',
                        },
                    },
                    input_stories_AutoComplete.parameters
                )),
                (input_stories_SimpleInput.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <SimpleInputs {...args} />',
                        },
                    },
                    input_stories_SimpleInput.parameters
                ));
            try {
                (input_stories_AutoComplete.displayName = 'AutoComplete'),
                    (input_stories_AutoComplete.__docgenInfo = {
                        description: '',
                        displayName: 'AutoComplete',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Input/input.stories.tsx#AutoComplete'
                        ] = {
                            docgenInfo: input_stories_AutoComplete.__docgenInfo,
                            name: 'AutoComplete',
                            path: 'src/Input/input.stories.tsx#AutoComplete',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (input_stories_SimpleInput.displayName = 'SimpleInput'),
                    (input_stories_SimpleInput.__docgenInfo = {
                        description: '',
                        displayName: 'SimpleInput',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Input/input.stories.tsx#SimpleInput'
                        ] = {
                            docgenInfo: input_stories_SimpleInput.__docgenInfo,
                            name: 'SimpleInput',
                            path: 'src/Input/input.stories.tsx#SimpleInput',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/Pages/startPage.stories.tsx': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    'StartPage',
                    function () {
                        return startPage_stories_StartPage;
                    }
                );
            __webpack_require__(
                './node_modules/core-js/modules/es.object.assign.js'
            );
            var react = __webpack_require__('./node_modules/react/index.js'),
                typography = __webpack_require__(
                    './node_modules/antd/es/typography/index.js'
                ),
                MenuOutlined =
                    (__webpack_require__(
                        './node_modules/core-js/modules/es.array.map.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.array.is-array.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.symbol.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.symbol.description.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.object.to-string.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.symbol.iterator.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.string.iterator.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.array.iterator.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/web.dom-collections.iterator.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.array.slice.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.function.name.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.array.from.js'
                    ),
                    __webpack_require__(
                        './node_modules/@ant-design/icons/es/icons/MenuOutlined.js'
                    )),
                AppstoreOutlined = __webpack_require__(
                    './node_modules/@ant-design/icons/es/icons/AppstoreOutlined.js'
                ),
                LoginOutlined = __webpack_require__(
                    './node_modules/@ant-design/icons/es/icons/LoginOutlined.js'
                ),
                layout = __webpack_require__(
                    './node_modules/antd/es/layout/index.js'
                ),
                input = __webpack_require__(
                    './node_modules/antd/es/input/index.js'
                ),
                theme = __webpack_require__(
                    './node_modules/antd/es/theme/index.js'
                ),
                drawer = __webpack_require__(
                    './node_modules/antd/es/drawer/index.js'
                ),
                divider = __webpack_require__(
                    './node_modules/antd/es/divider/index.js'
                ),
                card = __webpack_require__(
                    './node_modules/antd/es/card/index.js'
                ),
                space = __webpack_require__(
                    './node_modules/antd/es/space/index.js'
                ),
                tabs = __webpack_require__(
                    './node_modules/antd/es/tabs/index.js'
                ),
                menu = __webpack_require__(
                    './node_modules/antd/es/menu/index.js'
                ),
                jsx_runtime =
                    (__webpack_require__('./src/Pages/styles.css'),
                    __webpack_require__('./node_modules/react/jsx-runtime.js'));
            function _slicedToArray(arr, i) {
                return (
                    (function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr;
                    })(arr) ||
                    (function _iterableToArrayLimit(arr, i) {
                        var _i =
                            null == arr
                                ? null
                                : ('undefined' != typeof Symbol &&
                                      arr[Symbol.iterator]) ||
                                  arr['@@iterator'];
                        if (null != _i) {
                            var _s,
                                _e,
                                _x,
                                _r,
                                _arr = [],
                                _n = !0,
                                _d = !1;
                            try {
                                if (
                                    ((_x = (_i = _i.call(arr)).next), 0 === i)
                                ) {
                                    if (Object(_i) !== _i) return;
                                    _n = !1;
                                } else
                                    for (
                                        ;
                                        !(_n = (_s = _x.call(_i)).done) &&
                                        (_arr.push(_s.value),
                                        _arr.length !== i);
                                        _n = !0
                                    );
                            } catch (err) {
                                (_d = !0), (_e = err);
                            } finally {
                                try {
                                    if (
                                        !_n &&
                                        null != _i.return &&
                                        ((_r = _i.return()), Object(_r) !== _r)
                                    )
                                        return;
                                } finally {
                                    if (_d) throw _e;
                                }
                            }
                            return _arr;
                        }
                    })(arr, i) ||
                    (function _unsupportedIterableToArray(o, minLen) {
                        if (!o) return;
                        if ('string' == typeof o)
                            return _arrayLikeToArray(o, minLen);
                        var n = Object.prototype.toString.call(o).slice(8, -1);
                        'Object' === n &&
                            o.constructor &&
                            (n = o.constructor.name);
                        if ('Map' === n || 'Set' === n) return Array.from(o);
                        if (
                            'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                            return _arrayLikeToArray(o, minLen);
                    })(arr, i) ||
                    (function _nonIterableRest() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++)
                    arr2[i] = arr[i];
                return arr2;
            }
            var Header = layout.a.Header,
                Content = layout.a.Content,
                Footer = layout.a.Footer;
            function AppMenu() {
                return Object(jsx_runtime.jsxs)(menu.a, {
                    style: {
                        backgroundColor: 'white',
                        color: 'black',
                        borderRight: 'white',
                        fontSize: 16,
                    },
                    mode: 'inline',
                    children: [
                        Object(jsx_runtime.jsx)(
                            menu.a.Item,
                            { children: 'Elite Locker' },
                            'santé'
                        ),
                        Object(jsx_runtime.jsx)(
                            menu.a.Item,
                            { children: 'Services' },
                            'autres'
                        ),
                        Object(jsx_runtime.jsx)(
                            menu.a.Item,
                            { children: 'Feedback' },
                            'autres'
                        ),
                        Object(jsx_runtime.jsx)(
                            menu.a.Item,
                            { children: 'Login' },
                            'autres'
                        ),
                    ],
                });
            }
            AppMenu.displayName = 'AppMenu';
            var Pages_startPage = function App() {
                var _useState2 = _slicedToArray(
                        Object(react.useState)('mail'),
                        2
                    ),
                    current = _useState2[0],
                    _useState4 =
                        (_useState2[1],
                        _slicedToArray(Object(react.useState)(!1), 2)),
                    openMenu = _useState4[0],
                    setOpenMenu = _useState4[1],
                    gridStyle = { width: '30%', textAlign: 'center' },
                    gridStyle2 = { width: '20%', textAlign: 'center' },
                    Title = typography.a.Title,
                    Paragraph = typography.a.Paragraph,
                    Search = input.a.Search;
                theme.a.useToken().token.colorBgContainer;
                return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        Object(jsx_runtime.jsx)(drawer.a, {
                            onClose: function onClose() {
                                return setOpenMenu(!1);
                            },
                            bodyStyle: { backgroundColor: 'white' },
                            open: openMenu,
                            closable: !1,
                            children: Object(jsx_runtime.jsx)(AppMenu, {}),
                        }),
                        Object(jsx_runtime.jsx)('div', {
                            children: Object(jsx_runtime.jsxs)(layout.a, {
                                className: 'layout',
                                style: { backgroundColor: 'white' },
                                children: [
                                    Object(jsx_runtime.jsxs)(Header, {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'basline',
                                            background: 'white',
                                        },
                                        children: [
                                            Object(jsx_runtime.jsx)('div', {
                                                style: {
                                                    float: 'left',
                                                    width: '220px',
                                                    height: '31px',
                                                },
                                                children: Object(
                                                    jsx_runtime.jsx
                                                )(MenuOutlined.a, {
                                                    style: {
                                                        color: 'black',
                                                        paddingLeft: '12px',
                                                        fontSize: 17,
                                                    },
                                                    onClick:
                                                        function onClick() {
                                                            return setOpenMenu(
                                                                !0
                                                            );
                                                        },
                                                }),
                                            }),
                                            Object(jsx_runtime.jsxs)(menu.a, {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'end',
                                                    borderBottom: '0px',
                                                },
                                                selectedKeys: [current],
                                                mode: 'horizontal',
                                                overflowedIndicator: Object(
                                                    jsx_runtime.jsx
                                                )(MenuOutlined.a, {}),
                                                children: [
                                                    Object(jsx_runtime.jsx)(
                                                        menu.a.Item,
                                                        { children: 'English' },
                                                        'santé'
                                                    ),
                                                    Object(jsx_runtime.jsx)(
                                                        menu.a.Item,
                                                        {
                                                            icon: Object(
                                                                jsx_runtime.jsx
                                                            )(
                                                                AppstoreOutlined.a,
                                                                {}
                                                            ),
                                                        },
                                                        'apmathsp'
                                                    ),
                                                    Object(jsx_runtime.jsx)(
                                                        menu.a.Item,
                                                        {
                                                            icon: Object(
                                                                jsx_runtime.jsx
                                                            )(
                                                                LoginOutlined.a,
                                                                {}
                                                            ),
                                                            children: 'Login',
                                                        },
                                                        'autres'
                                                    ),
                                                ],
                                            }),
                                        ],
                                    }),
                                    Object(jsx_runtime.jsx)(divider.a, {
                                        style: { margin: '0px' },
                                    }),
                                    Object(jsx_runtime.jsx)(Content, {
                                        style: {
                                            padding: '0 50px',
                                            height: '40vh',
                                            backgroundColor: '#f5f4ef',
                                        },
                                        children: Object(jsx_runtime.jsx)(
                                            card.a,
                                            {
                                                style: {
                                                    borderRadius: '0px',
                                                    backgroundColor: 'inherit',
                                                    borderColor: '#f5f4ef',
                                                    border: '0px !important',
                                                    marginTop: '20px',
                                                },
                                                children: Object(
                                                    jsx_runtime.jsxs
                                                )(card.a.Grid, {
                                                    hoverable: !1,
                                                    style: {
                                                        width: '100%',
                                                        border: '0px !important',
                                                        boxShadow: 'none',
                                                        borderColor: 'white',
                                                    },
                                                    children: [
                                                        Object(jsx_runtime.jsx)(
                                                            'div',
                                                            {
                                                                children:
                                                                    Object(
                                                                        jsx_runtime.jsx
                                                                    )('img', {
                                                                        src: 'https://eps.ae/wp-content/uploads/2018/12/logo-5-216-x-68.png',
                                                                        alt: '',
                                                                    }),
                                                            }
                                                        ),
                                                        Object(
                                                            jsx_runtime.jsxs
                                                        )(space.b, {
                                                            direction:
                                                                'vertical',
                                                            size: 'small',
                                                            children: [
                                                                Object(
                                                                    jsx_runtime.jsx
                                                                )(Title, {
                                                                    style: {
                                                                        margin: 0,
                                                                    },
                                                                    level: 2,
                                                                    children:
                                                                        'Elite private school self service portal',
                                                                }),
                                                                Object(
                                                                    jsx_runtime.jsx
                                                                )(Paragraph, {
                                                                    style: {
                                                                        margin: 0,
                                                                    },
                                                                    level: 5,
                                                                    children:
                                                                        'A unified system helping students, parents and employees find elite private school services',
                                                                }),
                                                                Object(
                                                                    jsx_runtime.jsx
                                                                )(Search, {
                                                                    style: {
                                                                        marginTop: 10,
                                                                    },
                                                                    placeholder:
                                                                        'input search text',
                                                                    allowClear:
                                                                        !0,
                                                                    enterButton:
                                                                        'Search',
                                                                    size: 'large',
                                                                    onSearch:
                                                                        function onSearch() {
                                                                            return console.log(
                                                                                'on search'
                                                                            );
                                                                        },
                                                                }),
                                                                Object(
                                                                    jsx_runtime.jsxs
                                                                )(Paragraph, {
                                                                    children: [
                                                                        'Popular : ',
                                                                        Object(
                                                                            jsx_runtime.jsx
                                                                        )('a', {
                                                                            href: '',
                                                                            children:
                                                                                'HR Onnoarding',
                                                                        }),
                                                                        '  ',
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        Object(jsx_runtime.jsx)(
                                                            space.b,
                                                            {}
                                                        ),
                                                    ],
                                                }),
                                            }
                                        ),
                                    }),
                                    Object(jsx_runtime.jsx)(card.a.Grid, {
                                        style: {
                                            borderRadius: '0px',
                                            border: '0px',
                                            padding: '0px',
                                            marginTop: '40px',
                                        },
                                        children: Object(jsx_runtime.jsx)(
                                            card.a,
                                            {
                                                style: {
                                                    boxShadow: '0px',
                                                    borderRadius: '0px',
                                                    border: '0px',
                                                    padding: 0,
                                                },
                                                children: Object(
                                                    jsx_runtime.jsx
                                                )(tabs.a, {
                                                    onChange: function onChange(
                                                        e
                                                    ) {
                                                        return console.log(e);
                                                    },
                                                    type: 'card',
                                                    items: [
                                                        'Student Services',
                                                        'Employee services',
                                                        'Parent Services',
                                                    ].map(function (_, i) {
                                                        return {
                                                            label: _,
                                                            key: String(i + 1),
                                                            children: Object(
                                                                jsx_runtime.jsxs
                                                            )(card.a, {
                                                                style: {
                                                                    boxShadow:
                                                                        'none',
                                                                    border: '0px',
                                                                },
                                                                children: [
                                                                    Object(
                                                                        jsx_runtime.jsxs
                                                                    )(
                                                                        card.a
                                                                            .Grid,
                                                                        {
                                                                            style: Object.assign(
                                                                                {},
                                                                                gridStyle2,
                                                                                {
                                                                                    textAlign:
                                                                                        'left',
                                                                                    marginRight: 10,
                                                                                    marginBottom: 10,
                                                                                }
                                                                            ),
                                                                            children:
                                                                                [
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        'img',
                                                                                        {
                                                                                            style: {
                                                                                                width: 50,
                                                                                            },
                                                                                            src: 'https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Title,
                                                                                        {
                                                                                            style: {
                                                                                                marginTop: 0,
                                                                                            },
                                                                                            level: 5,
                                                                                            children:
                                                                                                'Indentity, Citizenship, and Human Resource',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Paragraph,
                                                                                        {
                                                                                            children:
                                                                                                'Residency, Identity , Entry permit, and work',
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                    Object(
                                                                        jsx_runtime.jsxs
                                                                    )(
                                                                        card.a
                                                                            .Grid,
                                                                        {
                                                                            style: Object.assign(
                                                                                {},
                                                                                gridStyle2,
                                                                                {
                                                                                    textAlign:
                                                                                        'left',
                                                                                    marginRight: 10,
                                                                                    marginBottom: 10,
                                                                                }
                                                                            ),
                                                                            children:
                                                                                [
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        'img',
                                                                                        {
                                                                                            style: {
                                                                                                width: 50,
                                                                                            },
                                                                                            src: 'https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Title,
                                                                                        {
                                                                                            style: {
                                                                                                marginTop: 0,
                                                                                            },
                                                                                            level: 5,
                                                                                            children:
                                                                                                'Indentity, Citizenship, and Human Resource',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Paragraph,
                                                                                        {
                                                                                            children:
                                                                                                'Residency, Identity , Entry permit, and work',
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                    Object(
                                                                        jsx_runtime.jsxs
                                                                    )(
                                                                        card.a
                                                                            .Grid,
                                                                        {
                                                                            style: Object.assign(
                                                                                {},
                                                                                gridStyle2,
                                                                                {
                                                                                    textAlign:
                                                                                        'left',
                                                                                    marginRight: 10,
                                                                                    marginBottom: 10,
                                                                                }
                                                                            ),
                                                                            children:
                                                                                [
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        'img',
                                                                                        {
                                                                                            style: {
                                                                                                width: 50,
                                                                                            },
                                                                                            src: 'https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Title,
                                                                                        {
                                                                                            style: {
                                                                                                marginTop: 0,
                                                                                            },
                                                                                            level: 5,
                                                                                            children:
                                                                                                'Indentity, Citizenship, and Human Resource',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Paragraph,
                                                                                        {
                                                                                            children:
                                                                                                'Residency, Identity , Entry permit, and work',
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                    Object(
                                                                        jsx_runtime.jsxs
                                                                    )(
                                                                        card.a
                                                                            .Grid,
                                                                        {
                                                                            style: Object.assign(
                                                                                {},
                                                                                gridStyle2,
                                                                                {
                                                                                    textAlign:
                                                                                        'left',
                                                                                    marginRight: 10,
                                                                                    marginBottom: 10,
                                                                                }
                                                                            ),
                                                                            children:
                                                                                [
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        'img',
                                                                                        {
                                                                                            style: {
                                                                                                width: 50,
                                                                                            },
                                                                                            src: 'https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Title,
                                                                                        {
                                                                                            style: {
                                                                                                marginTop: 0,
                                                                                            },
                                                                                            level: 5,
                                                                                            children:
                                                                                                'Indentity, Citizenship, and Human Resource',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Paragraph,
                                                                                        {
                                                                                            children:
                                                                                                'Residency, Identity , Entry permit, and work',
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                    Object(
                                                                        jsx_runtime.jsxs
                                                                    )(
                                                                        card.a
                                                                            .Grid,
                                                                        {
                                                                            style: Object.assign(
                                                                                {},
                                                                                gridStyle2,
                                                                                {
                                                                                    textAlign:
                                                                                        'left',
                                                                                    marginRight: 10,
                                                                                    marginBottom: 10,
                                                                                }
                                                                            ),
                                                                            children:
                                                                                [
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        'img',
                                                                                        {
                                                                                            style: {
                                                                                                width: 50,
                                                                                            },
                                                                                            src: 'https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Title,
                                                                                        {
                                                                                            style: {
                                                                                                marginTop: 0,
                                                                                            },
                                                                                            level: 5,
                                                                                            children:
                                                                                                'Indentity, Citizenship, and Human Resource',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Paragraph,
                                                                                        {
                                                                                            children:
                                                                                                'Residency, Identity , Entry permit, and work',
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                    Object(
                                                                        jsx_runtime.jsxs
                                                                    )(
                                                                        card.a
                                                                            .Grid,
                                                                        {
                                                                            style: Object.assign(
                                                                                {},
                                                                                gridStyle2,
                                                                                {
                                                                                    textAlign:
                                                                                        'left',
                                                                                    marginRight: 10,
                                                                                    marginBottom: 10,
                                                                                }
                                                                            ),
                                                                            children:
                                                                                [
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        'img',
                                                                                        {
                                                                                            style: {
                                                                                                width: 50,
                                                                                            },
                                                                                            src: 'https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Title,
                                                                                        {
                                                                                            style: {
                                                                                                marginTop: 0,
                                                                                            },
                                                                                            level: 5,
                                                                                            children:
                                                                                                'Indentity, Citizenship, and Human Resource',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Paragraph,
                                                                                        {
                                                                                            children:
                                                                                                'Residency, Identity , Entry permit, and work',
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                    Object(
                                                                        jsx_runtime.jsxs
                                                                    )(
                                                                        card.a
                                                                            .Grid,
                                                                        {
                                                                            style: Object.assign(
                                                                                {},
                                                                                gridStyle2,
                                                                                {
                                                                                    textAlign:
                                                                                        'left',
                                                                                    marginRight: 10,
                                                                                    marginBottom: 10,
                                                                                }
                                                                            ),
                                                                            children:
                                                                                [
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        'img',
                                                                                        {
                                                                                            style: {
                                                                                                width: 50,
                                                                                            },
                                                                                            src: 'https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Title,
                                                                                        {
                                                                                            style: {
                                                                                                marginTop: 0,
                                                                                            },
                                                                                            level: 5,
                                                                                            children:
                                                                                                'Indentity, Citizenship, and Human Resource',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Paragraph,
                                                                                        {
                                                                                            children:
                                                                                                'Residency, Identity , Entry permit, and work',
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                    Object(
                                                                        jsx_runtime.jsxs
                                                                    )(
                                                                        card.a
                                                                            .Grid,
                                                                        {
                                                                            style: Object.assign(
                                                                                {},
                                                                                gridStyle2,
                                                                                {
                                                                                    textAlign:
                                                                                        'left',
                                                                                    marginRight: 10,
                                                                                    marginBottom: 10,
                                                                                }
                                                                            ),
                                                                            children:
                                                                                [
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        'img',
                                                                                        {
                                                                                            style: {
                                                                                                width: 50,
                                                                                            },
                                                                                            src: 'https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Title,
                                                                                        {
                                                                                            style: {
                                                                                                marginTop: 0,
                                                                                            },
                                                                                            level: 5,
                                                                                            children:
                                                                                                'Indentity, Citizenship, and Human Resource',
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        jsx_runtime.jsx
                                                                                    )(
                                                                                        Paragraph,
                                                                                        {
                                                                                            children:
                                                                                                'Residency, Identity , Entry permit, and work',
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                        };
                                                    }),
                                                }),
                                            }
                                        ),
                                    }),
                                    Object(jsx_runtime.jsx)(card.a.Grid, {
                                        style: {
                                            borderRadius: '0px',
                                            border: '0px',
                                            padding: '0px',
                                        },
                                        children: Object(jsx_runtime.jsxs)(
                                            card.a,
                                            {
                                                style: {
                                                    boxShadow: '0px',
                                                    borderRadius: '0px',
                                                    border: '0px',
                                                    padding: 0,
                                                },
                                                children: [
                                                    Object(jsx_runtime.jsx)(
                                                        Title,
                                                        {
                                                            level: 4,
                                                            children:
                                                                'Most Popular',
                                                        }
                                                    ),
                                                    Object(jsx_runtime.jsx)(
                                                        divider.a,
                                                        {
                                                            style: {
                                                                margin: '15px 0px',
                                                            },
                                                        }
                                                    ),
                                                    Object(jsx_runtime.jsxs)(
                                                        card.a,
                                                        {
                                                            style: {
                                                                boxShadow:
                                                                    'none',
                                                                borderRadius:
                                                                    '0px',
                                                                border: '0px',
                                                                borderColor:
                                                                    'white',
                                                            },
                                                            children: [
                                                                Object(
                                                                    jsx_runtime.jsxs
                                                                )(card.a.Grid, {
                                                                    style: Object.assign(
                                                                        {},
                                                                        gridStyle,
                                                                        {
                                                                            padding: 0,
                                                                            display:
                                                                                'block',
                                                                            textAlign:
                                                                                'left',
                                                                            boxShadow:
                                                                                'none',
                                                                            border: 'none',
                                                                            borderColor:
                                                                                'white',
                                                                        }
                                                                    ),
                                                                    children: [
                                                                        Object(
                                                                            jsx_runtime.jsx
                                                                        )(
                                                                            Title,
                                                                            {
                                                                                level: 5,
                                                                                children:
                                                                                    'Passport renew',
                                                                            }
                                                                        ),
                                                                        Object(
                                                                            jsx_runtime.jsx
                                                                        )(
                                                                            Paragraph,
                                                                            {
                                                                                style: {
                                                                                    lineHeight:
                                                                                        'normal',
                                                                                },
                                                                                children:
                                                                                    ' this service, you can request the issuance of an ownership deed of land and real estate to prove ownership.',
                                                                            }
                                                                        ),
                                                                    ],
                                                                }),
                                                                Object(
                                                                    jsx_runtime.jsxs
                                                                )(card.a.Grid, {
                                                                    style: Object.assign(
                                                                        {},
                                                                        gridStyle,
                                                                        {
                                                                            padding: 0,
                                                                            display:
                                                                                'block',
                                                                            textAlign:
                                                                                'left',
                                                                            boxShadow:
                                                                                'none',
                                                                            border: 'none',
                                                                            borderColor:
                                                                                'white',
                                                                        }
                                                                    ),
                                                                    children: [
                                                                        Object(
                                                                            jsx_runtime.jsx
                                                                        )(
                                                                            Title,
                                                                            {
                                                                                level: 5,
                                                                                children:
                                                                                    'Renew Residency',
                                                                            }
                                                                        ),
                                                                        Object(
                                                                            jsx_runtime.jsx
                                                                        )(
                                                                            Paragraph,
                                                                            {
                                                                                style: {
                                                                                    lineHeight:
                                                                                        'normal',
                                                                                },
                                                                                children:
                                                                                    ' this service, you can request the issuance of an ownership deed of land and real estate to prove ownership.',
                                                                            }
                                                                        ),
                                                                    ],
                                                                }),
                                                                '   ',
                                                                Object(
                                                                    jsx_runtime.jsxs
                                                                )(card.a.Grid, {
                                                                    style: Object.assign(
                                                                        {},
                                                                        gridStyle,
                                                                        {
                                                                            padding: 0,
                                                                            display:
                                                                                'block',
                                                                            textAlign:
                                                                                'left',
                                                                            boxShadow:
                                                                                'none',
                                                                            border: 'none',
                                                                            borderColor:
                                                                                'white',
                                                                        }
                                                                    ),
                                                                    children: [
                                                                        Object(
                                                                            jsx_runtime.jsx
                                                                        )(
                                                                            Title,
                                                                            {
                                                                                level: 5,
                                                                                children:
                                                                                    'Maintance Request',
                                                                            }
                                                                        ),
                                                                        Object(
                                                                            jsx_runtime.jsx
                                                                        )(
                                                                            Paragraph,
                                                                            {
                                                                                style: {
                                                                                    lineHeight:
                                                                                        'normal',
                                                                                },
                                                                                children:
                                                                                    ' this service, you can request the issuance of an ownership deed of land and real estate to prove ownership.',
                                                                            }
                                                                        ),
                                                                    ],
                                                                }),
                                                                '   ',
                                                                Object(
                                                                    jsx_runtime.jsxs
                                                                )(card.a.Grid, {
                                                                    style: Object.assign(
                                                                        {},
                                                                        gridStyle,
                                                                        {
                                                                            padding: 0,
                                                                            display:
                                                                                'block',
                                                                            textAlign:
                                                                                'left',
                                                                            boxShadow:
                                                                                'none',
                                                                            border: 'none',
                                                                            borderColor:
                                                                                'white',
                                                                        }
                                                                    ),
                                                                    children: [
                                                                        Object(
                                                                            jsx_runtime.jsx
                                                                        )(
                                                                            Title,
                                                                            {
                                                                                level: 5,
                                                                                children:
                                                                                    'Request to ownership deed',
                                                                            }
                                                                        ),
                                                                        Object(
                                                                            jsx_runtime.jsx
                                                                        )(
                                                                            Paragraph,
                                                                            {
                                                                                style: {
                                                                                    lineHeight:
                                                                                        'normal',
                                                                                },
                                                                                children:
                                                                                    ' this service, you can request the issuance of an ownership deed of land and real estate to prove ownership.',
                                                                            }
                                                                        ),
                                                                    ],
                                                                }),
                                                                '   ',
                                                                Object(
                                                                    jsx_runtime.jsxs
                                                                )(card.a.Grid, {
                                                                    style: Object.assign(
                                                                        {},
                                                                        gridStyle,
                                                                        {
                                                                            padding: 0,
                                                                            display:
                                                                                'block',
                                                                            textAlign:
                                                                                'left',
                                                                            boxShadow:
                                                                                'none',
                                                                            border: 'none',
                                                                            borderColor:
                                                                                'white',
                                                                        }
                                                                    ),
                                                                    children: [
                                                                        Object(
                                                                            jsx_runtime.jsx
                                                                        )(
                                                                            Title,
                                                                            {
                                                                                level: 5,
                                                                                children:
                                                                                    'Annual report request',
                                                                            }
                                                                        ),
                                                                        Object(
                                                                            jsx_runtime.jsx
                                                                        )(
                                                                            Paragraph,
                                                                            {
                                                                                style: {
                                                                                    lineHeight:
                                                                                        'normal',
                                                                                },
                                                                                children:
                                                                                    ' this service, you can request the issuance of an ownership deed of land and real estate to prove ownership.',
                                                                            }
                                                                        ),
                                                                    ],
                                                                }),
                                                                '   ',
                                                                Object(
                                                                    jsx_runtime.jsxs
                                                                )(card.a.Grid, {
                                                                    style: Object.assign(
                                                                        {},
                                                                        gridStyle,
                                                                        {
                                                                            padding: 0,
                                                                            display:
                                                                                'block',
                                                                            textAlign:
                                                                                'left',
                                                                            boxShadow:
                                                                                'none',
                                                                            border: 'none',
                                                                            borderColor:
                                                                                'white',
                                                                        }
                                                                    ),
                                                                    children: [
                                                                        Object(
                                                                            jsx_runtime.jsx
                                                                        )(
                                                                            Title,
                                                                            {
                                                                                level: 5,
                                                                                children:
                                                                                    'Request to ownership deed',
                                                                            }
                                                                        ),
                                                                        Object(
                                                                            jsx_runtime.jsx
                                                                        )(
                                                                            Paragraph,
                                                                            {
                                                                                style: {
                                                                                    lineHeight:
                                                                                        'normal',
                                                                                },
                                                                                children:
                                                                                    ' this service, you can request the issuance of an ownership deed of land and real estate to prove ownership.',
                                                                            }
                                                                        ),
                                                                    ],
                                                                }),
                                                            ],
                                                        }
                                                    ),
                                                ],
                                            }
                                        ),
                                    }),
                                    Object(jsx_runtime.jsxs)(card.a, {
                                        hoverable: !1,
                                        style: {
                                            borderRadius: '0px',
                                            border: '0px',
                                            padding: 20,
                                            boxShadow: 'none',
                                        },
                                        children: [
                                            Object(jsx_runtime.jsxs)(
                                                card.a.Grid,
                                                {
                                                    hoverable: !1,
                                                    style: {
                                                        boxShadow: 'none',
                                                        borderRadius: '0px',
                                                        border: '0px',
                                                        padding: 0,
                                                        width: '50%',
                                                    },
                                                    children: [
                                                        Object(jsx_runtime.jsx)(
                                                            Title,
                                                            {
                                                                level: 3,
                                                                children:
                                                                    'Best school Award',
                                                            }
                                                        ),
                                                        Object(jsx_runtime.jsx)(
                                                            Paragraph,
                                                            {
                                                                style: {
                                                                    lineHeight:
                                                                        'normal',
                                                                },
                                                                children:
                                                                    ' Thrive in Abu Dhabi promotes long-term Golden Visas and a pathway to citizenship for individuals working, creating and studying in key sectors and specialties in Abu Dhabi. The UAE’s Golden Visa is available in Abu Dhabi for international talent and investors and top talent, providing them and their families with visas for 5 to 10 years. The programme targets professionals, researchers and students in the knowledge fields such as doctors, scientists and inventors. It is also open to talented creative and sporting individuals, and business, start-up and real estate investors. Long-term visas empower talented expats to set down roots in the emirate, contributing to growth in Abu Dhabi’s priority sectors such as culture, healthcare, research and development (R&D) and real estate',
                                                            }
                                                        ),
                                                    ],
                                                }
                                            ),
                                            Object(jsx_runtime.jsx)(
                                                card.a.Grid,
                                                {
                                                    style: {
                                                        boxShadow: 'none',
                                                        borderRadius: '0px',
                                                        border: '0px',
                                                        padding: 0,
                                                        width: '50%',
                                                    },
                                                    children: Object(
                                                        jsx_runtime.jsx
                                                    )('img', {
                                                        style: {
                                                            width: '100%',
                                                        },
                                                        src: 'https://eps.ae/wp-content/uploads/2023/05/stop-bullying-school-895x430.jpg',
                                                    }),
                                                }
                                            ),
                                        ],
                                    }),
                                    Object(jsx_runtime.jsxs)(card.a, {
                                        hoverable: !1,
                                        style: {
                                            borderRadius: '0px',
                                            border: '0px',
                                            padding: 20,
                                            boxShadow: 'none',
                                        },
                                        children: [
                                            Object(jsx_runtime.jsx)(
                                                card.a.Grid,
                                                {
                                                    style: {
                                                        boxShadow: 'none',
                                                        borderRadius: '0px',
                                                        border: '0px',
                                                        padding: 0,
                                                        width: '50%',
                                                    },
                                                    children: Object(
                                                        jsx_runtime.jsx
                                                    )('img', {
                                                        style: {
                                                            width: '100%',
                                                        },
                                                        src: 'https://eps.ae/wp-content/uploads/2023/05/stop-bullying-school-895x430.jpg',
                                                    }),
                                                }
                                            ),
                                            Object(jsx_runtime.jsxs)(
                                                card.a.Grid,
                                                {
                                                    hoverable: !1,
                                                    style: {
                                                        boxShadow: 'none',
                                                        borderRadius: '0px',
                                                        border: '0px',
                                                        padding: 0,
                                                        width: '50%',
                                                    },
                                                    children: [
                                                        Object(jsx_runtime.jsx)(
                                                            Title,
                                                            {
                                                                level: 3,
                                                                style: {
                                                                    padding: 30,
                                                                },
                                                                children:
                                                                    'Best school Award',
                                                            }
                                                        ),
                                                        Object(jsx_runtime.jsx)(
                                                            Paragraph,
                                                            {
                                                                style: {
                                                                    lineHeight:
                                                                        'normal',
                                                                },
                                                                children:
                                                                    ' Thrive in Abu Dhabi promotes long-term Golden Visas and a pathway to citizenship for individuals working, creating and studying in key sectors and specialties in Abu Dhabi. The UAE’s Golden Visa is available in Abu Dhabi for international talent and investors and top talent, providing them and their families with visas for 5 to 10 years. The programme targets professionals, researchers and students in the knowledge fields such as doctors, scientists and inventors. It is also open to talented creative and sporting individuals, and business, start-up and real estate investors. Long-term visas empower talented expats to set down roots in the emirate, contributing to growth in Abu Dhabi’s priority sectors such as culture, healthcare, research and development (R&D) and real estate',
                                                            }
                                                        ),
                                                    ],
                                                }
                                            ),
                                        ],
                                    }),
                                    Object(jsx_runtime.jsx)(Footer, {
                                        style: { textAlign: 'center' },
                                        children:
                                            'Ant Design ©2023 Created by Ant UED',
                                    }),
                                ],
                            }),
                        }),
                    ],
                });
            };
            try {
                (startPage.displayName = 'startPage'),
                    (startPage.__docgenInfo = {
                        description: '',
                        displayName: 'startPage',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Pages/startPage.tsx#startPage'
                        ] = {
                            docgenInfo: startPage.__docgenInfo,
                            name: 'startPage',
                            path: 'src/Pages/startPage.tsx#startPage',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            (__webpack_exports__.default = { title: 'Page Templates' }),
                typography.a;
            var startPage_stories_StartPage = function StartPage() {
                return Object(jsx_runtime.jsx)(Pages_startPage, {});
            };
            (startPage_stories_StartPage.displayName = 'StartPage'),
                (startPage_stories_StartPage.parameters = Object.assign(
                    { storySource: { source: '() => <StartPageTemplate />' } },
                    startPage_stories_StartPage.parameters
                ));
        },
        './src/Pages/styles.css': function (
            module,
            exports,
            __webpack_require__
        ) {
            var api = __webpack_require__(
                    './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
                ),
                content = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/Pages/styles.css'
                );
            'string' ==
                typeof (content = content.__esModule
                    ? content.default
                    : content) && (content = [[module.i, content, '']]);
            var options = { insert: 'head', singleton: !1 };
            api(content, options);
            module.exports = content.locals || {};
        },
        './src/ProcessTracker/processTracker.stories.tsx': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Horizontal',
                    function () {
                        return processTracker_stories_Horizontal;
                    }
                ),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Small',
                    function () {
                        return processTracker_stories_Small;
                    }
                ),
                __webpack_require__.d(
                    __webpack_exports__,
                    'WithIcon',
                    function () {
                        return processTracker_stories_WithIcon;
                    }
                ),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Vertical',
                    function () {
                        return processTracker_stories_Vertical;
                    }
                ),
                __webpack_require__.d(
                    __webpack_exports__,
                    'WithContent',
                    function () {
                        return processTracker_stories_WithContent;
                    }
                );
            __webpack_require__(
                './node_modules/core-js/modules/es.object.assign.js'
            );
            var react = __webpack_require__('./node_modules/react/index.js'),
                steps =
                    (__webpack_require__(
                        './node_modules/core-js/modules/es.array.map.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.array.is-array.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.symbol.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.symbol.description.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.object.to-string.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.symbol.iterator.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.string.iterator.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.array.iterator.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/web.dom-collections.iterator.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.array.slice.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.function.name.js'
                    ),
                    __webpack_require__(
                        './node_modules/core-js/modules/es.array.from.js'
                    ),
                    __webpack_require__(
                        './node_modules/antd/es/steps/index.js'
                    )),
                theme = __webpack_require__(
                    './node_modules/antd/es/theme/index.js'
                ),
                es_button = __webpack_require__(
                    './node_modules/antd/es/button/index.js'
                ),
                message = __webpack_require__(
                    './node_modules/antd/es/message/index.js'
                ),
                jsx_runtime = __webpack_require__(
                    './node_modules/react/jsx-runtime.js'
                );
            function _slicedToArray(arr, i) {
                return (
                    (function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr;
                    })(arr) ||
                    (function _iterableToArrayLimit(arr, i) {
                        var _i =
                            null == arr
                                ? null
                                : ('undefined' != typeof Symbol &&
                                      arr[Symbol.iterator]) ||
                                  arr['@@iterator'];
                        if (null != _i) {
                            var _s,
                                _e,
                                _x,
                                _r,
                                _arr = [],
                                _n = !0,
                                _d = !1;
                            try {
                                if (
                                    ((_x = (_i = _i.call(arr)).next), 0 === i)
                                ) {
                                    if (Object(_i) !== _i) return;
                                    _n = !1;
                                } else
                                    for (
                                        ;
                                        !(_n = (_s = _x.call(_i)).done) &&
                                        (_arr.push(_s.value),
                                        _arr.length !== i);
                                        _n = !0
                                    );
                            } catch (err) {
                                (_d = !0), (_e = err);
                            } finally {
                                try {
                                    if (
                                        !_n &&
                                        null != _i.return &&
                                        ((_r = _i.return()), Object(_r) !== _r)
                                    )
                                        return;
                                } finally {
                                    if (_d) throw _e;
                                }
                            }
                            return _arr;
                        }
                    })(arr, i) ||
                    (function _unsupportedIterableToArray(o, minLen) {
                        if (!o) return;
                        if ('string' == typeof o)
                            return _arrayLikeToArray(o, minLen);
                        var n = Object.prototype.toString.call(o).slice(8, -1);
                        'Object' === n &&
                            o.constructor &&
                            (n = o.constructor.name);
                        if ('Map' === n || 'Set' === n) return Array.from(o);
                        if (
                            'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                            return _arrayLikeToArray(o, minLen);
                    })(arr, i) ||
                    (function _nonIterableRest() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++)
                    arr2[i] = arr[i];
                return arr2;
            }
            var processTracker_ProcessTracker = function ProcessTracker(props) {
                return Object(jsx_runtime.jsx)(
                    steps.a,
                    Object.assign({}, props)
                );
            };
            processTracker_ProcessTracker.displayName = 'ProcessTracker';
            var ProcessTracker_processTracker = processTracker_ProcessTracker,
                processTracker_steps = [
                    { title: 'First', content: 'First-content' },
                    { title: 'Second', content: 'Second-content' },
                    { title: 'Last', content: 'Last-content' },
                ],
                processTracker_StepTrackerContnet =
                    function StepTrackerContnet() {
                        var token = theme.a.useToken().token,
                            _useState2 = _slicedToArray(
                                Object(react.useState)(0),
                                2
                            ),
                            current = _useState2[0],
                            setCurrent = _useState2[1],
                            items = processTracker_steps.map(function (item) {
                                return { key: item.title, title: item.title };
                            }),
                            contentStyle = {
                                lineHeight: '260px',
                                textAlign: 'center',
                                color: token.colorTextTertiary,
                                backgroundColor: token.colorFillAlter,
                                borderRadius: token.borderRadiusLG,
                                border: '1px dashed ' + token.colorBorder,
                                marginTop: 16,
                            };
                        return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                Object(jsx_runtime.jsx)(steps.a, {
                                    current: current,
                                    items: items,
                                }),
                                Object(jsx_runtime.jsx)('div', {
                                    style: contentStyle,
                                    children:
                                        processTracker_steps[current].content,
                                }),
                                Object(jsx_runtime.jsxs)('div', {
                                    style: { marginTop: 24 },
                                    children: [
                                        current <
                                            processTracker_steps.length - 1 &&
                                            Object(jsx_runtime.jsx)(
                                                es_button.a,
                                                {
                                                    type: 'primary',
                                                    onClick:
                                                        function onClick() {
                                                            return (function next() {
                                                                setCurrent(
                                                                    current + 1
                                                                );
                                                            })();
                                                        },
                                                    children: 'Next',
                                                }
                                            ),
                                        current ===
                                            processTracker_steps.length - 1 &&
                                            Object(jsx_runtime.jsx)(
                                                es_button.a,
                                                {
                                                    type: 'primary',
                                                    onClick:
                                                        function onClick() {
                                                            return message.a.success(
                                                                'Processing complete!'
                                                            );
                                                        },
                                                    children: 'Done',
                                                }
                                            ),
                                        current > 0 &&
                                            Object(jsx_runtime.jsx)(
                                                es_button.a,
                                                {
                                                    style: { margin: '0 8px' },
                                                    onClick:
                                                        function onClick() {
                                                            return (function prev() {
                                                                setCurrent(
                                                                    current - 1
                                                                );
                                                            })();
                                                        },
                                                    children: 'Previous',
                                                }
                                            ),
                                    ],
                                }),
                            ],
                        });
                    };
            try {
                (processTracker.displayName = 'processTracker'),
                    (processTracker.__docgenInfo = {
                        description: '',
                        displayName: 'processTracker',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/ProcessTracker/processTracker.tsx#processTracker'
                        ] = {
                            docgenInfo: processTracker.__docgenInfo,
                            name: 'processTracker',
                            path: 'src/ProcessTracker/processTracker.tsx#processTracker',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (processTracker_StepTrackerContnet.displayName =
                    'StepTrackerContnet'),
                    (processTracker_StepTrackerContnet.__docgenInfo = {
                        description: '',
                        displayName: 'StepTrackerContnet',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/ProcessTracker/processTracker.tsx#StepTrackerContnet'
                        ] = {
                            docgenInfo:
                                processTracker_StepTrackerContnet.__docgenInfo,
                            name: 'StepTrackerContnet',
                            path: 'src/ProcessTracker/processTracker.tsx#StepTrackerContnet',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var UserOutlined = __webpack_require__(
                    './node_modules/@ant-design/icons/es/icons/UserOutlined.js'
                ),
                SolutionOutlined = __webpack_require__(
                    './node_modules/@ant-design/icons/es/icons/SolutionOutlined.js'
                ),
                LoadingOutlined = __webpack_require__(
                    './node_modules/@ant-design/icons/es/icons/LoadingOutlined.js'
                ),
                SmileOutlined = __webpack_require__(
                    './node_modules/@ant-design/icons/es/icons/SmileOutlined.js'
                ),
                description =
                    ((__webpack_exports__.default = {
                        title: 'Process Tracker',
                    }),
                    'This is a description.'),
                processTracker_stories_items = [
                    { title: 'Finished', description: description },
                    {
                        title: 'In Progress',
                        description: description,
                        subTitle: 'Left 00:00:08',
                    },
                    { title: 'Waiting', description: description },
                ],
                itemsWithIcon = [
                    {
                        title: 'Login',
                        status: 'finish',
                        icon: Object(jsx_runtime.jsx)(UserOutlined.a, {}),
                    },
                    {
                        title: 'Verification',
                        status: 'finish',
                        icon: Object(jsx_runtime.jsx)(SolutionOutlined.a, {}),
                    },
                    {
                        title: 'Pay',
                        status: 'process',
                        icon: Object(jsx_runtime.jsx)(LoadingOutlined.a, {}),
                    },
                    {
                        title: 'Done',
                        status: 'wait',
                        icon: Object(jsx_runtime.jsx)(SmileOutlined.a, {}),
                    },
                ],
                processTracker_stories_Horizontal = function Horizontal(args) {
                    return Object(jsx_runtime.jsx)(
                        ProcessTracker_processTracker,
                        Object.assign({}, args)
                    );
                };
            (processTracker_stories_Horizontal.displayName = 'Horizontal'),
                (processTracker_stories_Horizontal.args = {
                    current: 1,
                    items: processTracker_stories_items,
                });
            var processTracker_stories_Small = function Small(args) {
                return Object(jsx_runtime.jsx)(
                    ProcessTracker_processTracker,
                    Object.assign({}, args)
                );
            };
            (processTracker_stories_Small.displayName = 'Small'),
                (processTracker_stories_Small.args = {
                    current: 1,
                    items: processTracker_stories_items,
                    size: 'small',
                });
            var processTracker_stories_WithIcon = function WithIcon(args) {
                return Object(jsx_runtime.jsx)(
                    ProcessTracker_processTracker,
                    Object.assign({}, args)
                );
            };
            (processTracker_stories_WithIcon.displayName = 'WithIcon'),
                (processTracker_stories_WithIcon.args = {
                    current: 1,
                    items: itemsWithIcon,
                    size: 'small',
                });
            var processTracker_stories_Vertical = function Vertical(args) {
                return Object(jsx_runtime.jsx)(
                    ProcessTracker_processTracker,
                    Object.assign({}, args)
                );
            };
            (processTracker_stories_Vertical.displayName = 'Vertical'),
                (processTracker_stories_Vertical.args = {
                    current: 1,
                    items: processTracker_stories_items,
                    direction: 'vertical',
                });
            var processTracker_stories_WithContent = function WithContent(
                args
            ) {
                return Object(jsx_runtime.jsx)(
                    processTracker_StepTrackerContnet,
                    Object.assign({}, args)
                );
            };
            (processTracker_stories_WithContent.displayName = 'WithContent'),
                (processTracker_stories_Horizontal.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <ProcessTracker  {...args} />',
                        },
                    },
                    processTracker_stories_Horizontal.parameters
                )),
                (processTracker_stories_Small.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <ProcessTracker  {...args} />',
                        },
                    },
                    processTracker_stories_Small.parameters
                )),
                (processTracker_stories_WithIcon.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <ProcessTracker  {...args} />',
                        },
                    },
                    processTracker_stories_WithIcon.parameters
                )),
                (processTracker_stories_Vertical.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <ProcessTracker  {...args} />',
                        },
                    },
                    processTracker_stories_Vertical.parameters
                )),
                (processTracker_stories_WithContent.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <StepTrackerContnet  {...args} />',
                        },
                    },
                    processTracker_stories_WithContent.parameters
                ));
            try {
                (processTracker_stories_Horizontal.displayName = 'Horizontal'),
                    (processTracker_stories_Horizontal.__docgenInfo = {
                        description: '',
                        displayName: 'Horizontal',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/ProcessTracker/processTracker.stories.tsx#Horizontal'
                        ] = {
                            docgenInfo:
                                processTracker_stories_Horizontal.__docgenInfo,
                            name: 'Horizontal',
                            path: 'src/ProcessTracker/processTracker.stories.tsx#Horizontal',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (processTracker_stories_Small.displayName = 'Small'),
                    (processTracker_stories_Small.__docgenInfo = {
                        description: '',
                        displayName: 'Small',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/ProcessTracker/processTracker.stories.tsx#Small'
                        ] = {
                            docgenInfo:
                                processTracker_stories_Small.__docgenInfo,
                            name: 'Small',
                            path: 'src/ProcessTracker/processTracker.stories.tsx#Small',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (processTracker_stories_WithIcon.displayName = 'WithIcon'),
                    (processTracker_stories_WithIcon.__docgenInfo = {
                        description: '',
                        displayName: 'WithIcon',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/ProcessTracker/processTracker.stories.tsx#WithIcon'
                        ] = {
                            docgenInfo:
                                processTracker_stories_WithIcon.__docgenInfo,
                            name: 'WithIcon',
                            path: 'src/ProcessTracker/processTracker.stories.tsx#WithIcon',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (processTracker_stories_Vertical.displayName = 'Vertical'),
                    (processTracker_stories_Vertical.__docgenInfo = {
                        description: '',
                        displayName: 'Vertical',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/ProcessTracker/processTracker.stories.tsx#Vertical'
                        ] = {
                            docgenInfo:
                                processTracker_stories_Vertical.__docgenInfo,
                            name: 'Vertical',
                            path: 'src/ProcessTracker/processTracker.stories.tsx#Vertical',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (processTracker_stories_WithContent.displayName =
                    'WithContent'),
                    (processTracker_stories_WithContent.__docgenInfo = {
                        description: '',
                        displayName: 'WithContent',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/ProcessTracker/processTracker.stories.tsx#WithContent'
                        ] = {
                            docgenInfo:
                                processTracker_stories_WithContent.__docgenInfo,
                            name: 'WithContent',
                            path: 'src/ProcessTracker/processTracker.stories.tsx#WithContent',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/Radio/radio.stories.tsx': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Basic',
                    function () {
                        return radio_stories_Basic;
                    }
                );
            __webpack_require__(
                './node_modules/core-js/modules/es.object.assign.js'
            ),
                __webpack_require__('./node_modules/react/index.js');
            var es_radio = __webpack_require__(
                    './node_modules/antd/es/radio/index.js'
                ),
                jsx_runtime = __webpack_require__(
                    './node_modules/react/jsx-runtime.js'
                ),
                radio_App = function App() {
                    return Object(jsx_runtime.jsx)(es_radio.a, {
                        children: 'Radio',
                    });
                };
            radio_App.displayName = 'App';
            var Radio_radio = radio_App;
            try {
                (radio.displayName = 'radio'),
                    (radio.__docgenInfo = {
                        description: '',
                        displayName: 'radio',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['src/Radio/radio.tsx#radio'] =
                            {
                                docgenInfo: radio.__docgenInfo,
                                name: 'radio',
                                path: 'src/Radio/radio.tsx#radio',
                            });
            } catch (__react_docgen_typescript_loader_error) {}
            __webpack_exports__.default = { title: 'Radio' };
            var radio_stories_Basic = function Basic(args) {
                return Object(jsx_runtime.jsx)(
                    Radio_radio,
                    Object.assign({}, args)
                );
            };
            (radio_stories_Basic.displayName = 'Basic'),
                (radio_stories_Basic.args = {}),
                (radio_stories_Basic.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <Radio {...args} />',
                        },
                    },
                    radio_stories_Basic.parameters
                ));
            try {
                (radio_stories_Basic.displayName = 'Basic'),
                    (radio_stories_Basic.__docgenInfo = {
                        description: '',
                        displayName: 'Basic',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Radio/radio.stories.tsx#Basic'
                        ] = {
                            docgenInfo: radio_stories_Basic.__docgenInfo,
                            name: 'Basic',
                            path: 'src/Radio/radio.stories.tsx#Basic',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/Tables/tables.stories.tsx': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Primary',
                    function () {
                        return tables_stories_Primary;
                    }
                );
            __webpack_require__(
                './node_modules/core-js/modules/es.array.map.js'
            ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.function.name.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.object.assign.js'
                ),
                __webpack_require__('./node_modules/react/index.js');
            var table = __webpack_require__(
                    './node_modules/antd/es/table/index.js'
                ),
                jsx_runtime = __webpack_require__(
                    './node_modules/react/jsx-runtime.js'
                ),
                tables_Button = function Button(props) {
                    return Object(jsx_runtime.jsx)(
                        table.a,
                        Object.assign({}, props)
                    );
                };
            tables_Button.displayName = 'Button';
            var Tables_tables = tables_Button;
            try {
                (tables.displayName = 'tables'),
                    (tables.__docgenInfo = {
                        description: '',
                        displayName: 'tables',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Tables/tables.tsx#tables'
                        ] = {
                            docgenInfo: tables.__docgenInfo,
                            name: 'tables',
                            path: 'src/Tables/tables.tsx#tables',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            var Tables = Tables_tables,
                es_tag = __webpack_require__(
                    './node_modules/antd/es/tag/index.js'
                ),
                space = __webpack_require__(
                    './node_modules/antd/es/space/index.js'
                ),
                columns =
                    ((__webpack_exports__.default = { title: 'Tables' }),
                    [
                        {
                            title: 'Name',
                            dataIndex: 'name',
                            key: 'name',
                            render: function render(text) {
                                return Object(jsx_runtime.jsx)('a', {
                                    children: text,
                                });
                            },
                        },
                        { title: 'Age', dataIndex: 'age', key: 'age' },
                        {
                            title: 'Address',
                            dataIndex: 'address',
                            key: 'address',
                        },
                        {
                            title: 'Tags',
                            key: 'tags',
                            dataIndex: 'tags',
                            render: function render(_, _ref) {
                                var tags = _ref.tags;
                                return Object(jsx_runtime.jsx)(
                                    jsx_runtime.Fragment,
                                    {
                                        children: tags.map(function (tag) {
                                            var color =
                                                tag.length > 5
                                                    ? 'geekblue'
                                                    : 'green';
                                            return (
                                                'loser' === tag &&
                                                    (color = 'volcano'),
                                                Object(jsx_runtime.jsx)(
                                                    es_tag.a,
                                                    {
                                                        color: color,
                                                        children:
                                                            tag.toUpperCase(),
                                                    },
                                                    tag
                                                )
                                            );
                                        }),
                                    }
                                );
                            },
                        },
                        {
                            title: 'Action',
                            key: 'action',
                            render: function render(_, record) {
                                return Object(jsx_runtime.jsxs)(space.b, {
                                    size: 'middle',
                                    children: [
                                        Object(jsx_runtime.jsxs)('a', {
                                            children: ['Invite ', record.name],
                                        }),
                                        Object(jsx_runtime.jsx)('a', {
                                            children: 'Delete',
                                        }),
                                    ],
                                });
                            },
                        },
                    ]),
                tables_stories_Primary = function Primary(args) {
                    return Object(jsx_runtime.jsx)(
                        Tables,
                        Object.assign({}, args)
                    );
                };
            (tables_stories_Primary.displayName = 'Primary'),
                (tables_stories_Primary.args = {
                    columns: columns,
                    dataSource: [
                        {
                            key: '1',
                            name: 'John Brown',
                            age: 32,
                            address: 'New York No. 1 Lake Park',
                            tags: ['nice', 'developer'],
                        },
                        {
                            key: '2',
                            name: 'Jim Green',
                            age: 42,
                            address: 'London No. 1 Lake Park',
                            tags: ['loser'],
                        },
                        {
                            key: '3',
                            name: 'Joe Black',
                            age: 32,
                            address: 'Sydney No. 1 Lake Park',
                            tags: ['cool', 'teacher'],
                        },
                    ],
                }),
                (tables_stories_Primary.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <Tables {...args} />',
                        },
                    },
                    tables_stories_Primary.parameters
                ));
            try {
                (tables_stories_Primary.displayName = 'Primary'),
                    (tables_stories_Primary.__docgenInfo = {
                        description: '',
                        displayName: 'Primary',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Tables/tables.stories.tsx#Primary'
                        ] = {
                            docgenInfo: tables_stories_Primary.__docgenInfo,
                            name: 'Primary',
                            path: 'src/Tables/tables.stories.tsx#Primary',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './src/TestComponent/TestComponent.stories.tsx': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    'WithText',
                    function () {
                        return TestComponent_stories_WithText;
                    }
                ),
                __webpack_require__.d(
                    __webpack_exports__,
                    'WithButtons',
                    function () {
                        return TestComponent_stories_WithButtons;
                    }
                );
            __webpack_require__(
                './node_modules/core-js/modules/es.object.assign.js'
            ),
                __webpack_require__('./node_modules/react/index.js');
            var card = __webpack_require__(
                    './node_modules/antd/es/card/index.js'
                ),
                jsx_runtime = __webpack_require__(
                    './node_modules/react/jsx-runtime.js'
                ),
                Meta = card.a.Meta;
            function AntdCard() {
                return Object(jsx_runtime.jsx)(card.a, {
                    hoverable: !0,
                    style: { width: 250 },
                    cover: Object(jsx_runtime.jsx)('img', {
                        alt: 'example',
                        src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
                    }),
                    children: Object(jsx_runtime.jsx)(Meta, {
                        title: 'Europe Street beat',
                        description: 'www.instagram.com',
                    }),
                });
            }
            AntdCard.displayName = 'AntdCard';
            __webpack_exports__.default = { title: 'TestComponent' };
            var TestComponent_stories_WithText = function WithText() {
                return Object(jsx_runtime.jsx)(AntdCard, {
                    heading: 'I am a test component',
                    content: Object(jsx_runtime.jsx)('h2', {
                        children: 'Made with love by Harvey',
                    }),
                });
            };
            TestComponent_stories_WithText.displayName = 'WithText';
            var TestComponent_stories_WithButtons = function WithButtons() {
                return Object(jsx_runtime.jsx)(AntdCard, {
                    heading: 'I have a button',
                    content: Object(jsx_runtime.jsx)('div', {
                        children: Object(jsx_runtime.jsx)('button', {
                            onClick: function onClick() {
                                return alert('You clicked me!');
                            },
                            children: 'Click me',
                        }),
                    }),
                });
            };
            (TestComponent_stories_WithButtons.displayName = 'WithButtons'),
                (TestComponent_stories_WithText.parameters = Object.assign(
                    {
                        storySource: {
                            source: '() => (\n  <TestComponent\n    heading="I am a test component"\n    content={<h2>Made with love by Harvey</h2>}\n  />\n)',
                        },
                    },
                    TestComponent_stories_WithText.parameters
                )),
                (TestComponent_stories_WithButtons.parameters = Object.assign(
                    {
                        storySource: {
                            source: '() => (\n  <TestComponent\n    heading="I have a button"\n    content={\n      <div>\n        <button onClick={() => alert("You clicked me!")}>Click me</button>\n      </div>\n    }\n  />\n)',
                        },
                    },
                    TestComponent_stories_WithButtons.parameters
                ));
        },
        './src/Typography/typography.stories.tsx': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Headline1',
                    function () {
                        return typography_stories_Headline1;
                    }
                ),
                __webpack_require__.d(
                    __webpack_exports__,
                    'Headline2',
                    function () {
                        return typography_stories_Headline2;
                    }
                );
            __webpack_require__(
                './node_modules/core-js/modules/es.object.assign.js'
            ),
                __webpack_require__('./node_modules/react/index.js'),
                __webpack_require__(
                    './node_modules/core-js/modules/es.object.keys.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.array.index-of.js'
                ),
                __webpack_require__(
                    './node_modules/core-js/modules/es.symbol.js'
                );
            var es_typography = __webpack_require__(
                    './node_modules/antd/es/typography/index.js'
                ),
                jsx_runtime = __webpack_require__(
                    './node_modules/react/jsx-runtime.js'
                ),
                _excluded = ['children', 'level'];
            function _objectWithoutProperties(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = (function _objectWithoutPropertiesLoose(
                        source,
                        excluded
                    ) {
                        if (null == source) return {};
                        var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source);
                        for (i = 0; i < sourceKeys.length; i++)
                            (key = sourceKeys[i]),
                                excluded.indexOf(key) >= 0 ||
                                    (target[key] = source[key]);
                        return target;
                    })(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        (key = sourceSymbolKeys[i]),
                            excluded.indexOf(key) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    source,
                                    key
                                ) &&
                                    (target[key] = source[key]));
                }
                return target;
            }
            var Title = es_typography.a.Title,
                Typography_typography = function Headline(_ref) {
                    var children = _ref.children,
                        level = _ref.level,
                        props = _objectWithoutProperties(_ref, _excluded);
                    return (
                        'one' === level && (level = 1),
                        'two' === level && (level = 2),
                        'three' === level && (level = 3),
                        'four' === level && (level = 4),
                        'five' === level && (level = 5),
                        Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
                            children: Object(jsx_runtime.jsx)(
                                Title,
                                Object.assign({ level: level }, props, {
                                    children: children,
                                })
                            ),
                        })
                    );
                };
            try {
                (typography.displayName = 'typography'),
                    (typography.__docgenInfo = {
                        description: '',
                        displayName: 'typography',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Typography/typography.tsx#typography'
                        ] = {
                            docgenInfo: typography.__docgenInfo,
                            name: 'typography',
                            path: 'src/Typography/typography.tsx#typography',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            __webpack_exports__.default = { title: 'Typo Graphy' };
            var typography_stories_Headline1 = function Headline1(args) {
                return Object(jsx_runtime.jsx)(
                    Typography_typography,
                    Object.assign({}, args)
                );
            };
            (typography_stories_Headline1.displayName = 'Headline1'),
                (typography_stories_Headline1.args = {
                    children: 'This is a title',
                    level: 1,
                });
            var typography_stories_Headline2 = function Headline2(args) {
                return Object(jsx_runtime.jsx)(
                    Typography_typography,
                    Object.assign({}, args)
                );
            };
            (typography_stories_Headline2.displayName = 'Headline2'),
                (typography_stories_Headline2.args = {
                    children: 'This is a title',
                    level: 'five',
                }),
                (typography_stories_Headline1.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <Headline {...args} />',
                        },
                    },
                    typography_stories_Headline1.parameters
                )),
                (typography_stories_Headline2.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => <Headline {...args} />',
                        },
                    },
                    typography_stories_Headline2.parameters
                ));
            try {
                (typography_stories_Headline1.displayName = 'Headline1'),
                    (typography_stories_Headline1.__docgenInfo = {
                        description: '',
                        displayName: 'Headline1',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Typography/typography.stories.tsx#Headline1'
                        ] = {
                            docgenInfo:
                                typography_stories_Headline1.__docgenInfo,
                            name: 'Headline1',
                            path: 'src/Typography/typography.stories.tsx#Headline1',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
            try {
                (typography_stories_Headline2.displayName = 'Headline2'),
                    (typography_stories_Headline2.__docgenInfo = {
                        description: '',
                        displayName: 'Headline2',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/Typography/typography.stories.tsx#Headline2'
                        ] = {
                            docgenInfo:
                                typography_stories_Headline2.__docgenInfo,
                            name: 'Headline2',
                            path: 'src/Typography/typography.stories.tsx#Headline2',
                        });
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './storybook-init-framework-entry.js': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__(
                './node_modules/@storybook/react/dist/esm/client/index.js'
            );
        },
        0: function (module, exports, __webpack_require__) {
            __webpack_require__(
                './node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'
            ),
                __webpack_require__(
                    './node_modules/@storybook/core-client/dist/esm/globals/globals.js'
                ),
                __webpack_require__('./storybook-init-framework-entry.js'),
                __webpack_require__(
                    './node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js'
                ),
                __webpack_require__(
                    './.storybook/preview.js-generated-config-entry.js'
                ),
                (module.exports = __webpack_require__(
                    './generated-stories-entry.js'
                ));
        },
        1: function (module, exports) {},
    },
    [[0, 5, 6]],
]);
