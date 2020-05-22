import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import axios from 'axios'
import {Link} from 'react-router-dom'
//Home Screen route for the app
export default class Home extends React.Component{
	constructor(props){
		super(props)
		this.mapRef=React.createRef()
		this.state={
			loader:true,
			data:[],
			mess:'',
			original:[],
			selected:'',
			divId:''
		}
		this.getData=this.getData.bind(this)
		this.watsonRef=React.createRef()
		this.divClicked=this.divClicked.bind(this)
		this.change=this.change.bind(this)
		this.filter =this.filter.bind(this)
		this.filterRef=React.createRef()
	}

	//function for filter clicked
	filter(val){
		this.setState({mess:''})
		var months = {
	      May: "4",
	      Jun: "5",
	      Jul: "6",
	      Aug: "7",
	      Sep: "8",
	      Oct: "9",
	      Nov: "10",
	      Dec: "11"
	    }
	    let mo=0
		let day=0
		let arrData=[]
		if(val==='today'){
			let date=new Date()
			this.state.original.map((v)=>{
				let vdate=v.date.split(' ')
				let mon=vdate[1]
				let dy=vdate[2]
				let arr=Object.entries(months)
				arr.map((d)=>{
					if(d[0]===mon){
						mo=d[1]
						if(mo==date.getMonth()){
							if(dy==date.getDate())
								{
								arrData.push(v)
								}
						}
					}
					
				})
			})
		}
		else if(val==='tommorow'){
			let date=new Date()
			this.state.original.map((v)=>{
				let vdate=v.date.split(' ')
				let mon=vdate[1]
				let dy=vdate[2]
				let arr=Object.entries(months)
				arr.map((d)=>{
					if(d[0]===mon){
						mo=d[1]
						if(mo==date.getMonth()){
							if(dy==date.getDate()+1)
								{
								arrData.push(v)
								}
						}
					}
					
				})
			})	
		}
		else if(val==='yesterday'){
			let date=new Date()
			this.state.original.map((v)=>{
				let vdate=v.date.split(' ')
				let mon=vdate[1]
				let dy=vdate[2]
				let arr=Object.entries(months)
				arr.map((d)=>{
					if(d[0]===mon){
						mo=d[1]
						if(mo==date.getMonth()){
							if(dy==date.getDate()-1)
								{
								arrData.push(v)
								}
						}
					}
					
				})
			})
		}
		else{
			arrData=this.state.original
			this.filterRef.current.value=''
		}
		if(arrData.length>0){
			this.setState({
				data:arrData,
				selected:val
			})
		} else this.setState({mess:'No data Found',selected:val})
	}
	// Function for search by city 
	change(e){
		this.setState({mess:''})
		let val=e.target.value.toUpperCase()
		if(val.length>0){
			let arr=[]
			var data=this.state.original
			
			data.filter((v)=>{
				let loc=v.location.split(',')[1]
				loc=loc.toUpperCase()
				loc=loc.trim()
				loc=loc.substr(0,val.length)
				
				if(loc===val)
					arr.push(v)
			})
			this.setState({
				data:arr
			})
		}
		else{
			this.setState({
				data:this.state.original
			})
		}

	}
	//function when data in the list is clicked
	divClicked(val){
		this.setState({
			divId:val.id
		})
		this.platform = new this.H.service.Platform({
	       apikey: "qs3Kzw98dPI9s-2J1Z7MhZ5tWal-FOm-MTo3tU1uEAw"
	    })
	    var service = this.platform.getSearchService()
	    service.geocode({
		  q: val.location
		}, (res) => {
			res.items.forEach((item)=>{
				this.map.addObject(new this.H.map.Marker(item.position))
				this.map.setCenter({lat:item.position.lat,lng:item.position.lng})
				this.map.setZoom(13)
			})
		})
	} 

	//setting up here maps and importing bot 
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

	    this.getData()


