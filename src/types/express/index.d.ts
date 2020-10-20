export {};
declare global {
  namespace Express {
    interface Request {
      decoded: { uid: string; iad: number; exp: number; userId: string };
    }
  }
}
