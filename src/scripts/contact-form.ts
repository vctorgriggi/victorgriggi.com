export function initContactForm(): void {
  const form = document.getElementById(
    'contact-form',
  ) as HTMLFormElement | null;
  const button = document.getElementById(
    'submit-button',
  ) as HTMLButtonElement | null;
  const message = document.getElementById('form-message') as HTMLElement | null;

  if (!form || !button || !message) return;

  form.addEventListener('submit', async (e: SubmitEvent) => {
    e.preventDefault();

    button.disabled = true;
    message.classList.add('hidden');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        message.classList.remove('hidden');
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
      alert('Houve um problema ao enviar sua mensagem.');
    } finally {
      button.disabled = false;
    }
  });
}
