import { FC, PropsWithChildren } from 'react'
import styles from './inputs.module.css'
import { Icon } from '../icon/icon'

interface InputProps {
  defaultValue?: string
  description?: string
  label?: string
  name: string
  prompt?: string
  required?: boolean
}

interface SelectProps extends PropsWithChildren, InputProps {}

interface WrapperProps extends PropsWithChildren {
  description?: string
  iconStart?: Icon
  iconEnd?: Icon
  label?: string
}

export const Input: FC<InputProps> = ({
  defaultValue,
  description,
  label,
  name,
  prompt,
  required,
}) => (
  <Wrapper label={label} description={description}>
    <input
      name={name}
      className={styles.field}
      placeholder={prompt}
      required={required}
      defaultValue={defaultValue}
    />
  </Wrapper>
)

export const TextArea: FC<InputProps> = ({
  defaultValue,
  description,
  label,
  name,
  prompt,
  required,
}) => (
  <Wrapper label={label} description={description}>
    <textarea
      name={name}
      className={styles.field}
      rows={4}
      placeholder={prompt}
      required={required}
      defaultValue={defaultValue}
    />
  </Wrapper>
)

export const Select: FC<SelectProps> = ({
  children,
  defaultValue,
  description,
  label,
  name,
  prompt,
  required,
}) => (
  <Wrapper label={label} description={description} iconEnd="nav-arrow-down">
    <select
      name={name}
      className={styles.field}
      required={required}
      defaultValue={defaultValue}
    >
      {prompt && <option value="">{prompt}</option>}
      {children}
    </select>
  </Wrapper>
)

const Wrapper: FC<WrapperProps> = ({
  children,
  description,
  iconEnd,
  iconStart,
  label,
}) => (
  <label className={styles.base}>
    {(description || label) && (
      <div className={styles.label}>
        <div className={styles.main}>{label}</div>
        <div className={styles.description}>{description}</div>
      </div>
    )}
    <div className={styles['field-wrapper']}>
      {iconStart && <Icon name={iconStart} />}
      {children}
      {iconEnd && <Icon name={iconEnd} />}
    </div>
  </label>
)
