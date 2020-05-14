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
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import BaseCounter from './components/BaseCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
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
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorTest heroName="If heroName is 'T', will throw Error" />
      </ErrorBoundary>
      <ClickCounter />
      <HoverCounter />

      <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={ (isLoggedIn) => isLoggedIn ? 'tonyrong': 'guest' }/>
    
      <BaseCounter render={ (count,incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}/>} />
      <BaseCounter render={ (count,incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount}/>} />
      {/* has to be 'value' to pass it to ComponentF */}
      <UserProvider value="nameOfUserProvider">
        <ComponentC name="TonyRong"/>
      </UserProvider>
      {/* remove UserProvider tag, pass props named by 'value' by React.createContext('value') */}
      <ComponentC />
      
    </div>

  );
}

export default App;
