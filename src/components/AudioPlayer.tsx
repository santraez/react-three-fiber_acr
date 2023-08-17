import ReactAudioPlayer from 'react-audio-player';

export function AudioPlayer() {
  return (
    <ReactAudioPlayer
      src='blueDream.mp3'
      autoPlay
      controls={false}
      loop
    />
  );
}
