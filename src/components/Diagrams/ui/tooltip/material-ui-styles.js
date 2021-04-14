import Tooltip from '@material-ui/core/Tooltip'
import {makeStyles, withStyles} from '@material-ui/core/styles'

export const TooltipBtn = withStyles(() => ({

  tooltip: {
    // height: 30,
    // width: 30,
    backgroundColor: '#D5EDF7',
    border: 1,
    borderColor: '#D5EDF7',
    outline: 'none',
    top: -8,
    padding: 6,
    fontSize: 12,
    borderRadius: 4,
    color: '#373530',
  },
}))(Tooltip)

export const useStyles = makeStyles({
  tooltipForIcon: {
    '&:hover': {
      background: 'transparent',
    },
  },
})