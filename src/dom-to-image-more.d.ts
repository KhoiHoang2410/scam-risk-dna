declare module 'dom-to-image-more' {
  interface Options {
    width?: number
    height?: number
    style?: Partial<CSSStyleDeclaration>
    bgcolor?: string
    quality?: number
    filter?: (node: Node) => boolean
    cacheBust?: boolean
    imagePlaceholder?: string
    preferredFontFormat?: string
  }
  function toBlob(node: Node, options?: Options): Promise<Blob>
  function toPng(node: Node, options?: Options): Promise<string>
  function toJpeg(node: Node, options?: Options): Promise<string>
  function toSvg(node: Node, options?: Options): Promise<string>
  export { toBlob, toPng, toJpeg, toSvg }
}
