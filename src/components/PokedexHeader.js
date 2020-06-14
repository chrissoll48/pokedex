import React from 'react';
import {Header, Image, Segment} from 'semantic-ui-react'


const PokedexHeader = ({author, name}) => {
return (
    <Segment basic inverted padded='very' vertical>
   <Header as='h1'>This is a Header for {name} Pokedex</Header>
    <Image src={'charmanderbaby2.jpeg'} size="mini" centered="true" /> 
    <Header as= 'h3'> Author: {author}</Header>
  </Segment>
)

}

export default PokedexHeader