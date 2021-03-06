# Drawer(Release Candidate)

New api for Drawer component allows simpler use as uncontrolled or controlled component.

## Uncontrolled
Use when there is no need to modify open state or hook into onToggle callback.

### Usage
Drawer controls opening and closing by clicking on drawer head analytics callbacks and props can be passed to `<Drawer />` tag.
```jsx
<Drawer>
  <Drawer.Head>
    <p>Click me to open</p>
  </Drawer.Head>
  <Drawer.Body>
    <p>Drawer Content here</p>
  </Drawer.Body>
</Drawer>
```

### <Drawer.Head />

- Default display is `inline-flex`.
  - To align  child to the right pass it `margin-left: auto` style.
- Styles can be overridden with inline styles or by passing it a new className.

## Controlled
Use when there is a need to modify open state or hook into onToggle callback. The new Drawer only takes two props to take control of toggle microinteraction, (**onToggle**, **isOpen**).

### Proptypes
```js
Drawer.propTypes = {
  onToggle: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}
```

### Use case: controlled default behavior

```jsx
const PrevenetHeadClick = () => {
  const [open, setOpen] = useState(false)
  const handleToggle = (e) => {
    /** custom logic **/
    setOpen(!open)
  }
  return (
    <>
      <button onClick={handleToggle}>toggle drawer</button>
      <Drawer isOpen={open}>
        <Drawer.Head>
          <p>Click me to open</p>
        </Drawer.Head>
        <Drawer.Body>
          <p>Drawer Content here</p>
        </Drawer.Body>
      </Drawer>
    </>
  )
}
```


### Use case: mount drawer open (AKA startOpen)

```jsx
const StartOpen = () => {
  const [open, setOpen] = useState(true)
  const handleToggle = (e) => {
    /** custom logic **/
    setOpen(!open)
  }
  return (
    <Drawer onToggle={handleToggle} isOpen={open}>
      <Drawer.Head>
        <p>Click me to open</p>
      </Drawer.Head>
      <Drawer.Body>
        <p>Drawer Content here</p>
      </Drawer.Body>
    </Drawer>
  )
}
```

### Use case: prevent clicking on `<Drawer.Head />` from opening `<Drawer />`

```jsx
const PrevenetHeadClick = () => {
  const [open, setOpen] = useState(false)
  const handleToggle = (e) => {
    /** custom logic **/
    setOpen(!open)
  }
  return (
    <>
      <button onClick={handleToggle}>toggle drawer</button>
      <Drawer isOpen={open}>
        <Drawer.Head>
          <p>Clicking me won't toggle drawer</p>
        </Drawer.Head>
        <Drawer.Body>
          <p>Drawer Content here</p>
        </Drawer.Body>
      </Drawer>
    </>
  )
}
```
