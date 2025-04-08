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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 via-teal-100 to-green-100 px-4 py-12">
      <form
        ref={refForm}
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-10 space-y-6 border border-sky-200"
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-sky-800 mb-1">¡Hablemos!</h2>
          <p className="text-gray-500 text-sm">Déjanos tu mensaje, te responderemos pronto</p>
        </div>

        <fieldset className="flex flex-col">
          <label htmlFor="Username" className="text-sm font-medium text-sky-700 mb-1">
            Nombre completo
          </label>
          <input
            name="Username"
            type="text"
            placeholder="Ej: Karina Tabares"
            required
            className="px-4 py-3 rounded-lg border border-gray-200 bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all duration-200"
          />
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-sky-700 mb-1">
            Correo electrónico
          </label>
          <input
            placeholder="Ej: karinatabares@gmail.com"
            type="email"
            name="email"
            id="email"
            required
            className="px-4 py-3 rounded-lg border border-gray-200 bg-sky-50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-all duration-200"
          />
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-sky-700 mb-1">
            Mensaje
          </label>
          <textarea
            maxLength="500"
            placeholder="Escribe tu mensaje aquí..."
            name="message"
            id="message"
            rows="5"
            className="px-4 py-3 rounded-lg border border-gray-200 bg-sky-50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white transition-all duration-200 resize-none"
          ></textarea>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wide"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
