import { useEffect, useState } from "react";

// Bootstrap
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	FormControl,
	FormGroup,
	FormLabel,
	FormText,
} from "react-bootstrap";

const ReviewForm = () => {
	const [inputValues, setInputValues] = useState({
		input_name: "",
		input_company: "",
		input_jobTitle: "",
		input_email: "",
		input_phone: "",
		input_msg: "",
	});

	// Get form input values
	const handleValueChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		// Copy and dynamically update input value
		setInputValues({ ...inputValues, [name]: value });
	};

	useEffect(() => {
		document.title = "Tell us how we did - TCA Developments";
	}, []);

	return (
		<>
			<Container fluid className="py-5 bg-img h-100">
				<Row className="justify-content-center pt-5">
					<Col sm={12} md={6}>
						<Form
							className="mx-auto p-5 border bg-light rounded-2"
							action="/reviews"
							method="POST"
						>
							<Row
								as="header"
								className="bg-gradient py-2 mb-3"
								style={{ backgroundColor: "#12487b" }}
							>
								<h1 className="h2 ms-2 text-white d-flex align-items-baseline">
									Leave us a review:
								</h1>
							</Row>
							<FormGroup className="mb-3" controlId="input_name">
								<FormLabel>* Name:</FormLabel>
								<FormControl
									type="text"
									placeholder="What's your name?"
									name="input_name"
									pattern="[a-zA-Z\s]+"
									value={inputValues.input_name}
									onChange={handleValueChange}
									maxLength="50"
									required
								/>
							</FormGroup>
							<FormGroup className="mb-3" controlId="input_company">
								<FormLabel>* Company:</FormLabel>
								<FormControl
									type="text"
									placeholder="Enter the name of your company"
									name="input_company"
									value={inputValues.input_company}
									onChange={handleValueChange}
									maxLength="100"
									required
								/>
							</FormGroup>
							<FormGroup className="mb-3" controlId="input_jobTitle">
								<FormLabel>Position:</FormLabel>
								<FormControl
									type="text"
									name="input_jobTitle"
									pattern="[a-zA-Z\s]+"
									placeholder="What is your position with the company?"
									value={inputValues.input_jobTitle}
									onChange={handleValueChange}
									maxLength="50"
								/>
							</FormGroup>
							<FormGroup className="mb-3" controlId="input_email">
								<FormLabel>* Email:</FormLabel>
								<FormControl
									type="email"
									name="input_email"
									placeholder="Enter your email"
									value={inputValues.input_email}
									onChange={handleValueChange}
									maxLength="40"
									required
								/>
							</FormGroup>
							<FormGroup className="mb-3" controlId="input_phone">
								<FormLabel>Phone:</FormLabel>
								<FormControl
									type="tel"
									name="input_phone"
									placeholder="780-123-4567"
									pattern="^\d{3}-\d{3}-\d{4}$"
									autoComplete="off"
									value={inputValues.input_phone}
									onChange={handleValueChange}
									maxLength="14"
								/>
								<FormText muted>Format: XXX-XXX-XXXX</FormText>
							</FormGroup>
							<FormGroup className="mb-3" controlId="input_msg">
								<FormLabel>* Tell us how we did:</FormLabel>
								<FormControl
									as="textarea"
									style={{ height: "150px" }}
									name="input_msg"
									pattern="[a-zA-Z0-9!@#$%^*_|]"
									value={inputValues.input_msg}
									onChange={handleValueChange}
									minLength="10"
									maxLength="255"
									required
								/>
								<FormText muted>255 character limit</FormText>
							</FormGroup>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ReviewForm;
