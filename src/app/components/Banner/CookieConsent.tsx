
'use client'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Image from 'next/image'
import { MouseEvent, useCallback, useEffect, useState } from 'react'
// ... (other imports)
// ... (other imports)
const USER_CONSENT_COOKIE_KEY = 'cookie_consent_is_true';
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365;

const CookieConsent = () => {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);
 
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
    e.preventDefault();

    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, 'true', {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setCookieConsentIsTrue(true);
    }
  };

  if (cookieConsentIsTrue) {
    return null;
  }

  return (
    <section className="fixed bottom-0 left-0 right-0 w-full py-2 md:py-4">
      <div className="container mx-auto px-20">
        <div>
          <div className="w-72 vm-bg-sec rounded-lg shadow-md p-6">
            <div className="w-16 mx-auto relative -mt-10 mb-3">
              <Image width={50} height={50} src="/assets/images/logo/VModel-Logo-SVG.svg" alt="Cookie Icon SVG" />
            </div>
            <span className="w-full sm:w-48 block leading-normal vm-text-primary  text-md mb-3">
              We use cookies to provide a better user experience.
            </span>
            <div className="flex items-center justify-between">
              <Link href="/privacy-policy">
                <span className="text-xs text-white-400 mr-1 hover:text-gray-800">Privacy Policy</span>
              </Link>
              <div className="w-1/2">
                <button
                  type="button"
                  className="py-2 px-4 vm-bg vm-btn-hover focus:ring-indigo-500 focus:ring-offset-indigo-200 vm-text-sec w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  onClick={onClick}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookieConsent;
