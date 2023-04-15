import Button from "../components/common/Button";
import Mailing from "../components/Sections/Mailing";

export default function Home() {
  return (
    <>
      <div className="landing">
        <div className="row">
          <div className="col-lg-6">
          </div>
          <div className="col-lg-6">
            <div className="p-5 mt-4">
              <h1 className="display-4">Radesy Moon</h1>
              <p className="lead">
                Radesy Moon is a news aggregator service, that delivers
                news from different sources and publication
              </p>
              <Button type="button" design="primary">
                Download App
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Mailing />
    </>
  );
}
