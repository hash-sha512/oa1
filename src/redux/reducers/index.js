const defaultState = {"daily" : 
  [ 
    {
      "id": "filler1",
      "label": "filler1",
      "value": 522,
      "color": "hsl(15, 70%, 50%)"
    },
    {
      "id": "filler2",
      "label": "filler2",
      "value": 129,
      "color": "hsl(269, 70%, 50%)"
    },
    {
      "id": "filler3",
      "label": "filler3",
      "value": 138,
      "color": "hsl(125, 70%, 50%)"
    },
  ],
  'monthly' : [
  {
    "id": "filler",
    "label": "filler",
    "value": 328,
    "color": "hsl(100, 70%, 50%)"
  },
  ],
  "yearly" : [
  {
    "id": "filler",
    "label": "filler",
    "value": 259,
    "color": "hsl(209, 70%, 50%)"
  }
  ]
}



const dataDumpsReducer = (state = defaultState, actions) => {
    switch(actions.type){
        case 'NEW_ENTRY' :
           //return {{...state['daily']} 
          let temp = state
          temp[actions.payload.timeframe].push({'id' : actions.payload.category, 'label' : actions.payload.category, 'value':parseInt(actions.payload.value), 'color': 'hsl(40, 70%, 50%)'})
          return {...temp}
        default :
            return state;
        }
    }


export default dataDumpsReducer;