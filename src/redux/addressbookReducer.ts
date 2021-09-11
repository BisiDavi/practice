type actionType = {
  payload: string;
  type: string;
};

type addressBookStateType = {
  fullName: string;
  email: string;
  address: string;
  telephone: string;
  loading: boolean;
};

export default function AddressbookReducer(
  state = {
    fullName: '',
    email: '',
    address: '',
    telephone: '',
    loading: false,
  },
  action: actionType,
): addressBookStateType {
  switch (action.type) {
    case 'a':
      return {
        ...state,
      };
    default:
      return state;
  }
}
