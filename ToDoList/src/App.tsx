import { useState } from 'react';
import NavBar from './components/ui/navbar';
import Panel from './components/ui/panel';
import ToDoItem from './components/ui/toDoItem';

function App() {
  return (
    <div className='mx-32 my-16'>
      <NavBar title='To Do List' />
      <div className='grid grid-cols-12 mt-4'>
        <div className='col-span-3 mx-2'>
          <Panel title='Options' centered={false}></Panel>
        </div>
        <div className='col-span-9 mx-2'>
          <Panel title='Your Items' centered={false}>
            <ToDoItem
              title='My First To Do Item!'
              description='Hello everyone. This is my first To Do Item. I am excited to get my things oragnized!'
              isCompleted={false}
            />
            <ToDoItem
              title='Bang Nolans Mom'
              description='I think the title says it all'
              isCompleted={false}
            />
            <ToDoItem
              title='My First To Do Item!'
              description='Hello everyone. This is my first To Do Item. I am excited to get my things oragnized!'
              isCompleted={false}
            />
            <ToDoItem
              title='My First To Do Item!'
              description='Hello everyone. This is my first To Do Item. I am excited to get my things oragnized!'
              isCompleted={false}
            />
          </Panel>
        </div>
      </div>
    </div>
  )
}

export default App
