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

erc20Abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
]

// Change this to mainnet contract address after launch
contract_address = "0x7902968b285ad994844c0DDfA22BfE86f906b359";
max_uint = BigInt(BigInt(2) ** BigInt(256)) - BigInt(1);
var known_token_names = { "USDC": "0xD12BC93Ac5eA2b4Ba99e0ffEd053a53B6d18C7a3", "FRAX": "0x54717398c107aB24Ec82bCa3F3c2d4Dda34C5F1a", 
  "GUSD": "0x3CEDf479F9F0EF103e32B7b6218B316240958463", "CODE": "0x6Def7d22aEA91a3280f42A21DB0196391c2a4b9a" };
var known_token_addresses = { "0xD12BC93Ac5eA2b4Ba99e0ffEd053a53B6d18C7a3": "USDC", "0x54717398c107aB24Ec82bCa3F3c2d4Dda34C5F1a": "FRAX", 
  "0x3CEDf479F9F0EF103e32B7b6218B316240958463": "GUSD", "0x6Def7d22aEA91a3280f42A21DB0196391c2a4b9a": "CODE" };

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
  return await new window.web3.eth.Contract(abi, contract_address);
}

async function loadTokenContract(address) {
  return await new window.web3.eth.Contract(erc20Abi, address);
}

async function purchaseListing(id) {
  const account = await getAccount();
  listing = await window.contract.methods.listedTokens(id).call();

  tokenContract = await loadTokenContract(String(listing['buyToken']));
  var allowance = await tokenContract.methods.allowance(account, contract_address).call();

  var buyTokenName = await getTokenName(String(listing['buyToken']));
  var sellTokenName = await getTokenName(String(listing['sellToken']));

  var amount = prompt("Purchasing Listing ID: " + String(id) + "\n" +
    "Purchasing " + sellTokenName + " for " + String([listing['price']]) + " " + 
    buyTokenName + " each " + "\n" + 
    "Please enter the amount you wish to purchase out of " + 
    String(BigInt(listing['amount'])), "0");

  if (amount == null || BigInt(amount) <= 0)
  {
    return;
  }

  amount = BigInt(amount);

  if (BigInt(allowance) < amount) {
    await tokenContract.methods.approve(contract_address, String(max_uint)).send({from: account});
  }
  else if (amount > BigInt(listing['amount']))
  {
    alert("Please enter a valid amount");
  }
  else{
    await window.contract.methods.purchaseToken(id, String(amount)).send({from: account});
  }
}

async function getTokenName(tokenAddress) {
  if (String(tokenAddress) in known_token_addresses) {
    return known_token_addresses[tokenAddress];
  }
  else {
    return "???";
  }
}

async function appendListingTable(table, seller, amount, price, sellToken, buyToken, listingId) {
  // Create a table element
  var newEntry = document.createElement('tr');
  // Create table's children elements
  var idEntry = document.createElement('td');
  idEntry.innerHTML = listingId;
  var amountEntry = document.createElement('td');
  amountEntry.innerHTML = amount;
  var priceEntry = document.createElement('td');
  priceEntry.innerHTML = price;
  var sellTokenNameEntry = document.createElement('td');
  sellTokenNameEntry.innerHTML = await getTokenName(sellToken);
  var sellTokenEntry = document.createElement('td');
  sellTokenEntry.innerHTML = sellToken;
  var buyTokenNameEntry = document.createElement('td');
  buyTokenNameEntry.innerHTML = await getTokenName(buyToken);
  var buyTokenEntry = document.createElement('td');
  buyTokenEntry.innerHTML = buyToken;
  var buttonEntry = document.createElement('td');
  var purchaseButton = document.createElement('button');
  purchaseButton.onclick=function() { 
    //var amount = prompt("Please enter the amount you wish to purchase", "0");
    //alert(amount);
    purchaseListing(listingId) 
  };
  purchaseButton.className = 'buybtn';
  purchaseButton.innerHTML = 'Buy';
  buttonEntry.appendChild(purchaseButton);
  
  // Append table children to table element
  newEntry.appendChild(idEntry);
  newEntry.appendChild(sellTokenNameEntry);
  newEntry.appendChild(sellTokenEntry);
  newEntry.appendChild(amountEntry);
  newEntry.appendChild(priceEntry);
  newEntry.appendChild(buyTokenNameEntry);
  newEntry.appendChild(buyTokenEntry);
  newEntry.appendChild(buttonEntry);

  // Append table element to master table
  table.appendChild(newEntry);
}

async function getAllListingsToTable(searchString="") {
  listings = await contract.methods.listings().call();
  const table = document.getElementById('table');
  // Clear the table
  table.innerHTML = "";

  for (let i = 0; i < listings; i++){
    x = await contract.methods.listedTokens(i).call();
    if (x['amount'] <= 0)
      continue;
    if (searchString != "" && searchString != x['sellToken'])
      continue;
    appendListingTable(table, x['seller'], x['amount'], x['price'], x['sellToken'], x['buyToken'], i);
  }
}

async function searchToken() {
  token = String(document.getElementById('search_token').value);
  if (String(token) in known_token_names) {
    token = known_token_names[token];
  }
  getAllListingsToTable(token);
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

async function whitelistTokenScreen() {
  location.href = "./whitelist_token.html";
}

async function submitWhitelist() {
  tokenAddress = document.getElementById('token_address').value;
  const account = await getAccount();
  payment = await window.contract.methods.registrationFee().call();
  await window.contract.methods.whiteListToken(tokenAddress).send({from: account, value: payment});
}

async function submitListing() {
    asset = document.getElementById('asset').value;
    amount = document.getElementById('amount').value;
    payment = document.getElementById('payment').value;
    price = document.getElementById('price').value;

    // Remap the value of asset if chosen dropdown string
    if (String(asset) in known_token_names) {
      asset = known_token_names[asset];
    }

    if (String(payment) in known_token_names) {
      payment = known_token_names[payment];
    }

    const account = await getAccount();
    tokenContract = await loadTokenContract(String(asset));

    var allowance = await tokenContract.methods.allowance(account, contract_address).call();
    if (BigInt(allowance) < BigInt(amount)) {
      await tokenContract.methods.approve(contract_address, String(max_uint)).send({from: account});
    }
    else
    {
      await window.contract.methods.listToken(String(asset), String(payment), amount, price).send({from: account});
    }
}

async function submitListingCancellation() {
  id = document.getElementById('listing_id').value;
  const account = await getAccount();
  await window.contract.methods.cancelListing(id).send({from: account});
}

load();
