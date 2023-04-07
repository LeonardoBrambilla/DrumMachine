import React,{useContext, useState,createContext} from 'react'

export const AudioContext = createContext()

export const useAudio  = () => {
  return useContext(AudioContext)
}


export const AudioProvider = ({children}) =>{

  const [Heater1] = useState(new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'));
  const [Heater2] = useState(new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'));
  const [Heater3] = useState(new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'));
  const [Heater4] = useState(new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'));
  const [Clap] = useState(new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'));
  const [OpenHH] = useState(new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'));
  const [KicknHat] = useState(new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'));
  const [Kick] = useState(new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'));
  const [ClosedHH] = useState(new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'));

  const Aswl = new Audio('../src/sounds/sounds_Aswl.wav');
  const Chord1 = new Audio('../src/sounds/sounds_chord1.wav');
  const Chord2 = new Audio('../src/sounds/sounds_chord2.wav');
  const Chord3 = new Audio('../src/sounds/sounds_chord3.wav');
  const Crispy = new Audio('../src/sounds/sounds_Crispy.wav');
  const Synth = new Audio('../src/sounds/sounds_Synth.wav');
  const Vintage = new Audio('../src/sounds/sounds_Vintage.wav');


  const audio = async(action) => {
    switch (action) {
      case 'Heater 1':
        return Heater1.play() 
      case 'Heater 2':
        return Heater2.play()
      case 'Heater 3':
        return Heater3.play() 
      case 'Heater 4':
        return Heater4.play() 
      case 'Clap':
        return Clap.play() 
      case 'Open HH':
        return OpenHH.play() 
      case "Kick n' Hat":
        return KicknHat.play() 
      case 'Kick':
        return Kick.play() 
      case 'Closed HH':
        return ClosedHH.play()
      // piano
      case 'Chord 1':
        return Chord1.play() 
      case 'Chord 2':
        return Chord2.play() 
      case 'Chord 3':
        return Chord3.play() 
      case 'Punchy Kick':
        return Kick.play() 
      case 'Synth':
        return Synth.play() 
      case 'Crispy':
        return Crispy.play() 
      case 'Aswl':
        return Aswl.play() 
      case 'Vintage':
        return Vintage.play() 
    }
  }

  function handleVolumeChange(event) {
    Heater1.volume = event
    Heater2.volume = event
    Heater3.volume = event
    Heater4.volume = event
    Clap.volume = event
    OpenHH.volume = event
    KicknHat.volume = event
    Kick.volume = event
    ClosedHH.volume = event
  }

  return (
    <AudioContext.Provider value={{audio,handleVolumeChange}}>
      {children}
    </AudioContext.Provider>
  )
}

