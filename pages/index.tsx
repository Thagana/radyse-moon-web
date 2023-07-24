import * as React from "react";
import InfoBar from "../components/Infobanner";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import NewsLatterForm from "../components/Newsletter";

export default function Home() {
  return (
    <div>
      <div className="columns is-multiline"></div>
      <section className="section">
        <div className="container">
          <div className="mb-6 pb-3 columns is-multiline">
            <div className="column is-12 is-6-desktop mx-auto has-text-centered">
              <h2
                className="mb-4 is-size-1 is-size-3-mobile has-text-weight-bold"
                style={{ color: "#31004a" }}
              >
                Radyse Moon
              </h2>
              <p className="subtitle mb-5">
                Radyse Moon is an AI powered news aggregator that aggregates news from multiple sources
              </p>
              <div className="buttons is-centered">
                <Link href="#">
                  <a className="mr-3">
                    <Image
                      src="https://bulmatemplates.github.io/bulma-templates/images/app-page/images/buttons/app-store.svg"
                      alt=""
                      width="150px"
                      height="150px"
                    />
                  </a>
                </Link>
                <Link href="#">
                  <a className="mr-3">
                    <Image
                      src="https://bulmatemplates.github.io/bulma-templates/images/app-page/images/buttons/google-play.svg"
                      alt=""
                      width="150px"
                      height="150px"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-12 is-4-desktop">
              <InfoBar
                title="Notifications"
                description="Get Notifications of new articles"
                iconName="NotificationOutlined"
              />
              <InfoBar
                title="Link to news sources"
                description="Link to your favorite news sources"
                iconName="LinkOutline"
              />
            </div>
            <div className="column is-4 is-block-desktop is-hidden-touch">
              <AnimatePresence>
                <motion.img
                  className="mx-auto mt-0-widescreen is-block show-image"
                  src="/assets/show-case-3.jpg"
                  alt=""
                  initial={{ x: 0, opacity: 0, scale: 0.5 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ x: 0, opacity: 0 }}
                />
              </AnimatePresence>
            </div>
            <div className="column is-12 is-4-desktop">
              <InfoBar
                title="Search for new articles"
                description="Search for news articles"
                iconName="SearchOutline"
              />
              <InfoBar
                title="Community"
                description="Discuss with other users, about current affairs"
                iconName="EarthOutline"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section landing-section">
        <div className="container">
          <div className="is-vcentered columns is-multiline">
            <div className="column is-6 is-5-desktop mb-4">
              <span className="has-text-white">Our Mailing list</span>
              <h2 className="has-text-white mt-2 mb-3 is-size-1 is-size-3-mobile has-text-weight-bold">
                Subscribe to our newsletter
              </h2>
              <p className="has-text-white">
                Subscribe to our newsletter and get exciting news and updates
                about our product.
              </p>
            </div>
            <div className="column is-5 ml-auto">
              <div className="mx-auto box p-6 has-background-light has-text-centered">
                <h4 className="is-size-5 mb-2 has-text-weight-bold">
                  Join Our Mailing List!
                </h4>
                <p className="has-text-grey-dark mb-4">
                  Please provide us with your email, we promise not to spam you.
                </p>
                <NewsLatterForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
