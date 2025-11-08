import { VideoPlayer } from './components/video'

const videoPlayerOptions = {
  responsive: true,
  autoplay: true,
  sources: [
    {
      // src: '//vjs.zencdn.net/v/oceans.mp4',
      src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
    },
  ],
}

export const App = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 p-4">
      <div className="text-3xl font-bold italic">video player</div>
      <div className="w-full max-w-3xl">
        <VideoPlayer options={videoPlayerOptions} />
      </div>
    </div>
  )
}
