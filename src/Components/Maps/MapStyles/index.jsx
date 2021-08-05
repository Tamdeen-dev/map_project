import styled from "styled-components";

export const MapStyles = styled.div`
.map{
    z-index: 1;
    position: absolute;
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
    width: 100%; 
    cursor: ${({mode}) => (mode ? "crosshair" : "default")}; 

}
.unitInBreif{
    position: absolute;
    color: #fff;
    background: rgba(0, 0, 0, 0.9);
    padding: 3px;
    border-radius: 5px;
    transform: translate3d(-50% -50%, 0);
    pointer-events: none;
    z-index: 10;
}
    `;

export default MapStyles