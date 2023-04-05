// Saves options to chrome.storage
const saveOptions = () => {
    const delaySecondsInt = document.getElementById('delay').value;
  
    chrome.storage.sync.set(
      { delaySecondsInt: delaySecondsInt },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }
    );
  };

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
    chrome.storage.sync.get(
      { delaySecondsInt: 4 },
      (items) => {
        document.getElementById('delay').value = items.delaySecondsInt;
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);