export function useLocation() {
  const selfLocation = window.__MICRO_APP_ENVIRONMENT__
    ? (window.microApp.location as Location)
    : location
  const parentLocation = window.__MICRO_APP_ENVIRONMENT__
    ? location
    : 'microApp 不存在'

  return {
    selfLocation,
    parentLocation
  }
}
