const initialState = {
  text: 'URLを入力してください'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        title: action.title,
        text: action.text
      };
    default:
      return state;
  }
}