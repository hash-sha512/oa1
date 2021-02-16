import React from 'react';
import {createStore} from 'react-redux';

/*
const updateData = (state=Datadumps, action) => {
  switch(action.type){
    case 'NEW_ENTRY' :
      return state.push()
  }
}


const newEntry = () => ({'type':'NEW_ENTRY'})
*/



/*
let Datadumps =  {
        "daily" : [
            {
              "id": "rust",
              "label": "rust",
              "value": 522,
              "color": "hsl(15, 70%, 50%)"
            },
            
            {
              "id": "php",
              "label": "php",
              "value": 129,
              "color": "hsl(269, 70%, 50%)"
            },
            {
              "id": "elixir",
              "label": "elixir",
              "value": 138,
              "color": "hsl(125, 70%, 50%)"
            },
          ],
        'monthly' : [
          {
            "id": "make",
            "label": "make",
            "value": 328,
            "color": "hsl(4, 70%, 50%)"
          },
        ],
        "yearly" : [
          {
            "id": "scala",
            "label": "scala",
            "value": 259,
            "color": "hsl(209, 70%, 50%)"
          }
        ]
}
*/


/*
export default function Datadumps({incoming}){
  const [data, setData] = React.useState({"daily" : [
    {
      "id": "rust",
      "label": "rust",
      "value": 522,
      "color": "hsl(15, 70%, 50%)"
    },
    
    {
      "id": "php",
      "label": "php",
      "value": 129,
      "color": "hsl(269, 70%, 50%)"
    },
    {
      "id": "elixir",
      "label": "elixir",
      "value": 138,
      "color": "hsl(125, 70%, 50%)"
    },
  ],
  'monthly' : [
  {
    "id": "make",
    "label": "make",
    "value": 328,
    "color": "hsl(4, 70%, 50%)"
  },
  ],
  "yearly" : [
  {
    "id": "scala",
    "label": "scala",
    "value": 259,
    "color": "hsl(209, 70%, 50%)"
  }
  ]})
  
  //data[incoming.timeframe].push({'id':`${incoming.category}`, 'label':`${incoming.category}`, 'value':incoming.rupee,"color": "hsl(109, 40%, 80%)"})

}


*/


const Datadumps = {"daily" : 
[
    {
      "id": "rust",
      "label": "rust",
      "value": 522,
      "color": "hsl(15, 70%, 50%)"
    },
    
    {
      "id": "php",
      "label": "php",
      "value": 129,
      "color": "hsl(269, 70%, 50%)"
    },
    {
      "id": "elixir",
      "label": "elixir",
      "value": 138,
      "color": "hsl(125, 70%, 50%)"
    },
  ],
  'monthly' : [
  {
    "id": "make",
    "label": "make",
    "value": 328,
    "color": "hsl(4, 70%, 50%)"
  },
  ],
  "yearly" : [
  {
    "id": "scala",
    "label": "scala",
    "value": 259,
    "color": "hsl(209, 70%, 50%)"
  }
  ]}
  
  //data[incoming.timeframe].push({'id':`${incoming.category}`, 'label':`${incoming.category}`, 'value':incoming.rupee,"color": "hsl(109, 40%, 80%)"})




export default Datadumps;
