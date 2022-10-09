import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked With All these
          </span>
          <span>Tool & Libaries</span>
          <span>
            I have worked with this libaries and so many others
            <br />
             and i know i will be a great addition to your team. 
            
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img style={{width: '150px', height: "150px", borderRadius: '50%'}} src='https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo-700x394.png' alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{width: '150px', height: "150px", borderRadius: '50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkWCkkooc8ICyJyje-gJRmUsuzM7uWCUpjNJIqHSKvg&s' alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{width: '200px', height: "200px", objectFit: "cover", borderRadius: '50%'}} src='https://community.nodemailer.com/wp-content/uploads/2016/01/cropped-n2.png' alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{width: '200px', height: "200px", objectFit: "cover", borderRadius: '50%'}} src='https://pbs.twimg.com/profile_images/599259952574693376/DMrPoJtc_400x400.png' alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{width: '200px', height: "200px", objectFit: "cover", borderRadius: '50%'}} src='https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png' alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
