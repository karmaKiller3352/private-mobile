import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Messenger {
  TELEGRAM = "TELEGRAM",
  WHATSAPP = "WHATSAPP",
  VIBER = "VIBER"
}



export declare class Client {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly additional_info?: string;
  readonly phone?: string;
  readonly phoneCountry?: string;
  readonly phoneCountryCode?: string;
  readonly mailPhone?: string;
  readonly mailPhoneCountry?: string;
  readonly mailPhoneCountryCode?: string;
  readonly messenger?: Messenger | keyof typeof Messenger;
  readonly delivery_info?: string;
  readonly owner?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Client>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}