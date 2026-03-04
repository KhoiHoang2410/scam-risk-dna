import domToImage from 'dom-to-image-more'

export interface ShareCardOptions {
  filename?: string
  scale?: number
}

export async function captureElementAsBlob(
  element: HTMLElement,
  options: ShareCardOptions = {},
): Promise<Blob> {
  const { scale = 2 } = options

  const blob = await domToImage.toBlob(element, {
    width: element.offsetWidth * scale,
    height: element.offsetHeight * scale,
    style: {
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      width: `${element.offsetWidth}px`,
      height: `${element.offsetHeight}px`,
    },
    bgcolor: '#05050F',
    quality: 1,
  })

  return blob
}

export async function captureElementAsPng(
  element: HTMLElement,
  options: ShareCardOptions = {},
): Promise<string> {
  const { scale = 2 } = options

  const dataUrl = await domToImage.toPng(element, {
    width: element.offsetWidth * scale,
    height: element.offsetHeight * scale,
    style: {
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      width: `${element.offsetWidth}px`,
      height: `${element.offsetHeight}px`,
    },
    bgcolor: '#05050F',
    quality: 1,
  })

  return dataUrl
}

export async function shareResultCard(
  element: HTMLElement,
  archetypeName: string,
  shareUrl: string,
  options: ShareCardOptions = {},
): Promise<void> {
  const filename = options.filename ?? `scam-risk-dna-${archetypeName.toLowerCase().replace(/\s+/g, '-')}.png`

  try {
    const blob = await captureElementAsBlob(element, options)
    const file = new File([blob], filename, { type: 'image/png' })

    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: `My Scam Risk DNA — ${archetypeName}`,
        text: `I just discovered my Scam Risk DNA archetype: ${archetypeName}! Take the quiz to find yours.`,
        url: shareUrl,
        files: [file],
      })
      return
    }

    if (navigator.share) {
      await navigator.share({
        title: `My Scam Risk DNA — ${archetypeName}`,
        text: `I just discovered my Scam Risk DNA archetype: ${archetypeName}! Take the quiz to find yours.`,
        url: shareUrl,
      })
      return
    }

    downloadBlob(blob, filename)
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return
    }
    const blob = await captureElementAsBlob(element, options)
    downloadBlob(blob, filename)
  }
}

export async function copyLinkToClipboard(url: string): Promise<void> {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(url)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = url
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
