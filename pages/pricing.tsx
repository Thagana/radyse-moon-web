import * as React from "react";
import { motion } from "framer-motion";
import Button from "../components/common/Button";
import { config } from "../config/configs";

export default function pricing() {
  const handleClick = (subType: string) => {
    if (subType === "Free") {
      window.open(`${config.APP_URL}/login`, "_blank");
    }
    window.open(
      `${config.APP_URL}/login?redirect=subscribe_${subType}`,
      "_blank"
    );
  };

  return (
    <div className="pricing">
      <div className="d-flex justify-content-center">
        <div className="head-text py-2">
          You can get access to Ultimate News for free, but there are more
          features
        </div>
      </div>
      <div className="subscription">
        <div className="cardWrap">
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            className="pricingCard"
          >
            <p className="planName">Free Access</p>
            <p className="planPriceDescription">
              A free access with the basic features
            </p>
            <div className="priceDiv">$0 monthly</div>
            <p className="whatsIncluded">What's included:</p>
            <ul>
              <li>View news article from difference sources</li>
              <li>Bookmark news for offline viewing</li>
              <li>Get news based on viewing patterns</li>
            </ul>
            <div>
              <Button
                design="primary long"
                onClick={() => {
                  handleClick("Free");
                }}
              >
                Sign Up
              </Button>
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            className="pricingCard"
          >
            <p className="planName">Intrigued</p>
            <p className="planPriceDescription">
              A starter plan for getting up to date with the platform
            </p>
            <div className="priceDiv">$15 monthly</div>
            <p className="whatsIncluded">What's included:</p>
            <ul>
              <li>Up to 4 Email News updates per/day</li>
              <li>Up to 4 Mobile Push News updates per/day</li>
              <li>Up to 4 SMS Push News updates per/day</li>
            </ul>
            <div>
              <Button
                design="primary long"
                onClick={() => {
                  handleClick("Intrigued");
                }}
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            className="pricingCard"
          >
            <p className="planName">Fanatic</p>
            <p className="planPriceDescription">
              Plus features than the Intrigued plan
            </p>
            <div className="priceDiv">$ 30 monthly</div>
            <p className="whatsIncluded">What's included:</p>
            <ul>
              <li>Unlimited Mobile Push News updates per/day</li>
              <li>Unlimited SMS Push News updates per/day</li>
              <li>News Analytics (Compare news articles)</li>
            </ul>
            <div>
              <Button
                design="primary long"
                onClick={() => {
                  handleClick("Fanatic");
                }}
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
