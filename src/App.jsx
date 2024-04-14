import { useState } from "react";
import getMacVendor from "./mac-api";


function App() {
  const [mac, setMac] = useState("");
  const [vendor, setVendor] = useState("");

  const clearMac = () => {
    setMac("");
    setVendor("");
  };

  const handleSearch = async () => {
    if (mac.trim() === "") {
      alert("You are stupid the input should not be empty!");
      return;
    }
    setVendor(await getMacVendor(mac));
  };

  return (
    <div>
      <h1>Find MAC Address Vendors. Now.</h1>
      <h3>Enter a MAC Address</h3>
      <div>
        <input
          onChange={(e) => setMac(e.target.value)}
          value={mac}
          type="text"
          placeholder="Waiting Mac ..."
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={clearMac}>Clear</button>
      </div>
      <h1 style={{ color: "red" }}>Vendor: {vendor}</h1>
      <div>
        <h1>Accepted MAC Address Formats</h1>
        <p>
          Send your MAC address in any shape or form and our server should be
          able to handle it. Separated by periods? Dashes? Slashes? Separated
          every 2 characters? 4 characters? Not a problem. Generally, MAC
          addresses will come in the following shape or form:
        </p>
        <ul>
          <li>00-11-22-33-44-55</li>
          <li>00:11:22:33:44:55</li>
          <li>00.11.22.33.44.55</li>
          <li>001122334455</li>
          <li>0011.2233.4455</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
