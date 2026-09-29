// The `aos` package ships no type declarations, so TS reports "could not find a
// declaration file for module 'aos'." A minimal ambient module clears that.
declare module 'aos' {
  interface AosOptions {
    duration?: number
    easing?: string
    once?: boolean
    offset?: number
    anchorPlacement?: string
    disable?: boolean | 'phone' | 'tablet' | 'mobile' | (() => boolean)
    [key: string]: unknown
  }
  const AOS: {
    init(options?: AosOptions): void
    refresh(): void
    refreshHard(): void
  }
  export default AOS
}
