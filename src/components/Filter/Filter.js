import s from "../Filter/Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/contacts/actions";
import { getFilter } from "../../redux/contacts/selectors";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  return (
    <>
      <label className={s.label}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => {
          dispatch(changeFilter(e.currentTarget.value));
        }}
      ></input>
    </>
  );
}
