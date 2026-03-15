declare module 'resora' {
  interface Config {
    stubs: {
      controller: string;
      api: string;
      model: string;
      apiResource: string;
    };
  }
}

declare global {
  namespace Express {
    interface Request {
      user?: unknown;
      authToken?: string | undefined;
    }
  }
}

export { }
