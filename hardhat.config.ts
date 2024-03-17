import "@nomicfoundation/hardhat-toolbox";

import "tsconfig-paths/register";
import "hardhat-watcher";
import "solidity-docgen";
import "hardhat-deploy";

import "./tasks/index";

import { HardhatUserConfig } from "hardhat/config";
import { DEPLOYER_KEY, GAS_PRICE, NODE, GAS_REPORTER, BLASTSCAN_API_KEY } from "config";

const { GAS_PRICE_NODE, LOGGING } = NODE;
const { FORK_ENABLED } = NODE.FORK;

function typedNamedAccounts<T>(namedAccounts: { [key in string]: T }) {
  return namedAccounts;
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  typechain: {
    outDir: "types/typechain-types",
  },
  networks: {
    hardhat: {
      gasPrice: GAS_PRICE_NODE,
      loggingEnabled: LOGGING,
      forking: {
        url: `https://rpc.ankr.com/blast`,
        enabled: FORK_ENABLED,
      },
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    blastSepolia: {
      url: "https://blast-sepolia.blockpi.network/v1/rpc/public", // https://sepolia.blast.io
      accounts: [DEPLOYER_KEY || ""],
      chainId: 168587773,
      gasPrice: 5000000000,
    },
    blastMainnet: {
      url: "https://rpc.ankr.com/blast",
      accounts: [DEPLOYER_KEY || ""],
      chainId: 81457,
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    apiKey: {
      blastSepolia: "blastSepolia",
      blastMainnet: BLASTSCAN_API_KEY,
    },
    customChains: [
      {
        network: "blastSepolia",
        chainId: 168587773,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/testnet/evm/168587773/etherscan",
          browserURL: "https://testnet.blastscan.io",
        },
      },
      {
        network: "blastMainnet",
        chainId: 81457,
        urls: {
          apiURL: "https://api.blastscan.io/api",
          browserURL: "https://blastscan.io",
        },
      },
    ],
  },
  namedAccounts: typedNamedAccounts({
    deployer: 0,
    admin: "0x0d0D5Ff3cFeF8B7B2b1cAC6B6C27Fd0846c09361",
    minter: "0x381c031baa5995d0cc52386508050ac947780815",
    operator: "0x381c031baa5995d0cc52386508050ac947780815",
  }),
  docgen: {
    pages: "files",
  },
  watcher: {
    test: {
      tasks: [{ command: "test", params: { testFiles: ["{path}"] } }],
      files: ["./test/**/*"],
      verbose: true,
    },
  },
  gasReporter: {
    enabled: GAS_REPORTER.ENABLED,
    coinmarketcap: GAS_REPORTER.COINMARKETCAP,
    currency: GAS_REPORTER.CURRENCY,
    token: GAS_REPORTER.TOKEN,
    gasPrice: GAS_PRICE,
  },
};

export default config;
