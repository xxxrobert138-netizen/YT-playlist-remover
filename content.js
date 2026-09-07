document.addEventListener('click', (event) => {
  const anchor = event.target.closest('a');
  
  if (!anchor || !anchor.href) return;

  try {
    const url = new URL(anchor.href);

    if (url.pathname === '/watch' && url.searchParams.has('v') && url.searchParams.has('list')) {
      
      const listId = url.searchParams.get('list');
      if (listId.startsWith('RD')) return; 

      url.searchParams.delete('list');
      url.searchParams.delete('index');
      url.searchParams.delete('start_radio');

      anchor.href = url.toString();
      
      console.log('[YT Clean Opener] Ссылка очищена:', anchor.href);
    }
  } catch (e) {
    console.error('[YT Clean Opener] Ошибка обработки URL:', e);
  }
}, true);
