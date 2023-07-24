import React from "react";
import Button from "../../common/Button";

import Network from "../../../services/networking";

export default function Mailing() {
  const [email, setEmail] = React.useState("");
  const [serverMessage, setServerMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    try {
      setLoading(true);
      event.preventDefault();
      const response = await Network.sendMailListUpdate(email);
      setServerMessage(response.message);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setServerMessage("Something went wrong, please try again later");
      setLoading(false);
    }
  };

  return (
    <div className="mailing-list">
      <div>
        {serverMessage && (
          <div
            className={`alert alert-${serverMessage ? "danger" : "primary"}`}
            role="alert"
          >
            {serverMessage}
          </div>
        )}
      </div>
      <header className="header">
        <h1>Get notified when we have updates</h1>
      </header>
      <div className="email-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="email"
              type="email"
              value={email}
              onChange={(val) => setEmail(val.target.value)}
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <Button design="primary" type="submit">
              {loading ? "Loading ..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
