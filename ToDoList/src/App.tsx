import { useState } from 'react';
import NavBar from './components/ui/navbar';
import Panel from './components/ui/panel';
import ToDoItem from './components/ui/toDoItem';
import SimpleToDoItem from './components/ui/simpleToDoItem';
import { Blockquote } from '@radix-ui/themes';

function App() {

  const [currentItem, setCurrentItem] = useState(
    <ToDoItem title='Non in proident fugiat reprehenderit in velit cupidatat.' description='Labore incididunt do voluptate ullamco laboris incididunt mollit ex mollit aliquip ipsum incididunt. Elit reprehenderit ullamco pariatur tempor quis. Magna laboris enim enim veniam mollit duis et sunt.'/>
  );

  return (
    <div className='mx-32 my-16'>
      <NavBar title='To Do List' />
      <div className='grid grid-cols-12 mt-4'>
        <div className='col-span-3 mx-2'>
          <Panel title='Your Items' centered={false}>
            <SimpleToDoItem title='Nulla in enim occaecat exercitation sit aliqua aute esse eu est ipsum officia ea.' />
            <SimpleToDoItem title='Dolore sint et pariatur eu aute.' />
            <SimpleToDoItem title='Pariatur consectetur consequat enim aliquip aliquip enim laborum ipsum tempor dolore dolor elit ex.' />
            <SimpleToDoItem title='Elit non exercitation voluptate dolore do quis incididunt in magna nulla.' />
            <SimpleToDoItem title='Culpa incididunt aliqua officia velit nisi fugiat ut id non sit aliquip Lorem aliquip.' />
          </Panel>
        </div>
        <div className='col-span-9 mx-2'>
          <Panel title='' centered={false}>
            {
              currentItem ? (currentItem) : (
                <Blockquote>
                  No item currently selected
                </Blockquote>
              )
            }
          </Panel>
        </div>
      </div>
    </div>
  )
}

export default App
