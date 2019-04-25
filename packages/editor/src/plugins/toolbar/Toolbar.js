/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css } from 'theme-ui'

// todo: figure out the best package for React material icons
import BoldIcon from '@material-ui/icons/FormatBold'
import ItalicIcon from '@material-ui/icons/FormatItalic'
import LinkIcon from '@material-ui/icons/InsertLink'
import ImageIcon from '@material-ui/icons/InsertPhoto'
import QuoteIcon from '@material-ui/icons/FormatQuote'
import CodeIcon from '@material-ui/icons/Code'
import ListIcon from '@material-ui/icons/List'
// import ListIcon from '@material-ui/icons/FormatListBulleted'
// import StrikethroughIcon from '@material-ui/icons/StrikethroughS'
// import HeadingIcon from '@material-ui/icons/Title'
// import NumberedListIcon from '@material-ui/icons/FormatListNumbered'
// import ColorIcon from '@material-ui/icons/FormatColorText'
// import BackgroundColorIcon from '@material-ui/icons/FormatColorFill'

import ToolbarButton from './ToolbarButton'

// "icons"
const B = props => (
  <b
    {...props}
    css={{
      paddingLeft: 2,
      paddingRight: 2,
      borderRadius: 2
    }}
  />
)
const H1 = () => <B>H1</B>
const H2 = () => <B>H2</B>
const JSX = () => <B>JSX</B>

const Separator = () => (
  <div
    css={css({
      width: '1px',
      mx: 2,
      height: 24,
      bg: 'gray'
    })}
  />
)

const Root = props => (
  <div
    {...props}
    css={theme =>
      css({
        position: 'sticky',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        paddingTop: 2,
        paddingBottom: 2,
        borderBottom: '1px solid',
        borderColor: theme.colors.gray
      })(theme)
    }
  />
)

// config
const buttons = [
  {
    title: 'Toggle Bold (⌘ B)',
    Icon: BoldIcon,
    command: 'toggleBold',
    nodeType: 'bold'
  },
  {
    title: 'Toggle Italic (⌘ I)',
    Icon: ItalicIcon,
    command: 'toggleItalic',
    nodeType: 'italic'
  },
  {
    title: 'Toggle Heading Level 1 (⌘ ⌥ 1)',
    Icon: H1,
    command: 'toggleHeadingOne',
    nodeType: 'heading-one'
  },
  {
    title: 'Toggle Heading Level 2 (⌘ ⌥ 2)',
    Icon: H2,
    command: 'toggleHeadingTwo',
    nodeType: 'heading-two'
  },
  {
    title: 'Toggle Block Quote (⌃ ⌥ Q)',
    Icon: QuoteIcon,
    command: 'toggleBlockQuote',
    nodeType: 'block-quote'
  },
  {
    title: 'Toggle Code Block',
    Icon: CodeIcon,
    command: 'togglePre',
    nodeType: 'pre'
  },
  { separator: true },
  {
    title: 'Insert Link (⌘ K)',
    Icon: LinkIcon,
    command: 'toggleLink',
    nodeType: 'link'
  },
  {
    title: 'Insert Image (⌘ ⇧ I)',
    Icon: ImageIcon,
    command: 'insertImage',
    nodeType: 'image'
  },
  { separator: true },
  {
    title: 'Insert Bulleted List',
    Icon: ListIcon,
    command: 'toggleBulletedList',
    nodeType: 'list-item'
  },
  {
    title: 'Insert JSX Block',
    Icon: JSX,
    command: 'toggleJSX',
    nodeType: 'jsx'
  }
]

export const Toolbar = props => {
  const { buttons, editor } = props

  return (
    <Root>
      {buttons.map(({ separator, Icon, title, command, nodeType }, i) =>
        separator ? (
          <Separator key={i} />
        ) : (
          <ToolbarButton
            key={i}
            title={title}
            active={editor.isActive(nodeType)}
            onClick={editor[command]}
          >
            <Icon size={20} />
          </ToolbarButton>
        )
      )}
    </Root>
  )
}

Toolbar.defaultProps = {
  buttons
}

export default Toolbar
