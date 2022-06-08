import * as React from "react";
import { motion } from "framer-motion";
import Button from "../components/common/Button";
import {config} from '../config/configs';


export default function pricing() {
  const handleClick = (subType: string) => {
    window.open(
      `${config.APP_URL}/login?redirect=subscribe_${subType}`,
      "_blank"
    );
  };

  return (
    <div className='pricing'>
      <div className='d-flex justify-content-center'>
        <div className='head-text py-2'>
          You can get access to Ultimate News for free, but there are more
          features
        </div>
      </div>
      <div className='subscription'>
        <div className='cardWrap'>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            className='pricingCard'
          >
            <p className='planName'>Intrigued</p>
            <p className='planPriceDescription'>
              A starter plan for getting up to date with the platform
            </p>
            <div className='priceDiv'>$2 monthly</div>
            <p className='whatsIncluded'>What's included:</p>
            <ul>
              <li>Up to 2 Email News updates per/day</li>
              <li>Up to 2 Mobile Push News updates per/day</li>
              <li>Up to 2 SMS Push News updates per/day</li>
            </ul>
            <div>
              <Button
                design='primary long'
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
            className='pricingCard'
          >
            <p className='planName'>Fanatic</p>
            <p className='planPriceDescription'>
              More features than the Intrigued plan
            </p>
            <div className='priceDiv'>$ 3 monthly</div>
            <p className='whatsIncluded'>What's included:</p>
            <ul>
              <li>Up to 4 Mobile Push News updates per/day</li>
              <li>Up to 4 SMS Push News updates per/day</li>
              <li>News Analytics (Compare news articles)</li>
            </ul>
            <div>
              <Button
                design='primary long'
                onClick={() => {
                  handleClick("Fanatic");
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
            className='pricingCard'
          >
            <p className='planName'>In The Know</p>
            <p className='planPriceDescription'>
              All plus News Settings and Analytics
            </p>
            <div className='priceDiv'>$ 10 monthly</div>
            <p className='whatsIncluded'>What's included:</p>
            <ul>
              <li>Email Notification as they come</li>
              <li>SMS Notification as they come</li>
              <li>Mobile Push Notification as they come</li>
              <li>Get News Analytics</li>
            </ul>
            <div>
              <Button
                design='primary long'
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
