const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Adquiridos</option>
            <option value="Incompleted">Falta adquirir</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button onClick={(e) => setSort("Asc")}>Asc</button>
          <button onClick={(e) => setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
