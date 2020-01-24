import React, { Component } from 'react';
import HeaderComponente from './componentes/HeaderComponente';
import Highcharts from 'highcharts';

class App extends Component {
  componentDidMount(){
    Highcharts.chart('grafico', {
      title:{
        text: "Mi registro de peso"
      },
      series: [{
          name: 'Jane',
          data: [1, 0, 4]
      }]
    });
  }

  render(){
    return (
      <div>
        <HeaderComponente/>
        <h1>Hola mundo</h1>
        <div id="grafico"></div>
      </div>
    );
  }
  
}

export default App;
