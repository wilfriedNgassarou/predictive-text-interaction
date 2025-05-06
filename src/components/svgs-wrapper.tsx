import { AnimatePresence, motion } from "motion/react"

import { Images, Mic, ArrowUp } from "./"

interface Props {
  inputFieldIsEmpty: boolean
}

export function SvgsWrapper({ inputFieldIsEmpty }: Props) {
  return (
    <AnimatePresence initial={false} mode="popLayout">
      {inputFieldIsEmpty && (
        <div
          key="empty-message-svgs-wrapper" 
          className="absolute right-2 flex items-center gap-1.5"
        >
          <motion.span
            key="images-svg"
            initial={{ scale: 0, opacity: 0, filter: 'blur(2px)' }}
            animate={{ scale: 1, opacity: 1, filter: ['blur(2px)', 'blur(0)'] }}
            exit={{ scale: .2, opacity: 0, filter: 'blur(2px)' }}
          >
            <Images />
          </motion.span>
          <motion.span
            key="mic-svg"
            initial={{ scale: 0, opacity: 0, filter: 'blur(2px)' }}
            animate={{ scale: 1, opacity: 1, filter: ['blur(2px)', 'blur(0)'] }}
            exit={{ scale: .2, opacity: 0, filter: 'blur(2px)' }}
          >
            <Mic />
          </motion.span>
        </div>
      )}
      {!inputFieldIsEmpty && (
        <motion.span 
          key="not-empty-message-svgs-wrapper"
          initial={{ scale: 0, opacity: 0, filter: 'blur(2px)' }}
          animate={{ scale: 1, opacity: 1, filter: ['blur(2px)', 'blur(0)'] }}
          exit={{ scale: .2, opacity: 0, filter: 'blur(2px)' }}
          className="absolute right-2 flex bg-black rounded-full p-1"
        >
          <ArrowUp />
        </motion.span>
      )}
    </AnimatePresence>
  )
}