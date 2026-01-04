import type React from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "tv-ticker-tape": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        symbols?: string
        "item-size"?: string
        "hover-type"?: string
        theme?: string
      }
    }
  }
}
