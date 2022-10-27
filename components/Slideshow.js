import React from "react";

//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import styles  from "../styles/slider.module.css"
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
	//Array of Images
	const images = [
		"img/slider1.jpeg",
		"img/slider2.gif",
		"img/slider3.gif",
		"img/slider4.gif",
		"img/Image5.jpg",
	];

	//These are custom properties for zoom effect while slide-show
	const flechas = {
		indicators: true,
		scale: 1.2,
		duration: 2000,
		transitionDuration: 200,
		infinite: true,
	}
	

	return (
		<div className={styles.slidescontainer}>
			<center>
				<Zoom  {...flechas}>
					{images.map((each, index) => (
						<div style={{width: "77.79%", display: "flex", justifyContent: "center", alignContent: "center"
						,border:"2px solid #FFFF",boxShadow:"10px 5px 5px  rgba(0,0,0,0.5)"}} key={index}>
							<img
								style={{display: "flex", justifyContent: "center"}}
								className="w-3/4 object-cover rounded-lg shadow-xl"
								width={20000}
								height={600}
								src={each}
							/>
						</div>
					))}
				</Zoom>
			</center>
		</div>	
		
	);
};

export default Slideshow;
