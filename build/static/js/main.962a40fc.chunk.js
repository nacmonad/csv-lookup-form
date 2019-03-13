(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t){},131:function(e,t,o){e.exports=o(345)},136:function(e,t,o){},300:function(e,t){},301:function(e,t){},345:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),l=o(21),r=o.n(l),i=(o(136),o(25)),s=o(26),c=o(29),d=o(27),m=o(28),h=o(70),p=o(19),u=Object(p.createMuiTheme)({palette:{type:"light"}}),w=o(90),g=o(24),b=o(32),v=o(30),f=o(125),C=o.n(f),y=o(68),E=o.n(y),O=o(89),P=o.n(O),G=o(126),R=o.n(G),W=o(20),S=o.n(W),k=o(16),x=o.n(k),_=o(7),T=o.n(_),F=o(35),j=o.n(F),N=o(66),M=o.n(N),I=o(67),B=o.n(I),V=o(46),D=o.n(V),A=o(47),z=o.n(A),L=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,o=e.handleClick,a=e.handleChange,l=e.rooms,r=e.selectedRoom;return n.a.createElement("div",{className:t.root},n.a.createElement("div",{className:T()(t.row,t.descriptionField)},n.a.createElement(x.a,{className:t.typography,variant:"subtitle1"},"Rooms"),n.a.createElement("div",{style:{maxWidth:"12rem",textAlign:"center"}},n.a.createElement(x.a,{variant:"subtitle2"},"Add a room"),n.a.createElement(j.a,{className:t.fab,onClick:o,id:"add-room",size:"small"},n.a.createElement(D.a,{onClick:function(e){return o({target:{id:"add-room"}})}})))),n.a.createElement(M.a,{value:r,onChange:function(e,t){return a({target:{id:"selectedRoom"}},t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",centered:!1},l.map(function(e){return n.a.createElement(B.a,{key:e.id,id:"selectedRoom",label:e.name})})),n.a.createElement("div",{className:t.container},n.a.createElement("div",{className:t.row},n.a.createElement("div",{style:{display:"flex",alignItems:"center"}},n.a.createElement(S.a,{className:T()(t.textField,t.nameField),id:"room-name",label:"Name",value:l[r].name,onChange:a}),n.a.createElement(j.a,{className:t.fab,disabled:l.length<2,onClick:o,id:"remove-room",size:"small"},n.a.createElement(z.a,{onClick:function(e){return o({target:{id:"remove-room"}})}})))),n.a.createElement(S.a,{id:"room-description",className:T()(t.textField,t.descriptionField),label:"Description",value:l[r].description,onChange:a})))}}]),t}(a.Component),H=Object(p.withStyles)(function(e){return{root:{margin:"0.5rem 0 0.5rem 0",maxWidth:"48rem"},container:{display:"flex",flexDirection:"column",margin:"0.5rem 0rem 0.5rem 0rem"},nameField:{maxWidth:"8rem"},descriptionField:{maxWidth:"32rem"},fab:{height:"2rem",width:"2rem",minWidth:"1rem"},textField:{margin:"0 0.5rem 0 0.5rem"},row:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}},{withTheme:!0})(L),K=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,o=e.handleClick,a=e.handleChange,l=e.windows,r=e.selectedWindow;return n.a.createElement("div",{className:t.root},n.a.createElement("div",{className:t.row},n.a.createElement(x.a,{className:t.typography,variant:"subtitle1"},"Windows"),n.a.createElement("div",{style:{maxWidth:"12rem",textAlign:"center"}},n.a.createElement(x.a,{variant:"subtitle2"},"Add a window"),n.a.createElement(j.a,{className:t.fab,onClick:o,id:"add-window",size:"small"},n.a.createElement(D.a,{onClick:function(e){return o({target:{id:"add-window"}})}})))),n.a.createElement(M.a,{value:r,onChange:function(e,t){return a({target:{id:"selectedWindow"}},t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},l.map(function(e){return n.a.createElement(B.a,{key:e.id,onClick:function(e){return console.log(e.target)},label:e.name})})),n.a.createElement("div",{className:t.container},n.a.createElement("div",{className:t.row},n.a.createElement("div",{style:{display:"flex",alignItems:"center"}},n.a.createElement(S.a,{className:T()(t.textField,t.nameField),id:"window-name",label:"Name",value:l[r].name,onChange:a}),n.a.createElement(j.a,{className:t.fab,onClick:o,disabled:l.length<2,id:"remove-window",size:"small"},n.a.createElement(z.a,{onClick:function(e){return o({target:{id:"remove-window"}})}})))),n.a.createElement(S.a,{id:"window-description",className:T()(t.textField,t.descriptionField),label:"Description",value:l[r].description,onChange:a})))}}]),t}(a.Component),U=Object(p.withStyles)(function(e){return{root:{margin:"0.5rem 0 0.5rem 0",maxWidth:"32rem"},container:{display:"flex",flexDirection:"column",margin:"0.5rem 0rem 0.5rem 0rem"},nameField:{maxWidth:"8rem"},descriptionField:{maxWidth:"32rem"},fab:{height:"2rem",width:"2rem",minWidth:"1rem"},textField:{margin:"0 0.5rem 0 0.5rem"},row:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}})(K),q=o(64),X=o.n(q),Y=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"_camelToNormal",value:function(e){return e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()})}},{key:"render",value:function(){var e=this.props,t=e.classes,o=e.handleChange,a=e.selectedItem,l=e.hidden,r=e.items,i=e.title,s=e.helperText;return n.a.createElement("div",{className:l?t.hidden:t.root},n.a.createElement(S.a,{id:i.toLowerCase(),select:!0,label:this._camelToNormal(i),name:i.toLowerCase(),className:t.textField,value:a,onChange:function(e){return o({target:{id:i.toLowerCase(),value:e.target.value}})},SelectProps:{id:i.toLowerCase(),MenuProps:{className:t.menu},autoWidth:!0},helperText:s,margin:"normal",variant:"outlined"},r.map(function(e){return n.a.createElement(X.a,{id:i.toLowerCase(),key:e,value:e},e)})))}}]),t}(a.Component),$=Object(p.withStyles)(function(e){return{root:{margin:"0.5rem 0 0.5rem 0",minWidth:"8rem",maxWidth:"12rem"},hidden:{display:"none"},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{}}})(Y),Z=Object(p.withStyles)({root:{},textField:{width:"5.5rem",margin:"0 0.5rem"}})(function(e){var t=e.classes,o=e.dimensions,a=e.handleChange,l=e.maxWidth,r=e.maxHeight;return console.log(l),console.log(r),n.a.createElement("div",{className:t.root},n.a.createElement(S.a,{title:"width",id:"width",type:"number",className:t.textField,variant:"outlined",label:"Width",onChange:a,value:o.width,inputProps:{min:0,max:l}}),n.a.createElement(S.a,{title:"height",id:"height",type:"number",className:t.textField,variant:"outlined",label:"Height",value:o.height,onChange:a,inputProps:{min:0,max:r}}))}),J=Object(p.withStyles)({root:{},column:{display:"flex",flexDirection:"column",margin:"1rem 0"},row:{display:"flex",flexDirection:"row",alignItems:"center",margin:"1rem 0"},button:{margin:"0 1rem"}})(function(e){var t=e.classes,o=e.disabled,a=e.form,l=e.window,r=e.handleChange;return console.log("v form"),console.log(a.valanceOptions),console.log(l.selectedValanceOption),console.log(o),n.a.createElement("div",null,n.a.createElement("div",{className:t.row},n.a.createElement(x.a,{variant:"subtitle1"},"Valence Options"),n.a.createElement(j.a,{id:"toggle-valance",disabled:o,className:t.button,onClick:r},l.showValance?n.a.createElement(z.a,{onClick:function(e){r({target:{id:"toggle-valance",value:e.target.value}})}}):n.a.createElement(D.a,{onClick:function(e){r({target:{id:"toggle-valance",value:e.target.value}})}}))),l.showValance&&n.a.createElement($,{title:"Valance",id:"valance-option",helperText:"Please select valance option",handleChange:r,items:a.valanceOptions,selectedItem:""!==l.selectedValanceOption?l.selectedValanceOption:a.valanceOptions[0],handleSelect:r}))}),Q=function(e){return{type:"DOWNLOAD_FORM_REQUESTED",payload:e}},ee=function(e){return{type:"SET_FORM",payload:e}},te=function(e){return{type:"SELECT_WORKSHEET",payload:e}},oe=o(53),ae=o.n(oe),ne=function(e,t){var o=ae.a.utils.decode_range(e);console.log(o);var a,n,l,r=[];for(n=o.s.r;n<=o.e.r;n++){for(a=[],l=o.s.c;l<=o.e.c;l++){var i=t[ae.a.utils.encode_cell({r:n,c:l})];"undefined"===typeof i?a.push(void 0):a.push(i.v)}r.push(a)}return r},le=o(36),re=o.n(le),ie=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this)))._handleChange=e._handleChange.bind(Object(b.a)(Object(b.a)(e))),e._calculateTotal=e._calculateTotal.bind(Object(b.a)(Object(b.a)(e))),e._calculateGrandTotal=e._calculateGrandTotal.bind(Object(b.a)(Object(b.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"_handleChange",value:function(e,t){console.log(e.target.id),console.log(e.target.value),console.log(t);var o=Object(g.a)({},this.props.form);switch(e.target.id){case"selectedhemcolor":o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedHemColor=e.target.value;break;case"selectedpowercontrol":o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedPowerControl=e.target.value;break;case"selectedremote":o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedRemote=e.target.value;break;case"selectedendcap":o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedEndCap=e.target.value;break;case"cordplacement":o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedCordPlacement=e.target.value;break;case"show-motorization":o.rooms[o.selectedRoom].windows[o.selectedWindow].showMotorization=!o.rooms[o.selectedRoom].windows[o.selectedWindow].showMotorization,o.rooms[o.selectedRoom].windows[o.selectedWindow].showMotorization?o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedCordPlacement="None":o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedCordPlacement="Left";break;case"selectedmotorization":o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedMotorization=e.target.value;break;case"client-name":o.clientName=e.target.value;break;case"window-name":o.rooms[o.selectedRoom].windows[o.selectedWindow].name=e.target.value;break;case"window-description":o.rooms[o.selectedRoom].windows[o.selectedWindow].description=e.target.value;break;case"room-name":o.rooms[o.selectedRoom].name=e.target.value;break;case"room-description":o.rooms[o.selectedRoom].description=e.target.value;break;case"selectedRoom":o.selectedRoom=t,o.selectedWindow=0;break;case"selectedWindow":o.selectedWindow=t;break;case"selectedhem":o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedHem=e.target.value;break;case"blindtype":o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedBlindType=e.target.value;break;case"fabric":o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedFabric=e.target.value,o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedPriceGroup=o.fabricToPriceGroupMapping[e.target.value];break;case"pricegroup":o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedPriceGroup=e.target.value;break;case"toggle-valance":o.rooms[o.selectedRoom].windows[o.selectedWindow].showValance=!o.rooms[o.selectedRoom].windows[o.selectedWindow].showValance;break;case"valance":o.rooms[o.selectedRoom].windows[o.selectedWindow].selectedValanceOption=e.target.value;break;case"units":o.rooms[o.selectedRoom].windows[o.selectedWindow].dimensions[e.target.id]=e.target.value;break;case"width":case"height":o.rooms[o.selectedRoom].windows[o.selectedWindow].dimensions[e.target.id]=parseInt(e.target.value);break;default:console.log("unhandled "),console.log(e.target)}this.props.setForm(o)}},{key:"_handleClick",value:function(e,t){console.log(e.target.id);var o=Object(g.a)({},this.props.form);switch(e.target.id){case"download-form":this.props.downloadFormRequested(this._printForm(o));break;case"remove-room":o.rooms.splice(o.selectedRoom,1),o.selectedRoom=0,o.selectedWindow=0,this.props.setForm(o);break;case"remove-window":o.rooms[o.selectedRoom].windows.splice(o.selectedWindow,1),o.selectedWindow=0,this.props.setForm(o);break;case"add-room":o.rooms.push({id:re.a.generate(),name:"Room ".concat(o.rooms.length+1),description:"",windows:[{id:re.a.generate(),name:"Window ".concat(o.rooms[o.selectedRoom].windows.length+1),description:"",dimensions:{units:"inches",width:30,height:30},selectedValanceOption:"Decora 8",selectedBlindType:"Roller",selectedFabric:"Cottonwood",selectedHem:"Plain Hem",selectedHemColor:"White",selectedEndCap:"Gray",selectedMotorization:"Sun Glo",selectedPriceGroup:"PG1",showMotorization:!1,selectedCordPlacement:"Left",selectedPowerControl:"SG DC Charger",selectedRemote:"SG 1 Channel Standard",showValance:!1,total:155.95}]}),this.props.setForm(o);break;case"add-window":o.rooms[o.selectedRoom].windows.push({id:re.a.generate(),name:"Window ".concat(o.rooms[o.selectedRoom].windows.length+1),description:"",dimensions:{units:"inches",width:30,height:30},selectedValanceOption:"Decora 8",selectedBlindType:"Roller",selectedFabric:"Cottonwood",selectedHem:"Plain Hem",selectedHemColor:"White",selectedEndCap:"Gray",selectedMotorization:"Sun Glo",selectedPriceGroup:"PG1",showMotorization:!1,selectedCordPlacement:"Left",selectedPowerControl:"SG DC Charger",selectedRemote:"SG 1 Channel Standard",showValance:!1,total:155.95}),this.props.setForm(o);break;default:console.log("unhandled "+e.target.id)}}},{key:"_calculateTotal",value:function(e,t,o){var a,n,l=this;console.log("calculatin "),console.log(e),console.log(t),console.log(o),"centimetres"===e.units?(a=parseFloat(.393701*e.width),n=parseFloat(.393701*e.width)):(a=parseFloat(e.width),n=parseFloat(e.height)),console.log("Calcuating for textile of width ".concat(a,"x").concat(n));var r=-1,i=-1,s=-1,c=-1;if(t.length>0&&t[0].length>0){for(var d=t.length,m=(t[0].length,0);m<d;m++)0===m?i=t[m].slice(1).findIndex(function(e){return parseInt(e)>=a})+1:parseInt(t[m][0])>=n&&r<0&&(r=m);if(r<0)return console.log("No table match!"),-1;if(o.length>0){var h=o.length,p=(o[0].length,[]);console.log("making valance tables"),console.log(h),console.log(o);for(m=1;m<h;m++)p.push(o[m][0]),o[m][0]===this.props.form.rooms[this.props.form.selectedRoom].windows[this.props.form.selectedWindow].selectedValanceOption&&(s=m);if(this.props.form.valanceOptions=p,s<0)return-1;c=parseFloat(t[r][i])+parseFloat(o[s][i])}else c=parseFloat(t[r][i])}return c+=this.props.form.powerControlOptions.find(function(e){return e.type===l.props.form.rooms[l.props.form.selectedRoom].windows[l.props.form.selectedWindow].selectedPowerControl}).price,(c+=this.props.form.remoteOptions.find(function(e){return e.type===l.props.form.rooms[l.props.form.selectedRoom].windows[l.props.form.selectedWindow].selectedRemote}).price).toFixed(2)}},{key:"_calculateGrandTotal",value:function(){var e=[];return e=this.props.form.rooms.length>1?this.props.form.rooms.reduce(function(e,t){return[].concat(Object(w.a)(e),Object(w.a)(t.windows))},[]):this.props.form.rooms[0].windows,parseFloat(e.reduce(function(e,t){return e+t.total},0)).toFixed(2)}},{key:"_printForm",value:function(e){var t=Object(g.a)({},e),o=[];return t.rooms.forEach(function(e,t){e.windows.forEach(function(t){t.showValance&&(t.ValanceOption=t.selectedValanceOption),t.showMotorization&&(t.MotorizationOption=t.selectedMotorization),t.Fabric=t.selectedFabric,t.PriceGroup=t.selectedPriceGroup,delete t.id,delete t.showValance,delete t.showMotorization,delete t.selectedMotorization,delete t.selectedValanceOption,delete t.selectedFabric,o.push(Object(g.a)({},t,{name:"".concat(e.name,"-").concat(t.name)}))})}),{projectId:e.projectId,clientName:e.clientName,windows:o,grandTotal:this._calculateGrandTotal()}}},{key:"render",value:function(){var e=this,t=this.props,o=t.classes,a=t.form,l=t.workbook,r=[],i=[];if(console.log("workbook:"),console.log(l),"undefined"!==typeof l.Sheets[a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedBlindType]&&a.priceGroups.findIndex(function(e){return a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedPriceGroup})>-1){var s=a.priceGroups.findIndex(function(e){return e===a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedPriceGroup}),c=a.priceGroupMap[s];if(r=ne(c,l.Sheets[a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedBlindType]),a.rooms[a.selectedRoom].windows[a.selectedWindow].showValance){console.log("fetching valance table..."),console.log(a.selectedValance);var d=a.valances.findIndex(function(e){return e===a.selectedValance});console.log(d);var m=a.valanceMap[d];console.log(m),i=ne(m,l.Sheets[a.selectedValance])}}var h=this._calculateTotal(a.rooms[a.selectedRoom].windows[a.selectedWindow].dimensions,r,i);a.rooms[a.selectedRoom].windows[a.selectedWindow].total=parseFloat(h);var p=this._calculateGrandTotal();return n.a.createElement("div",{className:o.root},n.a.createElement(x.a,{className:o.typography,variant:"title"},"Interactive Pricing Form"),n.a.createElement(x.a,{className:o.typography,variant:"subtitle1"},"Project Id.: ",a.projectId),n.a.createElement(S.a,{id:"client-name",label:"Client Name",value:a.clientName,onChange:this._handleChange.bind(this)}),n.a.createElement("div",{className:o.column},n.a.createElement(H,{handleClick:this._handleClick.bind(this),handleChange:this._handleChange.bind(this),rooms:a.rooms,selectedRoom:a.selectedRoom}),n.a.createElement(U,{handleClick:this._handleClick.bind(this),handleChange:this._handleChange.bind(this),windows:a.rooms[a.selectedRoom].windows,selectedWindow:a.selectedWindow})),n.a.createElement("div",null,n.a.createElement(x.a,{variant:"display1"},"Window Properties")),n.a.createElement("div",{className:o.column},n.a.createElement(x.a,{className:o.typography,variant:"subtitle1"},"Dimensions and Units"),n.a.createElement(Z,{maxWidth:r[0]?"inches"===a.rooms[a.selectedRoom].windows[a.selectedWindow].dimensions.units?r[0][r[0].length-1]:r[0][r[0].length-1]/.393701:0,maxHeight:r[0]?"inches"===a.rooms[a.selectedRoom].windows[a.selectedWindow].dimensions.units?r[r.length-1][0]:r[r.length-1][0]/.393701:0,dimensions:a.rooms[a.selectedRoom].windows[a.selectedWindow].dimensions,handleChange:this._handleChange.bind(this)}),n.a.createElement($,{title:"Units",helperText:"Please select measurement unit",items:["inches","centimetres"],selectedItem:a.rooms[a.selectedRoom].windows[a.selectedWindow].dimensions.units,handleChange:this._handleChange.bind(this)})),n.a.createElement(x.a,{className:o.typography,variant:"subtitle1"},"Fabric"),n.a.createElement("div",{className:o.row},n.a.createElement($,{title:"BlindType",helperText:"Select a Blind Type",items:l.SheetNames.filter(function(e,t){return t%2===0}),selectedItem:a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedBlindType,handleChange:this._handleChange.bind(this)}),n.a.createElement($,{title:"Fabric",helperText:"Select a Fabric",items:Object.keys(a.fabricToPriceGroupMapping),selectedItem:a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedFabric,handleChange:this._handleChange.bind(this)}),n.a.createElement($,{title:"PriceGroup",helperText:"Select a Price Group",hidden:!0,items:"Interlude"===a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedBlindType?a.priceGroups.slice(0,4):a.priceGroups,selectedItem:a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedPriceGroup,handleChange:this._handleChange.bind(this)})),n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},n.a.createElement("div",null,n.a.createElement(x.a,{variant:"subtitle1"},"Hem Options "),n.a.createElement($,{title:"SelectedHem",helperText:"Select a Hembar type",items:a.hembars,selectedItem:a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedHem,handleChange:this._handleChange.bind(this)})),n.a.createElement("div",null,n.a.createElement(x.a,{variant:"subtitle1"},"Hem Bar Colour "),n.a.createElement($,{title:"SelectedHemColor",helperText:"Select a Hem Bar Colour",items:a.hemColorOptions,selectedItem:a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedHemColor,handleChange:this._handleChange.bind(this)}))),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(x.a,{variant:"subtitle1"},"End Cap Colour "),n.a.createElement($,{title:"SelectedEndCap",helperText:"Select an End Cap colour",items:a.endCapOptions,selectedItem:a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedEndCap,handleChange:this._handleChange.bind(this)}))),n.a.createElement("div",null,n.a.createElement(E.a,null,"Add Motorization"),n.a.createElement(C.a,{id:"show-motorization",checked:a.rooms[a.selectedRoom].windows[a.selectedWindow].showMotorization,onChange:this._handleChange.bind(this),value:a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedMotorization}),a.rooms[a.selectedRoom].windows[a.selectedWindow].showMotorization&&n.a.createElement($,{title:"selectedMotorization",helperText:"Select a Motorization type",items:a.motorizations,selectedItem:a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedMotorization,handleChange:this._handleChange.bind(this)}),!a.rooms[a.selectedRoom].windows[a.selectedWindow].showMotorization&&n.a.createElement("div",null,n.a.createElement(E.a,null,"Cord Placement"),n.a.createElement($,{title:"cordPlacement",helperText:"Select a Motorization type",items:a.cordPlacements,selectedItem:a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedCordPlacement,handleChange:this._handleChange.bind(this)}))),n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},n.a.createElement("div",null,n.a.createElement(x.a,{variant:"subtitle1"},"Power Control Options "),n.a.createElement($,{title:"SelectedPowerControl",helperText:"Select a Power control type",items:a.powerControlOptions.map(function(e){return e.type}),selectedItem:a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedPowerControl,handleChange:this._handleChange.bind(this)})),n.a.createElement("div",null,n.a.createElement(x.a,{variant:"subtitle1"},"Remote Options "),n.a.createElement($,{title:"SelectedRemote",helperText:"Select a Remote type",items:a.remoteOptions.map(function(e){return e.type}),selectedItem:a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedRemote,handleChange:this._handleChange.bind(this)}))),n.a.createElement(J,{form:a,disabled:"Vision"===a.rooms[a.selectedRoom].windows[a.selectedWindow].selectedBlindType,window:a.rooms[a.selectedRoom].windows[a.selectedWindow],handleChange:this._handleChange.bind(this)}),n.a.createElement("div",null,n.a.createElement(x.a,{variant:"display1"},n.a.createElement("b",null,"Current Window Total:")," $",h," ")),n.a.createElement("div",{className:o.row},n.a.createElement(x.a,{variant:"display2"},n.a.createElement("b",null,"Total:")," ","$".concat(p)," "),n.a.createElement(P.a,{id:"download-form",disabled:-1===h,onClick:this._handleClick.bind(this),color:"primary",className:o.button,"aria-label":"Add to shopping cart",size:"large"},n.a.createElement(R.a,{onClick:function(t){return e._handleClick({target:{id:"download-form",value:t.target.value}})}}))),n.a.createElement("div",{className:o.row},"NaN"===p.toString()&&n.a.createElement("div",null,n.a.createElement(x.a,{variant:"subtitle1",color:"secondary"},"Error: You picked an unavailable dimension.")),-1===p&&n.a.createElement("div",null,n.a.createElement(x.a,{variant:"subtitle1",color:"secondary"},"Error: You have an incorrect fabric or incompatible selection."))))}}]),t}(a.Component),se=Object(p.withStyles)(function(e){return{button:{margin:e.spacing.unit},root:{padding:"1rem"},column:{display:"flex",flexDirection:"column",margin:"1rem 0"},row:{display:"flex",flexDirection:"row",margin:"1rem 0"},typography:{margin:"0.5rem 0 0.5rem 0"}}})(Object(h.b)(function(e,t){return{form:e.form,workbook:e.workbook}},function(e,t){return Object(v.b)({selectWorksheet:te,setForm:ee,downloadFormRequested:Q},e)})(ie)),ce=re.a.generate(),de={projectId:ce,clientName:"client-".concat(ce),selectedBlindType:"",worksheets:[],cordPlacements:["Left","Right"],endCapOptions:["White","Linen","Grey","Brown","Black","Blue"],hemColorOptions:["White","Linen","Anodized","Dark Bronze","Black"],powerControlOptions:[{type:"SG DC Charger",price:36},{type:"SG Solar Panel",price:84}],remoteOptions:[{type:"SG 1 Channel Standard",price:60},{type:"SG 15 Channel Standard",price:74},{type:"SG 1 Channel Touch",price:91},{type:"SG 15 Channel Touch",price:105},{type:"SG Connector Control Hub",price:393}],fabricToPriceGroupMapping:{Cottonwood:"PG1",Linen:"PG1","Vinyl 4 Ply":"PG1",Bali:"PG2",Boardwalk:"PG2","CS 103":"PG2","CS 105":"PG2",Gabardine:"PG2",Merino:"PG2",Petals:"PG2","Satin Privacy":"PG2","Wool Privacy":"PG2",York_solid:"PG2","CS 101":"PG3","Denim Privacy":"PG3","DX 201":"PG3","EZ 900":"PG3",Glow:"PG3","Lattice Translucent":"PG3",Matisse:"PG3","Water Colour":"PG3",Berber:"PG4",Bling:"PG4","Earth 2":"PG4","Flicker Translucent":"PG4",Lavish:"PG4",Reed:"PG4","Vinyl Wideshade":"PG4","Lattice Opaque":"PG5",Mist:"PG5","Wool Opaque":"PG5","Apex View 4-5%":"PG6","Denim Opaque":"PG6","ELT 303":"PG6","EPT 301":"PG6",Rococo:"PG6","Satin Opaque":"PG6","Apex View 2-3%":"PG7","Apex Reflect 2-3%":"PG7","Basket Privacy":"PG7","Matrix 2%":"PG7","Z Splendor":"PG7","Summit Privacy":"PG7",Wave:"PG7","Flicker Opaque":"PG8","Summit Reflect":"PG8",Paper:"PG9",Trilogy:"PG9","Apex Opaque":"PG10","Basket Opaque":"PG10",Bubble:"PG10","CSR 103":"PG10"},hembars:["Plain Hem","Slim Bar","Wrapped Accubar Hem Bar & Wrapped Hem Bar"],motorizations:["Sun Glo","Somfy"],priceGroups:["PG1","PG2","PG3","PG4","PG5","PG6","PG7","PG8","PG9","PG10"],priceGroupMap:["A5:S24","A30:S49","A55:S74","A80:S99","A105:S124","A130:S149","A155:S174","A180:S199","A205:S224","A230:S249"],priceGroupToValenceMapping:{PG1:[],PG2:[],PG3:[],PG4:[],PG5:[],PG6:[],PG7:[],PG8:[],PG9:[],PG10:[]},rooms:[{id:re.a.generate(),name:"Room 1",description:"",windows:[{id:re.a.generate(),name:"Window 1",dimensions:{units:"inches",height:30,width:30},selectedValanceOption:"Decora 8",selectedBlindType:"Roller",selectedFabric:"Cottonwood",selectedHem:"Plain Hem",selectedHemColor:"White",selectedEndCap:"Grey",selectedMotorization:"Sun Glo",selectedPriceGroup:"PG1",showMotorization:!1,selectedCordPlacement:"Left",selectedPowerControl:"SG DC Charger",selectedRemote:"SG 1 Channel Standard",showValance:!1,total:155.95}]}],selectedRoom:0,selectedWindow:0,selectedValance:"R Valance",valances:["R Valance","V Valance","I Valance"],valanceMap:["A1:S13","A1:S7","A1:S4"],valanceOptions:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"SET_FORM":return Object(g.a)({},e,t.payload);case"WORKBOOK_IMPORT_SUCCESS":return Object(g.a)({},e,{selectedBlindType:t.payload.SheetNames[0],worksheets:t.payload.SheetNames});case"SELECT_WORKSHEET":return Object(g.a)({},e,{selectedBlindType:t.payload,selectedValance:"".concat(t.payload.charCodeAt(0).toUpperCase()," Valance"),activeSheet:e.worksheets.find(function(e){return e})});default:return e}},he={SheetNames:[],Sheets:[]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"WORKBOOK_IMPORT_SUCCESS":return Object(g.a)({},e,t.payload);case"WORKBOOK_IMPORT_FAIL":return console.log("WORKBOOK_IMPORT_FAIL"),console.log(t.payload),e;default:return e}},ue=o(129),we=o(23),ge=o.n(we),be=o(69),ve=o(41),fe=o(72),Ce=o(127),ye=o.n(Ce),Ee=o(128),Oe=o.n(Ee),Pe=ge.a.mark(Se),Ge=ge.a.mark(ke);function Re(e){return We.apply(this,arguments)}function We(){return(We=Object(be.a)(ge.a.mark(function e(t){var o,a,n,l;return ge.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=ye.a.render(t,{keysColor:"rainbow",dashColor:"magenta",stringColor:"white"}),a=new fe.Document,n=new fe.Paragraph(o),a.addParagraph(n),l=new fe.Packer,e.next=8,l.toBase64String(a);case 8:return e.sent,e.next=11,Oe()(o,"".concat(t.clientName,".docx"),"text/plain");case 11:return e.abrupt("return",e.sent);case 14:throw e.prev=14,e.t0=e.catch(0),console.log(e.t0),e.t0;case 18:case"end":return e.stop()}},e,this,[[0,14]])}))).apply(this,arguments)}function Se(e){return ge.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("DO SOME ASYNC STUFF BRUGH!"),t.prev=1,t.next=4,Object(ve.a)(Re,e.payload);case 4:return t.next=6,Object(ve.b)({type:"DOWNLOAD_FORM_SUCCESS"});case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(1),t.next=12,Object(ve.b)({type:"DOWNLOAD_FORM_FAIL",payload:t.t0});case 12:console.log(t.t0);case 13:case"end":return t.stop()}},Pe,this,[[1,8]])}function ke(){return ge.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.c)("DOWNLOAD_FORM_REQUESTED",Se);case 2:case"end":return e.stop()}},Ge,this)}var xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):v.d,_e=[],Te=[],Fe=Object(v.c)({form:me,workbook:pe}),je=Object(ue.a)();Te.push(je),_e.push(v.a.apply(void 0,Te));var Ne=xe.apply(void 0,_e),Me=Object(v.e)(Fe,{},Ne);je.run(ke);function Ie(){return(Ie=Object(be.a)(ge.a.mark(function e(t){var o,a;return ge.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=new FileReader,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.blob();case 6:a=e.sent,o.onload=function(e){console.log(e);var t=e.target.result,o=ae.a.read(t,{type:"binary"});Me.dispatch({type:"WORKBOOK_IMPORT_SUCCESS",payload:o})},o.onerror=function(e){Me.dispatch({type:"WORKBOOK_IMPORT_FAIL",payload:e})},o.readAsBinaryString(a);case 10:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var Be=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){!function(e){Ie.apply(this,arguments)}("./data/Price grids.xlsx")}},{key:"render",value:function(){return n.a.createElement(h.a,{store:Me},n.a.createElement(p.MuiThemeProvider,{theme:u},n.a.createElement(se,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,2,1]]]);
//# sourceMappingURL=main.962a40fc.chunk.js.map