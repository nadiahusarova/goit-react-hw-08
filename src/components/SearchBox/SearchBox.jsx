import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const filterNumber = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      <input
        className={s.input}
        type="text"
        value={filterNumber}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </label>
  );
};

export default SearchBox;