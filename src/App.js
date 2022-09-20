import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contactListComponent';
import Example from './hooks/example';
import Example2 from './hooks/example2';
import MiComponentContext from './hooks/example3';
import Example4 from './hooks/example4';
import GreetingStyled from './components/pure/greetingStyled';
import ClockF from './components/pure/clockF';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
      {/*<TaskListComponent></TaskListComponent>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GreetingF name="Mauricio"></GreetingF>
        
        
        <Example2></Example2>
        <MiComponentContext></MiComponentContext>
        <Example4 name="Maurcio">
          <h3>Contenido del props.children NGROK</h3>
  </Example4>
  <GreetingStyled name="Mauricio"></GreetingStyled>
  <ClockF></ClockF>
      </header>
      <Father></Father>*/}
      <ContactListComponent></ContactListComponent>
    </div>
  );
}

export default App;
