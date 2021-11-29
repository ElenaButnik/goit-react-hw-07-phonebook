import axios from "axios";

axios.defaults.baseURL = "https://61a1187a6c3b400017e69bf3.mockapi.io";

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContacts(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContacts(contactID) {
  const { data : {id} } = await axios.delete(`/contacts/${contactID}`);
  return id;
}
