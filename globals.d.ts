interface Window {
  dataLayer?: object[]
  google_optimize?: {
    get: (id: string) => string | undefined
  }
}
