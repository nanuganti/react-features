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

# API REFERENCE

# HOOKS

# TESTING
