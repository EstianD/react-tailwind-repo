import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";

export const ACTIONS = {
  GET_CONTACTS: "get_contacts",
  ADD_CONTACT: "add_contact",
};

const initialState = [
  {
    id: 1,
    name: "John",
    Email: "john@gmail.com",
    number: "021 554 2162",
  },
  {
    id: 2,
    name: "Jane",
    Email: "jane@gmail.com",
    number: "021 113 9605",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_CONTACTS:
      state = action.payload.contacts;
      return state;
    case ACTIONS.ADD_CONTACT:
      console.log("CONTACT: ", action.payload);
      return [...state, action.payload.contact];

    default:
      return state;
  }
}

function App() {
  const [contacts, dispatch] = useReducer(reducer, initialState);
  console.log("CONTACTS: ", contacts);

  const renderContact = () => {
    return contacts.map((contact) => {
      return <p>{contact.name}</p>;
    });
  };

  return (
    <div className="App">
      <Header />
      <ContactForm dispatch={dispatch} />
      {renderContact()}
    </div>
  );
}

export default App;
