import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'; 
import { Button } from 'semantic-ui-react';


const ButtonExampleEmphasis = () => (
  <div>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
)


const Foo = ({name}) => {
return (

  <p>This is a foo component. It's name is {name}</p>
)

}

const Item= (props) => {
  return (
<div>
    <p>This is ITEM component. It's name is {props.name} </p>
    <Foo name={'siri'}/>
    {item}
</div>
  )

}

const item= <p>This is an item. Elements are composable</p>

const element = <div>
  <h1>Hello xtina</h1>
  <p>test  life</p>
 
  
  <Item name={'linny'}/>
  <Foo name={'alexa'}/>
  </div>

ReactDOM.render(

   <App />,
   //element,

  document.getElementById('root')
)


