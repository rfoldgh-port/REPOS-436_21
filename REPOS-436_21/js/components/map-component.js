export class MapForm extends React.Component { 
    constructor(props) {
        super(props);      

    }
	
     render() {   

		let mapForm;
			mapForm = (<div><script src="https://www.amcharts.com/lib/3/ammap.js" type="text/javascript"></script>
<script src="https://www.amcharts.com/lib/3/maps/js/usaHigh.js" type="text/javascript"></script>
<script src="https://www.amcharts.com/lib/3/themes/light.js" type="text/javascript"></script>
<div id="mapdiv" style="width: 1000px; height: 450px;"></div>
<div style="width: 1000px; font-size: 70%; padding: 5px 0; text-align: center; background-color: #535364; margin-top: 1px; color: #B4B4B7;"><a href="https://www.amcharts.com/visited_states/" style="color: #B4B4B7;">Create your own visited states map</a> or check out the <a href="https://www.amcharts.com/" style="color: #B4B4B7;">JavaScript Charts</a>.</div>
<script type="text/javascript">
var mapType = {
type: "map",
theme: "light",
panEventsEnabled : true,
backgroundColor : "#535364",
backgroundAlpha : 1,
zoomControl: {
zoomControlEnabled : true
}
};
var map = AmCharts.makeChart("mapdiv", mapType,
dataProvider : {
map : "usaHigh",
getAreasFromMap : true,
areas :
[]
},
areasSettings : {
autoZoom : true,
color : "#B4B4B7",
colorSolid : "#84ADE9",
selectedColor : "#84ADE9",
outlineColor : "#666666",
rollOverColor : "#9EC2F7",
rollOverOutlineColor : "#000000"
}
});
</script></div>
);

            return (
                <div className="MapForm">
				{mapForm}
                </div>
    
            );
         }
}

export default connect()(MapForm);