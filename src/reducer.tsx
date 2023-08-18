export const reducer = (state: string[] = [], action: any) => {
  switch (action?.type) {
    case "ADD":
      return [...state, action.name];
    case "REMOVE":
      return state.filter((name: string) => name !== action.name);
    default:
      return state;
  }
};
