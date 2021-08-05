import styled from "styled-components";

export const FormStyles = styled.div`
.BoxContainer{
  position: absolute;
  z-index: 3;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height:100vh
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px
}

.FormContainer {
  position: absolute;
  width: 25%;
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

.MutedLink{
  color: rgba(170, 170, 170, 1);
  font-size: 11px;
  font-weight: 500;
  margin: 10px 0;
  text-decoration: none;
}

.BoldLink{
  color: #5963c3;
  font-weight: 600;
  font-size: 11px;
  text-decoration: none;
  margin: 0 3px;
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
  position:absolute;
  width :100%;
  display: flex;
  align-items: center;
  bottom: 3%; 
  right: 10px; 
}

.SubmitButton{
  padding: 6px 1em;
  color: #002a62;
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