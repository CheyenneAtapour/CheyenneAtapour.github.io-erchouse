web3 = new Web3(new Web3.providers.HttpProvider("https://eth-rinkeby.alchemyapi.io/v2/K1jy1ARiEnneR4BI8VTS2LGvDIFEfEC3"))

abi = [{
            "inputs": [
                {
                  "internalType": "address payable",
                  "name": "_superAdmin",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
                }
              ],
              "name": "RoleAdminChanged",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "RoleGranted",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "RoleRevoked",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "seller",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "contract ERC20",
                  "name": "sellToken",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "contract ERC20",
                  "name": "buyToken",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "listingId",
                  "type": "uint256"
                }
              ],
              "name": "tokenListed",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "seller",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "contract ERC20",
                  "name": "sellToken",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "contract ERC20",
                  "name": "buyToken",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "listingId",
                  "type": "uint256"
                }
              ],
              "name": "tokenPurchased",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "DEFAULT_ADMIN_ROLE",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "FUNDS_MANAGER",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "TOKEN_MANAGER",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                }
              ],
              "name": "addToken",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "listingId",
                  "type": "uint256"
                }
              ],
              "name": "cancelListing",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "collectRegistrationFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                }
              ],
              "name": "getRoleAdmin",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "grantRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "hasRole",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "sellToken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amountToSell",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "pricePerToken",
                  "type": "uint256"
                }
              ],
              "name": "listToken",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "listedTokens",
              "outputs": [
                {
                  "internalType": "address payable",
                  "name": "seller",
                  "type": "address"
                },
                {
                  "internalType": "contract ERC20",
                  "name": "sellToken",
                  "type": "address"
                },
                {
                  "internalType": "contract ERC20",
                  "name": "buyToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "listings",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "listingId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amountToBuy",
                  "type": "uint256"
                }
              ],
              "name": "purchaseToken",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "registrationFee",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                }
              ],
              "name": "removeToken",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "renounceRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "revokeRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "superAdmin",
              "outputs": [
                {
                  "internalType": "address payable",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "tokenWhitelist",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                }
              ],
              "name": "whiteListToken",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            }
        ]

contract = new web3.eth.Contract(abi);

// Later, update this with the mainnet contract address - this is rinkeby
contract.options.address = "0x7902968b285ad994844c0DDfA22BfE86f906b359";


candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}

async function load() {
  await connectWallet();
  window.contract = await loadContract();
}

async function connectWallet() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
}

async function getAccount() {
  const accounts = await window.web3.eth.getAccounts();
  account = accounts[0];
  return account;
}

async function loadContract() {
  return await new window.web3.eth.Contract(abi, "0x7902968b285ad994844c0DDfA22BfE86f906b359");
}

async function purchaseListing(id) {
  const account = await getAccount();
  const contract = await loadContract();
  listing = await contract.methods.listedTokens(id).call();
  await window.contract.methods.purchaseToken(id, listing['amount']).send({from: account});
}

async function printCoolNumber() {
    x = await contract.methods.listedTokens(0).call();
    updateStatus('<br><b>Seller:</b> ' + x['seller'] + 
        '<br><b>Sell Token:</b> ' + x['sellToken'] + '<br><b>Buy Token:</b> ' + x['buyToken'] + '<br><b>Amount:</b> ' + x['amount'] + '<br><b>Price:</b> ' + x['price'] +
        '<br><button onclick="changeCoolNumber();">Buy</button><br><br>');
}

async function getAllListings() {
    listings = await contract.methods.listings().call();
    const statusEl = document.getElementById('status');
    statusEl.innerHTML = ""
    for (let i = 0; i < listings; i++) {
        x = await contract.methods.listedTokens(i).call();
        if (x['amount'] <= 0)
          continue;
        appendStatus('<br><b>Listing ID:</b> ' + i + '<br><b>Seller:</b> ' + x['seller'] + 
            '<br><b>Sell Token:</b> ' + x['sellToken'] + '<br><b>Buy Token:</b> ' + x['buyToken'] + '<br><b>Amount:</b> ' + x['amount'] + '<br><b>Price:</b> ' + x['price'] +
            '<br><button onclick="purchaseListing(' + i + ');">Buy</button><br><br>');
    }
}

async function appendListingToBody(body, elementId, content) {
  var newdiv = document.createElement('div');
  newdiv.id = 'newid' + elementId;
  newdiv.innerHTML = content;
  body.appendChild(newdiv)
}

async function getAllListingsAppendBody() {
    listings = await contract.methods.listings().call();
    var body = document.getElementsByTagName('body')[0];
    for (let i = 0; i < listings; i++) {
        x = await contract.methods.listedTokens(i).call();
        if (x['amount'] == 0)     // Skip sold out listings
          continue;
        appendListingToBody(body, i, x['amount']);
    }
}

async function createListingScreen() {
  location.href = "./create_listing.html";
}

async function cancelListingCreation() {
  location.href = "./index.html";
}

async function cancelListingScreen() {
  location.href = "./cancel_listing.html";
}

async function submitListing() {
    asset = document.getElementById('asset').value;
    amount = document.getElementById('amount').value;
    payment = document.getElementById('payment').value;
    price = document.getElementById('price').value;

    //listToken(address sellToken, address buyToken, uint256 amountToSell, uint256 pricePerToken)

    const account = await getAccount();
    const contract = await loadContract();
    await window.contract.methods.listToken(String(asset), String(payment), amount, price).send({from: account});
}

async function submitListingCancellation() {
  id = document.getElementById('listing_id').value;
  const account = await getAccount();
  const contract = await loadContract();
  await window.contract.methods.cancelListing(id).send({from: account});
}

function appendStatus(status) {
    const statusEl = document.getElementById('status');
    statusEl.innerHTML += status;
}

function updateStatus(status) {
    const statusEl = document.getElementById('status');
    statusEl.innerHTML = status;
    console.log(status);
}


function voteForCandidate(candidate) {

 candidateName = $("#candidate").val();

 console.log(candidateName);


 contract.methods.voteForCandidate(web3.utils.asciiToHex(candidateName)).send({from: account}).then((f) => {

  let div_id = candidates[candidateName];

  contract.methods.totalVotesFor(web3.utils.asciiToHex(candidateName)).call().then((f) => {

   $("#" + div_id).html(f);

  })

 })

}

load();
