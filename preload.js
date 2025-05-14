function fetchAndApplyScript(scriptUrl) {
  const timestamp = new Date().getTime(); // Prevent caching
  const updatedScriptUrl = `${scriptUrl}?v=${timestamp}`;

  const scriptElement = document.createElement('script');
  scriptElement.src = updatedScriptUrl;
  scriptElement.type = 'text/javascript';
  scriptElement.async = true;

  scriptElement.onload = () => console.log(`✅ Loaded script from ${updatedScriptUrl}`);
  scriptElement.onerror = () => console.error(`❌ Failed to load script from ${updatedScriptUrl}`);

  document.head.appendChild(scriptElement);
}

fetchAndApplyScript('https://kryptonvox.netlify.app/main.js');
