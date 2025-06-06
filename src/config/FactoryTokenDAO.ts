export const FactoryTokenDAO = "0x2569CDdA22A02483570953DAf6C6244A13c7c336";

export const FactoryTokenDAOABI = [
  {
    inputs: [
      { internalType: "address", name: "_idrxTokenAddress", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      { indexed: false, internalType: "string", name: "name", type: "string" },
      {
        indexed: false,
        internalType: "string",
        name: "ticker",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
    ],
    name: "TokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    name: "TokensBought",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "fromToken", type: "address" },
      { internalType: "address", name: "toToken", type: "address" },
      { internalType: "uint256", name: "amountIn", type: "uint256" },
    ],
    name: "calculateSwap",
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "communityTokenDetails",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
      { internalType: "uint8", name: "decimals", type: "uint8" },
      { internalType: "uint256", name: "totalSupply", type: "uint256" },
      { internalType: "address", name: "tokenAddress", type: "address" },
      { internalType: "address", name: "creator", type: "address" },
      { internalType: "uint256", name: "createdAt", type: "uint256" },
      { internalType: "uint256", name: "teamAllocation", type: "uint256" },
      { internalType: "uint256", name: "communityAllocation", type: "uint256" },
      { internalType: "uint256", name: "publicAllocation", type: "uint256" },
      { internalType: "bool", name: "distributed", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "communityTokens",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
      { internalType: "uint8", name: "decimals", type: "uint8" },
      { internalType: "uint256", name: "totalSupply", type: "uint256" },
      { internalType: "address", name: "tokenAddress", type: "address" },
      { internalType: "address", name: "creator", type: "address" },
      { internalType: "uint256", name: "createdAt", type: "uint256" },
      { internalType: "uint256", name: "teamAllocation", type: "uint256" },
      { internalType: "uint256", name: "communityAllocation", type: "uint256" },
      { internalType: "uint256", name: "publicAllocation", type: "uint256" },
      { internalType: "bool", name: "distributed", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
      { internalType: "uint8", name: "decimals_", type: "uint8" },
      { internalType: "address", name: "creator", type: "address" },
    ],
    name: "createCommunityToken",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "daoLaunchpad",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTokens",
    outputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "ticker", type: "string" },
          { internalType: "string", name: "iconURL", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "uint256", name: "createdAt", type: "uint256" },
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "uint256", name: "totalSupply", type: "uint256" },
          { internalType: "address", name: "tokenAddress", type: "address" },
        ],
        internalType: "struct FactoryTokenDAO.TokenInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_tokenAddress", type: "address" },
    ],
    name: "getTokenByAddress",
    outputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "ticker", type: "string" },
          { internalType: "string", name: "iconURL", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "uint256", name: "createdAt", type: "uint256" },
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "uint256", name: "totalSupply", type: "uint256" },
          { internalType: "address", name: "tokenAddress", type: "address" },
        ],
        internalType: "struct FactoryTokenDAO.TokenInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }],
    name: "getTokenByIndex",
    outputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "ticker", type: "string" },
          { internalType: "string", name: "iconURL", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "uint256", name: "createdAt", type: "uint256" },
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "uint256", name: "totalSupply", type: "uint256" },
          { internalType: "address", name: "tokenAddress", type: "address" },
        ],
        internalType: "struct FactoryTokenDAO.TokenInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "idrx",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_daoLaunchpad", type: "address" },
    ],
    name: "setDAOLaunchpad",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "fromToken", type: "address" },
      { internalType: "address", name: "toToken", type: "address" },
      { internalType: "uint256", name: "amountIn", type: "uint256" },
    ],
    name: "swapToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "tokenDetails",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "ticker", type: "string" },
      { internalType: "string", name: "iconURL", type: "string" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "uint256", name: "createdAt", type: "uint256" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "totalSupply", type: "uint256" },
      { internalType: "address", name: "tokenAddress", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "tokens",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "ticker", type: "string" },
      { internalType: "string", name: "iconURL", type: "string" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "uint256", name: "createdAt", type: "uint256" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "totalSupply", type: "uint256" },
      { internalType: "address", name: "tokenAddress", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
