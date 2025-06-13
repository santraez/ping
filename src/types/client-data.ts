export interface ClientData {
  navigator: Partial<ExtendedNavigator>
}

export type ExtendedNavigator = {
  -readonly [K in keyof Navigator]: any
}

export type ExtendedTypes = Partial<ExtendedNavigator>
