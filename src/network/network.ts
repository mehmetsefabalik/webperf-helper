export enum Connection {
  "none" = "none",
  "slow-2g" = "slow-2g",
  "2g" = "2g",
  "3g" = "3g",
  "4g" = "4g"
}

type Response = keyof typeof Connection;

export const networkStatus = (): Response => {
  if (!(window.navigator as any)?.connection?.effectiveType) {
    return Connection.none;
  }

  return (window.navigator as any).connection.effectiveType
}