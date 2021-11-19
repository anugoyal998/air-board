import Webcam from "react-webcam";
import { Hands } from "@mediapipe/hands";
import * as hands from "@mediapipe/hands";
import * as cam from "@mediapipe/camera_utils";
import { useEffect, useRef } from "react";
import rough from 'roughjs';



function NewDoc() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  var camera = null;
  const connect = window.drawConnectors
  const onResults = (results)=> {
    canvasRef.current.width = webcamRef.current.video.videoWidth
    canvasRef.current.height = webcamRef.current.video.videoHeight
    const canvasElem = canvasRef.current
    const canvasCtx = canvasElem.getContext('2d')
    canvasCtx.save()
    canvasCtx.clearRect(0,0,canvasElem.width,canvasElem.height)
    canvasCtx.drawImage(results.image,0,0,canvasElem.width,canvasElem.height)
    if(results.multiHandLandmarks){
      var xCor = -1
      var yCor = -1
      for (const landmarks of results.multiHandLandmarks) {
        xCor = landmarks[8].x
        yCor = landmarks[8].y
        xCor = Math.floor(xCor*canvasRef.current.width)
        yCor = Math.floor(yCor*canvasRef.current.height)
        canvasCtx.beginPath()
        canvasCtx.arc(xCor, yCor,5,0,2*Math.PI)
        canvasCtx.fillStyle = '#3CB043'
        canvasCtx.fill()
      }
    }
  }
  useEffect(() => {
    const mHands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });
    mHands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    mHands.onResults(onResults);

    if(typeof webcamRef.current!=='undefined' && webcamRef.current!==null) {
      camera = new cam.Camera(webcamRef.current.video,{
        onFrame: async()=> {
          await mHands.send({image: webcamRef.current.video})
        }, 
        height: 150,
        width: 250
      });
      camera.start();
    }

  });
  // const camera = new Camera(webcamRef,{

  // })
  return (
    <div className="bg-gray-50" style={{ height: "89vh" }}>
      <Webcam
        ref={webcamRef}
        width={250}
        height={150}
        className="rounded-lg fixed bottom-0 right-0 m-3 flip-horizontal shadow-sm"
      />
      <canvas
        ref={canvasRef}
        id="canvas"
        width={250}
        height={150}
        className="rounded-lg fixed bottom-0 right-0 m-3 flip-horizontal shadow-sm"
      />
      <div className="bg-white w-11/12 h-5/6 mx-auto rounded-md shadow-md"></div>
    </div>
  );
}

export default NewDoc;
