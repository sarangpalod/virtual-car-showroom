import React, { useEffect } from "react";
import { Wrapper, Content } from "./testdrive.style";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const Testdrive = () => {
  document.title = "TEST DRIVE | KIA";

  const [name ,setName] = React.useState("");
const [phone ,setPhone] = React.useState("");
const [email ,setEmail] = React.useState("");
const [address ,setAddress] = React.useState("");
const [state ,setState] = React.useState("");
const [pin ,setPin] = React.useState("");
const [model ,setModel] = React.useState("");
const [date ,setDate] = React.useState("");


  useEffect(() => {
    AOS.init({ duration: 1400 });
  }, []);
  
    const handleClick = async(e) => {
        e.preventDefault();
        if (!name || !phone || !email || !address || !state || !pin || !model || !date) {
            alert("Please fill all the details");
            return;
        }
        const data = {
            name,
            phone,
            email,
            address,
            state,
            pin,
            model,
            date,
        };
        const res = await axios
            .post(`${process.env.REACT_APP_API_URL}/test-drive`, data)
            .then((res) => {
            // alert("Your request has been submitted successfully");
            setName("");
            setPhone("");
            setEmail("");
            setAddress("");
            setState("");
            setPin("");
            setModel("");
            setDate("");
            })
            .catch((err) => {
            console.log(err);
            });

            alert("Your request has been submitted successfully");

            //clearing the form
            setName("");
            setPhone("");
            setEmail("");
            setAddress("");
            setState("");
            setPin("");
            setModel("");
            setDate("");

            return res;
        }

  return (
    <Wrapper>
      <Header />
      <Content>
        <div>
          <p className="h2" data-aos="fade-right">
            Book for Test Drive
          </p>
          <div
            style={{
              borderTop: "3px solid white",
              width: 100,
              marginTop: 20,
              marginBottom: 60,
            }}
            data-aos="fade-right"
          />
          <form action="#">
            <div className="main">
              <label htmlFor="name" className="label">
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="input"
              />
              <label htmlFor="phone" className="label">
                Phone No.:
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="input"
              />
              <label htmlFor="email" className="label">
                Email ID:
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email id"
                className="input"
              />
              <label htmlFor="address" className="label">
                Address:
              </label>
              <textarea
                name="address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                cols="20"
                rows="8"
                placeholder="Enter your address"
                className="input"
              ></textarea>
              <label htmlFor="state" className="label">
                Kia Dealer Place:
              </label>
              <select id="state"
               value={state}
               onChange={(e) => setState(e.target.value)}
               className="input">
                <option value="">Select place</option>
                <option value="andra">Andhra Pradesh</option>
                <option value="arunachal">Arunachal Pradesh</option>
                <option value="assam">Assam</option>
                <option value="bihar">Bihar</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="chhattisgarh">Chhattisgarh</option>
                <option value="delhi">Delhi</option>
                <option value="goa">Goa</option>
                <option value="gujarat">Gujarat</option>
                <option value="haryana">Haryana</option>
                <option value="himachal">Himachal Pradesh</option>
                <option value="jammu">Jammu and Kashmir</option>
                <option value="jharkhand">Jharkhand</option>
                <option value="karnataka">Karnataka</option>
                <option value="kerala">Kerala</option>
                <option value="madhya">Madhya Pradesh</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="orissa">Orissa</option>
                <option value="pondi">Pondicherry</option>
                <option value="punjab">Punjab</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="tamil">Tamil Nadu</option>
                <option value="telangana">Telangana</option>
                <option value="uttar">Uttar Pradesh</option>
                <option value="uttarakhand">Uttarakhand</option>
                <option value="west">West Bengal</option>
              </select>
              <label htmlFor="pin" className="label">
                Pincode:
              </label>
              <input
                type="text"
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter your Pincode"
                className="input"
              />
              <label htmlFor="model" className="label">
                Kia Model:
              </label>
              <select id="model"
              
                value={model}
                onChange={(e) => setModel(e.target.value)}
              className="input">
                <option value="">Select KIA model</option>
                <option value="carens">Carens</option>
                <option value="ev6">EV6</option>
                <option value="seltos">Seltos</option>
                <option value="sonet">Sonet</option>
              </select>
              <label htmlFor="date" className="label">
                Select Preferred Date:
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="dd/mm/yyyy"
                className="input"
              />
              <button
                className="btn btn-outline-light"
                type="submit"
                onClick={handleClick}
              >
                Submit
              </button>
              <br />
              <br />
              <br />
            </div>
          </form>
        </div>
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default Testdrive;
