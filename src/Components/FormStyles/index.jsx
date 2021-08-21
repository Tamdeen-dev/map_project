import styled from "styled-components";

export const FormStyles = styled.div`

.FormContainer {
  z-index: 3;
  position: absolute;
  margin-top: 10%;
  width: 30%;
  left:35%;
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

@media screen and (max-width: 1034px) {
  .FormContainer{
    width: 50%;
    left:25%
    top:10%
  }
}

@media screen and (max-width: 768px) {
  .FormContainer{
    width: 100%;
    left:0%
    top:10%
  }
}

@media screen and (max-width: 976px) {
  .FormContainer{
    width: 100%;
    left:0%
    top:10%
  }
}

@media screen and (max-width: 992px) {
  .FormContainer{
    width: 100%;
    left:0%
    top:10%
  }
}

.Input{
  width: 100%;
  height: 40px;
  padding: 0 15px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.05);
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;

  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    //box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
    border-bottom: 2px solid #5963c3;
  }
}
 .label{
    outline: none;
    border: none;
    padding: 0 25px;
    font-size: 13px;
    color: rgba(0,0,197,1);
 }

.BtnContainer{
  width :100%;
  display: flex;
  bottom: 3%; 
  right: 10px; 
}

.SubmitButton{
  padding: 6px 1em;
  color: "00A300";
  font-size: 13px;
  font-weight: 600;
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
 
  `;