import Button from "../components/common/Button";
import Mailing from "../components/Sections/Mailing";
import { config } from "../config/configs";
import Image from '../components/common/Image';

export default function Home() {
  return (
    <>    
      <div className="container">
        <div className="left-panel">
          <div className="header">
            <header className="header">
              The Ultimate News
            </header>
          </div>
          <div>
            <p className="description">
              The Ultimate News is a news aggregator service, that delivers news from different sources and publication
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
            <Image src='/assets/show-case-1.jpg' className="images" />
          </div>
          <div className="image-show-second">
            <Image src='/assets/show-case-3.jpg' className="images" />
          </div>
        </div>
      </div>
      <Mailing />
    </>
  )
}
