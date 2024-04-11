import './App.scss'
import { useEffect } from 'react';
import type { RootState } from './app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './states/counter'
import { useFetchDataQuery } from './redux/data'
import { fetchData, selectData } from './states/api'; 
import Body from './components/Body';


const App = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()


  const dataTwo = useSelector(selectData);
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  
  const { data, error, isLoading } = useFetchDataQuery();

  


  return (
    <>
      <h1> I am body </h1>
      <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div> 

      
      <div>
      <h1>Data</h1>
      {data ? (
        <div>
          {
         dataTwo.map((props) => {
       return (
         <>
           <div key={props.id}>
         <p> {props.name} </p>
         <p> {props.city} </p>   
         <p> {props.age} </p>
           </div>
         </>
       )
         })
          }
          </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>

      <main>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
      <Body />
    </>
  );
};

export default App;

      