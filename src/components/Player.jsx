import { useContext } from "react"
import { assets, songsData } from "../assets/assets"
import { PlayerContext } from "../context/PlayerContext"


function Player() {

   const {track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong} = useContext(PlayerContext) 

  return track ? (
    <section className="h-[10%] bg-black flex justify-between items-center text-white px-4">
        <div className="hidden lg:flex items-center gap-4">
            <img className="w-12" src={track.image} alt="song-image" />
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}</p>
            </div>
        </div>
        <div className="flex flex-col items-center gap-1 m-auto">
            <div className="flex gap-4">
                <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="shuffle" />
                <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="previous song" />
                {playStatus 
                ? <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="pause song" /> 
                : <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="play song" />
                }
                <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="next song" />
                <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="loop songs" />
            </div>
            <div className="flex items-center gap-1">
                <p className="text-xs">{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-m-[500px] bg-gray-300 rounded-full cursor-pointer">
                    <hr ref={seekBar} className="h-1 w-0 border-none bg-green-800 rounded-full transition-all duration-1000 ease-linear"/>
                </div>
                <p className="text-xs">{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 opacity-75 pt-5">
            <img className="w-4 cursor-pointer" src={assets.plays_icon} alt="plays songs" />
            <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="plays songs" />
            <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="plays songs" />
            <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="plays songs" />
            <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="plays songs" />
            <div className="w-20 bg-slate-50 h-1 rounded">

            </div>
            <img className="w-4 cursor-pointer" src={assets.mini_player_icon} alt="plays songs" />
            <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="plays songs" />

        </div>
    </section>
  ) : null
}

export default Player
