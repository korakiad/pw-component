import Header from "./Header.jsx";
import Container from "./Container.jsx";

const App = () => {
  return (

    // flex center
    <div style={{ display: "flex", justifyContent: "center",flexDirection: "column",alignItems: "center",width: "100vw", height: "100vh"}}>
      <Header  label={"Header"}/>
      <Container  />
    </div>
  );
};

export default App;