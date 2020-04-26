import { css } from "emotion";

export const formRoot = css`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 300px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  background: #43bfb9;
  border-radius: 20px;
  input {
    height: 40px;
    width: 350px;
    max-width: 80%;
    border: 0;
    border-radius: 10px;
    padding: 0 20px;
    margin-bottom: 20px;
    font-size: 14px;
    &.error {
      margin-bottom: 0px;
      border: 2px solid #c70000;
    }
  }
  .error-label {
    font-size: 14px;
    color: #c70000;
    margin-bottom: 4px;
  }
  .heading {
    font-size: 22px;
    margin-bottom: 20px;
  }
  button {
    width: 200px;
    height: 30px;
    border: 0;
    border-radius: 20px;
    color: white;
    background: #238681;
    font-size: 14px;
    :hover {
      box-shadow: 0px 4px 4px #ffffff4f;
    }
  }
`;
