import { MenuIcon } from '@pluralsight/ps-design-system-icon'
// @ts-ignore: TODO: update typings
import NavItem from '@pluralsight/ps-design-system-navitem'
import { css } from 'glamor'
import React from 'react'

import stylesheet from '../css'

const styles = {
  brand: () => css(stylesheet['.psds-navbar__brand']),
  mobileMenu: () => css(stylesheet['.psds-navbar__mobile-menu']),
  navbar: () => css(stylesheet['.psds-navbar']),
  items: () => css(stylesheet['.psds-navbar__items']),
  user: () => css(stylesheet['.psds-navbar__user']),
  utility: () => css(stylesheet['.psds-navbar__utility'])
}

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  brand?: React.ReactNode
  items?: React.ReactNode
  onMobileMenuClick?: React.MouseEventHandler
  user?: React.ReactNode
  utility?: React.ReactNode
}

const NavBar = React.forwardRef<HTMLDivElement, NavBarProps>(
  (props, forwardedRef) => {
    const { brand, items, onMobileMenuClick, utility, user, ...rest } = props

    const ref = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(
      forwardedRef,
      () => (ref.current as unknown) as HTMLDivElement
    )

    return (
      <div ref={ref} {...styles.navbar()} {...rest}>
        {onMobileMenuClick && (
          <div {...styles.mobileMenu()}>
            <NavItem onClick={onMobileMenuClick} icon={<MenuIcon />} />
          </div>
        )}
        <div {...styles.brand()}>{brand}</div>
        <div {...styles.items()}>{items}</div>
        <div {...styles.utility()}>{utility}</div>
        <div {...styles.user()}>{user}</div>
      </div>
    )
  }
)
NavBar.displayName = 'NavBar'

export default NavBar
