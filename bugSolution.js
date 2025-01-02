The solution involves using React Router's error handling capabilities, and adding a catch-all route to handle undefined paths:

```javascript
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>The requested URL {location.pathname} was not found.</p>
    </div>
  );
}
```
This improved version includes a catch-all route (`path="*"`) that will render the `NotFound` component whenever a user tries to navigate to a non-existent path.  The `useLocation` hook provides information about the attempted path, improving error feedback.