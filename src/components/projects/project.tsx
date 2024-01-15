'use client'

import { FC, PropsWithChildren } from 'react'
import styles from './project.module.css'
import Image, { StaticImageData } from 'next/image'
import { Chip } from '../chip/chip'
import Link from 'next/link'
import cx from 'classnames'

interface ProjectProps {
  label: string
  href?: string
  image: StaticImageData
  imageAlt: string
  skills: string[]
  sublabel: string
}

export const Project: FC<ProjectProps> = ({
  href,
  image,
  imageAlt,
  label,
  sublabel,
  skills,
}) => (
  <div className={styles.base}>
    <Wrapper
      href={href}
      className={cx(styles.image, href && styles['has-link'])}
    >
      <Image
        placeholder="blur"
        fill
        src={image}
        alt={imageAlt}
        sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw"
      />
    </Wrapper>
    <div className={styles.body}>
      <div className={styles.text}>
        <Wrapper href={href} className={styles.label}>
          {label}
        </Wrapper>
        <div className={styles.sublabel}>{sublabel}</div>
      </div>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <Chip small key={skill} label={skill} />
        ))}
      </div>
    </div>
  </div>
)

interface WrapperProps extends PropsWithChildren {
  className?: string
  href?: string
}

const Wrapper: FC<WrapperProps> = ({ className, children, href }) => {
  if (href) {
    return (
      <Link href={href} className={cx(styles.link, className)}>
        {children}
      </Link>
    )
  }

  return <div className={className}>{children}</div>
}
