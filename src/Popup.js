// Popup.js
import React from 'react';

const Popup = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="popup-overlay">
      <button className="close-popup" onClick={onClose}>X</button>
      <h2>The Cinema is a Place for People from All Walks of Life</h2>
      <div className="popup-content">
        <div className="popup-story">
            <p>It was the perfect morning. The kind of morning that greets you as a familiar, yet distant, friend. As I peered through my window, the trees danced in the wind to the tune of celebration. The celebration of death for what came before. Dressed in golden hues, they sang along to the hymn of an old forgotten friend. Yes, this was the kind of morning I had yearned for. Though, all good things must soon come to an end. For this morning would soon turn to night. The very night which I saw the creature who would change my life forever.</p>
            <p>I sat sipping lukewarm coffee in my dimly lit cubicle. All around me were colleagues discussing the equally grim and mundane. The halls bounced with meaningless echoes of a language so alien to me. It was as if stepping into the confines of this place transported me to a new world. A world very similar to mine; yet lacking the gifts of ingenuity. I didn’t hate it, though on days such as today it became quite burdensome. Today I needed something different. Today I needed to witness the beauty of life beyond these walls. Today, at this very moment, is when I decided to attend the cinema.</p>
            <p>Guided by the gentle breeze of autumn’s first breath, I made my way toward my destination. The leaves around me were rustling with faint whispers of the path that lay ahead. As I approached the cinema, I was greeted by a myriad of faces. Some blooming with life and others appearing as if they had faced a thousand deaths.</p>
            <p>However, there was one face that especially piqued my interest. A face so familiar, though it loomed in the shadows like a forgotten creature of the night. This was the face that terrified me most of all. This was the face of my own reflection.</p>
            <p>Upon our eyes meeting, it darted towards an alleyway. My feet were gently lifted from the ground and my weightless body began to soar through the cool air. I stumbled into the dark where its eerie shadow loomed over me, standing in a pool of its own blood.</p>
            <p>On its face was a smile, calm and enveloped in autumn’s warm embrace. For some inexplicable reason, at this moment, I felt understood. I felt as if this mysterious being lived a life so similar to my own. It was in this very moment that I truly felt alive again. Though, as I said before, all good things must come to an end. And the darkness of night was quickly approaching.</p>
            <p>Its gaze suddenly shifted as a vicious green liquid exuded from its eyelids, tracing its body with an unsettling glow. Its once reassuring smile quickly became a menacing, blood-stained grin. From its head grew two piercing horns as tentacles erupted from its back. Its eyes began to burn with haunting red embers that reached into the darkest pit of my very core.</p>
            <p>The creature stepped toward me, laughing diabolically as it sank its teeth into my lifeless body. As my vision began to blur, I smiled. I whispered to myself, with my last waking breath, “The Cinema is a Place for People from All Walks of Life.”</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
