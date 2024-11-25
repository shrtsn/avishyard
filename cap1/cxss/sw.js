self.addEventListener('activate', function (event)
{
    event.waitUntil(self.clients.claim());
});


self.addEventListener('fetch', (event) => {
    
  if (event.request.url==='https://stg-tie.cloud.247-inc.net/init')
  {
    fetch(event.request).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${ response.status }`);
    }

    return response.text();
  })
  .then((response) => {
    const channel = new BroadcastChannel('sw-messages');
    channel.postMessage({res: response});
   
  });
  }
});