import React from 'react';
import { Card } from './Card.styled';
import { Button } from './Button.styled';
import logo from '../assets/images/rectangle.png'
import { CardHeader } from './CardHeader.styled';
import { CardText } from './CardText';

function App() {
  return (
    <Card>
      <img src={logo} alt="logo" />
      <CardHeader>Headline</CardHeader>
      <CardText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</CardText>
      <div>
        <Button buttonType={'primary'}>See more</Button>
        <Button buttonType={'outlined'}>Save</Button>
      </div>
    </Card>
  )
}

export default App


