import Link from "next/link";
import React from "react";
import Button from "../common/Button";

export default function CookieConsent() {
  const [show, setShow] = React.useState(true);
  const getCookie = (name: string) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const handleCookie = () => {
    document.cookie = "consent=true";
    setShow(false);
  };

  React.useEffect(() => {
    const cookie = getCookie("consent");
    if (cookie) {
      setShow(false);
    }
  }, []);

  if (!show) {
    return <></>;
  }

  return (
    <div className='cookie-consent'>
      <div className='cookie-container'>
        <p>This website uses cookies to enhance user experience. You can find a more detail usage based on the <div className="privacy-link-cookie"><Link href="/privacy-policies">Privacy and Policy</Link></div>page.</p>
        <Button design='primary' onClick={handleCookie}>
          I understand
        </Button>
      </div>
    </div>
  );
}
