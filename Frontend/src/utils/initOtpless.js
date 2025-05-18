export const initOTPless = (callback) => {
  const otplessInit = Reflect.get(window, 'otplessInit');

  const loadScript = () => {
    const isScriptLoaded = document.getElementById('otpless-sdk');
    if (isScriptLoaded) return;

    const script = document.createElement('script');
    script.id = 'otpless-sdk';
    script.type = 'text/javascript';
    script.src = 'https://otpless.com/v2/auth.js';
    script.setAttribute('data-appid', 'TC8JX1TAKXDR3LZBYULE');
    document.body.appendChild(script);
  };

  otplessInit ? otplessInit() : loadScript();

  Reflect.set(window, 'otpless', callback);
};
