import React from 'react';
import './style.css';
const THREE = require('three');

class App extends React.Component {

  constructor(props){
    super(props);
    this.animate = this.animate.bind(this);
    this.state = {
      cube: {
        rotation: {
          x: 0.1,
          y: 0.1
        }
      }
    }

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();

    this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
    this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    this.cube = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.cube );

    this.listener = new THREE.AudioListener();
    this.camera.add(this.listener);

    this.sound = new THREE.Audio(this.listener);
    this.audioLoader = new THREE.AudioLoader();

    this.camera.position.z = 5;
  }
  componentDidMount(){
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
  }

  animate(){
    requestAnimationFrame(this.animate);
    this.cube.rotation.x += this.state.cube.rotation.x;
    this.cube.rotation.y += this.state.cube.rotation.y;
    this.cube.rotation.z += 0.002;
    this.camera.position.set(0, 0, 8);
    // this.audioLoader.load('http://192.168.7.20:8000/listen', function(buffer){
    //   this.sound.setBuffer(buffer);
    //   sound.setLoop(true);
    //   sound.setVolume(0.5);
    //   sound.play();
    // })
    this.renderer.render(this.scene, this.camera);
  }
  render(){
    console.log(this.props);
    this.animate();
    return(
      <div>

      </div>
    );
  }
}

export default App;
