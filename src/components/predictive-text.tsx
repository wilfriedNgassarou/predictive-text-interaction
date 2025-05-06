import { useRef, useState } from "react";

import { WordEntry } from "../types";
import { getLastWord } from "../utils";

import { SvgsWrapper, PredictionsWrapper } from "./";

interface Props {
  dictionary: WordEntry[]
}

export function PredictiveText({ dictionary }: Props) {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const lastWord = getLastWord(inputValue)

  return (
    <div className="h-14 w-96 px-4 lg:px-0 relative">
      <div className="flex items-center w-full h-14 bg-gray-100 rounded-xl overflow-hidden relative z-10">
        <input 
          ref={inputRef}
          type="text" 
          autoCorrect="off"
          autoComplete="off"
          placeholder="Tapez quelque chose"
          className="h-full w-full pl-3 pr-12 bg-transparent outline-none font-medium placeholder:text-gray-500 caret-blue-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <SvgsWrapper inputFieldIsEmpty={inputValue.length === 0} />
      </div>
      <PredictionsWrapper
        dictionary={dictionary}
        lastWord={lastWord}
        inputRef={inputRef}
        setInputValue={setInputValue} 
      />
    </div>
  )
}