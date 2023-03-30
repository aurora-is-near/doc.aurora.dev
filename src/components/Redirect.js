import { useEffect } from 'react'

export default function Redirect(props) {
  useEffect(() => {
    window.location.href = props.url
  }, [])

  return null
}
