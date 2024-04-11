import { useFetchlataQuery } from '../redux/lata'

const Body = () => {
  const { data, error, isLoading } = useFetchlataQuery();
  return (
    <>
      <section>
      <h1> lata data </h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section> 
    </>
  );
};

export default Body;
