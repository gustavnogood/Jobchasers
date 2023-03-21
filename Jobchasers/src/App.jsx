import { useState } from 'react';
import './App.css';
import Filter from './Components/Filter/Filter'
import Jobs from './Components/Jobs/job'
import { useSelector } from 'react-redux'

function App() {
  const jobs = useSelector(state => state.data);
  const tags = useSelector(state => state.data); //visibiltyFilter
  const onClickHandler = useSelector(state => state.visibilityFilter)


  return (
    <div className="App">
      <Filter tags={tags} onClickHandler={onClickHandler}/>
      <Jobs jobs={jobs} />
    </div>
  )
}

export default App
