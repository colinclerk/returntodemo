export default function resolveReturnTo(mountPath) {
  // 0. Make sure we're in browser context
  if (typeof window === "undefined") {
    return null;
  }

  // 1. Query String takes priority
  const urlParams = new URLSearchParams(window.location.search);
  const returnTo = urlParams.get("return_to");

  if (returnTo) {
    // If it was passed in relative, convert it to absolute
    const returnToURL = new URL(returnTo, window.location.href);
    const returnToAbs = returnToURL.href;

    // Persist the return_to for 3 to pull from if appropriate
    window.sessionStorage.setItem("auth_return_to", returnToAbs);
    return returnToAbs;
  }

  // 2. If we're on mountPath (the start page) but there's no
  // return_to, unset any old, persisted return_to
  if (window.location.pathname === mountPath) {
    window.sessionStorage.removeItem("auth_return_to");
    return null;
  }

  // 3. If we're not on mountPath (e.g. a refresh after start, or
  // oauth return), pull from sessionStorage
  return window.sessionStorage.getItem("auth_return_to");
}
