import styled from "styled-components";

const MapStyles = styled.div`
  .map {
    z-index: -1;
    position: absolute;
  }

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

  .button-filter {
    outline: none;
    box-shadow: none;
    text-decoration:none;
  }

  .button:focus {
    outline: none;
    box-shadow: none;
  }

  .button:hover {
    color: #006AB4;
    border-color:#006AB4
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
    background-color: #e1e1e5;
  }

  @media screen and (min-width: 0px) {
    .custom-zone-card {
      position: relative;
      width: 100%;
    }
  }

  @media screen and (min-width: 800px) {
    .custom-zone-card {
      z-index: 1;
      position: absolute;
      width: 55%;
      left: 32%;
      top: 17.5%;
    }
  }

  @media screen and (min-width: 1100px) {
    .custom-zone-card {
      z-index: 1;
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
