# React Document

# MAIN CONCEPTS

# ADVANCED GUIDES

## Accessibility

## Code-Splitting

### React.lazy

Bundling is the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once.

**React.lazy currently only supports default exports**

- The best way to introduce code-splitting into your app is through the dynamic import() syntax.

```
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```

The React.lazy function lets you render a dynamic import as a regular component.

```
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

This will automatically load the bundle containing the OtherComponent when this component is first rendered.

The lazy component should then be rendered inside a Suspense component

```
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

### Error boundaries

You can handle these errors to show a nice user experience and manage recovery with Error Boundaries. Once you’ve created your Error Boundary, you can use it anywhere above your lazy components to display an error state when there’s a network error.

### Route-based code splitting

```
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);
```

### Named Exports

export { MyComponent as default } from "./ManyComponents.js";

## Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language

Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.

### API

- React.createContext
- Context.Provider
- Class.contextType
- Context.Consumer
- Context.displayName

## Error Boundaries

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

Error boundaries do not catch errors for:

- Event handlers (learn more)

  react doesn’t need error boundaries to recover from errors in event handlers. Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.

  If you need to catch an error inside an event handler, use the regular JavaScript try / catch statement

- Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
- Server side rendering
- Errors thrown in the error boundary itself (rather than its children)

## Forwarding Refs

Ref forwarding is a technique for automatically passing a ref through a component to one of its children

in the example below, FancyButton uses React.forwardRef to obtain the ref passed to it, and then forward it to the DOM button that it renders:

```
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

Here is a step-by-step explanation of what happens in the above example:

1. We create a React ref by calling React.
2. createRef and assign it to a ref variable.
3. We pass our ref down to <FancyButton ref={ref}> by specifying it as a JSX attribute.
   React passes the ref to the (props, ref) => ... function inside forwardRef as a second argument.
4. We forward this ref argument down to <button ref={ref}> by specifying it as a JSX attribute.
5. When the ref is attached, ref.current will point to the <button> DOM node.-

## Fragments

A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

## Higher-Order Components

A higher-order component is a function that takes a component and returns a new component

- Convention:Pass Unrelated Props Through to the Wrapped Component
- Convention: Maximizing Composability
- Convention: Wrap the Display Name for Easy Debugging

## Optimizing Performance

- Use the Production Build
  - webpack to bundle scripts js, css, jpg, png
- Virtualize Long Lists (popular windowing libraries)

  - react-window
  - react-virtualized

  If your application renders long lists of data (hundreds or thousands of rows), we recommend using a technique known as “windowing”. This technique only renders a small subset of your rows at any given time, and can dramatically reduce the time it takes to re-render the components as well as the number of DOM nodes created.

- shouldComponentUpdate

```
shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }
```

## Portals

Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

ex:- dialogs, hovercards, and tooltips.

```
ReactDOM.createPortal(child, container)
```

child - is any renderable React child, such as an element, string, or fragment.

container - is a DOM element.

context and events bubbling works the same way in portal like components

## Profiler

Its purpose is to help identify parts of an application that are slow and may benefit from optimizations such as memoization.

Profiling adds some additional overhead, so it is disabled in the production build.
To opt into production profiling, React provides a special production build with profiling enabled. Read more about how to use this build at fb.me/react-profiling

<Profiler id="testName" onRender={callback}>/>

```
function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  // Aggregate or log render timings...
}
```

## Reconciliation

The “reconciliation” algorithm in React is how the decision to re-render the component is made. In the browser, DOM manipulation is expensive and time consuming, both in mounting and unmounting. Part of what makes React very performant is its reconciliation algorithm.

## Refs and the DOM

Refs provide a way to access DOM nodes or React elements created in the render method.
Usecases

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

## Render Props

sharing code between React components using a prop whose value is a function.

```
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
```

## Static Type Checking

- Flow - static type checker for your JavaScript code
- TypeScript - TypeScript can catch errors and bugs at build time

## Strict Mode

StrictMode is a tool for highlighting potential problems in an application. they do not render but activates additional checks and warnings for its descendants.

```
import React from 'react';

function ExampleApplication() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <Footer />
    </div>
  );
}
```

- Identifying components with unsafe lifecycles
- Warning about legacy string ref API usage
- Warning about deprecated findDOMNode usage
- Detecting unexpected side effects
- Detecting legacy context API
- Detecting unsafe effects

## Uncontrolled Components

use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

In React, an `<input type="file" />` is always an uncontrolled component because its value can only be set by a user, and not programmatically.

## Web Components

Web Components provide strong encapsulation for reusable components.

Web Components often expose an imperative API. For instance, a video Web Component might expose play() and pause() functions. To access the imperative APIs of a Web Component, you will need to use a ref to interact with the DOM node directly. If you are using third-party Web Components, the best solution is to write a React component that behaves as a wrapper for your Web Component.

# API REFERENCE

## React Top-Level API

- Components
  - React.Component
  - React.PureComponent
  - React.memo
- Creating React Elements
  - createElement()
  - createFactory() - legacy
- Transforming Elements
  - cloneElement() - `React.cloneElement(element,[config],[...children])`
  - isValidElement() - Verifies the object is a React element
  - React.Children - utilities for dealing with the this.props.children.map,foreach,count, only, toArray
    `React.Children.map(children, function[(thisArg)])`
- Fragments
  - React.Fragment - render multiple elements without a wrapper.
- Refs
  - React.createRef
  - React.forwardRef
- Suspense
  - React.lazy
  - React.Suspense
- Transitions (v18) //TODO
  - React.startTransition
  - React.useTransition

## ReactDOM

`react-dom` package provides DOM-specific methods that can be used at the top level of your app

### modules

- react-dom/client
- react-dom/server

### methods

- createPortal()
- flushSync() -Force React to flush any updates inside the provided callback synchronously. This method is useful for being able to read the result of those updates immediately.

## SyntheticEvent

handlers will be passed instances of SyntheticEvent, a cross-browser wrapper around the browser’s native event
HTML

`<button onclick="myFunction()">Click me</button>`

REACT

`<button onClick="myFunction()">Click me</button>`

# HOOKS

use state and other React features without writing a class.

## Rules of Hooks

ESLint plugin called `eslint-plugin-react-hooks` that enforces these two rules

- Only Call Hooks at the Top Level - Don’t call Hooks inside loops, conditions, or nested functions
- Only Call Hooks from React Functions - Don’t call Hooks from regular JavaScript functions

## Hooks API Reference

- Basic Hooks
  - useState
  - useEffect
  - useContext
- Additional Hooks
  - useReducer
  - useCallback
  - useMemo
  - useRef
  - useImperativeHandle
  - useLayoutEffect
  - useDebugValue
  - useDeferredValue
  - useTransition
  - useId
- Library Hooks
  - useSyncExternalStore
  - useInsertionEffect

# TESTING
