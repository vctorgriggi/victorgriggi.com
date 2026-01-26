export function initContactForm(): void {
  const form = document.getElementById(
    'contact-form',
  ) as HTMLFormElement | null;
  const button = document.getElementById(
    'submit-button',
  ) as HTMLButtonElement | null;
  const successState = document.getElementById(
    'success-state',
  ) as HTMLElement | null;
  const backButton = document.getElementById(
    'back-to-form',
  ) as HTMLButtonElement | null;

  if (!form || !button || !successState || !backButton) return;

  form.addEventListener('submit', async (e: SubmitEvent) => {
    e.preventDefault();

    button.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        form.classList.add('hidden');
        successState.classList.remove('hidden');
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
      alert('Houve um problema ao enviar sua mensagem!');
    } finally {
      button.disabled = false;
    }
  });

  backButton.addEventListener('click', () => {
    successState.classList.add('hidden');
    form.classList.remove('hidden');
  });
}
