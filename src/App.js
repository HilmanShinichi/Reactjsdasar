import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
function App(props) {

const handleInc = (evt) => {
  props.dispatch({
    type: 'INCREMENT'
  })
}
const handleDec = (evt) => {
  props.dispatch({
    type: 'DECREMENT'
  })
}
return (
  <div class="cardtes">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Watermeloen.jpg/800px-Watermeloen.jpg"/>
  <div class="containertes">
    <h2><b>Semangka</b></h2>
    <p>Jumlah</p>
    <div className='countes'>
    <div><button onClick={handleInc}><IoIosAddCircle/></button></div> 
    <div>{props.count}</div>
    <div><button onClick={handleDec}><IoIosRemoveCircle/></button></div>
    </div>
    <button type="button" class="btn btn-primary mt-4 ml-5">Beli</button>
    <button type="button" class="btn btn-warning mt-4 ml-5">Keranjang</button>
  </div>
</div>
    
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(App);