import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <Paper
      sx={{
        mt: 3,
        p: 2,
        width: '100%',
       maxWidth: { xs: 250, md: 400 },
        mx: 'auto',
        maxHeight: 300, 
        overflowY: 'auto', 
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Contact List
      </Typography>
      <List>
        {contacts.map(contact => (
          <ListItem
            key={contact.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(contact.id)}
              >
                <DeleteIcon color="error" />
              </IconButton>
            }
          >
            <ListItemText primary={contact.name} secondary={contact.number} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;