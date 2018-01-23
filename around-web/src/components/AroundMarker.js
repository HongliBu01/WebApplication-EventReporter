import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

export class AroundMarker extends React.Component {
 state = {
   isOpen: false,
 }

 onToggleOpen = () => {
   this.setState(prevState => ({ isOpen: !prevState.isOpen }));
 }

 getInfoWindowContent = () => {
   const { url, message, user } = this.props.post;
   return (
     <div>
       <img
         className="around-marker-image"
         src={url}
         alt={message}
       />
       <p>{`${user}: ${message}`}</p>
     </div>
   );
 }

 render() {
   return (
     <Marker
       position={this.props.position}
       onClick={this.onToggleOpen}
     >
       {this.state.isOpen ?
         <InfoWindow onClick={this.onToggleOpen}>
           {this.getInfoWindowContent()}
         </InfoWindow> : null}
     </Marker>
   );
 }
}
