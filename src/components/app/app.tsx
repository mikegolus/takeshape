'use client'

import {
  FC,
  PropsWithChildren,
  RefObject,
  createContext,
  useContext,
  useRef,
} from 'react'
import styles from './app.module.css'

interface AppProps extends PropsWithChildren {}

interface AppContextProps {
  rootElementRef?: RefObject<HTMLDivElement>
}

const AppContext = createContext<AppContextProps>({
  rootElementRef: undefined,
})

export const App: FC<AppProps> = ({ children }) => {
  const rootElementRef = useRef<HTMLDivElement>(null)

  return (
    <AppContext.Provider value={{ rootElementRef: rootElementRef }}>
      <div className={styles.base} ref={rootElementRef}>
        {children}
      </div>
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (context === null) {
    throw 'useAppContext must be used within <AppContext />'
  }

  return context
}
