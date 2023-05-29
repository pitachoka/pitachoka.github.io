const Phone = document.getElementById('phone');
const Email = document.getElementById('email');
const Discord = document.getElementById('discord')

Phone.addEventListener('click', () => {
  const textToCopy = '+995595505402';
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log('Text copied to clipboard:', textToCopy);
    })
    .catch((error) => {
      console.error('Unable to copy text:', error);
      alert('Failed to copy text.');
    });
});
Email.addEventListener('click', () => {
    const textToCopy = 'misha.mumladze2007@gmail.com';
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard:', textToCopy);
      })
      .catch((error) => {
        console.error('Unable to copy text:', error);
        alert('Failed to copy text.');
      });
  });
  Discord.addEventListener('click', () => {
    const textToCopy = 'pitachok#4451';
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard:', textToCopy);
      })
      .catch((error) => {
        console.error('Unable to copy text:', error);
        alert('Failed to copy text.');
      });
  });