import * as React from 'react'
import Page from '../components/Page'
import * as homeLogo from '../assets/home.png'

const Home = () => {

  const [videoSrc, setVideoSrc] = React.useState(undefined)

  // TODO: Enable access to file system -> chrome://flags/#native-file-system-api
  const handleFileOpen = async () => {
    //@ts-ignore
    let fileHandle = await window.chooseFileSystemEntries()
    console.log(await fileHandle.requestPermission())
    const file = await fileHandle.getFile()
    console.log(file)
    setVideoSrc(window.URL.createObjectURL(file))
  }

  const getFileDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      let reader = new FileReader()
      const file = event.target.files[0]
      setVideoSrc(window.URL.createObjectURL(file))
    }
  }

  return (
    <div>
      <Page title="MY" />
      <img src={homeLogo} style={{width: '200px'}}/>
      <button
        style={{padding: '9px 16px', display:'block', backgroundColor: '#abc123'}}
        onClick={() => handleFileOpen()}
      >
        Browse Files
      </button>
      {
        videoSrc && <video src={videoSrc} controls autoPlay/>
      }
      {
        !videoSrc && <input type="file" onChange={getFileDetails}/>
      }
    </div>
  )
}

export default Home