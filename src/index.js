import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

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


//Component Lifecycle :
//1. constructor
//2. render -> contenu de notre composant est visible à l'écran
//2.bis componentDidMount : exécutée dès le premier chargement du composant, une seule fois
//............ Attendre d'eventuelles mises a jour
//si par exemple une propritete de state est modifiee -> render
//3. componentDidUpdate : exécuté à chaque fois qu'on fait un re-render
//............Attendre que le composant soit supprimé
//componentWillUnmount


class App extends React.Component{
  state = {lat : null, errorMessage : ""};

  componentDidMount(){
    console.log("Mon composant est affiché pour la 1ere fois")
    window.navigator.geolocation.getCurrentPosition( //getCurrent position s'exétura en asynchrone
        position => this.setState({lat : position.coords.latitude}), //callback function
        //this.state.lat ///A ne pas faire
        //!!!! pour modifier la valeur d'un paramètre de notre etat (state), il faut passer par la méthode setState()
        err => this.setState({errorMessage : err.message}
      ) //callback function
    );
  }

  componentDidUpdate(){
    console.log("Mon composant a été mis à jour!")
  }


  render(){
      if (this.state.lat && this.state.errorMessage === "") //j'ai recu la position
        return (
          <div className="ui container">
            <SeasonDisplay latitude={this.state.lat}/>
          </div>
        );

      if(this.state.errorMessage !== "" && !this.state.lat) // j'ai un message d'erreur
        return <div>Error : {this.state.errorMessage}</div>;

      return <div> En cours de chargement ...</div>

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
