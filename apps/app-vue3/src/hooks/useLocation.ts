export function useLocation() {
  const selfLocation = location
  const parentLocation = window.__MICRO_APP_ENVIRONMENT__
    ? (window.rawWindow?.location as Location)
    : 'microApp 不存在'

  return {
    selfLocation,
    parentLocation
  }
}
