import React from 'react'
import DatePicker from 'react-date-picker'
import TimePicker from 'rc-time-picker'
import axios from 'axios'
import {Redirect,Link} from 'react-router-dom'
import moment from 'moment'
import 'rc-time-picker/assets/index.css'
export default class Form extends React.Component{
	constructor(props){
		super(props)
		this.state={
			name:'',
			phone:'',
			essentials:'',
			comments:'',
			date:new Date(),
			time:'00:00',
			showdiv:false,
			suggestions:[],
			error:'',
			redirect:false,
			submitBtn:'Submit',
			mess:''
		}
		this.dateChanged=this.dateChanged.bind(this)
		this.timeChanged=this.timeChanged.bind(this)
		this.mapRef=React.createRef()
		this.name=React.createRef()
		this.phone=React.createRef()
		this.essentials=React.createRef()
		this.comment=React.createRef()
		this.locationRef=React.createRef()
		this.locationChange=this.locationChange.bind(this)
		this.labelClick=this.labelClick.bind(this)
		this.submit=this.submit.bind(this)
	}
	submit(e){
		e.preventDefault()
		if(this.state.time==='00:00'){
			this.setState({
				error:'time'
			})
		}
		else{
			let err=false
			let me=''
			if(this.name.current.value===''){err=true 
				me="All Fields marked with Asterik are Required."}
			if(this.phone.current.value===''){err=true
			me="All Fields marked with Asterik are Required."}
			if(this.locationRef.current.value===''){err=true
			me="All Fields marked with Asterik are Required."}
			if(this.essentials.current.value===''){err=true
			me="All Fields marked with Asterik are Required."}
			
			if(err){
				this.setState({
					error:'some',
					mess:me
				})
			}else{
				if(isNaN(this.phone.current.value)){
				err="true"
				me='Enter a Valid Phone Number'
				}
				else{
					if(this.phone.current.value.length!==10){
						err="true"
						me="Enter a Valid 10 digit Number."
					}
				}
				if(err){
					this.setState({
						error:'some',
						mess:me
					})
				}	
				else{
				this.setState({err:'',submitBtn:'Saving...'})	
				let co=this.comment.current.value
				if(co==='') co='none'  
				axios.post('https://java-spring-api-hack1.herokuapp.com/api/details/add',{
				id:Math.random()*100,
				name:this.name.current.value,
				phone:this.phone.current.value,
				email:'none',
				location:this.locationRef.current.value,
				charityProducts:this.essentials.current.value,
				date:this.state.date.toString(),
				time:this.state.time,
				comments:co
				}).then((res)=>{
					if(res.status===200){
						this.setState({
							submitBtn:'Saved'
						})
						setTimeout(this.setState({redirect:true}),2000)
					}
				})
			}
			} 						

		}
	}
	componentDidMount(){
		this.H=window.H
		this.platform = new this.H.service.Platform({
	       apikey: "qs3Kzw98dPI9s-2J1Z7MhZ5tWal-FOm-MTo3tU1uEAw"
	    })
	   	const defaultLayers = this.platform.createDefaultLayers()

	    this.map = new this.H.Map(
	      this.mapRef.current,
	      defaultLayers.vector.normal.map,
	      {
	        center: { lat: 20.5937, lng: 78.9629 },
	        zoom: 4,
	        pixelRatio: window.devicePixelRatio || 1
	      })
	    const behavior = new this.H.mapevents.Behavior(new this.H.mapevents.MapEvents(this.map))
	    const ui = this.H.ui.UI.createDefault(this.map, defaultLayers)
	    let map=this.map
	    this.setState({ map })
	    //bot
	    window.watsonAssistantChatOptions = {
	      integrationID: "8524eb8e-7e4b-4b69-b73c-a19d80df56c2",
	      region: "eu-gb", 
	      serviceInstanceID: "bfb1f67d-828f-45f4-b22d-26241796871a", 
	      onLoad: function(instance) { instance.render()}
	    }
		  setTimeout(function(){
		    const t=document.createElement('script');
		    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js"
		    document.head.appendChild(t)
		  })
	    
	}
	locationChange(e){
		e.preventDefault()
		if(this.locationRef.current.value.length>0){
			axios.get('https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=qs3Kzw98dPI9s-2J1Z7MhZ5tWal-FOm-MTo3tU1uEAw&query='+this.locationRef.current.value)
			.then((res)=>{
				this.setState({
					showdiv:true,
					suggestions:res.data.suggestions
				})
			})
		}
		else{
			this.setState({
				showdiv:false
			})
		}

	}
	labelClick(val){
		this.setState({
			showdiv:false
		})
		this.locationRef.current.value=val.label
		this.platform = new this.H.service.Platform({
	       apikey: "qs3Kzw98dPI9s-2J1Z7MhZ5tWal-FOm-MTo3tU1uEAw"
	    })
	    var service = this.platform.getSearchService()
	    service.geocode({
		  q: val.label
		}, (res) => {
			res.items.forEach((item)=>{
				this.map.addObject(new this.H.map.Marker(item.position))
				this.map.setCenter({lat:item.position.lat,lng:item.position.lng})
				this.map.setZoom(13)
			})
		})
	}
	dateChanged(val){
		this.setState({
			date:val
		})
	}
	timeChanged(val){
		this.setState({
			time:val.format('HH:mm')
		})
		 }
	render(){
		if(this.state.redirect)
			return (
				<div><Redirect to="/"/></div>
				)
		else
		return(
			<div className="mt-0">
				<Link to="/">
				<div className="header pl-4 pt-3">
					<span className="name">Charity Maps</span>
					<span>.in</span>
				</div>
				</Link>
				<div className="body">
					<p className="mt-3 text-center title">Add Information of Your Donation</p>
					<form className="form-group container-fluid">
						<div className="row ml-2 mr-2">
							<div className="col-md-6 col-lg-6 col-sm-6 mt-3">
								<p data-toggle="tooltip" data-placement="bottom" title="Your Name">Name:*</p>
								<input className="form-control" type="text" placeholder="Name" ref={this.name} required/>
							</div>
							<div className="col-md-6 col-lg-6 col-sm-6  mt-3">
								<p data-toggle="tooltip" data-placement="bottom" title="Your Phone Number">Phone Number:*</p>
								<input className="form-control" type="text" placeholder="Number" ref={this.phone} required/>
							</div>
						</div>
						<div className="row padding-15 ml-2 mr-2 mt-3">
 								<p data-toggle="tooltip" data-placement="bottom" title="Items that You are giving in Charity">Charity items:*</p>
								<input className="form-control" type="text" placeholder="Charity Products" ref={this.essentials} required/>
 						</div>
 						<div className="row mt-3 ml-2 mr-2">
 							<div className="col-md-8 col-lg-8 col-sm-8 mt-2 ">
 								<p data-toggle="tooltip" data-placement="bottom" title="Addional Comments if Any.">Comments (Optional):</p>
 								<input className="form-control" type="text" placeholder="Comments" ref={this.comment}/>
 							</div>
 							<div className="col-md-2 col-lg-2 col-sm-2 mt-2 col-xs-3">
 								<p data-toggle="tooltip" data-placement="bottom" title="Date of Charity Donation">Date:*</p>
 								<DatePicker value={this.state.date} onChange={this.dateChanged} calendarIcon={null}/>

 							</div>
 							<div className="col-md-2 col-sm-2 col-lg-2 mt-2 col-xs-3">
 								<p data-toggle="tooltip" data-placement="bottom" title="Time of Charity Donation">Time:*</p>
 								<TimePicker onChange={this.timeChanged}  showSecond={false} defaultValue={moment()}/>
 								{this.state.error==='time'?<p className="error">Select Time</p>:<p></p>}
 							</div>
 						</div>
						<div className=" mt-3 row padding-15 ml-2 mr-2">
 							<p data-toggle="tooltip" data-placement="bottom" title="Location of the Charity Donation">Charity Location:*</p>
 							<input className="form-control" type="text" placeholder="Search the Locality" onChange={this.locationChange} ref={this.locationRef}/>
 							{this.state.showdiv ? 	
							<div className="suggestions pt-3">
								{this.state.suggestions.map((val)=><p key={val.locationId} className="suggestions-display pl-2" onClick={()=>this.labelClick(val)}>{val.label}</p>)}
							</div> : <div></div>}
							<div  className="map-div" ref={this.mapRef}></div>
						</div>
						<div className="text-center">
 							<button className="btn btn-outline-dark submit mb-2" onClick={this.submit}>{this.state.submitBtn}</button>
 							{this.state.error==='some'? <p className="mb-3">{this.state.mess}</p> :<p></p>}
 						</div>
					</form>
				</div>
			</div>
			)
	}
}
