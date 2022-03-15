import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="header">
          <header className="header">
            Ultimate News
          </header>
        </div>
        <div>
          <p className="description">
            Download the news application with updates to breaking news, weather and news sentiment
          </p>
        </div>
        <div className="download-icons">
          <Link href="https://play.google.com/store/apps/details?id=com.leumasco.ultimatenews">
              <Image src="/assets/play-store.png" className="android-download" width={200} height={80} />
          </Link>
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
  )
}
