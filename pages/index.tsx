import Image from "next/image";
import Button from "../components/common/Button";
import Mailing from "../components/Sections/Mailing";
import { config } from "../config/configs";

export default function Home() {
  return (
    <>    
      <div className="container">
        <div className="left-panel">
          <div className="header">
            <header className="header">
              OvalBark
            </header>
          </div>
          <div>
            <p className="description">
              OvalBark is a news aggregator service, that delivers news from different sources and publication
            </p>
          </div>
          <div className="download-icons">
            <Button design="primary" onClick={() => {
              window.open(`${config.APP_URL}/login`, '_blank')
            }}>
              Get Started
            </Button>
          </div>
        </div>
        <div className="right-panel">
          <div className="image-show-first">
            <Image src='/assets/show-case-1.jpg' width={775} height={1500} />
          </div>
          <div className="image-show-second">
            <Image src='/assets/show-case-3.jpg' width={775} height={1500} />
          </div>
        </div>
      </div>
      <Mailing />
    </>
  )
}
