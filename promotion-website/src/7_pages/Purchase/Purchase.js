import React, { Component } from 'react';
import Clock from '../../3_atoms/Clock/Clock';
import PrimaryButton from '../../3_atoms/PrimaryButton/PrimaryButton';
import Heading from '../../3_atoms/Heading/Heading';
import { Link } from 'react-router-dom';
import Header from '../../5_organisms/Header/Header';
import Footer from '../../5_organisms/Footer/Footer';

class Purchase extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	      discover: "nav-links",
	      home: "nav-links",
	      purchase: "nav-links nav-active",
	    };
	}
	render() {
		
		return (
        	<div className='Purchase'>
	    		<Header discover={this.state.discover} home={this.state.home} purchase={this.state.purchase} />
	    		{/* design voor deze pagina vind je hier:
					Desktop: https://drive.google.com/open?id=1KL7o6ixZDz3TBGVEYp6A4XjxQKVFjEQO
					Mobile: https://drive.google.com/open?id=1GLwH_q7mqfLWNaCbZIR_kgc2PwTeWiOz
	    		*/}
	        	<div className="main">
		            <h1>PURCHASE</h1>
			        <span className="underline"></span>
		        </div>
		        
		      	<Footer />
		    </div>
        );
	}
}

export default Purchase