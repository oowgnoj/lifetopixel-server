
export {};
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        MONGO_URL: string;
        NODE_ENV: "development" | "production";
        PORT: string;
        secret: string;
      }
    }
  }
  