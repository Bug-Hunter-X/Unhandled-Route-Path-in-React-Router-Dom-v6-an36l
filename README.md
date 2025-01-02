# Unhandled Route Path in React Router Dom v6

This repository demonstrates a common issue in React Router Dom v6: navigating to an undefined route. The bug showcases how an incorrect path definition leads to unexpected behavior, such as a blank screen or an application crash.  The solution demonstrates how to effectively handle undefined routes using the `useLocation` hook and error boundaries.

## Bug
The `bug.js` file contains a React application with misconfigured routes.  Attempting to access a route with a misspelled path will result in an error.

## Solution
The `bugSolution.js` file provides a corrected version. It showcases how to handle such scenarios gracefully, preventing app crashes and providing a better user experience.