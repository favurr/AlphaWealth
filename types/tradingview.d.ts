declare namespace JSX {
  interface IntrinsicElements {
    "tv-ticker-tape": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      symbols?: string;
      theme?: "light" | "dark";
      transparent?: boolean;
      "item-size"?: "compact" | "medium" | "large";
      "hover-type"?: "chart" | "symbol";
    };
  }
}
