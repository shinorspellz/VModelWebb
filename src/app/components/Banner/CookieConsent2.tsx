'use client'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { MouseEvent, useEffect, useState } from 'react'

const USER_CONSENT_COOKIE_KEY = 'cookie_consent_is_true'
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365

const CookieConsent2 = () => {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true)

  useEffect(() => {
    // Delay appearance for 2 seconds (adjust as needed)
    const delayTimeout = setTimeout(() => {
      const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === 'true';
      setCookieConsentIsTrue(consentIsTrue);
    }, 2000);

    // Clear timeout when component unmounts or when navigating to a new page
    return () => clearTimeout(delayTimeout);
  }, []);
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, 'true', {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      })
      setCookieConsentIsTrue(true)
    }
  }

  if (cookieConsentIsTrue) {
    return null
  }


return (
  <section className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] vm-bg fixed bottom-0 left-0 w-full py-2 md:py-4">
      <div className="flex flex-col  px-5  space-y-2  md:flex-row md:space-y-0 md:items-stretch md:space-x-2">
        <div className="flex items-center flex-grow">
          <p className="text-sm  vm-text-sec font-medium">
            This site uses cookies to deliver better
            experience and analyze traffic. You can learn more about the
            services we use at our{' '}
            <Link href="/privacy-policy">
              <span className="text-sm  text-white  hover:text-lightAccent">
                privacy policy.
              </span>
            </Link>
            
          </p>
        </div>
        <div className="flex items-center">
          <button
            className="p-3 vm-bg-sec text-sm vm-text-primary font-bold text-white uppercase bg-gray-700 whitespace-nowrap"
            onClick={onClick}
          >
            ok
          </button>
        </div>
      </div>
  </section>
)
}

export default CookieConsent2