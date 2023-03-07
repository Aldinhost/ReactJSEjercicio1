// Importaciones de recursos internos (dependencias)


//Importaciones de componentes internos
import Card from "./components/Card";


//Importaciones assets, imagenes, 
// import logo from './logo.svg';
// import './App.css';



function App() {

  // const titulo = "Mi Primer Componente con React JS"
  // const imgReact = 'https://www.arsys.es/blog/file/uploads/2017/04/React.jpg'
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={imgReact} alt= {'imagenreact'}></img>
        <h1>{titulo}</h1>
        <p>Una biblioteca de JavaScript para construir interfaces de usuario</p>
      </header> */}



      {/* Rendereizando componente con etiqueta de abre y cierra */}
      <Card/> 



    </div>
  );
}

export default App;


// {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}