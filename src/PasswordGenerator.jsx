import React, { useState } from "react";
import ReactSwitch from "react-switch";



function PasswordGenerator() {

  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("8");
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword =()=>{
    const lowerCaseChars = 'abcdefghijklmnopqrstuuwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '123456789';
    const specialChars = '!@#$%^&*()';

    let validChars = lowerCaseChars;
    if (includeUpperCase) {
      validChars += upperCaseChars;
    }

    if (includeNumbers) {
      validChars += numbers;
    }

    if (includeSpecialChars) {
      validChars += specialChars;
    }

    let generatePassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random()* validChars.length);
      generatePassword += validChars.charAt(randomIndex);
    }
    //console.log(generatePassword)

    setPassword(generatePassword);
  }
  //generatePassword();

  

  return (
    <div className="pt-8 text-white font-bold">
      <div className="flex flex-col items-center">
        <div className="bg-purple-800 w-[350px] shadow-2x1 hover:shadow-blue-900 ronded-md p-3">
          <div className="mb-4 flex items-center justify-between">
            <label>Password Length</label>
            <input
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type="number"
              className="w-12 bg-purple-700 pl-2"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Uppercase</label>
            <ReactSwitch
              checked={includeUpperCase}
              onChange={() => setIncludeUpperCase(!includeUpperCase)}
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Numbers</label>
            <ReactSwitch
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Special Caracter</label>
            <ReactSwitch
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>

          <button
            onClick={generatePassword}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 text-white font-bold rounded-md"
          >
            Generate Password
          </button>
        </div>

        {password && (
          <p className="font-normal text-white">
            Generate Password:   
            <span className="font-bold"> {password}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;