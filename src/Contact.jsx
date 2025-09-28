import { useNavigate } from "react-router-dom";
export default function Contact () {
    const navigate = useNavigate(); 
    //Handles the form request 
    const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Thank you! Your message has been sent.");
    navigate("/");
  };
    
    return (

    <div>
        <div>
            <h2>Contact</h2>
            <p>Please feel free to contact me at <a href="mailto: meet_abdullah06@outlook.com">meet_abdullah06@outlook.com</a></p>
            <p>You may also fill out this form to send me a message and provide your contact details</p>
        </div>

        <div>
             <form id="contact" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <br />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />
          <br />

          <input type="tel" name="contactNumber" placeholder="Contact Number" />
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <br />

          <textarea name="message" placeholder="Message" required />
          <br />

          <button type="submit">Send</button>
        </form>
    </div>


</div>


        

    );

}