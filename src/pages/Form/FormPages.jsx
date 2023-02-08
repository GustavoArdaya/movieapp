import React from 'react';

export default function FormPages() {
  return (
    <div>
      <form>
        <div>
          <img src='' alt='movie' />
        </div>
        <section>
          <input type='text' name='title' placeholder='movie name' />
          <textarea type='textarea' name='img' placeholder='introduce url' />
          <button type='submit'>Crear</button>
        </section>
      </form>
    </div>
  );
}