	    //bot
	    window.watsonAssistantChatOptions = {
	      integrationID: "58987fad-fdf6-4493-a71e-ec9d804ee0b1",
	      region: "eu-gb", 
	      serviceInstanceID: "88b4cea6-9031-4253-b46a-6c7f0e6c927d", 
	      onLoad: function(instance) { instance.render()}
	    }
		  setTimeout(function(){
		    const t=document.createElement('script');
		    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js"
		    document.head.appendChild(t)
		  })
	}

	//get Data stored in the database
	getData(){
		axios.get('https://java-spring-api-hack1.herokuapp.com/api/details/all')
		.then((res)=>{
			if(res.status===200){
				if(res.data.length>0)
				this.setState({
					loader:false,
					data:res.data,
					original:res.data
				})
				else
					this.setState({
						data:res.data,
						original:res.data,
						loader:false,
						mess:'No data Found.'
					})
				
			else{
				this.setState({
					loader:false,
					mess:'Error in Getting Data.'
				})
			}
		})
	}
	render(){
		return(
			<div className="home">
				<div className="header pl-4 pt-3 ">
					<span className="name">Charity Maps</span>
					<span>.in</span>		
					<Link to="/add-info"><button className="btn btn-outline-dark add">Add Info</button></Link>
				</div>
				<div className="row">
					<div className="col-md-8 col-lg-8 col-sm-8 map-div-home">
						<div className="home-map" ref={this.mapRef}></div>
					</div>
					<div className="col-md-4 col-sm-4 col-lg-4 scroll">
						<div className="filter-div p-2 mt-2">
							<span className="filter mr-2">Filters:</span>
							
							<span className={this.state.selected==='yesterday' ? 'bod dob fi mr-2':'bod fi mr-2'}  onClick={()=>this.filter('yesterday')}>Yesterday</span>
							<span className={this.state.selected==='today' ? 'bod dob fi mr-2':'bod fi mr-2'} onClick={()=>this.filter('today')}>Today</span>
							<span className={this.state.selected==='tommorow' ? 'bod dob fi mr-2':'bod fi mr-2'}  onClick={()=>this.filter('tommorow')}>Tommorow</span>
							 
							<input className="form-control mt-3" type="text" placeholder="Search By City Name"ref={this.filterRef} onChange={(event)=>this.change(event)}/>
							<p className={this.state.selected==='clear' ? 'bod fi text-center mt-2':' bod  text-center mt-2 fi '}  onClick={()=>this.filter('clear')}>Clear Filter</p>
						</div>
						<div className="display-list-div mt-3 ml-1">
							{this.state.loader? 
								<div className='text-center mt-5'>
									<Loader color="#00BFFF"
							    	type="Oval"
							        height={80}
							        width={80}/>
								</div>
								:
								(this.state.mess!=='') ? <div className="mt-5 text-center">{this.state.mess}</div> :
								<div>
								{
									this.state.data.map((val)=>
										<div className={this.state.divId===val.id? " border-black display-div p-2" : "display-div p-2"} key={val.id}  onClick={()=>this.divClicked(val)}>
											
											<p className="data-name">{val.name}</p>
											<p className="data-label">Essentials:</p>
											<p className="data">{val.charityProducts}</p>
											<div>
												<p className="data-label">Date & Time :</p>
												<p className="data">
													{val.date.split(' ')[1]} {val.date.split(' ')[2]} {val.date.split(' ')[3]} {val.time}
												</p>	
											</div>
											<p className="data-label">Charity Location:</p>
											<p className="data">{val.location}</p>
											<p className="data-label">Comments:</p>
											<p className="data">{val.comments==='none' ? '' : val.comments}</p>
											
										</div>
									)
								}
								<div className="contact-div text-center">
									<p>For more details <a href="mailto:ayushs125@gmail.com" className="mail">Contact</a></p>
								</div>
								<div ref={this.watsonRef}></div>
								</div>
							}
						</div>
					</div>
				</div>	
			</div>
		)
	}
}