import { useState} from 'react'

function TodoForm({addTodo}) {
    const [value,setValue] = useState("");
    const [category,setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return

        console.log("foi");
        console.log(value);
        console.log(category);

        // adicionar todo
        //limpar os campos
        addTodo(value, category);
        setCategory('');
        setValue('');
        ////<option value="Adquirido">Já comprei</option>
        
    }
  return (
    <div className='todo-form'>
        <h2>Adionar item a lista de Desejos:</h2>
        <form onSubmit={handleSubmit}>

            <input type="text" placeholder='Digite o Título'
            value={value} onChange={(e) => setValue(e.target.value)}/>
            <select
            value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                
                <option value="Comprar pra mim">Quero comprar pra mim</option>
                <option value="Presente">Quero comprar para presente</option>
            </select>
            <button type="submit">Adicionar item</button>
        </form>
    </div>
  )
}

export default TodoForm