import React from 'react';
import ReactDOM from 'react-dom';

/*const successFunction = (position) => {
  console.log(position);
};

const failureFunction = (err) => {
  console.log(err);
};

const App = () => {
  navigator.geolocation.getCurrentPosition(successFunction,failureFunction);

  return <div>Bonjour dans notre application Saisons</div>;
};
//
function getCurrentPosition(f1, f2){
  //faire le travail de recuperation de la position
  //...
  if(success){
    f1(position)
  }
  else{
    f2(err)
  }
}*/
//let x = 0;
class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {lat : null};

    window.navigator.geolocation.getCurrentPosition( //getCurrent position s'exétura en asynchrone
      (position) => {
        //this.state.lat ///A ne pas faire
        this.setState({lat : position.coords.latitude});
        //!!!! pour modifier la valeur d'un paramètre de notre etat (state), il faut passer par la méthode setState()
      }, //callback function
      err => console.log(err) //callback function
    );

  }


  render(){
    return <div>Latitude : {this.state.lat}</div>;
  }
}

/*const App = () => {
  let latitude = 0;
  navigator.geolocation.getCurrentPosition( //getCurrent position s'exétura en asynchrone
    position => {
      latitude = position.coords.latitude;
      console.log(latitude);
    }, //callback function
    err => console.log(err) //callback function
  );

  return <div>Latitude : {latitude}</div>;
};
*/
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
