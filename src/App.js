import { useState } from 'react';
import { Data, Profile } from './components'

function App() {
  const [dataType, setDataType] = useState(-1)

  return (
    <main className='container'>
      <Profile pickDataType={(type) => setDataType(type)} />
      <Data dataType={dataType} />
    </main>
  );
}

export default App;
