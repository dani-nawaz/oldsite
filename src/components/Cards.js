import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    width: '300px',
    height: '300px',
    margin: 0,
  },
  media: {
    height: 140,
  },
})

export default function Cards({ card }) {
  const classes = useStyles()
  console.log('card', card.title)
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={card.image}
        title='Contemplative Reptile'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {card.title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {card.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
