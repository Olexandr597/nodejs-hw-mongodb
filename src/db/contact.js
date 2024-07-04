import { Schema } from 'mongoose';
import { model } from 'mongoose';

const Contact = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    optional: true,
  },
  isFavourite: {
    type: Boolean,
    default: false,
  },
  contactType: {
    type: String,
    required: true,
    default: 'personal',
    enum: ['work', 'personal', 'home'],
  },
});

export const ContactsCollection = model('contacts', Contact);
