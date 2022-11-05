import { Inputfield, Multitextfield } from './Forminput'

const Contact = () => {
  const name = "Philip Oyelegbin";

  return (
    <main>
      <div className="container">
        <h4>Contact Me</h4>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form>
            <div className='grouped-input'>
                <Inputfield text="first_name" label="First name" placeholder="Enter your first name"/>
                <Inputfield text="last_name" label="Last name" placeholder="Enter your last name"/>
            </div>
            <Inputfield text="email" label="Email" placeholder="yourname@email.com"/>
            <Multitextfield text="message" label="Message" placeholder="Send me a message and I'll reply you as soon as possible..."/>
            <div className="agreement">
                <input type="checkbox" name="agreement" id="agreement" />
                <label htmlFor="agreement">You agree to providing your data to {name} who may contact you.</label>
            </div>
            <button id="btn__submit">Send message</button>
        </form>
      </div>
    </main>
  )
}

export default Contact