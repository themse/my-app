import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
  const data = useLoaderData() as { date: string; message: string }; // TODO create hook wrapper

  return (
    <div>
      <p>HomePage</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

// TODO create general interface
HomePage.homeLoader = async (): Promise<{ date: string; message: string }> => {
  await sleep(1000);

  console.log('from home loader');

  return {
    date: new Date().toISOString(),
    message: 'Hello world',
  };
};

export default HomePage;

// TODO delete, just for test purpose
export function sleep(n: number = 500) {
  return new Promise((r) => setTimeout(r, n));
}
