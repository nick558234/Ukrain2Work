// useMail.ts
export const useMail = () => {
  // Access the nuxt-mail module
  const { $mail } = useNuxtApp();

  /**
   * Send an email using the configured mail server
   * @param options Email sending options
   * @returns Promise with the result
   */
  const sendEmail = async (options) => {
    try {
      return await $mail.send(options);
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };

  return {
    sendEmail
  };
};