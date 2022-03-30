import { useState } from "react"

function useClick(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = () => {
    setValue(!value)
  }

  return {value, onChange}
}

export default useClick