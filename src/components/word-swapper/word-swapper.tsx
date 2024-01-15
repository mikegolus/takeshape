'use client'

import { FC, useEffect, useState } from 'react'
import styles from './word-swapper.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useMeasure } from '@uidotdev/usehooks'

type Word = {
  string: string
  delay: number
}

interface WordSwapperProps {
  words: Word[]
}

export const WordSwapper: FC<WordSwapperProps> = ({ words }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      const next = index + 1
      setIndex(next % words.length)
    }, words[index].delay)
  }, [index, setIndex, words, words.length])

  const [ref, { width }] = useMeasure<HTMLDivElement>()

  return (
    <motion.div
      className={styles.base}
      initial={{ width: width! }}
      animate={{ width: width! }}
    >
      <div ref={ref} className={styles['word-container']}>
        <AnimatePresence initial={false}>
          <Word key={words[index].string} word={words[index].string} />
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

interface WordProps {
  word: string
}

const Word: FC<WordProps> = ({ word }) => {
  return (
    <motion.div
      variants={{
        enter: {
          position: 'absolute',
          translateY: '-100%',
          opacity: 0,
        },
        default: {
          position: 'relative',
          translateY: '0%',
          opacity: 1,
        },
        exit: {
          position: 'absolute',
          translateY: '100%',
          opacity: 0,
        },
      }}
      initial="enter"
      animate="default"
      exit="exit"
    >
      {word}
    </motion.div>
  )
}
