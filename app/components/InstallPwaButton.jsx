import { useEffect, useState } from "react";

const InstallPwaButton = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("beforeinstallprompt fired");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  if (!supportsPWA) {
    return null;
  }

  return (
    <button
      className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium py-2 px-3 rounded"
      id="setup_button"
      ariaLabel="Install app"
      title="Install app"
      onClick={onClick}
    >
      Install App
    </button>
  );
};

export default InstallPwaButton;
