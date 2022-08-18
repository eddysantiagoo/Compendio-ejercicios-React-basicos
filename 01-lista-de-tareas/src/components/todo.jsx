import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setisEdit] = useState(false);

  function FormEdit() {

    const [newValue, setnewValue] = useState(item.title);     
    function handleSubmit(e) {
      e.prevenDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setnewValue(value);
    }

    function handleClickUpdateTodo(e) {
      onUpdate(item.id, newValue);
      setisEdit(false)
    }
    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input type="text" className="todoInput" onChange={handleChange} value={newValue} />
        <button className="button" onClick={handleClickUpdateTodo}>Actualizar</button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
         <span className="todoTitle">{item.title}</span>
         <button className="button" onClick={() => setisEdit(true)}>Editar</button>
        <button className="buttonDelete" onClick={(e) => onDelete(item.id)}>Eliminar</button>
      </div>
    );
  }
  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
