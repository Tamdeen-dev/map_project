/* istanbul ignore file */
import styled from "styled-components";

const UnitDetailStyles = styled.div`

  .unit-form{
    background-color: #e1e1e5;
    z-index: 3;
    width: 40%;
    left:32%;
    position: absolute;
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
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  @media screen and (max-width: 768px) {
    .unit-form {
      width:100%;
      left:0;
    }
  }

  @media screen and (max-width: 976px) {
    .unit-form{
      width:100%;
      left:0;
    }
  }

  @media screen and (max-width: 992px) {
    .unit-form {
      width:100%;
      left:0;
    }
  }

  .center-content {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .right-content {
    display: block;
    margin-left: auto;
    margin-right: 0;
  }

  .error_text {
    color: red;
  }
  .frame{
    border-width: 0.5px;
    width:90%;
    border-style:solid;
    border-color:rgba(255, 255, 255, 0.5);;
    padding:0px 10px 10px 10px;
    margin-bottom: 10px;

  }

  .displayfield{
    width: 100%;
    height: 25px;
    padding: 0 15px;
    outline: none;
    border: none;
    font-size: 1.2vw;
    font-weight: 700;
    background:  rgba(211, 211, 211, 1);
  }

  @media screen and (max-width: 768px) {
    .displayfield {
      font-size: 2.7vw;
      height: 3.8vw;
      padding: 0 2vw;
    }
  }

  @media screen and (max-width: 976px) {
    .displayfield {
      font-size: 2.7vw;
      height: 3.8vw;
      padding: 0 2vw;
    }
  }

  @media screen and (max-width: 992px) {
    .displayfield {
      font-size: 2.7vw;
      height: 3.8vw;
      padding: 0 2vw;
    }
  }


  .displayremark{
    width: 100%;
    height: 25px;
    padding: 0 0.1vw;
    display: inline;
    outline: none;
    border: none;
    font-size: 1vw;
    font-weight: 700;
    background:  rgba(211, 211, 211, 1);
    color:red;
  }

  @media screen and (max-width: 768px) {
    .displayremark {
      font-size: 2vw;
      height: 3.8vw;
      padding: 0 2vw;
    }
  }

  @media screen and (max-width: 976px) {
    .displayremark {
      font-size: 2vw;
      height: 3.8vw;
      padding: 0 2vw;
    }
  }

  @media screen and (max-width: 992px) {
    .displayremark {
      font-size: 2vw;
      height: 3.8vw;
      padding: 0 2vw;
    }
  }

  .input {
    width: 100%;
    height: 30px;
    padding: 0 15px;
    outline: none;
    border: none;
    font-weight: 500;
    font-size: 1vw;
    transition: all, 200ms ease-in-out;
  
    &:not(:last-of-type) {
      border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
    }
  
    &:focus {
      outline: none;
      //box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
      border-bottom: 2px solid #5963c3;
    }
  }
  
  @media screen and (max-width: 768px) {
    .input {
      font-size: 2.7vw;
      height: 5vw;
    }
  }

  @media screen and (max-width: 976px) {
    .input {
      font-size: 2.7vw;
      height: 5vw;
    }
  }

  @media screen and (max-width: 992px) {
    .input {
      font-size: 2.7vw;
      height: 5vw;
    }
  }


  .label{
    outline: none;
    border: none;
    font-size: 0.9vw;
    font-weight: 500;
    padding:0 20px;
    color: rgba(0,0,0,1);
 }
  
@media screen and (max-width: 768px) {
  .label {
    font-size: 2.2vw;
    padding:0 5vw;
  }
}

@media screen and (max-width: 976px) {
  .label {
    font-size: 2.2vw;
    padding:0 5vw;
  }
}

@media screen and (max-width: 992px) {
  .label {
    font-size: 2.2vw;
    padding:0 5vw;
  }
}

 .check-box{
  outline: none;
  border: none;
  padding: 0 1px;
  font-size: 1.1vw;
  font-weight: 700;
  color: rgba(0,0,0,1);
}

@media screen and (max-width: 768px) {
  .check-box {
    font-size: 2.8vw;
    padding:0 0.3vw;
  }
}

@media screen and (max-width: 976px) {
  .check-box {
    font-size: 2.8vw;
    padding:0 0.3vw;
  }
}

@media screen and (max-width: 992px) {
  .check-box {
    font-size: 2.8vw;
    padding:0 0.3vw;
  }
}

.btnContainer{
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  padding: 1em 3em; 
}

.submitButton{
  padding: 6px 1em;
  font-size: 0.9vw;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #cacad0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #5d5d68,
    #cacad0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #5d5d68,
    #cacad0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  &:focus {
    outline: none;
  }

  &:hover {
    filter: brightness(1.03);
  }
}

media screen and (max-width: 768px) {
  .submitButton {
    font-size: 2.2vw;
  }
}

@media screen and (max-width: 976px) {
  .submitButton {
    font-size: 2.2vw;
  }
}

@media screen and (max-width: 992px) {
  .submitButton {
    font-size: 2.2vw;
  }
}

`;

export default UnitDetailStyles;
