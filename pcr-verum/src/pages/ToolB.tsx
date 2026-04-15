import { useState } from 'react'
import './pages.css'

export default function ToolB() {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(value)
  }

  return (
    <div className="page">
      <h1>Tool B</h1>
      <form onSubmit={handleSubmit} className="tool-b-form">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
