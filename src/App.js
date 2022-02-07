import React from "react";
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
    <div className="container">
        <UserGreetingThree />
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
