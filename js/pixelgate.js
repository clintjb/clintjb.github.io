let userAddress = null;

const connectBtn = document.getElementById("connect");
const solveBtn = document.getElementById("solve");

connectBtn.onclick = async () => {
  if (!window.ethereum) {
    alert("MetaMask Required");
    return;
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const accounts = await provider.send("eth_requestAccounts", []);
  userAddress = accounts[0];

  document.getElementById("address").innerText =
    `Connected: ${userAddress}`;
};

solveBtn.onclick = async () => {
  if (!userAddress) {
    alert("Connect Wallet First");
    return;
  }

  const answer = document.getElementById("answer").value;

  const res = await fetch("https://pixelgate-solver.clintjb.workers.dev", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      answer,
      address: userAddress
    })
  });

  const data = await res.json();
  
    if (data.success && data.txHash) {
      document.getElementById("result").innerHTML = `
        ${data.message}<br/>
        <a href="https://basescan.org/tx/${data.txHash}" target="_blank">
          View on BaseScan
        </a>
      `;
    } else {
      document.getElementById("result").innerText = data.message;
    }
  };
