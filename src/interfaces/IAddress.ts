interface IAddress {
  id?: number;
  cep: string;
  state: string;
  country: string;
  city: string;
  complement?: string;
  number: number;
  street: string;
  locality: string;
  userId: number;
}

export default IAddress;