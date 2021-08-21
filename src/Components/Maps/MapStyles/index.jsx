import styled from "styled-components";

export const MapStyles = styled.div`

.map{
    z-index: 1;
    position: relative;
}

@media screen and (max-width: 976px) {
    .map{
      position: absolute;
      left:0;
    }
}

@media screen and (max-width: 992px) {
        .map{
          position: absolute;
          left:0;
    }
}

@media screen and (max-width: 768px) {
  .map{
    position: absolute;
    left:0;
  }
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

.crosshair {
    cursor: crosshair;
  }
    `;

export default MapStyles