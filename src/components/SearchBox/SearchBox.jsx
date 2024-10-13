import s from "./SeacrhBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        Find contact by name
        <input
          type="text"
          value={filter}
          onChange={onFilterChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
