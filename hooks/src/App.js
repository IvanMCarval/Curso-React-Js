import React, {useState, useEffect, useMemo, useCallback} from 'react';

function App() {

  //useState
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');

  //useEffect
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  //useCallBack
  const handleAdd = useCallback(()=>{
    setTarefas([...tarefas, input])
    setInput('');
  }, [tarefas, input]);

  //useMemo
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br/>
      <strong>Voce tem {totalTarefas} tarefas!</strong>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
