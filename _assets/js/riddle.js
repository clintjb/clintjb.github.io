let userAddress = null;

const connectBtn = document.getElementById("connect");
const solveBtn = document.getElementById("solve");

connectBtn.onclick = async () => {
  if (!window.ethereum) {
    alert("MetaMask required");
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
    alert("Connect wallet first");
    return;
  }

  const answer = document.getElementById("answer").value;

  const res = await fetch("https://YOUR_BACKEND/solve", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      answer,
      address: userAddress
    })
  });

  const data = await res.json();
  document.getElementById("result").innerText = data.message;
};
