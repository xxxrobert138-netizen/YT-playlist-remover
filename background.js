console.log('init YT list cleaner')
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  console.log('chrome.webNavigation.onBeforeNavigate.addListener');
  if (details.frameId !== 0) return;

  try {
    const url = new URL(details.url);
    console.log(url);
    if (url.hostname.includes('youtube.com') && url.pathname === '/watch' && url.searchParams.has('list')) {
      const listId = url.searchParams.get('list');
      

      if (listId && listId.startsWith('RD')) return;

      url.searchParams.delete('list');
      url.searchParams.delete('index');
      url.searchParams.delete('start_radio');

      chrome.tabs.update(details.tabId, { url: url.toString() });
    }
  } catch (e) {
    console.error(e);
  }
}, { url: [{ hostContains: 'youtube.com', pathContains: 'watch' }] });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log('chrome.tabs.onUpdated.addListener');
  if (changeInfo.url) {
    console.log('URL изменился внутри страницы:', changeInfo.url);
    
    try {
      const url = new URL(changeInfo.url);
      console.log(url);
      if (url.hostname.includes('youtube.com') && url.pathname === '/watch' && url.searchParams.has('list')) {
        const listId = url.searchParams.get('list');
        
        if (listId && listId.startsWith('RD')) return;

        url.searchParams.delete('list');
        url.searchParams.delete('index');
        url.searchParams.delete('start_radio');

        const cleanUrl = url.toString();
        console.log('Перенаправляю на чистый URL:', cleanUrl);

        chrome.tabs.update(tabId, { url: cleanUrl });
      }
    } catch (e) {
      console.error(e);
    }
  }
});