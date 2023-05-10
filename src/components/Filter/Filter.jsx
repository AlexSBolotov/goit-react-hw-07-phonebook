import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const handlerOnChange = e => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };

  return (
    <div className={s.wrapper}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handlerOnChange}
      />
    </div>
  );
}
