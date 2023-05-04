import './App.css';
import React, {useState} from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import ColorList from './components/ColorList';
import ColorDetails from './components/ColorDetails';
import ColorForm from './components/ColorForm';
import {v4 as uuid} from 'uuid'
import ColorsHome from './components/ColorsHome';


function App() {
  const [colors , setColors] = useState([])
  console.log(colors)
  const addColors = (newColors) => {
    setColors(colors => [...colors, {...newColors, id: uuid()}])
};


  return (
    <div className="App">
      <Switch>

      <Route exact path = "/colors">
        <ColorsHome/>
        {colors ? colors.map(color => <ColorList name={color.name} id={color.id} />) : null}
      </Route>

      <Route exact path = "/colors/new">
        <ColorForm add={addColors}/>
      </Route>

      <Route exact path = "/colors/:color">
        <ColorDetails/>
      </Route>

      <Redirect exact to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
