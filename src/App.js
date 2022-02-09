import React from "react";
import LifeCycleA from "./10.life-cycle-methods/LifeCycleA";
import AxiosApi from "./11.ajax-calls/AxiosApi";
import FakeUserList from "./11.ajax-calls/FakeUserList";
import Fetch from "./11.ajax-calls/Fetch";
import FetchOne from "./11.ajax-calls/FetchOne";
import MongoStudent from "./11.ajax-calls/MongoStudent";
import SqlStudent from "./11.ajax-calls/SqlStudent";
import Routing from "./12.routing/Routing";
import ApiHook from "./13.react-hooks/ApiHook";
import ClassCounter from "./13.react-hooks/ClassCounter";
import HookCounter from "./13.react-hooks/HookCounter";
import HookWithArray from "./13.react-hooks/HookWithArray";
import HookWithObject from "./13.react-hooks/HookWithObject";
import ClickCounter from "./14.higher-order-components/ClickCounter";
import HoverCounter from "./14.higher-order-components/HoverCounter";
import InputCounter from "./14.higher-order-components/InputCounter";
import Message from "./4.state/Message";
import Person from "./4.state/Person";
import ClassClick from "./5.event-handling/ClassClick";
import EventBind from "./5.event-handling/EventBind";
import EventBindOne from "./5.event-handling/EventBindOne";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";
import UserGreeting from "./6.conditional-rendering/UserGreeting";
import UserGreetingOne from "./6.conditional-rendering/UserGreetingOne";
import UserGreetingThree from "./6.conditional-rendering/UserGreetingThree";
import UserGreetingTwo from "./6.conditional-rendering/UserGreetingTwo";
import NameList from "./7.list-rendering/NameList";
import NameListFour from "./7.list-rendering/NameListFour";
import NameListOne from "./7.list-rendering/NameListOne";
import NameListThree from "./7.list-rendering/NameListThree";
import NameListTwo from "./7.list-rendering/NameListTwo";
import Inline from "./8.styling/Inline";
import Module from "./8.styling/Module";
import Stylesheet from "./8.styling/Stylesheet";
import Form from "./9.form-handling/Form";
import FormOne from "./9.form-handling/FormOne";
// import Welcome from "./3.props/Welcome";
// import Counter from "./4.state/Counter";
// import CounterOne from "./4.state/CounterOne";
// import Greet from "./1.components/1.function/Greet";
// import { Named } from "./1.components/1.function/Named";
// import { NamedOne } from "./1.components/1.function/NamedOne";
// import Welcome from "./1.components/2.class/Welcome";
// import Hello from "./2.jsx/Hello";
// import Greeting from "./3.props/Greeting";


function App() {
  return (
    <div>
      <ClickCounter />
      <br />
      <HoverCounter />
      <br />
      <InputCounter />
        {/* <ApiHook /> */}
        {/* <HookWithArray /> */}
        {/* <HookWithObject /> */}
        {/* <ClassCounter /> <br />
        <HookCounter /> */}
        {/* <Routing /> */}
        {/* <SqlStudent /> */}
        {/* <MongoStudent /> */}
        {/* <FakeUserList /> */}
        {/* <AxiosApi /> */}
        {/* <FetchOne /> */}
        {/* <Fetch /> */}
        {/* <LifeCycleA /> */}
        {/* <FormOne /> */}
        {/* <Form /> */}
        {/* <Module /> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <NameListFour /> */}
        {/* <NameListThree /> */}
        {/* <NameListTwo /> */}
        {/* <NameListOne /> */}
        {/* <NameList /> */}
        {/* <UserGreetingThree /> */}
        {/* <UserGreetingTwo /> */}
        {/* <UserGreetingOne /> */}
        {/* <UserGreeting /> */}
        {/* <Parent /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <EventBindOne /> */}
        {/* <Person /> */}
        {/* <Message /> */}
        {/* <CounterOne /> */}
        {/* <Counter description="this is counter" /> */}
        {/* <Welcome message="Welcome" author="Scott" /> */}
        {/* <Greeting name="Scott" skill="Manager" age={45}/>
        <Greeting name="Adam"  skill="Business Analyst" age={43} />
        <Greeting name="Tuan"  skill="Tech Boss" age={42}/>
        <Greeting name="Uma"  skill="Developer" age={39}>
           <Hello />
        </Greeting> */}
        {/* <Greet />
        <Named />
        <NamedOne />
        <Welcome />
        <Hello /> */}
    </div>
  );
}

export default App;
