import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Wellcome from './components/Wellcome';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import ErrorTest from './components/ErrorTest';
import ErrorBoundary from './components/ErrorBoundary';
function App() {
  return (
    // <div className="App">
    //   <PortalDemo />
    // </div>
    <div className="App">
      <Greet name="Tony" age="33" genre="male"/>
      <Wellcome name="Lily Rong"/>
      <Hello name="Tony Tiger Rong"/>
      
      <Counter />
      <ParentComponent />
      <UserGreeting />

      <NameList />
      <StyleSheet primary={true} />
      <Inline />
      <Form />
      <LifeCycleA />
      <FragmentDemo />
      <ParentComp />
      <RefsDemo />
      <FocusInput />
      <FRParentInput />
      <ErrorBoundary>
        <ErrorTest heroName="Tony" />
        <ErrorTest heroName="T" />
      </ErrorBoundary>
    </div>

  );
}

export default App;
