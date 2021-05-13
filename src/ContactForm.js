// Handle contact form submissions
const form = document.querySelector("form");
const submitBtn = form.querySelector("button");

submitBtn.addEventListener("click", () => submitForm());

function submitForm() {
	console.log("submitted");
	form.submit();
	form.reset();
}
