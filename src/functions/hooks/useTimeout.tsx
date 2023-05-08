import { useEffect, useState } from "react"

export const useTimeout = (time: number) => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setInit(true)
    }, time)
  }, [])

  return init

}
