import Footer from "./Footer";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
const Contact = () => {
  return (
    <div className="container">
      <h1 className="contact-title">Connect with us</h1>
      <div className="contact">
        <div className="box1">
          {/* In form action attribute i've used FORMSPREE which allows us 
          sending form data in our email, first we have to activate 
          our email address then it provides an activation link  */}
          <form action="https://formspree.io/f/xyyveydk" method="POST">
            <h1>Tell us about your project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              recusandae?
            </p>
            Your Name <br />
            <input required type="text" name="name" />
            <div className="emailAndPhone">
              <div>
                Your Email <br /> <input type="email" name="email" />
              </div>
              <div>
                Your Phone <br />
                <input type="text" name="phone" />
              </div>
            </div>
            Your Message
            <br />
            <textarea name="msg" id="" rows="5"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="box2">
          <div className="add">
            <h1>Address</h1>
            <p>0199 Taylor Park, North Dakota, USA</p>
          </div>
          <div className="division"></div>
          <div className="call">
            <h1>Call us on</h1>
            <p>+1 98723 42023</p>
            <p>info@logoipsum.com</p>
          </div>
          <div className="division"></div>
          <div className="soical-icons">
            <h1>Social Media</h1>
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
