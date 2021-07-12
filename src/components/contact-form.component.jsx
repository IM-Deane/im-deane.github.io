import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useForm } from "@formspree/react";

function ContactForm() {
	const [inputName, setInputName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const [state, handleSubmit] = useForm("xzbydlkw");

	if (state.succeeded) {
		return (
			<p className="text-body">
				Thanks for contacting us! We will be in touch soon.
			</p>
		);
	}

	// Handle mulitple inputs

	const handleSubmission = (e) => {
		// Submit form
		handleSubmit();
		// Clear fields
		setInputName("");
		setEmail("");
		setPhone("");
		setSubject("");
		setMessage("");
	};

	return (
		<>
			<form
				id="contact-form"
				className="col col-md-12 col-lg-11 col-xl-8 m-auto p-3"
				action="https://formspree.io/f/xzbydlkw"
				method="POST"
				// onSubmit={handleSubmission}
			>
				<input type="hidden" name="_subject" value="TCA Contact Form" />
				{/* <!-- Thank you page redirect --> */}
				{/* <input type="hidden" name="_next" value="./thanks.html" /> */}
				<fieldset className="row m-auto justify-content-md-center">
					{/* <!-- Name input --> */}
					<div className="row mb-3">
						<div className="col">
							<div className="input-group">
								<span className="input-group-text">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-person-circle"
										viewBox="0 0 16 16"
									>
										<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
										<path
											fillRule="evenodd"
											d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
										/>
									</svg>
								</span>
								<input
									type="text"
									className="form-control"
									id="inputName"
									name="inputName"
									placeholder="Name (required)"
									maxLength="25"
									required
									value={inputName}
									onChange={(e) => setInputName(e.target.value)}
								/>
							</div>
						</div>
					</div>
					{/* <!-- Email input --> */}
					<div className="row mb-3">
						<div className="col">
							<div className="input-group">
								<span className="input-group-text" id="mail-addon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-envelope-fill"
										viewBox="0 0 16 16"
									>
										<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
									</svg>
								</span>
								<input
									type="email"
									className="form-control"
									id="email"
									name="_replyto"
									placeholder="johnDoe@example.com (required)"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>
					</div>
					{/* <!-- Phone Input --> */}
					<div className="row mb-3">
						<div className="col">
							<div className="input-group">
								<span className="input-group-text">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-telephone-fill"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
										/>
									</svg>
								</span>
								<input
									type="text"
									className="form-control"
									id="phone"
									name="phone"
									placeholder="780-123-7890"
									maxLength="15"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
						</div>
					</div>
					{/* <!-- Subject input --> */}
					<div className="row mb-3">
						<div className="col">
							<div className="input-group">
								<span className="input-group-text">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-pencil-square"
										viewBox="0 0 16 16"
									>
										<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
										<path
											fillRule="evenodd"
											d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
										/>
									</svg>
								</span>
								<input
									type="text"
									className="form-control"
									id="floatingInput"
									placeholder="Subject"
									name="subject"
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
								/>
							</div>
						</div>
					</div>
					{/* <!-- Message input --> */}
					<div className="row mb-3">
						<div className="col">
							<textarea
								className="form-control form-control-lg"
								id="message"
								name="message"
								placeholder="Your message"
								maxLength="500"
								required
								// value={message}
								// onChange={(e) => setMessage(e.target.value)}
							></textarea>
						</div>
					</div>
				</fieldset>
				<fieldset className="row m-auto">
					<div className="col mx-3">
						<button
							type="submit"
							className="btn btn-lg btn-primary"
							disabled={state.submitting}
						>
							<span className="d-flex align-items-center">
								Send <FaChevronRight className="ms-1" />
							</span>
						</button>
					</div>
				</fieldset>
			</form>
		</>
	);
}

export default ContactForm;
