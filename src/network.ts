export enum Connection {
  "none",
  "slow-2g",
  "2g",
  "3g",
  "4g"
}

interface Response {
  readonly connection: Connection;
}

export const networkStatus = (): Response => {
  if (!(navigator as any)?.connection?.effectiveType) {
    return { connection: Connection.none }
  }

  return { connection: (navigator as any).connection.effectiveType }
}