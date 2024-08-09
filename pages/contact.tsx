import React from "react";
import Button from "../components/common/Button";
import Lottie from "lottie-react";
import AnimationFile from "../public/assets/contact.json";

import Server from "../services/networking";

export default function contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [serverMessage, setSererMessage] = React.useState("");

  const handleSendMessage = async (event) => {
    try {
      event.preventDefault();
      const response = await Server.sendContactForm({ name, email, message });
      if (response.success) {
        setSererMessage(response.message);
      }
      setSererMessage(response.message);
    } catch (error) {
      console.log(error);
      setSererMessage("Something went wrong, please try again later");
    }
  };
  return (
    <div>
      <div className="container contact-form">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Lottie animationData={AnimationFile} />
          </div>
          <div className="col-md-6">
            <div>
              {serverMessage && (
                <div
                  className={`alert alert-${
                    serverMessage ? "danger" : "primary"
                  }`}
                  role="alert"
                >
                  {serverMessage}
                </div>
              )}
            </div>
            <form onSubmit={handleSendMessage}>
              <div className="form-group">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="form-control"
                  required
                  value={name}
                  onChange={(val) => setName(val.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="name"
                  placeholder="Enter Email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(val) => setEmail(val.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="label">Email</label>
                <textarea
                  name="name"
                  placeholder="Message ..."
                  className="form-control textarea"
                  required
                  value={message}
                  onChange={(val) => setMessage(val.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <Button design="primary long" onClick={() => {}} type="submit">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
