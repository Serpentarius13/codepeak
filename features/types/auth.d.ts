export type TAuthVariant = "guest" | "user" | null;

declare module '#app' {
  interface PageMeta {
    auth: TAuthVariant;
  }
}
