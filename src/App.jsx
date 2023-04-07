import { useState , useEffect } from 'react'
import { Grid,Button,Switch,Card  } from '@mui/material';
import { useAudio } from './context/AudioContext';
import './App.css'

function App() {  
  const [bank, setBank] = useState(false)
  const {audio,handleVolumeChange} = useAudio()
  const [note,setNote] = useState("")
  const [power,setPower] = useState(true)
  const [volume, setVolume] = useState(1.0);

  useEffect(() => {
    if(power){

      function handleKeyDown(event) {      
        if (event.keyCode === 81) handlerClick("Chord 1","Heater 1")
      if (event.keyCode === 87) handlerClick("Chord 2","Heater 2")
      if (event.keyCode === 69) handlerClick("Chord 3","Heater 3")
      if (event.keyCode === 65) handlerClick("Synth", "Heater 4")
      if (event.keyCode === 83) handlerClick("Open HH","Clap")
      if (event.keyCode === 68) handlerClick("Closed HH","Open HH")
      if (event.keyCode === 90) handlerClick("Vintage","Kick n' Hat")
      if (event.keyCode === 88) handlerClick("Crispy","Kick")
      if (event.keyCode === 67) handlerClick("Aswl","Closed HH")
      }
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [bank,power]);
  

  function handleVolume(event) {
    setVolume(event.target.value);
    handleVolumeChange(event.target.value)
  }

  const handlerClick = (note1,note2) =>{
    if(bank){
      setNote(note1) 
      audio(note1)
    }
    if(!bank){
      setNote(note2)
      audio(note2)
    }
  }

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Button onClick={()=>power && handlerClick("Chord 1","Heater 1")} sx={{padding:"3px 6px",margin:1,width:100,height:80, background:'white'}} variant="outlined">Q</Button>
              <Button onClick={()=>power && handlerClick("Synth", "Heater 4")} sx={{padding:"3px 6px",margin:1,width:100,height:80,background:'white'}} variant="outlined">A</Button>
              <Button onClick={()=>power && handlerClick("Vintage","Kick n' Hat")} sx={{padding:"3px 6px",margin:1,width:100,height:80,background:'white'}} variant="outlined">Z</Button>
            </Grid>
            <Grid item xs={4}>
              <Button onClick={()=>power && handlerClick("Chord 2","Heater 2")} sx={{padding:"3px 6px",margin:1,width:100,height:80,background:'white'}} variant="outlined">W</Button>
              <Button onClick={()=>power && handlerClick("Open HH","Clap")} sx={{padding:"3px 6px",margin:1,width:100,height:80,background:'white'}} variant="outlined">S</Button>
              <Button onClick={()=>power && handlerClick("Crispy","Kick")} sx={{padding:"3px 6px",margin:1,width:100,height:80,background:'white'}} variant="outlined">X</Button>
            </Grid>
            <Grid item xs={4}>
              <Button onClick={()=>power && handlerClick("Chord 3","Heater 3")} sx={{padding:"3px 6px",margin:1,width:100,height:80,background:'white'}} variant="outlined">E</Button>
              <Button onClick={()=>power && handlerClick("Closed HH","Open HH")} sx={{padding:"3px 6px",margin:1,width:100,height:80,background:'white'}} variant="outlined">D</Button>
              <Button onClick={()=>power && handlerClick("Aswl","Closed HH")} sx={{padding:"3px 6px",margin:1,width:100,height:80,background:'white'}} variant="outlined">C</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{display:'flex',flexDirection:'column',alignItems:"center",justifyContent:"center"}}>
          Power
          <Switch inputProps={{'aria-label': 'controlled' }} onChange={()=>{setPower(!power)}} checked={power}/>
          <span style={{width:"200px",height:"16px"}}/>
          <Card sx={{width:200}}>          
          {note && power ? note : <div style={{width:"200px",height:"24px"}}></div>}
          </Card>
          <span style={{width:"200px",height:"16px"}}/>
          Volume
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.05"
            value={volume}
            onChange={handleVolume}
            />
            <span style={{width:"200px",height:"16px"}}/>
          Bank
          <Switch inputProps={{'aria-label': 'controlled' }} onChange={()=>{setBank(!bank),console.log(bank),bank ? setNote("Heater Kit") : setNote("Smooth Piano Kit")}} checked={bank}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
