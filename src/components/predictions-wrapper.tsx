import { Dispatch, KeyboardEvent, MouseEvent, RefObject, SetStateAction } from "react";
import { AnimatePresence, motion } from "motion/react";

import clsx from "clsx";

import { WordEntry } from "../types";
import { getNewInputValue, getPredictions } from "../utils";

interface Props {
  lastWord: string
  dictionary: WordEntry[]
  inputRef: RefObject<HTMLInputElement>
  setInputValue: Dispatch<SetStateAction<string>>
}

export function PredictionsWrapper({ lastWord, dictionary, inputRef, setInputValue }: Props) {
  const predictions = getPredictions(lastWord, dictionary)

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const key = e.key.toLowerCase()

    if(key === 'escape') return inputRef.current?.focus()
    if(key !== 'enter') return 

    const target = e.target as HTMLElement
    const word = target.closest('div')!.dataset.word!
    
    setInputValue(v => getNewInputValue(word, v)) 

    return inputRef.current?.focus()
  }

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    const word = target.closest('div')!.dataset.word!

    setInputValue(v => getNewInputValue(word, v))

    return inputRef.current?.focus()
  }

  return (
    <AnimatePresence>
      {predictions.length > 0 && (
        <motion.div
          key="predictions-wrapper"
          initial={{ filter: 'blur(3px)', y: 32, opacity: 0 }}
          animate={{ filter: ['blur(3px)', 'blur(0px)'], y: -4, opacity: 1 }}
          exit={{ filter: 'blur(3px)', y: 32, opacity: 0 }}
          transition={{ type: 'spring', duration: .4, bounce: .3 }}               
          className="-top-3/4 w-60 h-10 absolute rounded-full overflow-hidden bg-gray-400 flex p-0.5 gap-0.5"
        >
          {Array(3).fill(0).map((_, index) => (
            <div
              key={predictions?.[index]?.text ?? index}
              tabIndex={0}
              className={clsx(
                "bg-white w-1/3 px-0.5 flex justify-center items-center outline-none group cursor-pointer",
                index == 0 && "rounded-tl-full rounded-bl-full",
                index == 2 && "rounded-tr-full rounded-br-full"
              )}
              data-word={predictions?.[index]?.text}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
            >
              <span 
                className="text-sm whitespace-nowrap overflow-hidden text-ellipsis font-medium group-focus:text-blue-500 group-active:text-blue-500 group-focus:scale-110 group-active:scale-110 duration-150 ease-out"
              >
                {predictions?.[index]?.text ?? ''}
              </span>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}