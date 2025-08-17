// Google Analytics and SEO Tracking Component
'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void
  }
}

export default function Analytics() {
  useEffect(() => {
    // Google Analytics
    if (typeof window !== 'undefined') {
      // Track page views
      window.gtag?.('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [])

  return (
    <>
      {/* Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: 'डॉ. मुकेश गौतम | प्रसिद्ध हास्य कवि',
              custom_map: {
                'custom_parameter': 'hasya_kavi'
              }
            });
          `,
        }}
      />

      {/* Microsoft Clarity */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
          `,
        }}
      />

      {/* Facebook Pixel */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'FACEBOOK_PIXEL_ID');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  )
}
