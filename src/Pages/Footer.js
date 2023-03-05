import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
		
			
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Location</FooterLink>
			
			
		</Column>
		
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "20px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			
			
			
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
