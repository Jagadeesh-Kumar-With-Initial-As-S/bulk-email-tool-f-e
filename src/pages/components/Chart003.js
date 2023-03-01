    import React, { Component } from 'react';
    import CanvasJSReact from '../../assets/canvasjs.react';
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    class Chart003 extends Component {
    	render() {
    		const options = {
    			title: {
    				text: "Expexted World Wide's Demand for Bulk Email Tool In 2023"
    			},
    			data: [
    			{
    				// Change type to "doughnut", "line", "splineArea", etc.
    				type: "column",
    				dataPoints: [
    					{ label: "Italy",  y: 10  },
    					{ label: "France", y: 15  },
    					{ label: "Spain", y: 25  },
    					{ label: "USA",  y: 30  },
    					{ label: "Argentina",  y: 28  }
    				]
    			}
    			]
    		}
    		return (
    		<div>
    			<CanvasJSChart options = {options}
    				/* onRef={ref => this.chart = ref} */
    			/>
    			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    		</div>
    		);
    	}
    }
    // module.exports = Chart;    
	export default Chart003;      