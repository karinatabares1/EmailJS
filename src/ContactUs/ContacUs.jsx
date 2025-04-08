import React, { useRef } from 'react';
import emailJs from '@emailjs/browser';

export const ContactUs = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = 'service_w8kyy4n';
    const templateId = 'template_0alg7xl';
    const apikey = 'W47pVO0AjZVjO5GAu';

    emailJs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 px-4 py-8">
      <form
        ref={refForm}
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-purple-200"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-purple-700">Contáctanos</h2>
          <p className="text-gray-600 text-sm">Estamos felices de saber de ti</p>
        </div>

        <fieldset className="flex flex-col">
          <label htmlFor="Username" className="text-sm font-semibold text-purple-600 mb-1">
            Nombre completo
          </label>
          <input
            name="Username"
            type="text"
            placeholder="Ej: Karina Tabares"
            required
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
          />
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold text-purple-600 mb-1">
            Correo electrónico
          </label>
          <input
            placeholder="Ej: karinatabares@gmail.com"
            type="email"
            name="email"
            id="email"
            required
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200"
          />
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="message" className="text-sm font-semibold text-purple-600 mb-1">
            Mensaje
          </label>
          <textarea
            maxLength="500"
            placeholder="Escribe tu mensaje..."
            name="message"
            id="message"
            rows="5"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 resize-none"
          ></textarea>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};
