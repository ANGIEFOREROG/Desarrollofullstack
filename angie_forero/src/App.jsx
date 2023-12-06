import "./App.css";

function App() {
  const condition = true;
  if (condition) {
    console.log("Hello World");
  } else {
    console.log("Hello none");
  }

  return (
    <div>
      {condition ? <h1>Verdadero</h1> : <h1>Falso</h1>}
      <h1>Hello World</h1>
      <p>My first react app</p>
    </div>
  );
}

export default App;