'use client'

import {
  animate,
  AnimatePresence,
  motion,
  PanInfo,
  useMotionValue,
} from 'framer-motion'
import { Dialog, Heading, Modal, ModalOverlay } from 'react-aria-components'
import { FC, useCallback, useRef, useState } from 'react'
import styles from './modal.module.css'
import cx from 'classnames'

// Wrap React Aria modal components so they support framer-motion values.
const MotionModal = motion(Modal)
const MotionModalOverlay = motion(ModalOverlay)

const inertiaTransition = {
  type: 'inertia' as const,
  bounceStiffness: 300,
  bounceDamping: 40,
  timeConstant: 300,
}

const staticTransition = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1],
}

interface SheetProps {
  onOpenChange?: (isOpen: boolean) => void
  open?: boolean
}

export const Sheet: FC<SheetProps> = ({ onOpenChange, open }) => {
  const [interactive, setInteractive] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  const y = useMotionValue(0)

  const handleAnimationComplete = useCallback(() => {
    setInteractive(true)
  }, [])

  const handleDragEnd = useCallback(
    (
      _e: MouseEvent | TouchEvent | PointerEvent,
      { offset, velocity }: PanInfo,
    ) => {
      if (
        (dialogRef.current &&
          offset.y > dialogRef.current?.clientHeight * 0.5) ||
        velocity.y > 10
      ) {
        if (onOpenChange) {
          setInteractive(false)
          onOpenChange(false)
        }
      } else {
        animate(y, 0, { ...inertiaTransition, min: 0, max: 0 })
      }
    },
    [onOpenChange, y],
  )

  return (
    <AnimatePresence>
      {open && (
        <MotionModalOverlay
          // Force the modal to be open when AnimatePresence renders it.
          isOpen
          onOpenChange={onOpenChange}
          className={cx(styles.overlay, interactive && styles.interactive)}
          isDismissable
        >
          <MotionModal
            className={styles.base}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={staticTransition}
            onAnimationComplete={handleAnimationComplete}
            style={{
              y,
            }}
            drag="y"
            dragConstraints={{ top: 0 }}
            onDragEnd={handleDragEnd}
          >
            <Dialog className={styles.dialog} ref={dialogRef}>
              <div className={styles['drag-affordance']} />
              <div className={styles.content}>
                <Heading slot="title">Modal sheet</Heading>
                <p>
                  This is a dialog with a custom modal overlay built with React
                  Aria Components and Framer Motion.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sit amet nisl blandit, pellentesque eros eu,
                  scelerisque eros. Sed cursus urna at nunc lacinia dapibus.
                </p>
                <p>
                  This is a dialog with a custom modal overlay built with React
                  Aria Components and Framer Motion.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sit amet nisl blandit, pellentesque eros eu,
                  scelerisque eros. Sed cursus urna at nunc lacinia dapibus.
                </p>
                <p>
                  This is a dialog with a custom modal overlay built with React
                  Aria Components and Framer Motion.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sit amet nisl blandit, pellentesque eros eu,
                  scelerisque eros. Sed cursus urna at nunc lacinia dapibus.
                </p>
                <p>
                  This is a dialog with a custom modal overlay built with React
                  Aria Components and Framer Motion.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sit amet nisl blandit, pellentesque eros eu,
                  scelerisque eros. Sed cursus urna at nunc lacinia dapibus.
                </p>
              </div>
            </Dialog>
          </MotionModal>
        </MotionModalOverlay>
      )}
    </AnimatePresence>
  )
}
