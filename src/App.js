import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Hard disk',
      amount: 1194.12,
      date: new Date(2024, 9, 14),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 3194.12,
      date: new Date(2024, 8, 14),
    },
  ];

  return (
    <div>
      <h2>hello world</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
