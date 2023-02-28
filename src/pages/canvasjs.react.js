

    class App extends Component {	
      render() {
        const options = {
          title: {
            text: "My Predection For World Wide's Demand for Bulk Email Tool In 2023"
          },
          data: [{				
                    type: "column",
                    dataPoints: [
                        { label: "Italy",  y: 10  },
                        { label: "France", y: 15  },
                        { label: "Spain", y: 25  },
                        { label: "USA",  y: 30  },
                        { label: "Argentina",  y: 28  }
                    ]
           }]
       }
    		
       return (
          <div>
            <CanvasJSChart options = {options}
                /* onRef = {ref => this.chart = ref} */
            />
          </div>
        );
      }
    }

