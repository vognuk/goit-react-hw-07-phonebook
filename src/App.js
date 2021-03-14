import React, { Component } from 'react'
import Container from './components/Container'
import Form from './components/Form'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import { connect } from 'react-redux'
// import * as action from './redux/actions'
import * as selectors from './redux/contactsSelectors'
import operations from './redux/contactsOperations'
// import { getAllContacts, getLoading } from './redux/contactsSelectors'

class App extends Component {

  componentDidMount() {
    this.props.initContacts();
    // console.log(this.props.initContacts());
    // const contacts = localStorage.getItem('contacts');
    // const parsedContacts = JSON.parse(contacts);
    // if (parsedContacts) this.props.initContacts(parsedContacts);
  }

  componentDidUpdate(prevProps) {
    const { contacts: nowContacts } = this.props;
    const { contacts: prevContacts } = prevProps;
    if (nowContacts !== prevContacts) {

      // this.props.addContact(contact);
      //   localStorage.setItem('contacts', JSON.stringify(nowContacts));
    }
  }

  filterContacts = e => {
    this.props.filterContacts(e.target.value);
  };

  render() {
    const { contacts, name, number } = this.props;
    return (
      <Container>
        <Form
          name={name}
          number={number}
          contacts={contacts}
          onChange={this.handleChange}
          onSubmit={this.checkContact}
        ></Form>

        <Filter
          value={this.props.initialValue}

          onChangeFilter={this.props.filter}
        />

        <Contacts
          contacts={this.props.contacts}
          onDelete={this.props.delContact}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: selectors.getFilteredContacts(state),
    initialValue: selectors.getFilter(state),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    initContacts: () => dispatch(operations.fetchContacts()),
    // addContact: (contact) => dispatch(operations.addContact(contact)),
    delContact: id => dispatch(operations.delContact(id)),
    // filterContacts: filter => dispatch(action.filter(filter)),
    // onChange: e => dispatch(operations.filterContacts(e.target.value)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
