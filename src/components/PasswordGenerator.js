import React, { useState } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    symbols: "~`!@#$%^&*_-+={[}]|<>/?",
  };

  const generatePassword = (e) => {
    let finalString = "";
    if (includeUppercase === true) {
      finalString = finalString + characters.uppercase;
    }
    if (includeLowercase === true) {
      finalString = finalString + characters.lowercase;
    }
    if (includeNumbers === true) {
      finalString = finalString + characters.numbers;
    }
    if (includeSymbols === true) {
      finalString = finalString + characters.symbols;
    }
    let finalPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      let currentLetter = finalString.charAt(
        Math.floor(Math.random() * finalString.length)
      );
      finalPassword = finalPassword + currentLetter;
    }
    return finalPassword;
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className="password-text">
        <h3>{password}</h3>
        <CopyToClipboard text={password}>
          <button className="copy-btn">
            <FileCopyIcon />
          </button>
        </CopyToClipboard>
      </div>

      <div className="password-length">
        <label htmlFor="password-length">Select Password length</label>
        <input
          onChange={(e) => {
            setPasswordLength(e.target.value);
          }}
          defaultValue={passwordLength}
          id="password-length"
          name="password-length"
          type="number"
          min="6"
          max="12"
        />
      </div>

      <div className="form-grp">
        <input
          onChange={(e) => {
            setIncludeUppercase(e.target.checked);
          }}
          id="uppercase"
          name="uppercase"
          type="checkbox"
          checked={includeUppercase}
        />
        <label htmlFor="uppercase">Include uppercase letters</label>
      </div>

      <div className="form-grp">
        <input
          onClick={(e) => {
            setIncludeLowercase(e.target.checked);
          }}
          id="lowercase"
          name="lowercase"
          type="checkbox"
          checked={includeLowercase}
        />
        <label htmlFor="lowercase">Include lowercase letters</label>
      </div>

      <div className="form-grp">
        <input
          onClick={(e) => {
            setIncludeNumbers(e.target.checked);
          }}
          id="numbers"
          name="numbers"
          type="checkbox"
          checked={includeNumbers}
        />
        <label htmlFor="numbers">Include numbers</label>
      </div>

      <div className="form-grp">
        <input
          onClick={(e) => {
            setIncludeSymbols(e.target.checked);
          }}
          id="symbols"
          name="symbols"
          type="checkbox"
          checked={includeSymbols}
        />
        <label htmlFor="symbols">Include symbols</label>
      </div>

      <button
        onClick={() => {
          let pass = generatePassword();
          setPassword(pass);
        }}
        className="generate-password"
      >
        Generate Password
      </button>
    </div>
  );
};
