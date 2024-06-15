interface IOptions {
  type: 'click' | 'route-change'
  payload?: any
  force?: boolean
}

export function useDataTrigger({ force = false, ...rest }: IOptions) {
  force
    ? window.microApp?.forceSetGlobalData(rest)
    : window.microApp?.setGlobalData(rest)
}
