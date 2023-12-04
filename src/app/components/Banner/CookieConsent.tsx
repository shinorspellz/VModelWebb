"use client";
import Link from "next/link";
import Cookies from "js-cookie";
import Image from "next/image";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
// ... (other imports)
// ... (other imports)
const USER_CONSENT_COOKIE_KEY = "cookie_consent_is_true";
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365;

const CookieConsent = () => {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);

  useEffect(() => {
    // Delay appearance for 2 seconds (adjust as needed)
    const delayTimeout = setTimeout(() => {
      const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === "true";
      setCookieConsentIsTrue(consentIsTrue);
    }, 2000);

    // Clear timeout when component unmounts or when navigating to a new page
    return () => clearTimeout(delayTimeout);
  }, []);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, "true", {
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
      <Slide direction="up" damping={1}>
        <div className="container mx-auto px-20">
          <div>
            <div className="w-72 vm-bg-sec rounded-lg shadow-md p-6">
              <span className="w-full sm:w-48 block vm-text-primary   mb-3">
                We use cookies to provide a better user experience.
              </span>
              <div className="flex items-center justify-between">
                <Link
                  className="text-xs text-white-400 hover:text-gray-800 py-2 px-4 rounded-lg border border-primary"
                  href="/privacy-policy"
                >
                  <span>Privacy Policy</span>
                </Link>
                <div className="w-1/2">
                  <button
                    type="button"
                    className="py-1.5 px-4 vm-bg vm-btn-hover  vm-text-sec w-full text-center  font-semibold shadow-md  rounded-lg"
                    onClick={onClick}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default CookieConsent;
