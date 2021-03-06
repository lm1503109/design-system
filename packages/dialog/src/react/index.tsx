import { StyleAttribute, compose, css, keyframes } from 'glamor'
import React, { HTMLAttributes } from 'react'

import FocusManager from '@pluralsight/ps-design-system-focusmanager'
import Theme from '@pluralsight/ps-design-system-theme'
import {
  ValueOf,
  RefForwardingComponent,
  isFunction,
  stylesFor
} from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'
import * as vars from '../vars'

/* eslint-disable-next-line camelcase */
const MODAL_OVERLAY_ID = 'psds-dialog__overlay'

const fade = keyframes(stylesheet['@keyframes psds-dialog__keyframes__fade'])

const styles = {
  dialog: (modal: boolean, tailPosition?: ValueOf<typeof vars.tailPositions>) =>
    compose(
      css(stylesheet['.psds-dialog']({ fade })),
      modal && css(stylesheet['.psds-dialog--modal']),
      Boolean(tailPosition) &&
        compose(
          stylesheet['.psds-dialog--w-tail'],
          stylesheet[`.psds-dialog--tailPosition-${tailPosition}`]
        )
    ),
  content: (props: DialogProps) =>
    css(
      stylesheet['.psds-dialog__content'],
      stylesFor('dialog__content', props) as StyleAttribute
    ),
  close: () => css(stylesheet['.psds-dialog__close']),
  overlay: () => css(stylesheet['.psds-dialog__overlay'])
}

const CloseButton: React.FC<HTMLAttributes<HTMLButtonElement>> = props => (
  <button {...styles.close()} {...props} aria-label="Close dialog">
    <svg
      aria-label="close icon"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 7.41L16.59 6 12 10.59 7.41 6 6 7.41 10.59 12 6 16.59 7.41 18 12 13.41 16.59 18 18 16.59 13.41 12" />
    </svg>
  </button>
)

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  'aria-label'?: string
  disableCloseOnOverlayClick?: boolean
  onClose?: (evt: React.MouseEvent) => void
}

const Overlay: React.FC<OverlayProps> = ({
  disableCloseOnOverlayClick,
  onClose,
  ...props
}) => {
  function handleOverlayClick(evt: React.MouseEvent) {
    if (disableCloseOnOverlayClick) return
    if ((evt.target as HTMLDivElement).id === MODAL_OVERLAY_ID)
      onClose && onClose(evt)
  }

  return (
    <div
      {...styles.overlay()}
      {...props}
      id={MODAL_OVERLAY_ID}
      onClick={handleOverlayClick}
      role="region"
    />
  )
}

export interface DialogStatics {
  tailPositions: typeof vars.tailPositions
}
export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  'aria-label'?: string
  disableCloseButton?: boolean
  disableCloseOnEscape?: boolean
  disableCloseOnOverlayClick?: boolean
  disableFocusOnMount?: boolean
  modal?: boolean
  onClose?: (evt: React.KeyboardEvent | React.MouseEvent) => void
  tailPosition?: ValueOf<typeof vars.tailPositions>
  returnFocus?: boolean
  // eslint-disable-next-line camelcase
  UNSAFE_stylesFor?: Record<string, unknown>
}

export interface DialogComponent
  extends RefForwardingComponent<DialogProps, HTMLDivElement, DialogStatics> {}

const Dialog = React.forwardRef((props, ref) => {
  const {
    children,
    disableCloseButton = false,
    disableCloseOnEscape = false,
    disableCloseOnOverlayClick = false,
    disableFocusOnMount = false,
    onClose,
    modal = false,
    returnFocus = true,
    tailPosition,
    /* eslint-disable-next-line camelcase */
    UNSAFE_stylesFor,
    ...rest
  } = props

  const autofocus = !disableFocusOnMount
  const trapped = !!modal || !!onClose
  const closeOnEscape = isFunction(onClose) && !disableCloseOnEscape

  // TODO: combine fns
  function handleKeyUp(evt: React.KeyboardEvent) {
    if (!isEscape(evt)) return
    onClose && onClose(evt)
  }

  const content = (
    <FocusManager
      {...styles.dialog(modal, tailPosition)}
      {...rest}
      {...(closeOnEscape && { onKeyUp: handleKeyUp })}
      {...(modal && { 'aria-label': undefined })}
      autofocus={autofocus}
      trapped={trapped}
      returnFocus={returnFocus}
      ref={ref}
    >
      <Theme name={Theme.names.light}>
        <div {...styles.content(props)}>
          {!disableCloseButton && isFunction(onClose) && (
            // eslint-disable-next-line react/jsx-handler-names
            <CloseButton onClick={onClose} />
          )}

          {children}
        </div>
      </Theme>
    </FocusManager>
  )

  return modal ? (
    <Overlay
      aria-label={rest['aria-label']}
      disableCloseOnOverlayClick={disableCloseOnOverlayClick}
      onClose={onClose}
    >
      {content}
    </Overlay>
  ) : (
    content
  )
}) as DialogComponent

Dialog.displayName = 'Dialog'

Dialog.tailPositions = vars.tailPositions
export const tailPositions = Dialog.tailPositions

export default Dialog

function isEscape(evt: React.KeyboardEvent) {
  return evt.key === 'Escape'
}
