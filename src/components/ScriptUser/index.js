import { useEffect } from 'react'

const useScript = (url, async) => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = (typeof async === 'undefined' ? true : async )

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

export default function Script({ src, async=true}) {

  useScript(src, async)

  return null
}