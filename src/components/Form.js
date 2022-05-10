import React, { useState } from 'react'

/**
 * 
 * Handle input from user here
 *
 */
export default function Form() {
  
  const [inputValue, setInputValue] = useState();
  const handleChange = e => {setInputValue(e.target.value);}
  const submitToAPI = (e) => {
    e.preventDefault();
    alert("input: " + inputValue);
  }


  return (
    <div>
      <form>
        <div>
          <div className="flex justify-between items-center py-2 px-3">
            <label className="block mb-2 text-sm font-medium text-gray-900"
              for="input-box"> Enter Prompt: </label>
            <textarea rows="8" className="block p-2.5 w-full bg-white rounded-lg border border-black text-sm text-black"
              placeholder="Write something..." id="input-box" required
              value={inputValue} onChange={handleChange}
              ></textarea>
          </div>
          <div className="flex pl-0 space-x-1 sm:pl-2">
          <button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg text-black border border-black hover:border-transparent hover:bg-pink-200 hover:text-pink-500"
            type="submit" onClick={submitToAPI}
            > Submit </button>
          </div>
        </div>
      </form>
    </div>
  )
}
