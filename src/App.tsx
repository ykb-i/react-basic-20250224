import React from 'react';
import './App.css';
// import { ClassComponent } from './component/component';
// import { FunctionalComponent } from './component/component';
// import CurlyBraces from './component/CurlyBraces';
import Properties from './component-manage/Properties';
import Gallery from './component-manage/example/example1';
import Profile from './component-manage/example/example2';
import ConditionalRender from './component-manage/ConditionalRender';
import ListRender from './component-manage/ListRender';

function App() {
  return (
    <div>
     {/* <ClassComponent/>
     <FunctionalComponent/>
     <CurlyBraces/> */}
     {/* <Properties/>
     <Gallery/>
     <Profile/> */}
     {/* <ConditionalRender/> */}
     <ListRender/>
    </div>
  );
}

export default App;
