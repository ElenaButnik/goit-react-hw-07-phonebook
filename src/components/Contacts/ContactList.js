import React, { useEffect } from "react";
import s from "../Contacts/ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
//import { deleteContact } from "../../redux/contacts/actions";
import { getThunkData, deleteThunkData } from "../../redux/contacts/operations";
import { getFilterContacts, getContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const dispatch = useDispatch();
const contacts = useSelector(getFilterContacts);

  useEffect(() => {
    dispatch(getThunkData());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.list__item} key={id}>
          {name} : {number}
          <button
            className={s.button}
            onClick={() => dispatch(deleteThunkData(id))}
            type="button"
            id={id}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
