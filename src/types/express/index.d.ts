declare namespace Express {
  interface Request {
    decoded: { uid: string; iad: number; exp: number };
  }
}
