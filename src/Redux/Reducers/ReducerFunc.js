 const reducerFunc = (
  state = {
    count: 1,
    harga:5000,
  },
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
      case "INCREMENTH":
        return{
            ...state,
            harga: state.harga + action.newHarga
        };
    case "DECREMENT":
      if (state.count <= 1) {
        return {
          ...state,
          count: (state.count = 1),
        };
      } else
        return {
          ...state,
          count: state.count - 1,
        };
        case "DECREMENTH":
            return{
                ...state,
                harga: state.harga + action.newHarga
            };
       
    default:
      return state;
  }
}
export default reducerFunc;