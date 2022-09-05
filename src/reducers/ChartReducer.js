let defaultState = {
  progressChart: "",
};

const ChartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_PROGRESS_CHARTS":
      return {
        ...state,
        progressChart: action.payload,
      };
    case "GET_DONUT_CHARTS":
      return {
        ...state,
        donutChart: action.payload,
      };
    case "GET_DAY_GRAPH_CHARTS":
      return {
        ...state,
        dayGraphChart: action.payload,
      };
    case "GET_MONTHLY_GRAPH_CHARTS":
      return {
        ...state,
        monthlyGraph: action.payload,
      };
    default:
      return state;
  }
};

export default ChartReducer;
