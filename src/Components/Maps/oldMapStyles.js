import styled from "styled-components";

const MapStyles = styled.div`

.unit-description {
  position: absolute;
  color: #fff;
  background: rgba(0, 0, 0, 0.9);
  padding: 3px;
  border-radius: 5px;
  transform: translate3d(-50% -50%, 0);
  pointer-events: none;
  z-index: 1000;
}


.btn {
  border: none;
  outline: none;
  color: #0000FF;
  padding: 6px 1em;
  font-size: 11;
  font-weight: 600;
  border-radius: 3px;
  background-color:#FFFFFF ;
  transition: all 200ms ease-in-out;
}

.button:focus {
  outline: none;
  box-shadow: none;

}

.button:hover {
  background-color: #696969;
}

.draw-nav {
  position: fixed;
  right: 0px;
  top: 0px;
}
.filter-nav {
  position: fixed;
  right: 0px;
  bottom: 0px;
}

.custom-zone-card {
  position: absolute;
  width: 50%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  background: #cacad0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    #5d5d68,
    #cacad0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    #5d5d68,
    #cacad0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;
}

@media screen and (min-width: 0px) {
  .custom-zone-card {
    position: relative;
    width: 100%;
  }
}

@media screen and (min-width: 800px) {
  .custom-zone-card {
    z-index: 2;
    position: absolute;
    width: 55%;
    left: 32%;
    top: 17.5%;
  }
}

@media screen and (min-width: 1100px) {
  .custom-zone-card {
    z-index: 2;
    position: absolute;
    width: 44%;
    left: 32%;
    top: 17.5%;
  }

  .tooltip {
    font-size: 20px;
    color: #002a62;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
  }

  .error_text {
    color: red;
  }

  .crosshair {
    cursor: crosshair;
  }
`;

export default MapStyles;
