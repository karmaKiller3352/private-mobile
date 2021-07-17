// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Messenger = {
  "TELEGRAM": "TELEGRAM",
  "WHATSAPP": "WHATSAPP",
  "VIBER": "VIBER"
};

const { Client } = initSchema(schema);

export {
  Client,
  Messenger
};